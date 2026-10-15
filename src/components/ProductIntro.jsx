import React from 'react';
import { Palette, Beaker, PenTool, Lightbulb } from 'lucide-react';

export default function ProductIntro() {
  const features = [
    {
      icon: Palette,
      title: 'Intense Black Hue',
      description: 'A deep, opaque black shade achieved through the classic chemical coordination of iron(II) sulfate with botanical tea tannins.',
      meta: 'Chromophore: Iron Gallate Complex'
    },
    {
      icon: Beaker,
      title: 'Thoughtful Formulation',
      description: 'A liquid matrix formulated with selected components balancing solvent base, tannin reactants, colloid binder, and humectant stability.',
      meta: 'Composition: 5 Selected Ingredients'
    },
    {
      icon: PenTool,
      title: 'Smooth Application',
      description: 'Designed to investigate fluid surface tension, capillary uptake, and line definition across dip-pen and brush paper substrates.',
      meta: 'Application: Dip & Wash Testing'
    },
    {
      icon: Lightbulb,
      title: 'Student Innovation',
      description: 'A hands-on practical experiment in formulation chemistry, bridging historical ink synthesis with modern stationery design.',
      meta: 'Origin: Practical Chemistry Bench'
    }
  ];

  return (
    <section id="our-ink" className="py-24 bg-[#0D0E12] border-y border-[#1E2028] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 reveal">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#94A3B8] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]"></span>
            Product Introduction
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Small Bottle. <span className="italic font-normal text-[#CBD5E1]">Big Ideas.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            INKORA Black Ink is a student-developed liquid ink formulation prepared during a practical chemistry and engineering project. Developed to investigate how botanical polyphenols, transition metal precursors, and protective colloids interact, each experimental batch captures the discipline of benchtop inquiry.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`group relative bg-[#14151B] rounded-2xl p-7 border border-[#262832] shadow-editorial hover:border-[#3F4354] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between reveal stagger-${idx + 1}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1C1E26] border border-[#2E3240] text-[#E2E8F0] flex items-center justify-center mb-6 group-hover:bg-[#E2E8F0] group-hover:text-[#090A0C] transition-colors duration-300">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 font-normal">
                    {feature.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-[#1F212B] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                  <span>{feature.meta}</span>
                  <span className="text-[#475569]">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification & Transparency Footnote */}
        <div className="mt-12 p-4 rounded-xl bg-[#14151B] border border-[#262832] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#94A3B8] gap-2">
          <p>
            <strong className="font-semibold text-white">Academic Disclosure:</strong> Properties including waterproofness, permanence, archival grade, and nib compatibility are currently under testing and should not be assumed prior to documented verification.
          </p>
          <span className="font-mono text-[11px] text-[#CBD5E1] shrink-0">
            Status: Empirical Study
          </span>
        </div>

      </div>
    </section>
  );
}
