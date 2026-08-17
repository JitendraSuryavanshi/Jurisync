import React, { useState, useEffect, useRef } from 'react';
import { BrandLogo } from './BrandLogo';
import { SERVICE_CATEGORIES, SUB_SERVICES } from '../data/servicesData';
import { ServiceCategoryKey } from '../types';
import {
  Phone,
  MessageCircle,
  Search,
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  Building2,
  Receipt,
  FileCheck,
  Award,
  Scale,
  Calendar,
  BookOpen,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Lock,
  Compass,
} from 'lucide-react';
import { CategoryIcon } from './CategoryIcon';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string, param?: string) => void;
  onOpenConsultation: (servicePreselect?: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenConsultation,
  onOpenSearch,
}) => {
  const [megaMenuOpen, setMegaMenuOpen] = useState<ServiceCategoryKey | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (catId: ServiceCategoryKey) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setMegaMenuOpen(catId);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(null);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Compliance & Contact Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Jurisync LLP · LLPIN ACQ-7658
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">
              Corporate Secretarial & Legal Advisory Desk
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+917988068145"
              id="top-bar-call"
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="hidden sm:inline text-slate-400">For Discussion:</span>
              <span className="font-semibold">+91 79880 68145</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="https://wa.me/917988068145?text=Hi%20Jurisync%20Support%20Desk%2C%20I%20would%20like%20to%20discuss%20legal%20and%20compliance%20services."
              target="_blank"
              rel="noopener noreferrer"
              id="top-bar-whatsapp"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-500/20" />
              <span>For Discussion & Support</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <button
              onClick={() => onNavigate('track-order')}
              id="top-bar-track-order"
              className="hidden sm:inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <Compass className="w-3 h-3 text-cyan-400" />
              <span>Track Filing (SRN)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`bg-white transition-shadow duration-200 border-b border-slate-200/80 ${
          scrolled ? 'shadow-md py-2.5' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            id="nav-logo-btn"
            className="flex items-center gap-2 text-left focus:outline-none shrink-0"
          >
            <BrandLogo showTagline={false} className="h-8 sm:h-9 md:h-10" />
          </button>

          {/* Desktop Mega-Menu Nav Items */}
          <div className="hidden xl:flex items-center gap-1 shrink-0">
            {/* Services Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('business-registration')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="nav-services-dropdown-trigger"
                onClick={() => onNavigate('category', 'business-registration')}
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                  megaMenuOpen || currentPath.startsWith('category') || currentPath.startsWith('service')
                    ? 'text-amber-700 bg-amber-50'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
              </button>
            </div>

            {/* Direct Category Links */}
            <button
              onClick={() => onNavigate('category', 'business-registration')}
              id="nav-cat-incorporation"
              className="px-2.5 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              Incorporation
            </button>

            <button
              onClick={() => onNavigate('category', 'taxation')}
              id="nav-cat-taxation"
              className="px-2.5 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              GST & Tax
            </button>

            <button
              onClick={() => onNavigate('category', 'trademark-ip')}
              id="nav-cat-trademark"
              className="px-2.5 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              Trademark (™)
            </button>

            <button
              onClick={() => onNavigate('category', 'roc-mca')}
              id="nav-cat-roc"
              className="px-2.5 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              Annual ROC
            </button>

            <button
              onClick={() => onNavigate('pricing')}
              id="nav-link-pricing"
              className={`px-2.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                currentPath === 'pricing' ? 'text-amber-700 bg-amber-50 font-semibold' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Pricing
            </button>

            <button
              onClick={() => onNavigate('compliance-calendar')}
              id="nav-link-calendar"
              className={`px-2.5 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                currentPath === 'compliance-calendar' ? 'text-amber-700 bg-amber-50 font-semibold' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              <span>Due Dates</span>
            </button>

            <button
              onClick={() => onNavigate('about')}
              id="nav-link-about"
              className={`px-2.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                currentPath === 'about' ? 'text-amber-700 bg-amber-50 font-semibold' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              id="nav-search-trigger"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium shrink-0"
              title="Search Services, Forms & Guides (Cmd+K)"
            >
              <Search className="w-4 h-4 text-slate-500 shrink-0" />
              <span className="hidden md:inline text-slate-500">Search</span>
              <kbd className="hidden 2xl:inline px-1.5 py-0.5 text-[10px] bg-slate-100 text-slate-400 border border-slate-200 rounded font-mono">⌘K</kbd>
            </button>

            {/* Track Order Button */}
            <button
              onClick={() => onNavigate('track-order')}
              id="nav-track-order-btn"
              className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors shrink-0 whitespace-nowrap"
            >
              <Compass className="w-3.5 h-3.5 text-blue-700 shrink-0" />
              <span>Track Order</span>
            </button>

            {/* Client Portal / Login */}
            <button
              onClick={() => onNavigate('client-portal')}
              id="nav-login-btn"
              className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg hover:border-slate-400 transition-colors shrink-0 whitespace-nowrap"
            >
              <Lock className="w-3 h-3 text-slate-500 shrink-0" />
              <span>Client Portal</span>
            </button>

            {/* Primary Action Button (Always single-line, never pressed/wrapped) */}
            <button
              onClick={() => onOpenConsultation()}
              id="nav-free-consultation-btn"
              className="px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-sm hover:shadow transition-all flex items-center gap-1.5 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950 shrink-0" />
              <span className="whitespace-nowrap">Free Consultation</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="nav-mobile-toggle"
              className="xl:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 shrink-0" /> : <Menu className="w-6 h-6 shrink-0" />}
            </button>
          </div>
        </div>

        {/* Desktop Mega-Menu Dropdown Panel */}
        {megaMenuOpen && (
          <div
            className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-b border-slate-200 py-6 px-4 transition-all animate-in fade-in slide-in-from-top-2 duration-150"
            onMouseEnter={() => {
              if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-12 gap-6">
                {/* Left Category Tabs */}
                <div className="col-span-3 border-r border-slate-100 pr-4 space-y-1">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
                    Service Categories
                  </p>
                  {SERVICE_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setMegaMenuOpen(cat.id);
                        onNavigate('category', cat.id);
                        setMegaMenuOpen(null);
                      }}
                      onMouseEnter={() => setMegaMenuOpen(cat.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                        megaMenuOpen === cat.id
                          ? 'bg-amber-500/10 text-amber-900 font-bold border-l-2 border-amber-600'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <CategoryIcon name={cat.iconName} className="w-4 h-4 text-slate-600" />
                        <span>{cat.name}</span>
                      </div>
                      {cat.badge && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                          {cat.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Center Sub-Services Grid */}
                <div className="col-span-6 px-4">
                  {SERVICE_CATEGORIES.map((cat) => {
                    if (cat.id !== megaMenuOpen) return null;
                    return (
                      <div key={cat.id} className="space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                          <div>
                            <h4 className="text-base font-bold text-slate-900">{cat.name}</h4>
                            <p className="text-xs text-slate-500">{cat.tagline}</p>
                          </div>
                          <button
                            onClick={() => {
                              onNavigate('category', cat.id);
                              setMegaMenuOpen(null);
                            }}
                            className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                          >
                            <span>Explore all</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {cat.subServiceIds.map((subId) => {
                            const sub = SUB_SERVICES[subId];
                            if (!sub) return null;
                            return (
                              <button
                                key={subId}
                                onClick={() => {
                                  onNavigate('service', subId);
                                  setMegaMenuOpen(null);
                                }}
                                className="group p-2.5 rounded-lg border border-slate-100 hover:border-amber-200 hover:bg-amber-50/40 text-left transition-all"
                              >
                                <div className="flex items-start justify-between">
                                  <span className="text-xs font-semibold text-slate-800 group-hover:text-amber-900 line-clamp-1">
                                    {sub.name}
                                  </span>
                                  {sub.popular && (
                                    <span className="text-[9px] px-1 py-0.5 bg-amber-100 text-amber-800 rounded font-bold uppercase tracking-tight">
                                      Hot
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                  {sub.shortDescription}
                                </p>
                                <div className="mt-1.5 flex items-center gap-2 text-[10px] text-slate-600 font-medium">
                                  <span className="text-emerald-700 font-bold">From ₹{sub.startingPrice.toLocaleString('en-IN')}</span>
                                  <span>•</span>
                                  <span className="text-slate-500">{sub.turnaroundTime}</span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Right Callout Banner */}
                <div className="col-span-3 bg-gradient-to-br from-slate-900 to-blue-950 rounded-xl p-4 text-white flex flex-col justify-between border border-slate-800">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-semibold mb-2">
                      <ShieldCheck className="w-3 h-3 text-amber-400" />
                      Zero Hidden Fees Guarantee
                    </div>
                    <h5 className="font-serif text-sm font-bold leading-snug">
                      Need tailored advice for your business structure?
                    </h5>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      Connect with Hannu Goyal, CS LLB and senior CAs for an instant 1-on-1 statutory consultation.
                    </p>
                  </div>

                  <div className="pt-4 space-y-2">
                    <button
                      onClick={() => {
                        onOpenConsultation();
                        setMegaMenuOpen(null);
                      }}
                      className="w-full py-2 px-3 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Book Free Call</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <a
                      href="tel:+917988068145"
                      className="w-full py-1.5 text-center text-[11px] text-slate-300 hover:text-white flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3 h-3 text-amber-400" />
                      <span>Call +91 79880 68145</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[85px] z-40 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-h-[calc(100vh-85px)] overflow-y-auto p-4 space-y-4 shadow-2xl">
            {/* Quick Actions Mobile Strip */}
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
              <button
                onClick={() => {
                  onNavigate('track-order');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-100 rounded-lg text-xs font-semibold text-slate-800"
              >
                <Compass className="w-4 h-4 text-blue-700" />
                <span>Track Filing</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('client-portal');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-100 rounded-lg text-xs font-semibold text-slate-800"
              >
                <Lock className="w-4 h-4 text-slate-600" />
                <span>Client Login</span>
              </button>
            </div>

            {/* Direct Links */}
            <div className="space-y-1">
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('pricing');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Pricing & Packages
              </button>
              <button
                onClick={() => {
                  onNavigate('compliance-calendar');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  Compliance Due Dates
                </span>
                <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">2026</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('blog');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Articles & Guides
              </button>
              <button
                onClick={() => {
                  onNavigate('about');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                About Jurisync LLP & Founder
              </button>
              <button
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Contact & Hisar Office
              </button>
            </div>

            {/* Service Categories Accordions */}
            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
                All 6 Service Categories
              </p>
              <div className="space-y-1">
                {SERVICE_CATEGORIES.map((cat) => {
                  const isOpen = mobileCategoryOpen === cat.id;
                  return (
                    <div key={cat.id} className="border border-slate-100 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setMobileCategoryOpen(isOpen ? null : cat.id)}
                        className="w-full px-3 py-2.5 flex items-center justify-between bg-slate-50 text-slate-800 text-xs font-semibold"
                      >
                        <div className="flex items-center gap-2">
                          <CategoryIcon name={cat.iconName} className="w-4 h-4 text-slate-600" />
                          <span>{cat.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
                      </button>

                      {isOpen && (
                        <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                          {cat.subServiceIds.map((subId) => {
                            const sub = SUB_SERVICES[subId];
                            if (!sub) return null;
                            return (
                              <button
                                key={subId}
                                onClick={() => {
                                  onNavigate('service', subId);
                                  setMobileMenuOpen(false);
                                }}
                                className="w-full text-left p-2 rounded hover:bg-amber-50/50 flex items-center justify-between text-xs"
                              >
                                <span className="text-slate-700 font-medium">{sub.name}</span>
                                <span className="text-emerald-700 font-bold">₹{sub.startingPrice.toLocaleString('en-IN')}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Call / WhatsApp CTA in Drawer */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  onOpenConsultation();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-amber-600 text-white rounded-lg text-xs font-bold shadow flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Get Free Consultation</span>
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+917988068145"
                  className="py-2.5 px-3 bg-slate-900 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/917988068145?text=Hi%20Jurisync%20team%2C%20I%20need%20assistance%20with%20legal%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-emerald-600 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
