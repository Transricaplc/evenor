import { Linkedin } from "lucide-react";

const footerLinks = ["Home", "Expertise", "Global Reach", "Leadership", "Contact"];

const Footer = () => {
  const scrollTo = (label: string) => {
    const id = label === "Home" ? "#home" : `#${label.toLowerCase().replace(/\s/g, "-")}`;
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
              <span className="font-display text-accent-foreground font-bold text-sm">E</span>
            </div>
            <span className="font-display text-primary-foreground text-lg font-bold">Evenor Holdings</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>© 2026 Evenor Holdings (Pty) Ltd &nbsp;|&nbsp; Proudly South African</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
