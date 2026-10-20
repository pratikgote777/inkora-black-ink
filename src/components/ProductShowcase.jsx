import React from 'react';
import { 
  Droplet, 
  Check, 
  Send, 
  ShieldAlert, 
  Tag,
  ArrowRight
} from 'lucide-react';
import { ASSET_CONFIG } from '../config/assets';
import { getAssetUrl } from '../utils/assetUrl';

/**
 * =========================================================================
 * PRODUCT CONFIGURATION (Easily Editable)
 * =========================================================================
 * If a final price is established, set to e.g. "₹59.00" or "₹49.00".
 * By default, per user specification, set to "Price to be announced".
 */
export const PRODUCT_SELLING_PRICE = "Price to be announced";

export default function ProductShowcase() {
  const bottlePhoto = ASSET_CONFIG.images.heroProduct.url || getAssetUrl('/images/products/real-inkora-black-ink-bottle.jpeg');

  const handleEnquiryClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Tested & Observed Product Features
  const observedFeatures = [
    {
      title: 'Iron-Tannin Chromophore Matrix',
      desc: 'Deep, neutral black tone synthesized via stoichiometric complexation of iron(II) sulfate with botanical black tea tannins.'
    },
    {
      title: 'Colloidal Particle Stabilization',
      desc: 'Formulated with natural Gum Arabic (Acacia) as a protective colloid, maintaining uniform microscopic particle suspension without rapid settling.'
    },
    {
      title: 'Controlled Viscosity & Surface Wetting',
      desc: 'Refined with laboratory-grade glycerine to regulate capillary flow and reduce premature drying on metal and glass dip nibs.'
    },
    {
      title: 'Observed ~35 – 50s Drying Window',
      desc: 'Bench-tested on standard 80gsm copy paper under ambient laboratory temperatures with minimal bleedthrough.'
    },
    {
      title: 'Tested on Multiple Paper Grades',
      desc: 'Demonstrated clean line boundaries and controlled feathering on 80gsm copy paper and 120gsm cold-press cotton cardstock.'
    },
    {
      title: 'Authentic Student Practical Synthesis',
      desc: 'Prepared and batched by chemical engineering undergraduate students at MIT AOE School of Chemical Engineering, Pune.'
    }
  ];

  const productSpecs = [
    { label: 'Brand', value: 'INKORA' },
    { label: 'Product Name', value: 'INKORA Black Ink' },
    { label: 'Product Colour', value: 'Black (Neutral Tone)' },
    { label: 'Product Category', value: 'Experimental Writing Ink' },
    { label: 'Net Volume', value: '30 mL (Standard Specimen)' },
    { label: 'Container', value: 'Clear Glass Cylindrical Bottle with Seal Cap' },
    { label: 'Recommended Tools', value: 'Dip pens, glass calligraphy nibs, artist brushes' },
    { label: 'Fountain Pen Use', value: 'Not tested / Not recommended (particulate risk)' }
  ];

  return (
    <section id="product-showcase" className="py-24 bg-[#0B0C10] border-y border-[#1E2028] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 reveal">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#94A3B8] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]"></span>
            Product Showcase & Specifications
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Meet Our <span className="italic font-normal text-[#CBD5E1]">Product</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            A student-developed black ink formulation prepared as part of our practical chemistry project.
          </p>
        </div>

        {/* ========================================================= */}
        {/* AMAZON / FLIPKART INSPIRED PRODUCT LISTING CARD          */}
        {/* ========================================================= */}
        <div className="bg-[#14151B] rounded-3xl border border-[#262832] p-6 sm:p-10 shadow-editorial-lg reveal">
          
          {/* Breadcrumb Header Bar */}
          <div className="pb-6 mb-8 border-b border-[#262832] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <span>Stationery</span>
              <span>/</span>
              <span>Writing & Drawing Inks</span>
              <span>/</span>
              <span className="text-white">Student Lab Specimen</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-[#CBD5E1]">
              Specimen ID: EXP-FE-01
            </span>
          </div>

          {/* Main Product Layout (Split on Desktop, Stacked on Mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left 5 Cols: Product Image Container with Light Contrast Stage */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Main Image Frame (Light Studio Background to Ensure Black Ink Visibility) */}
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EDF2F7] border border-[#CBD5E1] p-6 sm:p-8 flex items-center justify-center shadow-inner group animate-specular-sweep">
                <img
                  src={bottlePhoto}
                  alt="INKORA Black Ink actual laboratory prototype bottle"
                  className="w-full h-full max-h-[460px] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-104"
                />

                {/* Badge: Actual Specimen */}
                <div className="absolute top-4 left-4 bg-[#090A0C]/85 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[#CBD5E1] px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Actual Lab Specimen</span>
                </div>

                {/* Bottle Volume Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-[10px] font-mono text-white px-3 py-1 rounded-full border border-white/10">
                  30 mL Bottle
                </div>

                {/* Image Footnote Overlay */}
                <div className="absolute bottom-3 inset-x-3 bg-black/75 backdrop-blur-md py-1.5 px-3 rounded-lg text-center text-[10px] font-mono text-[#CBD5E1] border border-white/10">
                  Physical prototype photographed at MIT AOE Chemical Engineering Lab
                </div>
              </div>

              {/* Photo Thumbnail / Contrast Note */}
              <div className="p-3.5 rounded-xl bg-[#181A22] border border-[#262832] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span>Photograph Type: Authentic Physical Sample</span>
                <span className="text-[#CBD5E1]">Unretouched Ink Liquid</span>
              </div>
            </div>

            {/* Right 7 Cols: Product Details, Verified Highlights, Pricing & Enquiry */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              <div>
                {/* Brand & Category Label */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#94A3B8]">
                    INKORA Stationery Studio
                  </span>
                  <span className="text-[#64748B]">·</span>
                  <span className="text-xs font-mono text-emerald-400">
                    Student Practical Prototype
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
                  INKORA Black Ink
                </h3>

                {/* Tagline */}
                <p className="font-serif italic text-sm text-[#CBD5E1] mb-4">
                  "Every Drop Tells a Story."
                </p>

                {/* Product Description */}
                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
                  A student-developed black ink formulation prepared as part of our practical chemistry project. Formulated with botanical tea tannins, analytical iron(II) sulfate, and natural gum arabic binder.
                </p>

                {/* Pricing Block (Amazon/Flipkart Inspired) */}
                <div className="p-5 rounded-2xl bg-[#181A22] border border-[#2E3240] mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-1">
                        Product Price
                      </span>
                      <div className="flex items-baseline gap-3">
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-white">
                          {PRODUCT_SELLING_PRICE}
                        </span>
                      </div>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-[11px] font-mono text-[#CBD5E1] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full inline-block">
                        Academic Prototype Specimen
                      </span>
                      <span className="text-[10px] text-[#64748B] block mt-1 font-mono">
                        Not priced for commercial retail sale
                      </span>
                    </div>
                  </div>
                </div>

                {/* Colour & Specifications Pill Row */}
                <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-mono">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#181A22] border border-[#262832]">
                    <span className="w-3 h-3 rounded-full bg-black border border-white/30 inline-block shadow-sm"></span>
                    <span className="text-white font-medium">Colour: Black</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#181A22] border border-[#262832] text-[#CBD5E1]">
                    <Droplet className="w-3.5 h-3.5 text-[#CBD5E1]" />
                    <span>Volume: 30 mL</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#181A22] border border-[#262832] text-[#CBD5E1]">
                    <Tag className="w-3.5 h-3.5 text-[#CBD5E1]" />
                    <span>Category: Experimental Writing Ink</span>
                  </div>
                </div>

                {/* Verified Product Features Bullet List */}
                <div className="mb-8">
                  <h4 className="font-serif text-lg font-bold text-white mb-3">
                    Observed & Tested Features
                  </h4>
                  <ul className="space-y-3">
                    {observedFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <div className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5 border border-white/15">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <div>
                          <strong className="text-white font-medium">{feat.title}: </strong>
                          <span className="text-[#94A3B8]">{feat.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Amazon-style Technical Specifications Table */}
                <div className="mb-8 rounded-2xl border border-[#262832] overflow-hidden">
                  <div className="bg-[#181A22] px-4 py-2.5 border-b border-[#262832] text-xs font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold">
                    Technical Specifications
                  </div>
                  <div className="divide-y divide-[#1F212B] bg-[#12141A] text-xs font-mono">
                    {productSpecs.map((item, idx) => (
                      <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 px-4 py-2.5">
                        <span className="text-[#94A3B8]">{item.label}</span>
                        <span className="sm:col-span-2 text-white font-sans">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons & Contact Connection */}
              <div className="pt-6 border-t border-[#262832]">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    type="button"
                    onClick={handleEnquiryClick}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs font-mono font-semibold bg-[#E2E8F0] text-[#090A0C] hover:bg-white transition-all shadow-md cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Product Enquiry</span>
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono font-medium text-[#CBD5E1] hover:text-white bg-[#181A22] hover:bg-[#1E2028] border border-[#262832] transition-colors"
                  >
                    <span>Contact Student Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                
                <p className="text-[11px] font-mono text-[#64748B] mt-2.5">
                  Clicking "Product Enquiry" navigates directly to our academic correspondence form.
                </p>
              </div>

            </div>

          </div>

          {/* Academic-Project Disclosure Banner */}
          <div className="mt-10 p-5 rounded-2xl bg-[#0E0F14] border border-[#262832] flex items-start gap-3.5 text-xs text-[#94A3B8] leading-relaxed">
            <ShieldAlert className="w-5 h-5 text-[#CBD5E1] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5 font-semibold">
                Academic Project Disclosure:
              </strong>
              INKORA Black Ink is an experimental student formulation developed as part of our practical chemistry curriculum. Product performance, lightfastness permanence, fountain pen feed safety, and commercial readiness have not been independently established. No commercial inventory is offered for purchase.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
