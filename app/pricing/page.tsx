import React from 'react'
import Link from 'next/link'
import { Check, CreditCard, TrendingDown, Percent, Infinity as InfinityIcon } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PricingBlock from '@/components/landing/PricingBlock'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'

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

const howItWorks = [
  { Icon: CreditCard, wrap: 'bg-indigo-600 shadow-indigo-600/10', title: '1 Credit = 1 Email', body: 'Each standard email verification uses exactly one credit from your balance.' },
  { Icon: TrendingDown, wrap: 'bg-emerald-500 shadow-emerald-500/10', title: 'Volume savings', body: 'Buy more credits, pay less per credit — from $0.0017 down to $0.0007.' },
  { Icon: Percent, wrap: 'bg-violet-600 shadow-violet-600/10', title: '10% subscription discount', body: 'Subscribe monthly and save 10% automatically on every package.' },
  { Icon: InfinityIcon, wrap: 'bg-amber-500 shadow-amber-500/10', title: 'Credits never expire', body: 'Use your credits anytime. They stay in your account until you need them.' },
]

const faqs: FaqItem[] = [
  { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards through our secure Stripe payment processor.' },
  { q: 'Can I cancel my subscription anytime?', a: "Yes! Cancel anytime. You'll keep all credits already in your account and won't be charged again." },
  { q: 'What happens if I run out of credits?', a: 'Simply purchase more credits anytime. Your account is topped up instantly.' },
  { q: 'Do you offer refunds?', a: 'Credits are generally non-refundable. We handle exceptional circumstances on a case-by-case basis. See our Refund Policy for details.' },
  { q: 'Is there a minimum purchase?', a: 'The minimum purchase is 3,000 credits ($5.00). You also get 1,000 free trial credits before purchasing.' },
  { q: 'Do credits expire?', a: 'Never. Your credits stay in your account until you use them — no rush, no pressure.' },
]

export default function PricingPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-black tracking-[0.16em] text-indigo-700 uppercase">Transparent Pricing</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Simple, Transparent{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">Pricing</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Pay only for what you use. No monthly fees, no hidden charges, and credits never expire.
          Start with <strong className="text-indigo-600 font-extrabold">1,000 free trial credits</strong> — no card required.
        </p>
      </section>

      {/* Pricing widget (same as the landing page) */}
      <section className="max-w-6xl mx-auto px-6 pb-24 space-y-12">
        <PricingBlock />
      </section>

      {/* Everything included */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Everything Included in Every Package</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">All features, all packages. No tiers, no paywalls.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-2.5 px-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl card-vivid-shadow text-[13px] font-bold text-slate-700">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 shrink-0">
                <Check className="w-3 h-3 text-white" />
              </span>
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* How pricing works */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Pricing Made Simple</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">Four principles that keep our pricing honest and predictable.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map(({ Icon, wrap, title, body }) => (
            <div key={title} className="bg-white border-2 border-slate-200 rounded-2xl p-6 min-h-[190px] hover:border-indigo-500/30 transition-all duration-300 card-vivid-shadow flex flex-col text-left space-y-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${wrap}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900 leading-tight">{title}</h3>
                <p className="text-[13px] text-slate-500 font-semibold leading-normal">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Common Questions</h2>
          <p className="text-sm text-slate-600 font-bold">Everything you need to know about credits, billing, and refunds.</p>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      {/* CTA banner */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">Start With 1,000 Free Credits</h2>
          <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">
            No credit card required. Verify your first emails for free and see results in seconds.
          </p>
          <div className="pt-4">
            <Link
              href="/sign-up"
              className="px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold rounded-2xl text-base transition-all shadow-md inline-block hover:scale-[1.03] active:scale-95 duration-200"
            >
              Claim Free Credits
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
