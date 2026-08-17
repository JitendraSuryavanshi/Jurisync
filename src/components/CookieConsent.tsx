import React, { useState, useEffect } from 'react';
import { ShieldCheck, Check, X } from 'lucide-react';

interface CookieConsentProps {
  onNavigate: (path: string) => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onNavigate }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('jurisync_dpdp_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('jurisync_dpdp_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('jurisync_dpdp_consent', 'essential_only');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-40 bg-slate-900/95 backdrop-blur text-white p-4 rounded-2xl shadow-2xl border border-slate-800 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="space-y-2 text-xs">
          <div className="font-bold text-sm text-slate-100 flex items-center justify-between">
            <span>Data Privacy & Security Notice</span>
            <button
              onClick={handleDecline}
              className="text-slate-400 hover:text-white p-0.5 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            In compliance with the <strong className="text-white">Digital Personal Data Protection (DPDP) Act, 2023</strong>, Jurisync LLP uses essential session cookies to authenticate filings, protect KYC uploads, and deliver statutory legal services.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={handleAccept}
              id="cookie-consent-accept"
              className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg transition-colors"
            >
              Accept & Continue
            </button>
            <button
              onClick={() => onNavigate('privacy-policy')}
              className="px-3 py-1.5 text-slate-300 hover:text-white text-xs underline underline-offset-2 transition-colors"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
