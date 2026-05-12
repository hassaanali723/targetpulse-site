'use client'

import { useState } from 'react'
import { Zap, Sparkles, TrendingUp, ArrowRight, Check } from 'lucide-react'

const packages = [
  { credits: 10000,   price: 9.90,   perCredit: 0.00099, tag: 'Starter' },
  { credits: 30000,   price: 28.00,  perCredit: 0.00093, tag: 'Starter' },
  { credits: 50000,   price: 39.00,  perCredit: 0.00078, tag: 'Growth' },
  { credits: 100000,  price: 76.00,  perCredit: 0.00076, tag: 'Popular', bestValue: true },
  { credits: 300000,  price: 222.00, perCredit: 0.00074, tag: 'Teams' },
  { credits: 500000,  price: 360.00, perCredit: 0.00072, tag: 'Teams' },
  { credits: 800000,  price: 559.00, perCredit: 0.00070, tag: 'Scale' },
  { credits: 1000000, price: 680.00, perCredit: 0.00068, tag: 'Scale' },
]

const DISCOUNT = 0.10
const BASELINE_RATE = packages[0].perCredit

function formatCredits(n: number) {
  if (n >= 1000000) return `${n / 1000000}M`
  return `${(n / 1000).toFixed(0)}K`
}

export default function HomePricingSection() {
  const [isSub, setIsSub] = useState(false)

  return (
    <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-slate-100">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-primary-50/80 px-3 py-1 mb-4">
          <Sparkles className="w-3 h-3 text-primary-600" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-700">Pricing</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 mb-3">
          Simple, transparent pricing
        </h2>
        <p className="text-[15px] text-slate-500">Pay only for what you use. Credits never expire.</p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-10">
        <div className="relative inline-flex items-center p-1 bg-slate-100 rounded-2xl border border-slate-200/60">
          <button
            onClick={() => setIsSub(false)}
            className={`relative z-10 px-6 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-300 ${
              !isSub ? 'bg-white text-slate-900 shadow-[0_2px_8px_rgba(0,0,0,0.06)]' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Pay-As-You-Go
          </button>
          <button
            onClick={() => setIsSub(true)}
            className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-300 ${
              isSub ? 'bg-white text-slate-900 shadow-[0_2px_8px_rgba(0,0,0,0.06)]' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Subscription
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full leading-none shadow-sm">
              Save 10%
            </span>
          </button>
        </div>
      </div>

      {/* Package Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {packages.map((pkg, i) => {
          const price      = isSub ? pkg.price * (1 - DISCOUNT) : pkg.price
          const perCredit  = isSub ? pkg.perCredit * (1 - DISCOUNT) : pkg.perCredit
          const savings    = Math.round((1 - pkg.perCredit / BASELINE_RATE) * 100)

          return (
            <div key={i} className="relative">
              {/* Floating BEST VALUE badge — outside the card so overflow-hidden doesn't clip it */}
              {pkg.bestValue && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
                  <span className="inline-flex items-center gap-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                    <Zap className="w-2.5 h-2.5 fill-white" />
                    BEST VALUE
                  </span>
                </div>
              )}

              <div
                className={`group relative rounded-2xl border p-5 transition-all duration-300 overflow-hidden h-full ${
                  pkg.bestValue
                    ? 'border-primary-400/80 bg-gradient-to-br from-primary-50 via-white to-primary-50/40 shadow-[0_8px_32px_rgba(41,92,81,0.16)]'
                    : 'border-slate-100 bg-white hover:border-primary-300/60 hover:shadow-[0_6px_24px_rgba(41,92,81,0.10)] hover:-translate-y-0.5'
                }`}
              >
                {/* Best Value top accent strip */}
                {pkg.bestValue && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500" />
                )}

                {/* Decorative corner glow on hover */}
                {!pkg.bestValue && (
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary-100/0 group-hover:bg-primary-100/40 rounded-full blur-2xl transition-all duration-500" />
                )}

                <div className="relative flex flex-col h-full">
                  {/* Tier tag + savings row */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[9px] font-bold uppercase tracking-[0.12em] ${
                      pkg.bestValue ? 'text-primary-700' : 'text-slate-400'
                    }`}>
                      {pkg.tag}
                    </span>
                    {savings > 0 && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-600">
                        <TrendingUp className="w-2.5 h-2.5" />
                        −{savings}%
                      </span>
                    )}
                  </div>

                  {/* Credits */}
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                      {formatCredits(pkg.credits)}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">credits</span>
                  </div>

                  {/* Price */}
                  <div className="mb-0.5">
                    <span className="text-3xl font-extrabold text-slate-900 leading-none tracking-tight">
                      ${price.toFixed(price < 100 ? 2 : 0)}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    ${perCredit.toFixed(5)} <span className="text-slate-300">/ credit</span>
                  </div>

                  {/* Subscription save line */}
                  {isSub && (
                    <div className="mt-2.5 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700">
                      <Check className="w-3 h-3" />
                      Save ${(pkg.price * DISCOUNT).toFixed(2)}/mo
                    </div>
                  )}

                  {/* CTA arrow */}
                  <div className={`mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[12px] font-semibold ${
                    pkg.bestValue ? 'text-primary-700' : 'text-slate-400 group-hover:text-primary-600'
                  } transition-colors duration-200`}>
                    <span>Get started</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      pkg.bestValue ? '' : 'group-hover:translate-x-1'
                    }`} />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="https://emailverifier.targetpulse.net/sign-up"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-bold text-[15px] transition-all duration-200 shadow-[0_4px_24px_rgba(41,92,81,0.25)] hover:shadow-[0_6px_28px_rgba(41,92,81,0.35)]"
        >
          Get Started — 1,000 Free Credits
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
        <p className="mt-3 text-[12px] text-slate-400 font-medium">
          No credit card required · Credits never expire · Cancel anytime
        </p>
      </div>
    </div>
  )
}
