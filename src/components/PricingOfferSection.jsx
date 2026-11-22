import React from 'react';
import { Check, Star, Sparkles, Gift, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export default function PricingOfferSection({ onOpenModal }) {
  const inclusions = [
    { title: 'Winning Products Selection', desc: 'Pre-vetted items with higher margin and exceptional ROAS track record in GCC.' },
    { title: '80% Delivery-Rate Track Record', desc: 'Products selected specifically for high COD acceptance and low return friction.' },
    { title: 'High-Converting Shopify Store', desc: 'Custom mobile-first GCC landing page built for high conversion and COD checkouts.' },
    { title: 'International Agency Ad Account', desc: 'With just 3–5% ad spend commission — unbannable agency tier for smooth scaling.' },
    { title: 'Dedicated Zambeel Brand Manager', desc: 'Direct WhatsApp line for managing inventory, tracking, and priority resolution.' },
    { title: 'Detailed Meta Ad Campaigns & Targeting', desc: 'Targeting calibrated to achieve aggressive ~Rs.300 CAC with creative angles.' },
    { title: 'Zambeel Gold & Diamond Plan Included', desc: 'Access to VIP pricing tier, priority account manager, and expedited fulfillment.' },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#070d1e] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            05 · Investment & Setup Fee
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Transparent Setup & Monthly Retainer
          </h2>
          <p className="text-slate-300 text-base">
            Everything you need to launch and scale profitably in the GCC, with 50% discount for the Q4 E-Commerce season.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Card 1: One-Time Setup Cost */}
          <div className="rounded-3xl p-8 bg-[#0e162c] border-2 border-emerald-500/40 relative flex flex-col justify-between shadow-glow-emerald">
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-xs uppercase tracking-wider">
              50% Off Q4 Offer
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                Month 1 Launch
              </span>
              <h3 className="text-2xl font-black text-white mb-2">
                One-Time Setup Cost
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Charged once, before the work starts. Covers complete store building, product testing, ad account setup and campaign launch.
              </p>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl sm:text-5xl font-black text-white">
                  ₹20,000
                </span>
                <span className="text-lg text-slate-500 line-through">
                  ₹40,000
                </span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  Save ₹20K
                </span>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Full Shopify store design & Gulf localization</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Winning product research with 80% delivery rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Meta ad creatives, copy & campaign setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Zambeel merchant connection & priority routing</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenModal()}
              className="w-full mt-8 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-glow-emerald transition-all"
            >
              Claim 50% Off Setup (₹20,000)
            </button>
          </div>

          {/* Card 2: Monthly Retainer Fee */}
          <div className="rounded-3xl p-8 bg-[#0c1328] border border-blue-500/30 relative flex flex-col justify-between">
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 text-xs font-bold">
              Month 2 Onwards
            </div>

            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-2">
                Ongoing Scaling
              </span>
              <h3 className="text-2xl font-black text-white mb-2">
                Monthly Retainer Fee
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Fixed monthly service fee taken before the month's work starts. We handle continuous product testing, ad optimization & scaling.
              </p>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl sm:text-5xl font-black text-white">
                  ₹15,000
                </span>
                <span className="text-lg text-slate-500 line-through">
                  ₹30,000
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  (AED 573 / mo)
                </span>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400" />
                  <span>Daily ad budget optimization & scaling support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400" />
                  <span>New winning product sourcing every week</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400" />
                  <span>Dedicated WhatsApp account manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400" />
                  <span>Option A (5% revenue) waived — flat minimum only</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenModal()}
              className="w-full mt-8 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-all"
            >
              Get Started with FloCommerce
            </button>
          </div>
        </div>

        {/* 06 · What's Covered in our Service Fee (Page 9) */}
        <div id="included" className="rounded-3xl bg-[#0f172a] border border-slate-800 p-6 sm:p-10 mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              06 · What You Get
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Everything Included in the Service Fee
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusions.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-all">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center mb-3">
                  ✓
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* MOQ Callout Box (Page 9 bottom) */}
          <div className="mt-8 p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-white block">
                MOQ Pricing (Scaling Only): Currently OFF
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                Zero stock capital needed upfront. Zambeel owns the inventory and deducts its price from the COD collected.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 whitespace-nowrap">
              Zero Upfront Stock Cost
            </span>
          </div>
        </div>

        {/* 07 · Bonus: Zambeel Gold Included (Page 10) */}
        <div className="rounded-3xl bg-gradient-to-br from-[#121c3b] via-[#0b1228] to-[#070d1e] border-2 border-amber-500/40 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold mb-3">
              <Gift className="w-3.5 h-3.5" />
              Bonus Worth $299 (Included Free)
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Zambeel Gold Subscription — Included In Your Package
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Zambeel sells Gold access as a paid tier ($299 value). In this FloCommerce onboarding package, it is bundled with your setup at zero extra cost.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 p-2">
              <img
                src="/pdf-assets/page_10_img_1.png"
                alt="Zambeel Gold Packages"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
                ★ <strong>Zambeel Gold Access Worth $299 — Included*</strong>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Winning Products Catalogue with winning creatives</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Dropshipping across UAE, KSA, Qatar, Kuwait, Oman, Bahrain & Iraq</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Discounted prices on Gold Catalogue products</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Dedicated WhatsApp group with a Zambeel Account Manager</span>
                </div>
              </div>

              <button
                onClick={() => onOpenModal()}
                className="w-full mt-4 py-4 px-6 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-emerald-400 hover:opacity-95 shadow-lg transition-all"
              >
                Claim Zambeel Gold Bundle →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
