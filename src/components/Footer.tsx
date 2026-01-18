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
              Passionate Software Engineer creating robust and scalable solutions.
              Always looking for new challenges and opportunities for growth.
            </p>
          </div>
          <div>
            <h4 className="text-foreground font-semibold mb-4">
              Conecte-se
            </h4>
            <div className="space-y-3 mb-6">
              <div className="text-muted-foreground text-sm">
                thales.morais21@gmail.com
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
                href="https://www.linkedin.com/in/thales-morais/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:thales.morais21@gmail.com"
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
              © {currentYear} Thales. All rights reserved.
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              Made with
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              and technology
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;