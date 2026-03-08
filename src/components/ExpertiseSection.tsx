import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const facilitationData = [
  {
    title: "Strategic Connectivity & High-Level Introductions",
    description:
      "Brokering confidential introductions between decision-makers, sovereign entities, and select enterprises across continents.",
  },
  {
    title: "Commodity & Resource Trading",
    description:
      "Facilitating high-value commodity transactions with discretion, integrity, and deep market intelligence.",
  },
  {
    title: "Infrastructure Advisory",
    description:
      "Expert counsel in logistics, energy transition, and digital/ICT infrastructure for transformative outcomes.",
  },
  {
    title: "Policy & Government Relations",
    description:
      "Navigating policy landscapes and fostering constructive government engagement for transformative outcomes.",
  },
];

const ExpertiseSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="facilitation" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-20 animate-on-scroll">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Facilitation
          </p>
          <h2 className="text-2xl sm:text-3xl font-extralight text-foreground mb-6">
            What We Do
          </h2>
          <div className="separator-line" />
        </div>

        <div className="space-y-16 max-w-2xl mx-auto">
          {facilitationData.map((item, i) => (
            <div
              key={item.title}
              className="text-center animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
