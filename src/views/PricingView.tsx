import React, { useState } from 'react';
import { SUB_SERVICES, SERVICE_CATEGORIES } from '../data/servicesData';
import { CategoryIcon } from '../components/CategoryIcon';
import { PricingCalculator } from '../components/PricingCalculator';
import { LeadCaptureBanner } from '../components/LeadCaptureBanner';
import {
  Search,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Filter,
} from 'lucide-react';

interface PricingViewProps {
  onNavigate: (path: string, param?: string) => void;
  onOpenConsultation: (servicePreselect?: string) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allServices = Object.values(SUB_SERVICES);

  const filteredServices = allServices.filter((service) => {
    const matchesCategory =
      selectedCategory === 'all' || service.categoryId === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 pb-16 sm:pb-24">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-12 text-white shadow-xl border border-slate-800 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Transparent · Zero Hidden Charges</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Transparent Pricing Directory
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Direct pricing for 28+ MCA, Tax, Trademark, and Licensing services. Certified CS oversight and digital filings included.
          </p>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingCalculator onOpenConsultation={onOpenConsultation} />
      </section>

      {/* Complete Services Price Table Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              All 28+ Service Price Cards
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Filter by category or search by keyword to view itemized pricing.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. GST, Trademark)..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 shadow-xs"
            />
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Services ({allServices.length})
          </button>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <CategoryIcon name={cat.iconName} className="w-3.5 h-3.5" />
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Services Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{service.turnaroundTime}</span>
                  </span>
                  <span className="text-sm font-serif font-bold text-emerald-700">
                    from ₹{service.startingPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                  {service.name}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Deliverables preview */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  {service.whatsIncluded.slice(0, 2).map((deliv, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="truncate text-[11px]">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onNavigate('service', service.id)}
                  className="flex-1 py-2 px-3 bg-slate-900 group-hover:bg-amber-600 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenConsultation(service.name)}
                  className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors"
                >
                  Consult
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Capture Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCaptureBanner />
      </section>
    </div>
  );
};
