import { useState, FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ContactSection = () => {
  const ref = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    "w-full bg-transparent border-b border-border/60 px-0 py-4 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent/40 transition-colors duration-500 font-light tracking-wide";

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-narrow max-w-xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground tracking-[0.06em] mb-6">
            Private Correspondence
          </h2>
          <div className="separator-rule mb-6" />
          <p className="text-xs text-muted-foreground font-light tracking-[0.12em]">
            All matters handled with absolute discretion.
          </p>
        </div>

        <div className="animate-on-scroll delay-200">
          {submitted ? (
            <div className="text-center py-20">
              <p className="font-serif text-lg text-foreground mb-3">Received</p>
              <p className="text-xs text-muted-foreground font-light tracking-wide">
                We shall respond through appropriate channels.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">
              <input type="text" required placeholder="Name" className={inputClasses} />
              <input type="email" required placeholder="Email" className={inputClasses} />
              <textarea
                rows={3}
                placeholder="Brief nature of interest"
                className={`${inputClasses} resize-none`}
              />
              <input
                type="text"
                placeholder="Referral (optional)"
                className={inputClasses}
              />

              <div className="pt-8">
                <button
                  type="submit"
                  className="text-xs font-light tracking-[0.2em] uppercase px-10 py-3 border border-accent/30 text-accent/80 hover:text-accent hover:border-accent/60 transition-all duration-500"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="mt-24 pt-12 border-t border-border/40 text-center space-y-3 animate-on-scroll delay-400">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-xs text-muted-foreground/50 font-light tracking-wide">
            <a
              href="mailto:joachimurio@evenor.co.za"
              className="hover:text-accent transition-colors duration-500"
            >
              joachimurio@evenor.co.za
            </a>
            <a
              href="mailto:sandykhumalo@evenor.co.za"
              className="hover:text-accent transition-colors duration-500"
            >
              sandykhumalo@evenor.co.za
            </a>
          </div>
          <p className="text-xs text-muted-foreground/30 font-light tracking-wide">
            Blouberg, Cape Town
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
