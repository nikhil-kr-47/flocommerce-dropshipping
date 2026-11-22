import React, { useState } from 'react';
import { XCircle, CheckCircle2, TrendingUp, DollarSign, Calculator, ArrowRight } from 'lucide-react';

export default function ComparisonSection({ onOpenModal }) {
  const [ordersPerDay, setOrdersPerDay] = useState(15);

  // Calculations:
  // India Dropshipping:
  // Margin per order: ~₹150
  // Delivery rate: 60% (40% RTO losses of ~₹100 per RTO)
  // Net per order = ₹150 * 0.6 - (100 * 0.4) = ~₹50 net profit per order
  const indiaNetPerDay = ordersPerDay * 50;
  const indiaNetMonthly = indiaNetPerDay * 30;

  // GCC Dropshipping (Zambeel):
  // Margin per delivered order: ₹1,701 (65 AED @ ₹26.18)
  // Delivery rate: 75%
  // Return fee if failed: 5 AED (₹130)
  // Net profit per order = (1,701 * 0.75) - (130 * 0.25) = ~₹1,243 per order!
  const gccNetPerDay = ordersPerDay * 1243;
  const gccNetMonthly = gccNetPerDay * 30;
  const marginMultiplier = (gccNetMonthly / (indiaNetMonthly || 1)).toFixed(1);

  return (
    <section id="comparison" className="py-20 bg-[#0a1128] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            02 · Why The Gulf
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Indian Dropshipping vs GCC Dropshipping
          </h2>
          <p className="text-slate-300 text-base">
            Same ad effort, very different results. Here is why we migrate all our serious e-commerce clients to the GCC market.
          </p>
        </div>

        {/* Side by Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* THE OLD WAY: Indian Dropshipping */}
          <div className="rounded-3xl p-6 sm:p-8 bg-red-950/10 border-2 border-red-500/30 relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-6 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 font-bold text-xs uppercase tracking-wider">
              The Old Way
            </div>

            <div>
              <h3 className="text-2xl font-black text-white mt-2 mb-6 flex items-center justify-between">
                <span>Indian Dropshipping</span>
                <span className="text-xs px-2.5 py-1 rounded bg-red-500/20 text-red-400 font-mono">
                  High Risk, Tiny Profit
                </span>
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-red-500/20 flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">Supplier Scams</strong>
                    <span className="text-xs text-slate-300">
                      Unreliable suppliers, fake stock, poor-quality products, and delayed dispatch destroying customer trust.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-red-500/20 flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">Devastating High RTO</strong>
                    <span className="text-xs text-slate-300">
                      35% to 45% of COD orders are refused upon arrival and come back with heavy reverse shipping fees.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-red-500/20 flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">Very, Very Low Margin</strong>
                    <span className="text-xs text-slate-300">
                      Extremely price-sensitive buyers leave barely ₹100–₹200 margin, wiped out by a single RTO.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-red-500/20 flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">Logistics & Courier Scams</strong>
                    <span className="text-xs text-slate-300">
                      Lost parcels, weight discrepancies, and delayed or missing COD remittance holding your working capital hostage.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-red-500/20 text-xs text-red-300 font-mono">
              Outcome: 80% of Indian dropshippers quit within 60 days due to negative cash flow.
            </div>
          </div>

          {/* THE FLOCOMMERCE WAY: GCC / International Dropshipping */}
          <div className="rounded-3xl p-6 sm:p-8 bg-emerald-950/15 border-2 border-emerald-500/40 relative flex flex-col justify-between shadow-glow-emerald">
            <div className="absolute -top-3.5 left-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
              The FloCommerce Way
            </div>

            <div>
              <h3 className="text-2xl font-black text-white mt-2 mb-6 flex items-center justify-between">
                <span>GCC / International Dropshipping</span>
                <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold">
                  5x Margin & Cash Flow
                </span>
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">5x Margin on Every Product</strong>
                    <span className="text-xs text-slate-300">
                      Substantially higher selling prices (e.g. 170 AED / ₹4,451) and affluent Gulf buyers with massive purchasing power.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">70% – 80% Delivery Rate</strong>
                    <span className="text-xs text-slate-300">
                      Verified GCC phone confirmation + VIP courier routing. Most COD orders are happily accepted and paid for.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">1–2 Days Ultra-Fast Delivery</strong>
                    <span className="text-xs text-slate-300">
                      Local Zambeel warehouses across Dubai, Riyadh, Kuwait & Muscat dispatch immediately to keep customer intent blazing hot.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">Every Week Monday Remittance</strong>
                    <span className="text-xs text-slate-300">
                      Invoice generated every Friday, direct automated wire payout to your Indian Bank Account every Monday morning.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-500/30 text-xs text-emerald-300 font-mono font-semibold">
              Outcome: Predictable weekly profit with Zambeel holding 100% of inventory risk.
            </div>
          </div>
        </div>

        {/* Big 5x Callout Card from Page 5 */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#111e42] via-[#0d1733] to-[#0a1128] border-2 border-emerald-500/40 shadow-2xl flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-950 text-4xl sm:text-5xl font-black flex items-center justify-center flex-shrink-0 shadow-glow-emerald">
            5x
          </div>
          <div className="flex-1">
            <h4 className="text-xl sm:text-2xl font-black text-white mb-2">
              The same product, the same ads — five times the margin.
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              In the Gulf, Zambeel owns the physical stock and handles local customs and delivery, so you never risk your hard-earned capital on inventory, and your COD profit comes straight back into your Indian bank account every single week.
            </p>
          </div>
          <button
            onClick={() => onOpenModal()}
            className="whitespace-nowrap px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-glow-emerald"
          >
            Switch to Gulf Now
          </button>
        </div>

        {/* Interactive ROI Calculator */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0e162c] border border-blue-500/20">
          <div className="flex items-center gap-2 mb-6">
            <Calculator className="w-5 h-5 text-emerald-400" />
            <h4 className="text-lg font-bold text-white">
              Interactive Profit Comparison Calculator
            </h4>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
              <span>Orders per day target:</span>
              <span className="text-emerald-400 font-bold text-sm">{ordersPerDay} orders/day</span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              step="5"
              value={ordersPerDay}
              onChange={(e) => setOrdersPerDay(Number(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>5 orders/day</span>
              <span>50 orders/day</span>
              <span>100 orders/day</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/20">
              <span className="text-xs text-red-300 font-semibold block mb-1">
                Estimated Net Monthly Profit (India)
              </span>
              <div className="text-2xl font-black text-slate-200">
                ₹{indiaNetMonthly.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-slate-400 mt-1 block">
                After severe RTO shipping deductions & low margins
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 shadow-glow-emerald">
              <span className="text-xs text-emerald-300 font-semibold block mb-1">
                Estimated Net Monthly Profit (GCC Gulf with Zambeel)
              </span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                ₹{gccNetMonthly.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-emerald-300/80 mt-1 block font-medium">
                🚀 Over {marginMultiplier}x more net profit deposited to your bank!
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
