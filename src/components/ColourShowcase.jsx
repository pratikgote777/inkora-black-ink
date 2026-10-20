import React, { useState } from 'react';
import BottleCloseUpVisual from './visuals/BottleCloseUpVisual';
import PaperSwatchVisual from './visuals/PaperSwatchVisual';
import InteractiveInkCanvas from './visuals/InteractiveInkCanvas';
import { ASSET_CONFIG } from '../config/assets';
import { getAssetUrl } from '../utils/assetUrl';
import { Eye, Copy, Check, Sparkles, X, Maximize2 } from 'lucide-react';

export default function ColourShowcase() {
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);

  const categories = [
    'All',
    'Final Product',
    'Ingredients',
    'Preparation Process',
    'Cooling and Filtration',
    'Ink Testing and Observations'
  ];

  const galleryItems = ASSET_CONFIG.galleryItems || [];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const colorTones = [
    {
      name: 'Pitch Obsidian Black',
      hex: '#000000',
      rgb: 'rgb(0, 0, 0)',
      role: 'Core iron gallate complex tone',
      desc: 'Observed under full optical absorption'
    },
    {
      name: 'Deep Meniscus Graphite',
      hex: '#14151B',
      rgb: 'rgb(20, 21, 27)',
      role: 'Liquid depth boundary',
      desc: 'Visible at liquid boundary and heavy nib pool'
    },
    {
      name: 'Dilute Sepia-Grey Wash',
      hex: '#64748B',
      rgb: 'rgb(100, 116, 139)',
      role: 'Hydrated gradient tone',
      desc: 'Revealed during water brush wash test on paper'
    },
    {
      name: 'Substrate Pure White',
      hex: '#F8FAFC',
      rgb: 'rgb(248, 250, 252)',
      role: 'Acid-free cotton paper base',
      desc: 'Neutral foundation for maximum ink contrast'
    }
  ];

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedCode(hex);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="gallery" className="py-24 bg-[#0B0C0F] border-t border-[#1E2028] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#94A3B8] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]"></span>
              Visual Chromatics & Product Gallery
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Colour in <span className="italic font-normal text-[#CBD5E1]">Motion.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Explore how our black ink formulation performs from the opaque liquid inside the glass bottle to crisp, high-contrast dip-pen strokes and fluid dilution washes on pure cotton paper.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#14151B] border border-[#262832] max-w-sm text-xs text-[#94A3B8]">
            <span className="font-semibold text-white block mb-1">Authentic Lab Photography:</span>
            Integrated with genuine ingredient photographs. Concept vector renders highlight specimen details until physical lab photoshoot assets are processed.
          </div>
        </div>

        {/* Split Screen Composition: Bottle Close-up & Handwritten Swatch Sample */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Close-Up of Black Liquid in Glass Bottle */}
          <div className="flex flex-col">
            <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-3 flex items-center gap-2">
              <Eye className="w-3.5 h-3.5 text-[#E2E8F0]" />
              01 · Liquid Opacity & Colloid Stability
            </span>
            <BottleCloseUpVisual className="h-full min-h-[380px]" />
          </div>

          {/* Black Ink Strokes on White Cotton Paper */}
          <div className="flex flex-col">
            <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E2E8F0]" />
              02 · Black Ink Laydown & Wash Gradient
            </span>
            <PaperSwatchVisual className="h-full min-h-[380px]" />
          </div>

        </div>

        {/* Interactive Ink Testing Canvas (Virtual Dip-Pen Nib Experience) */}
        <div className="mb-20 reveal">
          <InteractiveInkCanvas />
        </div>

        {/* --- DEDICATED PRODUCT & PROCESS GALLERY --- */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#262832] gap-4">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Project Visual Archive
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                Visual documentation across ingredients, thermal extraction, cooling, and nib testing.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    activeCategory === cat
                      ? 'bg-[#E2E8F0] text-[#090A0C] font-semibold shadow-xs'
                      : 'bg-[#14151B] text-[#94A3B8] hover:text-white border border-[#262832]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className="group relative bg-[#14151B] rounded-2xl border border-[#262832] overflow-hidden shadow-editorial hover:border-[#3F4354] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Asset Container with light studio background for maximum black ink contrast */}
                <div className="relative aspect-4/3 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EDF2F7] border-b border-[#262832] flex items-center justify-center p-2">
                  {item.src ? (
                    <img
                      src={getAssetUrl(item.src)}
                      alt={item.title}
                      className="w-full h-full object-contain rounded-xl group-hover:scale-103 transition-transform duration-500"
                    />
                  ) : item.fallbackType === 'bottle' ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <BottleCloseUpVisual className="w-full h-full" />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <PaperSwatchVisual className="w-full h-full" />
                    </div>
                  )}

                  {/* Expand icon overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="absolute top-3 left-3 bg-[#090A0C]/85 text-[10px] font-mono uppercase tracking-wider text-[#CBD5E1] px-2.5 py-1 rounded-full border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Card Information */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white mb-1.5 group-hover:text-[#E2E8F0]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                      {item.caption}
                    </p>
                  </div>

                  {item.tags && (
                    <div className="pt-3 border-t border-[#1F212B] flex flex-wrap items-center gap-1.5">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-[#71717A] bg-[#1A1C24] px-2 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal Palette Swatch Grid for Black Ink */}
        <div className="bg-[#14151B] rounded-3xl p-6 sm:p-10 border border-[#262832]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-[#262832] gap-2">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Chromatic Tonal Scale
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                Measured tonal values across concentrated liquid, dilute grey wash, and cotton substrate.
              </p>
            </div>
            <span className="font-mono text-xs text-[#E2E8F0] bg-[#1E2028] border border-[#2E3240] px-3 py-1 rounded-full self-start sm:self-auto">
              sRGB / Hex Values
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorTones.map((tone, idx) => (
              <div 
                key={idx}
                className="bg-[#181A22] rounded-2xl p-5 border border-[#262832] shadow-editorial flex flex-col justify-between group hover:border-[#3F4354] transition-all"
              >
                <div>
                  <div 
                    className="w-full h-24 rounded-xl mb-4 border border-white/10 shadow-inner relative transition-transform duration-300 group-hover:scale-101"
                    style={{ backgroundColor: tone.hex }}
                  />
                  <h4 className="font-serif text-base font-bold text-white mb-1">
                    {tone.name}
                  </h4>
                  <p className="text-xs text-[#94A3B8] mb-3">
                    {tone.role}
                  </p>
                  <p className="text-[11px] text-[#A1A7B8] font-mono leading-relaxed bg-[#111216] p-2 rounded-lg border border-[#262832]">
                    {tone.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#262832] flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-white">
                    {tone.hex}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(tone.hex)}
                    className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#262832] transition-colors"
                    title="Copy hex code"
                    aria-label={`Copy hex code ${tone.hex}`}
                  >
                    {copiedCode === tone.hex ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {lightboxItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setLightboxItem(null)}
        >
          <div 
            className="relative bg-[#14151B] border border-[#2F323F] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#262832] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block">
                  {lightboxItem.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  {lightboxItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="p-2 rounded-xl text-[#94A3B8] hover:text-white hover:bg-[#262832] transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Visual Content with light studio backdrop for high black ink contrast */}
            <div className="p-4 sm:p-8 overflow-y-auto flex-grow flex items-center justify-center bg-[#0C0D12]">
              <div className="w-full max-w-2xl bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EDF2F7] p-4 sm:p-6 rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
                {lightboxItem.src ? (
                  <img
                    src={getAssetUrl(lightboxItem.src)}
                    alt={lightboxItem.title}
                    className="max-h-[55vh] w-auto max-w-full rounded-xl object-contain shadow-sm"
                  />
                ) : lightboxItem.fallbackType === 'bottle' ? (
                  <BottleCloseUpVisual className="w-full max-w-md" />
                ) : (
                  <PaperSwatchVisual className="w-full max-w-md" />
                )}
              </div>
            </div>

            {/* Modal Footer Caption */}
            <div className="p-4 sm:p-5 border-t border-[#262832] bg-[#111216] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs font-mono text-[#94A3B8]">
              <p>{lightboxItem.caption}</p>
              <span className="text-white shrink-0">INKORA Archive</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
