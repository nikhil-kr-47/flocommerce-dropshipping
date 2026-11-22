import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050914] border-t border-slate-800 text-slate-400 text-xs py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <img 
              src="/flocommerce-logo.png" 
              alt="FloCommerce" 
              className="h-7 sm:h-8 w-auto object-contain"
            />
            <span className="block text-[11px] text-slate-500">
              Dropshipping in the Gulf · Powered by Zambeel
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs">
            <a href="#results" className="hover:text-emerald-400 transition-colors">Results</a>
            <a href="#comparison" className="hover:text-emerald-400 transition-colors">India vs GCC</a>
            <a href="#economics" className="hover:text-emerald-400 transition-colors">Economics</a>
            <a href="#delivery" className="hover:text-emerald-400 transition-colors">Delivery</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
            title="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Metadata & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © 2026 FLOCOMMERCE. Confidential Proposal. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified Zambeel Gold Partnership</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
