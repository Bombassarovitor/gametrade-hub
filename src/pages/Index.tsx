import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
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
  // Mock data - Em produção, isso viria de uma API
  const featuredProducts = [
    {
      id: "1",
      title: "Conta League of Legends - Gold 1 - 150+ Skins",
      price: 450.00,
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=450&fit=crop",
      seller: {
        name: "ProGamer123",
        rating: 4.9,
        verified: true,
      },
      category: "League of Legends",
    },
    {
      id: "2",
      title: "Valorant - Account Immortal 2 - All Agents",
      price: 890.00,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop",
      seller: {
        name: "EliteTrader",
        rating: 5.0,
        verified: true,
      },
      category: "Valorant",
    },
    {
      id: "3",
      title: "CS2 - 5000 Horas - Global Elite - Skins Raras",
      price: 1250.00,
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=450&fit=crop",
      seller: {
        name: "CSMaster",
        rating: 4.8,
        verified: true,
      },
      category: "Counter Strike 2",
    },
    {
      id: "4",
      title: "Genshin Impact - AR 58 - C6 5 Stars",
      price: 680.00,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop",
      seller: {
        name: "GenshinPro",
        rating: 4.9,
        verified: true,
      },
      category: "Genshin Impact",
    },
  ];

  const popularCategories = [
    { name: "League of Legends", icon: Trophy, itemCount: 2500, href: "/category/league-of-legends" },
    { name: "Valorant", icon: Sword, itemCount: 1800, href: "/category/valorant" },
    { name: "CS2", icon: Shield, itemCount: 3200, href: "/category/cs2" },
    { name: "Free Fire", icon: Gamepad2, itemCount: 4100, href: "/category/free-fire" },
    { name: "Genshin Impact", icon: Coins, itemCount: 1500, href: "/category/genshin" },
    { name: "Mobile Legends", icon: Users, itemCount: 2100, href: "/category/mobile-legends" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />

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
              <Link to="/how-to-sell">
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
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">100% Seguro</h3>
              <p className="text-sm text-muted-foreground">
                Proteção total do comprador com sistema de garantia
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Entrega Rápida</h3>
              <p className="text-sm text-muted-foreground">
                Receba seus itens em minutos após a confirmação
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Melhores Preços</h3>
              <p className="text-sm text-muted-foreground">
                Taxas competitivas e transparentes para vendedores
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Categorias Populares</h2>
            <Link to="/categories">
              <Button variant="ghost">
                Ver Todas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {popularCategories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Ofertas em Destaque</h2>
            <Link to="/best-sellers">
              <Button variant="ghost">
                Ver Mais Vendidos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-primary p-8 text-center text-primary-foreground md:p-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Pronto para Começar a Vender?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Alcance milhares de jogadores e monetize seus itens digitais
            </p>
            <Link to="/how-to-sell">
              <Button size="lg" variant="secondary">
                Criar Conta de Vendedor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
