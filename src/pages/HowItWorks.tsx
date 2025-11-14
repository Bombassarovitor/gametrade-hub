import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Shield, DollarSign, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "1. Escolha seu item",
      description: "Navegue pelas categorias e encontre exatamente o que procura. Use nossos filtros para refinar sua busca."
    },
    {
      icon: DollarSign,
      title: "2. Realize o pagamento",
      description: "Pague de forma segura com PIX, cartão de crédito ou outros métodos disponíveis. O dinheiro fica retido até a confirmação."
    },
    {
      icon: CheckCircle,
      title: "3. Receba seu item",
      description: "O vendedor entrega o item conforme combinado. Verifique se está tudo correto antes de confirmar o recebimento."
    },
    {
      icon: Shield,
      title: "4. Confirme e avalie",
      description: "Após confirmar o recebimento, o pagamento é liberado para o vendedor. Avalie sua experiência para ajudar outros usuários."
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Como Funciona
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprar e vender no GameMarket é simples e seguro
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Segurança em Primeiro Lugar</CardTitle>
            <CardDescription>
              Sua proteção é nossa prioridade
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <Shield className="h-6 w-6 text-success flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Pagamento Intermediado</h3>
                <p className="text-muted-foreground">
                  O dinheiro fica retido na plataforma até você confirmar o recebimento do item
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="h-6 w-6 text-success flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Vendedores Verificados</h3>
                <p className="text-muted-foreground">
                  Todos os vendedores passam por processo de verificação antes de anunciar
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="h-6 w-6 text-success flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Suporte 24/7</h3>
                <p className="text-muted-foreground">
                  Nossa equipe está sempre disponível para resolver qualquer problema
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HowItWorks;
