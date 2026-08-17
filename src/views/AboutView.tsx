import React, { useState } from 'react';
import {
  ShieldCheck,
  Building,
  Scale,
  Award,
  Users,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Sparkles,
  ArrowRight,
  FileText,
} from 'lucide-react';
import { LeadCaptureBanner } from '../components/LeadCaptureBanner';

interface AboutViewProps {
  onNavigate: (path: string, param?: string) => void;
  onOpenConsultation: (servicePreselect?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [imgError, setImgError] = useState(false);
  const founderImgUrl =
    'https://instagram.fdel42-1.fna.fbcdn.net/v/t51.82787-19/671112866_18440075656184226_764077122720833930_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fdel42-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2gE5Jl5G5b40efoSHZo_ghLp7DObsUaNRN1LCrikA9VXlaWI-caAyKAgo-a9h_4ggyU&_nc_ohc=jfPNh4niHW0Q7kNvwEMf6Jv&_nc_gid=RHDy9AgPOaHfzcJoUbpAzQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AQFf_512JHiIbqVTruc_KFY_DCqZyUu6CtLFdSeVrv9N9g&oe=6A88F58B&_nc_sid=7a9f4b';

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 pb-16 sm:pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-12 text-white shadow-2xl border border-slate-800 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>Practicing CS Leadership · LLPIN ACQ-7658</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Building India’s Most Accountable Legal & Compliance Ecosystem
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Jurisync LLP was founded to replace impersonal call-centers and opaque middlemen with direct access to certified Company Secretaries, Chartered Accountants, and Advocates.
          </p>
        </div>
      </section>

      {/* Founder & Statutory Entity Profile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Founder Portrait & Badge */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-xl border-4 border-amber-500/30 bg-slate-900 flex items-center justify-center">
                  {!imgError ? (
                    <img
                      src={founderImgUrl}
                      alt="Hannu Goyal - Founder & CEO, Jurisync LLP"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-700 to-blue-950 flex flex-col items-center justify-center p-4 text-white">
                      <Scale className="w-16 h-16 text-amber-300 mb-2" />
                      <span className="font-serif font-bold text-2xl">HG</span>
                      <span className="text-xs text-amber-200 uppercase tracking-widest font-sans font-semibold">
                        CS, LLB
                      </span>
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 px-3 py-1 rounded-full text-xs font-bold shadow-md whitespace-nowrap flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-slate-950" />
                  <span>CS Hannu Goyal, LLB</span>
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Hannu Goyal
                </h3>
                <p className="text-xs font-semibold text-amber-700">
                  Founder & Chief Executive Officer
                </p>
                <p className="text-xs text-slate-500">
                  Practicing Company Secretary & Advocate (LLB)
                </p>
              </div>

              {/* Direct Booking CTA */}
              <div className="mt-4">
                <button
                  onClick={() => onOpenConsultation('Senior Counsel Advisory')}
                  id="about-founder-book-call-btn"
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Schedule Advisory Discussion</span>
                </button>
              </div>
            </div>

            {/* Founder Story & Vision */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>Founder's Message</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                "Indian entrepreneurs should spend their energy innovating, not wrestling with corporate compliance."
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  As a practicing Company Secretary and legal professional (LLB), I repeatedly witnessed founders getting trapped by opaque quote structures, missed ROC due dates, and non-certified customer service reps who lacked legal knowledge.
                </p>
                <p>
                  We built <strong>Jurisync LLP</strong> to set a new gold standard: combining high-speed digital workflows with verified professional accountability. When you entrust your Private Limited incorporation or Trademark to us, it is crafted with the exact precision mandated by the Ministry of Corporate Affairs.
                </p>
              </div>

              {/* Statutory Entity Breakdown Table */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-amber-600" />
                  <span>Statutory Corporate Identity</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-slate-700">
                  <div>
                    <span className="font-semibold text-slate-900">Legal Name:</span> Jurisync LLP
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">LLPIN:</span> ACQ-7658
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Incorporation Date:</span> 23 Aug 2025
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">ROC Jurisdiction:</span> ROC Haryana
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-semibold text-slate-900">Registered Office:</span> 391, Old Anaj Mandi, Hisar City, Haryana – 125001
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars / Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Our 4 Core Operating Principles
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            How we protect your legal interests and guarantee peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Practicing CS Oversight',
              desc: 'Every MoA, AoA, resolution, and SPICe+ form is vetted by licensed Company Secretaries before portal submission.',
              icon: ShieldCheck,
            },
            {
              title: 'Zero Hidden Fees',
              desc: 'No sudden drafting charges or surcharges. What we quote upfront includes professional and statutory fees.',
              icon: Scale,
            },
            {
              title: '15-Minute SLA Guarantee',
              desc: 'Our compliance desk responds to founder inquiries within 15 minutes during standard working hours.',
              icon: Calendar,
            },
            {
              title: 'Bank-Grade Data Privacy',
              desc: 'All PAN, Aadhaar, and financial records are encrypted under the Digital Personal Data Protection Act 2023.',
              icon: Building,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3 hover:border-amber-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Office & Direct Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold">Visit or Connect with Us</h3>
            <p className="text-xs text-slate-400">
              Our registered office in Hisar, Haryana is open for in-person advisory by appointment.
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>391, Old Anaj Mandi, Hisar City, Haryana – 125001, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="tel:+917988068145" className="hover:text-amber-400">
                +91 79880 68145
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="mailto:support@jurisync.online" className="hover:text-amber-400">
                support@jurisync.online
              </a>
            </div>
          </div>

          <div className="flex justify-start lg:justify-end">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md"
            >
              Get Directions & Office Hours
            </button>
          </div>
        </div>
      </section>

      {/* Lead Capture Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCaptureBanner />
      </section>
    </div>
  );
};
