import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { CookieConsent } from './components/CookieConsent';

// Views
import { HomeView } from './views/HomeView';
import { CategoryView } from './views/CategoryView';
import { ServiceDetailView } from './views/ServiceDetailView';
import { PricingView } from './views/PricingView';
import { AboutView } from './views/AboutView';
import { ComplianceCalendarView } from './views/ComplianceCalendarView';
import { BlogView } from './views/BlogView';
import { TrackOrderView } from './views/TrackOrderView';
import { ClientPortalView } from './views/ClientPortalView';
import { ContactView } from './views/ContactView';
import { LegalView } from './views/LegalView';

export default function App() {
  // Navigation State
  const [currentPath, setCurrentPath] = useState<string>('home');
  const [routeParam, setRouteParam] = useState<string | undefined>(undefined);

  // Modal States
  const [consultationModalOpen, setConsultationModalOpen] = useState<boolean>(false);
  const [consultationPreselect, setConsultationPreselect] = useState<string | undefined>(undefined);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  // Sync hash with routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) {
        setCurrentPath('home');
        setRouteParam(undefined);
        return;
      }

      const parts = hash.split('/');
      const mainPath = parts[0];
      const subParam = parts[1];

      if (mainPath) {
        setCurrentPath(mainPath);
        setRouteParam(subParam);
      }
    };

    // Initial load check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Custom Navigation Handler
  const handleNavigate = (path: string, param?: string) => {
    setCurrentPath(path);
    setRouteParam(param);

    // Update URL hash without reload
    if (param) {
      window.location.hash = `#${path}/${param}`;
    } else if (path === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = `#${path}`;
    }

    // Scroll to top cleanly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quick Consultation Opener
  const handleOpenConsultation = (servicePreselect?: string) => {
    setConsultationPreselect(servicePreselect);
    setConsultationModalOpen(true);
  };

  // Keyboard shortcut for Cmd+K / Ctrl+K search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Render View based on currentPath
  const renderCurrentView = () => {
    switch (currentPath) {
      case 'category':
        return (
          <CategoryView
            categoryId={routeParam || 'business-registration'}
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );

      case 'service':
        return (
          <ServiceDetailView
            serviceId={routeParam || 'private-limited-company'}
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );

      case 'pricing':
        return (
          <PricingView
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );

      case 'about':
        return (
          <AboutView
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );

      case 'compliance-calendar':
        return (
          <ComplianceCalendarView
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );

      case 'blog':
        return (
          <BlogView
            initialPostId={routeParam}
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );

      case 'track-order':
        return (
          <TrackOrderView
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );

      case 'client-portal':
        return (
          <ClientPortalView
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );

      case 'contact':
        return <ContactView />;

      case 'privacy-policy':
        return (
          <LegalView
            type="privacy-policy"
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );

      case 'terms-of-service':
        return (
          <LegalView
            type="terms-of-service"
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );

      case 'refund-policy':
        return (
          <LegalView
            type="refund-policy"
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );

      case 'home':
      default:
        return (
          <HomeView
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onOpenSearch={() => setSearchModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500/20 selection:text-amber-900">
      {/* Top Main Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Comprehensive Site Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Global Interactive Modals */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        defaultService={consultationPreselect}
      />

      <QuickSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Floating Interactive Elements */}
      <WhatsAppWidget />
      <CookieConsent onNavigate={handleNavigate} />
    </div>
  );
}
