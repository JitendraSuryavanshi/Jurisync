import React, { useState } from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, Phone, MapPin, User, ArrowRight } from 'lucide-react';
import { SUB_SERVICES } from '../data/servicesData';
import { LeadSubmission } from '../types';

interface LeadCaptureBannerProps {
  onSuccess?: () => void;
  defaultService?: string;
  headline?: string;
  subheadline?: string;
}

export const LeadCaptureBanner: React.FC<LeadCaptureBannerProps> = ({
  onSuccess,
  defaultService = 'private-limited-company',
  headline = 'Get Your Free Legal & Compliance Strategy Session',
  subheadline = 'Consult directly with Practicing Company Secretaries and Chartered Accountants. Fixed fee quotes, zero surprise charges.',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [service, setService] = useState(defaultService);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const lead: LeadSubmission = {
      name,
      phone,
      city,
      service,
      submittedAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem('jurisync_leads') || '[]');
    existing.push(lead);
    localStorage.setItem('jurisync_leads', JSON.stringify(existing));

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 500);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-slate-800">
      {submitted ? (
        <div className="text-center py-6 space-y-3">
          <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="font-serif text-2xl font-bold">Thank you, {name}!</h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Our CS team is reviewing your requirement and will call you on <strong className="text-white">{phone}</strong> within 15 minutes.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href="https://wa.me/917988068145?text=Hi%20Jurisync%2C%20I%20just%20submitted%20my%20details%20on%20your%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all"
            >
              Chat on WhatsApp Right Now
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Instant Call Back Within 15 Mins</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {headline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {subheadline}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Name */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Mobile Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit number"
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Select Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs bg-slate-900/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-500"
                >
                  {Object.values(SUB_SERVICES).map((sub) => (
                    <option key={sub.id} value={sub.id} className="bg-slate-900 text-white">
                      {sub.name} (₹{sub.startingPrice.toLocaleString('en-IN')})
                    </option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  City / State
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Hisar / Delhi"
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero spam guarantee · Data secured under DPDP Act 2023</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                id="lead-banner-submit-btn"
                className="w-full sm:w-auto px-8 py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 active:scale-98"
              >
                {loading ? (
                  <span>Connecting with CS...</span>
                ) : (
                  <>
                    <span>Get Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
