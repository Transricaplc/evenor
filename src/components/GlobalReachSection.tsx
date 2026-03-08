import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Globe } from "lucide-react";

const regions = [
  {
    name: "Africa",
    countries: "Kenya, Tanzania, Zambia, Angola, Egypt, Botswana, Eswatini, Malawi, Ethiopia, Congo, Nigeria, Sudan, Mali, Togo, Burundi, Rwanda",
  },
  {
    name: "Middle East",
    countries: "UAE, Kuwait",
  },
  {
    name: "Americas",
    countries: "Canada, USA, Mexico, Brazil, Argentina, Chile",
  },
  {
    name: "Europe & Others",
    countries: "Luxembourg, Germany, Israel",
  },
  {
    name: "Asia",
    countries: "China, Japan, Thailand, Russia, India, Vietnam",
  },
];

const GlobalReachSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="global-reach" className="section-padding bg-navy-gradient" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
            <Globe className="text-teal-glow" size={32} />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Connecting Africa to the <span className="text-gradient-teal">World</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Active in <span className="text-accent font-semibold">30+ Countries</span> — From our Cape Town HQ, we facilitate partnerships across continents.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, i) => (
            <div
              key={region.name}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-6 animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="font-display text-lg font-bold text-accent mb-3">{region.name}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{region.countries}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-primary-foreground/50 mt-10 text-sm italic animate-on-scroll">
          And expanding daily through trusted networks.
        </p>
      </div>
    </section>
  );
};

export default GlobalReachSection;
