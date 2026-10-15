import React, { useState } from 'react';
import { Edit2, RotateCcw, Save, AlertCircle, Calendar, Eye, Activity, Clock, FileText, CheckCircle2 } from 'lucide-react';

const DEFAULT_OBSERVATIONS = {
  observedColour: 'Deep opaque black with neutral undertones (iron-gallate complex)',
  batchVolume: 'To be measured',
  flowConsistency: 'Low-to-medium viscosity; uniform dip nib capillary release',
  dryingTime: '~35 – 50 seconds on 80gsm copy paper',
  paperCompatibility: 'Tested on 80gsm copy paper and 120gsm cotton card; feathering minimal',
  experimentDate: '2026-10-14',
  operatorNotes: 'Heated tea tannin extract cooled to 21°C before FeSO₄ addition. Instant deep black precipitate stabilized with hydrated gum arabic. No sedimentation after 48h observation.'
};

export default function ProductObservations() {
  const [observations, setObservations] = useState(() => {
    try {
      const saved = localStorage.getItem('inkora_observations');
      return saved ? JSON.parse(saved) : DEFAULT_OBSERVATIONS;
    } catch {
      return DEFAULT_OBSERVATIONS;
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(observations);
  const [saveToast, setSaveToast] = useState(false);

  const startEditing = () => {
    setFormData(observations);
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setObservations(formData);
    localStorage.setItem('inkora_observations', JSON.stringify(formData));
    setIsEditing(false);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm('Reset all experimental observation values to original laboratory log status?')) {
      setObservations(DEFAULT_OBSERVATIONS);
      setFormData(DEFAULT_OBSERVATIONS);
      localStorage.removeItem('inkora_observations');
      setIsEditing(false);
    }
  };

  const items = [
    {
      key: 'observedColour',
      label: 'Observed Colour',
      icon: Eye,
      value: observations.observedColour,
      hint: 'Visual shade description under daylight'
    },
    {
      key: 'batchVolume',
      label: 'Measured Batch Volume',
      icon: Activity,
      value: observations.batchVolume,
      hint: 'Graduated cylinder volume yield'
    },
    {
      key: 'flowConsistency',
      label: 'Flow Consistency',
      icon: Activity,
      value: observations.flowConsistency,
      hint: 'Viscosity & capillary delivery'
    },
    {
      key: 'dryingTime',
      label: 'Drying Time',
      icon: Clock,
      value: observations.dryingTime,
      hint: 'Smudge test threshold on test sheets'
    },
    {
      key: 'paperCompatibility',
      label: 'Paper Compatibility',
      icon: FileText,
      value: observations.paperCompatibility,
      hint: 'Feathering & bleedthrough evaluation'
    },
    {
      key: 'experimentDate',
      label: 'Date of Experiment',
      icon: Calendar,
      value: observations.experimentDate,
      hint: 'Laboratory session date'
    }
  ];

  return (
    <section id="observations" className="py-24 bg-[#090A0C] border-t border-[#1E2028] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#94A3B8] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]"></span>
              Lab Journal Records · Black Ink
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Product Observations
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Real-time documented observations recorded at the lab bench for the black ink batch. This log enables our student team to update empirical findings as new tests and measurements are completed.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            {!isEditing ? (
              <button
                type="button"
                onClick={startEditing}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-medium bg-[#E2E8F0] text-[#090A0C] hover:bg-white transition-colors shadow-xs"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit Observations</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-medium text-[#94A3B8] hover:text-[#EF4444] hover:bg-[#2A1D1A] transition-colors"
                title="Reset to defaults"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>
            )}
          </div>
        </div>

        {/* Save confirmation toast */}
        {saveToast && (
          <div className="mb-6 p-4 rounded-xl bg-[#064E3B]/40 border border-[#059669]/60 text-[#A7F3D0] flex items-center gap-2.5 text-xs font-mono animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
            <span>Observations successfully updated and saved locally in your lab session log.</span>
          </div>
        )}

        {/* Observation Cards / View Mode */}
        {!isEditing ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 reveal">
            {items.map((item, idx) => {
              const Icon = item.icon;
              const isUnmeasured = item.value === 'To be measured' || item.value === 'Not tested';
              return (
                <div
                  key={item.key}
                  className={`bg-[#14151B] rounded-3xl p-6 border border-[#262832] shadow-editorial flex flex-col justify-between reveal stagger-${(idx % 6) + 1}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-[#E2E8F0]" />
                        {item.label}
                      </span>
                      {isUnmeasured && (
                        <span className="text-[10px] font-mono bg-[#1E2028] text-[#94A3B8] px-2 py-0.5 rounded border border-[#2F323F]">
                          Pending
                        </span>
                      )}
                    </div>
                    
                    <p className={`text-base font-serif font-bold leading-snug mb-3 ${
                      isUnmeasured ? 'text-[#71717A] italic' : 'text-white'
                    }`}>
                      {item.value}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1F212B] text-[11px] font-mono text-[#64748B]">
                    {item.hint}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Edit Mode Form */
          <form onSubmit={handleSave} className="bg-[#14151B] rounded-3xl p-6 sm:p-8 border border-[#3F4354] shadow-editorial-lg mb-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#262832]">
              <h3 className="font-serif text-xl font-bold text-white">
                Update Black Ink Lab Observations
              </h3>
              <span className="text-xs font-mono text-[#94A3B8]">
                Laboratory Log Book Form
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Observed Colour */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2">
                  Observed Colour
                </label>
                <input
                  type="text"
                  name="observedColour"
                  value={formData.observedColour}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#0E0F13] border border-[#262832] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white text-white"
                  placeholder="e.g. Deep opaque black / Not tested"
                  required
                />
              </div>

              {/* Measured Batch Volume */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2">
                  Measured Batch Volume
                </label>
                <input
                  type="text"
                  name="batchVolume"
                  value={formData.batchVolume}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#0E0F13] border border-[#262832] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white text-white"
                  placeholder="e.g. 45 ml or To be measured"
                  required
                />
              </div>

              {/* Flow Consistency */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2">
                  Flow Consistency
                </label>
                <input
                  type="text"
                  name="flowConsistency"
                  value={formData.flowConsistency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#0E0F13] border border-[#262832] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white text-white"
                  placeholder="e.g. Moderate dip flow / Not tested"
                  required
                />
              </div>

              {/* Drying Time */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2">
                  Drying Time
                </label>
                <input
                  type="text"
                  name="dryingTime"
                  value={formData.dryingTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#0E0F13] border border-[#262832] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white text-white"
                  placeholder="e.g. ~45 seconds on 80gsm / To be measured"
                  required
                />
              </div>

              {/* Paper Compatibility */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2">
                  Paper Compatibility
                </label>
                <input
                  type="text"
                  name="paperCompatibility"
                  value={formData.paperCompatibility}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#0E0F13] border border-[#262832] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white text-white"
                  placeholder="e.g. Tested on standard copy paper / Not tested"
                  required
                />
              </div>

              {/* Date of Experiment */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2">
                  Date of Experiment
                </label>
                <input
                  type="date"
                  name="experimentDate"
                  value={formData.experimentDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#0E0F13] border border-[#262832] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white text-white"
                  required
                />
              </div>
            </div>

            {/* Operator Notes */}
            <div className="mb-6">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2">
                Operator Bench Notes
              </label>
              <textarea
                name="operatorNotes"
                rows="3"
                value={formData.operatorNotes}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-[#0E0F13] border border-[#262832] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white text-white"
                placeholder="Enter specific practical observations, cooling observations, or test parameters..."
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#262832]">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-5 py-2.5 rounded-xl text-xs font-mono font-medium text-[#94A3B8] hover:bg-[#1E2028] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-mono font-medium bg-[#E2E8F0] text-[#090A0C] hover:bg-white transition-colors shadow-xs"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Observations</span>
              </button>
            </div>
          </form>
        )}

        {/* Bench Notes Display */}
        {!isEditing && observations.operatorNotes && (
          <div className="mb-8 p-6 rounded-2xl bg-[#14151B] border border-[#262832] reveal">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71717A] block mb-2">
              Latest Recorded Bench Notes
            </span>
            <p className="text-sm text-[#CBD5E1] italic font-serif leading-relaxed">
              "{observations.operatorNotes}"
            </p>
          </div>
        )}

        {/* Academic Integrity Disclosure */}
        <div className="p-5 rounded-2xl bg-[#14151B] border border-[#262832] flex items-start gap-3.5 reveal">
          <AlertCircle className="w-5 h-5 text-[#94A3B8] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            <strong className="font-semibold text-white">Observation Integrity:</strong> The metrics displayed above represent raw experimental observations logged by student researchers during black ink trials. They are not independently verified commercial product specifications, certifications, or permanence warranties. Unchecked variables default to <em>"Not tested"</em> or <em>"To be measured"</em>.
          </div>
        </div>

      </div>
    </section>
  );
}
