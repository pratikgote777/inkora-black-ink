import React, { useState, useEffect, useRef } from 'react';

/**
 * HeadlineNibFlourish
 * A sleek, high-precision calligraphic flourish that animates beneath the Hero headline,
 * traced by a miniature golden & silver fountain pen nib that leaves glistening black ink.
 */
export default function HeadlineNibFlourish({ className = '' }) {
  const [progress, setProgress] = useState(0);
  const [totalLength, setTotalLength] = useState(500);
  const [isPlaying, setIsPlaying] = useState(false);
  const [penPos, setPenPos] = useState({ x: 12, y: 16, angle: -35 });
  const [hasFinished, setHasFinished] = useState(false);
  const pathRef = useRef(null);
  const animFrameRef = useRef(null);

  // Elegant Spencerian flourish path spanning horizontally under "Every Drop."
  const flourishPath = "M 12 16 C 50 14, 90 24, 140 18 C 190 12, 230 8, 275 16 C 300 20, 320 26, 312 10 C 306 -2, 278 4, 282 22 C 286 32, 315 26, 338 18";

  const runAnimation = () => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const len = path.getTotalLength() || 500;
    setTotalLength(len);

    setIsPlaying(true);
    setHasFinished(false);
    const startTime = performance.now();
    const duration = 2200; // 2.2 seconds smooth stroke

    const animate = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Custom cubic ease in-out for natural handwriting acceleration
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      
      const currentDist = ease * len;
      setProgress(currentDist);

      // Calculate pen position and tangent angle
      const pt = path.getPointAtLength(currentDist);
      const aheadDist = Math.min(currentDist + 2, len);
      const ptAhead = path.getPointAtLength(aheadDist);
      const dx = ptAhead.x - pt.x;
      const dy = ptAhead.y - pt.y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI) - 40;

      setPenPos({ x: pt.x, y: pt.y, angle: Math.max(-65, Math.min(15, angle)) });

      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        setIsPlaying(false);
        setHasFinished(true);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      if (len) setTotalLength(len);
    }

    const timer = setTimeout(() => {
      runAnimation();
    }, 600);

    return () => {
      clearTimeout(timer);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div 
      className={`relative inline-block cursor-pointer select-none group ${className}`}
      onClick={runAnimation}
      title="Click to replay ink flourish"
    >
      <svg
        viewBox="0 0 355 42"
        className="w-full max-w-[340px] sm:max-w-[380px] h-auto overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Silver Nib Gradient */}
          <linearGradient id="microNibSilver" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="35%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          {/* Gold Inlay Wing Gradient */}
          <linearGradient id="microNibGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="50%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          {/* Soft Shadow filter */}
          <filter id="flourishShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
            <feOffset dx="0" dy="1.5" />
            <feComponentTransfer><feFuncA type="linear" slope="0.3" /></feComponentTransfer>
            <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Master Invisible Path Reference for measurement */}
        <path
          ref={pathRef}
          d={flourishPath}
          fill="none"
          stroke="transparent"
        />

        {/* Subtle Background Guide Track */}
        <path
          d={flourishPath}
          stroke="rgba(226, 232, 240, 0.08)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Active Flowing Black Ink Stroke */}
        <path
          d={flourishPath}
          stroke="#000000"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray={totalLength}
          strokeDashoffset={Math.max(0, totalLength - progress)}
          filter="url(#flourishShadow)"
          className="transition-all duration-75"
        />

        {/* Saturated Inner Core */}
        <path
          d={flourishPath}
          stroke="#E2E8F0"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.35"
          strokeDasharray={totalLength}
          strokeDashoffset={Math.max(0, totalLength - progress)}
        />

        {/* Terminal Ink Droplet Bead */}
        {hasFinished && (
          <g className="animate-fadeIn">
            <circle cx="338" cy="18" r="3.2" fill="#000000" stroke="#CBD5E1" strokeWidth="0.8" />
            <circle cx="337" cy="17" r="1" fill="#FFFFFF" opacity="0.9" />
            <circle 
              cx="338" 
              cy="18" 
              r="7" 
              fill="none" 
              stroke="#E2E8F0" 
              strokeWidth="0.8" 
              className="animate-ping opacity-60 pointer-events-none" 
            />
          </g>
        )}

        {/* Miniature Realistic Fountain Pen Nib */}
        {(isPlaying || !hasFinished) && (
          <g 
            transform={`translate(${penPos.x}, ${penPos.y}) rotate(${penPos.angle})`}
            className="pointer-events-none transition-transform duration-75"
          >
            {/* Nib Soft Shadow */}
            <ellipse cx="4" cy="5" rx="7" ry="2.5" fill="rgba(0, 0, 0, 0.45)" filter="blur(1px)" />

            {/* Nib Barrel Grip */}
            <rect x="-4" y="-38" width="8" height="18" rx="1.5" fill="#14151B" stroke="#262832" strokeWidth="0.5" />
            <rect x="-4.5" y="-21" width="9" height="2.5" rx="0.5" fill="#CBD5E1" />

            {/* Silver Nib Body */}
            <path
              d="M 0 0 
                 L -6 -11 
                 C -8 -18 -6 -20 -6 -25 
                 L 6 -25 
                 C 6 -20 8 -18 6 -11 
                 Z"
              fill="url(#microNibSilver)"
              stroke="#64748B"
              strokeWidth="0.5"
            />

            {/* Gold Shoulder Wing Detail */}
            <path
              d="M 0 -2 
                 L -4 -9 
                 C -5 -14 -4 -16 -4 -20 
                 L 4 -20 
                 C 4 -16 5 -14 4 -9 
                 Z"
              fill="url(#microNibGold)"
              opacity="0.85"
            />

            {/* Center Slit & Breather Hole */}
            <line x1="0" y1="-1" x2="0" y2="-12" stroke="#090A0C" strokeWidth="0.6" />
            <circle cx="0" cy="-12" r="1.1" fill="#090A0C" />

            {/* Liquid Black Ink Bead at Tip */}
            <ellipse cx="0" cy="-0.5" rx="1.5" ry="1.8" fill="#000000" />
            <circle cx="-0.4" cy="-1" r="0.4" fill="#FFFFFF" opacity="0.9" />
          </g>
        )}
      </svg>

      {/* Micro Interactive Tooltip */}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-5 left-2 font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase flex items-center gap-1 pointer-events-none">
        <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
        Tap to re-draw flourish
      </span>
    </div>
  );
}
