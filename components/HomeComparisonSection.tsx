'use client'

import { TrendingDown, Sparkles } from 'lucide-react'

type Row = {
  credits: number
  targetpulse: number
  neverbounce: number
  zerobounce: number
  highlight?: boolean
}

const rows: Row[] = [
  { credits: 10000,   targetpulse: 9.90,  neverbounce: 50,    zerobounce: 99 },
  { credits: 100000,  targetpulse: 76,    neverbounce: 400,   zerobounce: 449, highlight: true },
  { credits: 1000000, targetpulse: 680,   neverbounce: 2500,  zerobounce: 2499 },
]

function formatCredits(n: number) {
  if (n >= 1000000) return `${n / 1000000}M`
  return `${(n / 1000).toFixed(0)}K`
}

function formatPrice(n: number) {
  return n < 100 ? `$${n.toFixed(2)}` : `$${n.toLocaleString()}`
}

export default function HomeComparisonSection() {
  return (
    <div className="mt-14 md:mt-24 pt-12 md:pt-16 border-t border-slate-100">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-primary-50/80 px-3 py-1 mb-4">
          <TrendingDown className="w-3 h-3 text-primary-600" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-700">Price comparison</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 mb-4 leading-[1.1]">
          Get up to <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">5× more emails</span> per dollar
        </h2>
        <p className="text-[16px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Same verification quality. A fraction of the price. Here&apos;s how TargetPulse stacks up
          against the top-known email verifiers.
        </p>
      </div>

      {/* Table */}
      <div className="max-w-4xl mx-auto">
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="px-4 sm:px-0 min-w-[640px]">
            <div className="rounded-2xl border border-slate-200 shadow-[0_4px_32px_rgba(0,0,0,0.04)] overflow-hidden bg-white">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left px-5 py-4 text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50/60 w-[28%]">
                      Verifications / month
                    </th>
                    <th className="px-5 py-4 bg-primary-50 border-l border-r border-primary-100/70 w-[26%]">
                      <div className="flex items-center justify-center gap-2 flex-wrap">
                        <span className="text-[13px] md:text-[14px] font-extrabold text-primary-700">TargetPulse</span>
                        <span className="inline-flex items-center gap-1 bg-accent-500 text-primary-900 text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                          Best
                        </span>
                      </div>
                    </th>
                    <th className="px-5 py-4 text-[13px] md:text-[14px] font-bold text-slate-500 text-center bg-slate-50/60 w-[23%]">
                      NeverBounce
                    </th>
                    <th className="px-5 py-4 text-[13px] md:text-[14px] font-bold text-slate-500 text-center bg-slate-50/60 w-[23%]">
                      ZeroBounce
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => {
                    const cheapest = Math.min(row.neverbounce, row.zerobounce)
                    const savingsX = (cheapest / row.targetpulse).toFixed(1)

                    return (
                      <tr
                        key={i}
                        className={`border-b border-slate-100 last:border-0 transition-colors ${
                          row.highlight ? 'bg-primary-50/15' : 'hover:bg-slate-50/40'
                        }`}
                      >
                        {/* Volume cell */}
                        <td className="px-5 py-6 align-middle">
                          <div className="flex items-center gap-3 flex-wrap">
                            <div className="flex flex-col">
                              <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-none">
                                {formatCredits(row.credits)}
                              </span>
                              <span className="text-[11px] text-slate-400 font-medium mt-1">credits / month</span>
                            </div>
                            {row.highlight && (
                              <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-primary-700 bg-primary-100 border border-primary-200/70 px-2 py-0.5 rounded-full">
                                <Sparkles className="w-2.5 h-2.5" />
                                Popular
                              </span>
                            )}
                          </div>
                        </td>

                        {/* TargetPulse cell — green tinted column */}
                        <td className={`px-5 py-6 align-middle text-center border-l border-r border-primary-100/70 ${
                          row.highlight ? 'bg-primary-50/80' : 'bg-primary-50/50'
                        }`}>
                          <div className="text-2xl md:text-3xl font-extrabold text-primary-700 leading-none mb-2">
                            {formatPrice(row.targetpulse)}
                          </div>
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-white border border-emerald-200/60 px-2 py-0.5 rounded-full">
                            <TrendingDown className="w-2.5 h-2.5" />
                            {savingsX}× cheaper
                          </span>
                        </td>

                        {/* NeverBounce cell */}
                        <td className="px-5 py-6 align-middle text-center">
                          <div className="text-xl md:text-2xl font-bold text-slate-400 line-through decoration-rose-400/60 decoration-[1.5px] leading-none">
                            {formatPrice(row.neverbounce)}
                          </div>
                        </td>

                        {/* ZeroBounce cell */}
                        <td className="px-5 py-6 align-middle text-center">
                          <div className="text-xl md:text-2xl font-bold text-slate-400 line-through decoration-rose-400/60 decoration-[1.5px] leading-none">
                            {formatPrice(row.zerobounce)}
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-[11px] text-slate-400 leading-relaxed max-w-xl mx-auto">
          Competitor prices sourced directly from neverbounce.com and zerobounce.net.
          See competitor websites for current rates.
        </p>
      </div>
    </div>
  )
}
