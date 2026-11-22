import React from 'react';
import { TrendingUp, ShoppingBag, ShieldCheck, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProofSection({ onOpenModal }) {
  return (
    <section id="results" className="py-20 bg-[#070d1e] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            01 · Results & Proofs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Numbers from live stores we run
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Unedited screenshots from our clients' Shopify analytics. These are real orders, from real customers in the Gulf — demonstrating actual purchasing power and fast delivery.
          </p>
        </div>

        {/* 4 Stat Cards from Page 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-[#0f172a] border border-blue-500/20">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
              Total sales (Sep 1–30)
            </span>
            <div className="text-2xl sm:text-3xl font-black text-white">
              AED 1,46,187
            </div>
            <span className="text-xs text-emerald-400 font-semibold">Dubai client store</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f172a] border border-blue-500/20">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
              Month-on-Month
            </span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 flex items-center gap-1">
              ▲ 72%
            </div>
            <span className="text-xs text-slate-400">vs previous month</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f172a] border border-blue-500/20">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
              Monthly Volume
            </span>
            <div className="text-2xl sm:text-3xl font-black text-white">
              897
            </div>
            <span className="text-xs text-slate-400">Orders in the month</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f172a] border border-emerald-500/30 bg-emerald-950/20">
            <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold block mb-1">
              Sales Value in INR
            </span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">
              ≈ Rs.38.3L
            </div>
            <span className="text-xs text-slate-400 font-mono">1 AED = ₹26.18</span>
          </div>
        </div>

        {/* Shopify Screenshots Grid (Page 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Screenshot 1 */}
          <div className="group rounded-2xl overflow-hidden bg-[#0e162e] border border-slate-700/80 hover:border-emerald-500/40 transition-all shadow-xl">
            <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-200">
                Store Analytics · Sales shipping to Dubai · Sep 1–30, 2026
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                AED 146,187.60 ▲ 72%
              </span>
            </div>
            <div className="p-2 bg-slate-950">
              <img
                src="/pdf-assets/page_2_img_1.jpeg"
                alt="Shopify Analytics Sales Dubai"
                className="w-full h-auto rounded-lg object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Screenshot 2 */}
          <div className="group rounded-2xl overflow-hidden bg-[#0e162e] border border-slate-700/80 hover:border-emerald-500/40 transition-all shadow-xl">
            <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-200">
                Single Winning Product · Tranexamic skin cream · Aug 30–Sep 29
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                ▲ 1,392% product growth
              </span>
            </div>
            <div className="p-2 bg-slate-950">
              <img
                src="/pdf-assets/page_2_img_2.jpeg"
                alt="Single Winning Product Analytics"
                className="w-full h-auto rounded-lg object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Zambeel Seller Dashboard (Page 3) */}
        <div className="rounded-3xl bg-[#0f172e] border-2 border-blue-500/20 p-6 sm:p-8 mb-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-2">
                Zambeel Fulfillment Partner Integration
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Zambeel Seller Dashboard Proof
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Our own verified Zambeel merchant account — thousands of Gulf orders shipped and delivered.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-sm">
                7,592 Total Orders
              </div>
              <div className="px-4 py-2 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 font-bold text-sm">
                74% Delivery Rate
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 p-2">
            <img
              src="/pdf-assets/page_3_img_3.png"
              alt="Zambeel Seller Dashboard"
              className="w-full h-auto rounded-xl object-contain"
              loading="lazy"
            />
          </div>

          {/* Close up stats (Page 3 top images) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Sales Over Time</span>
                <span className="text-sm font-semibold text-white">343 orders (319% growth)</span>
              </div>
              <span className="text-emerald-400 font-bold font-mono">AED 41,888.78 ▲</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Fulfilled by Zambeel</span>
                <span className="text-sm font-semibold text-white">5,769 Delivered</span>
              </div>
              <span className="text-emerald-400 font-bold font-mono">74% Success Rate</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Client Groups (Page 4) */}
        <div className="rounded-3xl bg-[#091024] border border-slate-800 p-6 sm:p-8">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              Live WhatsApp Client Transparency
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              What our client groups look like
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              From launching the first campaign to scaling a winning product — straight from our client WhatsApp groups.
            </p>
          </div>

          {/* 3 WhatsApp Phone Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* WhatsApp 1 */}
            <div className="rounded-2xl bg-slate-950 p-3 border border-slate-800 shadow-xl flex flex-col">
              <div className="mb-3 text-center">
                <span className="text-xs font-bold text-white block">First sale on day one</span>
                <span className="text-[11px] text-slate-400">Published 3:56 PM, first order 7:33 PM</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-800 flex-1">
                <img
                  src="/pdf-assets/page_4_img_1.jpeg"
                  alt="WhatsApp First Sale"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* WhatsApp 2 */}
            <div className="rounded-2xl bg-slate-950 p-3 border border-slate-800 shadow-xl flex flex-col">
              <div className="mb-3 text-center">
                <span className="text-xs font-bold text-white block">Orders coming in daily</span>
                <span className="text-[11px] text-slate-400">Invoices generated & passed for processing</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-800 flex-1">
                <img
                  src="/pdf-assets/page_4_img_2.jpeg"
                  alt="WhatsApp Orders In Daily"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* WhatsApp 3 */}
            <div className="rounded-2xl bg-slate-950 p-3 border border-slate-800 shadow-xl flex flex-col">
              <div className="mb-3 text-center">
                <span className="text-xs font-bold text-white block">Ready to scale</span>
                <span className="text-[11px] text-slate-400">7 orders in two days — scaling further</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-800 flex-1">
                <img
                  src="/pdf-assets/page_4_img_3.jpeg"
                  alt="WhatsApp Scaling"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Day 1 Callout Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/60 to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 font-black text-white text-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                Day 1
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  From launch to first order in under 4 hours.
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Our process — winning product, high-converting store and tested Meta targeting — is built to get the first sale fast, then scale what works.
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenModal()}
              className="whitespace-nowrap px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-glow-emerald transition-all"
            >
              Get Your Store Setup
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
