import React from 'react';
import { ShieldCheck, FileText, Lock, Scale, AlertCircle, ArrowRight } from 'lucide-react';

interface LegalViewProps {
  type: 'privacy-policy' | 'terms-of-service' | 'refund-policy';
  onNavigate: (path: string, param?: string) => void;
  onOpenConsultation: (servicePreselect?: string) => void;
}

export const LegalView: React.FC<LegalViewProps> = ({
  type,
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 pb-16 sm:pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-12 text-white shadow-xl border border-slate-800 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>Statutory & Regulatory Transparency</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            {type === 'privacy-policy' && 'Privacy Policy & Data Protection (DPDP Act)'}
            {type === 'terms-of-service' && 'Terms of Service & Engagement'}
            {type === 'refund-policy' && 'Refund, Cancellation & Delivery Policy'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Jurisync LLP (LLPIN ACQ-7658) operates in strict adherence with Ministry of Corporate Affairs (MCA) and Indian IT Laws.
          </p>
        </div>
      </section>

      {/* Content Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-sm space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed">
          {/* Quick tab switcher */}
          <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-200">
            <button
              onClick={() => onNavigate('privacy-policy')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                type === 'privacy-policy'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms-of-service')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                type === 'terms-of-service'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Terms of Service
            </button>
            <button
              onClick={() => onNavigate('refund-policy')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                type === 'refund-policy'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Refund & Cancellation
            </button>
          </div>

          {/* Privacy Policy */}
          {type === 'privacy-policy' && (
            <div className="space-y-6">
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Digital Personal Data Protection Act, 2023 Compliant</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Your PAN, Aadhaar, bank records, and statutory documents are encrypted in transit and at rest. They are utilized exclusively for filing with the Ministry of Corporate Affairs (MCA), GST Portal, Income Tax Department, and Intellectual Property Office (CGPDTM).
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">1. Information We Collect</h3>
                <p>
                  To fulfill legal, corporate registration, and tax filings, Jurisync LLP collects personal identification and corporate documentation including Director PAN cards, Aadhaar identity documents, utility proofs, bank statements, photographs, and DSC digital signatures.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">2. Purpose of Data Processing</h3>
                <p>
                  Collected data is processed solely for:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li>Preparation and execution of SPICe+ (INC-32, INC-33, INC-34) corporate incorporation dossiers.</li>
                  <li>Filing of annual returns (AOC-4, MGT-7/7A) and DIR-3 KYC compliance.</li>
                  <li>Processing Goods and Services Tax (GST REG-01), MSME Udyam, and Trademark applications.</li>
                  <li>Customer service and communication regarding milestone updates and statutory deadlines.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">3. Non-Disclosure & Third-Party Sharing</h3>
                <p>
                  Jurisync LLP adheres to strict non-disclosure principles. We do not sell, rent, or lease client information to telemarketers or third-party data brokers. Data is transmitted only to certified statutory government gateways (e.g. MCA21, GSTN, IP India).
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">4. Grievance Redressal</h3>
                <p>
                  In accordance with the Information Technology Act 2000 and DPDP Act 2023, queries or complaints regarding data privacy can be addressed to our Data Protection Officer at{' '}
                  <strong className="text-slate-900">support@jurisync.online</strong>.
                </p>
              </div>
            </div>
          )}

          {/* Terms of Service */}
          {type === 'terms-of-service' && (
            <div className="space-y-6">
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3">
                <Scale className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Professional Engagement Notice</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Services are facilitated through practicing Company Secretaries, Chartered Accountants, and Advocates governed by ICSI, ICAI, and Bar Council statutory codes of conduct.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">1. Nature of Services</h3>
                <p>
                  Jurisync LLP provides technology-enabled professional facilitation for corporate legal, secretarial, taxation, and intellectual property requirements. We assist in drafting, filing, and tracking government submissions across Indian state and central registries.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">2. Client Responsibilities & True Disclosures</h3>
                <p>
                  The client represents and warrants that all documentation, identification credentials, business object disclosures, and declarations provided are authentic, legally accurate, and free of misrepresentation. Jurisync LLP is not liable for statutory penalties resulting from willful misstatements or forged documentation supplied by the applicant.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">3. Government Processing Timelines</h3>
                <p>
                  While Jurisync guarantees rapid dossier preparation (typically within 24 to 48 hours upon complete document receipt), final approvals, Certificate of Incorporation issuance, and trademark grants are subject to scrutiny, queries (resubmissions), and processing velocities of respective government departments (ROC, GSTN, CGPDTM).
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">4. Jurisdiction</h3>
                <p>
                  All agreements and disputes shall be subject to the exclusive jurisdiction of the competent courts in Hisar / Haryana, India.
                </p>
              </div>
            </div>
          )}

          {/* Refund Policy */}
          {type === 'refund-policy' && (
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200 flex items-start gap-3">
                <FileText className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Clear & Fair Cancellation Framework</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    We maintain transparent billing. Read below for our fee refund timelines and government duty exemptions.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">1. Cancellation Prior to Work Inception</h3>
                <p>
                  If you cancel your service order before our professional team begins document drafting, name search validation, or DSC issuance, a 100% refund of professional fees will be initiated to the original payment method within 5–7 working days (minus gateway charges if applicable).
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">2. Non-Refundable Statutory Fees & Disbursements</h3>
                <p>
                  Statutory fees, government challans, stamp duties, MCA portal fees, and DSC issuance costs paid directly to government treasuries or certifying authorities (Class-3 DSC) are strictly non-refundable once the challan has been generated on the government portal.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">3. Resubmission & Drafting Support</h3>
                <p>
                  In the event of an MCA / Registrar of Companies resubmission query, our team provides up to 2 complimentary document rectifications and name resubmission filings without charging additional professional fees.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-slate-900">4. Refund Request Process</h3>
                <p>
                  To request a cancellation, please email{' '}
                  <strong className="text-slate-900">support@jurisync.online</strong> quoting your Order Reference Number (e.g. JUR-84291).
                </p>
              </div>
            </div>
          )}

          {/* Bottom Back Button */}
          <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
            <button
              onClick={() => onNavigate('home')}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
            >
              <span>← Back to Home</span>
            </button>

            <button
              onClick={() => onOpenConsultation()}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-sm"
            >
              Talk to Compliance Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
