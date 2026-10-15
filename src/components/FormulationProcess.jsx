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
  ChevronLeft,
  Check
} from 'lucide-react';

export default function FormulationProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Ingredient Preparation',
      short: 'Preparation',
      icon: Scale,
      summary: 'Prepare and precisely measure all required ingredients.',
      details: 'Demineralized water, dried black tea leaves (botanical tannin precursor), ferrous sulphate heptahydrate crystals, gum arabic flakes, and glycerine are precisely weighed on an analytical laboratory balance.',
      param: 'Precision: ±0.01g',
      temp: 'Ambient ~22°C',
      tag: 'ANALYTICAL WEIGHING',
      color: '#F59E0B', // Amber / Gold
      bgLight: 'rgba(245, 158, 11, 0.12)',
      borderCol: 'rgba(245, 158, 11, 0.45)',
      glow: 'rgba(245, 158, 11, 0.4)',
      note: 'Analytical Precision: Accurate stoichiometric ratios of botanical tannins to iron heptahydrate ensure saturated blackness without iron precipitation.'
    },
    {
      num: '02',
      title: 'Heating / Tea Extract Preparation',
      short: 'Heating / Extraction',
      icon: Flame,
      summary: 'Extract tannins by heating tea in water, followed by a regulated extraction period.',
      details: 'Demineralized water and tea leaves are gently brought to a regulated sub-boiling temperature (85°C) in a borosilicate beaker with continuous stirring, allowing hydrolysable gallotannins and polyphenols to infuse into the aqueous phase.',
      param: 'Thermal: 85°C · 15 mins',
      temp: 'Regulated Heating',
      tag: 'THERMAL EXTRACTION',
      color: '#EF4444', // Fiery Crimson Red
      bgLight: 'rgba(239, 68, 68, 0.12)',
      borderCol: 'rgba(239, 68, 68, 0.45)',
      glow: 'rgba(239, 68, 68, 0.4)',
      note: 'Strict Thermal Control: Extraction at 85°C maximizes polyphenol release while preventing thermal oxidation or burning of leaf tannins.'
    },
    {
      num: '03',
      title: 'Cooling',
      short: 'Thermal Cooling',
      icon: Thermometer,
      summary: 'Allow the heated solution to reach room temperature before continuing with the next step.',
      details: 'The heated tea extract is removed from the heating source and allowed to cool naturally to ambient room temperature (20°C – 22°C). Cooling prevents thermal decomposition of subsequent organic binders and ensures predictable iron complexation thermodynamics.',
      param: 'Target: 21°C Room Temp',
      temp: 'Passive Cooling',
      tag: 'THERMAL COOLING',
      color: '#38BDF8', // Cyan / Sky Blue
      bgLight: 'rgba(56, 189, 248, 0.12)',
      borderCol: 'rgba(56, 189, 248, 0.45)',
      glow: 'rgba(56, 189, 248, 0.4)',
      note: 'Crucial Lab Protocol: Thermal cooling of tea extract is required prior to adding FeSO₄ to avoid premature thermal decomposition of tannin complexes.'
    },
    {
      num: '04',
      title: 'Filtration',
      short: 'Extract Filtration',
      icon: Filter,
      summary: 'Filter the cooled tea extract to remove tea leaves and undissolved particles.',
      details: 'The cooled extract is decanted and vacuum- or gravity-filtered through laboratory grade filter paper. This eliminates coarse leaf residue, yielding a transparent amber tannin broth ready for reaction.',
      param: 'Mesh: Whatman Grade 1',
      temp: 'Ambient ~21°C',
      tag: 'SOLIDS SEPARATION',
      color: '#14B8A6', // Mint / Teal
      bgLight: 'rgba(20, 184, 166, 0.12)',
      borderCol: 'rgba(20, 184, 166, 0.45)',
      glow: 'rgba(20, 184, 166, 0.4)',
      note: 'Particulate Clarification: Eliminating suspended cellular debris ensures subsequent ink colloids form around pure dissolved catechins.'
    },
    {
      num: '05',
      title: 'Mixing',
      short: 'Iron-Tannin Mixing',
      icon: RefreshCw,
      summary: 'Combine the prepared ingredients according to the actual formulation.',
      details: 'Ferrous sulphate (FeSO₄) is dissolved into the clear tannin extract under constant agitation. An immediate transition occurs as Fe²⁺ ions coordinate with tannin catechol moieties to yield the characteristic deep black iron gallate complex. Pre-hydrated gum arabic and glycerine are incrementally folded in.',
      param: 'Agitation: 350 RPM',
      temp: 'Complexation Phase',
      tag: 'METALLIC COMPLEXATION',
      color: '#A855F7', // Royal Purple / Violet
      bgLight: 'rgba(168, 85, 247, 0.12)',
      borderCol: 'rgba(168, 85, 247, 0.45)',
      glow: 'rgba(168, 85, 247, 0.4)',
      note: 'Chemical Reaction: Immediate organometallic coordination yields deep blue-black iron(II/III) tannate complex nano-colloids.'
    },
    {
      num: '06',
      title: 'Consistency Adjustment',
      short: 'Consistency',
      icon: SlidersHorizontal,
      summary: 'Observe the thickness and flow of the mixture and make any necessary, documented adjustments.',
      details: 'Rheology and capillary behavior are assessed via droplet spread and dip-pen trial strokes. Glycerine content is titrated to balance evaporation resistance, while small additions of solvent or gum calibrate viscosity.',
      param: 'Rheology: Dip Viscosity',
      temp: 'Capillary Calibration',
      tag: 'RHEOLOGY & FLOW',
      color: '#6366F1', // Cobalt / Indigo
      bgLight: 'rgba(99, 102, 241, 0.12)',
      borderCol: 'rgba(99, 102, 241, 0.45)',
      glow: 'rgba(99, 102, 241, 0.4)',
      note: 'Fluid Mechanics: Gum arabic provides steric colloidal suspension, while glycerine acts as a humectant to prevent nib drying.'
    },
    {
      num: '07',
      title: 'Final Filtration',
      short: 'Final Filtration',
      icon: Sparkles,
      summary: 'Filter the finished mixture if needed to remove particles that could affect smoothness.',
      details: 'The formulated colloidal ink is passed through a secondary fine filter to capture any macro-aggregates, ensuring a smooth, non-clogging fluid capable of continuous capillary delivery to writing nibs.',
      param: 'Clarity: Particle-Free',
      temp: 'Quality Refinement',
      tag: 'PURITY POLISHING',
      color: '#10B981', // Emerald Green
      bgLight: 'rgba(16, 185, 129, 0.12)',
      borderCol: 'rgba(16, 185, 129, 0.45)',
      glow: 'rgba(16, 185, 129, 0.4)',
      note: 'Agglomerate Removal: Fine mesh screening prevents feed-channel blockages and ensures smooth uninterrupted ink laydown.'
    },
    {
      num: '08',
      title: 'Packaging',
      short: 'Bottling & Label',
      icon: Package,
      summary: 'Transfer the prepared ink into a clean, suitable container and label it.',
      details: 'The finished black ink is transferred into sterilized borosilicate glass bottles, securely sealed with fluted airtight caps to prevent oxidation and evaporation, and catalogued with its unique batch code and laboratory date.',
      param: 'Vessel: Borosilicate Glass',
      temp: 'Final Storage',
      tag: 'HERMETIC SEALING',
      color: '#EC4899', // Rose Pink / Magenta
      bgLight: 'rgba(236, 72, 153, 0.12)',
      borderCol: 'rgba(236, 72, 153, 0.45)',
      glow: 'rgba(236, 72, 153, 0.4)',
      note: 'Storage Integrity: Airtight containment prevents premature atmospheric oxidation and preserves capillary viscosity during storage.'
    }
  ];

  const currentStep = steps[activeStep];
  const CurrentIcon = currentStep.icon;

  return (
    <section id="the-process" className="py-24 bg-[#0E0F13] border-y border-[#1E2028] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#94A3B8] mb-3">
            <span 
              className="w-2 h-2 rounded-full transition-colors duration-500 shadow-sm"
              style={{ backgroundColor: currentStep.color, boxShadow: `0 0 8px ${currentStep.color}` }}
            />
            Practical Methodology & Timeline
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            From Ingredients <span className="italic font-normal text-[#CBD5E1]">to Black Ink.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            The formulation sequence follows a disciplined practical protocol — from thermal polyphenol extraction and dedicated room-temperature cooling to transition-metal complexation and protective colloid stabilization.
          </p>
        </div>

        {/* DESKTOP TIMELINE (Horizontal 8-Step System with Progressive Dynamic Line) */}
        <div className="hidden lg:block mb-12">
          {/* Horizontal Step Header Indicators */}
          <div className="grid grid-cols-8 gap-2 relative">
            
            {/* Background Base Rail (connects centers of Column 1 to Column 8) */}
            <div 
              className="absolute top-6 h-1 rounded-full bg-[#1A1C24] -z-0 pointer-events-none"
              style={{
                left: '6.25%',
                width: '87.5%'
              }}
            >
              {/* Dynamic Animated Active Line - Grows ONLY up to the active step! */}
              <div 
                className="h-full rounded-full relative transition-all duration-700 ease-out"
                style={{
                  width: `${(activeStep / (steps.length - 1)) * 100}%`,
                  background: activeStep === 0 
                    ? steps[0].color 
                    : `linear-gradient(90deg, ${steps[0].color} 0%, ${steps[Math.max(0, activeStep - 1)].color} 50%, ${currentStep.color} 100%)`,
                  boxShadow: `0 0 16px ${currentStep.color}99`
                }}
              >
                {/* Glowing Beacon Head on the Line Tip */}
                {activeStep > 0 && (
                  <div 
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 rounded-full ring-2 ring-[#0E0F13] transition-colors duration-500 animate-pulse"
                    style={{
                      backgroundColor: currentStep.color,
                      boxShadow: `0 0 10px ${currentStep.color}`
                    }}
                  />
                )}
              </div>
            </div>

            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              const isPast = idx < activeStep;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="relative z-10 flex flex-col items-center text-center group focus:outline-none cursor-pointer"
                >
                  {/* Step Bubble */}
                  <div 
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-400 relative ${
                      isSelected
                        ? 'scale-110 shadow-editorial-lg'
                        : isPast
                          ? 'hover:scale-105'
                          : 'hover:scale-105 opacity-65 group-hover:opacity-100'
                    }`}
                    style={
                      isSelected
                        ? {
                            backgroundColor: step.color,
                            color: '#090A0C',
                            boxShadow: `0 0 24px ${step.glow}, 0 4px 14px rgba(0,0,0,0.6)`,
                            border: `2px solid rgba(255, 255, 255, 0.4)`
                          }
                        : isPast
                          ? {
                              backgroundColor: '#14151B',
                              color: step.color,
                              border: `1.5px solid ${step.color}`
                            }
                          : {
                              backgroundColor: '#14151B',
                              color: '#64748B',
                              border: '1.5px solid #262832'
                            }
                    }
                  >
                    <Icon className="w-5 h-5 stroke-[2]" />

                    {/* Completed checkmark badge */}
                    {isPast && (
                      <span 
                        className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-[#090A0C] ring-2 ring-[#0E0F13] transition-all"
                        style={{ backgroundColor: step.color }}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    )}
                  </div>
                  
                  {/* Step Number & Title */}
                  <span 
                    className="mt-2.5 font-mono text-[11px] font-bold transition-colors duration-300"
                    style={{
                      color: isSelected || isPast ? step.color : '#64748B'
                    }}
                  >
                    {step.num}
                  </span>
                  <span 
                    className={`text-xs font-serif font-bold mt-0.5 line-clamp-2 transition-colors duration-300 ${
                      isSelected 
                        ? 'text-white' 
                        : isPast 
                          ? 'text-[#CBD5E1]' 
                          : 'text-[#64748B] group-hover:text-[#A1A7B8]'
                    }`}
                  >
                    {step.short}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Card */}
          <div 
            className="mt-12 bg-[#14151B] rounded-3xl p-8 border shadow-editorial-lg flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-500 relative overflow-hidden"
            style={{
              borderColor: currentStep.borderCol,
              boxShadow: `0 16px 40px -8px rgba(0, 0, 0, 0.75), 0 0 40px ${currentStep.color}15`
            }}
          >
            {/* Subtle corner glow in step color */}
            <div 
              className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20 transition-all duration-500"
              style={{ backgroundColor: currentStep.color }}
            />

            <div className="max-w-2xl relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span 
                  className="font-mono text-xs font-bold px-3 py-1 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: currentStep.bgLight,
                    color: currentStep.color,
                    border: `1px solid ${currentStep.borderCol}`
                  }}
                >
                  PHASE {currentStep.num} OF 08 · {currentStep.tag}
                </span>
                <span className="text-xs font-mono text-[#CBD5E1] bg-[#1E2028] px-2.5 py-0.5 rounded-md border border-[#2E3240]">
                  {currentStep.param}
                </span>
                <span className="text-xs font-mono text-[#94A3B8]">
                  • {currentStep.temp}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                {currentStep.title}
              </h3>
              
              <p className="text-base font-medium text-[#E2E8F0] mb-3">
                {currentStep.summary}
              </p>
              
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {currentStep.details}
              </p>

              {/* Step specialized laboratory note */}
              <div 
                className="mt-5 p-3.5 rounded-xl border text-xs flex items-center gap-2.5 font-mono transition-all duration-500"
                style={{
                  backgroundColor: currentStep.bgLight,
                  borderColor: currentStep.borderCol,
                  color: currentStep.color
                }}
              >
                <CurrentIcon className="w-4 h-4 shrink-0" />
                <span className="text-[#E2E8F0]">{currentStep.note}</span>
              </div>
            </div>

            {/* Quick Step Switcher */}
            <div className="flex items-center gap-3 shrink-0 relative z-10">
              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono font-medium rounded-xl border border-[#262832] bg-[#181A22] hover:bg-[#222530] text-[#E2E8F0] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>
              
              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-mono font-bold rounded-xl transition-all duration-300 cursor-pointer text-[#090A0C]"
                style={{
                  backgroundColor: currentStep.color,
                  boxShadow: `0 0 16px ${currentStep.glow}`
                }}
              >
                <span>{activeStep === steps.length - 1 ? 'Restart Sequence' : 'Next Phase'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE TIMELINE (Vertical Accordion List with Distinct Colors) */}
        <div className="block lg:hidden space-y-3 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            const isPast = idx < activeStep;

            return (
              <div
                key={idx}
                className="rounded-2xl border transition-all duration-300"
                style={{
                  backgroundColor: isSelected ? '#161820' : '#14151B',
                  borderColor: isSelected ? step.color : '#262832',
                  boxShadow: isSelected ? `0 4px 20px -2px rgba(0,0,0,0.5), 0 0 24px ${step.color}25` : undefined
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="w-full p-4.5 flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 relative"
                      style={{
                        backgroundColor: isSelected ? step.color : isPast ? step.bgLight : '#1E2028',
                        color: isSelected ? '#090A0C' : isPast ? step.color : '#94A3B8',
                        border: isPast && !isSelected ? `1.5px solid ${step.color}` : undefined
                      }}
                    >
                      <Icon className="w-4 h-4 stroke-[2]" />
                      {isPast && (
                        <span 
                          className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold text-[#090A0C]"
                          style={{ backgroundColor: step.color }}
                        >
                          ✓
                        </span>
                      )}
                    </div>
                    <div>
                      <span 
                        className="font-mono text-[11px] font-bold block transition-colors"
                        style={{ color: isSelected || isPast ? step.color : '#94A3B8' }}
                      >
                        PHASE {step.num} · {step.tag}
                      </span>
                      <h3 className="font-serif text-sm font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight 
                    className="w-4 h-4 transition-transform duration-300" 
                    style={{ 
                      color: isSelected ? step.color : '#71717A',
                      transform: isSelected ? 'rotate(90deg)' : 'rotate(0deg)'
                    }} 
                  />
                </button>

                {isSelected && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#262832] text-xs">
                    <p className="font-medium text-white mb-2">{step.summary}</p>
                    <p className="text-[#94A3B8] leading-relaxed mb-3">{step.details}</p>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span 
                        className="inline-block text-[10px] font-mono px-2.5 py-1 rounded"
                        style={{ 
                          backgroundColor: step.bgLight, 
                          color: step.color, 
                          border: `1px solid ${step.borderCol}` 
                        }}
                      >
                        {step.param}
                      </span>
                      <span className="inline-block text-[10px] font-mono text-[#CBD5E1] bg-[#1E2028] px-2.5 py-1 rounded">
                        {step.temp}
                      </span>
                    </div>

                    <div 
                      className="p-3 rounded-xl border text-xs flex items-center gap-2 font-mono"
                      style={{ 
                        backgroundColor: step.bgLight, 
                        borderColor: step.borderCol, 
                        color: step.color 
                      }}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="text-[#E2E8F0]">{step.note}</span>
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
