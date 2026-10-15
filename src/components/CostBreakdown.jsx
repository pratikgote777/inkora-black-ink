import React, { useState, useEffect, useRef } from 'react';
import { 
  Receipt, 
  Beaker, 
  Package, 
  CheckCircle2, 
  Info, 
  ShieldCheck
} from 'lucide-react';

/**
 * SECTION 1: INK PRODUCTION COST BREAKDOWN TABLE
 * 
 * Title: "Where Every Rupee Goes"
 * Subtitle: "A breakdown of the ingredients and materials used to prepare our INKORA Black Ink."
 * 
 * Static, non-interactive cost breakdown reflecting proportional quantities
 * consumed in an authentic 100 mL laboratory batch (yielding 3 × 30 mL finished bottles).
 */

// STATIC BATCH REAGENTS & INGREDIENTS DATA
const INGREDIENT_COSTS = [
  {
    srNo: '01',
    material: 'Distilled / Purified Water',
    role: 'Aqueous reaction medium & solvent',
    quantityUsed: '100 mL',
    cost: '₹1.00',
    notes: 'Purified laboratory grade solvent'
  },
  {
    srNo: '02',
    material: 'Black Tea Extract (Dry Leaves)',
    role: 'Botanical polyphenols & tannic acid chromophore precursor',
    quantityUsed: '5.0 g',
    cost: '₹3.00',
    notes: 'Extracted via hot water infusion'
  },
  {
    srNo: '03',
    material: 'Ferrous Sulphate Heptahydrate (FeSO₄·7H₂O)',
    role: 'Iron(II) ion source forming insoluble black iron-gallate complex',
    quantityUsed: '3.0 g',
    cost: '₹4.50',
    notes: 'Analytical laboratory reagent'
  },
  {
    srNo: '04',
    material: 'Gum Arabic Powder (Acacia Senegal)',
    role: 'Natural protective colloid, binder & particle suspension agent',
    quantityUsed: '2.0 g',
    cost: '₹3.50',
    notes: 'Hydrated in warm water before addition'
  },
  {
    srNo: '05',
    material: 'Glycerine (Glycerol 98%)',
    role: 'Humectant & viscosity modifier for controlled nib delivery',
    quantityUsed: '2.0 mL',
    cost: '₹1.50',
    notes: 'Prevents rapid nib crusting'
  },
  {
    srNo: '06',
    material: 'Methyl Orange Powder (Pre-trial Test Reagent)',
    role: 'Exploratory acid-base pH indicator test (not used for black colour)',
    quantityUsed: '0.05 g',
    cost: '₹0.50',
    notes: 'Archival pre-trial indicator; excluded from final black colorant'
  }
];

// STATIC CONSUMABLES & PACKAGING DATA
const CONSUMABLE_COSTS = [
  {
    srNo: '07',
    material: 'Qualitative Filter Paper (Grade 1)',
    role: 'Filtration of hot tea solids & refined precipitate purification',
    quantityUsed: '2 circles',
    cost: '₹4.00',
    notes: 'Single-use laboratory filtration'
  },
  {
    srNo: '08',
    material: 'Glass Specimen Storage Bottles (30 mL)',
    role: 'Cylindrical clear glass bottles with airtight dropper caps',
    quantityUsed: '3 bottles (batch)',
    cost: '₹45.00',
    notes: '₹15.00 per finished unit'
  }
];

// REUSABLE APPARATUS & EQUIPMENT (NOT CHARGED FULL TO SINGLE BATCH)
const APPARATUS_EQUIPMENT = [
  {
    srNo: '01',
    equipment: 'Borosilicate Glass Beakers (100 mL, 250 mL)',
    role: 'Tannin extraction & precipitation vessel',
    usageType: 'Reusable Glassware',
    costAllocation: '₹0.00 (Institutional Lab Stock)'
  },
  {
    srNo: '02',
    equipment: 'Glass Stirring Rods',
    role: 'Thorough mixing of metal salt & colloid',
    usageType: 'Reusable Glassware',
    costAllocation: '₹0.00 (Institutional Lab Stock)'
  },
  {
    srNo: '03',
    equipment: 'Borosilicate Glass Funnel',
    role: 'Gravity filtration & decanting',
    usageType: 'Reusable Glassware',
    costAllocation: '₹0.00 (Institutional Lab Stock)'
  },
  {
    srNo: '04',
    equipment: 'Graduated Measuring Cylinder (50 mL / 100 mL)',
    role: 'Precise volumetric solvent measurements',
    usageType: 'Reusable Glassware',
    costAllocation: '₹0.00 (Institutional Lab Stock)'
  },
  {
    srNo: '05',
    equipment: 'Laboratory Hot Plate / Heating Bath',
    role: 'Heating tea infusion to 85°C',
    usageType: 'Shared Laboratory Apparatus',
    costAllocation: '₹0.00 (Institutional Lab Stock)'
  }
];

export default function CostBreakdown() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    if (!hasAnimated) return;
    const duration = 1200;
    const startTime = performance.now();

    const update = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount1(14 * ease);
      setCount2(49 * ease);
      setCount3(21 * ease);
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  }, [hasAnimated]);

  return (
    <section id="cost-breakdown" className="py-24 bg-[#090A0C] border-y border-[#1E2028] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 reveal">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#94A3B8] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]"></span>
            Cost Analysis & Batch Economics
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Where Every <span className="italic font-normal text-[#CBD5E1]">Rupee Goes</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            A breakdown of the ingredients and materials used to prepare our INKORA Black Ink. Costs are calculated strictly according to the quantities actually used in our laboratory batch, rather than full retail packet prices.
          </p>
        </div>

        {/* Batch Basis Info Callout */}
        <div className="p-4 rounded-2xl bg-[#14151B] border border-[#262832] mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#CBD5E1] reveal stagger-1">
          <div className="flex items-center gap-2.5">
            <Receipt className="w-4 h-4 text-[#CBD5E1] shrink-0" />
            <span>
              <strong className="text-white">Batch Reference:</strong> 100 mL Standard Laboratory Synthesis (Yields 3 × 30 mL finished bottles)
            </span>
          </div>
          <span className="px-2.5 py-1 rounded bg-[#1C1F28] border border-[#2F323F] text-[#94A3B8] text-[11px]">
            Empirical Batch Costing
          </span>
        </div>

        {/* ========================================================= */}
        {/* TABLE 1: RAW INGREDIENTS & REAGENTS                      */}
        {/* ========================================================= */}
        <div className="bg-[#14151B] rounded-3xl p-6 sm:p-8 border border-[#262832] shadow-editorial mb-10 reveal">
          <div className="flex items-center gap-2 pb-4 mb-6 border-b border-[#262832]">
            <Beaker className="w-4 h-4 text-[#CBD5E1]" />
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                1. Reagent & Ingredient Breakdown
              </h3>
              <p className="text-xs text-[#94A3B8] mt-0.5 font-mono">
                Materials chemically consumed in the black ink synthesis
              </p>
            </div>
          </div>

          {/* Desktop & Mobile Responsive Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#262832] text-[#94A3B8] text-[11px] uppercase tracking-wider">
                  <th className="py-3.5 px-3 font-semibold w-16">Sr. No.</th>
                  <th className="py-3.5 px-3 font-semibold">Material / Ingredient</th>
                  <th className="py-3.5 px-3 font-semibold">Quantity Used</th>
                  <th className="py-3.5 px-3 font-semibold text-right">Cost (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F212B]">
                {INGREDIENT_COSTS.map((row) => (
                  <tr key={row.srNo} className="hover:bg-[#181A22] transition-colors">
                    <td className="py-3.5 px-3 text-[#64748B] font-bold">
                      {row.srNo}
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="text-white font-medium text-sm font-sans block">
                        {row.material}
                      </span>
                      <span className="text-[11px] text-[#94A3B8] block mt-0.5">
                        {row.role}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-[#CBD5E1]">
                      {row.quantityUsed}
                    </td>
                    <td className="py-3.5 px-3 text-right font-serif text-sm font-bold text-white">
                      {row.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Ingredient Subtotal Bar */}
          <div className="mt-6 pt-4 border-t border-[#262832] flex items-center justify-between text-xs font-mono">
            <span className="text-[#94A3B8] uppercase tracking-wider">
              Total Ingredient Cost (Batch):
            </span>
            <span className="font-serif text-lg font-bold text-white">
              ₹14.00
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TABLE 2: PACKAGING & SINGLE-USE CONSUMABLES              */}
        {/* ========================================================= */}
        <div className="bg-[#14151B] rounded-3xl p-6 sm:p-8 border border-[#262832] shadow-editorial mb-10 reveal">
          <div className="flex items-center gap-2 pb-4 mb-6 border-b border-[#262832]">
            <Package className="w-4 h-4 text-[#CBD5E1]" />
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                2. Packaging & Consumables Breakdown
              </h3>
              <p className="text-xs text-[#94A3B8] mt-0.5 font-mono">
                Containers, filtration discs, and sealing components consumed per batch
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#262832] text-[#94A3B8] text-[11px] uppercase tracking-wider">
                  <th className="py-3.5 px-3 font-semibold w-16">Sr. No.</th>
                  <th className="py-3.5 px-3 font-semibold">Material / Consumable</th>
                  <th className="py-3.5 px-3 font-semibold">Quantity Used</th>
                  <th className="py-3.5 px-3 font-semibold text-right">Cost (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F212B]">
                {CONSUMABLE_COSTS.map((row) => (
                  <tr key={row.srNo} className="hover:bg-[#181A22] transition-colors">
                    <td className="py-3.5 px-3 text-[#64748B] font-bold">
                      {row.srNo}
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="text-white font-medium text-sm font-sans block">
                        {row.material}
                      </span>
                      <span className="text-[11px] text-[#94A3B8] block mt-0.5">
                        {row.role}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-[#CBD5E1]">
                      {row.quantityUsed}
                    </td>
                    <td className="py-3.5 px-3 text-right font-serif text-sm font-bold text-white">
                      {row.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Consumables Subtotal Bar */}
          <div className="mt-6 pt-4 border-t border-[#262832] flex items-center justify-between text-xs font-mono">
            <span className="text-[#94A3B8] uppercase tracking-wider">
              Total Consumables Cost (Batch):
            </span>
            <span className="font-serif text-lg font-bold text-white">
              ₹49.00
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SUMMARY CARDS: TOTAL BATCH & PER-BOTTLE COST             */}
        {/* ========================================================= */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 reveal">
          {/* Card 1: Total Ingredients */}
          <div className="bg-[#14151B] rounded-2xl p-6 border border-[#262832] flex flex-col justify-between hover:border-[#3F4354] transition-all">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
              Total Ingredient Cost
            </span>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-white my-2">
              ₹{hasAnimated ? count1.toFixed(2) : '14.00'}
            </div>
            <span className="text-[11px] font-mono text-[#64748B]">
              All chemical reagents (100 mL batch)
            </span>
          </div>

          {/* Card 2: Total Consumables */}
          <div className="bg-[#14151B] rounded-2xl p-6 border border-[#262832] flex flex-col justify-between hover:border-[#3F4354] transition-all">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
              Total Consumables Cost
            </span>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-white my-2">
              ₹{hasAnimated ? count2.toFixed(2) : '49.00'}
            </div>
            <span className="text-[11px] font-mono text-[#64748B]">
              3 × 30 mL bottles, caps & filter paper
            </span>
          </div>

          {/* Card 3: Total Production Cost per Finished Bottle */}
          <div className="bg-gradient-to-br from-[#1C1E28] via-[#14151B] to-[#0E0F14] rounded-2xl p-6 border border-[#3E4357] flex flex-col justify-between shadow-editorial hover:border-[#64748B] transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#CBD5E1] font-semibold">
                Cost Per Finished Bottle
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white">
                30 mL Unit
              </span>
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-white my-2">
              ₹{hasAnimated ? count3.toFixed(2) : '21.00'}
            </div>
            <span className="text-[11px] font-mono text-[#CBD5E1]">
              ₹63.00 batch total ÷ 3 completed bottles
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TABLE 3: REUSABLE APPARATUS & EQUIPMENT (SEPARATE)        */}
        {/* ========================================================= */}
        <div className="bg-[#14151B] rounded-3xl p-6 sm:p-8 border border-[#262832] shadow-editorial mb-10 reveal">
          <div className="flex items-center gap-2 pb-4 mb-6 border-b border-[#262832]">
            <ShieldCheck className="w-4 h-4 text-[#CBD5E1]" />
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                3. Reusable Apparatus & Laboratory Equipment
              </h3>
              <p className="text-xs text-[#94A3B8] mt-0.5 font-mono">
                Institutional glassware and apparatus utilized across multiple sessions
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#262832] text-[#94A3B8] text-[11px] uppercase tracking-wider">
                  <th className="py-3.5 px-3 font-semibold w-16">Sr. No.</th>
                  <th className="py-3.5 px-3 font-semibold">Apparatus / Equipment</th>
                  <th className="py-3.5 px-3 font-semibold">Role in Synthesis</th>
                  <th className="py-3.5 px-3 font-semibold text-right">Cost Allocation (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F212B]">
                {APPARATUS_EQUIPMENT.map((row) => (
                  <tr key={row.srNo} className="hover:bg-[#181A22] transition-colors">
                    <td className="py-3.5 px-3 text-[#64748B] font-bold">
                      {row.srNo}
                    </td>
                    <td className="py-3.5 px-3 text-white font-medium text-sm font-sans">
                      {row.equipment}
                    </td>
                    <td className="py-3.5 px-3 text-[#94A3B8]">
                      {row.role}
                    </td>
                    <td className="py-3.5 px-3 text-right text-[#CBD5E1]">
                      {row.costAllocation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Apparatus Policy Note */}
          <div className="mt-6 pt-4 border-t border-[#262832] flex items-start gap-2.5 text-xs text-[#94A3B8] font-sans">
            <Info className="w-4 h-4 text-[#CBD5E1] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-white">Capital Equipment Principle:</strong> Reusable laboratory apparatus (beakers, funnels, cylinders, stirring rods) are institutional assets provided by the Department of Chemical Engineering. In accordance with proper product costing standards, the full purchase price of multi-year durable equipment is not burdened onto single student batches.
            </p>
          </div>
        </div>

        {/* Academic Empirical Costing Notice */}
        <div className="p-4 rounded-xl bg-[#14151B] border border-[#262832] flex items-start gap-3 text-xs text-[#94A3B8] reveal">
          <CheckCircle2 className="w-4 h-4 text-[#CBD5E1] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Static Pricing Policy:</strong> All figures presented in this table represent proportional calculations derived strictly from the mass and volume consumed during our practical ink preparation. No dynamic or invented commercial expenses are applied.
          </p>
        </div>

      </div>
    </section>
  );
}
