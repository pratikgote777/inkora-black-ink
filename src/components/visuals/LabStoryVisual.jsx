import React from 'react';
import { ASSET_CONFIG } from '../../config/assets';

export default function LabStoryVisual({ className = '' }) {
  const { labStory } = ASSET_CONFIG.images;

  if (labStory.url) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-[#111216] border border-[#262832] shadow-editorial ${className}`}>
        <img
          src={labStory.url}
          alt={labStory.alt}
          className="w-full h-full object-cover"
        />
        {labStory.isConcept && (
          <div className="absolute top-3 right-3 bg-[#090A0C]/85 text-[#CBD5E1] text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-white/10">
            Concept Visual
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#14151B] via-[#101115] to-[#0A0B0E] border border-[#262832] p-6 sm:p-8 shadow-editorial ${className}`}>
      {/* Editorial Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E2E8F0]"></span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8]">
            Bench Journal · Entry #18 (Black Ink Protocol)
          </span>
        </div>
        <span className="text-[10px] font-mono bg-white/5 text-[#E2E8F0] px-2.5 py-1 rounded-full border border-white/10">
          Laboratory Record
        </span>
      </div>

      {/* Laboratory Composition SVG */}
      <div className="relative py-2 flex items-center justify-center">
        <svg viewBox="0 0 500 320" className="w-full h-auto drop-shadow-md" fill="none">
          <defs>
            <filter id="darkLabShadow" x="-10%" y="-10%" width="125%" height="125%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
              <feOffset dx="2" dy="8" />
              <feComponentTransfer><feFuncA type="linear" slope="0.5" /></feComponentTransfer>
              <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            {/* Deep Tannin Broth Liquid */}
            <linearGradient id="teaBrothLiquid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#78350F" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#451A03" stopOpacity="0.95" />
            </linearGradient>
            {/* FeSO4 Greenish-Clear Solution */}
            <linearGradient id="ironSolutionLiquid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D1FAE5" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#A7F3D0" stopOpacity="0.75" />
            </linearGradient>
          </defs>

          {/* Dark Laboratory Bench Surface Horizon */}
          <line x1="20" y1="285" x2="480" y2="285" stroke="#262832" strokeWidth="2" strokeDasharray="4 4" />

          {/* 1. Spiral Bound Laboratory Notebook (Open) */}
          <g filter="url(#darkLabShadow)" transform="rotate(-6 160 210)">
            <rect x="50" y="110" width="220" height="150" rx="6" fill="#0C0D10" stroke="#333744" strokeWidth="1" />
            <rect x="55" y="115" width="210" height="140" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
            <line x1="160" y1="115" x2="160" y2="255" stroke="#CBD5E1" strokeWidth="1.5" />
            
            {/* Left Page: Black Ink Formulation Formula */}
            <text x="65" y="135" fontFamily="serif" fontSize="10" fontWeight="700" fill="#0F172A">
              Iron Gallate Protocol 04
            </text>
            <text x="65" y="152" fontFamily="monospace" fontSize="7" fill="#475569">
              - 40ml Heated Tea Broth (Tannins)
            </text>
            <text x="65" y="164" fontFamily="monospace" fontSize="7" fill="#475569">
              - Thermal Cooling to 21°C
            </text>
            <text x="65" y="176" fontFamily="monospace" fontSize="7" fill="#475569">
              - 1.80g FeSO₄·7H₂O (Iron II)
            </text>
            <text x="65" y="188" fontFamily="monospace" fontSize="7" fill="#475569">
              - 1.50g Acacia Gum (Colloid)
            </text>

            <line x1="65" y1="200" x2="148" y2="200" stroke="#E2E8F0" strokeWidth="1" />
            
            <text x="65" y="215" fontFamily="sans-serif" fontSize="6.5" fontStyle="italic" fill="#0F172A">
              Reaction: Tannin + Fe²⁺ → Black Fe³⁺
            </text>
            <text x="65" y="228" fontFamily="sans-serif" fontSize="6.5" fontStyle="italic" fill="#0F172A">
              Precipitate complex (Iron gallate).
            </text>

            {/* Right Page: Ink Swatch Test */}
            <text x="172" y="135" fontFamily="serif" fontSize="9" fontWeight="600" fill="#0F172A">
              Chromatic Density
            </text>
            {/* Deep black swatch spot on paper */}
            <ellipse cx="205" cy="165" rx="24" ry="14" fill="#000000" fillOpacity="0.9" />
            <circle cx="218" cy="168" r="4" fill="#1E293B" opacity="0.9" />
            <text x="172" y="200" fontFamily="monospace" fontSize="6.5" fill="#334155">
              Colour: Deep Velvet Black
            </text>
            <text x="172" y="212" fontFamily="monospace" fontSize="6.5" fill="#334155">
              Flow: Consistent nib delivery
            </text>
            <text x="172" y="224" fontFamily="monospace" fontSize="6.5" fill="#334155">
              Colloid: Gum arabic stable
            </text>

            {/* Pencil on notebook */}
            <rect x="110" y="225" width="130" height="5" rx="1.5" fill="#94A3B8" transform="rotate(15 110 225)" />
            <polygon points="240,260 252,263 243,266" fill="#000000" />
          </g>

          {/* 2. Glass Erlenmeyer Flask with Dark Tea Extract Broth */}
          <g filter="url(#darkLabShadow)" transform="translate(300, 100)">
            <ellipse cx="60" cy="175" rx="45" ry="8" fill="#000000" opacity="0.4" />
            <rect x="48" y="30" width="24" height="40" fill="#FFFFFF" fillOpacity="0.1" stroke="#64748B" strokeWidth="1" />
            <ellipse cx="60" cy="30" rx="13" ry="3.5" fill="#FFFFFF" fillOpacity="0.15" stroke="#64748B" strokeWidth="1" />

            <path
              d="M 48 70 L 15 170 C 12 178 18 182 30 182 L 90 182 C 102 182 108 178 105 170 L 72 70 Z"
              fill="#FFFFFF"
              fillOpacity="0.1"
              stroke="#64748B"
              strokeWidth="1.2"
            />

            {/* Tea Broth Liquid in Flask */}
            <path
              d="M 28 140 Q 60 145 92 140 L 98 172 C 98 178 92 180 84 180 L 36 180 C 28 180 22 178 22 172 Z"
              fill="url(#teaBrothLiquid)"
            />
            <ellipse cx="60" cy="141" rx="32" ry="4" fill="#92400E" opacity="0.8" />

            <line x1="38" y1="150" x2="48" y2="150" stroke="#FFFFFF" strokeWidth="1" opacity="0.8" />
            <text x="52" y="152" fontFamily="monospace" fontSize="6.5" fill="#CBD5E1">Tannin</text>
            <line x1="25" y1="165" x2="48" y2="78" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          </g>

          {/* 3. Small Beaker (FeSO4 Solution) */}
          <g filter="url(#darkLabShadow)" transform="translate(405, 150)">
            <rect x="10" y="40" width="50" height="85" rx="3" fill="#FFFFFF" fillOpacity="0.1" stroke="#64748B" strokeWidth="1.2" />
            <path d="M 12 75 L 58 75 L 58 122 C 58 124 56 125 54 125 L 16 125 C 14 125 12 124 12 122 Z" fill="url(#ironSolutionLiquid)" />
            <ellipse cx="35" cy="75" rx="23" ry="3" fill="#6EE7B7" opacity="0.8" />
            <path d="M 10 40 L 4 36" stroke="#64748B" strokeWidth="1.2" />
            
            <line x1="0" y1="15" x2="45" y2="120" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
            <text x="35" y="105" fontFamily="monospace" fontSize="6" fill="#065F46" textAnchor="middle">Fe²⁺(aq)</text>
          </g>

          {/* 4. Small Prototype Black Ink Bottle on Bench */}
          <g filter="url(#darkLabShadow)" transform="translate(245, 185)">
            <ellipse cx="25" cy="92" rx="20" ry="4" fill="#000000" opacity="0.5" />
            <rect x="17" y="32" width="16" height="15" rx="1.5" fill="#181A22" stroke="#333644" strokeWidth="1" />
            <rect x="10" y="48" width="30" height="42" rx="3" fill="#FFFFFF" fillOpacity="0.1" stroke="#4B5563" strokeWidth="1" />
            <rect x="12" y="55" width="26" height="33" fill="#000000" />
            <rect x="15" y="62" width="20" height="18" fill="#181A22" rx="1" stroke="#333644" strokeWidth="0.5" />
            <text x="25" y="72" fontFamily="serif" fontSize="5" fontWeight="700" fill="#F8FAFC" textAnchor="middle">INKORA</text>
            <text x="25" y="77" fontFamily="sans-serif" fontSize="3" fill="#94A3B8" textAnchor="middle">BLACK</text>
          </g>
        </svg>
      </div>

      <div className="pt-3 border-t border-[#262832] flex flex-col sm:flex-row justify-between items-center text-xs text-[#94A3B8] gap-1">
        <span>Chemical synthesis of black iron gallate complex</span>
        <span className="font-mono text-[11px] text-[#E2E8F0]">Practical Chemistry & Engineering Bench</span>
      </div>
    </div>
  );
}
