import React, { useState, useEffect, useRef, useCallback } from 'react';
import { RotateCcw, PenTool, Eye, Sparkles, Droplets, Eraser } from 'lucide-react';

/**
 * PenWritingVisual
 * A luxury interactive calligraphy studio component featuring an authentic
 * vintage metallic fountain-pen / dip-pen that writes cursive strokes in
 * deep black iron-gall ink in real-time, with wet ink drying, flourish loops,
 * and an interactive freeform drawing mode.
 */

// PRESET CALLIGRAPHY PATHS
const PHRASES = [
  {
    id: 'inkora',
    name: 'INKORA',
    subtitle: 'Signature Brand Calligraphy',
    // Continuous flowing copperplate path for "Inkora" with Spencerian underline flourish
    path: `
      M 48 92 
      C 55 65, 82 48, 98 56 
      C 108 62, 106 82, 88 108 
      C 76 125, 78 152, 84 154 
      C 90 156, 102 144, 114 135
      C 124 116, 134 110, 142 120 
      L 144 152 
      C 146 156, 156 125, 168 118 
      C 176 112, 184 122, 185 152
      C 188 135, 198 75, 208 58 
      C 214 48, 220 54, 218 72 
      L 214 152 
      C 216 142, 226 124, 238 122 
      C 246 120, 248 130, 242 142 
      C 240 146, 246 152, 254 152
      C 264 138, 274 122, 286 122 
      C 298 122, 304 136, 298 148 
      C 292 158, 276 156, 276 140 
      C 276 126, 290 120, 302 124
      C 314 128, 318 116, 326 116 
      C 334 116, 332 128, 330 152
      C 342 134, 352 122, 364 122 
      C 376 122, 380 134, 376 148 
      C 370 158, 354 156, 354 140 
      C 354 126, 368 120, 380 124 
      L 384 152 
      C 388 156, 400 148, 412 138
      C 380 178, 300 198, 210 200 
      C 120 202, 50 188, 52 172 
      C 54 158, 98 160, 160 166 
      C 260 176, 380 178, 442 168 
      C 475 162, 485 182, 464 196 
      C 445 208, 420 202, 432 188
    `,
    viewBox: '0 0 520 240',
    duration: 3600
  },
  {
    id: 'everydrop',
    name: 'Every Drop',
    subtitle: 'Brand Motto Script',
    path: `
      M 60 75 
      C 85 55, 115 58, 110 82 
      C 105 104, 75 106, 95 118 
      C 112 128, 125 110, 135 98 
      C 142 88, 150 96, 146 122 
      C 148 108, 158 98, 168 98 
      L 165 124 
      C 175 106, 188 98, 198 102 
      C 204 104, 198 120, 195 125 
      C 192 130, 202 124, 210 112 
      C 218 98, 228 104, 224 126 
      C 220 144, 206 160, 200 156 
      C 195 152, 212 134, 228 116
      M 260 62 
      L 258 126 
      C 258 132, 275 132, 285 118 
      C 295 102, 292 78, 275 75 
      C 260 72, 252 92, 254 126 
      C 266 112, 278 102, 288 102 
      L 285 126 
      C 298 108, 310 102, 320 106 
      C 328 110, 324 122, 316 126 
      C 308 130, 315 134, 326 124 
      C 336 112, 345 102, 355 102 
      C 365 102, 370 114, 365 124 
      C 358 132, 345 130, 348 118 
      M 378 106 
      L 374 156 
      C 372 166, 364 168, 362 160 
      L 375 108 
      C 382 102, 396 102, 398 114 
      C 400 126, 388 132, 375 128
      C 405 136, 445 125, 465 145 
      C 475 155, 465 168, 445 162
    `,
    viewBox: '0 0 520 240',
    duration: 3800
  },
  {
    id: 'tannin',
    name: 'Fe-Tannin',
    subtitle: 'Chemical Precursor Synthesis',
    path: `
      M 60 70 
      L 130 66 
      M 95 68 
      L 90 148 
      C 88 156, 78 156, 75 148 
      M 75 104 
      L 115 102 
      M 135 128 
      C 130 145, 145 152, 156 142 
      C 165 134, 162 120, 142 122 
      C 126 124, 130 145, 150 148
      M 175 116 
      L 200 116 
      M 215 75 
      L 210 148 
      C 210 154, 222 152, 230 142 
      M 198 98 
      L 225 96
      M 240 128 
      C 235 145, 250 150, 260 140 
      L 258 122 
      C 255 122, 245 124, 240 128 
      L 262 148 
      C 272 134, 282 122, 292 122 
      L 290 148 
      C 292 152, 302 128, 312 122 
      L 310 148
      C 322 132, 334 122, 344 122 
      L 342 148 
      C 352 132, 362 122, 372 122 
      L 370 148
      C 382 132, 395 122, 405 122 
      C 415 122, 418 132, 415 148
      M 342 98 
      L 344 98 
      C 345 96, 345 92, 343 92 
      C 340 92, 340 96, 342 98
      C 370 170, 420 180, 455 168 
      C 475 160, 470 178, 440 185
    `,
    viewBox: '0 0 520 240',
    duration: 3500
  }
];

export default function PenWritingVisual({ className = '' }) {
  // Mode: 'auto' (calligraphy playback) or 'interactive' (freehand drawing)
  const [mode, setMode] = useState('auto');
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);
  const [isWriting, setIsWriting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [totalLength, setTotalLength] = useState(2500);
  const [penPos, setPenPos] = useState({ x: 48, y: 92, angle: -35, isDown: true });
  const [inkLevel, setInkLevel] = useState(100);
  const [showDropletGlint, setShowDropletGlint] = useState(false);

  // Freehand Canvas State
  const canvasRef = useRef(null);
  const isPointerDownRef = useRef(false);
  const lastPointRef = useRef(null);
  const lastTimeRef = useRef(0);
  const [canvasHasDrawing, setCanvasHasDrawing] = useState(false);

  const activePhrase = PHRASES[activePhraseIndex];
  const masterPathRef = useRef(null);
  const animFrameRef = useRef(null);

  // =========================================================================
  // 1. AUTONOMOUS CALLIGRAPHY PLAYBACK LOGIC
  // =========================================================================
  const startAutonomousWriting = useCallback(() => {
    if (!masterPathRef.current) return;
    const path = masterPathRef.current;
    const totalLen = path.getTotalLength();
    if (!totalLen) return;
    setTotalLength(totalLen);

    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    setIsWriting(true);
    setShowDropletGlint(false);
    setProgress(0);

    const startTime = performance.now();
    const duration = activePhrase.duration || 3500;

    const animate = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      
      // Dynamic calligraphic ease: slight speed variation on straight vs curves
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const currentDist = ease * totalLen;
      setProgress(currentDist);

      // Compute coordinate and tangent angle of the stroke
      const pt = path.getPointAtLength(currentDist);
      const aheadDist = Math.min(currentDist + 3, totalLen);
      const ptAhead = path.getPointAtLength(aheadDist);
      const dx = ptAhead.x - pt.x;
      const dy = ptAhead.y - pt.y;

      let angle = Math.atan2(dy, dx) * (180 / Math.PI) - 45;
      // Clamp nib angle for realistic natural wrist ergonomics
      angle = Math.max(-65, Math.min(-15, angle));

      setPenPos({
        x: pt.x,
        y: pt.y,
        angle: angle,
        isDown: true
      });

      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Stroke finished: pen smoothly lifts up and rests gracefully
        setIsWriting(false);
        setShowDropletGlint(true);
        setPenPos((prev) => ({
          ...prev,
          x: prev.x + 8,
          y: prev.y - 12,
          angle: -38,
          isDown: false
        }));
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);
  }, [activePhrase]);

  useEffect(() => {
    if (mode === 'auto') {
      const timer = setTimeout(() => {
        startAutonomousWriting();
      }, 300);
      return () => {
        clearTimeout(timer);
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      };
    }
  }, [mode, activePhraseIndex, startAutonomousWriting]);

  // =========================================================================
  // 2. FREEHAND INTERACTIVE DRAWING LOGIC
  // =========================================================================
  const drawCalligraphyGuidelines = (ctx, w, h) => {
    ctx.save();
    ctx.strokeStyle = 'rgba(203, 213, 225, 0.45)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 5]);

    // Baseline and waistline
    const lines = [h * 0.35, h * 0.62, h * 0.78];
    lines.forEach((y) => {
      ctx.beginPath();
      ctx.moveTo(15, y);
      ctx.lineTo(w - 15, y);
      ctx.stroke();
    });

    // 55 degree slant guide lines
    ctx.strokeStyle = 'rgba(203, 213, 225, 0.25)';
    ctx.setLineDash([2, 8]);
    const step = 45;
    for (let x = -h; x < w + h; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, h);
      ctx.lineTo(x + h * 0.7, 0);
      ctx.stroke();
    }
    ctx.restore();
  };

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Draw subtle 55-degree calligraphic guideline grid
    ctx.clearRect(0, 0, rect.width, rect.height);
    drawCalligraphyGuidelines(ctx, rect.width, rect.height);
    setCanvasHasDrawing(false);
  }, []);

  useEffect(() => {
    if (mode === 'interactive') {
      initCanvas();
    }
  }, [mode, initCanvas]);

  const getCanvasCoords = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if (e.touches && e.touches[0]) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handlePointerDown = (e) => {
    if (mode !== 'interactive') return;
    const coords = getCanvasCoords(e);
    isPointerDownRef.current = true;
    lastPointRef.current = coords;
    lastTimeRef.current = performance.now();
    setCanvasHasDrawing(true);

    setPenPos({
      x: coords.x,
      y: coords.y,
      angle: -40,
      isDown: true
    });
  };

  const handlePointerMove = (e) => {
    if (mode !== 'interactive') return;
    const coords = getCanvasCoords(e);

    // Update pen position preview even when hovering without drawing
    if (!isPointerDownRef.current) {
      setPenPos({
        x: coords.x,
        y: coords.y,
        angle: -35,
        isDown: false
      });
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const last = lastPointRef.current || coords;
    const now = performance.now();
    const dt = Math.max(now - lastTimeRef.current, 1);
    const dist = Math.hypot(coords.x - last.x, coords.y - last.y);
    const speed = dist / dt;

    // Velocity-based stroke thickness: fast = fine hairline, slow = saturated thick line
    const strokeWidth = Math.max(1.8, Math.min(6.5, 6.0 - speed * 1.5));
    const currentAlpha = Math.max(0.2, inkLevel / 100);

    ctx.save();
    ctx.strokeStyle = `rgba(0, 0, 0, ${currentAlpha})`;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();

    // Subtle wet ink glossy core reflection
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = Math.max(0.8, strokeWidth * 0.28);
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
    ctx.restore();

    // Consume reservoir ink
    setInkLevel((prev) => Math.max(5, prev - dist * 0.035));

    // Calculate tangent angle for realistic nib rotation
    const dx = coords.x - last.x;
    const dy = coords.y - last.y;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI) - 45;
    angle = Math.max(-65, Math.min(-15, angle));

    setPenPos({
      x: coords.x,
      y: coords.y,
      angle: angle,
      isDown: true
    });

    lastPointRef.current = coords;
    lastTimeRef.current = now;
  };

  const handlePointerUp = () => {
    if (mode !== 'interactive') return;
    isPointerDownRef.current = false;
    setPenPos((prev) => ({
      ...prev,
      y: prev.y - 8,
      isDown: false
    }));
  };

  const refillInk = () => {
    setInkLevel(100);
  };

  return (
    <div className={`relative w-full max-w-[560px] mx-auto select-none ${className}`}>
      
      {/* Outer Studio Desk Bezel */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#1C1E26] via-[#14151C] to-[#0D0E12] p-3 sm:p-4 border border-[#323646] shadow-editorial-lg">
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-[#262832] gap-2 px-1">
          {/* Active Status Badge */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#CBD5E1]">
              Live Nib Studio · 14K Flex
            </span>
          </div>

          {/* Mode Switching Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#090A0C] border border-[#262832] text-xs font-mono">
            <button
              type="button"
              onClick={() => setMode('auto')}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                mode === 'auto'
                  ? 'bg-[#E2E8F0] text-[#090A0C] font-semibold shadow-xs'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Calligraphy</span>
            </button>

            <button
              type="button"
              onClick={() => setMode('interactive')}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                mode === 'interactive'
                  ? 'bg-[#E2E8F0] text-[#090A0C] font-semibold shadow-xs'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>Try Pen</span>
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* THE PAPER WORKBENCH: Pristine High-Contrast White Surface */}
        {/* ========================================================= */}
        <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EDF2F7] border border-[#CBD5E1] shadow-inner overflow-hidden p-3 sm:p-5">
          
          {/* Subtle Ambient Studio Lighting Radial Sheen */}
          <div 
            className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/70 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Paper Header Ribbon */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#64748B] pb-2 border-b border-[#E2E8F0] mb-2">
            <span className="flex items-center gap-1.5 font-semibold text-[#090A0C]">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>120 GSM Pure Cotton Rag</span>
            </span>

            {mode === 'auto' ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={startAutonomousWriting}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-[#CBD5E1] hover:border-[#94A3B8] text-[#090A0C] text-[10px] font-mono transition-colors shadow-2xs cursor-pointer"
                  title="Replay calligraphy"
                >
                  <RotateCcw className={`w-3 h-3 ${isWriting ? 'animate-spin' : ''}`} />
                  <span>Replay</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                {/* Ink Reservoir Level */}
                <span className="text-[10px] font-mono text-[#475569] flex items-center gap-1">
                  <Droplets className="w-3 h-3 text-[#090A0C]" />
                  <span>{Math.round(inkLevel)}% Ink</span>
                </span>
                
                {inkLevel < 35 && (
                  <button
                    type="button"
                    onClick={refillInk}
                    className="px-2 py-0.5 rounded bg-[#090A0C] text-white text-[10px] font-mono animate-pulse cursor-pointer"
                  >
                    Dip Nib
                  </button>
                )}

                {canvasHasDrawing && (
                  <button
                    type="button"
                    onClick={initCanvas}
                    className="p-1 rounded bg-white border border-[#CBD5E1] text-[#64748B] hover:text-[#090A0C] transition-colors cursor-pointer"
                    title="Clear pad"
                  >
                    <Eraser className="w-3 h-3" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* ========================================================= */}
          {/* DISPLAY CANVAS / SVG STAGE                                */}
          {/* ========================================================= */}
          <div className="relative w-full aspect-16/9 sm:aspect-21/10 flex items-center justify-center">
            
            {/* VIEW A: AUTONOMOUS CALLIGRAPHY SVG */}
            {mode === 'auto' && (
              <svg
                viewBox={activePhrase.viewBox}
                className="w-full h-full overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Chrome Silver Nib Shading */}
                  <linearGradient id="nibSilverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#94A3B8" />
                    <stop offset="25%" stopColor="#FFFFFF" />
                    <stop offset="55%" stopColor="#CBD5E1" />
                    <stop offset="85%" stopColor="#E2E8F0" />
                    <stop offset="100%" stopColor="#64748B" />
                  </linearGradient>

                  {/* 14K Gold Wing Inlay */}
                  <linearGradient id="nibGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D97706" />
                    <stop offset="30%" stopColor="#FDE68A" />
                    <stop offset="65%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#B45309" />
                  </linearGradient>

                  {/* Dark Resin Barrel Grip */}
                  <linearGradient id="nibGripGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0B0C10" />
                    <stop offset="35%" stopColor="#252833" />
                    <stop offset="70%" stopColor="#12141A" />
                    <stop offset="100%" stopColor="#090A0C" />
                  </linearGradient>

                  {/* Shadow filter for 3D realism */}
                  <filter id="nibCastShadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3.5" />
                    <feOffset dx="6" dy="10" />
                    <feComponentTransfer><feFuncA type="linear" slope="0.22" /></feComponentTransfer>
                    <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {/* Subtle Copperplate 55-degree and baseline guidelines */}
                <line x1="20" y1="90" x2="500" y2="90" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.6" />
                <line x1="20" y1="152" x2="500" y2="152" stroke="#94A3B8" strokeWidth="1" opacity="0.75" />
                <line x1="20" y1="195" x2="500" y2="195" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.6" />
                
                {/* 55 degree slant guide indicators */}
                <line x1="100" y1="205" x2="160" y2="40" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="2 6" />
                <line x1="240" y1="205" x2="300" y2="40" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="2 6" />
                <line x1="380" y1="205" x2="440" y2="40" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="2 6" />

                {/* Invisible Reference Path for Length Measurement */}
                <path
                  ref={masterPathRef}
                  d={activePhrase.path}
                  fill="none"
                  stroke="transparent"
                />

                {/* Base Deep Black Calligraphy Stroke */}
                <path
                  d={activePhrase.path}
                  stroke="#000000"
                  strokeWidth="4.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  strokeDasharray={totalLength}
                  strokeDashoffset={Math.max(0, totalLength - progress)}
                />

                {/* Secondary Calligraphic Shading Layer for Variable Line Weight */}
                <path
                  d={activePhrase.path}
                  stroke="#1E2028"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  strokeDasharray={totalLength}
                  strokeDashoffset={Math.max(0, totalLength - progress)}
                />

                {/* Wet Glossy Reflection (Glistening newly laid ink) */}
                <path
                  d={activePhrase.path}
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  strokeDasharray={totalLength}
                  strokeDashoffset={Math.max(0, totalLength - progress)}
                />

                {/* Finished Ink Droplet at Terminal Flourish */}
                {showDropletGlint && (
                  <g className="animate-fadeIn">
                    <circle cx="432" cy="188" r="4" fill="#000000" />
                    <circle cx="430.8" cy="186.8" r="1.3" fill="#FFFFFF" opacity="0.9" />
                    <circle cx="432" cy="188" r="8" fill="none" stroke="#CBD5E1" strokeWidth="1" className="animate-ping opacity-50" />
                  </g>
                )}

                {/* ================================================= */}
                {/* 3D METALLIC FOUNTAIN PEN NIB IN MOTION           */}
                {/* ================================================= */}
                <g 
                  transform={`translate(${penPos.x}, ${penPos.y}) rotate(${penPos.angle})`}
                  filter="url(#nibCastShadow)"
                  className="transition-transform duration-75 pointer-events-none"
                >
                  {/* Dynamic Ground Shadow on Paper */}
                  <ellipse 
                    cx="8" 
                    cy="12" 
                    rx={penPos.isDown ? 12 : 18} 
                    ry={penPos.isDown ? 4.5 : 7} 
                    fill="rgba(15, 23, 42, 0.28)" 
                    filter="blur(2.5px)" 
                  />

                  {/* Pen Barrel / Resin Grip */}
                  <path 
                    d="M -11 -130 L 11 -130 L 8 -68 L -8 -68 Z" 
                    fill="url(#nibGripGrad)" 
                    stroke="#000000" 
                    strokeWidth="0.8" 
                  />
                  {/* Silver Grip Knurled Band */}
                  <rect x="-9" y="-72" width="18" height="5" rx="1" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.6" />
                  <line x1="-7" y1="-70" x2="7" y2="-70" stroke="#64748B" strokeWidth="0.8" />

                  {/* Nib Silver Body */}
                  <path
                    d="M 0 0 
                       L -14 -35 
                       C -20 -55 -15 -68 -15 -68 
                       L 15 -68 
                       C 15 -68 20 -55 14 -35 
                       Z"
                    fill="url(#nibSilverGrad)"
                    stroke="#475569"
                    strokeWidth="0.8"
                  />

                  {/* 14K Gold Shoulder Inlay Wings */}
                  <path
                    d="M 0 -4 
                       L -9 -28 
                       C -13 -44 -10 -58 -10 -58 
                       L 10 -58 
                       C 10 -58 13 -44 9 -28 
                       Z"
                    fill="url(#nibGoldGrad)"
                    opacity="0.9"
                  />

                  {/* Stamped Lab Imprint */}
                  <text 
                    x="0" 
                    y="-45" 
                    fontSize="5" 
                    fontFamily="monospace" 
                    fontWeight="bold" 
                    fill="#334155" 
                    textAnchor="middle" 
                    letterSpacing="0.5"
                  >
                    INKORA 14K
                  </text>
                  <text 
                    x="0" 
                    y="-38" 
                    fontSize="3.8" 
                    fontFamily="sans-serif" 
                    fill="#475569" 
                    textAnchor="middle"
                  >
                    LAB BATCH 01
                  </text>

                  {/* Slit and Heart Breather Hole */}
                  <line x1="0" y1="-2" x2="0" y2="-28" stroke="#090A0C" strokeWidth="0.9" />
                  <circle cx="0" cy="-28" r="2.2" fill="#090A0C" stroke="#334155" strokeWidth="0.5" />
                  <path 
                    d="M -3 -30 C -3 -33 -1 -33 0 -31.5 C 1 -33 3 -33 3 -30 C 3 -28 0 -26 0 -26 C 0 -26 -3 -28 -3 -30 Z" 
                    fill="none" 
                    stroke="#475569" 
                    strokeWidth="0.5" 
                    opacity="0.8" 
                  />

                  {/* Specular Light Highlights across Chrome Surface */}
                  <line x1="-8" y1="-62" x2="-2" y2="-12" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />
                  <line x1="7" y1="-60" x2="2" y2="-14" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

                  {/* Bead of Liquid Black Ink at the Nib Tip */}
                  <ellipse cx="0" cy="-1.5" rx="2.5" ry="3.2" fill="#000000" />
                  <circle cx="-0.8" cy="-2.5" r="0.75" fill="#FFFFFF" opacity="0.9" />
                </g>
              </svg>
            )}

            {/* VIEW B: INTERACTIVE FREEHAND DRAWING CANVAS */}
            {mode === 'interactive' && (
              <div className="relative w-full h-full cursor-crosshair">
                <canvas
                  ref={canvasRef}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  className="w-full h-full touch-none"
                />

                {/* Floating Realistic Nib following mouse in Interactive Mode */}
                <div 
                  className="absolute pointer-events-none transform -translate-x-1/2 -translate-y-full transition-transform duration-75"
                  style={{
                    left: `${penPos.x}px`,
                    top: `${penPos.y}px`,
                    transform: `translate(-50%, -100%) rotate(${penPos.angle}deg)`
                  }}
                >
                  <svg width="42" height="72" viewBox="-21 -72 42 72" fill="none">
                    {/* Shadow */}
                    <ellipse cx="5" cy="5" rx="10" ry="3" fill="rgba(0,0,0,0.3)" filter="blur(2px)" />
                    {/* Barrel */}
                    <rect x="-7" y="-70" width="14" height="28" fill="#14151B" stroke="#000" strokeWidth="0.5" />
                    {/* Nib */}
                    <path d="M 0 0 L -10 -28 L 10 -28 Z" fill="#E2E8F0" stroke="#64748B" strokeWidth="0.5" />
                    <path d="M 0 -2 L -6 -24 L 6 -24 Z" fill="#F59E0B" opacity="0.85" />
                    <line x1="0" y1="-2" x2="0" y2="-20" stroke="#000" strokeWidth="0.8" />
                    <circle cx="0" cy="-20" r="1.5" fill="#000" />
                    <circle cx="0" cy="-1" r="1.8" fill="#000" />
                    <circle cx="-0.5" cy="-1.5" r="0.5" fill="#FFF" />
                  </svg>
                </div>
              </div>
            )}

          </div>

          {/* ========================================================= */}
          {/* BOTTOM PHRASE CHIPS & METRICS FOOTER                     */}
          {/* ========================================================= */}
          <div className="relative z-10 pt-3 mt-2 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
            
            {/* Phrase Selector Pills in Auto Mode */}
            {mode === 'auto' ? (
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
                <span className="text-[10px] font-mono text-[#64748B] mr-1 hidden sm:inline">
                  Select:
                </span>
                {PHRASES.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      setActivePhraseIndex(idx);
                    }}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-all cursor-pointer ${
                      activePhraseIndex === idx
                        ? 'bg-[#090A0C] text-white font-bold shadow-xs'
                        : 'bg-white/80 border border-[#CBD5E1] text-[#475569] hover:bg-white hover:text-[#090A0C]'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-[10px] font-mono text-[#475569]">
                <span>Tip: Drag with mouse or finger to write with live flex-nib capillary ink.</span>
              </div>
            )}

            {/* Specimen Data Footnote */}
            <div className="text-[10px] font-mono text-[#64748B] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Formula: Fe²⁺ Tannin Complex</span>
            </div>
          </div>

        </div>

        {/* Card Subtitle */}
        <p className="mt-3 text-xs text-[#94A3B8] text-center font-mono">
          INKORA Studio Writing Bench · Real-Time Capillary Flow &amp; Nib Flex
        </p>

      </div>
    </div>
  );
}
