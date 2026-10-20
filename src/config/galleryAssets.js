/**
 * INKORA Black Ink - Discovered Project Media Manifest
 * Contains verified image and video assets discovered in the project workspace.
 */

import { getAssetUrl } from '../utils/assetUrl';

export const GALLERY_PHOTOS = [
  {
    id: 'photo-stirring-ink',
    title: 'Reaction Agitation & Iron Gallate Complexation',
    category: 'Preparation Process',
    src: getAssetUrl('/images/gallery/student-stirring-black-ink.jpeg'),
    originalFilename: 'WhatsApp Image 2026-10-13 at 5.28.26 PM.jpeg',
    caption: 'Student researcher actively agitating the black iron-tannin precipitate reaction in a laboratory beaker using a borosilicate glass stirring rod.',
    location: 'Information Technology / Chemical Eng Bench, MIT AOE, Alandi, Maharashtra',
    timestamp: '2026-10-13 · Practical Lab Session',
    tags: ['Active Stirring', 'Iron-Tannin', 'Reaction Beaker', 'Student Inquiry'],
    aspect: 'aspect-3/4'
  },
  {
    id: 'photo-safety-mixing',
    title: 'Bench Preparation Under Safety Protocols',
    category: 'Laboratory Setup',
    src: getAssetUrl('/images/gallery/chemical-safety-bench-mixing.jpeg'),
    originalFilename: 'WhatsApp Image 2026-10-13 at 5.30.09 PM.jpeg',
    caption: 'Student formulation team working at the wet lab bench beneath the School of Chemical Engineering Safety Protocol guidelines, mixing solution components in glass beakers.',
    location: 'School of Chemical Engineering, MIT AOE, Alandi, Maharashtra',
    timestamp: '2026-10-13 · Practical Lab Session',
    tags: ['Safety Rules', 'Team Collaboration', 'Solution Prep', 'Lab Glassware'],
    aspect: 'aspect-3/4'
  },
  {
    id: 'photo-analytical-balance',
    title: 'Analytical Weighing of Acacia Gum Arabic',
    category: 'Ingredients & Weighing',
    src: getAssetUrl('/images/gallery/analytical-balance-gum-arabic.jpeg'),
    originalFilename: 'WhatsApp Image 2026-10-13 at 5.31.16 PM.jpeg',
    caption: 'Precision analytical laboratory balance measurement of Acacia (Gum Arabic) powder using a laboratory spatula from an SRL reagent vessel.',
    location: 'Chemical Engineering Department, MIT AOE, Alandi, Maharashtra',
    timestamp: '2026-10-13 · Practical Lab Session',
    tags: ['Analytical Balance', 'Gum Arabic', 'Acacia Powder', 'Mass Calibration'],
    aspect: 'aspect-3/4'
  },
  {
    id: 'photo-ferrous-sulfate',
    title: 'Ferrous Sulphate Heptahydrate Crystals',
    category: 'Ingredients & Weighing',
    src: getAssetUrl('/images/ingredients/ferrous-sulfate.jpg'),
    originalFilename: 'ferrous-sulfate.jpg',
    caption: 'Analytical grade FeSO₄·7H₂O pale-green crystals. Supplies Fe²⁺ ions that coordinate with tea tannin catechol groups to yield deep black opacity.',
    location: 'Laboratory Reagent Stock',
    timestamp: 'Lab Chemical Precursor',
    tags: ['FeSO4', 'Iron(II)', 'Crystals', 'Chromophore Precursor'],
    aspect: 'aspect-4/3'
  },
  {
    id: 'photo-gum-arabic-raw',
    title: 'Natural Gum Arabic (Acacia Senegalis)',
    category: 'Ingredients & Weighing',
    src: getAssetUrl('/images/ingredients/gum-arabic.jpg'),
    originalFilename: 'gum-arabic.jpg',
    caption: 'Natural Acacia polysaccharide resin flakes before hydration and dispersion as a protective colloid binder.',
    location: 'Laboratory Reagent Stock',
    timestamp: 'Colloidal Binder',
    tags: ['Acacia Resin', 'Protective Colloid', 'Viscosity Modifier'],
    aspect: 'aspect-4/3'
  },
  {
    id: 'photo-tea-extract',
    title: 'Thermal Tannin Broth Extraction',
    category: 'Preparation Process',
    src: getAssetUrl('/images/ingredients/tea-extract.jpg'),
    originalFilename: 'tea-extract.jpg',
    caption: 'Infused botanical polyphenols and hydrolysable gallotannins prepared via thermal extraction from black tea leaves.',
    location: 'Laboratory Glassware Infusion',
    timestamp: 'Thermal Extraction',
    tags: ['Polyphenols', 'Tannic Acid', 'Botanical Precursor'],
    aspect: 'aspect-4/3'
  },
  {
    id: 'photo-glycerine',
    title: 'Trihydroxy Humectant Glycerine',
    category: 'Ingredients & Weighing',
    src: getAssetUrl('/images/ingredients/glycerine.jpg'),
    originalFilename: 'glycerine.jpg',
    caption: 'High-purity liquid glycerine (C₃H₈O₃) providing hygroscopic moisture retention to prevent dip-pen nib crusting.',
    location: 'Laboratory Solvent Station',
    timestamp: 'Humectant Reagent',
    tags: ['Glycerine', 'Hygroscopic', 'Nib Lubrication'],
    aspect: 'aspect-4/3'
  },
  {
    id: 'photo-product-specimen',
    title: 'INKORA Black Ink Physical Formulation Specimen',
    category: 'Final Product & Swatches',
    src: getAssetUrl('/images/products/real-inkora-black-ink-bottle.jpeg'),
    originalFilename: 'WhatsApp Image 2026-10-14 at 10.18.24 AM.jpeg',
    caption: 'Real physical formulation bottle filled with deep black iron-tannin ink on the laboratory bench at the School of Chemical Engineering, MIT AOE.',
    location: 'School of Chemical Engineering, MIT AOE, Alandi, Maharashtra',
    timestamp: '2026-10-14 · Physical Formulation',
    tags: ['Real Specimen', 'Black Ink Bottle', 'MIT AOE', 'Verified Sample'],
    aspect: 'aspect-3/4'
  },
  {
    id: 'photo-paper-swatches',
    title: 'Cotton Paper Stroke & Dilution Swatch',
    category: 'Final Product & Swatches',
    src: null,
    fallbackType: 'swatch',
    caption: 'Dip-pen calligraphy, 0.3mm crosshatching, and wet tonal dilution wash tested on 120 gsm pure cotton paper.',
    location: 'Empirical Paper Testing Bench',
    timestamp: 'Substrate Assay #04',
    tags: ['Paper Swatch', '120gsm Cotton', 'Capillary Flow', 'Wash Gradient'],
    aspect: 'aspect-4/3'
  }
];

export const GALLERY_VIDEOS = [
  {
    id: 'video-stirring-short',
    title: 'Black Ink Fluid Agitation & Meniscus',
    category: 'Preparation Process',
    src: getAssetUrl('/videos/black-ink-stirring-short.mp4'),
    originalFilename: 'WhatsApp Video 2026-10-13 at 5.28.25 PM.mp4',
    duration: '0:05',
    caption: 'Direct laboratory video recording demonstrating the rapid rotational agitation of the black ink precipitate in a beaker with a glass rod, showing the deep black opacity and fluid meniscus.',
    tags: ['Continuous Stirring', 'Fluid Dispersion', 'Opaque Black'],
    stage: 'Complexation Agitation'
  },
  {
    id: 'video-formulation-reaction-1',
    title: 'Iron(II) & Tannin Reaction Dynamics',
    category: 'Preparation Process',
    src: getAssetUrl('/videos/ink-formulation-reaction-1.mp4'),
    originalFilename: 'WhatsApp Video 2026-10-13 at 5.29.36 PM.mp4',
    duration: '0:19',
    caption: 'Laboratory bench video capturing the continuous coordination reaction between iron(II) sulfate and botanical tannins, highlighting the progressive color deepening in the beaker.',
    tags: ['Precipitate Formation', 'Organometallic Complex', 'Bench Video'],
    stage: 'Iron Gallate Reaction'
  },
  {
    id: 'video-formulation-reaction-2',
    title: 'Protective Colloid Integration & Homogeneity',
    category: 'Preparation Process',
    src: getAssetUrl('/videos/ink-formulation-reaction-2.mp4'),
    originalFilename: 'WhatsApp Video 2026-10-13 at 5.30.00 PM.mp4',
    duration: '0:18',
    caption: 'Video documenting the addition of hydrated gum arabic binder to stabilize microscopic colloidal particles, preventing settling and ensuring uniform ink delivery.',
    tags: ['Binder Integration', 'Colloidal Stability', 'Rheology Tuning'],
    stage: 'Binder Stabilization'
  }
];
