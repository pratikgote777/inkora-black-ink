import React from 'react';

export default function IngredientDiagram({ type = 'water' }) {
  switch (type) {
    case 'water':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-20" fill="none">
          {/* Water molecule H2O */}
          <line x1="80" y1="42" x2="48" y2="68" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="80" y1="42" x2="112" y2="68" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          {/* Oxygen */}
          <circle cx="80" cy="42" r="14" fill="#0284C7" />
          <text x="80" y="47" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="#FFFFFF" textAnchor="middle">O</text>
          {/* Hydrogens */}
          <circle cx="48" cy="68" r="10" fill="#38BDF8" />
          <text x="48" y="72" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="#FFFFFF" textAnchor="middle">H</text>
          <circle cx="112" cy="68" r="10" fill="#38BDF8" />
          <text x="112" y="72" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="#FFFFFF" textAnchor="middle">H</text>
          <text x="80" y="94" fontFamily="monospace" fontSize="8" fill="#64748B" textAnchor="middle">104.5° Bond Angle</text>
        </svg>
      );

    case 'methyl-orange':
      return (
        <svg viewBox="0 0 200 100" className="w-full h-20" fill="none">
          {/* Azo Dye Linkage -N=N- and aromatic rings */}
          {/* Ring 1 (Dimethylamino benzene) */}
          <polygon points="35,35 50,26 65,35 65,55 50,64 35,55" stroke="#F05A22" strokeWidth="1.5" fill="#FFF4EE" />
          <circle cx="50" cy="45" r="9" stroke="#F05A22" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.6" />
          {/* Dimethylamino group */}
          <text x="18" y="48" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#C2410C">N(CH₃)₂</text>
          {/* Azo Double Bond */}
          <line x1="65" y1="45" x2="82" y2="45" stroke="#C2410C" strokeWidth="1.5" />
          <line x1="82" y1="42" x2="98" y2="42" stroke="#EA580C" strokeWidth="2" />
          <line x1="82" y1="48" x2="98" y2="48" stroke="#EA580C" strokeWidth="2" />
          <text x="90" y="32" fontFamily="monospace" fontSize="7" fill="#C2410C" textAnchor="middle">-N=N-</text>
          {/* Ring 2 (Sulfonate benzene) */}
          <line x1="98" y1="45" x2="115" y2="45" stroke="#C2410C" strokeWidth="1.5" />
          <polygon points="115,35 130,26 145,35 145,55 130,64 115,55" stroke="#F05A22" strokeWidth="1.5" fill="#FFF4EE" />
          <circle cx="130" cy="45" r="9" stroke="#F05A22" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.6" />
          {/* Sulfonate group */}
          <text x="150" y="48" fontFamily="sans-serif" fontSize="7.5" fontWeight="600" fill="#C2410C">SO₃⁻Na⁺</text>
          <text x="100" y="90" fontFamily="monospace" fontSize="7.5" fill="#71717A" textAnchor="middle">C₁₄H₁₄N₃NaO₃S · Chromophore</text>
        </svg>
      );

    case 'gum-arabic':
      return (
        <svg viewBox="0 0 180 100" className="w-full h-20" fill="none">
          {/* Polysaccharide branching network */}
          <circle cx="50" cy="50" r="12" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
          <text x="50" y="53" fontFamily="sans-serif" fontSize="7" fontWeight="600" fill="#92400E" textAnchor="middle">Gal</text>
          <line x1="62" y1="50" x2="88" y2="50" stroke="#D97706" strokeWidth="1.5" />
          
          <circle cx="100" cy="50" r="12" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
          <text x="100" y="53" fontFamily="sans-serif" fontSize="7" fontWeight="600" fill="#92400E" textAnchor="middle">Gal</text>
          
          {/* Branching chain */}
          <line x1="100" y1="38" x2="100" y2="18" stroke="#D97706" strokeWidth="1.5" />
          <circle cx="100" cy="18" r="9" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
          <text x="100" y="21" fontFamily="sans-serif" fontSize="6.5" fontWeight="600" fill="#92400E" textAnchor="middle">Ara</text>
          
          <line x1="112" y1="50" x2="138" y2="50" stroke="#D97706" strokeWidth="1.5" />
          <circle cx="150" cy="50" r="12" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
          <text x="150" y="53" fontFamily="sans-serif" fontSize="7" fontWeight="600" fill="#92400E" textAnchor="middle">Rha</text>

          <text x="90" y="88" fontFamily="monospace" fontSize="7.5" fill="#71717A" textAnchor="middle">Branched Arabinogalactan Polymer</text>
        </svg>
      );

    case 'glycerine':
      return (
        <svg viewBox="0 0 160 100" className="w-full h-20" fill="none">
          {/* Glycerol propane-1,2,3-triol backbone */}
          <line x1="50" y1="50" x2="80" y2="50" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          <line x1="80" y1="50" x2="110" y2="50" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          {/* Carbons */}
          <circle cx="50" cy="50" r="7" fill="#047857" />
          <circle cx="80" cy="50" r="7" fill="#047857" />
          <circle cx="110" cy="50" r="7" fill="#047857" />
          {/* Hydroxyls */}
          <line x1="50" y1="50" x2="50" y2="24" stroke="#10B981" strokeWidth="1.5" />
          <text x="50" y="20" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#047857" textAnchor="middle">OH</text>
          <line x1="80" y1="50" x2="80" y2="76" stroke="#10B981" strokeWidth="1.5" />
          <text x="80" y="86" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#047857" textAnchor="middle">OH</text>
          <line x1="110" y1="50" x2="110" y2="24" stroke="#10B981" strokeWidth="1.5" />
          <text x="110" y="20" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#047857" textAnchor="middle">OH</text>

          <text x="80" y="96" fontFamily="monospace" fontSize="7.5" fill="#71717A" textAnchor="middle">C₃H₈O₃ · Propane-1,2,3-triol</text>
        </svg>
      );

    default:
      return null;
  }
}
