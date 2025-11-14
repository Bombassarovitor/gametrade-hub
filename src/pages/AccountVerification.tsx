import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";

const AccountVerification = () => {
  const [accountInfo, setAccountInfo] = useState("");

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <Shield className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Verificador de Contas
          </h1>
          <p className="text-lg text-muted-foreground">
            Verifique a autenticidade e segurança de contas antes de comprar
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Verificar Conta</CardTitle>
            <CardDescription>
              Cole o link ou informações da conta para verificação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="account">Informações da Conta</Label>
                <Input
                  id="account"
                  placeholder="Cole aqui o ID, link ou nome da conta"
                  value={accountInfo}
                  onChange={(e) => setAccountInfo(e.target.value)}
                />
              </div>
              <Button className="w-full">Verificar Conta</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="text-center">
            <CardHeader>
              <CheckCircle className="h-12 w-12 mx-auto text-success mb-2" />
              <CardTitle className="text-lg">Propriedade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Confirma que o vendedor é o proprietário legítimo
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CheckCircle className="h-12 w-12 mx-auto text-success mb-2" />
              <CardTitle className="text-lg">Segurança</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Verifica se a conta não está comprometida ou banida
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CheckCircle className="h-12 w-12 mx-auto text-success mb-2" />
              <CardTitle className="text-lg">Histórico</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Analisa o histórico de transações e comportamento
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Como Funciona a Verificação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Submeta as Informações</h3>
                <p className="text-sm text-muted-foreground">
                  Cole o link ou ID da conta que deseja verificar
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Análise Automática</h3>
                <p className="text-sm text-muted-foreground">
                  Nosso sistema verifica múltiplos pontos de segurança
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Receba o Relatório</h3>
                <p className="text-sm text-muted-foreground">
                  Obtenha um relatório completo sobre a segurança da conta
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-warning/10 border-warning">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <CardTitle className="text-warning">Aviso Importante</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              A verificação é uma camada extra de segurança, mas não garante 100% de proteção. 
              Sempre utilize o sistema de pagamento intermediado da plataforma e nunca realize 
              transações fora do GameMarket.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccountVerification;
