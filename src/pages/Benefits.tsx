import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, DollarSign, Users, Lock, TrendingUp } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Compra 100% Segura",
      description: "Sistema de pagamento intermediado garante que seu dinheiro só é liberado após confirmar o recebimento do item."
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Itens digitais entregues instantaneamente. Contas transferidas em até 24 horas."
    },
    {
      icon: DollarSign,
      title: "Melhores Preços",
      description: "Marketplace competitivo com preços justos e transparentes. Compare e escolha a melhor oferta."
    },
    {
      icon: Users,
      title: "Comunidade Verificada",
      description: "Todos os vendedores passam por processo de verificação para garantir transações confiáveis."
    },
    {
      icon: Lock,
      title: "Dados Protegidos",
      description: "Criptografia de ponta a ponta em todas as transações. Seus dados estão sempre seguros."
    },
    {
      icon: TrendingUp,
      title: "Programa de Recompensas",
      description: "Ganhe pontos a cada compra e troque por descontos em futuras transações."
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Vantagens do GameMarket
          </h1>
          <p className="text-lg text-muted-foreground">
            Descubra por que somos a melhor escolha para comprar e vender itens digitais
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-glow transition-shadow">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Junte-se a milhares de gamers satisfeitos!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">50K+</p>
                <p className="text-muted-foreground">Usuários Ativos</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">200K+</p>
                <p className="text-muted-foreground">Transações Realizadas</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">4.9/5</p>
                <p className="text-muted-foreground">Avaliação Média</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Benefits;
