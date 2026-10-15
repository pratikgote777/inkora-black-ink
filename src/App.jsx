import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductIntro from './components/ProductIntro';
import ProductDetails from './components/ProductDetails';
import AdvantagesDisadvantages from './components/AdvantagesDisadvantages';
import ColourShowcase from './components/ColourShowcase';
import FormulationProcess from './components/FormulationProcess';
import ProjectGallery from './components/ProjectGallery';
import CostBreakdown from './components/CostBreakdown';
import ProductShowcase from './components/ProductShowcase';
import IngredientsSection from './components/IngredientsSection';
import OurStory from './components/OurStory';
import ProductObservations from './components/ProductObservations';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#090A0C] text-[#F1F5F9] flex flex-col font-sans selection:bg-white/20 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* A/B: Hero Section */}
        <HeroSection />

        {/* C: Product Introduction ("Small Bottle. Big Ideas.") */}
        <ProductIntro />

        {/* D: Product Details & Editable Measured Batch Volume */}
        <ProductDetails />

        {/* Advantages & Disadvantages Evaluation Section */}
        <AdvantagesDisadvantages />

        {/* E: Color Swatches & Hex Palette ("Colour in Motion.") */}
        <ColourShowcase />

        {/* F: The Formulation Process ("From Ingredients to Black Ink" with 8 steps & Cooling) */}
        <FormulationProcess />

        {/* Dedicated Photo & Video Documentation Gallery ("Inside the INKORA Project" & "Watch the Process") */}
        <ProjectGallery />

        {/* Section 1: Static Ink Production Cost Breakdown Table ("Where Every Rupee Goes") */}
        <CostBreakdown />

        {/* Section 2: Black Ink Product Showcase Card ("Meet Our Product") */}
        <ProductShowcase />

        {/* G: Ingredients and Their Roles (Real Photographs + Earlier Trials) */}
        <IngredientsSection />

        {/* H: Our Story ("Innovation Starts at the Lab Bench.") */}
        <OurStory />

        {/* I: Product Observations (Interactive Lab Journal for Black Ink) */}
        <ProductObservations />

        {/* J: Frequently Asked Questions */}
        <FaqSection />

        {/* K: Contact Section ("Have a Question? Let's Talk.") */}
        <ContactSection />
      </main>

      {/* L: Footer */}
      <Footer />

      {/* Back to Top floating shortcut */}
      <BackToTop />
    </div>
  );
}
