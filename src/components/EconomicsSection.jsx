import React, { useState } from 'react';
import { Coins, CheckCircle, HelpCircle, ArrowRight, DollarSign } from 'lucide-react';

export default function EconomicsSection({ onOpenModal }) {
  const [sellingPriceAED, setSellingPriceAED] = useState(170);
  const [productCostAED, setProductCostAED] = useState(85);
  const [deliveryCostAED, setDeliveryCostAED] = useState(20);
  const AED_RATE = 26.18;

  const totalDeductionsAED = productCostAED + deliveryCostAED;
  const resellerProfitAED = Math.max(0, sellingPriceAED - totalDeductionsAED);
  const resellerProfitINR = (resellerProfitAED * AED_RATE).toFixed(2);

  return (
    <section id="economics" className="py-20 bg-[#070d1e] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            03 · The Economics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            What you earn on every single order
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Transparent per-unit economics settled automatically out of the customer's COD cash. Zero upfront inventory purchase required.
          </p>
        </div>

        {/* Part 1: Zambeel Quoted Price vs Reseller Margin Table */}
        <div className="rounded-3xl bg-[#0f172a] border border-slate-800 p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">
              1
            </span>
            <h3 className="text-xl font-bold text-white">
              Zambeel Quoted Price → Profit Margin, GCC Market (per unit)
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-4xl leading-relaxed">
            What Zambeel quotes you per unit, and what is left for you on each sale. The quoted price is settled out of the COD collected on delivery, not paid by you up front. In dropshipping, ad spend and return charges are the only amounts you pay. The platform owns the product and delivery.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-700/80">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#17254e] text-xs uppercase tracking-wider text-slate-300 font-bold">
                <tr>
                  <th className="py-4 px-6">Cost Element</th>
                  <th className="py-4 px-6 text-right">INR Equivalent</th>
                  <th className="py-4 px-6 text-right">AED Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-[#0e162c]">
                <tr className="hover:bg-slate-800/40">
                  <td className="py-4 px-6 font-medium text-white">
                    Zambeel Quoted Price
                  </td>
                  <td className="py-4 px-6 text-right font-mono text-slate-300">
                    Rs. 2,225
                  </td>
                  <td className="py-4 px-6 text-right font-mono text-slate-300 font-semibold">
                    AED 85
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="py-4 px-6 font-medium text-emerald-400">
                    Reseller Margin
                  </td>
                  <td className="py-4 px-6 text-right font-mono text-emerald-400 font-bold">
                    Rs. 2,225
                  </td>
                  <td className="py-4 px-6 text-right font-mono text-emerald-400 font-bold">
                    AED 85
                  </td>
                </tr>
                <tr className="bg-emerald-950/20 font-bold">
                  <td className="py-4 px-6 text-white flex items-center gap-2">
                    <span>Suggested Selling Price</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-normal">
                      2x product price
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-mono text-white text-base">
                    Rs. 4,451
                  </td>
                  <td className="py-4 px-6 text-right font-mono text-white text-base">
                    AED 170
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Part 2: Invoice Breakdown & Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left: Graphic from PDF */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border-2 border-emerald-500/30 bg-[#0c1328] p-4 shadow-xl">
            <div className="text-xs font-bold text-slate-400 mb-3 px-2 flex items-center justify-between">
              <span>PDF Reference: Example Invoice Breakdown</span>
              <span className="text-emerald-400">1 AED = ₹26.18</span>
            </div>
            <img
              src="/pdf-assets/page_6_img_1.png"
              alt="How Do We Calculate Your Profit PDF Graphic"
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>

          {/* Right: Live Interactive Unit Breakdown Simulator */}
          <div className="lg:col-span-6 rounded-3xl bg-[#0e162c] border border-blue-500/30 p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center text-xs">
                2
              </span>
              <h3 className="text-xl font-bold text-white">
                Live Order Profit Simulator
              </h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs font-semibold text-slate-300">Customer Selling Price (COD)</span>
                <span className="font-mono text-base font-bold text-white">{sellingPriceAED} AED</span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-slate-300 block">Product Price</span>
                  <span className="text-[10px] text-slate-500">Deducted by Zambeel</span>
                </div>
                <span className="font-mono text-sm text-red-400 font-semibold">- {productCostAED} AED</span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-slate-300 block">Fulfilment & Delivery Cost</span>
                  <span className="text-[10px] text-slate-500">Deducted by Zambeel (UAE)</span>
                </div>
                <span className="font-mono text-sm text-red-400 font-semibold">- {deliveryCostAED} AED</span>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border-2 border-emerald-500/40 flex items-center justify-between shadow-glow-emerald">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                    Reseller Profit Transferred
                  </span>
                  <span className="text-[11px] text-slate-400">Direct to your Indian bank</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-emerald-400 font-mono">
                    {resellerProfitAED} AED
                  </div>
                  <div className="text-xs font-bold text-white font-mono">
                    = ₹{resellerProfitINR} INR
                  </div>
                </div>
              </div>
            </div>

            {/* Meta Ad Budget Clarification Box */}
            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/30 text-xs text-slate-300">
              <strong className="text-blue-300 block mb-1">
                What about the ad budget?
              </strong>
              Your ad budget is <span className="text-white font-semibold">not deducted from this invoice</span>. It is what you pay Meta directly from your own ad account to bring the order in. Set it per day (e.g. ₹1,600 to ₹3,000/day), and the cost of winning one order is your CAC.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
