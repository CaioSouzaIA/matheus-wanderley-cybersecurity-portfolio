import { Award, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google via Coursera",
      modules: [
        "Connect and Protect: Networks and Network Security",
        "Tools of the Trade: Linux and SQL",
        "Automate Cybersecurity Tasks with Python"
      ]
    },
    {
      title: "SQL for Data Science",
      issuer: "University of California, Davis"
    },
    {
      title: "Python Essentials",
      issuer: "Cisco Networking Academy"
    }
  ];

  const education = [
    {
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "Senac São Paulo",
      period: "2024 - 2027",
      status: "Em andamento"
    },
    {
      degree: "Licenciatura em Educação Física",
      institution: "UNIBRA",
      period: "2018 - 2022",
      status: "Concluído"
    },
    {
      degree: "Bacharelado em Educação Física",
      institution: "UNIBRA",
      period: "2017 - 2021",
      status: "Concluído"
    }
  ];

  return (
    <section className="py-20 bg-slate">
      <div className="container mx-auto px-4">
        {/* Certifications */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Certificações
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 p-6 group">
                <div className="mb-4">
                  <Award className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {cert.issuer}
                </p>
                {cert.modules && (
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {cert.modules.map((module, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Formação Acadêmica
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 p-6 group">
                <div className="mb-4">
                  <GraduationCap className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {edu.degree}
                </h3>
                <p className="text-primary font-semibold mb-2">
                  {edu.institution}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{edu.period}</span>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    edu.status === "Em andamento" 
                      ? "bg-primary/20 text-primary" 
                      : "bg-secondary text-secondary-foreground"
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="bg-card border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Idiomas
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-xl font-semibold text-foreground mb-1">Inglês</p>
                <p className="text-primary font-semibold">Avançado</p>
                <p className="text-sm text-muted-foreground">Senac - Unidade de Idiomas</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold text-foreground mb-1">Espanhol</p>
                <p className="text-primary font-semibold">Básico</p>
                <p className="text-sm text-muted-foreground">Em desenvolvimento</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
