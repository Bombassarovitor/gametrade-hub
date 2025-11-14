import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Política de Privacidade
          </h1>
          <p className="text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>1. Informações que Coletamos</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Coletamos informações que você nos fornece diretamente, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nome completo e informações de contato</li>
              <li>Informações de pagamento (processadas por nossos parceiros seguros)</li>
              <li>Histórico de transações e compras</li>
              <li>Comunicações com nosso suporte</li>
              <li>Informações de dispositivo e navegação</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>2. Como Usamos Suas Informações</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Processar transações e pagamentos</li>
              <li>Enviar notificações sobre suas compras e vendas</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
              <li>Prevenir fraudes e atividades suspeitas</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Enviar atualizações sobre a plataforma (com seu consentimento)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>3. Compartilhamento de Informações</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Não vendemos suas informações pessoais. Compartilhamos suas informações apenas:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Com processadores de pagamento para concluir transações</li>
              <li>Com autoridades legais quando exigido por lei</li>
              <li>Com parceiros de serviço que nos ajudam a operar a plataforma</li>
              <li>Em caso de venda ou fusão da empresa (com aviso prévio)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>4. Segurança dos Dados</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Criptografia SSL de 256 bits para todas as comunicações</li>
              <li>Armazenamento seguro em servidores protegidos</li>
              <li>Acesso restrito às informações pessoais</li>
              <li>Monitoramento contínuo contra ameaças de segurança</li>
              <li>Conformidade com padrões PCI-DSS para dados de pagamento</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>5. Seus Direitos</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Você tem o direito de:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir informações imprecisas</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Optar por não receber comunicações de marketing</li>
              <li>Exportar seus dados em formato legível</li>
              <li>Revogar consentimentos anteriormente fornecidos</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>6. Cookies e Tecnologias Similares</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Utilizamos cookies e tecnologias similares para melhorar sua experiência, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Cookies essenciais para funcionamento do site</li>
              <li>Cookies de análise para entender uso da plataforma</li>
              <li>Cookies de preferências para lembrar suas configurações</li>
            </ul>
            <p className="mt-4">
              Você pode gerenciar suas preferências de cookies nas configurações do navegador.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Contato</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Para questões sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li>📧 Email: privacidade@gamemarket.com</li>
              <li>📞 Telefone: (11) 99999-9999</li>
              <li>📍 Endereço: [Endereço da empresa]</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
