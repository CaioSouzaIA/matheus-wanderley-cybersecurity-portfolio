import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Segurança",
      skills: [
        "Segurança da Informação",
        "Análise de Vulnerabilidades",
        "Gestão de Incidentes",
        "LGPD",
        "Firewall & VPN",
        "Hardening de Sistemas",
        "Políticas de Segurança"
      ]
    },
    {
      category: "Sistemas & Infraestrutura",
      skills: [
        "Linux (CLI)",
        "Windows Server",
        "Active Directory",
        "Virtualização",
        "Microsoft 365",
        "Help Desk",
        "Monitoramento de Redes"
      ]
    },
    {
      category: "Redes",
      skills: [
        "TCP/IP",
        "DNS",
        "DHCP",
        "Arquitetura de Redes",
        "Segurança de Redes",
        "Análise de Logs"
      ]
    },
    {
      category: "Desenvolvimento",
      skills: [
        "Python",
        "SQL",
        "Automação",
        "Scripting",
        "Análise de Dados"
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Competências Técnicas
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default text-sm py-1.5 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
