import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ExpertiseSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="facilitation" className="section-padding" ref={ref}>
      <div className="container-narrow max-w-2xl mx-auto text-center">
        <div className="animate-on-scroll">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground tracking-[0.06em] mb-10">
            Technology Holdings
          </h2>
          <div className="separator-rule mb-10" />
        </div>

        <p className="animate-on-scroll delay-200 text-sm sm:text-base text-muted-foreground font-light leading-[1.9] tracking-wide">
          Evenor Holdings builds and scales technology companies addressing real
          infrastructure gaps in African cities. We focus on two verticals: public
          safety intelligence and civic accountability software. Both companies are
          live, seeded with real data, and operating in their respective markets.
        </p>
      </div>
    </section>
  );
};

export default ExpertiseSection;
