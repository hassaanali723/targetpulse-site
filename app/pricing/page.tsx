'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Check, Zap, Mail } from 'lucide-react'

const packages = [
  { credits: 10000,   price: 9.90,   perCredit: 0.00099, tag: 'Starter friendly' },
  { credits: 30000,   price: 28.00,  perCredit: 0.00093, tag: 'Starter friendly' },
  { credits: 50000,   price: 39.00,  perCredit: 0.00078, tag: 'Starter friendly' },
  { credits: 100000,  price: 76.00,  perCredit: 0.00076, tag: 'Best value', bestValue: true },
  { credits: 300000,  price: 222.00, perCredit: 0.00074, tag: 'Popular with teams' },
  { credits: 500000,  price: 360.00, perCredit: 0.00072, tag: 'Popular with teams' },
  { credits: 800000,  price: 559.00, perCredit: 0.00070, tag: 'Popular with teams' },
  { credits: 1000000, price: 680.00, perCredit: 0.00068, tag: 'Popular with teams' },
]

const DISCOUNT = 0.10

const features = [
  'Email Syntax Validation',
  'Domain & MX Record Verification',
  'SMTP Mailbox Verification',
  'Disposable Email Detection',
  'Role-Based Email Detection',
  'Catch-All Domain Detection',
  'Bulk Upload & Processing',
  'CSV, Excel & JSON Export',
  'Duplicate Email Removal',
  'Detailed Verification Reports',
  'No Credit Expiration',
]

const faqs = [
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards through our secure Stripe payment processor.',
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: "Yes! Cancel anytime. You'll keep all credits already in your account and won't be charged again.",
  },
  {
    q: 'What happens if I run out of credits?',
    a: 'Simply purchase more credits anytime. Your account is topped up instantly.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'Credits are generally non-refundable. We handle exceptional circumstances on a case-by-case basis. See our Refund Policy for details.',
  },
  {
    q: 'Is there a minimum purchase?',
    a: 'The minimum purchase is 10,000 credits ($9.90). You also get 1,000 free trial credits before purchasing.',
  },
  {
    q: 'Do credits expire?',
    a: 'Never. Your credits stay in your account until you use them — no rush, no pressure.',
  },
]

function formatCredits(n: number) {
  if (n >= 1000000) return `${n / 1000000}M`
  return `${(n / 1000).toFixed(0)}K`
}

export default function PricingPage() {
  const [isSub, setIsSub] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="dot-grid absolute inset-0 opacity-[0.4]" />
          <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-primary-50 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 opacity-70" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-accent-50 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 opacity-60" />
        </div>

        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-primary-50/80 px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.16em] text-primary-700 uppercase">
                Transparent pricing
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] text-slate-900 mb-5 leading-[1.05]">
              Simple, transparent
              <span className="block bg-gradient-to-r from-primary-600 via-primary-700 to-accent-500 bg-clip-text text-transparent pb-2">
                pricing
              </span>
            </h1>

            <p className="text-lg text-slate-500 mb-4 leading-relaxed">
              Pay only for what you use. No monthly fees, no hidden charges.<br />
              Credits never expire.
            </p>
            <p className="text-[15px] font-semibold text-primary-700">
              Start with <strong>1,000 free trial credits</strong> — no card required
            </p>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">

            {/* Toggle */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
                <button
                  onClick={() => setIsSub(false)}
                  className={`px-6 py-2.5 rounded-lg text-[14px] font-semibold transition-all duration-200 ${
                    !isSub ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  Pay-As-You-Go
                </button>
                <button
                  onClick={() => setIsSub(true)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-[14px] font-semibold transition-all duration-200 ${
                    isSub ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  Subscription
                  <span className="bg-primary-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full leading-none">
                    10% off
                  </span>
                </button>
              </div>
            </div>

            {/* Package grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {packages.map((pkg, i) => {
                const price     = isSub ? pkg.price * (1 - DISCOUNT) : pkg.price
                const perCredit = isSub ? pkg.perCredit * (1 - DISCOUNT) : pkg.perCredit

                return (
                  <div
                    key={i}
                    className={`relative rounded-2xl border p-5 transition-all duration-200 ${
                      pkg.bestValue
                        ? 'border-primary-300 bg-primary-50/70 shadow-[0_4px_28px_rgba(41,92,81,0.12)]'
                        : 'border-slate-100 bg-white hover:border-primary-200/60 hover:shadow-[0_2px_20px_rgba(41,92,81,0.08)]'
                    }`}
                  >
                    {pkg.bestValue && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 bg-primary-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full">
                          <Zap className="w-2.5 h-2.5" />
                          Best Value
                        </span>
                      </div>
                    )}

                    {/* Credits */}
                    <div className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-0.5">
                      {formatCredits(pkg.credits)}
                    </div>
                    <div className="text-[12px] text-slate-400 font-medium mb-4">credits</div>

                    {/* Price */}
                    <div className="text-3xl font-extrabold text-slate-900 leading-none mb-0.5">
                      ${price.toFixed(2)}
                    </div>
                    <div className="text-[12px] text-slate-400 mb-2">
                      ${perCredit.toFixed(5)}/credit
                    </div>

                    {/* Tag */}
                    <div className={`text-[11px] font-semibold ${pkg.bestValue ? 'text-primary-700' : 'text-slate-400'}`}>
                      {pkg.tag}
                    </div>

                    {isSub && (
                      <div className="mt-2 text-[11px] font-semibold text-emerald-600">
                        Save ${(pkg.price * DISCOUNT).toFixed(2)}
                      </div>
                    )}
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold text-[15px] transition-colors duration-200 shadow-[0_4px_24px_rgba(41,92,81,0.25)]"
              >
                <Mail className="w-4 h-4" />
                Get Started — 1,000 Free Credits
              </a>
              <p className="mt-3 text-[12px] text-slate-400">No credit card required · Credits never expire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Everything included */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">What you get</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 mb-3">
              Everything included in every package
            </h2>
            <p className="text-[15px] text-slate-500 mb-10">All features, all packages. No tiers, no paywalls.</p>

            <div className="flex flex-wrap justify-center gap-3">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-full border border-slate-100 shadow-sm text-[14px] font-medium text-slate-700"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary-600">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How pricing works */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">How it works</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900">
                Pricing made simple
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { emoji: '💳', title: '1 Credit = 1 Email', body: 'Each email verification uses exactly one credit from your balance.' },
                { emoji: '📊', title: 'Volume savings', body: 'Buy more credits, pay less per credit — from $0.00099 down to $0.00068.' },
                { emoji: '🔄', title: '10% subscription discount', body: 'Subscribe monthly and save 10% automatically on all packages.' },
                { emoji: '♾️', title: 'Credits never expire', body: 'Use your credits anytime. They stay in your account until you need them.' },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl border border-slate-100 bg-white p-6 text-center hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200">
                  <div className="text-3xl mb-4">{s.emoji}</div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-100">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900">
                Common questions
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 divide-y divide-slate-100">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  >
                    <span className="text-[15px] font-semibold text-slate-900">{faq.q}</span>
                    <span className="text-slate-400 text-xl flex-shrink-0 font-light">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: openFaq === i ? '200px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <p className="px-6 pb-5 text-[14px] text-slate-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-12 text-center text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-400/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3" />

              <div className="relative">
                <div className="text-4xl mb-4">🎁</div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                  Start with 1,000 free credits
                </h2>
                <p className="text-white/80 text-[16px] mb-8 max-w-xl mx-auto">
                  No credit card required. Verify your first emails for free and see results in seconds.
                </p>
                <a
                  href="https://emailverifier.targetpulse.net/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-xl font-bold text-[15px] hover:bg-slate-50 transition-colors duration-200 shadow-xl"
                >
                  Claim Free Credits
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
