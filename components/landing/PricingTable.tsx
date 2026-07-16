'use client'

import React, { useState } from 'react'
import Link from 'next/link'

// Pricing tiers — sourced from the backend (frontend/src/constants/pricing.ts).
// payRate = pack total ÷ credits; subRate = payRate × (1 − 0.10) monthly discount.
const SUBSCRIPTION_DISCOUNT_RATE = 0.1

interface Offer { credits: number; price: number; popular?: boolean }

const RAW_OFFERS: Offer[] = [
  { credits: 3000, price: 5.0 },
  { credits: 10000, price: 9.9 },
  { credits: 30000, price: 28.0 },
  { credits: 50000, price: 39.0 },
  { credits: 100000, price: 76.0, popular: true },
  { credits: 300000, price: 222.0 },
  { credits: 500000, price: 360.0 },
  { credits: 800000, price: 559.0 },
  { credits: 1000000, price: 680.0 },
]

const OFFERS = RAW_OFFERS.map((o) => ({
  ...o,
  payRate: o.price / o.credits,
  subRate: (o.price / o.credits) * (1 - SUBSCRIPTION_DISCOUNT_RATE),
}))

type Mode = 'pay' | 'sub'

export default function PricingTable() {
  const [mode, setMode] = useState<Mode>('pay')

  const baseRate = mode === 'pay' ? OFFERS[0].payRate : OFFERS[0].subRate
  const unitLabel = mode === 'pay' ? 'one-time' : '/mo'
  const btnText = mode === 'pay' ? 'Buy' : 'Subscribe'

  const activeBtn = 'bg-white text-slate-800 shadow-sm border border-slate-200/50'
  const idleBtn = 'text-slate-500 hover:text-slate-800'

  return (
    <>
      {/* Mode selector */}
      <div className="flex justify-center">
        <div className="bg-slate-100 p-1.5 rounded-2xl inline-flex items-center space-x-1 border border-slate-200">
          <button
            onClick={() => setMode('pay')}
            className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all ${mode === 'pay' ? activeBtn : idleBtn}`}
          >
            Pay-As-You-Go (One-Time)
          </button>
          <button
            onClick={() => setMode('sub')}
            className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all ${mode === 'sub' ? activeBtn : idleBtn}`}
          >
            Monthly Subscription
            <span className="bg-emerald-100 text-emerald-700 text-[9px] px-1.5 py-0.5 rounded-md font-bold ml-1">Save 10%</span>
          </button>
        </div>
      </div>

      {/* Pricing table */}
      <div className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden card-vivid-shadow">
        {/* Header (desktop only) */}
        <div className="hidden md:grid grid-cols-12 gap-4 bg-slate-50 pl-7 pr-8 py-5 border-b-2 border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-wider">
          <div className="col-span-3">Credit Volume</div>
          <div className="col-span-3 text-right">Price per Credit</div>
          <div className="col-span-2 text-right">Save</div>
          <div className="col-span-2 text-right">Total Price</div>
          <div className="col-span-2" />
        </div>

        {/* Rows */}
        <div className="divide-y divide-slate-100">
          {OFFERS.map((offer, index) => {
            const rate = mode === 'pay' ? offer.payRate : offer.subRate
            const total = offer.credits * rate
            const rateText = `$${rate.toFixed(4)}`
            const totalText = `$${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
            const savingsPercent = Math.round((1 - rate / baseRate) * 100)
            const rowBg = offer.popular
              ? 'bg-indigo-50/30 border-l-4 border-indigo-600'
              : 'bg-white hover:bg-slate-50/50 border-l-4 border-transparent'

            return (
              <div key={offer.credits} className={`grid grid-cols-1 md:grid-cols-12 gap-4 items-center pl-7 pr-8 py-5 transition-all ${rowBg}`}>
                {/* Volume */}
                <div className="col-span-12 md:col-span-3 flex items-center justify-between md:justify-start">
                  <span className="text-[10px] font-black text-slate-400 md:hidden uppercase tracking-wider">Volume</span>
                  <div className="flex items-center">
                    <span className="text-lg font-black text-slate-900">{offer.credits.toLocaleString()}</span>
                    <span className="text-xs text-slate-500 font-semibold ml-1">Credits</span>
                    {offer.popular && (
                      <span className="bg-indigo-600 text-white text-[9px] px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider ml-2.5 shadow-sm shadow-indigo-600/10 shrink-0">Popular</span>
                    )}
                  </div>
                </div>

                {/* Rate */}
                <div className="col-span-12 md:col-span-3 flex items-center justify-between md:justify-end md:text-right">
                  <span className="text-[10px] font-black text-slate-400 md:hidden uppercase tracking-wider">Rate</span>
                  <span className="text-sm font-bold text-slate-700">{rateText} <span className="text-[10px] text-slate-400 font-medium">/ credit</span></span>
                </div>

                {/* Savings */}
                <div className="col-span-12 md:col-span-2 flex items-center justify-between md:justify-end md:text-right">
                  <span className="text-[10px] font-black text-slate-400 md:hidden uppercase tracking-wider">Save</span>
                  <div className="flex items-baseline justify-end">
                    {index > 0 && savingsPercent > 0 ? (
                      <span className="bg-emerald-50 text-emerald-600 text-[11px] px-2 py-0.5 rounded-lg font-extrabold border border-emerald-200 shadow-sm shrink-0">Save {savingsPercent}%</span>
                    ) : (
                      <span className="text-slate-300 font-bold">&mdash;</span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-12 md:col-span-2 flex items-center justify-between md:justify-end md:text-right">
                  <span className="text-[10px] font-black text-slate-400 md:hidden uppercase tracking-wider">Price</span>
                  <div className="flex items-baseline justify-end">
                    <span className="text-xl font-black text-slate-900">{totalText}</span>
                    <span className="text-[10px] text-slate-500 font-bold ml-1">{unitLabel}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="col-span-12 md:col-span-2 flex justify-end">
                  <Link
                    href="/sign-up"
                    className={`w-full md:w-auto px-6 py-2.5 text-xs font-black rounded-xl transition-all text-center ${
                      offer.popular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    {btnText}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
