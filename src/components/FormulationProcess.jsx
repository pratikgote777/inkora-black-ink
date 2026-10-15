import React, { useState } from 'react';
import { 
  Scale, 
  Flame, 
  Thermometer, 
  Filter, 
  RefreshCw, 
  SlidersHorizontal, 
  Sparkles, 
  Package, 
  AlertCircle, 
  ChevronRight, 
  ChevronLeft 
} from 'lucide-react';

export default function FormulationProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Ingredient Preparation',
      short: 'Preparation',
      icon: Scale,
      summary: 'Prepare and measure the required ingredients.',
      details: 'Demineralized water, dried black tea leaves (botanical tannin precursor), ferrous sulphate heptahydrate crystals, gum arabic flakes, and glycerine are precisely weighed on an analytical laboratory balance.',
      param: 'Precision: ±0.01g',
      temp: 'Ambient ~22°C'
    },
    {
      num: '02',
      title: 'Heating / Tea Extract Preparation',
      short: 'Heating / Extraction',
      icon: Flame,
      summary: 'Extract tannins by heating tea in water, followed by an extraction period.',
      details: 'Demineralized water and tea leaves are gently brought to a regulated sub-boiling temperature in a borosilicate beaker with continuous stirring, allowing hydrolysable gallotannins and polyphenols to infuse into the aqueous phase.',
      param: 'Thermal: 85°C · 15 mins',
      temp: 'Regulated Heating'
    },
    {
      num: '03',
      title: 'Cooling',
      short: 'Thermal Cooling',
      icon: Thermometer,
      summary: 'Allow the heated solution to reach room temperature before continuing with the next step.',
      details: 'The heated tea extract is removed from the heating source and allowed to cool naturally to ambient room temperature (20°C – 22°C). Cooling prevents thermal decomposition of subsequent organic binders and ensures predictable iron complexation thermodynamics.',
      param: 'Target: 21°C Room Temp',
      temp: 'Passive Cooling'
    },
    {
      num: '04',
      title: 'Filtration',
      short: 'Extract Filtration',
      icon: Filter,
      summary: 'Filter the cooled tea extract to remove tea leaves and undissolved particles.',
      details: 'The cooled extract is decanted and vacuum- or gravity-filtered through laboratory grade filter paper. This eliminates coarse leaf residue, yielding a transparent amber tannin broth ready for reaction.',
      param: 'Mesh: Whatman Grade 1',
      temp: 'Ambient ~21°C'
    },
    {
      num: '05',
      title: 'Mixing',
      short: 'Iron-Tannin Mixing',
      icon: RefreshCw,
      summary: 'Combine the prepared ingredients according to the actual formulation.',
      details: 'Ferrous sulphate (FeSO₄) is dissolved into the clear tannin extract under constant agitation. An immediate transition occurs as Fe²⁺ ions coordinate with tannin catechol moieties to yield the characteristic deep black iron gallate complex. Pre-hydrated gum arabic and glycerine are incrementally folded in.',
      param: 'Agitation: 350 RPM',
      temp: 'Complexation Phase'
    },
    {
      num: '06',
      title: 'Consistency Adjustment',
      short: 'Consistency',
      icon: SlidersHorizontal,
      summary: 'Observe the thickness and flow of the mixture and make any necessary, documented adjustments.',
      details: 'Rheology and capillary behavior are assessed via droplet spread and dip-pen trial strokes. Glycerine content is titrated to balance evaporation resistance, while small additions of solvent or gum calibrate viscosity.',
      param: 'Rheology: Dip Viscosity',
      temp: 'Capillary Calibration'
    },
    {
      num: '07',
      title: 'Final Filtration',
      short: 'Final Filtration',
      icon: Sparkles,
      summary: 'Filter the finished mixture if needed to remove particles that could affect smoothness.',
      details: 'The formulated colloidal ink is passed through a secondary fine filter to capture any macro-aggregates, ensuring a smooth, non-clogging fluid capable of continuous capillary delivery to writing nibs.',
      param: 'Clarity: Particle-Free',
      temp: 'Quality Refinement'
    },
    {
      num: '08',
      title: 'Packaging',
      short: 'Bottling & Label',
      icon: Package,
      summary: 'Transfer the prepared ink into a clean, suitable container and label it.',
      details: 'The finished black ink is transferred into sterilized borosilicate glass bottles, securely sealed with fluted airtight caps to prevent oxidation and evaporation, and catalogued with its unique batch code and laboratory date.',
      param: 'Vessel: Borosilicate Glass',
      temp: 'Final Storage'
    }
  ];

  return (
    <section id="the-process" className="py-24 bg-[#0E0F13] border-y border-[#1E2028] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#94A3B8] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]"></span>
            Practical Methodology & Timeline
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            From Ingredients <span className="italic font-normal text-[#CBD5E1]">to Black Ink.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            The formulation sequence follows a disciplined practical protocol — from thermal polyphenol extraction and dedicated room-temperature cooling to transition-metal complexation and protective colloid stabilization.
          </p>
        </div>

        {/* DESKTOP TIMELINE (Horizontal 8-Step System) */}
        <div className="hidden lg:block mb-12">
          {/* Horizontal Step Header Indicators */}
          <div className="grid grid-cols-8 gap-2 relative">
            {/* Horizontal Connecting Line with Fluid Animation */}
            <div className="absolute top-6 left-8 right-8 h-1 rounded-full animate-timeline-flow -z-0 opacity-80" />

            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              const isCoolingStep = idx === 2; // Step 03: Cooling
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="relative z-10 flex flex-col items-center text-center group focus:outline-none cursor-pointer"
                >
                  {/* Step Bubble */}
                  <div 
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? isCoolingStep 
                          ? 'bg-[#38BDF8] text-[#090A0C] ring-4 ring-[#38BDF8]/20 shadow-editorial animate-glow-pulse scale-108'
                          : 'bg-[#E2E8F0] text-[#090A0C] ring-4 ring-white/20 shadow-editorial animate-glow-pulse scale-108'
                        : isCoolingStep
                          ? 'bg-[#121B24] text-[#38BDF8] border border-[#0284C7]/40 hover:border-[#38BDF8] hover:scale-104'
                          : 'bg-[#14151B] text-[#94A3B8] border border-[#262832] group-hover:border-[#3F4354] hover:scale-104'
                    }`}
                  >
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  
                  {/* Step Number & Title */}
                  <span className={`mt-2.5 font-mono text-[11px] font-bold ${isCoolingStep ? 'text-[#38BDF8]' : 'text-[#CBD5E1]'}`}>
                    {step.num}
                  </span>
                  <span className={`text-xs font-serif font-bold mt-0.5 line-clamp-2 transition-colors ${
                    isSelected ? 'text-white' : 'text-[#71717A] group-hover:text-[#A1A7B8]'
                  }`}>
                    {step.short}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Card */}
          <div className="mt-12 bg-[#14151B] rounded-3xl p-8 border border-[#262832] shadow-editorial-lg flex flex-col md:flex-row items-center justify-between gap-8 transition-all">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full ${
                  activeStep === 2
                    ? 'bg-[#0C2438] text-[#38BDF8] border border-[#0284C7]/30'
                    : 'bg-[#1E2028] text-white border border-[#2E3240]'
                }`}>
                  PHASE {steps[activeStep].num} OF 08 · {steps[activeStep].title.toUpperCase()}
                </span>
                <span className="text-xs font-mono text-[#94A3B8]">
                  {steps[activeStep].param}
                </span>
                <span className="text-xs font-mono text-[#64748B]">
                  • {steps[activeStep].temp}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                {steps[activeStep].title}
              </h3>
              
              <p className="text-base font-medium text-[#E2E8F0] mb-3">
                {steps[activeStep].summary}
              </p>
              
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {steps[activeStep].details}
              </p>

              {activeStep === 2 && (
                <div className="mt-4 p-3 rounded-xl bg-[#091E2C] border border-[#0284C7]/40 text-xs text-[#7DD3FC] flex items-center gap-2 font-mono">
                  <Thermometer className="w-4 h-4 shrink-0 text-[#38BDF8]" />
                  <span>Crucial Lab Step: Thermal cooling of tea extract is required prior to adding FeSO₄ to avoid premature thermal decomposition of tannin complexes.</span>
                </div>
              )}
            </div>

            {/* Quick Step Switcher */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono font-medium rounded-xl border border-[#262832] bg-[#181A22] hover:bg-[#222530] text-[#E2E8F0] transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>
              
              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-mono font-medium rounded-xl bg-[#E2E8F0] text-[#090A0C] hover:bg-white transition-colors"
              >
                <span>Next Phase</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE TIMELINE (Vertical Accordion List) */}
        <div className="block lg:hidden space-y-3 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            const isCoolingStep = idx === 2;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isSelected 
                    ? isCoolingStep
                      ? 'bg-[#0E1B26] border-[#0284C7]/50 shadow-editorial'
                      : 'bg-[#181A22] border-[#3F4354] shadow-editorial' 
                    : 'bg-[#14151B] border-[#262832]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="w-full p-4.5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected 
                        ? isCoolingStep ? 'bg-[#38BDF8] text-[#090A0C]' : 'bg-[#E2E8F0] text-[#090A0C]' 
                        : isCoolingStep ? 'bg-[#0C2438] text-[#38BDF8]' : 'bg-[#1E2028] text-[#94A3B8]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className={`font-mono text-[11px] font-bold block ${isCoolingStep ? 'text-[#38BDF8]' : 'text-[#CBD5E1]'}`}>
                        PHASE {step.num}
                      </span>
                      <h3 className="font-serif text-sm font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-[#71717A] transform transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                </button>

                {isSelected && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#262832] text-xs">
                    <p className="font-medium text-white mb-2">{step.summary}</p>
                    <p className="text-[#94A3B8] leading-relaxed mb-3">{step.details}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-block text-[10px] font-mono text-[#E2E8F0] bg-[#1E2028] px-2.5 py-1 rounded">
                        {step.param}
                      </span>
                      <span className="inline-block text-[10px] font-mono text-[#94A3B8] bg-[#1E2028] px-2.5 py-1 rounded">
                        {step.temp}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mandatory Workflow Disclaimer */}
        <div className="p-5 rounded-2xl bg-[#14151B] border border-[#262832] flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-[#CBD5E1] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            <strong className="font-semibold text-white">Process Transparency:</strong> These 8 steps describe the practical laboratory workflow executed during student synthesis of our black iron-tannin ink, including mandatory thermal cooling. Actual formulation performance, pigment permanence, and fountain-pen compatibility remain subject to ongoing observation.
          </div>
        </div>

      </div>
    </section>
  );
}
