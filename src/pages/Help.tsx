import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Central de Ajuda
          </h1>
          <p className="text-lg text-muted-foreground">
            Estamos aqui para ajudar você
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card className="text-center">
            <CardHeader>
              <MessageCircle className="h-12 w-12 mx-auto text-primary mb-2" />
              <CardTitle>Chat ao Vivo</CardTitle>
              <CardDescription>
                Disponível 24/7
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Iniciar Chat</Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Mail className="h-12 w-12 mx-auto text-primary mb-2" />
              <CardTitle>Email</CardTitle>
              <CardDescription>
                Resposta em até 24h
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <a href="mailto:suporte@gamemarket.com">Enviar Email</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Phone className="h-12 w-12 mx-auto text-primary mb-2" />
              <CardTitle>Telefone</CardTitle>
              <CardDescription>
                Seg-Sex 8h-18h
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <a href="tel:+5511999999999">(11) 99999-9999</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Links Úteis</CardTitle>
            <CardDescription>
              Acesse rapidamente as páginas mais importantes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link to="/faq">
              <Button variant="ghost" className="w-full justify-start">
                📋 Perguntas Frequentes
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="ghost" className="w-full justify-start">
                ℹ️ Como Funciona a Plataforma
              </Button>
            </Link>
            <Link to="/how-to-sell">
              <Button variant="ghost" className="w-full justify-start">
                💰 Como Vender no GameMarket
              </Button>
            </Link>
            <Link to="/account-verification">
              <Button variant="ghost" className="w-full justify-start">
                ✅ Verificação de Contas
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;
