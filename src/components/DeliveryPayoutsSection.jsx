import React from 'react';
import { Calendar, Truck, CreditCard, ShieldCheck, ArrowRight, Clock, MapPin } from 'lucide-react';

export default function DeliveryPayoutsSection({ onOpenModal }) {
  const countries = [
    { country: 'UAE', currency: 'AED', delivery: '20 AED', returnFee: '5 AED', tax: '0%', time: '1–2 Days', flag: '🇦🇪' },
    { country: 'KSA', currency: 'SAR', delivery: '26 SAR', returnFee: '7.5 SAR', tax: '0%', time: '1–3 Days', flag: '🇸🇦' },
    { country: 'Kuwait', currency: 'AED', delivery: '30 AED', returnFee: '15 AED', tax: '0%', time: '1–2 Days', flag: '🇰🇼' },
    { country: 'Qatar', currency: 'AED', delivery: '25 AED', returnFee: '5 AED', tax: '0%', time: '1–2 Days', flag: '🇶🇦' },
    { country: 'Oman', currency: 'AED', delivery: '26 AED', returnFee: '12 AED', tax: '0%', time: '1–2 Days', flag: '🇴🇲' },
    { country: 'Bahrain', currency: 'AED', delivery: '20 AED', returnFee: '15 AED', tax: '0%', time: '1–2 Days', flag: '🇧🇭' },
    { country: 'Iraq', currency: 'AED', delivery: '25 AED', returnFee: '8 AED', tax: '0%', time: '1–3 Days', flag: '🇮🇶' },
  ];

  const steps = [
    { num: '1', title: 'Order Delivered', desc: 'The courier collects the COD amount from your customer on delivery.' },
    { num: '2', title: 'Costs Settled', desc: 'Product and fulfilment costs are deducted from the collected amount.' },
    { num: '3', title: 'Invoice on Friday', desc: "The invoice for that week's settled orders is generated on Friday." },
    { num: '4', title: 'Paid on Monday', desc: 'The net profit payment is credited directly to your Indian bank account on Monday.' },
  ];

  return (
    <section id="delivery" className="py-20 bg-[#0a1128] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            04 · Delivery & Payouts
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Fast delivery, weekly money in your Indian bank
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Local Gulf couriers ensure 1–2 days delivery across 7 Gulf nations. Only 5 AED return fee on failed deliveries — zero inventory loss.
          </p>
        </div>

        {/* 3. Delivery & Return Charges Table */}
        <div className="rounded-3xl bg-[#0e162c] border border-slate-800 p-6 sm:p-8 mb-16 shadow-xl">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">
                3
              </span>
              <h3 className="text-xl font-bold text-white">
                Delivery Charges & Return Charges by Country
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Rates supplied by Zambeel. KSA quoted in SAR; all others in AED.
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-700/80">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#152347] text-slate-300 uppercase tracking-wider text-[11px] font-bold">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Country</th>
                  <th className="py-4 px-4 sm:px-6">
                    Order Confirmation + Packing + Delivery
                  </th>
                  <th className="py-4 px-4 sm:px-6">
                    Return Fee <span className="text-emerald-400 font-normal">(Only Expense)</span>
                  </th>
                  <th className="py-4 px-4 sm:px-6 text-center">COD Tax</th>
                  <th className="py-4 px-4 sm:px-6 text-right">Delivery Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-[#0b1224]">
                {countries.map((c) => (
                  <tr key={c.country} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white flex items-center gap-2">
                      <span className="text-base">{c.flag}</span>
                      <span>{c.country}</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-mono text-slate-200">
                      {c.delivery}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-mono text-emerald-400 font-bold">
                      {c.returnFee}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center font-mono text-slate-300">
                      {c.tax}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right font-semibold text-blue-300">
                      ⚡ {c.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. COD Remittance to Indian Bank Account */}
        <div className="rounded-3xl bg-[#0e162c] border border-emerald-500/30 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center text-xs">
              4
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              COD Remittance to Your Indian Bank Account
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mb-8 max-w-3xl">
            Invoice generated every Friday — payment automatically credited to your Indian bank account every Monday. No chasing couriers, no manual reconciling.
          </p>

          {/* 4 Steps Process */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {steps.map((st) => (
              <div key={st.num} className="p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 relative">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center mb-3">
                  {st.num}
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{st.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          {/* Weekly Remittance Calendar visual from PDF */}
          <div className="rounded-2xl p-6 bg-gradient-to-r from-[#0d162e] to-[#121c3b] border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="px-4 py-3 rounded-xl bg-emerald-500 text-slate-950 font-black text-center">
                <span className="block text-xs uppercase tracking-wider font-extrabold">MONDAY</span>
                <span className="text-lg">PAYOUT</span>
              </div>
              <div>
                <h5 className="text-sm font-bold text-white">
                  Automated Weekly Cash-Flow Cycle
                </h5>
                <p className="text-xs text-slate-400">
                  Friday: Invoice calculated · Monday: Direct NEFT/RTGS to your Indian bank account.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300">Tue-Thu Orders</span>
              <span className="text-slate-500">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">Fri Invoice</span>
              <span className="text-slate-500">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">Mon Payment</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
