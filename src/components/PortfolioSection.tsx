import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const portfolio = [
  {
    name: "Almien",
    tag: "SAFETY INTELLIGENCE · SOUTH AFRICA",
    description:
      "Urban safety intelligence platform for South African cities. Real-time risk scoring, SOS network, and AI-powered route safety for township and metro commuters.",
    status: "SEED STAGE",
    accentColor: "#7C3AED",
    href: "https://almien.live",
  },
  {
    name: "Sema",
    tag: "CIVIC TECHNOLOGY · TANZANIA",
    description:
      "Tanzania's verified civic directory — connecting citizens with public servants across five tiers of government. The Yellow Book for East Africa.",
    status: "LIVE BETA",
    accentColor: "#F5C500",
    href: "https://semaapp.lovable.app",
  },
];

const PortfolioSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="portfolio" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground tracking-[0.06em] mb-6">
            Portfolio
          </h2>
          <div className="separator-rule" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolio.map((company, i) => (
            <a
              key={company.name}
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border/60 p-8 hover:border-[var(--card-accent)] transition-all duration-500 group animate-on-scroll"
              style={
                {
                  "--card-accent": company.accentColor,
                  transitionDelay: `${i * 150}ms`,
                } as React.CSSProperties
              }
            >
              <div
                className="h-px w-10 mb-8 transition-all duration-500 group-hover:w-20"
                style={{ background: company.accentColor }}
              />

              <p className="text-[10px] font-sans font-light tracking-[0.25em] text-muted-foreground/70 mb-4">
                {company.tag}
              </p>

              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-foreground tracking-[0.04em] mb-5">
                {company.name}
              </h3>

              <p className="text-sm text-muted-foreground font-light leading-[1.8] tracking-wide mb-8">
                {company.description}
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-border/40">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: company.accentColor }}
                />
                <span className="text-[10px] font-sans font-light tracking-[0.25em] text-muted-foreground/80 uppercase">
                  {company.status}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
