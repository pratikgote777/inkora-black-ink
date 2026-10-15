import React, { useState, useEffect, useRef } from 'react';
import { GALLERY_PHOTOS, GALLERY_VIDEOS } from '../config/galleryAssets';
import BottleCloseUpVisual from './visuals/BottleCloseUpVisual';
import PaperSwatchVisual from './visuals/PaperSwatchVisual';
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  Video, 
  MapPin, 
  Clock, 
  Sparkles, 
  Film 
} from 'lucide-react';

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null); // index in filteredPhotos
  const videoRefs = useRef([]);

  const categories = [
    'All',
    'Preparation Process',
    'Ingredients & Weighing',
    'Laboratory Setup',
    'Final Product & Swatches'
  ];

  const filteredPhotos = activeCategory === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((item) => item.category === activeCategory);

  // Close lightbox on Escape key & navigate on arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  // Handle mutual exclusive video playback (pause others when one plays)
  const handleVideoPlay = (playingIndex) => {
    videoRefs.current.forEach((videoEl, idx) => {
      if (videoEl && idx !== playingIndex && !videoEl.paused) {
        videoEl.pause();
      }
    });
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section id="project-gallery" className="py-24 bg-[#090A0C] border-y border-[#1E2028] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 reveal">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#94A3B8] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]"></span>
              Visual Archive & Laboratory Portfolio
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Inside the <span className="italic font-normal text-[#CBD5E1]">INKORA Project.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Explore the journey of our black ink formulation — from ingredients and preparation to the final product. Authentic laboratory photographs and process videos captured directly during practical chemistry benchwork.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#CBD5E1] bg-[#14151B] border border-[#262832] px-3.5 py-2 rounded-xl shrink-0 self-start md:self-auto">
            <Camera className="w-3.5 h-3.5 text-[#E2E8F0]" />
            <span>{GALLERY_PHOTOS.length} Photographs</span>
            <span className="text-[#475569]">·</span>
            <Film className="w-3.5 h-3.5 text-[#E2E8F0]" />
            <span>{GALLERY_VIDEOS.length} Process Videos</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#E2E8F0] text-[#090A0C] font-semibold shadow-xs'
                  : 'bg-[#14151B] text-[#94A3B8] border border-[#262832] hover:text-white hover:border-[#3F4354]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ========================================================= */}
        {/* SUBSECTION 1: PHOTO GALLERY GRID                          */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredPhotos.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className={`group relative bg-[#14151B] rounded-2xl border border-[#262832] overflow-hidden shadow-editorial hover:border-[#3F4354] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer flex flex-col justify-between reveal stagger-${(idx % 3) + 1}`}
            >
              {/* Media Container with light studio sweep for black ink contrast */}
              <div className="relative aspect-4/3 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EDF2F7] border-b border-[#262832] flex items-center justify-center p-2">
                {item.src ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-contain rounded-xl group-hover:scale-103 transition-transform duration-500"
                  />
                ) : item.fallbackType === 'bottle' ? (
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <BottleCloseUpVisual className="w-full h-full" />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <PaperSwatchVisual className="w-full h-full" />
                  </div>
                )}

                {/* Expand Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-lg transform group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-[#090A0C]/85 text-[10px] font-mono uppercase tracking-wider text-[#CBD5E1] px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-xs">
                  {item.category}
                </span>

                {/* Real Photo Flag if real camera shot */}
                {item.src && (
                  <span className="absolute bottom-3 right-3 bg-[#090A0C]/85 text-[9px] font-mono text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1 backdrop-blur-xs">
                    <Camera className="w-2.5 h-2.5" />
                    <span>Real Photo</span>
                  </span>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-serif text-lg font-bold text-white mb-1.5 group-hover:text-[#CBD5E1] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                    {item.caption}
                  </p>
                </div>

                {item.location && (
                  <div className="pt-3 border-t border-[#1F212B] flex items-center gap-1.5 text-[10px] font-mono text-[#64748B]">
                    <MapPin className="w-3 h-3 text-[#CBD5E1] shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* SUBSECTION 2: DEDICATED VIDEO GALLERY: "Watch the Process" */}
        {/* ========================================================= */}
        <div className="bg-[#14151B] rounded-3xl p-6 sm:p-10 border border-[#262832] shadow-editorial mb-16 reveal">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-[#262832] gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#94A3B8] mb-2">
                <Video className="w-3.5 h-3.5 text-[#E2E8F0]" />
                Laboratory Video Documentation
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Watch the Process
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 max-w-2xl">
                Direct benchtop recordings showing the continuous agitation, complexation reaction, and binder stabilization of INKORA Black Ink in our chemical engineering laboratory.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#CBD5E1] bg-[#181A22] border border-[#2E3240] px-3 py-1.5 rounded-xl shrink-0">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span>Native HTML5 Video</span>
            </div>
          </div>

          {/* Video Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_VIDEOS.map((vid, idx) => (
              <div
                key={vid.id}
                className={`bg-[#181A22] rounded-2xl border border-[#262832] overflow-hidden flex flex-col justify-between group hover:border-[#3F4354] hover:-translate-y-1 transition-all reveal stagger-${idx + 1}`}
              >
                {/* HTML5 Video Player Container with Light Studio Framing for Black Ink Contrast */}
                <div className="relative aspect-9/16 max-h-[380px] bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EDF2F7] flex items-center justify-center overflow-hidden border-b border-[#262832] p-1.5">
                  <video
                    ref={(el) => (videoRefs.current[idx] = el)}
                    src={vid.src}
                    controls
                    playsInline
                    preload="metadata"
                    onPlay={() => handleVideoPlay(idx)}
                    className="w-full h-full object-contain rounded-xl bg-black shadow-md"
                  >
                    Your browser does not support native MP4 video playback.
                  </video>

                  {/* Stage Badge */}
                  <span className="absolute top-3 left-3 bg-[#090A0C]/85 text-[10px] font-mono text-[#CBD5E1] px-2.5 py-1 rounded-full border border-white/10 pointer-events-none backdrop-blur-xs">
                    {vid.stage}
                  </span>

                  {/* Duration Badge */}
                  <span className="absolute top-3 right-3 bg-[#090A0C]/85 text-[10px] font-mono text-white px-2.5 py-1 rounded-full border border-white/10 pointer-events-none flex items-center gap-1 backdrop-blur-xs">
                    <Clock className="w-2.5 h-2.5 text-[#CBD5E1]" />
                    <span>{vid.duration}</span>
                  </span>
                </div>

                {/* Video Information */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                      {vid.title}
                    </h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                      {vid.caption}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#232632] flex flex-wrap items-center gap-1.5">
                    {vid.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono text-[#CBD5E1] bg-[#111216] px-2 py-0.5 rounded border border-[#262832]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-[#262832] flex items-center justify-between text-xs text-[#94A3B8]">
            <span>Note: Only one video plays at a time to prevent conflicting audio playback.</span>
            <span className="font-mono text-[#64748B]">All clips recorded at MIT AOE, Alandi</span>
          </div>
        </div>

        {/* Academic Origin Footnote */}
        <div className="p-4 rounded-xl bg-[#14151B] border border-[#262832] flex items-start gap-3 text-xs text-[#94A3B8]">
          <Camera className="w-4 h-4 text-[#CBD5E1] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Media Verification:</strong> All photographs and video clips are genuine documentation from our student laboratory sessions at the Chemical Engineering Department, MIT Academy of Engineering, Alandi. No stock photography or mockups have replaced the actual benchwork records.
          </p>
        </div>

      </div>

      {/* ========================================================= */}
      {/* INTERACTIVE PHOTO LIGHTBOX MODAL                         */}
      {/* ========================================================= */}
      {currentLightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative bg-[#14151B] border border-[#2F323F] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#262832] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block">
                  {currentLightboxItem.category} · Photo {lightboxIndex + 1} of {filteredPhotos.length}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  {currentLightboxItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="p-2 rounded-xl text-[#94A3B8] hover:text-white hover:bg-[#262832] transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Media Stage with Light Studio Backdrop */}
            <div className="p-4 sm:p-8 overflow-y-auto flex-grow flex items-center justify-center bg-[#0C0D12] relative">
              {/* Previous Arrow */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#181A22]/90 border border-[#2E3240] text-white flex items-center justify-center hover:bg-white hover:text-[#090A0C] transition-all shadow-md z-10"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Arrow */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#181A22]/90 border border-[#2E3240] text-white flex items-center justify-center hover:bg-white hover:text-[#090A0C] transition-all shadow-md z-10"
                aria-label="Next photograph"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Light Studio Display Container */}
              <div className="w-full max-w-2xl bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EDF2F7] p-4 sm:p-6 rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
                {currentLightboxItem.src ? (
                  <img
                    src={currentLightboxItem.src}
                    alt={currentLightboxItem.title}
                    className="max-h-[58vh] w-auto max-w-full rounded-xl object-contain shadow-sm"
                  />
                ) : currentLightboxItem.fallbackType === 'bottle' ? (
                  <BottleCloseUpVisual className="w-full max-w-md" />
                ) : (
                  <PaperSwatchVisual className="w-full max-w-md" />
                )}
              </div>
            </div>

            {/* Modal Footer Caption & Metadata */}
            <div className="p-4 sm:p-5 border-t border-[#262832] bg-[#111216] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs font-mono text-[#94A3B8]">
              <div>
                <p className="text-white mb-1 font-sans">{currentLightboxItem.caption}</p>
                {currentLightboxItem.location && (
                  <span className="text-[10px] text-[#64748B] flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{currentLightboxItem.location}</span>
                  </span>
                )}
              </div>
              <span className="text-[11px] text-[#CBD5E1] shrink-0 bg-[#1A1C24] px-3 py-1 rounded-lg border border-[#2E3240]">
                Keyboard: ← / → / Esc
              </span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
