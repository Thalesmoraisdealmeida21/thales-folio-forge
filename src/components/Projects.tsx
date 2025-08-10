import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Integração de APIs",
      description: "Plataforma robusta para integração entre múltiplos sistemas usando Python e TypeScript. Inclui monitoramento em tempo real, tratamento de erros avançado e documentação automática.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "TypeScript", "Docker", "PostgreSQL", "Redis"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Framework de Testes Automatizados",
      description: "Solução completa para automação de testes de APIs e interfaces web, com relatórios detalhados e integração CI/CD. Redução de 70% no tempo de testing manual.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Selenium", "Playwright", "GitLab CI", "Docker"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Sistema de Migração de Dados",
      description: "Ferramenta para migração segura de dados entre diferentes SGBDs, com validação automática e rollback. Migrou com sucesso mais de 10TB de dados.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "SQL Server", "PostgreSQL", "Docker", "Pandas"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Dashboard de Monitoramento",
      description: "Interface web para monitoramento de aplicações em produção com métricas em tempo real, alertas customizáveis e análise de performance.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Node.js", "Grafana", "Prometheus"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Automatização RPA",
      description: "Conjunto de robôs para automação de processos empresariais, incluindo geração de relatórios, processamento de documentos e integração com ERP.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Robot Framework", "Selenium", "OCR", "APIs"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "API Gateway Corporativo",
      description: "Gateway centralizado para gerenciamento de APIs corporativas com autenticação, rate limiting, cache e analytics. Serve mais de 100 APIs em produção.",
      image: "/api/placeholder/400/250",
      technologies: ["Node.js", "TypeScript", "Redis", "Docker", "Kubernetes"],
      github: "#",
      demo: "#",
      featured: true
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções reais que desenvolvi ao longo da minha jornada profissional
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Principais Projetos
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden shadow-soft border-border/50 hover:shadow-glow transition-all duration-500 animate-slideUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video bg-gradient-secondary rounded-t-lg flex items-center justify-center overflow-hidden">
                  <Code className="w-16 h-16 text-primary/50 group-hover:text-primary/70 transition-colors" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                    <Button variant="default" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="animate-slideUp">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Outros Projetos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group p-6 shadow-soft border-border/50 hover:shadow-glow transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-slideUp">
          <p className="text-muted-foreground mb-6">
            Interessado em ver mais do meu trabalho?
          </p>
          <Button variant="gradient" size="lg">
            <Github className="w-5 h-5 mr-2" />
            Ver Todos os Projetos no GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
