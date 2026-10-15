import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is INKORA Black Ink?',
      a: 'A black liquid ink formulation developed as part of an undergraduate student practical chemistry and engineering project.'
    },
    {
      q: 'What gives the ink its black colour?',
      a: 'The deep black colour is produced by the chemical coordination of iron(II) sulfate with botanical tannins extracted from heated black tea, yielding an intensely opaque black iron gallate complex suspended in the liquid matrix.'
    },
    {
      q: 'What is gum arabic used for?',
      a: 'Gum arabic functions as a natural protective colloid and binder. It maintains the black iron-tannin particles in uniform suspension, prevents agglomeration, influences fluid viscosity, and aids paper adhesion.'
    },
    {
      q: 'Is the ink waterproof?',
      a: 'Waterproof performance has not yet been established and requires ongoing testing.'
    },
    {
      q: 'Can it be used in a fountain pen?',
      a: 'Compatibility has not been established. Test compatibility before use; do not assume it is suitable for fountain pens, as particulate suspensions can clog fine capillary feeds.'
    },
    {
      q: 'Is the product commercially available?',
      a: 'It is currently presented as a student-developed project. Contact the team for project and academic research information.'
    }
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0E0F13] border-t border-[#1E2028] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#94A3B8] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]"></span>
            Inquiry & Clarifications
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Direct, factual answers concerning the black ink formulation, iron-tannin chemistry, performance testing, and the academic scope of the INKORA project.
          </p>
        </div>

        {/* Interactive Accordion */}
        <div className="space-y-4 reveal">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden reveal stagger-${(idx % 6) + 1} ${
                  isOpen
                    ? 'bg-[#14151B] border-[#3F4354] shadow-editorial'
                    : 'bg-[#101116] border-[#262832] hover:border-[#333746]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#E2E8F0] text-[#090A0C] rotate-180' : 'bg-[#1E2028] text-[#94A3B8]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#94A3B8] leading-relaxed border-t border-[#1F212B] animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center text-xs font-mono text-[#71717A]">
          Have a specific chemistry or collaboration question not covered here?{' '}
          <a href="#contact" className="text-[#E2E8F0] underline underline-offset-4 hover:text-white">
            Reach out via our contact section
          </a>.
        </div>

      </div>
    </section>
  );
}
