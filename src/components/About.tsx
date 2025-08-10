import { Card } from '@/components/ui/card';
import { Code, Database, TestTube, Users } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      icon: Users,
      period: "2015-2018",
      title: "IT Support Analyst",
      description: "Comecei minha jornada no suporte técnico, trabalhando com sistemas ERP e processos críticos de negócio como faturamento, controle de estoque e logística."
    },
    {
      icon: Database,
      period: "2018-2020",
      title: "Database Developer",
      description: "Evoluí para desenvolvimento de relatórios SQL, migrações de dados e scripts em Python e Pascal, trabalhando com diversos SGBDs."
    },
    {
      icon: TestTube,
      period: "2020-2022",
      title: "Quality Engineer",
      description: "Ganhei experiência em Quality Engineering, trabalhando com testes automatizados para APIs e aplicações front-end, além de desenvolver RPAs."
    },
    {
      icon: Code,
      period: "2022-Presente",
      title: "Software Engineer",
      description: "Atualmente focado no desenvolvimento de APIs modernas usando Python e TypeScript, criando integrações escaláveis entre diferentes sistemas."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma jornada de 9 anos transformando tecnologia em soluções reais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slideUp">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Minha História
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou um profissional orientado por tecnologia com mais de 9 anos de experiência em TI, 
                atualmente trabalhando como Software Engineer em uma empresa multinacional, 
                construindo APIs robustas e integrações usando Python e TypeScript.
              </p>
              <p>
                Minha jornada começou como Analista de Suporte em TI, onde ganhei experiência prática 
                com sistemas ERP e aprendi os processos críticos de negócio. Essa base me deu um 
                entendimento profundo de como diferentes indústrias operam e como a tecnologia 
                suporta seus fluxos de trabalho.
              </p>
              <p>
                Nos últimos anos, me especializei no desenvolvimento de APIs modernas, sempre com 
                foco em escalabilidade e manutenibilidade. Sou apaixonado por criar software de 
                alta qualidade e incorporar práticas de qualidade em cada etapa do ciclo de vida 
                do desenvolvimento.
              </p>
            </div>
          </div>

          <div className="animate-slideUp">
            <Card className="p-6 shadow-soft border-border/50">
              <h4 className="text-lg font-semibold mb-4 text-primary">
                Foco Atual
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Desenvolvimento de APIs robustas e escaláveis
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Integração entre sistemas diversos
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Automação de processos e workflows
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Práticas de qualidade em software
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="animate-slideUp">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
            Minha Jornada Profissional
          </h3>
          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary/30" />
            
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                
                <div className="flex-1 md:w-1/2" />
                
                <Card className="flex-1 md:w-1/2 p-6 shadow-soft border-border/50 ml-16 md:ml-0">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-mono mb-1">
                        {item.period}
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;