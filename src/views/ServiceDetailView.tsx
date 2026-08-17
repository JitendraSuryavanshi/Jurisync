import React, { useState } from 'react';
import { SUB_SERVICES, SERVICE_CATEGORIES } from '../data/servicesData';
import { FAQAccordion } from '../components/FAQAccordion';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  FileText,
  Building2,
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronRight,
  User,
  MapPin,
  Lock,
} from 'lucide-react';
import { LeadSubmission } from '../types';

interface ServiceDetailViewProps {
  serviceId: string;
  onNavigate: (path: string, param?: string) => void;
  onOpenConsultation: (servicePreselect?: string) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  serviceId,
  onNavigate,
  onOpenConsultation,
}) => {
  const service = SUB_SERVICES[serviceId] || SUB_SERVICES['private-limited-company'];
  const parentCategory = SERVICE_CATEGORIES.find((c) => c.id === service.categoryId);

  // Quick inquiry form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<string>(service.pricingTiers[1]?.name || service.pricingTiers[0]?.name);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const lead: LeadSubmission = {
      name,
      phone,
      city,
      service: `${service.name} (${selectedPlan})`,
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
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
          <button onClick={() => onNavigate('home')} className="hover:text-slate-900 transition-colors">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          {parentCategory && (
            <>
              <button
                onClick={() => onNavigate('category', parentCategory.id)}
                className="hover:text-slate-900 transition-colors"
              >
                {parentCategory.name}
              </button>
              <ChevronRight className="w-3.5 h-3.5" />
            </>
          )}
          <span className="text-slate-900 font-semibold">{service.name}</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CS Certified Filing</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Avg Timeline: {service.turnaroundTime}</span>
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {service.name}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {service.overview}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenConsultation(service.name)}
                  id="service-hero-primary-cta"
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Started from ₹{service.startingPrice.toLocaleString('en-IN')}</span>
                </button>

                <a
                  href={`https://wa.me/917988068145?text=Hi%20Jurisync%2C%20I%20want%20to%20apply%20for%20${encodeURIComponent(service.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold text-xs sm:text-sm rounded-xl border border-slate-700 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Badge Card */}
            <div className="lg:col-span-4 bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                <span className="text-slate-400">Jurisync Professional Fee</span>
                <span className="text-lg font-serif font-bold text-amber-400">
                  from ₹{service.startingPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                All filings prepared and attested by licensed Company Secretaries (CS Hannu Goyal's desk) and Chartered Accountants.
              </p>
              <div className="pt-1 space-y-1 text-[11px] text-slate-400">
                <p>✓ 100% Online Paperless Process</p>
                <p>✓ Zero Hidden Legal Drafting Charges</p>
                <p>✓ Live MCA / GST Status Tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Main Body (8 Cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* 1. PRICING TIERS */}
            <section className="space-y-6">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                  Choose Your Package
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  All tiers include dedicated CS drafting and end-to-end government portal filing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.pricingTiers.map((tier) => {
                  const isPopular = tier.popular;
                  return (
                    <div
                      key={tier.name}
                      className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all relative ${
                        isPopular
                          ? 'border-2 border-amber-500 bg-amber-50/20 shadow-lg'
                          : 'border border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      {isPopular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                          Recommended
                        </span>
                      )}

                      <div className="space-y-3">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-slate-900">
                            {tier.name}
                          </h3>
                          <p className="text-[11px] text-slate-500 mt-0.5">{tier.description}</p>
                        </div>

                        <div className="pt-2 border-t border-slate-100">
                          <span className="text-2xl font-serif font-extrabold text-slate-950">
                            ₹{tier.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-[11px] text-slate-400 block">
                            {tier.govtFees || '+ Govt fees at actuals'}
                          </span>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                          {tier.features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="text-slate-700 text-[11px]">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-5 mt-4 border-t border-slate-100">
                        <button
                          onClick={() => {
                            setSelectedPlan(tier.name);
                            onOpenConsultation(`${service.name} (${tier.name})`);
                          }}
                          className={`w-full py-2.5 rounded-xl font-bold text-xs transition-colors ${
                            isPopular
                              ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm'
                              : 'bg-slate-900 hover:bg-slate-800 text-white'
                          }`}
                        >
                          Select {tier.name}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 2. DELIVERABLES / WHAT YOU GET */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                What's Included in This Service
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.whatsIncluded.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-800">{deliv}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. DOCUMENTS REQUIRED */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                  Documents Required
                </h2>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Encrypted Upload</span>
                </span>
              </div>
              <p className="text-xs text-slate-500">
                You can upload clear photos or scanned PDFs from your smartphone:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {service.documentsRequired.map((docGroup, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-600 shrink-0" />
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                        {docGroup.category}
                      </h4>
                    </div>
                    <ul className="space-y-1.5 pl-5 list-disc text-xs text-slate-600">
                      {docGroup.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. PROCESS STEPS */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                Step-by-Step Filing Workflow
              </h2>

              <div className="space-y-4">
                {service.processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-sm font-bold text-slate-900">{step.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. ELIGIBILITY CRITERIA */}
            <section className="bg-amber-50/50 rounded-3xl p-6 sm:p-8 border border-amber-200 space-y-3">
              <h3 className="font-serif text-lg font-bold text-amber-950">
                Statutory Eligibility & MCA Requirements
              </h3>
              <ul className="space-y-2 text-xs text-amber-950">
                {service.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 6. FAQS */}
            <section>
              <FAQAccordion
                faqs={service.faqs}
                title={`${service.name} FAQs`}
                subtitle="Frequently asked questions answered by Practicing Company Secretaries."
              />
            </section>
          </div>

          {/* Right Sticky Inquiry Form Sidebar (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-xl space-y-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span>Free Initial Screening</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Book Free Consultation
                </h3>
                <p className="text-xs text-slate-500">
                  Discuss structure, name availability & get custom quote.
                </p>
              </div>

              {submitted ? (
                <div className="py-6 text-center space-y-3 bg-emerald-50 rounded-2xl p-4 border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-sm text-slate-900">Callback Confirmed!</h4>
                  <p className="text-xs text-slate-600">
                    Our CS team will call you at <strong className="text-slate-900">{phone}</strong> in 15 minutes.
                  </p>
                  <a
                    href={`https://wa.me/917988068145?text=Hi%20Jurisync%2C%20I%20just%20submitted%20for%20${encodeURIComponent(service.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-emerald-600 text-white font-semibold text-xs rounded-xl"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full pl-8 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit number"
                        className="w-full pl-8 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      City / State
                    </label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Hisar / Delhi / Mumbai"
                        className="w-full pl-8 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Selected Tier
                    </label>
                    <select
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-amber-600"
                    >
                      {service.pricingTiers.map((t) => (
                        <option key={t.name} value={t.name}>
                          {t.name} (₹{t.price.toLocaleString('en-IN')})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      id="service-detail-submit-btn"
                      className="w-full py-3 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
                    >
                      {loading ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Request Callback from CS Desk</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-1 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>DPDP Act 2023 Compliant · Zero Spam</span>
                  </div>
                </form>
              )}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="tel:+917988068145"
                  className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>Call +91 79880 68145</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
