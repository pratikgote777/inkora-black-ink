import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate asynchronous network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setSubmissionReceipt({
        id: `INK-BLK-${Math.floor(100000 + Math.random() * 900000)}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        ...formData
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 700);
  };

  const handleResetForm = () => {
    setSubmitSuccess(false);
    setSubmissionReceipt(null);
  };

  return (
    <section id="contact" className="py-24 bg-[#090A0C] border-t border-[#1E2028] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Context, Academic Info & Social Links */}
          <div className="lg:col-span-5 flex flex-col justify-between reveal">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#94A3B8] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]"></span>
                Connect With The Student Team
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Have a Question? <span className="italic font-normal text-[#CBD5E1]">Let's Talk.</span>
              </h2>

              <p className="text-base text-[#94A3B8] leading-relaxed mb-8">
                Whether you have technical inquiries regarding our tea tannin extraction ratios, cooling stage parameters, iron(II) complexation kinetics, or would like to discuss student research collaborations, we welcome your correspondence.
              </p>

              {/* Lab Location & Contact Placeholders */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-2xl bg-[#14151B] border border-[#262832]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#71717A] block mb-1">
                    Academic Practical Lab
                  </span>
                  <p className="text-sm font-semibold text-white">
                    Department of Chemistry & Chemical Engineering
                  </p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">
                    Student Practical Laboratory Bench #04
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#14151B] border border-[#262832]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#71717A] block mb-1">
                    Project Correspondence
                  </span>
                  <p className="text-sm font-semibold text-[#E2E8F0] font-mono">
                    contact@inkora-project.edu (Placeholder)
                  </p>
                  <p className="text-xs text-[#71717A] mt-0.5">
                    Checked weekly during term laboratory sessions
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Placeholders */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#71717A] block mb-3">
                Project Repositories & Channels (Placeholders)
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono bg-[#14151B] hover:bg-[#1E2028] hover:text-white transition-colors text-[#CBD5E1] border border-[#262832]"
                  title="GitHub Research Repository Placeholder"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub / Lab-Notes</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono bg-[#14151B] hover:bg-[#1E2028] hover:text-white transition-colors text-[#CBD5E1] border border-[#262832]"
                  title="Instagram Design Log Placeholder"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram / InkoraLab</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono bg-[#14151B] hover:bg-[#1E2028] hover:text-white transition-colors text-[#CBD5E1] border border-[#262832]"
                  title="LinkedIn Research Profile Placeholder"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Client-Side Validated Form */}
          <div className="lg:col-span-7 reveal stagger-2">
            <div className="bg-[#14151B] rounded-3xl p-7 sm:p-10 border border-[#262832] shadow-editorial-lg">
              
              {!submitSuccess ? (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl font-bold text-white mb-1">
                      Send a Message
                    </h3>
                    <p className="text-xs text-[#94A3B8]">
                      Fill out the form below to transmit your academic or formulation query.
                    </p>
                  </div>

                  <div className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                        Your Name <span className="text-white">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Eleanor Vance or Alex Miller"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0E0F13] border text-sm text-white focus:outline-none focus:ring-2 focus:ring-white transition-colors ${
                          errors.name ? 'border-[#EF4444] bg-[#2A1616]' : 'border-[#262832]'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-[#F87171] flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                        Email Address <span className="text-white">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@university.edu"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0E0F13] border text-sm text-white focus:outline-none focus:ring-2 focus:ring-white transition-colors ${
                          errors.email ? 'border-[#EF4444] bg-[#2A1616]' : 'border-[#262832]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-[#F87171] flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                        Subject <span className="text-white">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Inquiry regarding iron-tannin complex stabilization"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0E0F13] border text-sm text-white focus:outline-none focus:ring-2 focus:ring-white transition-colors ${
                          errors.subject ? 'border-[#EF4444] bg-[#2A1616]' : 'border-[#262832]'
                        }`}
                      />
                      {errors.subject && (
                        <p className="mt-1.5 text-xs text-[#F87171] flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                        Message <span className="text-white">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please share your questions, suggestions, or feedback regarding the black ink formulation..."
                        className={`w-full px-4 py-3 rounded-xl bg-[#0E0F13] border text-sm text-white focus:outline-none focus:ring-2 focus:ring-white transition-colors ${
                          errors.message ? 'border-[#EF4444] bg-[#2A1616]' : 'border-[#262832]'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-[#F87171] flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Client-side Note */}
                    <div className="p-3 rounded-xl bg-[#0F1014] border border-[#262832] text-[11px] text-[#94A3B8] leading-relaxed">
                      <strong>Client-Side Verification:</strong> Form incorporates real client-side validation. In this prototype deployment, inquiries generate an on-screen simulation receipt ready for email service integration.
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase bg-[#E2E8F0] text-[#090A0C] hover:bg-white transition-all duration-300 shadow-editorial disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Validating & Recording...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Clear Success State */
                <div className="py-6 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#064E3B]/40 border border-[#059669]/60 text-[#34D399] flex items-center justify-center mx-auto mb-5 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    Inquiry Documented
                  </h3>
                  <p className="text-sm text-[#94A3B8] max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-white">{submissionReceipt.name}</strong>. Your message has passed client validation and been captured into the student project inquiry record.
                  </p>

                  {/* Submission Receipt Box */}
                  <div className="bg-[#0E0F13] rounded-2xl p-5 border border-[#262832] text-left max-w-md mx-auto mb-6 font-mono text-xs text-[#94A3B8] space-y-1.5">
                    <div className="flex justify-between border-b border-[#1F212B] pb-2 mb-2">
                      <span className="text-[#71717A]">Receipt ID:</span>
                      <span className="font-bold text-white">{submissionReceipt.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71717A]">Time:</span>
                      <span>{submissionReceipt.timestamp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71717A]">Sender:</span>
                      <span className="truncate max-w-[200px] text-white">{submissionReceipt.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71717A]">Subject:</span>
                      <span className="truncate max-w-[200px] text-white">{submissionReceipt.subject}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono font-medium bg-[#E2E8F0] text-[#090A0C] hover:bg-white transition-colors"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
