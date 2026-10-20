import React from 'react';
import { ASSET_CONFIG } from '../../config/assets';
import { getAssetUrl } from '../../utils/assetUrl';

export default function HeroProductVisual({ className = '' }) {
  const { heroProduct, heroVideo } = ASSET_CONFIG.images;

  // 1. If user provided a video file, display the video player with light framed container for maximum ink contrast
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

  // 2. If user provided a real photograph, display on a light studio display frame for sharp black ink contrast
  if (heroProduct && heroProduct.url) {
    return (
      <div className={`relative group ${className}`}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EDF2F7] border border-[#CBD5E1] p-3.5 shadow-editorial-lg">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={getAssetUrl(heroProduct.url)}
              alt={heroProduct.alt}
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-102 max-h-[500px]"
            />
            {heroProduct.isConcept && (
              <div className="absolute top-4 right-4 bg-[#090A0C]/85 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full border border-white/20">
                Concept Visual
              </div>
            )}
          </div>
          <p className="mt-3 text-xs text-[#475569] text-center font-mono">
            {heroProduct.caption}
          </p>
        </div>
      </div>
    );
  }

  // 3. Realistic Light Studio-Framed Composition for High-Contrast Black Ink Visibility
  return (
    <div className={`relative select-none ${className}`}>
      {/* Outer dark-theme frame with inner Light Studio Sweep (#FAFBFD to #E4E9F0) */}
      <div className="relative w-full max-w-[560px] mx-auto rounded-3xl bg-gradient-to-b from-[#1C1E26] via-[#14151C] to-[#0D0E12] p-3 sm:p-4 border border-[#323646] shadow-editorial-lg">
        
        {/* The Light Studio Stage: White/Off-White Background around the black ink for maximum visibility */}
        <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#FFFFFF] via-[#F6F8FA] to-[#E9EEF4] p-5 sm:p-8 border border-[#E2E8F0] shadow-inner overflow-hidden">
          
          {/* Concept / Prototype Badge */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-[#090A0C]/85 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full border border-white/20 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            High-Contrast Specimen · Black Ink
          </div>

          {/* Soft Directional Studio Lighting Beam */}
          <div 
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/80 blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Main Vector Composition: Pitch Black Ink on Clean Light Studio Backdrop */}
          <div className="relative z-10 w-full flex items-center justify-center">
            <svg
              viewBox="0 0 600 520"
              className="w-full h-auto drop-shadow-md"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="High-contrast studio rendering of INKORA Black Ink glass bottle filled with deep black ink against a light studio sweep, glass dropper with black ink droplet, and black calligraphy strokes on white paper"
            >
              <defs>
                {/* Natural Soft Ground Studio Shadow */}
                <filter id="softStudioShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="14" />
                  <feOffset dx="4" dy="24" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.25" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Glass Refraction Gradients */}
                <linearGradient id="glassWallReflect" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                  <stop offset="12%" stopColor="#CBD5E1" stopOpacity="0.3" />
                  <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.1" />
                  <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0.05" />
                  <stop offset="88%" stopColor="#94A3B8" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
                </linearGradient>

                {/* PITCH-BLACK LIQUID INK GRADIENT */}
                <linearGradient id="pitchBlackInk" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E2026" />
                  <stop offset="25%" stopColor="#111215" />
                  <stop offset="70%" stopColor="#08080A" />
                  <stop offset="100%" stopColor="#000000" />
                </linearGradient>

                {/* Liquid Meniscus Curvature */}
                <linearGradient id="blackMeniscus" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#474B59" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#8A92A6" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#3F4350" stopOpacity="0.7" />
                </linearGradient>

                {/* Dark Fluted Cap */}
                <linearGradient id="gunmetalCap" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#18191E" />
                  <stop offset="30%" stopColor="#2E303B" />
                  <stop offset="60%" stopColor="#3F4250" />
                  <stop offset="85%" stopColor="#22232B" />
                  <stop offset="100%" stopColor="#111215" />
                </linearGradient>

                {/* Paper Drop Shadow */}
                <filter id="paperCardShadow" x="-10%" y="-10%" width="125%" height="125%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
                  <feOffset dx="3" dy="10" />
                  <feComponentTransfer><feFuncA type="linear" slope="0.15" /></feComponentTransfer>
                  <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* --- 1. Background White Cotton Paper Card with Black Ink Strokes --- */}
              <g filter="url(#paperCardShadow)">
                <path
                  d="M 60 190 L 320 150 L 350 450 L 80 470 Z"
                  fill="#FFFFFF"
                  stroke="#E2E8F0"
                  strokeWidth="1.5"
                  rx="4"
                />
                
                {/* Subtle Paper Texture Lines */}
                <line x1="90" y1="200" x2="300" y2="170" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="95" y1="230" x2="305" y2="200" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="100" y1="260" x2="310" y2="230" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />

                {/* Intense Black Ink Swatches & Dip-Pen Strokes */}
                {/* Dilute ink wash gradient */}
                <path
                  d="M 105 235 C 130 220 170 215 220 225 C 260 232 290 260 270 275 C 240 295 180 270 140 280 C 110 288 95 260 105 235 Z"
                  fill="#111215"
                  fillOpacity="0.22"
                />
                {/* Saturated deep black brush stroke */}
                <path
                  d="M 120 250 C 160 238 210 240 255 258 C 240 270 195 275 150 268 C 130 265 118 260 120 250 Z"
                  fill="#000000"
                  fillOpacity="0.9"
                />
                {/* Crisp dip-pen line stroke with deep black density */}
                <path
                  d="M 115 315 Q 160 300 200 320 T 280 305"
                  stroke="#000000"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Calligraphy script */}
                <path
                  d="M 120 350 Q 135 340 145 352 T 165 345 Q 175 355 190 348 T 215 350"
                  stroke="#000000"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <text x="120" y="380" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#090A0C" letterSpacing="2">
                  INKORA BLACK INK · BATCH 01
                </text>
                <text x="120" y="398" fontFamily="monospace" fontSize="8.5" fill="#475569">
                  SYSTEM: TANNIN + FeSO₄ (IRON GALLATE)
                </text>
              </g>

              {/* --- 2. Ground Cast Shadows on Light Studio Sweep --- */}
              <ellipse cx="370" cy="445" rx="85" ry="18" fill="#1C1D24" opacity="0.2" filter="url(#softStudioShadow)" />
              <ellipse cx="370" cy="443" rx="60" ry="10" fill="#1C1D24" opacity="0.3" />
              <ellipse cx="230" cy="460" rx="45" ry="6" fill="#1C1D24" opacity="0.18" transform="rotate(-15 230 460)" />

              {/* --- 3. The Transparent Glass Bottle Filled with Pitch Black Ink --- */}
              <g id="inkBottle" filter="url(#softStudioShadow)">
                {/* Bottle Neck Glass Outer */}
                <rect x="348" y="195" width="44" height="25" rx="3" fill="#E2E8F0" opacity="0.5" stroke="#94A3B8" strokeWidth="1" />
                
                {/* Bottle Shoulder Curve & Body Outer */}
                <path
                  d="M 348 218 
                     C 335 228 300 240 300 270 
                     L 300 420 
                     C 300 435 312 442 330 442 
                     L 410 442 
                     C 428 442 440 435 440 420 
                     L 440 270 
                     C 440 240 405 228 392 218 
                     Z"
                  fill="#F8FAFC"
                  fillOpacity="0.4"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                />

                {/* Inner Chamber */}
                <path
                  d="M 352 222 
                     C 342 232 308 245 308 274 
                     L 308 416 
                     C 308 428 318 434 332 434 
                     L 408 434 
                     C 422 434 432 428 432 416 
                     L 432 274 
                     C 432 245 398 232 388 222 
                     Z"
                  fill="#FFFFFF"
                  fillOpacity="0.25"
                />

                {/* INTENSE OPAQUE PITCH-BLACK LIQUID FILL (STANDS OUT SHARPLY AGAINST LIGHT BACKGROUND) */}
                <path
                  d="M 310 285 
                     C 310 285 340 282 370 282 
                     C 400 282 430 285 430 285 
                     L 430 416 
                     C 430 427 420 433 408 433 
                     L 332 433 
                     C 320 433 310 427 310 416 
                     Z"
                  fill="url(#pitchBlackInk)"
                />

                {/* Meniscus Curve at Surface */}
                <ellipse cx="370" cy="285" rx="60" ry="6" fill="url(#blackMeniscus)" />
                <ellipse cx="370" cy="285" rx="56" ry="3.5" fill="#111215" />

                {/* Specular Highlights across deep black body */}
                <path
                  d="M 314 300 Q 316 380 322 415"
                  stroke="#64748B"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  opacity="0.65"
                />
                <path
                  d="M 424 305 Q 422 375 418 415"
                  stroke="#475569"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.75"
                />

                {/* Minimalist White Paper Label on Bottle */}
                <g id="bottleLabel">
                  <rect
                    x="324"
                    y="312"
                    width="92"
                    height="76"
                    rx="3"
                    fill="#FFFFFF"
                    stroke="#E2E8F0"
                    strokeWidth="1"
                    filter="url(#paperCardShadow)"
                  />
                  
                  <text x="370" y="332" fontFamily="serif" fontSize="13" fontWeight="700" fill="#090A0C" textAnchor="middle" letterSpacing="2">
                    INKORA
                  </text>
                  
                  <text x="370" y="344" fontFamily="sans-serif" fontSize="6.5" fontWeight="700" fill="#334155" textAnchor="middle" letterSpacing="1.5">
                    BLACK INK
                  </text>

                  <line x1="336" y1="352" x2="404" y2="352" stroke="#CBD5E1" strokeWidth="0.8" />
                  
                  <text x="370" y="362" fontFamily="monospace" fontSize="5.5" fill="#0F172A" textAnchor="middle">
                    SHADE: INTENSE BLACK
                  </text>
                  <text x="370" y="371" fontFamily="monospace" fontSize="5" fill="#475569" textAnchor="middle">
                    TEA TANNIN · FeSO₄
                  </text>
                  <text x="370" y="380" fontFamily="sans-serif" fontSize="4.5" fill="#64748B" textAnchor="middle" letterSpacing="0.8">
                    PRACTICAL LAB BATCH 01
                  </text>
                </g>

                {/* Glass Front Reflections */}
                <rect x="303" y="270" width="14" height="145" rx="7" fill="url(#glassWallReflect)" opacity="0.7" />
                <line x1="328" y1="280" x2="328" y2="420" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                <line x1="432" y1="270" x2="432" y2="415" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

                {/* Cap */}
                <g id="bottleCap">
                  <rect x="345" y="190" width="50" height="7" rx="1.5" fill="#1E2028" stroke="#0F1014" strokeWidth="1" />
                  <rect x="343" y="148" width="54" height="44" rx="3" fill="url(#gunmetalCap)" stroke="#0F1014" strokeWidth="1" />
                  
                  {/* Cap Knurling */}
                  <line x1="349" y1="152" x2="349" y2="188" stroke="#52586B" strokeWidth="1" />
                  <line x1="354" y1="152" x2="354" y2="188" stroke="#52586B" strokeWidth="1" />
                  <line x1="359" y1="152" x2="359" y2="188" stroke="#646B82" strokeWidth="1" />
                  <line x1="364" y1="152" x2="364" y2="188" stroke="#94A3B8" strokeWidth="1" />
                  <line x1="369" y1="152" x2="369" y2="188" stroke="#94A3B8" strokeWidth="1" />
                  <line x1="374" y1="152" x2="374" y2="188" stroke="#646B82" strokeWidth="1" />
                  <line x1="379" y1="152" x2="379" y2="188" stroke="#52586B" strokeWidth="1" />
                  <line x1="384" y1="152" x2="384" y2="188" stroke="#474C5E" strokeWidth="1" />
                  <line x1="389" y1="152" x2="389" y2="188" stroke="#333744" strokeWidth="1" />
                  <line x1="346" y1="150" x2="394" y2="150" stroke="#CBD5E1" strokeWidth="1" strokeLinecap="round" />
                </g>
              </g>

              {/* --- 4. Precision Glass Dropper with Black Ink --- */}
              <g id="glassDropperPipette" transform="rotate(-32 230 420)" filter="url(#softStudioShadow)">
                <ellipse cx="230" cy="275" rx="10" ry="15" fill="#18191E" stroke="#383C4A" strokeWidth="1" />
                <rect x="225" y="287" width="10" height="4" rx="1" fill="#2E303B" />

                <rect x="226" y="291" width="8" height="110" rx="1" fill="#FFFFFF" fillOpacity="0.4" stroke="#94A3B8" strokeWidth="0.8" />
                <path d="M 226 401 L 228 425 L 232 425 L 234 401 Z" fill="#FFFFFF" fillOpacity="0.4" stroke="#94A3B8" strokeWidth="0.8" />
                
                {/* Deep Black Ink Inside Dropper Pipette Tube */}
                <rect x="227.5" y="355" width="5" height="46" fill="#000000" />
                <path d="M 227.5 401 L 228.8 424 L 231.2 424 L 232.5 401 Z" fill="#000000" />
                
                {/* Suspended Droplet of Black Ink at Tip */}
                <path
                  d="M 230 426 C 227 429 226 433 226 436 C 226 439 228 441 230 441 C 232 441 234 439 234 436 C 234 433 233 429 230 426 Z"
                  fill="#000000"
                  stroke="#334155"
                  strokeWidth="0.5"
                />
                <circle cx="228.5" cy="435" r="1.2" fill="#94A3B8" opacity="0.9" />
                <line x1="227" y1="293" x2="227" y2="400" stroke="#FFFFFF" strokeWidth="1" opacity="0.8" />
              </g>

              {/* Black ink droplets on paper */}
              <circle cx="185" cy="235" r="3" fill="#000000" />
              <circle cx="192" cy="232" r="1.5" fill="#000000" />
              <circle cx="275" cy="225" r="2.2" fill="#000000" />
            </svg>
          </div>

          {/* Subtitle Under Composition inside light sweep */}
          <div className="relative z-10 mt-3 pt-3 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-2">
            <div className="flex items-center gap-2">
              <span className="font-serif italic text-sm text-[#090A0C] font-semibold">INKORA Black Ink Prototype</span>
              <span className="text-[#CBD5E1]">|</span>
              <span className="font-mono text-[11px] text-[#334155]">Formula: Tea-Tannin · FeSO₄</span>
            </div>
            <span className="font-mono text-[10px] text-[#64748B] uppercase tracking-wider">
              Studio Light Backdrop Sweep
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
