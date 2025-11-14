import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-slate via-slate to-dark-slate">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              MATHEUS
              <br />
              WANDERLEY
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Especialista em Cibersegurança
            </p>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Protegendo infraestruturas e identificando vulnerabilidades através de soluções 
              inteligentes em segurança da informação
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
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
                className="border-primary text-foreground hover:bg-primary/10 transition-all duration-300"
                onClick={() => scrollToSection('experiencia')}
              >
                Ver Experiência
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-3xl animate-glow" />
              <img 
                src={heroPhoto} 
                alt="Matheus Wanderley"
                className="relative rounded-lg w-full max-w-md lg:max-w-lg shadow-2xl border border-primary/20"
              />
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
