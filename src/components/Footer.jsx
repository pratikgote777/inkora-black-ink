import React from 'react';
import { Droplet, ArrowUp } from 'lucide-react';
import { ASSET_CONFIG } from '../config/assets';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const currentYear = CURRENT_YEAR;

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Ink', href: '#our-ink' },
    { name: 'Specifications', href: '#details' },
    { name: 'Advantages & Limits', href: '#advantages' },
    { name: 'The Process', href: '#the-process' },
    { name: 'Project Gallery', href: '#project-gallery' },
    { name: 'Cost Breakdown', href: '#cost-breakdown' },
    { name: 'Product Showcase', href: '#product-showcase' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'Color Palette', href: '#gallery' },
    { name: 'Our Story', href: '#about' },
    { name: 'Observations', href: '#observations' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#07080A] text-[#E4E4E7] border-t border-[#1C1E26] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#1A1C24]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#181A22] border border-[#2F323F] text-white flex items-center justify-center shadow-sm">
                  <Droplet className="w-4 h-4 fill-current" />
                </div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  {ASSET_CONFIG.brand.name}
                </span>
              </div>

              <p className="font-serif italic text-base text-[#CBD5E1] mb-4">
                "{ASSET_CONFIG.brand.tagline}"
              </p>

              <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
                A student practical chemistry project bridging iron-tannin complex synthesis, protective gum colloids, and contemporary stationery product design.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1A1C24] text-xs font-mono text-[#64748B]">
              Batch Reference: <span className="text-white">{ASSET_CONFIG.brand.batchCode}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#71717A] mb-4">
              Project Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#94A3B8] hover:text-white transition-colors py-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Department Column */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#71717A] mb-4">
              Laboratory Contact
            </h4>
            <div className="text-xs text-[#94A3B8] space-y-2">
              <p className="text-white font-medium">Department of Chemistry</p>
              <p>Practical Engineering Lab 04</p>
              <p className="font-mono text-[#71717A]">contact@inkora-project.edu</p>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={handleScrollTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#E2E8F0] hover:text-white transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Mandatory Academic Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p className="max-w-2xl text-center md:text-left leading-relaxed">
            <span className="text-[#A1A7B8] font-semibold">Disclaimer:</span> Student-developed experimental formulation. Product properties and intended uses have not been independently validated.
          </p>

          <p className="font-mono shrink-0 text-center md:text-right text-[#64748B]">
            © {currentYear} INKORA Project. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
