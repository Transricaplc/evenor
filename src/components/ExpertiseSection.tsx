import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ExpertiseSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="facilitation" className="section-padding" ref={ref}>
      <div className="container-narrow max-w-2xl mx-auto text-center">
        <div className="animate-on-scroll">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground tracking-[0.06em] mb-10">
            Legacy Facilitation
          </h2>
          <div className="separator-rule mb-10" />
        </div>

        <p className="animate-on-scroll delay-200 text-sm sm:text-base text-muted-foreground font-light leading-[1.9] tracking-wide">
          Evenor Holdings provides confidential strategic connectivity, commodity
          interests, infrastructure counsel, and policy engagement for select
          individuals and institutions of longstanding influence. Headquartered
          in Blouberg, Cape Town. Engagements by referral and mutual recognition
          only.
        </p>
      </div>
    </section>
  );
};

export default ExpertiseSection;
