'use client'

import { useState } from 'react'
import { FileText } from 'lucide-react'

const PRICE_TIERS = [
  { min: 1, max: 1999, perCredit: 0.005 },
  { min: 2000, max: 4999, perCredit: 0.00375 },
  { min: 5000, max: 9999, perCredit: 0.003 },
  { min: 10000, max: 24999, perCredit: 0.00275 },
  { min: 25000, max: 49999, perCredit: 0.0025 },
  { min: 50000, max: 99999, perCredit: 0.00225 },
  { min: 100000, max: 249999, perCredit: 0.002 },
  { min: 250000, max: 499999, perCredit: 0.00175 },
  { min: 500000, max: 999999, perCredit: 0.0015 },
  { min: 1000000, max: Infinity, perCredit: 0.00125 },
]

function getPriceForCredits(credits: number) {
  const tier = PRICE_TIERS.find((t) => credits >= t.min && credits <= t.max)
  const perCredit = tier ? tier.perCredit : 0.005
  const total = credits * perCredit
  return { total, perCredit }
}

const CREDIT_PACKAGES = [
  { credits: 2000, price: 7.5, perCredit: 0.00375 },
  { credits: 5000, price: 15, perCredit: 0.003 },
  { credits: 10000, price: 27.5, perCredit: 0.00275 },
  { credits: 25000, price: 62.5, perCredit: 0.0025 },
  { credits: 50000, price: 112.5, perCredit: 0.00225 },
  { credits: 100000, price: 200, perCredit: 0.002 },
  { credits: 250000, price: 437.5, perCredit: 0.00175 },
  { credits: 500000, price: 750, perCredit: 0.0015 },
  { credits: 1000000, price: 1250, perCredit: 0.00125 },
]

export default function HomePricingSection() {
  const [calculatorCredits, setCalculatorCredits] = useState(5000)
  const { total: calculatedPrice, perCredit: calculatedPerCredit } = getPriceForCredits(calculatorCredits)
  const perCreditDisplay = calculatedPerCredit.toFixed(4)

  return (
    <div className="mt-16 rounded-3xl border-2 border-primary-100 bg-gradient-to-br from-primary-50/50 to-accent-50/50 p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 text-center">
        Simple, <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Transparent</span> Pricing
      </h2>
      <p className="text-slate-600 text-center mb-8">Pay only for what you use. Start with 1,000 free credits.</p>

      <div className="grid lg:grid-cols-[1fr,340px] gap-8 items-start">
        {/* Credit Packages Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {CREDIT_PACKAGES.map((pkg) => (
            <button
              key={pkg.credits}
              type="button"
              onClick={() => setCalculatorCredits(pkg.credits)}
              className={`text-left rounded-2xl border-2 bg-white p-4 transition-all duration-200 hover:shadow-lg hover:border-primary-300 ${
                calculatorCredits === pkg.credits ? 'border-primary-500 ring-2 ring-primary-200' : 'border-primary-100'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-primary-700" />
                </div>
                {pkg.credits >= 1000000 ? (
                  <span className="text-sm font-bold text-slate-900">{(pkg.credits / 1000000).toFixed(1)}M credits</span>
                ) : (
                  <span className="text-sm font-bold text-slate-900">{pkg.credits.toLocaleString()} credits</span>
                )}
              </div>
              <div className="text-lg font-bold text-primary-700">${pkg.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
              <div className="text-xs text-slate-500">${pkg.perCredit.toFixed(4)}/credit</div>
            </button>
          ))}
        </div>

        {/* Calculate Your Cost */}
        <div className="bg-white rounded-2xl border-2 border-primary-100 p-6 shadow-sm sticky top-24">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Calculate Your Cost</h3>
          <label className="block text-sm font-medium text-slate-700 mb-2">Credits</label>
          <input
            type="number"
            min="1"
            value={calculatorCredits}
            onChange={(e) => setCalculatorCredits(Math.max(1, parseInt(e.target.value, 10) || 1))}
            className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 font-semibold focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
          />
          <p className="mt-3 text-slate-700 font-medium">
            Buy {calculatorCredits.toLocaleString()} credits for <span className="text-primary-700 font-bold">${calculatedPrice.toFixed(2)}</span>
          </p>
          <p className="text-xs text-slate-500 mt-1">${perCreditDisplay}/credit</p>

          <a
            href="https://emailverifier.targetpulse.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
          >
            Get 1,000 Free Credits
          </a>
          <a
            href="https://emailverifier.targetpulse.net/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full inline-flex items-center justify-center py-2.5 text-primary-600 font-semibold text-sm hover:bg-primary-50 rounded-xl transition-colors"
          >
            Try Now
          </a>
          <p className="text-xs text-slate-500 text-center mt-3">No Credit Card Required</p>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500 mt-6">
        Subscription? Save 5% with monthly plans. <a href="/pricing" className="text-primary-600 font-medium hover:underline">View full pricing</a>
      </p>
    </div>
  )
}
