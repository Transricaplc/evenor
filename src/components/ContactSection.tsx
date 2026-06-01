import { useState, FormEvent } from "react";
import { MapPin, Mail, Globe, Phone } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inp =
    "w-full bg-white border border-navy/15 px-4 py-3 text-sm text-navy placeholder:text-midgray/70 focus:outline-none focus:border-gold transition-colors";

  return (
    <section id="contact" className="section-pad" style={{ background: "linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--navy-light)) 100%)" }}>
      <div className="container-wide">
        <div className="text-center mb-12 text-white max-w-4xl mx-auto">
          <p className="gold-label mb-4">Start a Conversation</p>
          <h2 className="font-display text-white text-3xl md:text-5xl font-bold mb-6">
            The Right Project Deserves<br />the Right Partner.
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto font-light leading-relaxed text-base md:text-lg">
            Whether you are a government authority commissioning infrastructure, a mining operator seeking operational excellence, or an international firm seeking African market entry support — Evenor Holdings invites a confidential, no-obligation engagement with our principals.
          </p>
        </div>

        <div className="grid lg:grid-cols-[2fr_3fr] shadow-2xl max-w-6xl mx-auto">
          <div
            className="hidden lg:block relative bg-cover bg-center min-h-full border-r-4 border-gold"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=85')" }}
            aria-hidden
          >
            <div className="absolute inset-0 bg-navy/40" />
          </div>

          <div className="bg-white p-8 md:p-10">
            {submitted ? (
              <div className="bg-navy-deep/5 border border-gold/40 p-12 text-center">
                <p className="text-navy font-display text-2xl md:text-3xl">
                  Thank you. A member of our principals' office will contact you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <input required name="name" placeholder="Full Name" className={inp} />
                  <input required name="org" placeholder="Organisation / Institution" className={inp} />
                  <input required name="country" placeholder="Country" className={inp} />
                  <select required name="sector" className={inp} defaultValue="">
                    <option value="" disabled>Sector of Interest</option>
                    <option>Logistics</option>
                    <option>ICT Infrastructure</option>
                    <option>Consulting</option>
                    <option>Petrochemicals</option>
                    <option>Mining</option>
                    <option>Other</option>
                  </select>
                  <input required type="email" name="email" placeholder="Email Address" className={inp} />
                  <input name="phone" placeholder="Phone Number" className={inp} />
                </div>
                <textarea required name="msg" rows={5} placeholder="Message / Nature of Enquiry" className={`${inp} mt-4 resize-none`} />
                <div className="mt-6 flex justify-end">
                  <button type="submit" className="btn-gold w-full md:w-auto">Submit Enquiry →</button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-14 text-white text-sm max-w-6xl mx-auto">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
            <span className="font-light">1st Floor, Cape Dahlia, 80 Coral Road, West Beach, Cape Town, 7441</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-gold flex-shrink-0" />
            <a href="mailto:info@evenor.org" className="hover:text-gold transition-colors">info@evenor.org</a>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-gold flex-shrink-0" />
            <a href="tel:+27815402781" className="hover:text-gold transition-colors">+27 81 540 2781</a>
          </div>
          <div className="flex items-center gap-3">
            <Globe size={18} className="text-gold flex-shrink-0" />
            <span>www.evenor.org</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
