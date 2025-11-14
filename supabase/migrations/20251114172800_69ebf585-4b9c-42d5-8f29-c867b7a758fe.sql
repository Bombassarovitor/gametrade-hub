-- Create listing reviews table
CREATE TABLE public.listing_reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  listing_id UUID NOT NULL REFERENCES public.listings(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create seller reviews table
CREATE TABLE public.seller_reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  seller_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  reviewer_id UUID NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(seller_id, reviewer_id)
);

-- Enable RLS
ALTER TABLE public.listing_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seller_reviews ENABLE ROW LEVEL SECURITY;

-- RLS Policies for listing_reviews
CREATE POLICY "Anyone can view listing reviews"
ON public.listing_reviews
FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can create listing reviews"
ON public.listing_reviews
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own listing reviews"
ON public.listing_reviews
FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own listing reviews"
ON public.listing_reviews
FOR DELETE
USING (auth.uid() = user_id);

-- RLS Policies for seller_reviews
CREATE POLICY "Anyone can view seller reviews"
ON public.seller_reviews
FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can create seller reviews"
ON public.seller_reviews
FOR INSERT
WITH CHECK (auth.uid() = reviewer_id AND auth.uid() != seller_id);

CREATE POLICY "Users can update their own seller reviews"
ON public.seller_reviews
FOR UPDATE
USING (auth.uid() = reviewer_id);

CREATE POLICY "Users can delete their own seller reviews"
ON public.seller_reviews
FOR DELETE
USING (auth.uid() = reviewer_id);

-- Triggers for updated_at
CREATE TRIGGER update_listing_reviews_updated_at
BEFORE UPDATE ON public.listing_reviews
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_seller_reviews_updated_at
BEFORE UPDATE ON public.seller_reviews
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();