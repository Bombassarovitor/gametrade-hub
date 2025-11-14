import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Tarifas e Prazos
          </h1>
          <p className="text-lg text-muted-foreground">
            Transparência total em nossas taxas e prazos de entrega
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Para Vendedores</CardTitle>
              <CardDescription>Taxas competitivas e justas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="text-muted-foreground">Taxa por venda</span>
                <span className="text-2xl font-bold text-foreground">5%</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Sem taxa de cadastro</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Sem taxa de anúncio</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Pagamento liberado em até 24h após confirmação</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Saque via PIX gratuito</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Para Compradores</CardTitle>
              <CardDescription>Compre sem taxas adicionais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="text-muted-foreground">Taxa de compra</span>
                <span className="text-2xl font-bold text-success">Grátis</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Sem taxa de transação</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Preço final já incluso</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Pagamento 100% seguro</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Garantia de entrega</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Prazos de Entrega</CardTitle>
            <CardDescription>Tempos médios para diferentes tipos de itens</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <div>
                  <p className="font-semibold text-foreground">Itens Digitais (Skins, Passes, V-Bucks)</p>
                  <p className="text-sm text-muted-foreground">Códigos e itens in-game</p>
                </div>
                <span className="text-primary font-semibold">Imediato</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <div>
                  <p className="font-semibold text-foreground">Contas de Jogos</p>
                  <p className="text-sm text-muted-foreground">Transferência de contas verificadas</p>
                </div>
                <span className="text-primary font-semibold">Até 24h</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-foreground">Boosting/Serviços</p>
                  <p className="text-sm text-muted-foreground">Rank boost, farm, coaching</p>
                </div>
                <span className="text-primary font-semibold">Variável</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
