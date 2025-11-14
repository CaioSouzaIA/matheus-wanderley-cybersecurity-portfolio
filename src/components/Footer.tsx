const Footer = () => {
  return (
    <footer className="bg-slate border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Matheus Santos Wanderley. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Especialista em Cibersegurança | Analista de TI | Infraestrutura
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
