import React, { useState } from 'react';
import { MessageCircle, X, Phone, CheckCircle2, ArrowRight } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userQuery, setUserQuery] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const message = userQuery.trim()
      ? `Hi Jurisync CS/CA team, ${encodeURIComponent(userQuery)}`
      : 'Hi%20Jurisync%20team%2C%20I%20need%20assistance%20with%20company%20registration%20and%20legal%20compliance.';
    window.open(`https://wa.me/917988068145?text=${message}`, '_blank');
    setIsOpen(false);
    setUserQuery('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Chat Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-emerald-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-base">
                  CS
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-700 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Jurisync CS & CA Desk</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>● Online</span> · Avg reply: 10 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-emerald-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-200/80 shadow-sm space-y-1">
              <p className="font-semibold text-slate-800">
                Namaste! 🙏 Welcome to Jurisync Online.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I'm connected with our practicing Company Secretaries & Chartered Accountants. How can we help your business today?
              </p>
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Quick Inquiries:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Private Limited Incorporation',
                  'GST Registration (₹799)',
                  'Trademark Filing (™)',
                  'Annual ROC Compliance',
                ].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setUserQuery(`I want to know about ${tag}.`)}
                    className="px-2.5 py-1 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 rounded-full text-[11px] border border-slate-200 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="pt-2 space-y-2">
              <div className="relative">
                <textarea
                  rows={2}
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  placeholder="Type your compliance question or requirement..."
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 resize-none"
                />
              </div>
              <button
                type="submit"
                id="whatsapp-widget-start-chat-btn"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start WhatsApp Conversation</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="floating-whatsapp-btn"
        className="group relative flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:shadow-emerald-600/40 transition-all duration-200 active:scale-95"
        aria-label="Chat with Company Secretary on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white/20" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 border-2 border-emerald-600 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 border-2 border-emerald-600 rounded-full"></span>
        </div>
        <span className="font-semibold text-xs sm:text-sm tracking-tight pr-1">
          Chat with CS / CA
        </span>
      </button>
    </div>
  );
};
