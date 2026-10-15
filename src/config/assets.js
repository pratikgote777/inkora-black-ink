/**
 * INKORA Black Ink - Visual Asset & Media Configuration
 * 
 * TO ADD YOUR OWN PHOTOGRAPHS & VIDEOS:
 * 1. Place your photo files in: /public/images/products/, /public/images/process/, or /public/images/ingredients/
 * 2. Place your video files (.mp4, .webm) in: /public/videos/
 * 3. Update the corresponding file paths below.
 * 4. Set 'isConcept: false' when providing real lab/prototype media.
 */

export const ASSET_CONFIG = {
  brand: {
    name: 'INKORA',
    tagline: 'Every Drop Tells a Story.',
    productName: 'INKORA Black Ink',
    batchCode: 'EXP-FE-TANNIN-01',
    logoIcon: '/favicon.svg',
    shadeName: 'Intense Black (Iron-Gallate Complex)',
    volumeDefault: 'To be measured'
  },

  // Primary Feature Media
  images: {
    heroProduct: {
      url: '/images/products/real-inkora-black-ink-bottle.jpeg',
      alt: 'Real cylindrical glass laboratory bottle filled with deep black INKORA ink, white cap, on bench at MIT AOE School of Chemical Engineering',
      caption: 'INKORA Black Ink — Real Laboratory Formulation Specimen',
      isConcept: false
    },
    heroVideo: {
      url: null, // e.g., '/videos/hero-black-ink.mp4'
      poster: null,
      caption: 'Viscosity and capillary flow test on cotton paper'
    },
    bottleCloseUp: {
      url: '/images/products/real-inkora-black-ink-bottle.jpeg',
      alt: 'Physical photograph of glass bottle filled with deep opaque black INKORA ink at MIT AOE Chemical Engineering Lab',
      caption: 'Verified Physical Formulation Specimen · MIT AOE',
      isConcept: false
    },
    paperSwatch: {
      url: null, // e.g., '/images/products/paper-swatch-black.jpg'
      alt: 'Black ink strokes, wet wash gradient, and fine crosshatch lines on 120gsm acid-free white paper',
      caption: 'Surface Tension, Stroke Crispness & Bleed Resistance Specimen',
      isConcept: true
    },
    labStory: {
      url: null, // e.g., '/images/process/lab-bench-record.jpg'
      alt: 'Laboratory bench with notebook, Erlenmeyer flask of tea extract, beaker of ferrous sulfate, and prototype black ink bottle',
      caption: 'Empirical Synthesis & Practical Formulation Bench',
      isConcept: true
    }
  },

  // Real Ingredient Photographs (downloaded and stored locally in /public/images/ingredients/)
  ingredients: [
    {
      id: 'tea-extract',
      name: 'Tea Extract (Tannic Acid / Polyphenols)',
      role: 'Botanical Tannin Source & Chromophore Precursor',
      category: 'final',
      image: '/images/ingredients/tea-extract.jpg',
      alt: 'Steeped dark tea extract containing concentrated polyphenolic tannins in glassware',
      description: 'Extracted by heating black tea leaves in demineralized water and cooling to room temperature. Provides hydrolysable tannins and gallic acid.',
      functionDetail: 'Reacts with iron(II) ions to generate the dark iron gallate complex.',
      cas: 'CAS 1401-55-4 (Tannic Acid)',
      credit: 'Wikimedia Commons / CC-BY-SA 4.0'
    },
    {
      id: 'ferrous-sulfate',
      name: 'Ferrous Sulphate (Iron(II) Sulphate)',
      role: 'Iron Precursor & Color-Forming Agent',
      category: 'final',
      image: '/images/ingredients/ferrous-sulfate.jpg',
      alt: 'Real photograph of light-green iron(II) sulfate heptahydrate crystals',
      description: 'Iron(II) sulfate heptahydrate crystals (FeSO₄·7H₂O). Supplies Fe²⁺ ions that coordinate with polyphenol catechol groups in the cooled tea extract.',
      functionDetail: 'Forms the insoluble black iron-tannin complex that imparts deep black opacity.',
      cas: 'CAS 7782-63-0',
      credit: 'Wikimedia Commons / CC-BY-SA 3.0'
    },
    {
      id: 'water',
      name: 'Demineralized Water (H₂O)',
      role: 'Liquid Base & Solvent Medium',
      category: 'final',
      image: '/images/ingredients/water.jpg',
      alt: 'Real photograph of pure demineralized water in a laboratory glass beaker',
      description: 'Demineralized liquid carrier ensuring high dissolution of reactants without interference from ambient multivalent ions.',
      functionDetail: 'Serves as the reaction matrix for extraction, dilution, and consistency balance.',
      cas: 'CAS 7732-18-5',
      credit: 'Wikimedia Commons / CC-BY-SA 3.0'
    },
    {
      id: 'gum-arabic',
      name: 'Gum Arabic (Acacia Senegalis)',
      role: 'Protective Colloid & Viscosity Modifier',
      category: 'final',
      image: '/images/ingredients/gum-arabic.jpg',
      alt: 'Real photograph of raw natural gum arabic resin crystals',
      description: 'Natural branched polysaccharide resin from Acacia trees. Acts as a protective colloid that suspends the iron-tannin precipitate and prevents coagulation.',
      functionDetail: 'Controls fluid viscosity, prevents premature sedimentation, and improves nib adhesion.',
      cas: 'CAS 9000-01-5',
      credit: 'Wikimedia Commons / CC-BY-SA 3.0'
    },
    {
      id: 'glycerine',
      name: 'Glycerine (Propane-1,2,3-triol)',
      role: 'Hygroscopic Humectant',
      category: 'final',
      image: '/images/ingredients/glycerine.jpg',
      alt: 'Real photograph of clear liquid glycerine in a labeled glass laboratory bottle',
      description: 'Trihydroxy sugar alcohol (C₃H₈O₃) providing humectant moisture retention. Retards evaporation at the nib tip to reduce crusting.',
      functionDetail: 'Improves nib lubricating glide and supports smooth dip-pen ink laydown.',
      cas: 'CAS 56-81-5',
      credit: 'Wikimedia Commons / CC-BY-SA 2.0'
    },
    {
      id: 'methyl-orange',
      name: 'Methyl Orange (pH Indicator Trial)',
      role: 'Earlier Pre-Trial & Acid-Base Indicator',
      category: 'earlier',
      image: '/images/ingredients/methyl-orange.jpg',
      alt: 'Real photograph of orange methyl orange indicator powder in reagent vial',
      description: 'Sodium 4-{[4-(dimethylamino)phenyl]diazenyl}benzenesulfonate. Tested during exploratory acid-base trials. Not responsible for the final black ink colour.',
      functionDetail: 'Used in pre-trials to monitor formulation pH before developing the iron-tannin black ink.',
      cas: 'CAS 547-58-0',
      credit: 'Wikimedia Commons / Public Domain'
    }
  ],

  // Gallery Showcase Items (Organized into the 5 requested categories)
  galleryItems: [
    {
      id: 'g-prod-1',
      title: 'INKORA Black Ink Bottle',
      category: 'Final Product',
      type: 'image',
      src: null, // User can set e.g. '/images/products/bottle-1.jpg'
      fallbackType: 'bottle',
      caption: 'Glass ink bottle filled with deep black ink, sealed with grooved matte cap.',
      tags: ['Glass Bottle', 'Packaging', 'Black Ink']
    },
    {
      id: 'g-ing-1',
      title: 'Iron(II) Sulfate & Tannin Reactants',
      category: 'Ingredients',
      type: 'image',
      src: '/images/ingredients/ferrous-sulfate.jpg',
      caption: 'Analytical grade FeSO₄·7H₂O crystals alongside steeped botanical tannin extract.',
      tags: ['Reagents', 'Synthesis', 'Crystals']
    },
    {
      id: 'g-ing-2',
      title: 'Gum Arabic Binder Matrix',
      category: 'Ingredients',
      type: 'image',
      src: '/images/ingredients/gum-arabic.jpg',
      caption: 'Acacia gum flakes prior to hydration and dispersion in demineralized water.',
      tags: ['Acacia', 'Colloid', 'Binder']
    },
    {
      id: 'g-proc-1',
      title: 'Thermal Extraction of Tannins',
      category: 'Preparation Process',
      type: 'image',
      src: '/images/ingredients/tea-extract.jpg',
      caption: 'Controlled heating of black tea leaves to yield concentrated polyphenolic broth.',
      tags: ['Heating', 'Tannin Extraction', 'Lab Glassware']
    },
    {
      id: 'g-proc-2',
      title: 'Thermal Equilibrating & Cooling Stage',
      category: 'Cooling and Filtration',
      type: 'image',
      src: '/images/ingredients/water.jpg',
      caption: 'Thermal cooling of aqueous extract to 21°C before introducing iron(II) sulfate.',
      tags: ['Cooling', 'Thermal Equilibration', 'Filtration']
    },
    {
      id: 'g-test-1',
      title: 'Nib Laydown & Feathering Assay',
      category: 'Ink Testing and Observations',
      type: 'image',
      src: null, // User can set e.g. '/images/process/nib-test.jpg'
      fallbackType: 'paper',
      caption: 'Calligraphic dip-pen evaluation on 120gsm high-cotton substrate.',
      tags: ['Dip Pen', 'Paper Test', 'Drying Curve']
    }
  ],

  // Color Palette Definitions (Deep Obsidian Black & Silver Graphite)
  palette: {
    pureBlack: '#000000',
    deepObsidian: '#090A0C',
    charcoalSurface: '#111216',
    graphiteCard: '#181A20',
    subtleBorder: '#262832',
    brightSilver: '#F1F5F9',
    mutedSilver: '#94A3B8',
    coolSlate: '#64748B'
  }
};
