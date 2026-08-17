import React, { useState } from 'react';
import {
  ShieldCheck,
  Building2,
  Receipt,
  FileCheck,
  Award,
  Scale,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Phone,
  MessageCircle,
  Star,
  Users,
  Search,
  ChevronRight,
  TrendingUp,
  FileText,
  Lock,
} from 'lucide-react';
import { SERVICE_CATEGORIES, SUB_SERVICES } from '../data/servicesData';
import { TESTIMONIALS } from '../data/testimonialsData';
import { BLOG_POSTS } from '../data/blogData';
import { CategoryIcon } from '../components/CategoryIcon';
import { PricingCalculator } from '../components/PricingCalculator';
import { FounderTeaser } from '../components/FounderTeaser';
import { LeadCaptureBanner } from '../components/LeadCaptureBanner';
import { FAQAccordion } from '../components/FAQAccordion';

interface HomeViewProps {
  onNavigate: (path: string, param?: string) => void;
  onOpenConsultation: (servicePreselect?: string) => void;
  onOpenSearch: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenSearch,
}) => {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('business-registration');
  const [quickSearch, setQuickSearch] = useState('');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickSearch.trim()) {
      onOpenSearch();
    }
  };

  const generalFAQs = [
    {
      question: 'Why choose Jurisync over traditional offline agents or generic SaaS portals?',
      answer: 'Unlike automated portals where your files are handled by non-legal data entry clerks, every company incorporation, GST filing, and trademark at Jurisync is scrutinized and certified by practicing Company Secretaries (CS), Chartered Accountants (CA), and Advocates led by CS Hannu Goyal. You get personal accountability with transparent, fixed pricing.',
    },
    {
      question: 'Are there any hidden government fees or unexpected stamp duty charges?',
      answer: 'Zero hidden fees. We quote complete transparency: our professional fee and the exact statutory government fees/stamp duty prescribed by the Ministry of Corporate Affairs (MCA) and respective State Governments.',
    },
    {
      question: 'Is the entire compliance process 100% online, or do I need to visit an office?',
      answer: 'It is 100% digital and paperless. You can upload documents securely from your smartphone or laptop, complete video KYC in 60 seconds, and track your filing progress in real time through our Track Order portal.',
    },
    {
      question: 'What is Jurisync’s legal status and accreditation in India?',
      answer: 'Jurisync is legally incorporated as Jurisync LLP under the Ministry of Corporate Affairs, Government of India (LLPIN ACQ-7658, incorporated 23 August 2025, registered with ROC Haryana, Hisar).',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 sm:pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-12 sm:pb-20 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/50 via-amber-50/30 to-transparent blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-md animate-in fade-in slide-in-from-top-2 duration-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Registered Corporate Legal LLP · LLPIN ACQ-7658</span>
              <span className="text-slate-500">|</span>
              <span className="text-amber-400 font-bold">Practicing CS & CA Network</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              Compliance that moves at the{' '}
              <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900 bg-clip-text text-transparent italic">
                speed of your business.
              </span>
            </h1>

            {/* Sub-Headline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              India’s trusted legal & compliance marketplace connecting founders and enterprises with certified Company Secretaries, Chartered Accountants, and Advocates for incorporation, taxation, trademark, and ROC filings.
            </p>

            {/* Instant Search Bar inside Hero */}
            <div className="max-w-2xl mx-auto pt-2">
              <form
                onSubmit={handleHeroSearch}
                className="flex items-center bg-white p-2 rounded-2xl shadow-xl border border-slate-200 focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-500/20 transition-all"
              >
                <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                <input
                  type="text"
                  value={quickSearch}
                  onChange={(e) => setQuickSearch(e.target.value)}
                  onClick={onOpenSearch}
                  placeholder="Search 'Pvt Ltd', 'GST Registration ₹799', 'Trademark ™', 'AOC-4'..."
                  className="w-full px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent cursor-pointer"
                />
                <button
                  type="button"
                  onClick={onOpenSearch}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <span>Search</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Popular quick tags */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Popular:</span>
                {[
                  { name: 'Pvt Ltd (₹6,999)', id: 'private-limited-company' },
                  { name: 'GSTIN (₹799)', id: 'gst-registration' },
                  { name: 'Trademark (₹1,999)', id: 'trademark-filing' },
                  { name: 'Director KYC (₹499)', id: 'dir-3-kyc' },
                  { name: 'MSME (₹499)', id: 'msme-udyam-registration' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate('service', item.id)}
                    className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 font-medium transition-colors text-[11px]"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
              <button
                onClick={() => onOpenConsultation()}
                id="hero-primary-cta"
                className="px-8 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-amber-600/30 transition-all flex items-center gap-2 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Get Free Consultation</span>
              </button>

              <a
                href="https://wa.me/917988068145?text=Hi%20Jurisync%20Legal%20Desk%2C%20I%20would%20like%20to%20discuss%20corporate%20compliance%20and%20filings."
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base rounded-xl border border-slate-200 shadow-sm transition-all flex items-center gap-2 hover:border-emerald-500 text-emerald-700"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                <span>For Discussion & Support</span>
              </a>
            </div>

            {/* Trust Stats Bar */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-200/80">
              <div className="p-4 bg-white/70 backdrop-blur rounded-2xl border border-slate-200/80 text-center shadow-xs">
                <p className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900">15,000+</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Filings & Registrations</p>
              </div>

              <div className="p-4 bg-white/70 backdrop-blur rounded-2xl border border-slate-200/80 text-center shadow-xs">
                <p className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-700">15 Mins</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Avg Response Time</p>
              </div>

              <div className="p-4 bg-white/70 backdrop-blur rounded-2xl border border-slate-200/80 text-center shadow-xs">
                <p className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900">100%</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Digital & Paperless MCA</p>
              </div>

              <div className="p-4 bg-white/70 backdrop-blur rounded-2xl border border-slate-200/80 text-center shadow-xs">
                <p className="font-serif text-2xl sm:text-3xl font-extrabold text-emerald-700">250+</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Vetted CS / CA Network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE COMPLIANCE SERVICES DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Full-Spectrum Statutory Compliance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
            Certified Legal, Tax & Corporate Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Select a category below to view statutory timelines, deliverables, and fixed-fee packages certified by practicing Company Secretaries and Chartered Accountants.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 pt-1 scrollbar-none no-scrollbar">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = activeCategoryTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryTab(cat.id)}
                id={`tab-${cat.id}`}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 shadow-xs cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md scale-100 ring-2 ring-slate-900 ring-offset-2'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                <CategoryIcon
                  name={cat.iconName}
                  className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`}
                />
                <span>{cat.name}</span>
                {cat.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                      isActive
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Category Display Banner */}
        {(() => {
          const currentCat =
            SERVICE_CATEGORIES.find((c) => c.id === activeCategoryTab) ||
            SERVICE_CATEGORIES[0];
          const catServices = currentCat.subServiceIds
            .map((id) => SUB_SERVICES[id])
            .filter(Boolean);

          return (
            <div className="mt-6 space-y-6">
              {/* Category Description Strip */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                      {currentCat.name}
                    </h3>
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-full">
                      {catServices.length} Filings Available
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">{currentCat.description}</p>
                </div>

                <button
                  onClick={() => onNavigate('category', currentCat.id)}
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 shrink-0 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs hover:border-amber-400 transition-colors"
                >
                  <span>Open Full Category Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Sub-Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catServices.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{service.turnaroundTime}</span>
                        </span>
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                          From ₹{service.startingPrice.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-serif text-xl font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>

                      {/* Deliverables Checklist */}
                      <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                        {service.whatsIncluded.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
                      <button
                        onClick={() => onNavigate('service', service.id)}
                        id={`btn-view-${service.id}`}
                        className="flex-1 py-2.5 px-3 bg-slate-900 group-hover:bg-amber-600 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onOpenConsultation(service.name)}
                        title="Book free advisory call"
                        className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
                      >
                        Consult
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* 3. HOW IT WORKS: 4-STEP PROCESS */}
      <section className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Simple, Transparent & 100% Online</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              How Jurisync Handles Your Compliance in 4 Simple Steps
            </h2>
            <p className="text-sm text-slate-600">
              No endless paperwork, physical visits, or confusing legal jargon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              {
                step: '01',
                title: 'Share Requirement',
                description: 'Select your service or speak with our CS team for structural guidance and name clearance check.',
                icon: FileText,
                badge: '15 Mins',
              },
              {
                step: '02',
                title: 'Get Fixed Quote',
                description: 'Receive an all-inclusive itemized proposal with zero hidden legal drafting or portal charges.',
                icon: Receipt,
                badge: 'Transparent',
              },
              {
                step: '03',
                title: 'Upload Documents',
                description: 'Upload PAN, Aadhaar, and premises proof securely through our encrypted document portal.',
                icon: Lock,
                badge: '256-Bit SSL',
              },
              {
                step: '04',
                title: 'We File & Deliver',
                description: 'Our Practicing CS/CA files with MCA/GST/IP India and hands over official government certificates.',
                icon: ShieldCheck,
                badge: 'Certified',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative group hover:bg-amber-50/40 hover:border-amber-300 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-extrabold text-amber-600/40 group-hover:text-amber-700 transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-white text-slate-700 rounded-full border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white text-slate-900 flex items-center justify-center mb-3 shadow-xs border border-slate-200">
                    <Icon className="w-5 h-5 text-slate-800" />
                  </div>

                  <h4 className="font-serif text-lg font-bold text-slate-900 mb-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE JURISYNC: STATUTORY ASSURANCE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-slate-800">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>The Jurisync Advantage</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                Corporate Governance Backed by Certified Company Secretaries
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Unlike generic document aggregators, every charter drafting, GST return, and ROC resolution at Jurisync is scrutinized by practicing CS & CA professionals.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('pricing')}
                id="pillar-pricing-btn"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2"
              >
                <span>View Full Pricing Table (28+ Filings)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center font-bold">
                01
              </div>
              <h4 className="font-serif font-bold text-base text-white">Practicing CS Oversight</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Under the direct stewardship of CS Hannu Goyal (ACS, LLB), your filings adhere strictly to the Companies Act 2013 and ICSI standards.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center font-bold">
                02
              </div>
              <h4 className="font-serif font-bold text-base text-white">Transparent Govt Fee Billing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Itemized quotes upfront. Official MCA and State Stamp Duty challans are shared directly with zero secret markups.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center font-bold">
                03
              </div>
              <h4 className="font-serif font-bold text-base text-white">Live Milestone Tracking</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Track your SRN and registration progress live via our web portal, or receive instant WhatsApp milestone updates.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center font-bold">
                04
              </div>
              <h4 className="font-serif font-bold text-base text-white">100% Digital & Paperless</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complete incorporation, DSC token creation, and director KYC entirely online without ever stepping into a physical office.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE PRICING CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingCalculator onOpenConsultation={onOpenConsultation} />
      </section>

      {/* 6. FOUNDER & CEO SPOTLIGHT (Hannu Goyal CS LLB) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FounderTeaser
          onNavigateAbout={() => onNavigate('about')}
          onOpenConsultation={() => onOpenConsultation('Founder Advisory Call')}
        />
      </section>

      {/* 7. VERIFIED TESTIMONIALS */}
      <section className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>4.9 / 5 Average Client Satisfaction</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Trusted by 15,000+ Founders & Growing Businesses
            </h2>
            <p className="text-sm text-slate-600">
              Read authentic feedback from Indian startups, manufacturing units, and service firms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 6).map((test) => (
              <div
                key={test.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{test.content}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-9 h-9 rounded-full ${test.avatarBg || 'bg-slate-800'} text-white font-bold text-xs flex items-center justify-center`}
                    >
                      {test.avatarText}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{test.name}</p>
                      <p className="text-[11px] text-slate-500">{test.company}</p>
                    </div>
                  </div>

                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                    {test.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LATEST ARTICLES / KNOWLEDGE BASE TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold mb-2">
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Compliance Knowledge Base</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-slate-950 tracking-tight">
              Legal, MCA & Taxation Insights
            </h2>
          </div>

          <button
            onClick={() => onNavigate('blog')}
            className="text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 shrink-0"
          >
            <span>Read all articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <div
              key={post.id}
              onClick={() => onNavigate('blog-post', post.id)}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 font-semibold text-[11px]">
                    {post.category}
                  </span>
                  <span className="text-slate-400">{post.readTime}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>By {post.author.name}</span>
                <span className="text-amber-700 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Guide <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. GENERAL FAQS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion
          faqs={generalFAQs}
          title="Common Questions About Jurisync"
          subtitle="Everything you need to know about our legal structure, pricing transparency, and certified CS/CA workflows."
        />
      </section>

      {/* 10. FINAL LEAD CAPTURE CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCaptureBanner />
      </section>
    </div>
  );
};
