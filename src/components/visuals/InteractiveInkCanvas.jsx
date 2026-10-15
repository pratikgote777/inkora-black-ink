import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Feather, RotateCcw, Droplets, Sparkles } from 'lucide-react';

/**
 * InteractiveInkCanvas
 * An interactive virtual stationery pad where users can test INKORA Black Ink
 * using dip nibs, variable speed flow dynamics, and ink reservoir simulation.
 */
export default function InteractiveInkCanvas() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [nibType, setNibType] = useState('flex'); // 'fine', 'flex', 'brush'
  const [inkLevel, setInkLevel] = useState(100);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [isRefilling, setIsRefilling] = useState(false);

  const lastPoint = useRef(null);
  const lastTime = useRef(0);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    ctx.clearRect(0, 0, w, h);

    // Draw subtle paper texture guidelines
    ctx.strokeStyle = 'rgba(226, 232, 240, 0.45)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 6]);

    const lineGap = 42;
    for (let y = lineGap; y < h; y += lineGap) {
      ctx.beginPath();
      ctx.moveTo(24, y);
      ctx.lineTo(w - 24, y);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    setHasDrawn(false);
  }, []);

  // Setup canvas with high DPI support
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      clearCanvas();
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [clearCanvas]);

  const refillInk = () => {
    setIsRefilling(true);
    setInkLevel(100);
    setTimeout(() => setIsRefilling(false), 800);
  };

  // Get mouse or touch coordinates
  const getCoords = (e) => {
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

  const startDrawing = (e) => {
    e.preventDefault();
    setIsDrawing(true);
    setHasDrawn(true);
    const coords = getCoords(e);
    lastPoint.current = coords;
    lastTime.current = Date.now();
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const currentPoint = getCoords(e);
    const currentTime = Date.now();

    const dx = currentPoint.x - lastPoint.current.x;
    const dy = currentPoint.y - lastPoint.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const timeDelta = Math.max(currentTime - lastTime.current, 1);
    const speed = dist / timeDelta; // Pixels per ms

    // Dynamic stroke width based on nib type & speed
    let baseWidth = 3;
    let opacity = 0.95;

    if (nibType === 'fine') {
      baseWidth = 1.6;
      opacity = 0.92;
    } else if (nibType === 'flex') {
      // Slower strokes pool more ink; fast strokes taper
      baseWidth = Math.max(1.8, Math.min(8.5, 9.5 - speed * 3.8));
      opacity = Math.max(0.75, Math.min(0.98, 1.05 - speed * 0.15));
    } else if (nibType === 'brush') {
      baseWidth = Math.max(4.5, Math.min(18, 16 - speed * 4));
      opacity = 0.55;
    }

    // Deplete ink reservoir slightly per stroke
    setInkLevel((prev) => Math.max(prev - dist * 0.035, 12));

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
    ctx.lineTo(currentPoint.x, currentPoint.y);

    // Deep black ink with organic feather edge
    ctx.strokeStyle = `rgba(10, 11, 14, ${opacity * (inkLevel / 100)})`;
    ctx.lineWidth = baseWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();

    // Subtle glossy liquid meniscus highlight
    if (nibType === 'flex' && baseWidth > 4.5) {
      ctx.beginPath();
      ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
      ctx.lineTo(currentPoint.x, currentPoint.y);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = baseWidth * 0.35;
      ctx.stroke();
    }

    ctx.restore();

    lastPoint.current = currentPoint;
    lastTime.current = currentTime;
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    lastPoint.current = null;
  };

  // Automated script demonstration
  const drawSampleScript = () => {
    clearCanvas();
    setHasDrawn(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    const startX = w * 0.18;
    const centerY = h * 0.52;

    const samplePoints = [
      { x: startX, y: centerY + 18 },
      { x: startX + 25, y: centerY - 28 },
      { x: startX + 45, y: centerY + 12 },
      { x: startX + 70, y: centerY - 15 },
      { x: startX + 95, y: centerY + 14 },
      { x: startX + 125, y: centerY - 32 },
      { x: startX + 145, y: centerY + 18 },
      { x: startX + 175, y: centerY - 10 },
      { x: startX + 215, y: centerY + 6 },
      { x: startX + 260, y: centerY - 24 },
      { x: startX + 310, y: centerY + 18 }
    ];

    let i = 0;
    const drawNextSegment = () => {
      if (i >= samplePoints.length - 1) return;
      const p1 = samplePoints[i];
      const p2 = samplePoints[i + 1];

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.quadraticCurveTo((p1.x + p2.x) / 2, (p1.y + p2.y) / 2 - 12, p2.x, p2.y);
      ctx.strokeStyle = 'rgba(9, 10, 12, 0.96)';
      ctx.lineWidth = (i % 2 === 0) ? 5.5 : 2.5;
      ctx.lineCap = 'round';
      ctx.stroke();

      i++;
      setTimeout(drawNextSegment, 55);
    };

    drawNextSegment();
  };

  return (
    <div className="bg-[#14151B] rounded-3xl p-6 sm:p-8 border border-[#262832] shadow-editorial-lg">
      
      {/* Header & Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-[#262832] gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#E2E8F0] animate-pulse"></span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Interactive Ink Scratchpad
            </h3>
          </div>
          <p className="text-xs text-[#94A3B8] font-mono">
            Test INKORA Black Ink capillary delivery and stroke feathering on virtual 120gsm cotton paper.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          
          {/* Nib Selector Buttons */}
          <div className="flex items-center p-1 rounded-xl bg-[#0E0F13] border border-[#2E3240] text-xs font-mono">
            <button
              type="button"
              onClick={() => setNibType('fine')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                nibType === 'fine' ? 'bg-[#E2E8F0] text-[#090A0C] font-semibold' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              Fine 0.4mm
            </button>
            <button
              type="button"
              onClick={() => setNibType('flex')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                nibType === 'flex' ? 'bg-[#E2E8F0] text-[#090A0C] font-semibold' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              Flex Nib
            </button>
            <button
              type="button"
              onClick={() => setNibType('brush')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                nibType === 'brush' ? 'bg-[#E2E8F0] text-[#090A0C] font-semibold' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              Wash Brush
            </button>
          </div>

          {/* Dip Nib / Refill Reservoir */}
          <button
            type="button"
            onClick={refillInk}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-[#1C1F28] border border-[#2E3240] text-[#CBD5E1] hover:text-white hover:border-[#64748B] transition-all cursor-pointer ${
              isRefilling ? 'animate-bounce' : ''
            }`}
            title="Dip virtual pen in ink bottle"
          >
            <Droplets className="w-3.5 h-3.5 text-white" />
            <span>Dip Nib ({Math.round(inkLevel)}%)</span>
          </button>

          {/* Sample Calligraphy */}
          <button
            type="button"
            onClick={drawSampleScript}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-[#1C1F28] border border-[#2E3240] text-[#CBD5E1] hover:text-white hover:border-[#64748B] transition-all cursor-pointer"
            title="Draw sample script stroke"
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Sample Stroke</span>
          </button>

          {/* Clear Paper */}
          <button
            type="button"
            onClick={clearCanvas}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-[#94A3B8] hover:text-white hover:bg-[#1E2028] transition-all cursor-pointer"
            title="Clear canvas"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Virtual Textured Cotton Paper Canvas */}
      <div className="relative rounded-2xl overflow-hidden border border-[#CBD5E1]/40 shadow-inner bg-gradient-to-b from-[#FFFFFF] via-[#FAFBFD] to-[#F1F5F9]">
        
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-72 sm:h-80 cursor-crosshair touch-none select-none"
        />

        {/* Paper Watermark & Prompt Overlay */}
        {!hasDrawn && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center p-4">
            <div className="w-10 h-10 rounded-full bg-[#090A0C]/10 flex items-center justify-center mb-2 text-[#090A0C]/70">
              <Feather className="w-5 h-5" />
            </div>
            <p className="font-serif italic text-base sm:text-lg text-[#090A0C]/80 font-bold">
              "Touch or drag to write with INKORA Black Ink"
            </p>
            <p className="text-xs font-mono text-[#090A0C]/50 mt-1">
              Variable line thickness calibrated for dip pens & glass nibs
            </p>
          </div>
        )}

        {/* Paper Substrate Label Badge */}
        <div className="absolute bottom-3 left-3 bg-[#090A0C]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-white flex items-center gap-2 border border-white/10 pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>120gsm Acid-Free Cotton Paper Substrate</span>
        </div>

        {/* Real-time Ink Level Bar */}
        <div className="absolute bottom-3 right-3 bg-[#090A0C]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-[#CBD5E1] border border-white/10 flex items-center gap-2 pointer-events-none">
          <span>Reservoir:</span>
          <div className="w-14 h-1.5 rounded-full bg-white/20 overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${inkLevel}%` }}
            />
          </div>
        </div>

      </div>

      {/* Interactive Helper Legend */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#94A3B8]">
        <div className="flex items-center gap-4">
          <span>• Fast stroke: Thinner hairline</span>
          <span>• Deliberate stroke: Opaque deep black pool</span>
        </div>
        <span className="text-[#CBD5E1]">
          Drying threshold simulated at ~35s
        </span>
      </div>

    </div>
  );
}
