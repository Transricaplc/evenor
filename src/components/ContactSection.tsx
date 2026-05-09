import { useState, FormEvent } from "react";
import { MapPin, Mail, Globe } from "lucide-react";

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
      <div className="container-wide max-w-4xl">
        <div className="text-center mb-12 text-white">
          <p className="gold-label mb-4">Start a Conversation</p>
          <h2 className="font-display text-white text-3xl md:text-5xl font-bold mb-6">
            The Right Project Deserves<br />the Right Partner.
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto font-light leading-relaxed text-base md:text-lg">
            Whether you are a government authority commissioning infrastructure, a mining operator seeking operational excellence, or an international firm seeking African market entry support — Evenor Holdings invites a confidential, no-obligation engagement with our principals.
          </p>
        </div>

        {submitted ? (
          <div className="bg-navy-deep/40 border border-gold/40 p-12 text-center animate-fade-in">
            <p className="text-gold font-display text-2xl md:text-3xl">
              Thank you. A member of our principals' office will contact you within 48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 shadow-2xl">
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

        <div className="grid md:grid-cols-3 gap-6 mt-14 text-white text-sm">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
            <span className="font-light">1st Floor, Cape Dahlia, 80 Coral Road, West Beach, Cape Town, 7441</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-gold flex-shrink-0" />
            <a href="mailto:info@evenor.co.za" className="hover:text-gold transition-colors">info@evenor.co.za</a>
          </div>
          <div className="flex items-center gap-3">
            <Globe size={18} className="text-gold flex-shrink-0" />
            <span>www.evenor.co.za</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
