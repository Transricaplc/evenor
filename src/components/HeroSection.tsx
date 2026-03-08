import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Global connectivity network from Africa"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy-gradient opacity-70" />
      </div>

      {/* Decorative dots */}
      <div className="glow-dot w-3 h-3 top-1/4 left-1/4 animate-pulse-glow" />
      <div className="glow-dot w-2 h-2 top-1/3 right-1/3 animate-pulse-glow delay-300" style={{ animationDelay: '1s' }} />
      <div className="glow-dot w-4 h-4 bottom-1/3 right-1/4 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container-narrow px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-up">
          Always <span className="text-gradient-teal">Better</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 font-medium mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Evenor Holdings: Strategic Connectors Driving Global Growth from Africa to the World
        </p>

        <p className="text-sm sm:text-base text-primary-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Headquartered in Blouberg, Cape Town, we deliver expert consultancy in logistics optimisation,
          energy transition, supply chain value addition, ICT infrastructure, and commodity trading.
          As trusted intermediaries and business facilitators, we connect enterprises, governments,
          policymakers, and communities to unlock efficiency, sustainability, resilience, and new opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <button onClick={() => scrollTo("#contact")} className="btn-primary-evenor text-base">
            Book a Free Strategy Session
          </button>
          <button onClick={() => scrollTo("#expertise")} className="btn-outline-evenor text-base">
            Discover How We Connect
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
