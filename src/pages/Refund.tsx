import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const Refund = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Política de Reembolso
          </h1>
          <p className="text-muted-foreground">
            Garantimos sua satisfação e segurança em todas as transações
          </p>
        </div>

        <Card className="mb-6 border-success">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-success" />
              <CardTitle className="text-success">Casos Elegíveis para Reembolso</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>Você tem direito a reembolso total nas seguintes situações:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Item não foi entregue após o prazo acordado</li>
              <li>Item recebido é significativamente diferente da descrição</li>
              <li>Conta de jogo não tem os itens/rank prometido</li>
              <li>Conta foi recuperada pelo vendedor original</li>
              <li>Item apresentou problemas técnicos que o tornam inutilizável</li>
              <li>Vendedor não forneceu informações necessárias para acesso</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 border-destructive">
          <CardHeader>
            <div className="flex items-center gap-2">
              <XCircle className="h-6 w-6 text-destructive" />
              <CardTitle className="text-destructive">Casos NÃO Elegíveis</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>Não oferecemos reembolso nas seguintes situações:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Você mudou de ideia após receber o item</li>
              <li>Você foi banido por violar termos do jogo</li>
              <li>Você alterou informações da conta após recebimento</li>
              <li>Você não abriu disputa dentro do prazo de 7 dias</li>
              <li>Você realizou a transação fora da plataforma GameMarket</li>
              <li>Problemas causados por uso inadequado do item</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Processo de Reembolso</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Abra uma Disputa</h3>
                  <p className="text-sm">
                    Acesse sua compra e clique em "Abrir Disputa" em até 7 dias após a transação
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Forneça Evidências</h3>
                  <p className="text-sm">
                    Envie prints, vídeos ou qualquer prova que demonstre o problema
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Análise da Equipe</h3>
                  <p className="text-sm">
                    Nossa equipe analisará o caso em até 48 horas úteis
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Receba seu Reembolso</h3>
                  <p className="text-sm">
                    Se aprovado, o reembolso será processado em até 5 dias úteis
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Prazos</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span>Prazo para abrir disputa</span>
                <span className="font-semibold text-foreground">7 dias</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span>Análise da disputa</span>
                <span className="font-semibold text-foreground">Até 48h úteis</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span>Processamento do reembolso</span>
                <span className="font-semibold text-foreground">Até 5 dias úteis</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Devolução do valor (PIX)</span>
                <span className="font-semibold text-foreground">Imediato</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-warning/10 border-warning">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <CardTitle className="text-warning">Importante</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Para garantir sua proteção, sempre:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Teste o item imediatamente após recebimento</li>
              <li>Documente qualquer problema com prints e vídeos</li>
              <li>Mantenha todas as comunicações dentro da plataforma</li>
              <li>Não aceite transações fora do GameMarket</li>
              <li>Leia atentamente a descrição do produto antes de comprar</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Refund;
