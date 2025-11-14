-- Habilitar a extensão UUID se ainda não estiver habilitada
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabela de posts do blog
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  video_url TEXT,
  game_category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Habilitar RLS na tabela de posts
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Política: Qualquer pessoa pode ler posts
CREATE POLICY "Anyone can read blog posts"
ON public.blog_posts
FOR SELECT
USING (true);

-- Política: Usuários autenticados podem criar seus próprios posts
CREATE POLICY "Users can create their own blog posts"
ON public.blog_posts
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Política: Usuários podem atualizar seus próprios posts
CREATE POLICY "Users can update their own blog posts"
ON public.blog_posts
FOR UPDATE
USING (auth.uid() = user_id);

-- Política: Usuários podem deletar seus próprios posts
CREATE POLICY "Users can delete their own blog posts"
ON public.blog_posts
FOR DELETE
USING (auth.uid() = user_id);

-- Tabela de sugestões (PRIVADA - apenas para administradores)
CREATE TABLE public.suggestions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Habilitar RLS na tabela de sugestões
ALTER TABLE public.suggestions ENABLE ROW LEVEL SECURITY;

-- Política: Usuários autenticados podem criar sugestões
CREATE POLICY "Authenticated users can create suggestions"
ON public.suggestions
FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);

-- Política: Apenas administradores podem ler sugestões (você precisará criar a tabela de roles)
-- Por enquanto, ninguém pode ler via API (você precisará acessar via backend/Cloud UI)
CREATE POLICY "No one can read suggestions via API"
ON public.suggestions
FOR SELECT
USING (false);

-- Trigger para atualizar o campo updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Habilitar realtime para posts do blog
ALTER PUBLICATION supabase_realtime ADD TABLE public.blog_posts;