import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Sobre</h3>
            <p className="text-sm text-muted-foreground">
              O marketplace mais seguro e moderno para compra e venda de itens digitais de jogos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/how-to-sell" className="text-muted-foreground hover:text-primary">
                  Como Vender
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-primary">
                  Categorias
                </Link>
              </li>
              <li>
                <Link to="/best-sellers" className="text-muted-foreground hover:text-primary">
                  Mais Vendidos
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="/support-chat" 
                  className="flex items-center text-muted-foreground hover:text-primary"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat ao Vivo
                </a>
              </li>
              <li>
                {/* PLACEHOLDER: Replace with your support email */}
                <a 
                  href="mailto:suporte@gamemarket.com" 
                  className="flex items-center text-muted-foreground hover:text-primary"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  suporte@gamemarket.com
                </a>
              </li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Segurança</h3>
            <p className="text-sm text-muted-foreground">
              Pagamentos 100% seguros com criptografia de ponta a ponta.
            </p>
            <div className="mt-4 flex gap-2">
              <div className="rounded bg-card px-3 py-2 text-xs font-semibold">
                SSL
              </div>
              <div className="rounded bg-card px-3 py-2 text-xs font-semibold">
                Proteção ao Comprador
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GameMarket. Todos os direitos reservados.</p>
          {/* PLACEHOLDER: Fee information - configure your marketplace fees here */}
          <p className="mt-2">Taxa do vendedor: [A SER CONFIGURADO]% por transação</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
