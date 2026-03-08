const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 container-narrow px-6 sm:px-8 lg:px-12 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-foreground mb-8 animate-fade-up">
          Always{" "}
          <span className="font-light italic text-accent-glow">Better</span>
        </h1>

        <p
          className="text-sm sm:text-base text-muted-foreground font-light tracking-wide mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Discreet Strategic Facilitation & Global Connectivity from Cape Town
        </p>

        <div className="separator-line mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }} />

        <p
          className="text-xs sm:text-sm text-muted-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Evenor Holdings connects influential leaders, enterprises, and governments in commodity
          trading, infrastructure advisory, policy & government relations, and high-value
          partnerships — always with utmost confidentiality.
        </p>

        <div className="animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <button
            onClick={() => scrollTo("#contact")}
            className="text-xs font-medium tracking-[0.15em] uppercase px-8 py-3.5 border border-accent/40 text-accent hover:bg-accent/10 transition-all duration-300"
          >
            Initiate Confidential Discussion
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
