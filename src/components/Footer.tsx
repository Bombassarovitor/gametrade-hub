import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">

          {/* ACESSO RÁPIDO */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">ACESSO RÁPIDO</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/auth" className="text-muted-foreground hover:text-primary">
                  Anunciar
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary">
                  Perguntas frequentes
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-primary">
                  Categorias
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary">
                  Central de Ajuda
                </Link>
              </li>
            </ul>
          </div>

          {/* COMO FUNCIONA */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">COMO FUNCIONA</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-primary">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link to="/benefits" className="text-muted-foreground hover:text-primary">
                  Vantagens
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary">
                  Tarifas e prazos
                </Link>
              </li>
              <li>
                <Link to="/payment-methods" className="text-muted-foreground hover:text-primary">
                  Formas de pagamento
                </Link>
              </li>
              <li>
                <Link to="/account-verification" className="text-muted-foreground hover:text-primary">
                  Verificador de contas
                </Link>
              </li>
            </ul>
          </div>

          {/* INSTITUCIONAL */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">INSTITUCIONAL</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary">
                  Termos de uso
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="text-muted-foreground hover:text-primary">
                  Programa de recompensa
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary">
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-muted-foreground hover:text-primary">
                  Política de reembolso
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary">
                  Trabalhe conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:suporte@gamemarket.com" 
                  className="text-muted-foreground hover:text-primary"
                >
                  suporte@gamemarket.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GameMarket. Todos os direitos reservados.</p>
          <p className="mt-2">Taxa do vendedor: 5% por transação</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
