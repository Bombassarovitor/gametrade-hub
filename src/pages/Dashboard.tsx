import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { ShoppingBag, Package, DollarSign, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Acesso negado",
          description: "Você precisa estar logado para acessar o dashboard",
          variant: "destructive"
        });
        navigate("/auth");
        return;
      }

      setUser(user);

      // Buscar perfil
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      setProfile(profileData);

      // Se for vendedor, buscar anúncios
      if (user.user_metadata?.account_type === 'seller') {
        const { data: listingsData } = await supabase
          .from('listings')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        setListings(listingsData || []);
      }

      setLoading(false);
    };

    checkUser();
  }, [navigate, toast]);

  const accountType = user?.user_metadata?.account_type || 'buyer';

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Meu Dashboard</h1>
          <p className="text-muted-foreground">
            Bem-vindo, {profile?.full_name || user?.email}
          </p>
          <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-semibold">
            {accountType === 'seller' ? 'Vendedor' : 'Comprador'}
          </span>
        </div>

        {accountType === 'buyer' ? (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total de Compras</p>
                    <p className="text-3xl font-bold">0</p>
                  </div>
                  <ShoppingBag className="h-12 w-12 text-primary/30" />
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Gasto</p>
                    <p className="text-3xl font-bold">R$ 0,00</p>
                  </div>
                  <DollarSign className="h-12 w-12 text-primary/30" />
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Compras Ativas</p>
                    <p className="text-3xl font-bold">0</p>
                  </div>
                  <Package className="h-12 w-12 text-primary/30" />
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Minhas Compras</h2>
              <div className="text-center py-8">
                <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                <p className="text-muted-foreground">
                  Você ainda não fez nenhuma compra. Explore nosso catálogo!
                </p>
                <Button className="mt-4" onClick={() => navigate("/categories")}>
                  Ver Anúncios
                </Button>
              </div>
            </Card>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Anúncios Ativos</p>
                    <p className="text-3xl font-bold">{listings.filter(l => l.status === 'active').length}</p>
                  </div>
                  <Package className="h-12 w-12 text-success/30" />
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total de Vendas</p>
                    <p className="text-3xl font-bold">0</p>
                  </div>
                  <ShoppingBag className="h-12 w-12 text-success/30" />
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Ganho</p>
                    <p className="text-3xl font-bold">R$ 0,00</p>
                  </div>
                  <DollarSign className="h-12 w-12 text-success/30" />
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Meus Anúncios</h2>
                <Button onClick={() => navigate("/listings/create")}>
                  <Plus className="mr-2 h-4 w-4" />
                  Novo Anúncio
                </Button>
              </div>
              
              {listings.length > 0 ? (
                <div className="space-y-4">
                  {listings.map((listing) => (
                    <div key={listing.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                      <div>
                        <h3 className="font-semibold">{listing.title}</h3>
                        <p className="text-sm text-muted-foreground">{listing.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">R$ {listing.price}</p>
                        <span className={`text-xs ${listing.status === 'active' ? 'text-success' : 'text-muted-foreground'}`}>
                          {listing.status === 'active' ? 'Ativo' : 'Inativo'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Package className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                  <p className="text-muted-foreground mb-4">
                    Você ainda não criou nenhum anúncio
                  </p>
                  <Button onClick={() => navigate("/listings/create")}>
                    Criar Primeiro Anúncio
                  </Button>
                </div>
              )}
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
