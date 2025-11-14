import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Suggestions = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Erro",
          description: "Você precisa estar logado para enviar uma sugestão",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase.from('suggestions').insert({
        user_id: user.id,
        title: formData.title,
        description: formData.description,
        category: formData.category || null,
      });

      if (error) throw error;

      toast({
        title: "Sugestão enviada!",
        description: "Obrigado pelo seu feedback. Vamos analisar sua sugestão.",
      });
      
      // Reset form
      setFormData({
        title: "",
        description: "",
        category: "",
      });
    } catch (error: any) {
      toast({
        title: "Erro ao enviar sugestão",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Lightbulb className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">Sugestões</h1>
          <p className="mt-2 text-muted-foreground">
            Ajude-nos a melhorar! Envie suas ideias e sugestões
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Enviar Sugestão</CardTitle>
            <CardDescription>
              Sua opinião é muito importante para nós. Compartilhe suas ideias para melhorarmos a plataforma.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Título da Sugestão *</Label>
                <Input
                  id="title"
                  placeholder="Ex: Adicionar filtro por preço"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoria</Label>
                <Input
                  id="category"
                  placeholder="Ex: Interface, Pagamentos, Segurança..."
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição *</Label>
                <Textarea
                  id="description"
                  placeholder="Descreva sua sugestão com o máximo de detalhes possível..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={8}
                  required
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Sugestão"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="mt-6 border-dashed">
          <CardContent className="py-6">
            <h3 className="font-semibold mb-2">📋 Suas sugestões são privadas</h3>
            <p className="text-sm text-muted-foreground">
              Todas as sugestões enviadas vão diretamente para nossa equipe e não são visíveis publicamente.
              Analisamos cada sugestão cuidadosamente para melhorar a plataforma.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Suggestions;
