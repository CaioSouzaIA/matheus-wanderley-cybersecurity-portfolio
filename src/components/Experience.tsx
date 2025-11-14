import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  return (
    <section id="experiencia" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experiência Profissional
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border hover:border-primary transition-all duration-300 p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Estagiário - Superintendência de Tecnologia da Informação
                  </h3>
                  <p className="text-xl text-primary font-semibold mb-3">
                    Assembleia Legislativa do Estado de Pernambuco
                  </p>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Novembro 2024 - Atual
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Recife, PE
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    • Suporte técnico de 1ª linha via Help Desk, gestão de chamados e resolução de incidentes de hardware, software e conectividade
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    • Monitoramento de infraestrutura de rede e sistemas, com identificação proativa de falhas e gargalos de performance
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    • Aplicação de políticas de segurança da informação: gestão de acessos via Active Directory, LGPD e conscientização sobre ameaças cibernéticas
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    • Suporte à implementação de atualizações, hardening de sistemas e manutenção preventiva de estações e servidores
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Principais Realizações
                  </h4>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold text-xl">30%</span>
                      <p className="text-muted-foreground">
                        Redução no backlog de chamados através de documentação técnica e padronização de atendimentos
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold text-xl">20%</span>
                      <p className="text-muted-foreground">
                        Redução de alertas de falhas de acesso através da identificação e correção de vulnerabilidades
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
