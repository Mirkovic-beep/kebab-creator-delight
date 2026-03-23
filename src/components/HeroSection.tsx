import heroImage from "@/assets/hero-kebab.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Delicioso kebab turco del Bar DejaVu"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 gradient-overlay" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-gold font-body tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">
          Especialidades Turcas en Rivas-Vaciamadrid
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Bar DejaVu
          <span className="block text-gold text-3xl md:text-4xl lg:text-5xl font-semibold mt-2">
            Kebab Rivas
          </span>
        </h1>
        <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Auténticos sabores de Turquía elaborados con recetas tradicionales y los mejores ingredientes frescos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a
            href="#carta"
            className="gradient-gold text-gold-foreground font-body font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Ver la Carta
          </a>
          <a
            href="tel:917139980"
            className="border border-gold text-gold font-body font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gold hover:text-gold-foreground transition-colors"
          >
            Reservar Mesa
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
