import React, { useState } from 'react';
import { getOrderByQuery, MOCK_ORDERS } from '../data/orderTrackerMock';
import { TrackedOrder } from '../types';
import {
  Search,
  ShieldCheck,
  CheckCircle2,
  Clock,
  FileText,
  Building2,
  Download,
  AlertCircle,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowRight,
  User,
} from 'lucide-react';

interface TrackOrderViewProps {
  onNavigate: (path: string, param?: string) => void;
  onOpenConsultation: (servicePreselect?: string) => void;
}

export const TrackOrderView: React.FC<TrackOrderViewProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [query, setQuery] = useState('JUR-84291');
  const [order, setOrder] = useState<TrackedOrder | null>(getOrderByQuery('JUR-84291'));
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const found = getOrderByQuery(query);
      setOrder(found);
      setHasSearched(true);
    }
  };

  const getStageBadgeColor = (currentStage: string) => {
    switch (currentStage) {
      case 'Completed':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'MCA/Govt Filing':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Document Verification':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 pb-16 sm:pb-24">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-12 text-white shadow-xl border border-slate-800 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Live MCA & GST Statutory Tracker</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Track Your Filing & Certificate Status
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Enter your Jurisync Order ID (e.g. <span className="text-amber-400 font-mono font-bold">JUR-84291</span>) or registered phone number to view live milestones and download approved certificates.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto pt-4 flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Order ID (e.g. JUR-84291) or Mobile"
                required
                className="w-full pl-10 pr-3 py-3 text-xs sm:text-sm bg-white text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <button
              type="submit"
              id="track-order-search-btn"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95 shrink-0"
            >
              Track Status
            </button>
          </form>

          {/* Quick sample IDs */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 pt-2">
            <span>Try sample records:</span>
            {['JUR-84291', 'JUR-71044'].map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setQuery(id);
                  setOrder(getOrderByQuery(id));
                  setHasSearched(true);
                }}
                className="text-amber-400 hover:underline font-mono"
              >
                {id}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Order Status Display Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {order ? (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8 animate-in fade-in duration-300">
            {/* Top Order Summary Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                    {order.orderId}
                  </span>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${getStageBadgeColor(
                      order.currentStage
                    )}`}
                  >
                    ● Stage: {order.currentStage}
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-slate-900">
                  {order.serviceName}
                </h2>
                {order.filingEntityName && (
                  <p className="text-xs font-semibold text-amber-800">
                    Entity: {order.filingEntityName}
                  </p>
                )}
                <p className="text-xs text-slate-500">
                  Client: <strong className="text-slate-800">{order.clientName}</strong> · Phone: {order.phone}
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-1 md:text-right">
                <p className="text-slate-500">
                  Assigned CS/CA: <strong className="text-slate-900">{order.assignedProfessional.name}</strong>
                </p>
                {order.assignedProfessional.copNumber && (
                  <p className="text-slate-500 text-[11px] font-mono">
                    {order.assignedProfessional.copNumber}
                  </p>
                )}
                <p className="text-slate-500">
                  Est. Completion: <strong className="text-emerald-700">{order.estimatedCompletion}</strong>
                </p>
              </div>
            </div>

            {/* 4-Stage Stepper Timeline */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-slate-900">
                Statutory Milestone Timeline
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {order.timeline.map((item, idx) => {
                  const isDone = item.completed;
                  const isCurrent = item.active;

                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        isDone
                          ? 'border-emerald-300 bg-emerald-50/50'
                          : isCurrent
                          ? 'border-amber-400 bg-amber-50/70 ring-1 ring-amber-400'
                          : 'border-slate-200 bg-slate-50 opacity-60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Step 0{idx + 1}
                        </span>
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : isCurrent ? (
                          <Clock className="w-4 h-4 text-amber-600 animate-spin" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                        )}
                      </div>

                      <h4 className="font-bold text-xs text-slate-900 mb-1">{item.stage}</h4>
                      <p className="text-[11px] text-slate-600 leading-snug">{item.description}</p>
                      <p className="text-[10px] text-slate-400 font-medium mt-2">
                        {item.timestamp}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Document Checklist & Downloadable Certificates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Uploaded / Scrutinized Docs */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="font-serif text-base font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span>Document Scrutiny Status</span>
                </h4>

                <div className="space-y-2 pt-1">
                  {order.documentsUploaded.map((doc, i) => (
                    <div
                      key={i}
                      className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs"
                    >
                      <span className="font-medium text-slate-800">{doc.name}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          doc.status === 'Verified'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-900'
                        }`}
                      >
                        {doc.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Downloadable Certificates */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="font-serif text-base font-bold text-slate-900 flex items-center gap-2">
                  <Download className="w-4 h-4 text-emerald-600" />
                  <span>Approved Certificates & Receipts</span>
                </h4>

                <div className="space-y-2 pt-1">
                  {order.downloadableCertificates && order.downloadableCertificates.length > 0 ? (
                    order.downloadableCertificates.map((cert, i) => (
                      <div
                        key={i}
                        className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs"
                      >
                        <div>
                          <p className="font-medium text-slate-800">{cert.name}</p>
                          <p className="text-[10px] text-slate-400">
                            {cert.issueDate} · {cert.fileSize}
                          </p>
                        </div>
                        <button
                          onClick={() => alert(`Downloading verified copy of ${cert.name}`)}
                          className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] rounded-lg flex items-center gap-1 transition-colors"
                        >
                          <Download className="w-3 h-3" />
                          <span>PDF</span>
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-500 py-4 text-center">
                      Certificates will be available for instant download once ROC / GST approval is completed.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Direct Support Assistance */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <p>Need urgent clarification from your assigned CS Desk?</p>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${order.assignedProfessional.phone}`}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>Call Advisory Desk</span>
                </a>
                <a
                  href={`https://wa.me/917988068145?text=Hi%20Jurisync%2C%20I%20am%20inquiring%20about%20Order%20${order.orderId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          hasSearched && (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
              <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
              <h3 className="font-serif text-xl font-bold text-slate-900">
                No Record Found for "{query}"
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Please verify your 10-digit mobile number or Order ID (e.g. JUR-84291). If you filed recently or offline, reach out to our team.
              </p>
              <button
                onClick={() => onOpenConsultation('Filing Status Check')}
                className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl"
              >
                Contact Support Desk
              </button>
            </div>
          )
        )}
      </section>
    </div>
  );
};
