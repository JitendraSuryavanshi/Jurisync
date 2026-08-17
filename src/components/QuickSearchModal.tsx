import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Building2, Calendar, BookOpen, ShieldCheck } from 'lucide-react';
import { SUB_SERVICES, SERVICE_CATEGORIES } from '../data/servicesData';
import { BLOG_POSTS } from '../data/blogData';
import { COMPLIANCE_DEADLINES } from '../data/complianceCalendar';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string, param?: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle handled by caller
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const query = searchTerm.toLowerCase().trim();

  const filteredServices = Object.values(SUB_SERVICES).filter(
    (s) =>
      s.name.toLowerCase().includes(query) ||
      s.shortDescription.toLowerCase().includes(query) ||
      s.overview.toLowerCase().includes(query)
  );

  const filteredArticles = BLOG_POSTS.filter(
    (a) =>
      a.title.toLowerCase().includes(query) ||
      a.category.toLowerCase().includes(query) ||
      a.tags.some((t) => t.toLowerCase().includes(query))
  );

  const filteredDeadlines = COMPLIANCE_DEADLINES.filter(
    (d) =>
      d.title.toLowerCase().includes(query) ||
      d.formName.toLowerCase().includes(query) ||
      d.applicableTo.toLowerCase().includes(query)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search company registration, GST, trademark, AOC-4, due dates..."
            className="w-full text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-slate-400 hover:text-slate-600 p-1 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded hover:bg-slate-200 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {/* Services Section */}
          {filteredServices.length > 0 && (
            <div className="space-y-2">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Services ({filteredServices.length})</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredServices.slice(0, 6).map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      onNavigate('service', service.id);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl border border-slate-100 hover:border-amber-300 hover:bg-amber-50/50 text-left transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-amber-900 line-clamp-1">
                        {service.name}
                      </span>
                      <span className="text-[10px] text-emerald-700 font-bold">
                        ₹{service.startingPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {service.shortDescription}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Compliance Deadlines Section */}
          {filteredDeadlines.length > 0 && (
            <div className="space-y-2">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                <span>Compliance Deadlines & Forms</span>
              </p>
              <div className="space-y-1.5">
                {filteredDeadlines.slice(0, 3).map((dl) => (
                  <button
                    key={dl.id}
                    onClick={() => {
                      onNavigate('compliance-calendar');
                      onClose();
                    }}
                    className="w-full p-2.5 rounded-xl bg-slate-50 hover:bg-amber-50/70 border border-slate-200/80 text-left flex items-center justify-between transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">{dl.title}</span>
                        <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded font-semibold">
                          {dl.formName}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">Due: {dl.dueDate}</p>
                    </div>
                    <span className="text-xs text-amber-700 font-semibold flex items-center gap-1">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Blog / Knowledge Articles */}
          {filteredArticles.length > 0 && (
            <div className="space-y-2">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                <span>Articles & Guides</span>
              </p>
              <div className="space-y-1.5">
                {filteredArticles.slice(0, 3).map((art) => (
                  <button
                    key={art.id}
                    onClick={() => {
                      onNavigate('blog-post', art.id);
                      onClose();
                    }}
                    className="w-full p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 text-left transition-colors flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs font-semibold text-slate-900 line-clamp-1">{art.title}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{art.author.name} · {art.readTime}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredServices.length === 0 && filteredDeadlines.length === 0 && filteredArticles.length === 0 && (
            <div className="text-center py-8 text-slate-500 space-y-2">
              <p className="text-sm font-semibold">No direct results found for "{searchTerm}"</p>
              <p className="text-xs">Try searching for "Pvt Ltd", "GST", "Trademark", "ROC", "Audit", or "LLP".</p>
            </div>
          )}
        </div>

        {/* Footer info strip */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Search India's legal & compliance marketplace</span>
          <span className="font-semibold text-slate-700">Jurisync LLP (LLPIN ACQ-7658)</span>
        </div>
      </div>
    </div>
  );
};
