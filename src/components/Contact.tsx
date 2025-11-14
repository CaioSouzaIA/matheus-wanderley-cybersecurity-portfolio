import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "matheuswanderley77@outlook.com",
      link: "mailto:matheuswanderley77@outlook.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(81) 99321-0432",
      link: "tel:+5581993210432"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Matheus Santos Wanderley",
      link: "https://www.linkedin.com/in/matheus-santos-wanderley-95ba912b8"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Interessado em fortalecer a segurança da sua infraestrutura? 
            Vamos conversar sobre como posso ajudar sua organização.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 p-6 group">
                  <a 
                    href={item.link}
                    target={item.icon === Linkedin ? "_blank" : undefined}
                    rel={item.icon === Linkedin ? "noopener noreferrer" : undefined}
                    className="block text-center"
                  >
                    <div className="inline-block p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.label}
                    </h3>
                    <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </a>
                </Card>
              );
            })}
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para Colaborar?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estou sempre aberto a discutir novos projetos, oportunidades em cibersegurança 
              ou parcerias interessantes na área de tecnologia da informação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="mailto:matheuswanderley77@outlook.com">
                  Enviar Email
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-foreground hover:bg-black hover:text-primary transition-all duration-300"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/matheus-santos-wanderley-95ba912b8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conectar no LinkedIn
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
