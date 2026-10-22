import { FormEvent, useMemo, useState } from 'react';

type FaqItem = { question: string; answer: string };

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const services = [
  {
    title: 'Company Registration',
    description: 'Entity setup support for founders starting in India, including documentation and filing guidance.',
  },
  {
    title: 'LLP & Private Limited Registration',
    description: 'Choose the right structure with guided onboarding, document checks, and submission support.',
  },
  {
    title: 'GST & Tax Registrations',
    description: 'GST, PAN/TAN, and related registration workflows to help businesses start compliant operations.',
  },
  {
    title: 'Trademark & IP Support',
    description: 'Trademark filing assistance and practical support for protecting brand assets and intellectual property.',
  },
  {
    title: 'Compliance & Annual Filings',
    description: 'Calendar-driven support for periodic filings so your business stays aligned with legal obligations.',
  },
  {
    title: 'Contracts & Legal Documentation',
    description: 'Drafting and review support for common business agreements and operational legal documentation.',
  },
  {
    title: 'Startup Legal Support',
    description: 'Practical legal guidance for early-stage teams on formation, documentation, and compliance readiness.',
  },
];

const processSteps = [
  {
    title: 'Share your requirement',
    detail: 'Tell us your business stage and required legal service through the inquiry form or consultation request.',
  },
  {
    title: 'Get a clear scope',
    detail: 'Receive a transparent service scope, expected timeline, and illustrative pricing before you proceed.',
  },
  {
    title: 'Submit documents securely',
    detail: 'Upload and share required information through guided, secure document handling steps.',
  },
  {
    title: 'Track progress to completion',
    detail: 'Get updates through each milestone until completion and handover of final deliverables.',
  },
];

const differentiators = [
  {
    title: 'Transparent process and pricing',
    detail: 'Clear service scopes and upfront clarity on what is included, with no hidden language.',
  },
  {
    title: 'Expert guidance',
    detail: 'Work with experienced legal and compliance professionals for practical, business-focused advice.',
  },
  {
    title: 'Secure documentation',
    detail: 'Data handling designed with confidentiality and responsible record-keeping in mind.',
  },
  {
    title: 'End-to-end support',
    detail: 'From initial consultation to filing follow-through, Jurisync supports your full legal workflow.',
  },
];

const plans = [
  {
    name: 'Starter',
    price: '₹3,999',
    note: 'Illustrative starting price',
    items: ['Basic registration guidance', 'Document checklist', 'Email support'],
  },
  {
    name: 'Growth',
    price: '₹8,999',
    note: 'Illustrative bundled pricing',
    items: ['Registration + core compliance', 'Priority support', 'Milestone tracking'],
  },
  {
    name: 'Scale',
    price: 'Custom',
    note: 'Illustrative enterprise scope',
    items: ['Multi-service legal operations', 'Dedicated coordination', 'Advanced compliance planning'],
  },
];

const testimonials = [
  {
    name: 'Sample Founder A',
    role: 'D2C Startup, Delhi',
    text: 'Sample testimonial: The onboarding was structured, and the service scope helped us understand each legal step clearly.',
  },
  {
    name: 'Sample Director B',
    role: 'Consulting Firm, Bengaluru',
    text: 'Sample testimonial: Jurisync made filing timelines easy to track and helped our team prepare documents correctly.',
  },
  {
    name: 'Sample Operator C',
    role: 'SME, Pune',
    text: 'Sample testimonial: We appreciated the transparent communication and practical compliance support.',
  },
];

const faqs: FaqItem[] = [
  {
    question: 'Can Jurisync provide legal advice for my exact case?',
    answer:
      'Jurisync provides informational guidance and service coordination. For case-specific legal advice, consult a qualified professional licensed for your jurisdiction.',
  },
  {
    question: 'Are the listed prices final?',
    answer:
      'No. Prices shown are illustrative starting points to help planning. Final pricing depends on your selected service scope and documentation complexity.',
  },
  {
    question: 'How long does company registration usually take?',
    answer:
      'Timelines vary by service type, document readiness, and authority processing windows. You will receive estimated timelines before onboarding.',
  },
  {
    question: 'Do I need to be in a specific city to use Jurisync?',
    answer:
      'No. Services are designed for online coordination, with remote document collection and status updates.',
  },
];

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  service: services[0].title,
  message: '',
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const formErrors = useMemo(() => {
    const errors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) errors.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Please enter a valid email address.';
    if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) errors.phone = 'Please enter a valid phone number.';
    if (!formData.service) errors.service = 'Please select a service.';
    if (formData.message.trim().length < 20) errors.message = 'Please provide at least 20 characters.';

    return errors;
  }, [formData]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (Object.keys(formErrors).length > 0) return;

    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#" className="brand" aria-label="Jurisync home">
            <span className="brand-mark" aria-hidden="true">
              J
            </span>
            <span className="brand-text">Jurisync</span>
          </a>

          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>

          <nav id="primary-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a className="button primary" href="#contact" onClick={() => setMenuOpen(false)}>
              Get Started
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Online company registration & legal support</p>
              <h1>Build your business with structured legal and compliance support.</h1>
              <p>
                Jurisync helps founders and growing teams manage registration, filings, and legal documentation through a clear,
                online-first workflow.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#contact">
                  Start consultation
                </a>
                <a className="button secondary" href="#services">
                  Explore services
                </a>
              </div>
            </div>

            <aside className="hero-card" aria-label="Support summary">
              <h2>What you get</h2>
              <ul>
                <li>Guided registration and filing workflows</li>
                <li>Service scope clarity before onboarding</li>
                <li>Secure document handling steps</li>
                <li>Progress updates through completion</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="trust-strip" aria-label="Credibility indicators">
          <div className="container trust-list">
            <p>Structured online process</p>
            <p>Transparent service scope</p>
            <p>Secure documentation workflow</p>
            <p>Human legal and compliance support</p>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2>Services</h2>
            <p className="section-intro">Practical legal-tech support across setup, compliance, and documentation needs.</p>
            <div className="card-grid">
              {services.map((service) => (
                <article className="card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section section-soft">
          <div className="container">
            <h2>How it works</h2>
            <div className="steps-grid">
              {processSteps.map((step, index) => (
                <article className="step" key={step.title}>
                  <p className="step-number">Step {index + 1}</p>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Why choose Jurisync</h2>
            <div className="card-grid two-up">
              {differentiators.map((item) => (
                <article key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section section-soft">
          <div className="container">
            <h2>Pricing plans</h2>
            <p className="section-intro">Illustrative pricing for planning purposes. Final pricing depends on service scope.</p>
            <div className="card-grid three-up">
              {plans.map((plan) => (
                <article className="card plan" key={plan.name}>
                  <h3>{plan.name}</h3>
                  <p className="price">{plan.price}</p>
                  <p className="plan-note">{plan.note}</p>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="muted-note">
              Pricing shown above is illustrative and does not constitute a government fee schedule or guaranteed legal outcome.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Testimonials</h2>
            <p className="section-intro">Sample content below for demonstration until verified client testimonials are available.</p>
            <div className="card-grid three-up">
              {testimonials.map((item) => (
                <article className="card" key={item.name}>
                  <p>“{item.text}”</p>
                  <p className="testimonial-author">{item.name}</p>
                  <p className="testimonial-role">{item.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section section-soft">
          <div className="container">
            <h2>Frequently asked questions</h2>
            <div className="faq-list" role="list">
              {faqs.map((item, index) => {
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-button-${index}`;
                const expanded = openFaq === index;

                return (
                  <div className="faq-item" key={item.question} role="listitem">
                    <h3>
                      <button
                        id={buttonId}
                        aria-expanded={expanded}
                        aria-controls={panelId}
                        onClick={() => setOpenFaq(expanded ? null : index)}
                      >
                        <span>{item.question}</span>
                        <span aria-hidden="true">{expanded ? '−' : '+'}</span>
                      </button>
                    </h3>
                    <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!expanded}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-shell">
            <div>
              <h2>Contact Jurisync</h2>
              <p>
                Share your requirement and our team will reach out with next steps. This form performs client-side validation only;
                no backend submission is required.
              </p>
            </div>

            {submitted ? (
              <p className="success-message" role="status">
                Thanks! Your details were captured on this device. A production deployment can connect this form to your CRM or inbox.
              </p>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="field-grid">
                  <label>
                    Name
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                      aria-invalid={Boolean(formErrors.name)}
                      aria-describedby={formErrors.name ? 'error-name' : undefined}
                      required
                    />
                    {formErrors.name && (
                      <span id="error-name" className="error">
                        {formErrors.name}
                      </span>
                    )}
                  </label>

                  <label>
                    Email
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                      aria-invalid={Boolean(formErrors.email)}
                      aria-describedby={formErrors.email ? 'error-email' : undefined}
                      required
                    />
                    {formErrors.email && (
                      <span id="error-email" className="error">
                        {formErrors.email}
                      </span>
                    )}
                  </label>
                </div>

                <div className="field-grid">
                  <label>
                    Phone
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                      aria-invalid={Boolean(formErrors.phone)}
                      aria-describedby={formErrors.phone ? 'error-phone' : undefined}
                      required
                    />
                    {formErrors.phone && (
                      <span id="error-phone" className="error">
                        {formErrors.phone}
                      </span>
                    )}
                  </label>

                  <label>
                    Service
                    <select
                      value={formData.service}
                      onChange={(event) => setFormData((prev) => ({ ...prev, service: event.target.value }))}
                      aria-invalid={Boolean(formErrors.service)}
                      aria-describedby={formErrors.service ? 'error-service' : undefined}
                      required
                    >
                      {services.map((service) => (
                        <option key={service.title} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                    {formErrors.service && (
                      <span id="error-service" className="error">
                        {formErrors.service}
                      </span>
                    )}
                  </label>
                </div>

                <label>
                  Message
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                    aria-invalid={Boolean(formErrors.message)}
                    aria-describedby={formErrors.message ? 'error-message' : undefined}
                    required
                  />
                  {formErrors.message && (
                    <span id="error-message" className="error">
                      {formErrors.message}
                    </span>
                  )}
                </label>

                <button type="submit" className="button primary submit-button">
                  Submit inquiry
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <section>
            <h2>Jurisync</h2>
            <p>Online company registration and legal services support for modern businesses.</p>
            <p>Contact placeholder: hello@jurisync.example · +91-00000-00000</p>
          </section>

          <section>
            <h3>Useful links</h3>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </section>

          <section>
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">Privacy Policy (placeholder)</a>
              </li>
              <li>
                <a href="#">Terms of Service (placeholder)</a>
              </li>
            </ul>
          </section>
        </div>

        <div className="container footer-bottom">
          <p>
            Disclaimer: Content on this website is for informational purposes only and does not constitute individualized legal advice.
            Please consult a qualified professional for your specific circumstances.
          </p>
          <p>© {new Date().getFullYear()} Jurisync. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
