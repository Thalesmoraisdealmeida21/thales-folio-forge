import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens & Frameworks",
      skills: [
        "Python", "TypeScript", "JavaScript", "Node.js", "React", "Angular", 
        "TypeORM", "PHP", "Pascal"
      ],
      color: "primary"
    },
    {
      title: "Databases & Data",
      skills: [
        "PostgreSQL", "SQL Server", "MySQL", "MariaDB", "Oracle", "Firebird",
        "Data Migrations", "Complex Queries"
      ],
      color: "accent"
    },
    {
      title: "Testing & Quality",
      skills: [
        "Selenium", "Playwright", "Cypress", "Robot Framework", "Locust",
        "API Testing", "Test Automation", "RPA Development"
      ],
      color: "secondary"
    },
    {
      title: "DevOps & Infrastructure",
      skills: [
        "Docker", "Kubernetes", "AWS", "GCP", "GitLab", "CI/CD", 
        "Grafana", "Prometheus", "BrowserStack"
      ],
      color: "primary"
    },
    {
      title: "Tools & Metodologias",
      skills: [
        "Git", "ERP Systems", "API Integration", "System Architecture",
        "Agile", "Code Review", "Documentation"
      ],
      color: "accent"
    }
  ];

  const getVariantByColor = (color: string) => {
    switch (color) {
      case 'primary': return 'default';
      case 'accent': return 'secondary';
      case 'secondary': return 'outline';
      default: return 'default';
    }
  };

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Tech Stack & Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-soft border-border/50 hover:shadow-glow transition-all duration-500 animate-slideUp group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant={getVariantByColor(category.color)}
                    className="text-xs transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Key Strengths */}
        <div className="mt-16 animate-slideUp">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
            Principais Competências
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-soft border-border/50 text-center group hover:shadow-glow transition-all duration-500">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <div className="w-6 h-6 bg-primary rounded-sm" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">
                Arquitetura de APIs
              </h4>
              <p className="text-muted-foreground text-sm">
                Design e implementação de APIs RESTful escaláveis e maintíveis
              </p>
            </Card>

            <Card className="p-6 shadow-soft border-border/50 text-center group hover:shadow-glow transition-all duration-500">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <div className="w-6 h-6 bg-accent rounded-sm" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">
                Integração de Sistemas
              </h4>
              <p className="text-muted-foreground text-sm">
                Conectando sistemas diversos com soluções robustas e eficientes
              </p>
            </Card>

            <Card className="p-6 shadow-soft border-border/50 text-center group hover:shadow-glow transition-all duration-500">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/30 transition-colors">
                <div className="w-6 h-6 bg-secondary rounded-sm" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">
                Automação & Quality
              </h4>
              <p className="text-muted-foreground text-sm">
                Desenvolvimento de soluções automatizadas e práticas de qualidade
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;