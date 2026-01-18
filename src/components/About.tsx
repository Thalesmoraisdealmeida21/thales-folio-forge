import { Card } from '@/components/ui/card';
import { Code, Database, TestTube, Users } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      icon: Users,
      period: "2015-2018",
      title: "IT Support Analyst",
      description: "Started my journey in technical support, working with ERP systems and critical business processes such as billing, inventory control, and logistics."
    },
    {
      icon: Database,
      period: "2018-2020",
      title: "Database Developer",
      description: "Evolved to SQL report development, data migrations, and scripts in Python and Pascal, working with various DBMS."
    },
    {
      icon: TestTube,
      period: "2020-2022",
      title: "Quality Engineer",
      description: "Gained experience in Quality Engineering, working with automated tests for APIs and front-end applications, as well as developing RPAs."
    },
    {
      icon: Code,
      period: "2022-Present",
      title: "Software Engineer",
      description: "Currently focused on developing modern APIs using Python and TypeScript, creating scalable integrations between different systems."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Sobre Mim
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slideUp">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Minha História
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a Software Engineer and Quality Engineer with a strong background in building,
                integrating, and validating business-critical systems. I began my career as an IT Support
                Analyst, working closely with ERP platforms and gaining hands-on experience with core business
                processes such as invoicing, inventory management, logistics, and eCommerce.
                This early exposure gave me a deep understanding of how different
                industries operate and how technology underpins real-world workflows.
              </p>
              <p>
                I later transitioned into software development, where I worked on SQL reporting, data migrations, and automation scripts using Python and Pascal. Throughout this phase,
                I designed and maintained complex queries and integrations across multiple database technologies, including SQL Server, PostgreSQL,
                Firebird, Oracle, MariaDB, and MySQL.
              </p>
              <p>
                Over the past few years, I expanded my expertise into Quality Engineering, focusing on automated testing for APIs and front-end applications. I actively contributed to the creation of RPA solutions to automate manual
                and repetitive workflows, improving efficiency, reliability, and consistency across systems.
              </p>
              <p>
                Currently, I focus on designing and developing modern, scalable APIs using Python and TypeScript, enabling seamless integration between systems and services. My work prioritizes clean architecture, maintainability,
                observability, and long-term scalability, always with quality embedded throughout the development process.
              </p>
            </div>


          </div>

          <div className="animate-slideUp">
            <Card className="p-6 shadow-soft border-border/50">
              <h4 className="text-lg font-semibold mb-4 text-primary">
                My Current Focuss
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Developing robust and scalable APIs
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Integration between different systems
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Building and training AI models and creating AI agents
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
                className={`relative flex items-start gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 flex-shrink-0" />

                {/* Spacer for desktop layout */}
                <div className="hidden md:block flex-1 md:w-1/2" />

                <Card className="w-full md:flex-1 md:w-1/2 p-6 shadow-soft border-border/50 ml-12 md:ml-0">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
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