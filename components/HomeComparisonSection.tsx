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

      {/* Comparison Cards */}
      <div className="max-w-5xl mx-auto space-y-4">
        {rows.map((row, i) => {
          const cheapest = Math.min(row.neverbounce, row.zerobounce)
          const savingsX = (cheapest / row.targetpulse).toFixed(1)
          const dollarsSaved = Math.round(cheapest - row.targetpulse)

          return (
            <div
              key={i}
              className={`relative rounded-3xl border bg-white overflow-hidden transition-all duration-300 ${
                row.highlight
                  ? 'border-primary-300/70 shadow-[0_8px_40px_rgba(41,92,81,0.12)]'
                  : 'border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
              }`}
            >
              {/* Most Popular accent bar */}
              {row.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500" />
              )}

              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr_1fr_1fr] items-center gap-4 md:gap-0 p-6 md:p-7">
                {/* Volume label */}
                <div className="md:border-r md:border-slate-100 md:pr-6">
                  {row.highlight && (
                    <div className="inline-flex items-center gap-1 mb-2 text-[9px] font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">
                      <Sparkles className="w-2.5 h-2.5" />
                      Most popular
                    </div>
                  )}
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none">
                      {formatCredits(row.credits)}
                    </span>
                    <span className="text-[13px] text-slate-400 font-medium">credits</span>
                  </div>
                  <p className="mt-1 text-[12px] text-slate-500">per month</p>
                </div>

                {/* TargetPulse — winner */}
                <div className="md:border-r md:border-slate-100 md:px-6 relative">
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary-700 mb-1.5">
                    TargetPulse
                  </div>
                  <div className="flex items-baseline gap-2.5 flex-wrap">
                    <span className="text-4xl md:text-5xl font-black text-primary-700 leading-none tracking-tight">
                      {formatPrice(row.targetpulse)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                      <TrendingDown className="w-3 h-3" />
                      {savingsX}× cheaper
                    </span>
                  </div>
                  <p className="mt-2 text-[12px] text-slate-500">
                    You save <span className="font-bold text-emerald-700">${dollarsSaved.toLocaleString()}</span> vs the cheapest competitor
                  </p>
                </div>

                {/* NeverBounce */}
                <div className="md:px-6 text-center md:text-left">
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-1.5">
                    NeverBounce
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-400 leading-none tracking-tight line-through decoration-rose-400/70 decoration-[1.5px]">
                    {formatPrice(row.neverbounce)}
                  </div>
                </div>

                {/* ZeroBounce */}
                <div className="md:px-6 text-center md:text-left">
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-1.5">
                    ZeroBounce
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-400 leading-none tracking-tight line-through decoration-rose-400/70 decoration-[1.5px]">
                    {formatPrice(row.zerobounce)}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Disclaimer */}
      <p className="mt-6 text-center text-[11px] text-slate-400 leading-relaxed max-w-xl mx-auto">
        Competitor prices sourced directly from neverbounce.com and zerobounce.net.
        See competitor websites for current rates.
      </p>
    </div>
  )
}
