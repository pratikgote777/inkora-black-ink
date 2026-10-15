import React, { useState } from 'react';
import { Edit3, Check, RotateCcw, ArrowRight, Info, Droplets } from 'lucide-react';

export default function ProductDetails() {
  const [batchVolume, setBatchVolume] = useState(() => {
    return localStorage.getItem('inkora_batch_volume') || 'To be measured';
  });
  const [isEditingVolume, setIsEditingVolume] = useState(false);
  const [tempVolume, setTempVolume] = useState(batchVolume);

  const saveVolume = () => {
    const val = tempVolume.trim() || 'To be measured';
    setBatchVolume(val);
    localStorage.setItem('inkora_batch_volume', val);
    setIsEditingVolume(false);
  };

  const resetVolume = () => {
    setBatchVolume('To be measured');
    setTempVolume('To be measured');
    localStorage.removeItem('inkora_batch_volume');
    setIsEditingVolume(false);
  };

  const handleRequestInfo = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const subjectInput = document.getElementById('contact-subject');
      if (subjectInput) {
        subjectInput.value = 'Product Information & Academic Inquiry - Black Ink';
      }
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="details" className="py-24 bg-[#090A0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Real Physical Black Ink Bottle Photograph (Theme Matched) */}
          <div className="lg:col-span-5 flex justify-center reveal reveal-scale">
            <div className="group relative w-full max-w-md bg-gradient-to-b from-[#1C1E26] via-[#14151C] to-[#0E0F14] rounded-3xl p-3 sm:p-4 border border-[#323646] shadow-editorial-lg text-center">
              
              {/* Inner Framing Container with subtle lighting */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#0D0F14] border border-[#262832] p-2.5 sm:p-3 shadow-inner flex flex-col items-center">
                
                {/* Header Specimen & Live Sample Tag */}
                <div className="w-full flex items-center justify-between px-1.5 pt-1.5 pb-3 text-xs">
                  <div className="flex items-center gap-1.5 bg-[#090A0C]/90 px-3 py-1 rounded-full border border-white/20 text-[10px] font-mono text-white backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>SPECIMEN ID: EXP-FE-01</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                    <span>Real Product Photo</span>
                  </span>
                </div>

                {/* Real Bottle Image in Clean Light Studio Sweep for Maximum Contrast */}
                <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EDF2F7] p-2.5 flex items-center justify-center">
                  <img
                    src="/images/products/real-inkora-black-ink-bottle.jpeg"
                    alt="Real physical bottle of INKORA Black Ink at MIT AOE School of Chemical Engineering"
                    className="w-full h-auto max-h-[460px] object-contain rounded-lg shadow-md transform group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Floating Laboratory Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#090A0C]/85 backdrop-blur-md p-3 rounded-xl border border-white/10 text-left shadow-lg">
                    <div className="text-[11px] font-serif font-bold text-white flex items-center justify-between">
                      <span>Physical Formulation Sample</span>
                      <span className="text-[9px] font-mono text-emerald-400 font-normal">MIT AOE</span>
                    </div>
                    <div className="text-[10px] font-mono text-[#CBD5E1] mt-0.5">
                      Cylindrical glass container · White fluted cap · Iron-tannin black liquid
                    </div>
                  </div>
                </div>

                {/* Status footer on bottle card */}
                <div className="w-full pt-3 px-2 flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                  <span>Status: Verified Physical Sample</span>
                  <span className="text-white font-semibold">Batch 01 (Black)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Details & Specifications */}
          <div className="lg:col-span-7 reveal stagger-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#94A3B8] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]"></span>
              Product Specifications
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Formulation & Character
            </h2>

            <p className="text-base text-[#94A3B8] leading-relaxed mb-8">
              A detailed breakdown of the physical and chemical attributes of our black ink formulation. Data is documented in accordance with laboratory measurements taken during our practical project.
            </p>

            {/* Structured Specifications Table */}
            <div className="rounded-2xl border border-[#262832] bg-[#14151B] overflow-hidden divide-y divide-[#1F212B] mb-8">
              
              {/* Product Name */}
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-sm font-medium text-[#71717A]">Product Name</span>
                <span className="text-sm sm:text-base font-semibold text-white font-serif">
                  INKORA Black Ink
                </span>
              </div>

              {/* Colour */}
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-sm font-medium text-[#71717A]">Colour Profile</span>
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-black border border-white/20 shadow-xs"></span>
                  <span className="text-sm sm:text-base font-medium text-[#E2E8F0]">
                    Black (Deep Obsidian / Iron Gallate Complex)
                  </span>
                </div>
              </div>

              {/* Form */}
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-sm font-medium text-[#71717A]">Physical Form</span>
                <span className="text-sm sm:text-base font-medium text-[#CBD5E1]">
                  Aqueous colloidal black ink formulation
                </span>
              </div>

              {/* Project Type */}
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-sm font-medium text-[#71717A]">Project Type</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1C1E26] text-xs font-mono font-medium text-[#E2E8F0] border border-[#2F323F]">
                  Student chemistry practical project
                </span>
              </div>

              {/* Key Formulation Ingredients */}
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <span className="text-sm font-medium text-[#71717A] pt-0.5">Key Formulation Ingredients</span>
                <div className="text-left sm:text-right max-w-sm">
                  <span className="text-sm sm:text-base font-medium text-white block">
                    Water, Tea Extract, Ferrous Sulphate, Gum Arabic, Glycerine
                  </span>
                  <span className="text-xs text-[#94A3B8] mt-0.5 block">
                    (Solvent, tannin polyphenols, iron precursor, protective colloid, humectant)
                  </span>
                </div>
              </div>

              {/* Measured Batch Volume (EDITABLE FIELD) */}
              <div className="p-4 sm:p-5 bg-[#181A22] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-[#CBD5E1]" />
                  <div>
                    <span className="text-sm font-semibold text-white block">
                      Measured batch volume
                    </span>
                    <span className="text-xs text-[#94A3B8]">
                      Actual recorded laboratory yield
                    </span>
                  </div>
                </div>

                {isEditingVolume ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={tempVolume}
                      onChange={(e) => setTempVolume(e.target.value)}
                      placeholder="e.g. 45 ml"
                      className="px-3 py-1.5 text-sm bg-[#0E0F13] border border-[#3F4354] rounded-lg focus:outline-none focus:ring-2 focus:ring-white w-36 font-mono text-white"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={saveVolume}
                      className="p-1.5 bg-[#E2E8F0] text-[#090A0C] rounded-lg hover:bg-white transition-colors"
                      title="Save volume"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingVolume(false)}
                      className="p-1.5 bg-[#262832] text-[#94A3B8] rounded-lg hover:bg-[#323542] transition-colors text-xs"
                      title="Cancel"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${
                      batchVolume === 'To be measured' 
                        ? 'bg-[#1C1E26] text-[#94A3B8] border border-[#2A2D3A]' 
                        : 'bg-[#222530] text-[#E2E8F0] border border-[#3E4254]'
                    }`}>
                      {batchVolume}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setTempVolume(batchVolume);
                        setIsEditingVolume(true);
                      }}
                      className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#262832] transition-colors"
                      title="Update measured batch volume"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    {batchVolume !== 'To be measured' && (
                      <button
                        type="button"
                        onClick={resetVolume}
                        className="p-1.5 rounded-lg text-[#64748B] hover:text-[#94A3B8] hover:bg-[#262832] transition-colors"
                        title="Reset to 'To be measured'"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}
              </div>

            </div>

            {/* Non-Commercial Statement & Request Info Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#14151B] border border-[#262832]">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#94A3B8] shrink-0 mt-0.5" />
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  <strong className="text-white">Non-commercial prototype:</strong> INKORA Black Ink is not available for purchase or commercial distribution. For academic questions or practical project inquiry, connect with our student team.
                </p>
              </div>

              <button
                type="button"
                onClick={handleRequestInfo}
                className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#E2E8F0] text-[#090A0C] hover:bg-white transition-colors duration-300 shadow-sm"
              >
                <span>Request Product Information</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
