import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag, Package, TrendingUp, DollarSign, Star, MessageSquare } from "lucide-react";

const Dashboard = () => {
  // Mock data - Em produção viria da API
  const stats = {
    buyer: {
      totalPurchases: 12,
      totalSpent: 3450.00,
      activePurchases: 2,
    },
    seller: {
      totalSales: 45,
      totalEarned: 15670.00,
      activeListings: 8,
      rating: 4.9,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">Meu Dashboard</h1>

        <Tabs defaultValue="buyer" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="buyer">Comprador</TabsTrigger>
            <TabsTrigger value="seller">Vendedor</TabsTrigger>
          </TabsList>

          {/* Buyer Dashboard */}
          <TabsContent value="buyer" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total de Compras</p>
                    <p className="text-3xl font-bold">{stats.buyer.totalPurchases}</p>
                  </div>
                  <ShoppingBag className="h-12 w-12 text-primary/30" />
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Gasto</p>
                    <p className="text-3xl font-bold">R$ {stats.buyer.totalSpent.toFixed(2)}</p>
                  </div>
                  <DollarSign className="h-12 w-12 text-primary/30" />
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Compras Ativas</p>
                    <p className="text-3xl font-bold">{stats.buyer.activePurchases}</p>
                  </div>
                  <Package className="h-12 w-12 text-primary/30" />
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Compras Recentes</h2>
              <p className="text-muted-foreground">
                Nenhuma compra recente. Explore nosso catálogo!
              </p>
            </Card>
          </TabsContent>

          {/* Seller Dashboard */}
          <TabsContent value="seller" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-4">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total de Vendas</p>
                    <p className="text-3xl font-bold">{stats.seller.totalSales}</p>
                  </div>
                  <TrendingUp className="h-12 w-12 text-success/30" />
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Ganho</p>
                    <p className="text-3xl font-bold">R$ {stats.seller.totalEarned.toFixed(2)}</p>
                  </div>
                  <DollarSign className="h-12 w-12 text-success/30" />
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Anúncios Ativos</p>
                    <p className="text-3xl font-bold">{stats.seller.activeListings}</p>
                  </div>
                  <Package className="h-12 w-12 text-primary/30" />
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avaliação</p>
                    <p className="text-3xl font-bold">{stats.seller.rating}</p>
                  </div>
                  <Star className="h-12 w-12 text-warning/30" />
                </div>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h2 className="mb-4 text-xl font-semibold">Vendas Recentes</h2>
                <p className="text-muted-foreground">
                  Suas vendas aparecerão aqui
                </p>
              </Card>

              <Card className="p-6">
                <h2 className="mb-4 flex items-center text-xl font-semibold">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Mensagens Recentes
                </h2>
                <p className="text-muted-foreground">
                  Nenhuma mensagem nova
                </p>
              </Card>
            </div>

            <Card className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Suas Avaliações</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Credibilidade</span>
                      <span className="text-sm font-semibold">4.9/5.0</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[98%] rounded-full bg-success" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Agilidade</span>
                      <span className="text-sm font-semibold">4.8/5.0</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[96%] rounded-full bg-success" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Suporte</span>
                      <span className="text-sm font-semibold">5.0/5.0</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-full rounded-full bg-success" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
