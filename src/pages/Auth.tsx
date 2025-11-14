import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [accountType, setAccountType] = useState<"buyer" | "seller">("buyer");

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("signup-email") as string;
    const password = formData.get("signup-password") as string;
    const fullName = formData.get("full-name") as string;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: { 
          full_name: fullName,
          account_type: accountType 
        }
      }
    });

    if (error) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Conta criada!", description: "Você já pode fazer login" });
      navigate("/");
    }
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("login-email") as string;
    const password = formData.get("login-password") as string;

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Login realizado!" });
      navigate("/");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Bem-vindo ao GameMarket</CardTitle>
          <CardDescription>Entre ou crie sua conta para continuar</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Entrar</TabsTrigger>
              <TabsTrigger value="signup">Cadastrar</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="login-email">Email</Label>
                  <Input id="login-email" name="login-email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="login-password">Senha</Label>
                  <Input id="login-password" name="login-password" type="password" required />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  Entrar
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div>
                  <Label htmlFor="full-name">Nome Completo</Label>
                  <Input id="full-name" name="full-name" required />
                </div>
                <div>
                  <Label htmlFor="signup-email">Email</Label>
                  <Input id="signup-email" name="signup-email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="signup-password">Senha</Label>
                  <Input id="signup-password" name="signup-password" type="password" required minLength={6} />
                </div>
                <div>
                  <Label className="mb-3 block">Tipo de Conta</Label>
                  <RadioGroup value={accountType} onValueChange={(value) => setAccountType(value as "buyer" | "seller")}>
                    <div className="flex items-center space-x-2 rounded-lg border border-border p-3 hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="buyer" id="buyer" />
                      <Label htmlFor="buyer" className="flex-1 cursor-pointer">
                        <div className="font-medium">Comprador</div>
                        <div className="text-xs text-muted-foreground">Apenas comprar itens</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg border border-border p-3 hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="seller" id="seller" />
                      <Label htmlFor="seller" className="flex-1 cursor-pointer">
                        <div className="font-medium">Vendedor</div>
                        <div className="text-xs text-muted-foreground">Criar anúncios e vender</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  Criar Conta
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
