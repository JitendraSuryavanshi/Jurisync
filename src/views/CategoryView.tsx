import React from 'react';
import { SERVICE_CATEGORIES, SUB_SERVICES } from '../data/servicesData';
import { CategoryIcon } from '../components/CategoryIcon';
import { LeadCaptureBanner } from '../components/LeadCaptureBanner';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Clock,
  Receipt,
  FileText,
  ChevronRight,
} from 'lucide-react';

interface CategoryViewProps {
  categoryId: string;
  onNavigate: (path: string, param?: string) => void;
  onOpenConsultation: (servicePreselect?: string) => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  categoryId,
  onNavigate,
  onOpenConsultation,
}) => {
  const category = SERVICE_CATEGORIES.find((c) => c.id === categoryId) || SERVICE_CATEGORIES[0];
  const subServices = category.subServiceIds.map((id) => SUB_SERVICES[id]).filter(Boolean);

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 pb-16 sm:pb-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('home')} className="hover:text-slate-900 transition-colors">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold">{category.name}</span>
        </nav>
      </div>

      {/* Category Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-12 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <CategoryIcon name={category.iconName} className="w-4 h-4 text-amber-400" />
              <span>Category Overview & Filings</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              {category.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {category.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenConsultation(`${category.name} Advisory`)}
                id="category-hero-consult-btn"
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95"
              >
                Get Expert Advisory
              </button>
              <a
                href={`https://wa.me/917988068145?text=Hi%20Jurisync%2C%20I%20have%20a%20question%20regarding%20${encodeURIComponent(category.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm rounded-xl border border-slate-700 transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Listing Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Available {category.name} Services ({subServices.length})
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Choose a specific filing below for itemized pricing tiers, required documents, and eligibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{service.turnaroundTime}</span>
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    From ₹{service.startingPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Key Deliverables Bullet Preview */}
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  {service.whatsIncluded.slice(0, 3).map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="truncate">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onNavigate('service', service.id)}
                  id={`cat-btn-${service.id}`}
                  className="flex-1 py-2.5 px-4 bg-slate-900 group-hover:bg-amber-600 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>View Details & Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Capture Banner for this Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCaptureBanner
          headline={`Need Assistance with ${category.name}?`}
          subheadline="Our practicing Company Secretaries will review your company structure and provide free guidance."
          defaultService={subServices[0]?.id}
        />
      </section>
    </div>
  );
};
