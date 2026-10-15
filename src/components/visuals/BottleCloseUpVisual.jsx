import React from 'react';
import { ASSET_CONFIG } from '../../config/assets';

export default function BottleCloseUpVisual({ className = '' }) {
  const { bottleCloseUp } = ASSET_CONFIG.images;

  if (bottleCloseUp.url) {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-[#14151B] border border-[#262832] p-2.5 shadow-editorial ${className}`}>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EDF2F7] p-2 flex items-center justify-center">
          <img
            src={bottleCloseUp.url}
            alt={bottleCloseUp.alt}
            className="w-full h-auto max-h-[380px] object-contain rounded-xl shadow-xs"
          />
          <div className="absolute top-3 left-3 bg-[#090A0C]/85 text-emerald-400 text-[9px] font-mono px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1 backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Real Lab Sample</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-[#14151B] border border-[#262832] p-3.5 shadow-editorial flex flex-col justify-between ${className}`}>
      
      {/* Light Studio Display Stage inside the dark card */}
      <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EDF2F7] p-5 border border-[#E2E8F0] shadow-inner flex flex-col justify-between flex-grow">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#475569] font-medium">
            Specimen Focus: Opacity & Iron-Gallate Suspension
          </span>
          <span className="text-[10px] font-mono bg-[#090A0C]/80 text-white px-2.5 py-0.5 rounded-full border border-black/10">
            Light Stage Contrast
          </span>
        </div>

        {/* Close-Up Graphic of Black Liquid against Light Background */}
        <div className="relative py-3 flex items-center justify-center">
          <svg viewBox="0 0 360 280" className="w-full max-w-[320px] h-auto drop-shadow-md" fill="none">
            <defs>
              <linearGradient id="blackMacroLiquid" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1E2026" />
                <stop offset="30%" stopColor="#111215" />
                <stop offset="70%" stopColor="#08080A" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
              <linearGradient id="macroGlassWall" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="15%" stopColor="#CBD5E1" stopOpacity="0.25" />
                <stop offset="85%" stopColor="#CBD5E1" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Glass Wall Outer */}
            <rect x="30" y="20" width="300" height="240" rx="20" fill="url(#macroGlassWall)" stroke="#94A3B8" strokeWidth="1.5" />
            
            {/* Deep Black Ink Fill - Striking contrast against the white backdrop */}
            <path
              d="M 45 80 Q 180 92 315 80 L 315 240 Q 180 250 45 240 Z"
              fill="url(#blackMacroLiquid)"
            />

            {/* Meniscus curvature and silver specular reflection */}
            <path
              d="M 45 80 Q 180 96 315 80"
              stroke="#94A3B8"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 50 85 Q 180 100 310 85"
              stroke="#64748B"
              strokeWidth="1.5"
              opacity="0.8"
            />

            {/* Vertical Glass Reflections */}
            <line x1="65" y1="40" x2="65" y2="230" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
            <line x1="80" y1="60" x2="80" y2="220" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
            <line x1="295" y1="40" x2="295" y2="230" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" strokeLinecap="round" />

            {/* Lab Measurement Graduations */}
            <line x1="280" y1="100" x2="292" y2="100" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.9" />
            <text x="250" y="103" fontFamily="monospace" fontSize="8" fill="#FFFFFF" fontWeight="600" opacity="0.95">30 ml</text>
            
            <line x1="280" y1="140" x2="292" y2="140" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.9" />
            <text x="250" y="143" fontFamily="monospace" fontSize="8" fill="#FFFFFF" fontWeight="600" opacity="0.95">20 ml</text>
            
            <line x1="280" y1="180" x2="292" y2="180" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.9" />
            <text x="250" y="183" fontFamily="monospace" fontSize="8" fill="#FFFFFF" fontWeight="600" opacity="0.95">10 ml</text>
          </svg>
        </div>

        <div className="pt-3 border-t border-[#E2E8F0] flex justify-between items-center text-[11px] text-[#475569]">
          <span>Light extinction: Full deep opaque black</span>
          <span className="font-mono text-[#090A0C] font-semibold">Iron-gallate colloidal suspension</span>
        </div>
      </div>
    </div>
  );
}
