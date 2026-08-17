import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ServiceFAQ } from '../types';

interface FAQAccordionProps {
  faqs: ServiceFAQ[];
  title?: string;
  subtitle?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Clear, legally vetted answers from our practicing Company Secretaries & Chartered Accountants.',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {(title || subtitle) && (
        <div className="text-center max-w-2xl mx-auto space-y-2">
          {title && <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">{title}</h3>}
          {subtitle && <p className="text-xs sm:text-sm text-slate-500">{subtitle}</p>}
        </div>
      )}

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-amber-400 bg-amber-50/30 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-xs sm:text-sm text-slate-900 leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 mt-0.5 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-amber-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-amber-100/50 mt-1">
                  <p className="pt-2">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
