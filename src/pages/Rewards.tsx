import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Star, Crown, Zap } from "lucide-react";

const Rewards = () => {
  const tiers = [
    {
      icon: Star,
      name: "Bronze",
      color: "text-orange-600",
      requirement: "0-10 transações",
      benefits: ["2% de cashback", "Suporte prioritário"]
    },
    {
      icon: Gift,
      name: "Prata",
      color: "text-gray-400",
      requirement: "11-50 transações",
      benefits: ["3% de cashback", "Acesso a ofertas exclusivas", "Badge especial no perfil"]
    },
    {
      icon: Zap,
      name: "Ouro",
      color: "text-yellow-500",
      requirement: "51-100 transações",
      benefits: ["5% de cashback", "Frete grátis em todos os itens", "Verificação de conta expressa"]
    },
    {
      icon: Crown,
      name: "Diamante",
      color: "text-blue-500",
      requirement: "100+ transações",
      benefits: ["7% de cashback", "Gerente de conta dedicado", "Acesso antecipado a novos recursos", "Taxa de venda reduzida para 3%"]
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <Gift className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Programa de Recompensas
          </h1>
          <p className="text-lg text-muted-foreground">
            Quanto mais você usa, mais você ganha!
          </p>
        </div>

        <Card className="mb-12 bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Como Funciona</CardTitle>
            <CardDescription className="text-center text-base">
              Cada compra e venda conta para seu nível de recompensas
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-3 text-center">
            <div>
              <div className="text-4xl mb-2">🛒</div>
              <h3 className="font-semibold text-foreground mb-2">Compre ou Venda</h3>
              <p className="text-sm text-muted-foreground">
                Cada transação conta para seu progresso
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">⭐</div>
              <h3 className="font-semibold text-foreground mb-2">Suba de Nível</h3>
              <p className="text-sm text-muted-foreground">
                Desbloqueie benefícios exclusivos
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">💰</div>
              <h3 className="font-semibold text-foreground mb-2">Ganhe Cashback</h3>
              <p className="text-sm text-muted-foreground">
                Receba de volta parte do valor
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {tiers.map((tier, index) => (
            <Card key={index} className="hover:shadow-glow transition-shadow">
              <CardHeader className="text-center">
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted`}>
                  <tier.icon className={`h-8 w-8 ${tier.color}`} />
                </div>
                <CardTitle className={tier.color}>{tier.name}</CardTitle>
                <CardDescription>{tier.requirement}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-success mt-0.5">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Perguntas Frequentes sobre Recompensas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Como uso meu cashback?</h3>
              <p className="text-sm text-muted-foreground">
                O cashback é creditado automaticamente na sua carteira digital após cada transação. Você pode usar para comprar itens ou solicitar saque.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">O cashback expira?</h3>
              <p className="text-sm text-muted-foreground">
                Não! Seu cashback acumulado nunca expira e pode ser usado quando quiser.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Posso perder meu nível?</h3>
              <p className="text-sm text-muted-foreground">
                Não, uma vez alcançado um nível, você mantém seus benefícios permanentemente.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Como acompanho meu progresso?</h3>
              <p className="text-sm text-muted-foreground">
                Acesse seu dashboard para ver quantas transações faltam para o próximo nível e seu cashback acumulado.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Rewards;
