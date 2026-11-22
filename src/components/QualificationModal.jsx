import React, { useState, useEffect } from 'react';
import { QUALIFICATION_QUESTIONS } from '../data/questions';
import { submitLeadToGoogleSheet } from '../services/sheetService';
import confetti from 'canvas-confetti';
import { CheckCircle2, AlertCircle, X, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

export default function QualificationModal({ isOpen, onClose, initialData = { name: '', phone: '' } }) {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    phone: initialData.phone || '',
    experience: '',
    adSpend: '',
    launchTimeline: '',
    serviceFeeAffordable: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update initial data whenever modal is opened
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        name: initialData.name || prev.name,
        phone: initialData.phone || prev.phone,
      }));
      setIsSuccess(false);
      setErrorMsg('');
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleSelectOption = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrorMsg('');
  };

  const allAnswered = Boolean(
    formData.experience &&
    formData.adSpend &&
    formData.launchTimeline &&
    formData.serviceFeeAffordable
  );

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Name and Phone number are required');
      return;
    }
    if (!formData.experience || !formData.adSpend || !formData.launchTimeline || !formData.serviceFeeAffordable) {
      setErrorMsg('Please answer all 4 questions from the dropdowns');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await submitLeadToGoogleSheet(formData);
      setIsSuccess(true);

      // Meta Pixel Event for Completed Application
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        try {
          window.fbq('track', 'CompleteRegistration', {
            content_name: 'GCC Store Qualification Completed',
            currency: 'INR',
            value: 20000,
            status: true
          });
        } catch (e) {
          console.debug('Pixel track notice:', e);
        }
      }

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const answeredCount = [
    formData.experience,
    formData.adSpend,
    formData.launchTimeline,
    formData.serviceFeeAffordable
  ].filter(Boolean).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-hidden">
      <div 
        className="relative w-full max-w-lg max-h-[90vh] bg-[#0c152e] border border-blue-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Progress bar */}
        <div className="w-full bg-slate-800 h-1.5 flex-shrink-0">
          <div 
            className="h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300"
            style={{ width: isSuccess ? '100%' : `${(answeredCount / 4) * 100}%` }}
          />
        </div>

        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800/80 flex items-center justify-between flex-shrink-0 bg-[#091024]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                Quick Qualification · {answeredCount}/4 Selected
              </span>
              <span className="text-xs text-slate-300 font-medium truncate max-w-[180px]">
                {formData.name}
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white mt-1">
              GCC Store Qualification
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800/60 hover:bg-slate-800 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Error Alert */}
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* 4 Questions rendered as clean dropdowns on a single screen */}
              {QUALIFICATION_QUESTIONS.map((q, idx) => {
                const isSelected = Boolean(formData[q.field]);
                return (
                  <div key={q.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <label className="block text-xs sm:text-sm font-bold text-white mb-1">
                      <span className="text-emerald-400 font-mono mr-1.5">Q{idx + 1}.</span>
                      {q.title} <span className="text-emerald-400">*</span>
                    </label>
                    {q.subtitle && (
                      <p className="text-[11px] text-slate-400 mb-2 leading-tight">
                        {q.subtitle}
                      </p>
                    )}

                    <div className="relative">
                      <select
                        required
                        value={formData[q.field]}
                        onChange={(e) => handleSelectOption(q.field, e.target.value)}
                        className={`w-full px-3.5 py-2.5 bg-slate-950/90 border rounded-xl text-xs sm:text-sm appearance-none focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 cursor-pointer pr-10 transition-all ${
                          isSelected 
                            ? 'text-white border-emerald-500/40 font-medium' 
                            : 'text-slate-400 border-slate-700/80'
                        }`}
                      >
                        <option value="" disabled className="bg-slate-900 text-slate-500">
                          Select an answer...
                        </option>
                        {q.options.map((opt) => (
                          <option key={opt.label} value={opt.label} className="bg-slate-900 text-white py-1">
                            {opt.label} {opt.tag && opt.tag !== opt.label ? `— ${opt.tag}` : ''}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                );
              })}

              {/* Submit CTA Button inside scrollable area */}
              <button
                type="submit"
                disabled={!allAnswered || isSubmitting}
                className="w-full mt-4 py-3.5 px-6 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 disabled:opacity-40 disabled:pointer-events-none shadow-glow-emerald hover:shadow-emerald-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="py-4 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                Application Submitted Successfully!
              </h3>
              <p className="text-slate-300 text-xs max-w-xs mx-auto mb-4">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your qualification application has been received.
              </p>

              {/* Application Details Summary */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 text-left text-xs space-y-2 mb-4">
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-400">Phone:</span>
                  <span className="text-white font-medium">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-400">Experience:</span>
                  <span className="text-white font-medium text-right max-w-[220px]">{formData.experience}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-400">Daily Ad Spend:</span>
                  <span className="text-emerald-400 font-semibold">₹{formData.adSpend} / day</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-400">Launch Timeline:</span>
                  <span className="text-white font-medium text-right max-w-[220px]">{formData.launchTimeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Service Fee (₹20K):</span>
                  <span className="text-white font-medium">{formData.serviceFeeAffordable}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-slate-300 mb-4">
                Our Senior GCC Onboarding Director will contact you at <strong className="text-emerald-400">{formData.phone}</strong> to review your store setup.
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-glow-emerald cursor-pointer"
              >
                Close & Return to Proposal
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
