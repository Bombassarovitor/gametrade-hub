#!/usr/bin/env bash
set -euo pipefail

BRANCH="feature/supabase-integration"
ROOT_DIR="$(pwd)"

echo "Fetching latest from origin..."
git fetch origin

# Ensure branch exists remotely or locally
if ! git rev-parse --verify --quiet "${BRANCH}" >/dev/null; then
  echo "Branch ${BRANCH} does not exist locally. Attempting to check out from origin/${BRANCH}..."
  if git ls-remote --exit-code --heads origin "${BRANCH}" >/dev/null 2>&1; then
    git checkout -b "${BRANCH}" "origin/${BRANCH}"
  else
    echo "Branch ${BRANCH} not found on origin either. Aborting."
    exit 1
  fi
else
  echo "Checking out existing branch ${BRANCH}..."
  git checkout "${BRANCH}"
  # Ensure up-to-date with origin
  if git ls-remote --exit-code --heads origin "${BRANCH}" >/dev/null 2>&1; then
    git pull --ff-only origin "${BRANCH}" || true
  fi
fi

# Prevent running if working tree has uncommitted changes
if ! git diff-index --quiet HEAD --; then
  echo "You have uncommitted changes in the working tree. Please commit or stash them before running this script."
  git status --porcelain
  exit 1
fi

echo "Creating directories..."
mkdir -p sql
mkdir -p "edge-functions/onboard-seller"
mkdir -p "edge-functions/create-payment-intent"
mkdir -p "edge-functions/create-transfer"
mkdir -p "edge-functions/webhook"

echo "Writing sql/schema.sql..."
cat > sql/schema.sql <<'SQL'
-- Schema for gametrade-hub (profiles, listings, listings_images, orders, payments)
-- Run in Supabase SQL editor. No secrets required.
BEGIN;

-- profiles table (public)
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text UNIQUE,
  full_name text,
  avatar_url text,
  bio text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- listings table
CREATE TABLE IF NOT EXISTS public.listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  price numeric(10,2) NOT NULL,
  currency text NOT NULL DEFAULT 'USD',
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true
);

CREATE INDEX IF NOT EXISTS idx_listings_owner ON public.listings(owner_id);

-- listings_images table (multiple images per listing)
CREATE TABLE IF NOT EXISTS public.listings_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id uuid NOT NULL REFERENCES public.listings(id) ON DELETE CASCADE,
  storage_path text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_listings_images_listing ON public.listings_images(listing_id);

-- orders table (simple)
CREATE TABLE IF NOT EXISTS public.orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  buyer_id uuid REFERENCES public.profiles(id),
  listing_id uuid REFERENCES public.listings(id),
  amount numeric(10,2),
  currency text DEFAULT 'USD',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- payments ledger (minimal)
CREATE TABLE IF NOT EXISTS public.payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES public.orders(id),
  provider text,
  provider_payment_id text,
  amount numeric(10,2),
  currency text,
  status text,
  raw_payload jsonb,
  created_at timestamptz DEFAULT now()
);

-- RLS: enable on user-owned tables and policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.listings_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- helper function to check admin claim (uses auth.jwt())
CREATE OR REPLACE FUNCTION public.is_admin() RETURNS boolean LANGUAGE sql STABLE AS $$
  SELECT (auth.jwt() ->> 'is_admin')::boolean IS TRUE;
$$;
REVOKE EXECUTE ON FUNCTION public.is_admin() FROM anon, authenticated;

-- Profiles: allow users to select/insert/update their own profile
CREATE POLICY profiles_select ON public.profiles
  FOR SELECT TO authenticated USING (id = (SELECT auth.uid()));

CREATE POLICY profiles_upsert ON public.profiles
  FOR ALL TO authenticated USING (id = (SELECT auth.uid())) WITH CHECK (id = (SELECT auth.uid()));

-- Listings: owners can CRUD; admins can do all
CREATE POLICY listings_owner_select ON public.listings
  FOR SELECT TO authenticated USING (owner_id = (SELECT auth.uid()) OR public.is_admin());

CREATE POLICY listings_owner_insert ON public.listings
  FOR INSERT TO authenticated WITH CHECK (owner_id = (SELECT auth.uid()));

CREATE POLICY listings_owner_update ON public.listings
  FOR UPDATE TO authenticated USING (owner_id = (SELECT auth.uid()) OR public.is_admin()) WITH CHECK (owner_id = (SELECT auth.uid()) OR public.is_admin());

CREATE POLICY listings_owner_delete ON public.listings
  FOR DELETE TO authenticated USING (owner_id = (SELECT auth.uid()) OR public.is_admin());

-- Images: allow owner (via join) and admins
CREATE POLICY listings_images_select ON public.listings_images
  FOR SELECT TO authenticated USING (
    EXISTS (
      SELECT 1 FROM public.listings l WHERE l.id = listing_id AND (l.owner_id = (SELECT auth.uid()) OR public.is_admin())
    )
  );

CREATE POLICY listings_images_insert ON public.listings_images
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM public.listings l WHERE l.id = listing_id AND l.owner_id = (SELECT auth.uid()))
  );

CREATE POLICY listings_images_delete ON public.listings_images
  FOR DELETE TO authenticated USING (
    EXISTS (SELECT 1 FROM public.listings l WHERE l.id = listing_id AND (l.owner_id = (SELECT auth.uid()) OR public.is_admin()))
  );

-- Orders/payments: buyer or involved parties see
CREATE POLICY orders_select ON public.orders
  FOR SELECT TO authenticated USING (
    buyer_id = (SELECT auth.uid()) OR EXISTS (SELECT 1 FROM public.listings l WHERE l.id = listing_id AND l.owner_id = (SELECT auth.uid())) OR public.is_admin()
  );

CREATE POLICY orders_insert ON public.orders
  FOR INSERT TO authenticated WITH CHECK (buyer_id = (SELECT auth.uid()));

CREATE POLICY payments_select ON public.payments
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM public.orders o WHERE o.id = order_id AND (o.buyer_id = (SELECT auth.uid()) OR EXISTS (SELECT 1 FROM public.listings l WHERE l.id = o.listing_id AND l.owner_id = (SELECT auth.uid())))) OR public.is_admin()
  );

COMMIT;
SQL

echo "Writing edge-functions/onboard-seller/index.ts..."
cat > edge-functions/onboard-seller/index.ts <<'TS'
 // Edge Function: onboard-seller
 // Creates a Stripe Connect account link for onboarding a seller.
 // Expects JSON body: { country: 'US', email: 'seller@example.com', refresh_url, return_url }
 // Requires STRIPE_SECRET and SUPABASE_SERVICE_ROLE_KEY set as secrets.
 console.info('onboard-seller function starting');
 Deno.serve(async (req: Request) => {
   try {
     const body = await req.json();
     const stripeSecret = Deno.env.get('STRIPE_SECRET');
     if (!stripeSecret) return new Response(JSON.stringify({ error: 'missing stripe secret' }), { status: 500 });
 
     const resp = await fetch('https://api.stripe.com/v1/accounts', {
       method: 'POST',
       headers: { Authorization: `Bearer ${stripeSecret}`, 'Content-Type': 'application/x-www-form-urlencoded' },
       body: new URLSearchParams({
         type: 'express',
         country: body.country || 'US',
         email: body.email || ''
       })
     });
     const account = await resp.json();
     // create account link
     const linkResp = await fetch('https://api.stripe.com/v1/account_links', {
       method: 'POST',
       headers: { Authorization: `Bearer ${stripeSecret}`, 'Content-Type': 'application/x-www-form-urlencoded' },
       body: new URLSearchParams({
         account: account.id,
         refresh_url: body.refresh_url,
         return_url: body.return_url,
         type: 'account_onboarding'
       })
     });
     const link = await linkResp.json();
     return new Response(JSON.stringify({ account, link }), { headers: { 'Content-Type': 'application/json' } });
   } catch (err) {
     console.error(err);
     return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
   }
 });
TS

echo "Writing edge-functions/create-payment-intent/index.ts..."
cat > edge-functions/create-payment-intent/index.ts <<'TS'
 // Edge Function: create-payment-intent
 // Creates a Stripe payment intent for a listing purchase.
 console.info('create-payment-intent starting');
 Deno.serve(async (req: Request) => {
   try {
     const stripeSecret = Deno.env.get('STRIPE_SECRET');
     if (!stripeSecret) return new Response(JSON.stringify({ error: 'missing stripe secret' }), { status: 500 });
     const body = await req.json();
     const { amount, currency = 'USD', metadata = {} } = body;
     const resp = await fetch('https://api.stripe.com/v1/payment_intents', {
       method: 'POST',
       headers: { Authorization: `Bearer ${stripeSecret}`, 'Content-Type': 'application/x-www-form-urlencoded' },
       body: new URLSearchParams({
         amount: String(Math.round(Number(amount) * 100)),
         currency,
         'payment_method_types[]': 'card',
         metadata: JSON.stringify(metadata)
       })
     });
     const pi = await resp.json();
     return new Response(JSON.stringify(pi), { headers: { 'Content-Type': 'application/json' } });
   } catch (err) {
     console.error(err);
     return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
   }
 });
TS

echo "Writing edge-functions/create-transfer/index.ts..."
cat > edge-functions/create-transfer/index.ts <<'TS'
 // Edge Function: create-transfer
 // Creates a transfer to a connected account (Stripe Connect)
 console.info('create-transfer starting');
 Deno.serve(async (req: Request) => {
   try {
     const stripeSecret = Deno.env.get('STRIPE_SECRET');
     if (!stripeSecret) return new Response(JSON.stringify({ error: 'missing stripe secret' }), { status: 500 });
     const body = await req.json();
     const { amount, currency = 'USD', destination } = body;
     const resp = await fetch('https://api.stripe.com/v1/transfers', {
       method: 'POST',
       headers: { Authorization: `Bearer ${stripeSecret}`, 'Content-Type': 'application/x-www-form-urlencoded' },
       body: new URLSearchParams({
         amount: String(Math.round(Number(amount) * 100)),
         currency,
         destination
       })
     });
     const tr = await resp.json();
     return new Response(JSON.stringify(tr), { headers: { 'Content-Type': 'application/json' } });
   } catch (err) {
     console.error(err);
     return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
   }
 });
TS

echo "Writing edge-functions/webhook/index.ts..."
cat > edge-functions/webhook/index.ts <<'TS'
 // Edge Function: webhook
 // Receives Stripe webhook events. Verifies signature using STRIPE_WEBHOOK_SECRET
 console.info('webhook function starting');
 Deno.serve(async (req: Request) => {
   const secret = Deno.env.get('STRIPE_WEBHOOK_SECRET');
   const payload = await req.text();
   // Note: stripe signature verification requires stripe library; here we do basic pass-through
   // For production use the official stripe SDK to verify signatures.
   try {
     const event = JSON.parse(payload);
     console.log('received event', event.type);
     // TODO: handle charge.succeeded, payout, transfer, etc.
     return new Response(JSON.stringify({ received: true }), { status: 200 });
   } catch (err) {
     console.error('webhook parse error', err);
     return new Response(JSON.stringify({ error: 'invalid payload' }), { status: 400 });
   }
 });
TS

echo "Writing .env.example..."
cat > .env.example <<'ENV'
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
STRIPE_SECRET=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
ENV

echo "Writing README-changes.txt..."
cat > README-changes.txt <<'TXT'
Instructions after applying patch:

1) Apply SQL
 - Open Supabase Dashboard -> SQL editor -> run sql/schema.sql

2) Create Storage bucket
 - Create bucket named: public-listings
 - Make it public or configure RLS and use signed URLs for uploads

3) Deploy Edge Functions
 - Install supabase CLI and login
 - Run: supabase functions deploy onboard-seller --project-ref YOUR_PROJECT_REF
 - Repeat for create-payment-intent, webhook, create-transfer
 - Set secrets via: supabase secrets set STRIPE_SECRET=... STRIPE_WEBHOOK_SECRET=... --project-ref YOUR_PROJECT_REF

4) Git commands to apply patch and create PR:
 - Branch updated: feature/supabase-integration
 - Run: git status && git diff --staged
 - When ready: git push --set-upstream origin feature/supabase-integration

5) Testing Edge Functions
 - Example curl:
   curl -X POST https://<edge-fn-url>/onboard-seller -H "Content-Type: application/json" -d '{"country":"US","email":"seller@example.com","refresh_url":"https://example.com/refresh","return_url":"https://example.com/return"}'

Security note: Do not commit secrets. Set them in Supabase secrets or CI.
TXT

echo "Staging files..."
git add sql/schema.sql edge-functions/onboard-seller/index.ts edge-functions/create-payment-intent/index.ts edge-functions/create-transfer/index.ts edge-functions/webhook/index.ts .env.example README-changes.txt

# Check if there are staged changes to commit
if git diff --cached --quiet; then
  echo "No changes to commit. Branch remains unchanged."
  exit 0
fi

echo "Committing staged changes..."
git commit -m "chore(supabase): add/update Supabase schema and Edge Functions"

echo "Done. Files written and committed to branch ${BRANCH}."
echo "Please review with 'git show --name-only HEAD' or 'git diff origin/${BRANCH}...${BRANCH}'"
echo "To push to remote run:"
echo "  git push --set-upstream origin ${BRANCH}"