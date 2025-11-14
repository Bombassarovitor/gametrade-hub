import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Termos de Uso
          </h1>
          <p className="text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>1. Aceitação dos Termos</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Ao acessar e usar o GameMarket, você concorda em cumprir estes termos de uso e todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>2. Uso da Plataforma</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              O GameMarket é uma plataforma de marketplace que conecta compradores e vendedores de itens digitais e contas de jogos. Nós não somos donos dos itens listados e atuamos apenas como intermediários nas transações.
            </p>
            <p>
              Você concorda em usar a plataforma apenas para fins legais e de acordo com estes Termos de Uso.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>3. Responsabilidades do Usuário</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Como usuário, você é responsável por:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Manter a confidencialidade de sua conta e senha</li>
              <li>Garantir que todas as informações fornecidas sejam precisas e atualizadas</li>
              <li>Não violar os termos de serviço dos jogos relacionados aos itens vendidos</li>
              <li>Não realizar atividades fraudulentas ou enganosas</li>
              <li>Respeitar os direitos de propriedade intelectual de terceiros</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>4. Transações e Pagamentos</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Todas as transações devem ser realizadas através da plataforma GameMarket. Transações realizadas fora da plataforma não são cobertas por nossa política de proteção.
            </p>
            <p>
              Cobramos uma taxa de serviço de 5% sobre cada venda realizada. Esta taxa cobre os custos de manutenção da plataforma e sistema de proteção ao comprador.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>5. Política de Reembolso</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Oferecemos garantia de reembolso em casos específicos conforme detalhado em nossa Política de Reembolso. O comprador deve abrir uma disputa em até 7 dias após a transação para solicitar reembolso.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>6. Limitação de Responsabilidade</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              O GameMarket não se responsabiliza por:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Banimentos ou punições aplicadas pelos desenvolvedores dos jogos</li>
              <li>Alterações nas políticas dos jogos que afetem itens comprados</li>
              <li>Perdas ou danos indiretos resultantes do uso da plataforma</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Alterações nos Termos</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Reservamos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor imediatamente após a publicação no site. É responsabilidade do usuário revisar periodicamente estes termos.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
