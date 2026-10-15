import React from 'react';
import { ASSET_CONFIG } from '../../config/assets';

export default function PaperSwatchVisual({ className = '' }) {
  const { paperSwatch } = ASSET_CONFIG.images;

  if (paperSwatch.url) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-[#111216] border border-[#262832] shadow-editorial ${className}`}>
        <img
          src={paperSwatch.url}
          alt={paperSwatch.alt}
          className="w-full h-full object-cover"
        />
        {paperSwatch.isConcept && (
          <div className="absolute top-3 right-3 bg-[#090A0C]/85 text-[#CBD5E1] text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-white/10">
            Concept Sample
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#14151B] to-[#0A0B0E] border border-[#262832] p-6 shadow-editorial flex flex-col justify-between ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
          Substrate: 120 gsm Pure Cotton Paper
        </span>
        <span className="text-[10px] font-mono bg-white/5 text-[#E2E8F0] px-2 py-0.5 rounded border border-white/10">
          Black Ink Assay
        </span>
      </div>

      {/* White Paper Sheet Swatch Card with Black Ink Strokes */}
      <div className="relative py-2 flex items-center justify-center">
        <svg viewBox="0 0 380 260" className="w-full max-w-[340px] h-auto drop-shadow-lg" fill="none">
          {/* White Paper Base Plate */}
          <rect x="10" y="10" width="360" height="240" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />

          {/* Subtle paper grain lines */}
          <line x1="25" y1="40" x2="355" y2="40" stroke="#E2E8F0" strokeWidth="0.8" />
          <line x1="25" y1="80" x2="355" y2="80" stroke="#E2E8F0" strokeWidth="0.8" />
          <line x1="25" y1="120" x2="355" y2="120" stroke="#E2E8F0" strokeWidth="0.8" />
          <line x1="25" y1="160" x2="355" y2="160" stroke="#E2E8F0" strokeWidth="0.8" />
          <line x1="25" y1="200" x2="355" y2="200" stroke="#E2E8F0" strokeWidth="0.8" />

          {/* Broad Brush Wet Wash (Gradient Dilution from Pure Black to Dilute Grey) */}
          <rect x="25" y="25" width="330" height="42" rx="4" fill="url(#blackSwatchWash)" />
          <defs>
            <linearGradient id="blackSwatchWash" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.98" />
              <stop offset="35%" stopColor="#1E2026" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#64748B" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          {/* Dilution Wash Labels */}
          <text x="35" y="51" fontFamily="sans-serif" fontSize="8.5" fontWeight="700" fill="#FFFFFF" letterSpacing="1">
            CONCENTRATED BLACK
          </text>
          <text x="345" y="51" fontFamily="sans-serif" fontSize="8.5" fontWeight="700" fill="#334155" textAnchor="end" letterSpacing="1">
            DILUTE GREY WASH
          </text>

          {/* Dip Pen Calligraphy Script: "Precision in Every Drop." */}
          <path
            d="M 35 105 C 45 95 60 92 68 105 C 75 118 85 98 96 96 C 108 94 120 106 130 102 C 140 98 148 108 160 103"
            stroke="#090A0C"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <text x="35" y="132" fontFamily="serif" fontStyle="italic" fontSize="19" fontWeight="600" fill="#090A0C">
            "Precision in Every Drop."
          </text>

          {/* Micro line weight test / Flex nib strokes */}
          <g transform="translate(35, 160)">
            <line x1="0" y1="0" x2="40" y2="25" stroke="#000000" strokeWidth="0.8" />
            <line x1="8" y1="0" x2="48" y2="25" stroke="#000000" strokeWidth="0.8" />
            <line x1="16" y1="0" x2="56" y2="25" stroke="#000000" strokeWidth="0.8" />
            <line x1="0" y1="25" x2="40" y2="0" stroke="#000000" strokeWidth="0.8" />
            <line x1="8" y1="25" x2="48" y2="0" stroke="#000000" strokeWidth="0.8" />
            <line x1="16" y1="25" x2="56" y2="0" stroke="#000000" strokeWidth="0.8" />
            <text x="70" y="16" fontFamily="monospace" fontSize="8" fill="#475569">0.3mm Steel Dip Nib Crosshatch</text>
          </g>

          {/* Black ink droplet pool drying ring (characteristic of iron-tannin colloid) */}
          <g transform="translate(270, 150)">
            <circle cx="28" cy="22" r="18" fill="#090A0C" fillOpacity="0.2" />
            <circle cx="28" cy="22" r="18" stroke="#000000" strokeWidth="1.8" fill="none" opacity="0.9" />
            <circle cx="28" cy="22" r="8" fill="#000000" fillOpacity="0.6" />
            <text x="28" y="52" fontFamily="monospace" fontSize="7.5" fill="#475569" textAnchor="middle">Colloid Ring Edge</text>
          </g>

          <text x="35" y="238" fontFamily="monospace" fontSize="8" fill="#64748B">
            Feathering: Minimal · Bleedthrough: Negligible on 120gsm · Sheen: Matte Velvet Black
          </text>
        </svg>
      </div>

      <div className="pt-3 border-t border-[#262832] flex justify-between items-center text-[11px] text-[#94A3B8]">
        <span>Hand-drawn dip-pen evaluation</span>
        <span className="font-mono text-white">Batch EXP-FE-01</span>
      </div>
    </div>
  );
}
