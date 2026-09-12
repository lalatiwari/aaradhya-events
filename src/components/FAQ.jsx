import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary block mb-2">
            Clear Information
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <div className="gold-ornament w-24 mx-auto" />
        </div>

        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="border border-charcoal/10 rounded-lg overflow-hidden bg-cream/20 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-cream/40"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-charcoal">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 text-primary shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed border-t border-charcoal/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}