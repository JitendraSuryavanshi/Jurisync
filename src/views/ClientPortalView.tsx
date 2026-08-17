import React, { useState } from 'react';
import {
  Lock,
  User,
  Phone,
  KeyRound,
  FileCheck,
  Download,
  Clock,
  ShieldCheck,
  HelpCircle,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  FolderOpen,
  Calendar,
} from 'lucide-react';

interface ClientPortalViewProps {
  onNavigate: (path: string, param?: string) => void;
  onOpenConsultation: (servicePreselect?: string) => void;
}

export const ClientPortalView: React.FC<ClientPortalViewProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [authMode, setAuthMode] = useState<'otp' | 'srn'>('otp');
  const [identifier, setIdentifier] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'filings' | 'documents' | 'support'>('filings');

  // Mock demo active company filings for authenticated view
  const demoFilings = [
    {
      srn: 'SRN-2025-MCA-9821',
      company: 'Zenith Labs Private Limited',
      service: 'Private Limited Incorporation (SPICe+)',
      status: 'ROC Processing',
      statusColor: 'text-blue-700 bg-blue-50 border-blue-200',
      filedOn: '14 Aug 2025',
      estCompletion: '19 Aug 2025',
      assignedCS: 'CS Legal Cell #4',
      documentsReady: 3,
    },
    {
      srn: 'GST-REG-77291',
      company: 'Zenith Labs Private Limited',
      service: 'GST Registration (REG-01)',
      status: 'Approved & Active',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      filedOn: '08 Aug 2025',
      estCompletion: 'Completed',
      assignedCS: 'Tax & GST Counsel',
      documentsReady: 2,
    },
  ];

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
    }, 600);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsLoggedIn(true);
    }, 700);
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 pb-16 sm:pb-24">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-12 text-white shadow-xl border border-slate-800 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>Secure Client Access · 256-Bit SSL Encrypted</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Jurisync Client Portal & Compliance Vault
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Access your incorporation certificates, PAN/TAN letters, GSTIN documents, MCA filing SRNs, and live case support in one unified dashboard.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isLoggedIn ? (
          /* Login Card */
          <div className="max-w-md mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
            <div className="text-center space-y-1.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto mb-2">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-slate-900">Client Sign In</h2>
              <p className="text-xs text-slate-500">
                Enter your registered Mobile / Email or Filing SRN to access your files.
              </p>
            </div>

            {/* Auth Mode Switcher */}
            <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('otp');
                  setOtpSent(false);
                }}
                className={`flex-1 py-2 rounded-lg transition-all ${
                  authMode === 'otp' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                Mobile / Email OTP
              </button>
              <button
                type="button"
                onClick={() => setAuthMode('srn')}
                className={`flex-1 py-2 rounded-lg transition-all ${
                  authMode === 'srn' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                Direct SRN Tracking
              </button>
            </div>

            {authMode === 'otp' ? (
              !otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Registered Mobile Number or Email
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        placeholder="e.g. +91 98765 43210 or your@company.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <span>Sending OTP...</span>
                    ) : (
                      <>
                        <span>Get One-Time Password</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs border border-emerald-200">
                    OTP sent successfully to <strong>{identifier}</strong>. (Demo OTP: Any 4 digits)
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Enter 4-Digit OTP
                    </label>
                    <div className="relative">
                      <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        maxLength={6}
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value)}
                        placeholder="1234"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-amber-500 focus:outline-none tracking-widest font-mono"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? <span>Verifying...</span> : <span>Verify & Access Dashboard</span>}
                  </button>

                  <button
                    type="button"
                    onClick={() => setOtpSent(false)}
                    className="w-full text-center text-xs text-slate-500 hover:text-slate-800"
                  >
                    Change Mobile / Email
                  </button>
                </form>
              )
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    MCA / GST Service Request Number (SRN)
                  </label>
                  <input
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="e.g. SRN-2025-MCA-9821"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-amber-500 focus:outline-none font-mono uppercase"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? <span>Fetching Dossier...</span> : <span>Access Filing Dossier</span>}
                </button>
              </form>
            )}

            <div className="pt-4 border-t border-slate-100 text-center space-y-2">
              <p className="text-xs text-slate-500">Need help accessing your portal?</p>
              <a
                href="https://wa.me/917988068145?text=Hi%20Jurisync%20Support%2C%20I%20need%20help%20logging%20into%20my%20Client%20Portal."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Contact Client Support Desk</span>
              </a>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="space-y-8">
            {/* Top User Greeting Bar */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Active Client Account
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-slate-900">
                  Welcome to Your Compliance Vault
                </h2>
                <p className="text-xs text-slate-500">
                  Registered Entity: <strong>Zenith Labs Private Limited</strong> (CIN: U72900HR2025PTC112345)
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenConsultation('Filing Upgrade or New Service')}
                  className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
                >
                  <FolderOpen className="w-4 h-4" />
                  <span>Request New Filing</span>
                </button>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>

            {/* Dashboard Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              {[
                { id: 'filings', label: 'Active Filings & SRNs' },
                { id: 'documents', label: 'Certificates & Vault' },
                { id: 'support', label: 'Support & Case Advisory' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            {activeTab === 'filings' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {demoFilings.map((filing) => (
                  <div
                    key={filing.srn}
                    className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {filing.srn}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-slate-900 mt-1">
                          {filing.service}
                        </h3>
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${filing.statusColor}`}>
                        {filing.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      <div>
                        <p className="text-[10px] text-slate-400">Filed On</p>
                        <p className="font-semibold text-slate-800">{filing.filedOn}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400">Est. Completion</p>
                        <p className="font-semibold text-slate-800">{filing.estCompletion}</p>
                      </div>
                      <div className="col-span-2 pt-1 border-t border-slate-200/60">
                        <p className="text-[10px] text-slate-400">Assigned Professional</p>
                        <p className="font-semibold text-slate-800">{filing.assignedCS}</p>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={() => onNavigate('track-order')}
                        className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                      >
                        <span>View Live Timeline</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={`https://wa.me/917988068145?text=Hi%20Jurisync%2C%20I%20have%20an%20update%20request%20for%20${filing.srn}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 flex items-center gap-1 hover:bg-emerald-100"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>Discuss Filing</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Statutory Documents Vault
                  </h3>
                  <span className="text-xs text-slate-500">Watermarked official filings</span>
                </div>

                <div className="divide-y divide-slate-100">
                  {[
                    { name: 'Certificate of Incorporation (Form SPICe+)', type: 'PDF · 1.4 MB', date: '08 Aug 2025' },
                    { name: 'Permanent Account Number (PAN Card Letter)', type: 'PDF · 420 KB', date: '08 Aug 2025' },
                    { name: 'Tax Deduction Account Number (TAN Letter)', type: 'PDF · 380 KB', date: '08 Aug 2025' },
                    { name: 'Goods & Services Tax Certificate (REG-06)', type: 'PDF · 890 KB', date: '10 Aug 2025' },
                    { name: 'Drafted e-MoA & e-AoA (CS Certified)', type: 'PDF · 2.1 MB', date: '07 Aug 2025' },
                  ].map((doc, idx) => (
                    <div key={idx} className="py-3.5 flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
                          <FileCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{doc.name}</p>
                          <p className="text-[11px] text-slate-400">{doc.type} · Issued {doc.date}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => alert(`Downloading official document: ${doc.name}`)}
                        className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-slate-600" />
                        <span>Download</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Raise a Case Advisory Ticket
                  </h3>
                  <p className="text-xs text-slate-600">
                    Submit your query directly to your assigned Company Secretary or Chartered Accountant.
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert('Support ticket created. Your assigned CS team will contact you within 15 minutes.');
                    }}
                    className="space-y-3"
                  >
                    <input
                      type="text"
                      placeholder="Subject (e.g. Director Addition question)"
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:bg-white focus:border-amber-500"
                      required
                    />
                    <textarea
                      rows={3}
                      placeholder="Describe your inquiry or requirement..."
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:outline-none focus:bg-white focus:border-amber-500"
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      Submit Ticket to Legal Desk
                    </button>
                  </form>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-lg space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Priority Client Support</span>
                    </div>
                    <h4 className="font-serif text-xl font-bold text-white">
                      Instant Case Advisory via WhatsApp
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      For urgent clarifications on MCA notices, board meetings, or GST filing deadlines, connect directly with our compliance desk.
                    </p>
                  </div>

                  <a
                    href="https://wa.me/917988068145?text=Hi%20Jurisync%20CS%20Team%2C%20I%20need%20urgent%20case%20support%20for%20Zenith%20Labs."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open Case Discussion on WhatsApp</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};
