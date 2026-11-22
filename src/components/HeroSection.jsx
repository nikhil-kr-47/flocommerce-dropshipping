import React, { useState } from 'react';
import { ArrowRight, User, Phone, CheckCircle2, ShieldAlert, Sparkles, TrendingUp } from 'lucide-react';

export default function HeroSection({ onStartApplication }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleGetStarted = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      setError('Please enter a valid phone number');
      return;
    }
    setError('');
    // Trigger qualification modal with name and phone
    onStartApplication({ name: name.trim(), phone: phone.trim() });
  };

  return (
    <section className="relative pt-10 pb-20 overflow-hidden bg-[#070d1e]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Proposal Badge (from Claude format) */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400 font-mono">Confidential Proposal</span>
            <span className="text-slate-600">—</span>
            <strong className="text-white tracking-wide uppercase font-bold">EVOC LABS PRIVATE LIMITED</strong>
          </div>
        </div>

        {/* Hero Section Lead Form - Placed ABOVE the headline & tagline */}
        <div className="max-w-2xl mx-auto mb-14" id="hero-form">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1730]/95 border-2 border-emerald-500/40 shadow-2xl backdrop-blur-xl">
            <div className="text-center mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider mb-2">
                Get Started with FloCommerce
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Apply for Your Turnkey GCC Store
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Enter your name and phone number below to start your 4-question qualification.
              </p>
            </div>

            <form onSubmit={handleGetStarted} className="space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5">
                    Full Name <span className="text-emerald-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setError('');
                      }}
                      className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5">
                    Phone Number <span className="text-emerald-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setError('');
                      }}
                      className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all font-mono"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-black text-sm uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-glow-emerald hover:shadow-emerald-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Started — Answer 4 Quick Questions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>🔒 Zero upfront stock capital needed</span>
              <span className="text-emerald-400 font-medium">50% Off Q4 Offer Active</span>
            </div>
          </div>
        </div>

        {/* Center Main Headline & Tagline (Positioned below the form) */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6">
            Stop fighting RTO in India.{' '}
            <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">
              Earn 5x the margin
            </span>{' '}
            dropshipping in the Gulf.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            We build your high-converting store, pick proven winning products, and handle fulfillment with Zambeel — you never touch inventory and collect weekly profits directly in your Indian bank.
          </p>

          {/* Quick value props */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs sm:text-sm text-slate-300 font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>5x Higher Margins</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>70–80% Delivery Rate</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>1–2 Days Gulf Delivery</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Every Monday Payout</span>
            </span>
          </div>
        </div>

        {/* 4 Stats Cards from PDF */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#0e162c] border border-slate-800">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                AED 146K
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                ▲ 72%
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Total sales in 1 month (Dubai store)
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0e162c] border border-slate-800">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                897
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                ▲ 85%
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Orders in a single month
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0e162c] border border-slate-800">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                7,592
              </span>
              <span className="text-xs font-bold text-blue-400">
                Verified
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Total orders placed through Zambeel
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0e162c] border border-slate-800">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                5,769
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                74%
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Delivered to customer (COD)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
