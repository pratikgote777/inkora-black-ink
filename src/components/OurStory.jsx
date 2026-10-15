import React from 'react';
import LabStoryVisual from './visuals/LabStoryVisual';
import { Compass, FlaskRound as Flask, Sparkles } from 'lucide-react';

export default function OurStory() {
  return (
    <section id="about" className="py-24 bg-[#0E0F13] border-t border-[#1E2028] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Student Story */}
          <div className="lg:col-span-7 reveal">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#94A3B8] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]"></span>
              Project Origin & Philosophy
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Innovation Starts at the <span className="italic font-normal text-[#CBD5E1]">Lab Bench.</span>
            </h2>

            {/* Core Project Story Quote */}
            <div className="relative pl-6 border-l-2 border-[#CBD5E1] mb-8">
              <p className="text-lg sm:text-xl font-serif italic text-white leading-relaxed">
                "INKORA began as a practical experiment exploring how botanical tannins, transition metal salts, and protective colloids work together in a black ink formulation. What started as a chemistry exercise became an opportunity to explore product design, branding, and the journey from a laboratory experiment to a tangible product concept."
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8">
              <p>
                As undergraduate students working in our practical chemistry and engineering laboratory, we explored how historical iron-gall ink chemistry can be re-examined using everyday botanical tannin extracts and analytical reagents. Rather than stopping at an equation on a chalkboard, we wanted to witness the instantaneous black precipitate reaction in a beaker and calibrate its fluid dynamics for writing.
              </p>
              <p>
                From heating black tea leaves and carefully cooling the extract to room temperature, to adding ferrous sulphate and stabilizing the microscopic iron-gallate particles with natural gum arabic, each step taught us real chemical principles. This website serves as the digital portfolio of that work — giving a classroom practical the presentation, precision, and visual identity of a contemporary stationery design studio.
              </p>
              <p className="text-xs font-mono text-[#CBD5E1] bg-[#14151B] p-3.5 rounded-xl border border-[#262832]">
                Note: This remains an authentic student-led academic project. The black ink formulation is actively evaluated through practical observation rather than commercial mass production.
              </p>
            </div>

            {/* Student Milestones / Practical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1F212B]">
              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-[#E2E8F0] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-white">Curiosity Driven</h4>
                  <p className="text-xs text-[#71717A] mt-0.5">Exploration beyond textbook exercises.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Flask className="w-4 h-4 text-[#E2E8F0] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-white">Empirical Rigor</h4>
                  <p className="text-xs text-[#71717A] mt-0.5">Documenting extraction, cooling & flow.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[#E2E8F0] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-white">Design Synthesis</h4>
                  <p className="text-xs text-[#71717A] mt-0.5">Where lab chemistry meets stationery craft.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Lab Editorial Visual */}
          <div className="lg:col-span-5 flex justify-center reveal stagger-2">
            <LabStoryVisual className="w-full max-w-lg" />
          </div>

        </div>

      </div>
    </section>
  );
}
