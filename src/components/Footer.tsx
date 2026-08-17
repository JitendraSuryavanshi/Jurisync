import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { SERVICE_CATEGORIES, SUB_SERVICES } from '../data/servicesData';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Lock,
  FileText,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string, param?: string) => void;
  onOpenConsultation: (servicePreselect?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Statutory Entity Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block">
              <BrandLogo className="h-9" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Jurisync is India's tech-enabled legal, tax, and compliance marketplace connecting entrepreneurs, startups, and growing enterprises with certified Company Secretaries, Chartered Accountants, and Advocates.
            </p>

            {/* Legal Entity Registration Box */}
            <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 space-y-2 text-xs">
              <div className="font-bold text-amber-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Statutory Entity Details</span>
              </div>
              <p className="text-slate-300">
                <span className="font-semibold text-white">Legal Entity:</span> Jurisync LLP
              </p>
              <p className="text-slate-300">
                <span className="font-semibold text-white">LLPIN:</span> ACQ-7658
              </p>
              <p className="text-slate-300">
                <span className="font-semibold text-white">Incorporated:</span> 23 August 2025 · ROC Haryana
              </p>
              <p className="text-slate-300">
                <span className="font-semibold text-white">Designated Partner & CS:</span> CS Hannu Goyal (ACS, LLB)
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-2 pt-1 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>391, Old Anaj Mandi, Hisar City, Haryana – 125001, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+917988068145" className="hover:text-amber-400 transition-colors">
                  +91 79880 68145 (Mon – Sat, 9:30 AM – 7:30 PM IST)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:support@jurisync.online" className="hover:text-amber-400 transition-colors">
                  support@jurisync.online / hello@jurisync.online
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Incorporation & Taxation */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Registration & Tax
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('service', 'private-limited-company')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Private Limited Company (₹6,999)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'llp-registration')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  LLP Registration (₹5,999)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'opc-registration')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  One Person Company (OPC)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'section-8-company')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Section 8 NGO Registration
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'gst-registration')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  GST Registration (₹799)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'gst-returns-filing')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Monthly GST Returns (GSTR-3B)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'income-tax-return')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Income Tax Returns (ITR)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Trademark, ROC & Licences */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              IP, MCA & Licences
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('service', 'trademark-filing')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Trademark (™) Filing (₹1,999)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'trademark-objection-reply')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Trademark Objection Reply
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'annual-roc-filing')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Annual ROC Filings (AOC-4 / MGT-7)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'dir-3-kyc')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Director DIR-3 KYC (₹499)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'msme-udyam-registration')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  MSME Udyam Certificate (₹499)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'iec-code-registration')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Import Export Code (IEC)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service', 'fssai-food-licence')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  FSSAI Food Safety Licence
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Newsletter */}
          <div className="space-y-4">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Resources & Due Dates
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('compliance-calendar')}
                  className="text-amber-400 font-semibold hover:text-amber-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Compliance Due Date Calendar</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Complete Pricing Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('track-order')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Track Filing Status Online
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Articles & MCA Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  About Hannu Goyal & Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-left"
                >
                  Contact & Office Directions
                </button>
              </li>
            </ul>

            {/* Newsletter Input */}
            <div className="pt-2">
              <p className="text-xs font-bold text-white mb-1.5">
                Statutory Compliance Alerts
              </p>
              <p className="text-[11px] text-slate-400 mb-2">
                Never miss an MCA, GST or Tax deadline.
              </p>
              <form onSubmit={handleNewsletter} className="space-y-2">
                <div className="flex gap-1.5">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="name@company.com"
                    required
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    id="newsletter-submit-btn"
                    className="px-3 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg transition-colors shrink-0"
                  >
                    Subscribe
                  </button>
                </div>
                {newsletterSuccess && (
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Subscribed! You will receive monthly deadline reminders.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>
              © 2026 <strong className="text-slate-300">Jurisync LLP</strong> (LLPIN ACQ-7658). All rights reserved. Registered under Ministry of Corporate Affairs, ROC Haryana.
            </p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Disclaimer: Jurisync is a technology platform connecting users with licensed CS, CA, and Legal professionals. It is not an advertising agency or law firm solicitation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => onNavigate('privacy-policy')}
              id="footer-privacy-link"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy (DPDP Act)
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('terms-of-service')}
              id="footer-terms-link"
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('refund-policy')}
              id="footer-refund-link"
              className="hover:text-slate-300 transition-colors"
            >
              Refund & Cancellation Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
