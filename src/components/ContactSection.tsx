import { useState, FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mail, MapPin, Lock, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    "w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 transition-colors font-light";

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow max-w-2xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-extralight text-foreground mb-6">
            Private Inquiry
          </h2>
          <div className="separator-line mb-8" />
          <p className="text-xs text-muted-foreground font-light">
            For select opportunities only. All communications strictly confidential.
          </p>
        </div>

        <div className="animate-on-scroll delay-100">
          {submitted ? (
            <div className="text-center py-16">
              <Send size={20} className="text-accent mx-auto mb-4" />
              <h3 className="text-lg font-light text-foreground mb-2">Inquiry Received</h3>
              <p className="text-xs text-muted-foreground font-light">
                We will respond through secure channels.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="text" required placeholder="Name *" className={inputClasses} />
                <input type="email" required placeholder="Email *" className={inputClasses} />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="tel" placeholder="Phone (optional)" className={inputClasses} />
                <input type="text" placeholder="Company / Title" className={inputClasses} />
              </div>
              <input type="text" placeholder="Referral Source (recommended)" className={inputClasses} />
              <textarea
                rows={3}
                placeholder="Your message"
                className={`${inputClasses} resize-none`}
              />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                <button
                  type="submit"
                  className="text-xs font-medium tracking-[0.15em] uppercase px-8 py-3.5 border border-accent/40 text-accent hover:bg-accent/10 transition-all duration-300"
                >
                  Submit Confidential Inquiry
                </button>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground/40">
                  <Lock size={10} />
                  Encrypted & Private
                </span>
              </div>
            </form>
          )}
        </div>

        <div className="mt-20 pt-12 border-t border-border text-center space-y-4 animate-on-scroll delay-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-muted-foreground">
            <a
              href="mailto:joachimurio@evenor.co.za"
              className="flex items-center gap-1.5 hover:text-accent transition-colors duration-300"
            >
              <Mail size={12} />
              joachimurio@evenor.co.za
            </a>
            <a
              href="mailto:sandykhumalo@evenor.co.za"
              className="flex items-center gap-1.5 hover:text-accent transition-colors duration-300"
            >
              <Mail size={12} />
              sandykhumalo@evenor.co.za
            </a>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground/50">
            <MapPin size={10} />
            Blouberg, Cape Town, South Africa
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
