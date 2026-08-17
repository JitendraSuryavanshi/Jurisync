import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Building,
  User,
  Sparkles,
} from 'lucide-react';
import { SUB_SERVICES } from '../data/servicesData';
import { LeadSubmission } from '../types';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: 'private-limited-company',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const lead: LeadSubmission = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem('jurisync_leads') || '[]');
    existing.push(lead);
    localStorage.setItem('jurisync_leads', JSON.stringify(existing));

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 pb-16 sm:pb-24">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-12 text-white shadow-xl border border-slate-800 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <Building className="w-4 h-4 text-amber-400" />
            <span>Official Office & Communication Channels</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Contact Jurisync LLP
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect directly with Practicing Company Secretaries and Chartered Accountants. We are here to answer your incorporation, tax, and licensing queries.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards & Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Registered Office & Desk
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Jurisync LLP (Registered Office)</p>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      391, Old Anaj Mandi, Hisar City, Haryana – 125001, India
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1 font-mono">LLPIN: ACQ-7658 · ROC Haryana</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Telephone / Direct Helpline</p>
                    <p className="text-slate-600 mt-0.5">
                      <a href="tel:+917988068145" className="hover:text-amber-600 font-semibold">
                        +91 79880 68145
                      </a>
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Mon – Sat: 9:30 AM – 7:30 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Email Inquiries & Documents</p>
                    <p className="text-slate-600 mt-0.5">
                      <a href="mailto:support@jurisync.online" className="hover:text-amber-600">
                        support@jurisync.online
                      </a>
                    </p>
                    <p className="text-slate-600">
                      <a href="mailto:hello@jurisync.online" className="hover:text-amber-600">
                        hello@jurisync.online
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Official WhatsApp Desk</p>
                    <p className="text-slate-600 mt-0.5">Instant chats with CS & CA professionals</p>
                    <a
                      href="https://wa.me/917988068145?text=Hi%20Jurisync%2C%20I%20have%20an%20inquiry."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-700 font-bold mt-1 hover:underline text-xs"
                    >
                      <span>Start WhatsApp Conversation</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Statutory Transparency Box */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-amber-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Statutory Compliance Guarantee</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                All legal consultations and compliance filings are conducted under the supervision of Hannu Goyal (CS, LLB), Founder & Designated Partner, Jurisync LLP.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-slate-900">
                  Send a Direct Message / Book Strategy Call
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill out this brief form and our team will get in touch within 15 minutes.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4 bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our Company Secretary desk will review your details and call you on{' '}
                    <strong className="text-slate-900">{formData.phone}</strong>.
                  </p>
                  <div className="pt-3 flex justify-center">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Amit Verma"
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-amber-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit mobile"
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-amber-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        City / State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Hisar / Delhi / Gurugram"
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Required Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-amber-600"
                    >
                      {Object.values(SUB_SERVICES).map((sub) => (
                        <option key={sub.id} value={sub.id}>
                          {sub.name} (from ₹{sub.startingPrice.toLocaleString('en-IN')})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message / Business Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your business or specific filing requirement..."
                      className="w-full p-3 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      id="contact-form-submit-btn"
                      className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
                    >
                      {loading ? (
                        <span>Transmitting Inquiry...</span>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-amber-200" />
                          <span>Submit Inquiry to CS Desk</span>
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-slate-400 text-center mt-2">
                      🔒 Protected by the Digital Personal Data Protection Act, 2023. Zero spam.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
