import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "Como faço para comprar um item?",
      answer: "Para comprar um item, navegue pelas categorias, selecione o produto desejado e clique em 'Comprar Agora'. Você será direcionado para finalizar o pagamento de forma segura."
    },
    {
      question: "Como vendo meus itens na plataforma?",
      answer: "Faça login na sua conta, vá em 'Anunciar' no menu, preencha as informações do produto incluindo fotos e vídeos, defina o preço e publique. Após aprovação, seu anúncio ficará disponível."
    },
    {
      question: "Quais são as taxas para vendedores?",
      answer: "Cobramos uma taxa de 5% sobre o valor de cada venda realizada. Não há custos para criar anúncios ou manter produtos listados."
    },
    {
      question: "Como recebo meu dinheiro das vendas?",
      answer: "Após a confirmação da transação pelo comprador, o valor é liberado em sua carteira digital na plataforma. Você pode solicitar saque a qualquer momento via PIX ou transferência bancária."
    },
    {
      question: "É seguro comprar nesta plataforma?",
      answer: "Sim! Utilizamos sistema de pagamento intermediado onde o dinheiro só é liberado para o vendedor após o comprador confirmar o recebimento do item. Todos os vendedores são verificados."
    },
    {
      question: "Quanto tempo demora para receber meu item?",
      answer: "Itens digitais são entregues instantaneamente após confirmação do pagamento. Contas de jogos são transferidas em até 24 horas úteis."
    },
    {
      question: "Posso cancelar uma compra?",
      answer: "Sim, você pode cancelar antes de receber o item. Após receber, consulte nossa política de reembolso que garante até 7 dias para devolução em casos específicos."
    },
    {
      question: "Como funciona a verificação de contas?",
      answer: "Oferecemos um serviço de verificação que confirma a autenticidade e propriedade da conta antes da venda. Isso aumenta a segurança para compradores e vendedores."
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-lg text-muted-foreground">
            Encontre respostas para as dúvidas mais comuns sobre nossa plataforma
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Dúvidas Gerais</CardTitle>
            <CardDescription>
              Se sua dúvida não estiver listada aqui, entre em contato com nosso suporte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
