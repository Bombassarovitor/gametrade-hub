import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Smartphone, Wallet } from "lucide-react";

const PaymentMethods = () => {
  const methods = [
    {
      icon: Smartphone,
      title: "PIX",
      description: "Pagamento instantâneo via PIX. Aprovação imediata e sem taxas adicionais.",
      available: true
    },
    {
      icon: CreditCard,
      title: "Cartão de Crédito",
      description: "Aceita Visa, Mastercard, Elo, American Express. Parcele em até 12x sem juros em compras acima de R$ 100.",
      available: true
    },
    {
      icon: CreditCard,
      title: "Cartão de Débito",
      description: "Débito Visa e Mastercard com aprovação instantânea.",
      available: true
    },
    {
      icon: Wallet,
      title: "Carteira Digital",
      description: "Use o saldo da sua carteira GameMarket para compras rápidas.",
      available: true
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Formas de Pagamento
          </h1>
          <p className="text-lg text-muted-foreground">
            Escolha a melhor forma de pagar suas compras
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {methods.map((method, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{method.title}</CardTitle>
                      {method.available && (
                        <span className="inline-block mt-1 text-xs text-success font-semibold">
                          Disponível
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {method.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-card">
          <CardHeader>
            <CardTitle>Segurança nos Pagamentos</CardTitle>
            <CardDescription>Sua segurança é nossa prioridade</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-foreground mb-2">🔒 Criptografia SSL</h3>
                <p className="text-sm text-muted-foreground">
                  Todos os dados são criptografados com certificado SSL de 256 bits
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">🛡️ Proteção Anti-fraude</h3>
                <p className="text-sm text-muted-foreground">
                  Sistema inteligente detecta e previne transações suspeitas
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">✅ PCI Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  Certificado PCI-DSS garante padrões internacionais de segurança
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">💰 Garantia de Reembolso</h3>
                <p className="text-sm text-muted-foreground">
                  Se algo der errado, você recebe seu dinheiro de volta
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentMethods;
