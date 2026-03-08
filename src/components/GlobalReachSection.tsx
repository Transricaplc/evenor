import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const GlobalReachSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="global-reach" className="section-padding bg-card" ref={ref}>
      <div className="container-narrow max-w-2xl mx-auto text-center">
        <div className="animate-on-scroll">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Presence
          </p>
          <h2 className="text-2xl sm:text-3xl font-extralight text-foreground mb-6">
            Active Worldwide
          </h2>
          <div className="separator-line mb-10" />
        </div>

        <p className="text-sm text-muted-foreground font-light leading-relaxed animate-on-scroll delay-100">
          Headquartered in Blouberg, Cape Town. Confidential engagements across
          key African markets, Middle East, select Americas, Asia, and Europe.
        </p>
      </div>
    </section>
  );
};

export default GlobalReachSection;
