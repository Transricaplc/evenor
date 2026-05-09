const Footer = () => {
  return (
    <footer style={{ background: "hsl(var(--navy-deep))" }} className="text-white/70 pt-16 pb-6">
      <div className="container-wide grid md:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-white text-xl mb-1">Evenor Holdings (Pty) Ltd</p>
          <p className="text-gold italic text-sm mb-4">Always Better.</p>
          <p className="text-xs leading-relaxed text-white/60">Reg. No. K2025/717968 · CIPC South Africa</p>
          <p className="text-xs leading-relaxed text-white/60 mt-1">B-BBEE Level 2 Contributor</p>
          <p className="text-xs text-white/50 mt-4">© 2026 Evenor Holdings (Pty) Ltd. All rights reserved.</p>
        </div>
        <div>
          <p className="text-white text-[11px] tracking-[0.2em] uppercase mb-4">Sectors</p>
          <ul className="space-y-2 text-sm font-light">
            <li>Logistics & Supply Chain</li>
            <li>ICT Infrastructure</li>
            <li>Management Consulting</li>
            <li>Petrochemicals Solutions</li>
            <li>Mining Solutions</li>
          </ul>
        </div>
        <div>
          <p className="text-white text-[11px] tracking-[0.2em] uppercase mb-4">Company</p>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="#about" className="hover:text-gold transition-colors">About Evenor Holdings</a></li>
            <li><a href="#leadership" className="hover:text-gold transition-colors">Leadership</a></li>
            <li><a href="#projects" className="hover:text-gold transition-colors">Projects & Portfolio</a></li>
            <li><a href="mailto:talent@evenor.co.za" className="hover:text-gold transition-colors">Careers</a></li>
            <li><a href="#contact" className="hover:text-gold transition-colors">Partner With Us</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white text-[11px] tracking-[0.2em] uppercase mb-4">Legal & Contact</p>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="mailto:info@evenor.co.za" className="hover:text-gold transition-colors">info@evenor.co.za</a></li>
            <li>+27 21 554 4000</li>
            <li>Privacy Policy</li>
            <li>Terms of Engagement</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>

      <div className="container-wide mt-12 pt-6 border-t flex flex-col md:flex-row justify-between gap-2 text-[12px] text-white/40" style={{ borderColor: "hsl(var(--navy-light))" }}>
        <span>Evenor Holdings (Pty) Ltd — www.evenor.co.za</span>
        <span>Designed with purpose. Built for Africa.</span>
      </div>
    </footer>
  );
};

export default Footer;
