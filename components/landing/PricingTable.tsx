'use client'

import React, { useState } from 'react'
import { RAW_OFFERS } from '@/components/landing/pricingOffers'

// Checkout lives in the dashboard, not on this site. Same host the navbar's
// sign-in/sign-up links use.
const DASHBOARD_PRICING_URL = 'https://emailverifier.giggal.ai/pricing'

// payRate = pack total ÷ credits; subRate = payRate × (1 − 0.10) monthly discount.
const SUBSCRIPTION_DISCOUNT_RATE = 0.1

const OFFERS = RAW_OFFERS.map((o) => ({
  ...o,
  payRate: o.price / o.credits,
  subRate: (o.price / o.credits) * (1 - SUBSCRIPTION_DISCOUNT_RATE),
}))

type Mode = 'pay' | 'sub'

export interface PricingStrings {
  payg: string
  subscription: string
  save: string
  colVolume: string
  colRate: string
  colSave: string
  colTotal: string
  credits: string
  popular: string
  perCredit: string
  oneTime: string
  perMonth: string
  // "{pct}" is replaced with the percentage. Plain string, not a function:
  // this object crosses the server/client boundary and must be serializable.
  saveBadge: string
  buy: string
  subscribe: string
  noDiscount: string
  // Short labels shown beside each cell on phones.
  mobVolume: string
  mobRate: string
  mobSave: string
  mobPrice: string
  // Number formatting: BCP 47 locale for toLocaleString, and whether the
  // dollar sign goes after the number (Italian style: 9,90 $). Brazilian
  // Portuguese writes the symbol first with a space and a country marker
  // (US$ 9,90), which is what currencyPrefix is for.
  numberLocale: string
  currencySuffix: boolean
  currencyPrefix?: string
}

// English, unchanged from the inline strings this component used to carry.
export const EN_PRICING_STRINGS: PricingStrings = {
  payg: 'Pay-As-You-Go (One-Time)',
  subscription: 'Monthly Subscription',
  save: 'Save 10%',
  colVolume: 'Credit Volume',
  colRate: 'Price per Credit',
  colSave: 'Save',
  colTotal: 'Total Price',
  credits: 'Credits',
  popular: 'Popular',
  perCredit: '/ credit',
  oneTime: 'one-time',
  perMonth: '/mo',
  saveBadge: 'Save {pct}%',
  buy: 'Buy',
  subscribe: 'Subscribe',
  noDiscount: 'No discount',
  mobVolume: 'Volume',
  mobRate: 'Rate',
  mobSave: 'Save',
  mobPrice: 'Price',
  numberLocale: 'en-US',
  currencySuffix: false,
}

function money(t: PricingStrings, n: number, digits: number): string {
  const num = n.toLocaleString(t.numberLocale, { minimumFractionDigits: digits, maximumFractionDigits: digits })
  if (t.currencyPrefix) return `${t.currencyPrefix}${num}`
  return t.currencySuffix ? `${num} $` : `$${num}`
}

export default function PricingTable({ strings = EN_PRICING_STRINGS }: { strings?: PricingStrings } = {}) {
  const t = strings
  const [mode, setMode] = useState<Mode>('pay')

  const baseRate = mode === 'pay' ? OFFERS[0].payRate : OFFERS[0].subRate
  const unitLabel = mode === 'pay' ? t.oneTime : t.perMonth
  const btnText = mode === 'pay' ? t.buy : t.subscribe

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
            {t.payg}
          </button>
          <button
            onClick={() => setMode('sub')}
            className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all ${mode === 'sub' ? activeBtn : idleBtn}`}
          >
            {t.subscription}
            <span className="bg-emerald-100 text-emerald-700 text-[9px] px-1.5 py-0.5 rounded-md font-bold ml-1">{t.save}</span>
          </button>
        </div>
      </div>

      {/* Pricing table */}
      <div className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden card-vivid-shadow">
        {/* Header (desktop only) */}
        <div className="hidden md:grid grid-cols-12 gap-4 bg-slate-50 pl-7 pr-8 py-5 border-b-2 border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-wider">
          <div className="col-span-3">{t.colVolume}</div>
          <div className="col-span-3 text-right">{t.colRate}</div>
          <div className="col-span-2 text-right">{t.colSave}</div>
          <div className="col-span-2 text-right">{t.colTotal}</div>
          <div className="col-span-2" />
        </div>

        {/* Rows */}
        <div className="divide-y divide-slate-100">
          {OFFERS.map((offer, index) => {
            const rate = mode === 'pay' ? offer.payRate : offer.subRate
            const total = offer.credits * rate
            const rateText = money(t, rate, 4)
            const totalText = money(t, total, 2)
            const savingsPercent = Math.round((1 - rate / baseRate) * 100)
            const rowBg = offer.popular
              ? 'bg-indigo-50/30 border-l-4 border-indigo-600'
              : 'bg-white hover:bg-slate-50/50 border-l-4 border-transparent'

            return (
              <div key={offer.credits} className={`grid grid-cols-1 md:grid-cols-12 gap-4 items-center pl-7 pr-8 py-5 transition-all ${rowBg}`}>
                {/* Volume */}
                <div className="col-span-12 md:col-span-3 flex items-center justify-between md:justify-start">
                  <span className="text-[10px] font-black text-slate-400 md:hidden uppercase tracking-wider">{t.mobVolume}</span>
                  <div className="flex items-center">
                    <span className="text-lg font-black text-slate-900">{offer.credits.toLocaleString(t.numberLocale)}</span>
                    <span className="text-xs text-slate-500 font-semibold ml-1">{t.credits}</span>
                    {offer.popular && (
                      <span className="bg-indigo-600 text-white text-[9px] px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider ml-2.5 shadow-sm shadow-indigo-600/10 shrink-0">{t.popular}</span>
                    )}
                  </div>
                </div>

                {/* Rate */}
                <div className="col-span-12 md:col-span-3 flex items-center justify-between md:justify-end md:text-right">
                  <span className="text-[10px] font-black text-slate-400 md:hidden uppercase tracking-wider">{t.mobRate}</span>
                  <span className="text-sm font-bold text-slate-700">{rateText} <span className="text-[10px] text-slate-400 font-medium">{t.perCredit}</span></span>
                </div>

                {/* Savings */}
                <div className="col-span-12 md:col-span-2 flex items-center justify-between md:justify-end md:text-right">
                  <span className="text-[10px] font-black text-slate-400 md:hidden uppercase tracking-wider">{t.mobSave}</span>
                  <div className="flex items-baseline justify-end">
                    {index > 0 && savingsPercent > 0 ? (
                      <span className="bg-emerald-50 text-emerald-600 text-[11px] px-2 py-0.5 rounded-lg font-extrabold border border-emerald-200 shadow-sm shrink-0">{t.saveBadge.replace('{pct}', String(savingsPercent))}</span>
                    ) : (
                      // Base tier has nothing to save against. Plain hyphen
                      // rather than an em dash, which the copy rules exclude.
                      <span className="text-slate-300 font-bold" aria-label={t.noDiscount}>-</span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-12 md:col-span-2 flex items-center justify-between md:justify-end md:text-right">
                  <span className="text-[10px] font-black text-slate-400 md:hidden uppercase tracking-wider">{t.mobPrice}</span>
                  <div className="flex items-baseline justify-end">
                    <span className="text-xl font-black text-slate-900">{totalText}</span>
                    <span className="text-[10px] text-slate-500 font-bold ml-1">{unitLabel}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="col-span-12 md:col-span-2 flex justify-end">
                  {/* Straight to the dashboard's pricing page, where checkout
                      actually happens. This used to point at /sign-up — a second
                      marketing page — so "Buy" opened another pitch instead of a
                      purchase, and the reader had to find pricing again inside
                      the app. Signed-out visitors are handled by Clerk: the
                      route is protected, so they get /sign-in?redirect_url=…
                      and come back here authenticated, query string intact.

                      credits + mode carry the row the reader actually clicked,
                      so the dashboard can scroll to and highlight it instead of
                      dropping them at the top of a nine-row table. The credit
                      tiers are identical on both sides, and `mode` is
                      translated to the dashboard's own naming (payg /
                      subscription) rather than this component's pay / sub. */}
                  <a
                    href={`${DASHBOARD_PRICING_URL}?credits=${offer.credits}&mode=${
                      mode === 'pay' ? 'payg' : 'subscription'
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full md:w-auto px-6 py-2.5 text-xs font-black rounded-xl transition-all text-center ${
                      offer.popular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    {btnText}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
