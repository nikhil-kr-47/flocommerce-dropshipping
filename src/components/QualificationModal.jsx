import React, { useState, useEffect } from 'react';
import { QUALIFICATION_QUESTIONS } from '../data/questions';
import { submitLead } from '../services/leadService';
import confetti from 'canvas-confetti';
import { CheckCircle2, ChevronRight, ChevronLeft, AlertCircle, X, ArrowRight } from 'lucide-react';

export default function QualificationModal({ isOpen, onClose, initialData = { name: '', phone: '' } }) {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    phone: initialData.phone || '',
    experience: '',
    adSpend: '',
    launchTimeline: '',
    serviceFeeAffordable: '',
  });

  const [activeStep, setActiveStep] = useState(0); // 0 to 3 for the 4 questions
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
      setActiveStep(0);
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const currentQ = QUALIFICATION_QUESTIONS[activeStep];
  const isCurrentAnswered = Boolean(formData[currentQ.field]);

  const handleSelectOption = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrorMsg('');
  };

  const handleNext = () => {
    if (!isCurrentAnswered) {
      setErrorMsg('Please select an option to proceed');
      return;
    }
    setErrorMsg('');
    if (activeStep < QUALIFICATION_QUESTIONS.length - 1) {
      setActiveStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    setErrorMsg('');
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    } else {
      // If on step 0, close modal to let user change name/phone in hero
      onClose();
    }
  };

  const handleSubmit = async () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Name and Phone number are required');
      return;
    }
    if (!formData.experience || !formData.adSpend || !formData.launchTimeline || !formData.serviceFeeAffordable) {
      setErrorMsg('Please answer all 4 questions');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await submitLead(formData);
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

  const progressPercent = Math.round(((activeStep + 1) / QUALIFICATION_QUESTIONS.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-hidden">
      <div 
        className="relative w-full max-w-md max-h-[85vh] bg-[#0c152e] border border-blue-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Progress bar */}
        <div className="w-full bg-slate-800 h-1.5 flex-shrink-0">
          <div 
            className="h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300"
            style={{ width: isSuccess ? '100%' : `${progressPercent}%` }}
          />
        </div>

        {/* Modal Header */}
        <div className="p-4 border-b border-slate-800/80 flex items-center justify-between flex-shrink-0 bg-[#091024]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                Question {activeStep + 1} of {QUALIFICATION_QUESTIONS.length}
              </span>
              <span className="text-xs text-slate-300 font-medium truncate max-w-[200px]">
                {formData.name}
              </span>
            </div>
            <h2 className="text-base font-bold text-white mt-1">
              GCC Store Qualification
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800/60 hover:bg-slate-800 transition-all"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1">
          {!isSuccess ? (
            <div>
              {/* Error Alert */}
              {errorMsg && (
                <div className="mb-3 p-2.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Question Header */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-white leading-snug">
                  {currentQ.title}
                </h3>
                {currentQ.subtitle && (
                  <p className="text-xs text-slate-400 mt-1">
                    {currentQ.subtitle}
                  </p>
                )}
              </div>

              {/* Options List */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt) => {
                  const isSelected = formData[currentQ.field] === opt.label;
                  return (
                    <div
                      key={opt.label}
                      onClick={() => handleSelectOption(currentQ.field, opt.label)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-emerald-500/15 border-emerald-400 shadow-glow-emerald text-white'
                          : 'bg-slate-900/70 border-slate-700/80 hover:border-blue-400/50 text-slate-200 hover:bg-slate-800/60'
                      }`}
                    >
                      <span className="text-sm font-medium pr-3 leading-snug">
                        {opt.label}
                      </span>

                      {/* Custom Radio Circle */}
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                          isSelected
                            ? 'border-emerald-400 bg-emerald-500'
                            : 'border-slate-500'
                        }`}
                      >
                        {isSelected && (
                          <div className="w-2 h-2 rounded-full bg-slate-950" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Step indicator dots */}
              <div className="flex items-center justify-center gap-1.5 mt-4">
                {QUALIFICATION_QUESTIONS.map((q, idx) => (
                  <div
                    key={q.id}
                    className={`h-1.5 rounded-full transition-all ${
                      activeStep === idx
                        ? 'w-5 bg-emerald-400'
                        : formData[q.field]
                        ? 'w-2 bg-blue-400'
                        : 'w-2 bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>
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
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 text-left text-xs space-y-1.5 mb-4">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Phone:</span>
                  <span className="text-white font-medium">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Experience:</span>
                  <span className="text-white font-medium">{formData.experience}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Daily Ad Spend:</span>
                  <span className="text-emerald-400 font-semibold">₹{formData.adSpend} / day</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Launch Timeline:</span>
                  <span className="text-white font-medium">{formData.launchTimeline}</span>
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
                className="w-full py-2.5 px-5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-glow-emerald"
              >
                Close & Return to Proposal
              </button>
            </div>
          )}
        </div>

        {/* Pinned Modal Footer with 100% Working Navigation Buttons */}
        {!isSuccess && (
          <div className="p-3.5 border-t border-slate-800/80 bg-[#091024] flex items-center justify-between gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={handlePrevious}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center gap-1.5 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{activeStep === 0 ? 'Edit Details' : 'Previous'}</span>
            </button>

            {activeStep < QUALIFICATION_QUESTIONS.length - 1 ? (
              <button
                type="button"
                disabled={!isCurrentAnswered}
                onClick={handleNext}
                className="px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:pointer-events-none rounded-lg flex items-center gap-1.5 transition-all"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                disabled={!isCurrentAnswered || isSubmitting}
                onClick={handleSubmit}
                className="px-5 py-2 text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 disabled:opacity-40 disabled:pointer-events-none rounded-lg shadow-glow-emerald flex items-center gap-1.5 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
