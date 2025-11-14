import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Heart, Rocket, Users } from "lucide-react";

const Careers = () => {
  const positions = [
    {
      title: "Desenvolvedor Full Stack",
      department: "Tecnologia",
      type: "Tempo Integral",
      location: "Remoto"
    },
    {
      title: "Designer UI/UX",
      department: "Design",
      type: "Tempo Integral",
      location: "São Paulo/SP"
    },
    {
      title: "Analista de Suporte",
      department: "Atendimento",
      type: "Tempo Integral",
      location: "Remoto"
    },
    {
      title: "Analista de Marketing Digital",
      department: "Marketing",
      type: "Tempo Integral",
      location: "Remoto"
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Saúde e Bem-estar",
      description: "Plano de saúde e dental, gympass e apoio psicológico"
    },
    {
      icon: Rocket,
      title: "Crescimento",
      description: "Budget para cursos e eventos, plano de carreira estruturado"
    },
    {
      icon: Users,
      title: "Cultura",
      description: "Ambiente colaborativo, horário flexível e trabalho remoto"
    },
    {
      icon: Briefcase,
      title: "Benefícios",
      description: "Vale refeição, bônus por performance e stock options"
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Trabalhe Conosco
          </h1>
          <p className="text-lg text-muted-foreground">
            Faça parte do time que está revolucionando o mercado de itens digitais
          </p>
        </div>

        <Card className="mb-12 bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Por que trabalhar no GameMarket?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Vagas Abertas</h2>
          <div className="grid gap-6">
            {positions.map((position, index) => (
              <Card key={index} className="hover:shadow-glow transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          {position.department}
                        </span>
                        <span className="inline-block px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                          {position.type}
                        </span>
                        <span className="inline-block px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                          📍 {position.location}
                        </span>
                      </div>
                    </div>
                    <Button>
                      Candidatar
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Não encontrou a vaga ideal?</CardTitle>
            <CardDescription>
              Envie seu currículo para nosso banco de talentos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Estamos sempre em busca de pessoas talentosas e apaixonadas por jogos. Envie seu currículo e portfólio para careers@gamemarket.com e entraremos em contato quando surgir uma oportunidade.
            </p>
            <Button variant="outline" asChild>
              <a href="mailto:careers@gamemarket.com">Enviar Currículo</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Careers;
