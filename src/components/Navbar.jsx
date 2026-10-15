import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Droplet, ArrowRight, ChevronDown, Beaker, Receipt, Tag, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { ASSET_CONFIG } from '../config/assets';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'formulation' | 'economics' | null
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  // Structured dropdown menus to eliminate header congestion
  const formulationMenu = [
    {
      name: 'The Process',
      href: '#the-process',
      desc: '8-step heating, cooling & synthesis',
      icon: Sparkles
    },
    {
      name: 'Advantages & Limits',
      href: '#advantages',
      desc: 'Empirical formulation evaluation',
      icon: ShieldCheck
    },
    {
      name: 'Specifications & Bottle',
      href: '#details',
      desc: 'Physical characteristics & batch data',
      icon: Layers
    },
    {
      name: 'Chemical Reagents',
      href: '#ingredients',
      desc: 'Constituents, CAS & roles',
      icon: Beaker
    }
  ];

  const economicsMenu = [
    {
      name: 'Cost Breakdown',
      href: '#cost-breakdown',
      desc: 'Where every rupee goes (static breakdown)',
      icon: Receipt
    },
    {
      name: 'Product Showcase',
      href: '#product-showcase',
      desc: 'Meet our product & specifications',
      icon: Tag
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#090A0C]/92 backdrop-blur-md border-b border-[#262832] py-3 shadow-editorial' 
          : 'bg-gradient-to-b from-[#090A0C]/90 to-transparent py-4 sm:py-5'
      }`}
    >
      {/* Scroll Progress Hairline Indicator */}
      <div 
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-white/30 via-white to-white/70 transition-all duration-150 z-50 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-[#181A22] border border-[#2F323F] flex items-center justify-center text-[#E2E8F0] group-hover:bg-[#E2E8F0] group-hover:text-[#090A0C] transition-all duration-300 shadow-sm">
              <Droplet className="w-4 h-4 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white">
                {ASSET_CONFIG.brand.name}
              </span>
              <span className="font-mono text-[8px] uppercase tracking-widest text-[#71717A] -mt-1 hidden sm:inline">
                BLACK INK · MIT AOE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Decongested with Grouped Dropdowns) */}
          <nav 
            ref={dropdownRef}
            className="hidden lg:flex items-center gap-6 xl:gap-8" 
            aria-label="Main Navigation"
          >
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] hover:text-white transition-colors py-1"
            >
              Home
            </a>

            <a
              href="#our-ink"
              onClick={(e) => handleNavClick(e, '#our-ink')}
              className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] hover:text-white transition-colors py-1"
            >
              Our Ink
            </a>

            {/* Dropdown 1: Formulation */}
            <div className="relative group">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'formulation' ? null : 'formulation')}
                className={`inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider transition-colors py-1 focus:outline-none ${
                  activeDropdown === 'formulation' ? 'text-white' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                <span>Formulation</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'formulation' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'formulation' && (
                <div className="absolute top-full left-0 mt-3 w-72 rounded-2xl bg-[#12141A]/95 backdrop-blur-xl border border-[#2E3240] p-2 shadow-2xl animate-fadeIn z-50">
                  <div className="px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-[#64748B] border-b border-[#1E2028] mb-1">
                    Science & Synthesis
                  </div>
                  {formulationMenu.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#1C1F28] transition-colors group/item"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#181A22] border border-[#2A2E3D] flex items-center justify-center text-[#CBD5E1] group-hover/item:text-white group-hover/item:border-white/20 shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-white group-hover/item:text-[#E2E8F0]">
                            {item.name}
                          </div>
                          <div className="text-[10px] text-[#71717A] leading-tight mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="#project-gallery"
              onClick={(e) => handleNavClick(e, '#project-gallery')}
              className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] hover:text-white transition-colors py-1 flex items-center gap-1.5"
            >
              <span>Gallery</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </a>

            {/* Dropdown 2: Economics */}
            <div className="relative group">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'economics' ? null : 'economics')}
                className={`inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider transition-colors py-1 focus:outline-none ${
                  activeDropdown === 'economics' ? 'text-white' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                <span>Economics</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'economics' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'economics' && (
                <div className="absolute top-full left-0 mt-3 w-72 rounded-2xl bg-[#12141A]/95 backdrop-blur-xl border border-[#2E3240] p-2 shadow-2xl animate-fadeIn z-50">
                  <div className="px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-[#64748B] border-b border-[#1E2028] mb-1">
                    Cost Breakdown & Product
                  </div>
                  {economicsMenu.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#1C1F28] transition-colors group/item"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#181A22] border border-[#2A2E3D] flex items-center justify-center text-[#CBD5E1] group-hover/item:text-white group-hover/item:border-white/20 shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-white group-hover/item:text-[#E2E8F0]">
                            {item.name}
                          </div>
                          <div className="text-[10px] text-[#71717A] leading-tight mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="#observations"
              onClick={(e) => handleNavClick(e, '#observations')}
              className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] hover:text-white transition-colors py-1"
            >
              Lab Log
            </a>

            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] hover:text-white transition-colors py-1"
            >
              Story
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] hover:text-white transition-colors py-1"
            >
              Contact
            </a>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#our-ink"
              onClick={(e) => handleNavClick(e, '#our-ink')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#E2E8F0] text-[#090A0C] hover:bg-white hover:shadow-silver-glow transition-all duration-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Our Ink</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#F1F5F9] bg-[#14151B] border border-[#262832] hover:bg-[#1C1E26] transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Decongested Clean Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0B0E]/98 backdrop-blur-2xl border-b border-[#262832] px-6 py-6 shadow-2xl transition-all max-h-[85vh] overflow-y-auto">
          <div className="space-y-6">
            
            {/* Group 1: Overview */}
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] mb-2 px-2">
                Overview
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="p-3 rounded-xl bg-[#14151B] border border-[#262832] text-xs font-mono text-white"
                >
                  Home
                </a>
                <a
                  href="#our-ink"
                  onClick={(e) => handleNavClick(e, '#our-ink')}
                  className="p-3 rounded-xl bg-[#14151B] border border-[#262832] text-xs font-mono text-white"
                >
                  Our Ink
                </a>
                <a
                  href="#project-gallery"
                  onClick={(e) => handleNavClick(e, '#project-gallery')}
                  className="p-3 rounded-xl bg-[#14151B] border border-[#262832] text-xs font-mono text-emerald-400 col-span-2 flex items-center justify-between"
                >
                  <span>Project Gallery & Videos</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </a>
              </div>
            </div>

            {/* Group 2: Formulation & Chemistry */}
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] mb-2 px-2">
                Formulation & Chemistry
              </div>
              <div className="space-y-1.5">
                {formulationMenu.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#14151B] border border-[#262832] text-xs font-mono text-[#CBD5E1] hover:text-white"
                  >
                    <span>{item.name}</span>
                    <span className="text-[10px] text-[#64748B]">{item.desc}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Group 3: Cost Breakdown & Product */}
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] mb-2 px-2">
                Cost & Product Showcase
              </div>
              <div className="space-y-1.5">
                {economicsMenu.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#14151B] border border-[#262832] text-xs font-mono text-[#CBD5E1] hover:text-white"
                  >
                    <span>{item.name}</span>
                    <span className="text-[10px] text-[#64748B]">{item.desc}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Group 4: Academic Origin & Contact */}
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] mb-2 px-2">
                Project & Inquiry
              </div>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href="#observations"
                  onClick={(e) => handleNavClick(e, '#observations')}
                  className="p-3 text-center rounded-xl bg-[#14151B] border border-[#262832] text-xs font-mono text-white"
                >
                  Lab Log
                </a>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="p-3 text-center rounded-xl bg-[#14151B] border border-[#262832] text-xs font-mono text-white"
                >
                  Story
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="p-3 text-center rounded-xl bg-[#14151B] border border-[#262832] text-xs font-mono text-white"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#our-ink"
                onClick={(e) => handleNavClick(e, '#our-ink')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-mono font-semibold tracking-wider uppercase bg-[#E2E8F0] text-[#090A0C] hover:bg-white shadow-md"
              >
                <span>Explore Our Ink</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
