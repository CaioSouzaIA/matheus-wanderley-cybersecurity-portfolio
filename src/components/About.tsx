import { Shield, Server, Network, Lock } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Segurança da Informação",
      description: "Especialista em identificação de ameaças, gestão de incidentes e conformidade com LGPD"
    },
    {
      icon: Server,
      title: "Infraestrutura de TI",
      description: "Domínio em Linux, Windows Server, Active Directory e virtualização"
    },
    {
      icon: Network,
      title: "Redes e Comunicações",
      description: "Arquitetura de redes, TCP/IP, DNS, DHCP e hardening de sistemas"
    },
    {
      icon: Lock,
      title: "Análise de Vulnerabilidades",
      description: "Diagnóstico técnico, priorização de demandas e implementação de soluções eficientes"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Profissional especializado em <span className="text-primary font-semibold">Cibersegurança</span> e 
            <span className="text-primary font-semibold"> Infraestrutura de TI</span>, com formação militar em comunicações 
            e sólida experiência em proteção de sistemas, análise de vulnerabilidades e gestão de incidentes de segurança. 
            Atualmente cursando Análise e Desenvolvimento de Sistemas e certificado por instituições renomadas como Google e Cisco.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group p-6 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
