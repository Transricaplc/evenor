import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  { num: "01", title: "Discovery & Stakeholder Mapping" },
  { num: "02", title: "Strategy & Opportunity Design" },
  { num: "03", title: "Connection & Implementation" },
  { num: "04", title: "Optimisation & Long-Term Partnership" },
];

const ProcessSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-teal">Process</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-accent/20 z-0" />
              )}
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-bold text-lg font-body">{step.num}</span>
                </div>
                <h3 className="font-body text-sm font-semibold text-foreground">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
