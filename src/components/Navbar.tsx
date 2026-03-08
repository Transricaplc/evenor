import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Facilitation", href: "#facilitation" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-narrow flex items-center justify-between px-6 sm:px-8 lg:px-12">
        <button onClick={() => scrollTo("#home")} className="group">
          <span className="text-foreground text-lg font-light tracking-[0.2em] uppercase">
            Evenor Holdings
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-muted-foreground hover:text-foreground text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="text-xs font-medium tracking-[0.1em] uppercase px-6 py-2.5 border border-accent/40 text-accent hover:bg-accent/10 transition-all duration-300"
          >
            Initiate Discussion
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border">
          <div className="px-6 py-8 space-y-5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="block w-full text-left text-muted-foreground hover:text-foreground text-xs font-medium tracking-[0.15em] uppercase transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-border">
              <button
                onClick={() => scrollTo("#contact")}
                className="text-xs font-medium tracking-[0.1em] uppercase px-6 py-2.5 border border-accent/40 text-accent hover:bg-accent/10 transition-all duration-300 w-full"
              >
                Initiate Confidential Discussion
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
