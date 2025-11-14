import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  UserPlus,
  Upload,
  DollarSign,
  Shield,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const HowToSell = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "1. Crie sua Conta",
      description: "Registre-se gratuitamente e verifique seu email para começar.",
    },
    {
      icon: Upload,
      title: "2. Anuncie seu Produto",
      description: "Adicione fotos, descrição detalhada e defina o preço do seu item.",
    },
    {
      icon: MessageSquare,
      title: "3. Negocie com Compradores",
      description: "Use nosso chat seguro para responder dúvidas e negociar.",
    },
    {
      icon: DollarSign,
      title: "4. Receba o Pagamento",
      description: "Após a confirmação do comprador, receba direto na sua conta.",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Proteção ao Vendedor",
      description: "Sistema de garantia que protege vendedores de fraudes.",
    },
    {
      icon: CheckCircle2,
      title: "Verificação de Compradores",
      description: "Todos os compradores passam por verificação de identidade.",
    },
    {
      icon: DollarSign,
      title: "Taxas Competitivas",
      description: "Menores taxas do mercado para maximizar seus ganhos.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Como Vender no GameMarket
          </h1>
          <p className="text-lg text-muted-foreground">
            Transforme seus itens digitais em dinheiro de forma rápida e segura
          </p>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Processo Simplificado em 4 Passos
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Card key={index} className="relative p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Por Que Vender Conosco?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
                <benefit.icon className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <Card className="mb-16 p-8">
          <h2 className="mb-6 text-2xl font-bold">Requisitos para Vender</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
              <div>
                <h3 className="font-semibold">Conta Verificada</h3>
                <p className="text-sm text-muted-foreground">
                  Confirme seu email e complete o processo de verificação
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
              <div>
                <h3 className="font-semibold">Produtos Legítimos</h3>
                <p className="text-sm text-muted-foreground">
                  Apenas itens obtidos legalmente são permitidos na plataforma
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
              <div>
                <h3 className="font-semibold">Fotos e Descrições Completas</h3>
                <p className="text-sm text-muted-foreground">
                  Adicione fotos reais e descrições detalhadas para atrair compradores
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
              <div>
                <h3 className="font-semibold">Atendimento Responsivo</h3>
                <p className="text-sm text-muted-foreground">
                  Responda às mensagens dos compradores em até 24 horas
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Fee Information */}
        <Card className="mb-16 border-primary/20 bg-gradient-card p-8">
          <h2 className="mb-4 text-2xl font-bold">Taxas e Comissões</h2>
          <p className="mb-4 text-muted-foreground">
            Trabalhamos com as menores taxas do mercado para você lucrar mais:
          </p>
          <div className="rounded-lg bg-background/60 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Taxa por Transação</h3>
                <p className="text-sm text-muted-foreground">
                  Cobrada apenas quando você vende
                </p>
              </div>
              {/* PLACEHOLDER: Configure your marketplace fee here */}
              <div className="text-right">
                <p className="text-3xl font-bold text-primary">[X]%</p>
                <p className="text-xs text-muted-foreground">
                  A SER CONFIGURADO
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            * Sem taxas de cadastro ou mensalidade. Você só paga quando vende!
          </p>
        </Card>

        {/* Payment Methods */}
        <Card className="mb-16 p-8">
          <h2 className="mb-6 text-2xl font-bold">Métodos de Pagamento</h2>
          <p className="mb-6 text-muted-foreground">
            Oferecemos múltiplas opções para você receber seus ganhos:
          </p>
          {/* PLACEHOLDER: Configure payment methods here */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border p-4">
              <h3 className="font-semibold">PIX</h3>
              <p className="text-sm text-muted-foreground">Receba em segundos</p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h3 className="font-semibold">Transferência Bancária</h3>
              <p className="text-sm text-muted-foreground">Direto na sua conta</p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h3 className="font-semibold">Carteira Digital</h3>
              <p className="text-sm text-muted-foreground">PayPal, PicPay e mais</p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Link to="/auth">
            <Button size="lg" className="shadow-glow">
              Começar a Vender Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Junte-se a milhares de vendedores satisfeitos
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowToSell;
