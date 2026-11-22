import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  const scrollToHero = (e) => {
    e.preventDefault();
    const el = document.getElementById('hero-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      const input = el.querySelector('input');
      if (input) input.focus();
    }
  };

  return (
    <>
      {/* Top Festive Announcement Banner (Matches Claude format) */}
      <div className="bg-[#f59e0b] text-slate-950 px-4 py-2 text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm">
        <span>🎉 Festive Season: <strong>50% off setup and monthly fee</strong>. Limited onboarding slots this month.</span>
        <button 
          onClick={scrollToHero}
          className="underline font-black hover:text-black transition-colors cursor-pointer ml-1 inline-flex items-center gap-0.5"
        >
          Claim your slot →
        </button>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#070d1e]/90 border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center font-black text-slate-950 text-xl shadow-glow-emerald">
              F
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-white">
                FloCommerce
              </span>
              <span className="block text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                Gulf Dropshipping
              </span>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold text-slate-300">
            <a href="#comparison" className="hover:text-emerald-400 transition-colors">
              Why Gulf
            </a>
            <a href="#results" className="hover:text-emerald-400 transition-colors">
              Proof
            </a>
            <a href="#economics" className="hover:text-emerald-400 transition-colors">
              Economics
            </a>
            <a href="#delivery" className="hover:text-emerald-400 transition-colors">
              Delivery
            </a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">
              Pricing
            </a>
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              1 AED = <strong className="text-white">Rs.26.18</strong>
            </div>

            {/* Amber pill button (matches Claude styling, scrolls to lead form instead of meeting page) */}
            <button
              onClick={scrollToHero}
              className="px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-slate-950 bg-[#f59e0b] hover:bg-[#fbbf24] shadow-lg shadow-amber-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
