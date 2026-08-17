import React, { useState } from 'react';
import {
  COMPLIANCE_DEADLINES,
  COMPLIANCE_CATEGORIES,
} from '../data/complianceCalendar';
import {
  Calendar as CalendarIcon,
  ShieldCheck,
  AlertTriangle,
  Bell,
  CheckCircle2,
  Filter,
  FileText,
  Clock,
  Sparkles,
} from 'lucide-react';
import { LeadCaptureBanner } from '../components/LeadCaptureBanner';

interface ComplianceCalendarViewProps {
  onNavigate: (path: string, param?: string) => void;
  onOpenConsultation: (servicePreselect?: string) => void;
}

export const ComplianceCalendarView: React.FC<ComplianceCalendarViewProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [reminderEmail, setReminderEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filteredDeadlines = COMPLIANCE_DEADLINES.filter(
    (dl) => selectedCategory === 'all' || dl.category === selectedCategory
  );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (reminderEmail && reminderEmail.includes('@')) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setReminderEmail('');
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 pb-16 sm:pb-24">
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-12 text-white shadow-xl border border-slate-800 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <CalendarIcon className="w-4 h-4 text-amber-400" />
            <span>FY 2025–2026 Statutory Due Date Schedule</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Indian Business Compliance Calendar
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Never incur MCA penalties (₹100/day) or GST late fees. Track all upcoming ROC, GST, Income Tax, and Secretarial filing due dates in one place.
          </p>
        </div>
      </section>

      {/* Reminder Subscription Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-500/10 border border-amber-300/60 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="font-serif text-xl font-bold text-amber-950 flex items-center justify-center lg:justify-start gap-2">
              <Bell className="w-5 h-5 text-amber-600 animate-bounce" />
              <span>Get Free Monthly Deadline Alerts via WhatsApp & Email</span>
            </h3>
            <p className="text-xs text-amber-800">
              We send gentle 7-day and 2-day reminder notices before every major statutory cutoff.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-wrap gap-2 w-full lg:w-auto">
            <input
              type="email"
              required
              value={reminderEmail}
              onChange={(e) => setReminderEmail(e.target.value)}
              placeholder="Enter your email address"
              className="px-4 py-2.5 bg-white border border-amber-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 flex-1 lg:w-72"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors shrink-0 shadow-sm"
            >
              Get Free Alerts
            </button>
          </form>
        </div>
        {subscribed && (
          <p className="text-center text-xs text-emerald-700 font-semibold mt-2">
            ✓ Alert activated! You will receive email alerts before every filing deadline.
          </p>
        )}
      </section>

      {/* Filter Tabs & Deadlines Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Upcoming Compliance Deadlines ({filteredDeadlines.length})
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Curated by Practicing Company Secretaries in accordance with MCA / CBDT / CBIC guidelines.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Deadlines
            </button>
            {COMPLIANCE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Deadlines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeadlines.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                    Form {item.formName}
                  </span>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Due: {item.dueDate}</span>
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                  {item.title}
                </h3>

                <div className="pt-2 border-t border-slate-100 space-y-1 text-xs">
                  <p className="text-slate-500">
                    <strong className="text-slate-700">Applies to:</strong> {item.applicableTo}
                  </p>
                  <p className="text-slate-500">
                    <strong className="text-slate-700">Frequency:</strong> {item.frequency}
                  </p>
                </div>

                {/* Penalty Warning Box */}
                <div className="p-2.5 bg-red-50/70 rounded-xl border border-red-200/80 text-[11px] text-red-900 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Statutory Penalty:</strong> {item.penaltyDescription}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onOpenConsultation(`Filing Assistance: ${item.title} (${item.formName})`)}
                  className="w-full py-2 bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>File with Jurisync CS Desk</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Capture Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCaptureBanner
          headline="Avoid Heavy MCA & GST Late Penalties"
          subheadline="Our team of Company Secretaries handles end-to-end secretarial audits and annual filings."
        />
      </section>
    </div>
  );
};
