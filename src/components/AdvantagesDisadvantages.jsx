import React, { useState } from 'react';
import { 
  AlertCircle, 
  Check, 
  Info, 
  Sparkles, 
  Scale, 
  ShieldCheck, 
  AlertTriangle 
} from 'lucide-react';

export default function AdvantagesDisadvantages() {
  const [filterView, setFilterView] = useState('all'); // 'all', 'advantages', 'disadvantages'

  const advantages = [
    {
      id: 'adv-1',
      title: 'Simple Formulation',
      description: 'Prepared using accessible laboratory materials and natural botanical components without requiring hazardous or tightly restricted industrial reagents.',
      tag: 'Accessible Chemistry',
      highlight: 'Standard benchtop reagents'
    },
    {
      id: 'adv-2',
      title: 'Cost-Conscious Experiment',
      description: 'Developed using economical, readily available reagents, making iterative student trials and classroom educational synthesis highly feasible.',
      tag: 'Resource Efficient',
      highlight: 'Low preparation cost'
    },
    {
      id: 'adv-3',
      title: 'Customisable Consistency',
      description: 'Viscosity, surface wetting, and capillary release can be tuned by systematically adjusting gum arabic and glycerine proportions for different paper grades.',
      tag: 'Tunable Rheology',
      highlight: 'Modulable binder ratio'
    },
    {
      id: 'adv-4',
      title: 'Useful Learning Experience',
      description: 'Provides invaluable hands-on insight into polyphenol extraction, thermal cooling controls, iron-ligand coordination, and colloidal stability.',
      tag: 'Academic Value',
      highlight: 'Practical chemical inquiry'
    },
    {
      id: 'adv-5',
      title: 'Visible Black Colour',
      description: 'Produces a distinct, opaque, high-contrast dark mark on white and cream papers via the spontaneous complexation of Fe²⁺ ions with botanical tea tannins.',
      tag: 'Iron Gallate Hue',
      highlight: 'High optical contrast'
    },
    {
      id: 'adv-6',
      title: 'Small-Batch Preparation',
      description: 'Easily synthesized and refined in manageable 50–100 ml laboratory batches, minimizing waste while enabling rigorous batch-to-batch tracking.',
      tag: 'Controlled Batches',
      highlight: 'Rapid bench iteration'
    }
  ];

  const disadvantages = [
    {
      id: 'dis-1',
      title: 'Drying Performance Needs Testing',
      description: 'Drying speed varies noticeably depending on paper absorbency, atmospheric humidity, and line thickness; standardized drying curves remain under study.',
      tag: 'Variable Dry Rate',
      concern: 'Requires paper matching'
    },
    {
      id: 'dis-2',
      title: 'Water Resistance Is Unverified',
      description: 'The formulation has not undergone standardized water-submersion, washfastness, or wet-rub testing; water contact may cause ink bleeding or re-dissolution.',
      tag: 'Non-Waterproof',
      concern: 'Vulnerable to moisture'
    },
    {
      id: 'dis-3',
      title: 'Consistency Can Vary',
      description: 'Manual small-scale preparation and natural seasonal variations in tea tannin concentration can cause subtle batch-to-batch differences in flow and darkness.',
      tag: 'Batch Variance',
      concern: 'Manual compounding drift'
    },
    {
      id: 'dis-4',
      title: 'Possible Sedimentation',
      description: 'Microscopic iron-gallate complexes or colloidal particulates may gradually precipitate and settle over extended periods without periodic bottle shaking.',
      tag: 'Colloid Settling',
      concern: 'Requires agitation before use'
    },
    {
      id: 'dis-5',
      title: 'Pen Compatibility Is Unconfirmed',
      description: 'Not tested or recommended for fountain pens or narrow capillary feed mechanisms; colloidal gum and particulates may cause permanent feed blockages.',
      tag: 'Dip & Brush Only',
      concern: 'Not for fountain pens'
    },
    {
      id: 'dis-6',
      title: 'Storage Stability Is Unknown',
      description: 'Long-term shelf life, preservation against organic binder biodegradation, container oxidation, and lightfastness under sunlight require ongoing observation.',
      tag: 'Shelf Life Pending',
      concern: 'Continued logging required'
    },
    {
      id: 'dis-7',
      title: 'Limited Performance Data',
      description: 'Lacks industrial-grade instrument testing, standardized ASTM lightfastness ratings, and accelerated aging data typical of commercial brands.',
      tag: 'Experimental Scope',
      concern: 'No commercial certification'
    }
  ];

  const showAdvantages = filterView === 'all' || filterView === 'advantages';
  const showDisadvantages = filterView === 'all' || filterView === 'disadvantages';

  return (
    <section id="advantages" className="py-24 bg-[#090A0C] border-y border-[#1E2028] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6 reveal">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#94A3B8] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]"></span>
              Formulation Assessment & Critical Analysis
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Every Ink Has Its <span className="italic font-normal text-[#CBD5E1]">Strengths.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Understanding the benefits and limitations of our experimental black ink formulation. An honest, scientifically grounded evaluation of what worked at the lab bench and where further research is needed.
            </p>
          </div>

          {/* Interactive View Filter Toggle */}
          <div className="flex items-center p-1.5 rounded-2xl bg-[#14151B] border border-[#262832] shrink-0 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setFilterView('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                filterView === 'all'
                  ? 'bg-[#E2E8F0] text-[#090A0C] font-semibold shadow-xs'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              All Aspects ({advantages.length + disadvantages.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterView('advantages')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                filterView === 'advantages'
                  ? 'bg-emerald-400 text-[#090A0C] font-semibold shadow-xs'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              <span>Advantages ({advantages.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setFilterView('disadvantages')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                filterView === 'disadvantages'
                  ? 'bg-amber-400 text-[#090A0C] font-semibold shadow-xs'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Limitations ({disadvantages.length})</span>
            </button>
          </div>
        </div>

        {/* Two-Column Responsive Grid */}
        <div className={`grid gap-8 items-start ${
          filterView === 'all' 
            ? 'grid-cols-1 lg:grid-cols-2' 
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          
          {/* COLUMN 1: ADVANTAGES */}
          {showAdvantages && (
            <div className="bg-[#14151B] rounded-3xl p-6 sm:p-8 border border-[#262832] shadow-editorial flex flex-col justify-between reveal stagger-1">
              <div>
                {/* Column Card Header */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#262832]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                          Advantages
                        </h3>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          Strengths
                        </span>
                      </div>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        Documented benefits of our laboratory formulation
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-emerald-400 bg-[#1A2620] px-2.5 py-1 rounded-full border border-emerald-500/30">
                    {advantages.length} Points
                  </span>
                </div>

                {/* Advantages List */}
                <div className="space-y-4">
                  {advantages.map((item, index) => (
                    <div 
                      key={item.id}
                      className="group p-4.5 rounded-2xl bg-[#181A22] border border-[#262832] hover:border-emerald-500/40 hover:bg-[#1B1D26] transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-3.5 mb-2.5">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-serif text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                              {item.title}
                            </h4>
                            <span className="text-[10px] font-mono text-[#64748B]">
                              0{index + 1}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2.5 mt-1 border-t border-[#232632] flex items-center justify-between text-[11px] font-mono">
                        <span className="text-emerald-400/90 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/15">
                          ✓ {item.highlight}
                        </span>
                        <span className="text-[#64748B]">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advantages Summary Footnote */}
              <div className="mt-6 pt-4 border-t border-[#262832] flex items-center gap-2 text-xs text-[#94A3B8]">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Formulated entirely through accessible student lab methodology without industrial additives.</span>
              </div>
            </div>
          )}

          {/* COLUMN 2: DISADVANTAGES / LIMITATIONS */}
          {showDisadvantages && (
            <div className="bg-[#14151B] rounded-3xl p-6 sm:p-8 border border-[#262832] shadow-editorial flex flex-col justify-between reveal stagger-2">
              <div>
                {/* Column Card Header */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#262832]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-amber-400 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                          Disadvantages
                        </h3>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          Limitations
                        </span>
                      </div>
                      <p className="text-xs text-[#94A3B8] mt-0.5">
                        Known experimental constraints & study targets
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-amber-400 bg-[#282218] px-2.5 py-1 rounded-full border border-amber-500/30">
                    {disadvantages.length} Points
                  </span>
                </div>

                {/* Disadvantages List */}
                <div className="space-y-4">
                  {disadvantages.map((item, index) => (
                    <div 
                      key={item.id}
                      className="group p-4.5 rounded-2xl bg-[#181A22] border border-[#262832] hover:border-amber-500/40 hover:bg-[#1B1D26] transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-3.5 mb-2.5">
                        <div className="w-6 h-6 rounded-full bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                          <AlertCircle className="w-3.5 h-3.5 stroke-[2.2]" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-serif text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                              {item.title}
                            </h4>
                            <span className="text-[10px] font-mono text-[#64748B]">
                              0{index + 1}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2.5 mt-1 border-t border-[#232632] flex items-center justify-between text-[11px] font-mono">
                        <span className="text-amber-400/90 bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/15">
                          ⚠ {item.concern}
                        </span>
                        <span className="text-[#64748B]">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disadvantages Summary Footnote */}
              <div className="mt-6 pt-4 border-t border-[#262832] flex items-center gap-2 text-xs text-[#94A3B8]">
                <Scale className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Identified as targets for subsequent laboratory refinement and standardized testing.</span>
              </div>
            </div>
          )}

        </div>

        {/* MANDATORY SCIENTIFIC DISCLAIMER */}
        <div className="mt-12 bg-[#12141A] rounded-2xl p-6 sm:p-7 border border-[#262832] flex flex-col sm:flex-row items-start gap-4 reveal">
          <div className="w-10 h-10 rounded-xl bg-[#1C1E26] border border-[#2E3240] text-[#CBD5E1] flex items-center justify-center shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-1.5">
              <h4 className="font-serif text-base font-bold text-white">
                Academic & Scientific Disclosure
              </h4>
              <span className="text-[10px] font-mono bg-white/10 text-[#E2E8F0] px-2 py-0.5 rounded">
                Benchtop Research Status
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              INKORA Black Ink is an educational laboratory formulation developed by undergraduate students as part of a practical chemistry inquiry. It is not an industrial consumer product. All performance characteristics—including viscosity, line definition, drying behaviour, and stability—are based on benchtop observations and empirical student trials rather than certified commercial manufacturing or testing standards. Do not load this ink into delicate fountain pens or use it on archival legal documents prior to verified standardized testing.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
