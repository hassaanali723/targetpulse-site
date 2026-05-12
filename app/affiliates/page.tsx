'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Sparkles, Repeat, Calendar, Wallet, Infinity as InfinityIcon,
  Users, ArrowRight, Check, TrendingUp, Share2,
  MailCheck, Megaphone, BookOpen, Building2,
} from 'lucide-react'

const AFFILIATE_SIGNUP_URL = 'https://targetpulse.endorsely.com/'

const benefits = [
  { Icon: Repeat,         title: '20% recurring',     body: 'Earn on every payment your referrals make — month after month, year after year.' },
  { Icon: InfinityIcon,   title: 'No earnings cap',   body: "Refer 10 customers or 10,000. There's no ceiling on what you can earn." },
  { Icon: Calendar,       title: '3-month attribution', body: 'You get credit if your referral signs up within 3 months of clicking your link.' },
  { Icon: Wallet,         title: 'Monthly payouts',   body: 'Get paid every month via PayPal or Wise once you hit the $50 minimum.' },
]

const steps = [
  {
    Icon: Share2,
    title: 'Apply in 30 seconds',
    body: 'Sign up to the program, get your unique referral link instantly. No interview, no waiting period.',
  },
  {
    Icon: Megaphone,
    title: 'Share your link',
    body: 'Promote TargetPulse on your blog, newsletter, social, YouTube, or directly with clients who need cleaner email lists.',
  },
  {
    Icon: Wallet,
    title: 'Get paid monthly',
    body: 'Earn 20% of every payment your referrals make — automatically tracked and paid out each month.',
  },
]

const audience = [
  { Icon: MailCheck,  title: 'Email marketers',  body: 'Recommend the tool you already trust to clean lists before campaigns.' },
  { Icon: Building2,  title: 'Agencies',         body: 'Earn a recurring revenue stream from every client you onboard.' },
  { Icon: BookOpen,   title: 'Course creators',  body: 'Bundle TargetPulse into your cold email or lead-gen course curriculum.' },
  { Icon: Users,      title: 'SaaS communities', body: 'Share with your audience of marketers, founders, and growth pros.' },
]

const exampleRows = [
  { customers: 5,   plan: '$76/mo',  earnings: 76 },
  { customers: 20,  plan: '$76/mo',  earnings: 304 },
  { customers: 50,  plan: '$76/mo',  earnings: 760 },
  { customers: 100, plan: '$76/mo',  earnings: 1520 },
]

const faqs = [
  {
    q: 'When and how do I get paid?',
    a: "Payouts go out monthly via PayPal or Wise (your choice), once your unpaid balance reaches $50. There's no rolling holdback — once a referral pays, the commission is yours.",
  },
  {
    q: 'How long does the commission last?',
    a: "For as long as your referral keeps paying. If they stay a customer for 3 years, you earn 20% of every payment for 3 years. It's true recurring revenue.",
  },
  {
    q: 'What if my referral cancels?',
    a: 'You stop earning commission on that customer the moment they cancel. If they re-subscribe later under the same account, the commission resumes.',
  },
  {
    q: 'How long is the attribution window?',
    a: 'Tracking lasts 3 months from the moment someone clicks your link. If they sign up within that window, the referral is attributed to you.',
  },
  {
    q: 'Can I promote on YouTube, blogs, and paid ads?',
    a: 'Yes to YouTube, blogs, newsletters, social media, and Reddit. Paid ads on our brand keywords (e.g. "TargetPulse") are not allowed — anything else is fair game.',
  },
  {
    q: 'Do I need to be a customer to join?',
    a: 'No, but we strongly recommend trying the product first (you get 1,000 free credits) so you can recommend it authentically.',
  },
  {
    q: 'Is there a minimum payout threshold?',
    a: 'Yes — $50. Unpaid commission rolls over month to month until you hit the threshold, then gets paid out automatically.',
  },
]

export default function AffiliatesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="dot-grid absolute inset-0 opacity-[0.4]" />
          <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-primary-50 rounded-full blur-[130px] -translate-y-1/3 translate-x-1/4 opacity-70" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-accent-50 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 opacity-60" />
        </div>

        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-primary-50/80 px-4 py-1.5 mb-8">
              <Sparkles className="w-3 h-3 text-primary-600" />
              <span className="text-[11px] font-semibold tracking-[0.16em] text-primary-700 uppercase">
                Affiliate Program
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] text-slate-900 mb-5 leading-[1.05]">
              Earn 20% recurring
              <span className="block bg-gradient-to-r from-primary-600 via-primary-700 to-accent-500 bg-clip-text text-transparent pb-2">
                every month, forever
              </span>
            </h1>

            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-2xl mx-auto">
              Share TargetPulse with your audience and earn a 20% commission on every payment your
              referrals make — for as long as they stay a customer. No caps, no expiry.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <a
                href={AFFILIATE_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-bold text-[15px] transition-all duration-200 shadow-[0_4px_24px_rgba(41,92,81,0.25)] hover:shadow-[0_6px_28px_rgba(41,92,81,0.35)]"
              >
                Join the Affiliate Program
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-slate-600 hover:text-primary-700 font-semibold text-[14px] transition-colors"
              >
                See how it works
              </a>
            </div>

            {/* Quick stats bar */}
            <div className="inline-flex flex-wrap items-center justify-center gap-x-10 gap-y-3 rounded-2xl bg-white border border-slate-100 px-8 py-4 shadow-[0_2px_24px_rgba(0,0,0,0.04)]">
              <div className="text-center">
                <div className="text-xl font-extrabold text-primary-700">20%</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Recurring</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-200" />
              <div className="text-center">
                <div className="text-xl font-extrabold text-primary-700">3 months</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Attribution</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-200" />
              <div className="text-center">
                <div className="text-xl font-extrabold text-primary-700">Monthly</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Payouts</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-200" />
              <div className="text-center">
                <div className="text-xl font-extrabold text-primary-700">$50</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Min payout</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY JOIN (BENEFITS) ──────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">Why join</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 mb-3">
              One of the most generous programs in email tooling
            </h2>
            <p className="text-[15px] text-slate-500">Real recurring revenue, not a one-time bounty.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-slate-100 bg-white p-6 hover:border-primary-300/60 hover:shadow-[0_6px_24px_rgba(41,92,81,0.10)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary-50 border border-primary-100/60 mb-4 group-hover:bg-primary-100 transition-colors">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900">
              From sign-up to first payout in days, not months
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {steps.map(({ Icon, title, body }, i) => (
              <div
                key={title}
                className="relative rounded-2xl border border-slate-100 bg-white p-6 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-200"
              >
                <div className="absolute -top-3 left-6 bg-gradient-to-br from-primary-600 to-primary-700 text-white text-[12px] font-bold w-7 h-7 flex items-center justify-center rounded-lg shadow-md">
                  {i + 1}
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary-50 mb-4 mt-2">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EARNINGS EXAMPLE ─────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-100">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">Your potential</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 mb-3">
                Here&apos;s what you can earn
              </h2>
              <p className="text-[15px] text-slate-500">
                Based on customers on our 100K Popular plan ($76/mo). Other plans pay 20% too.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-100 shadow-[0_2px_24px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="grid grid-cols-3 px-6 py-3 border-b border-slate-100 bg-slate-50/60">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Customers referred</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center">On the plan</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-right">Your monthly earnings</div>
              </div>
              <div className="divide-y divide-slate-100">
                {exampleRows.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-3 px-6 py-4 items-center transition-colors ${
                      i === exampleRows.length - 1 ? 'bg-gradient-to-r from-primary-50/60 to-transparent' : 'hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary-600" />
                      </div>
                      <span className="text-[15px] font-bold text-slate-900">{row.customers}</span>
                    </div>
                    <div className="text-[13px] text-slate-500 text-center font-medium">{row.plan}</div>
                    <div className="flex items-center justify-end gap-1.5">
                      {i === exampleRows.length - 1 && <TrendingUp className="w-4 h-4 text-emerald-600" />}
                      <span className={`text-2xl font-extrabold tracking-tight ${
                        i === exampleRows.length - 1 ? 'text-primary-700' : 'text-slate-900'
                      }`}>
                        ${row.earnings.toLocaleString()}
                      </span>
                      <span className="text-[12px] text-slate-400">/mo</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-5 text-center text-[12px] text-slate-400">
              These numbers are illustrative. Actual earnings depend on which plan your referrals choose.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">Who it&apos;s for</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 mb-3">
              Built for people who care about deliverability
            </h2>
            <p className="text-[15px] text-slate-500">
              If your audience sends email, you have an audience for TargetPulse.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {audience.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-white p-6 hover:border-primary-300/60 hover:shadow-[0_4px_20px_rgba(41,92,81,0.08)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon className="w-7 h-7 text-primary-600 mb-4" strokeWidth={1.5} />
                <h3 className="text-[14px] font-bold text-slate-900 mb-1.5">{title}</h3>
                <p className="text-[12.5px] text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
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
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="text-[15px] font-semibold text-slate-900">{faq.q}</span>
                    <span className="text-slate-400 text-xl flex-shrink-0 font-light">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: openFaq === i ? '240px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <p className="px-6 pb-5 text-[14px] text-slate-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-[13px] text-slate-500">
              Still have questions?{' '}
              <a href="/contact-us" className="font-semibold text-primary-700 hover:text-primary-800">
                Talk to us
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-12 text-center text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-400/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 mb-5">
                  <Sparkles className="w-3 h-3 text-accent-300" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/90">Start earning today</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                  Ready to turn referrals into recurring income?
                </h2>
                <p className="text-white/80 text-[16px] mb-8 max-w-xl mx-auto">
                  Sign up in 30 seconds and start earning 20% commission on every payment your referrals make.
                </p>
                <a
                  href={AFFILIATE_SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-xl font-bold text-[15px] hover:bg-slate-50 transition-colors duration-200 shadow-xl"
                >
                  Join the Affiliate Program
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <div className="mt-5 flex items-center justify-center gap-5 text-[12px] text-white/70">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Free to join
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> No approval needed
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Lifetime commissions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
