import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "HOME", href: "#home" },
  { label: "SECTORS", href: "#sectors" },
  { label: "ABOUT", href: "#about" },
  { label: "LEADERSHIP", href: "#leadership" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <button onClick={() => go("#home")} className="text-left">
          <span className="font-display text-white text-xl md:text-2xl tracking-wide">Evenor Holdings</span>
          <div className="h-[2px] w-10 bg-gold mt-1" />
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.href)}
              className="nav-underline text-white text-[12px] font-medium tracking-[0.18em]"
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => go("#contact")} className="btn-gold !py-2.5 !px-5 !text-[11px]">
            Partner With Us
          </button>
        </div>

        <button onClick={() => setOpen(true)} className="lg:hidden text-white" aria-label="Open menu">
          <Menu size={26} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-navy z-50 flex flex-col">
          <div className="flex justify-end p-6">
            <button onClick={() => setOpen(false)} className="text-white" aria-label="Close menu">
              <X size={28} />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => go(l.href)}
                className="text-white text-lg font-medium tracking-[0.22em]"
              >
                {l.label}
              </button>
            ))}
            <button onClick={() => go("#contact")} className="btn-gold mt-4">Partner With Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
