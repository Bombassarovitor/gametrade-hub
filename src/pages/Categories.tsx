import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Trophy, Sword, Shield, Coins, Users } from "lucide-react";

const Categories = () => {
  const categories = [
    { name: "League of Legends", icon: Trophy, itemCount: 2500, color: "text-primary", href: "/category/league-of-legends" },
    { name: "Valorant", icon: Sword, itemCount: 1800, color: "text-accent", href: "/category/valorant" },
    { name: "CS2", icon: Shield, itemCount: 3200, color: "text-warning", href: "/category/cs2" },
    { name: "Free Fire", icon: Gamepad2, itemCount: 4100, color: "text-success", href: "/category/free-fire" },
    { name: "Genshin Impact", icon: Coins, itemCount: 1500, color: "text-destructive", href: "/category/genshin" },
    { name: "Mobile Legends", icon: Users, itemCount: 2100, color: "text-primary", href: "/category/mobile-legends" },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Todas as Categorias
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore nossos jogos mais populares
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} to={category.href}>
              <Card className="hover:shadow-glow transition-all cursor-pointer group">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-lg bg-muted group-hover:scale-110 transition-transform`}>
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.itemCount} itens disponíveis
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
