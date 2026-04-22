import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const interests = [
  {
    title: "Logistics",
    body: "Discreet supply chain, warehousing, and last-mile coordination supporting our consumer and enterprise ventures across the Western Cape and beyond.",
  },
  {
    title: "Consultancy",
    body: "Advisory across safety, civic technology, lifestyle retail, and infrastructure — counsel reserved for founders, family offices, and government partners.",
  },
  {
    title: "Strategic Partnerships",
    body: "Long-horizon alliances with operators, investors, and institutions building enduring value across African markets. Quiet, deliberate, and measured.",
  },
];

const InterestsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="interests" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground tracking-[0.06em] mb-6">
            Interests
          </h2>
          <div className="separator-rule" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {interests.map((item, i) => (
            <div
              key={item.title}
              className="text-center animate-on-scroll"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-foreground tracking-[0.05em] mb-5">
                {item.title}
              </h3>
              <div className="h-px w-8 bg-accent/60 mx-auto mb-6" />
              <p className="text-sm text-muted-foreground font-light leading-[1.9] tracking-wide">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
