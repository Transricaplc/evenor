import { useEffect, useState } from "react";

const KEY = "evenor.cookieConsent.v1";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ choice, at: new Date().toISOString() }));
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy-deep border-t-2 border-gold text-white">
      <div className="container-wide py-5 md:py-6 flex flex-col md:flex-row gap-5 md:gap-8 items-start md:items-center">
        <div className="flex-1">
          <p className="text-white text-[11px] tracking-[0.22em] uppercase text-gold mb-2">
            Privacy Notice
          </p>
          <p className="text-white/80 text-sm font-light leading-relaxed max-w-3xl">
            Evenor Holdings uses functional cookies to operate this site and analytics
            cookies to improve it. In accordance with South Africa's POPIA, no personal
            information is processed without your consent.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => decide("declined")}
            className="text-white/70 hover:text-white text-[11px] tracking-[0.2em] uppercase font-medium px-4 py-3 border border-white/20 hover:border-white/50 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => decide("accepted")}
            className="btn-gold !py-3 !px-5 !text-[11px]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
