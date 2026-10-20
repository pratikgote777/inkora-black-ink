import React, { useState } from 'react';
import { ASSET_CONFIG } from '../config/assets';
import { getAssetUrl } from '../utils/assetUrl';
import { AlertTriangle, History, ArrowRight, Camera } from 'lucide-react';

export default function IngredientsSection() {
  const [activeTab, setActiveTab] = useState('final'); // 'final' or 'earlier'

  const ingredients = ASSET_CONFIG.ingredients || [];
  const finalIngredients = ingredients.filter((item) => item.category === 'final');
  const earlierIngredients = ingredients.filter((item) => item.category === 'earlier');

  return (
    <section id="ingredients" className="py-24 bg-[#090A0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#94A3B8] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]"></span>
              Formulation Chemistry & Reagents
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Ingredients & Their Roles
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Every chemical constituent serves a precise mechanical and optical role in the black ink matrix — balancing iron-tannin complexation, colloidal suspension, and surface wetting.
            </p>
          </div>

          {/* Tab Selector: Final Batch Ingredients vs Earlier Exploratory Trials */}
          <div className="flex items-center p-1.5 rounded-2xl bg-[#14151B] border border-[#262832] shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('final')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeTab === 'final'
                  ? 'bg-[#E2E8F0] text-[#090A0C] font-semibold shadow-xs'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              Final Formulation ({finalIngredients.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('earlier')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'earlier'
                  ? 'bg-[#E2E8F0] text-[#090A0C] font-semibold shadow-xs'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <History className="w-3.5 h-3.5 text-[#94A3B8]" />
              <span>Earlier Trials ({earlierIngredients.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: FINAL FORMULATION INGREDIENTS WITH REAL PHOTOGRAPHS */}
        {activeTab === 'final' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 reveal stagger-1">
              {finalIngredients.map((item, idx) => (
                <div
                  key={item.id}
                  className={`bg-[#14151B] rounded-3xl p-5 border border-[#262832] shadow-editorial hover:border-[#3F4354] hover:-translate-y-1 transition-all flex flex-col justify-between group reveal stagger-${(idx % 5) + 1}`}
                >
                  <div>
                    {/* Real Ingredient Photograph */}
                    <div className="w-full h-44 rounded-2xl overflow-hidden mb-5 border border-[#262832] bg-[#0E0F13] relative">
                      <img
                        src={getAssetUrl(item.image)}
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono text-[#CBD5E1] flex items-center gap-1">
                        <Camera className="w-2.5 h-2.5" />
                        <span>Real Photo</span>
                      </div>
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#CBD5E1] block mb-1">
                      {item.role}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1F212B] flex flex-col gap-1 text-[10px] font-mono text-[#71717A]">
                    <span className="text-[#E2E8F0] font-medium leading-tight">{item.functionDetail}</span>
                    <div className="flex items-center justify-between text-[#64748B] pt-1">
                      <span>{item.cas}</span>
                      <span className="text-[9px]">{item.credit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* MANDATORY SAFETY & COMPATIBILITY DISCLAIMER */}
            <div className="p-5 rounded-2xl bg-[#14151B] border border-[#262832] flex items-start gap-3.5 text-xs text-[#CBD5E1] reveal">
              <AlertTriangle className="w-5 h-5 text-[#E2E8F0] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-white block mb-0.5">Laboratory Safety & Reagent Notice:</strong>
                The presence of water, tea tannin extract, ferrous sulphate, gum arabic, or glycerine in this formulation does not make the finished ink safe for skin contact, ingestion, or cosmetic use. Ferrous sulphate can cause irritation; avoid contact with eyes, and wash hands thoroughly following lab handling. Not tested for fountain pen feed compatibility.
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: EARLIER EXPERIMENTS & PH INDICATORS */}
        {activeTab === 'earlier' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 rounded-xl bg-[#14151B] border border-[#262832] text-xs text-[#94A3B8]">
              <strong className="text-white">Archival Context:</strong> As part of exploratory pre-trials, the student team evaluated pH indicators including methyl orange to observe solution acidity before finalizing the iron-tannin synthesis for black ink.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {earlierIngredients.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#14151B] rounded-3xl p-6 border border-[#262832] shadow-editorial"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#2A1D1A] text-[#FCA5A5] border border-[#7F1D1D]/40 font-medium">
                      Exploratory Pre-Trial
                    </span>
                    <span className="text-xs font-mono text-[#71717A]">
                      Pre-Trial Reagent
                    </span>
                  </div>

                  <div className="w-full h-48 rounded-2xl overflow-hidden mb-5 border border-[#262832] bg-[#0E0F13] relative">
                    <img
                      src={getAssetUrl(item.image)}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono text-[#CBD5E1] flex items-center gap-1">
                      <Camera className="w-2.5 h-2.5" />
                      <span>Real Photo</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    {item.name}
                  </h3>
                  <span className="font-mono text-xs text-[#CBD5E1] block mb-3">
                    {item.role}
                  </span>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="p-3 rounded-xl bg-[#1A1C24] border border-[#262832] text-xs font-mono text-[#A1A7B8]">
                    <strong className="text-white block mb-0.5">Scientific Clarification:</strong>
                    Methyl orange was evaluated strictly for pH monitoring during initial acid-base calibration tests. It is not responsible for the black colour of INKORA Black Ink, which is formed via the iron(II) and tea tannin complexation.
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1F212B] flex items-center justify-between text-xs font-mono text-[#71717A]">
                    <span>{item.cas}</span>
                    <span>{item.credit}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => setActiveTab('final')}
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#E2E8F0] hover:text-white"
              >
                <span>Return to Final Active Black Ink Formulation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
