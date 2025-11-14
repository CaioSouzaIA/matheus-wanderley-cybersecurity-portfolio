import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-slate/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center">
          {/* Text Content */}
          <div className="space-y-6 text-center max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              MATHEUS
              <br />
              WANDERLEY
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Especialista em Cibersegurança
            </p>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Protegendo infraestruturas e identificando vulnerabilidades através de soluções 
              inteligentes em segurança da informação
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300"
                onClick={() => scrollToSection('contato')}
              >
                Entre em Contato
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-foreground hover:bg-black hover:text-primary transition-all duration-300"
                onClick={() => scrollToSection('experiencia')}
              >
                Ver Experiência
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
