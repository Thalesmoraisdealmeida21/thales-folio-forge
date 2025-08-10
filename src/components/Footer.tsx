import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-gradient mb-4">
              Thales
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Software Engineer apaixonado por criar soluções robustas e escaláveis. 
              Sempre em busca de novos desafios e oportunidades de crescimento.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Sobre', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projetos', href: '#projects' },
                { label: 'Contato', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">
              Conecte-se
            </h4>
            <div className="space-y-3 mb-6">
              <div className="text-muted-foreground text-sm">
                contato@thales.dev
              </div>
              <div className="text-muted-foreground text-sm">
                São Paulo, Brasil
              </div>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contato@thales.dev"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Thales. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              Feito com 
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              e tecnologia
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;