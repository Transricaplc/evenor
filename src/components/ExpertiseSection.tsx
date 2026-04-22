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
          Evenor Holdings builds, scales, and quietly stewards ventures across
          African markets — spanning safety intelligence, civic technology,
          premium lifestyle, sport and culture, logistics, and advisory. Each
          holding is operated with discretion, patience, and an enduring
          commitment to craft.
        </p>
      </div>
    </section>
  );
};

export default ExpertiseSection;
