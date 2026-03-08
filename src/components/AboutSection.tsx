import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Target, Eye } from "lucide-react";

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proudly South African. <span className="text-gradient-teal">Globally Connected.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="card-evenor p-8 lg:p-10 animate-on-scroll delay-100">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Target className="text-accent" size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Evenor Holdings exists to be the premier strategic connector and business facilitator
              across Africa and beyond. We optimise logistics, energy flows, supply chains, ICT
              infrastructure, and commodity trading while bridging key stakeholders — governments,
              policymakers, enterprises, and communities — to create measurable value, inclusive growth,
              and sustainable competitive advantages.
            </p>
          </div>

          <div className="card-evenor p-8 lg:p-10 animate-on-scroll delay-200">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Eye className="text-accent" size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To position Africa as a global powerhouse through seamless connections, innovative
              facilitation, and always-better outcomes — transforming challenges into prosperity from
              Cape Town to every corner of the world.
            </p>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-12 text-sm animate-on-scroll delay-300">
          Registered in South Africa &nbsp;|&nbsp; HQ: Blouberg, Cape Town &nbsp;|&nbsp; Driving innovation and global partnerships
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
