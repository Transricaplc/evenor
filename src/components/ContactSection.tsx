import { useState, FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";

const interestOptions = [
  "Logistics Optimisation",
  "Energy Transition",
  "Supply Chain",
  "ICT Infrastructure",
  "Commodity Trading",
  "General Facilitation",
  "Other",
];

const ContactSection = () => {
  const ref = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-navy-gradient" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Ready to Make It <span className="text-gradient-teal">Always Better</span>?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Connect with us to explore opportunities in logistics, energy, supply chain, ICT,
            commodity trading, or general business facilitation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-3 animate-on-scroll">
            {submitted ? (
              <div className="rounded-xl border border-accent/30 bg-primary-foreground/5 p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="text-accent" size={28} />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">Thank You!</h3>
                <p className="text-primary-foreground/70">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    className="w-full rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Email *"
                    className="w-full rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                  <select
                    className="w-full rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground/70 focus:outline-none focus:border-accent/50 transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>Interested In...</option>
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt} className="text-foreground bg-background">{opt}</option>
                    ))}
                  </select>
                </div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
                <button type="submit" className="btn-primary-evenor w-full sm:w-auto text-base">
                  <Send size={16} className="mr-2" />
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-8 animate-on-scroll delay-200">
            <div>
              <h3 className="font-display text-lg font-bold text-primary-foreground mb-4">Direct Contact</h3>
              <div className="space-y-3">
                <a href="mailto:joachimurio@evenor.co.za" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  <Mail size={16} className="text-accent" />
                  <span><strong className="text-primary-foreground/90">CEO:</strong> joachimurio@evenor.co.za</span>
                </a>
                <a href="mailto:sandykhumalo@evenor.co.za" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  <Mail size={16} className="text-accent" />
                  <span><strong className="text-primary-foreground/90">COO:</strong> sandykhumalo@evenor.co.za</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-primary-foreground mb-4">Headquarters</h3>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin size={16} className="text-accent mt-0.5" />
                <span>Blouberg, Cape Town<br />South Africa</span>
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-primary-foreground mb-4">Connect</h3>
              <a href="#" className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Linkedin size={18} className="text-accent" />
                Follow us on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
