import React, { useState } from 'react';
import { ASSET_CONFIG } from '../../config/assets';
import { getAssetUrl } from '../../utils/assetUrl';
import PenWritingVisual from './PenWritingVisual';
import { Feather, Package, Sparkles } from 'lucide-react';

export default function HeroProductVisual({ className = '' }) {
  // 'pen' (interactive calligraphy workbench) or 'bottle' (real physical bottle specimen)
  const [activeTab, setActiveTab] = useState('pen');
  const { heroProduct, heroVideo } = ASSET_CONFIG.images;

  // 1. If user provided a video file, display the video player with light framed container
  if (heroVideo && heroVideo.url) {
    return (
      <div className={`relative group ${className}`}>
        <div className="relative overflow-hidden rounded-3xl bg-[#F8FAFC] border border-[#CBD5E1] p-3 shadow-editorial-lg">
          <video
            src={getAssetUrl(heroVideo.url)}
            poster={heroVideo.poster || undefined}
            controls
            playsInline
            muted
            className="w-full h-auto object-cover rounded-2xl max-h-[500px]"
          />
          <div className="p-3 bg-white border-t border-[#E2E8F0] mt-2 rounded-xl flex items-center justify-between text-xs font-mono text-[#475569]">
            <span>{heroVideo.caption || 'Product Laboratory Video'}</span>
            <span className="text-[#090A0C] font-semibold uppercase tracking-wider text-[10px]">Active Video</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${className}`}>
      
      {/* Top Studio Switcher Tabs */}
      <div className="flex items-center justify-between mb-3 px-1 max-w-[560px] mx-auto">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#CBD5E1]">
            Laboratory Showcase
          </span>
        </div>

        {/* View Selection Pills */}
        <div className="inline-flex p-1 rounded-xl bg-[#14151B] border border-[#2F323F] text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('pen')}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'pen'
                ? 'bg-[#E2E8F0] text-[#090A0C] font-semibold shadow-xs'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            <Feather className="w-3.5 h-3.5" />
            <span>Live Pen Writing</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('bottle')}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'bottle'
                ? 'bg-[#E2E8F0] text-[#090A0C] font-semibold shadow-xs'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            <span>Product Bottle</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* VIEW 1: LIVE CALLIGRAPHY & PEN WRITING ANIMATION          */}
      {/* ========================================================= */}
      {activeTab === 'pen' ? (
        <div className="animate-fadeIn">
          <PenWritingVisual />
        </div>
      ) : (
        /* ========================================================= */
        /* VIEW 2: REAL PHYSICAL BOTTLE PHOTOGRAPH                   */
        /* ========================================================= */
        <div className="animate-fadeIn">
          {heroProduct && heroProduct.url ? (
            <div className="relative group max-w-[560px] mx-auto select-none">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EDF2F7] border border-[#CBD5E1] p-3.5 shadow-editorial-lg animate-specular-sweep">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={getAssetUrl(heroProduct.url)}
                    alt={heroProduct.alt}
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-102 max-h-[460px] mx-auto rounded-xl shadow-xs"
                  />
                  <div className="absolute top-4 right-4 bg-[#090A0C]/85 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full border border-white/20">
                    MIT AOE Laboratory Specimen
                  </div>
                </div>

                {/* Status Bar */}
                <div className="mt-3 p-2.5 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#475569]">
                  <span className="truncate max-w-[280px]">{heroProduct.caption}</span>
                  <button
                    type="button"
                    onClick={() => setActiveTab('pen')}
                    className="text-[#090A0C] font-semibold hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
                  >
                    <span>Watch Pen Write</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  </button>
                </div>
              </div>

              <p className="mt-3 text-xs text-[#94A3B8] text-center font-mono">
                Physical Formulation Bottle · Verified Specimen EXP-FE-01
              </p>
            </div>
          ) : (
            /* Fallback Vector Composition */
            <div className="relative select-none max-w-[560px] mx-auto">
              <div className="rounded-3xl bg-gradient-to-b from-[#1C1E26] via-[#14151C] to-[#0D0E12] p-4 border border-[#323646] shadow-editorial-lg text-center text-white">
                <p>INKORA Prototype Stage</p>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
