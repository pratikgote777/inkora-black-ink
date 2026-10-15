import React from 'react';
import { FlaskConical, ArrowRight } from 'lucide-react';
import HeroProductVisual from './visuals/HeroProductVisual';
import { ASSET_CONFIG } from '../config/assets';

export default function HeroSection() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      const navOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-subtle-grid"
    >
      {/* Subtle Dark Studio Ambient Rim Accents */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-white/[0.03] via-white/[0.01] to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left reveal">
            
            {/* Project Origin Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181A22] border border-[#2F323F] text-xs font-mono tracking-wider text-[#CBD5E1] mb-6 shadow-sm">
              <FlaskConical className="w-3.5 h-3.5 text-[#E2E8F0]" />
              <span>STUDENT PRACTICAL PROJECT · BLACK INK FORMULATION</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              Precision in <span className="italic font-normal text-[#E2E8F0]">Every Drop.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed max-w-xl mb-8 font-normal">
              Discover <strong className="font-semibold text-white">INKORA Black Ink</strong> — a student-developed exploration of colour, formulation, and the science of writing.
            </p>

            {/* Primary & Secondary Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#our-ink"
                onClick={(e) => scrollToSection(e, 'our-ink')}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-[#E2E8F0] text-[#090A0C] hover:bg-white transition-all duration-300 shadow-editorial hover:shadow-silver-glow group"
              >
                <span>Explore Our Ink</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#the-process"
                onClick={(e) => scrollToSection(e, 'the-process')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-[#14151B] text-[#E2E8F0] border border-[#2F323F] hover:border-[#64748B] hover:bg-[#1B1D25] transition-all duration-300"
              >
                <span>Discover the Process</span>
              </a>
            </div>

            {/* Academic Project Footnote */}
            <div className="mt-10 pt-6 border-t border-[#1F212B] flex items-center gap-4 text-xs text-[#71717A]">
              <div className="flex -space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#94A3B8] opacity-80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#334155] opacity-60"></span>
              </div>
              <p className="font-mono text-[11px] text-[#A1A7B8]">
                Empirical synthesis · Tagline: <span className="italic font-serif text-white font-medium">"{ASSET_CONFIG.brand.tagline}"</span>
              </p>
            </div>
          </div>

          {/* Right Column: Hero Product Visual with smooth animation */}
          <div className="lg:col-span-6 flex justify-center reveal reveal-scale stagger-2 animate-subtle-float">
            <HeroProductVisual className="w-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
