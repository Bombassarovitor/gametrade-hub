import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { supabase } from "@/integrations/supabase/client";
import {
  Gamepad2,
  Trophy,
  Sword,
  Shield,
  Coins,
  Users,
  TrendingUp,
  Lock,
  Zap,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const fetchListings = async () => {
      const { data, error } = await supabase
        .from('listings')
        .select(`
          *,
          profiles:user_id (
            full_name,
            avatar_url
          )
        `)
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(8);

      if (!error && data) {
        setListings(data);
      }
      setLoading(false);
    };

    fetchListings();
  }, []);

  const popularCategories = [
    { name: "League of Legends", icon: Trophy, href: "/categories" },
    { name: "Valorant", icon: Sword, href: "/categories" },
    { name: "CS2", icon: Shield, href: "/categories" },
    { name: "Free Fire", icon: Gamepad2, href: "/categories" },
    { name: "Genshin Impact", icon: Coins, href: "/categories" },
    { name: "Mobile Legends", icon: Users, href: "/categories" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 bg-gradient-primary bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              Compre e Venda Itens Digitais com Segurança
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              O marketplace mais confiável para jogadores. Transações seguras, vendedores verificados e suporte dedicado.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/categories">
                <Button size="lg" className="w-full sm:w-auto">
                  Explorar Produtos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Começar a Vender
                </Button>
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">100% Seguro</h3>
              <p className="text-muted-foreground">
                Sistema de pagamento intermediado protege compradores e vendedores
              </p>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Entrega Rápida</h3>
              <p className="text-muted-foreground">
                Itens digitais entregues instantaneamente após confirmação
              </p>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Suporte 24/7</h3>
              <p className="text-muted-foreground">
                Equipe dedicada pronta para ajudar em qualquer momento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Anúncios Recentes</h2>
              <p className="mt-2 text-muted-foreground">
                {listings.length > 0 
                  ? "Confira os anúncios mais recentes" 
                  : "Seja o primeiro a criar um anúncio!"}
              </p>
            </div>
            {listings.length > 0 && (
              <Link to="/categories">
                <Button variant="ghost">
                  Ver Todos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
          ) : listings.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {listings.map((listing) => (
                <ProductCard
                  key={listing.id}
                  id={listing.id}
                  title={listing.title}
                  price={listing.price}
                  image={listing.image_urls?.[0] || "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=450&fit=crop"}
                  seller={{
                    name: listing.profiles?.full_name || "Vendedor",
                    rating: 5.0,
                    verified: true,
                  }}
                  category={listing.category}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-card p-12 text-center">
              <TrendingUp className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
              <h3 className="mb-2 text-xl font-bold">Nenhum anúncio ainda</h3>
              <p className="mb-6 text-muted-foreground">
                Seja o primeiro vendedor da plataforma e comece a ganhar dinheiro!
              </p>
              <Link to="/auth">
                <Button>Criar Primeiro Anúncio</Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">Categorias Populares</h2>
            <p className="mt-2 text-muted-foreground">
              Encontre os melhores itens dos jogos mais jogados
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularCategories.map((category) => (
              <Link key={category.name} to={category.href}>
                <div className="group flex items-center gap-4 rounded-xl bg-card p-6 shadow-md transition-all hover:shadow-glow">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 transition-transform group-hover:scale-110">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">Explorar itens</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
