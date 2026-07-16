import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Wordmark from '@/components/Wordmark'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import {
  Repeat, Calendar, Wallet, Infinity as InfinityIcon,
  Users, ArrowRight, Check, TrendingUp, Share2,
  MailCheck, Megaphone, BookOpen, Building2,
} from 'lucide-react'

const AFFILIATE_SIGNUP_URL = 'https://targetpulse.endorsely.com/'

const benefits = [
  { Icon: Repeat,       wrap: 'bg-indigo-600 shadow-indigo-600/10',   title: '20% recurring',       body: 'Earn on every payment your referrals make — month after month, year after year.' },
  { Icon: InfinityIcon, wrap: 'bg-emerald-500 shadow-emerald-500/10', title: 'No earnings cap',      body: "Refer 10 customers or 10,000. There's no ceiling on what you can earn." },
  { Icon: Calendar,     wrap: 'bg-violet-600 shadow-violet-600/10',   title: '3-month attribution', body: 'You get credit if your referral signs up within 3 months of clicking your link.' },
  { Icon: Wallet,       wrap: 'bg-amber-500 shadow-amber-500/10',     title: 'Monthly payouts',     body: 'Get paid every month via PayPal or Wise once you hit the $50 minimum.' },
]

const steps = [
  {
    Icon: Share2,
    wrap: 'bg-indigo-600 shadow-indigo-600/10',
    title: 'Apply in 30 seconds',
    body: 'Sign up to the program, get your unique referral link instantly. No interview, no waiting period.',
  },
  {
    Icon: Megaphone,
    wrap: 'bg-emerald-500 shadow-emerald-500/10',
    title: 'Share your link',
    body: 'Promote Giggal.ai on your blog, newsletter, social, YouTube, or directly with clients who need cleaner email lists.',
  },
  {
    Icon: Wallet,
    wrap: 'bg-violet-600 shadow-violet-600/10',
    title: 'Get paid monthly',
    body: 'Earn 20% of every payment your referrals make — automatically tracked and paid out each month.',
  },
]

const audience = [
  { Icon: MailCheck, wrap: 'bg-indigo-600 shadow-indigo-600/10',   title: 'Email marketers',  body: 'Recommend the tool you already trust to clean lists before campaigns.' },
  { Icon: Building2, wrap: 'bg-emerald-500 shadow-emerald-500/10', title: 'Agencies',         body: 'Earn a recurring revenue stream from every client you onboard.' },
  { Icon: BookOpen,  wrap: 'bg-violet-600 shadow-violet-600/10',   title: 'Course creators',  body: 'Bundle Giggal.ai into your cold email or lead-gen course curriculum.' },
  { Icon: Users,     wrap: 'bg-blue-600 shadow-blue-600/10',       title: 'SaaS communities', body: 'Share with your audience of marketers, founders, and growth pros.' },
]

const exampleRows = [
  { customers: 5,   plan: '$76/mo',  earnings: 76 },
  { customers: 20,  plan: '$76/mo',  earnings: 304 },
  { customers: 50,  plan: '$76/mo',  earnings: 760 },
  { customers: 100, plan: '$76/mo',  earnings: 1520 },
]

const faqs: FaqItem[] = [
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
    a: 'Yes to YouTube, blogs, newsletters, social media, and Reddit. Paid ads on our brand keywords (e.g. "Giggal.ai") are not allowed — anything else is fair game.',
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
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      {/* Ambient light effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-black tracking-[0.16em] text-indigo-700 uppercase">Affiliate Program</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
            Earn 20% recurring
            <span className="block bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent pb-2">
              every month, forever
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Share <Wordmark className="align-baseline" /> with your audience and earn a 20% commission on every payment your
            referrals make — for as long as they stay a customer. No caps, no expiry.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
            <a
              href={AFFILIATE_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
            >
              Join the Affiliate Program
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-sm shadow-sm"
            >
              See how it works
            </a>
          </div>

          {/* Quick stats bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl bg-white border-2 border-slate-200 px-8 py-5 card-vivid-shadow max-w-2xl mx-auto mt-4">
            <div className="text-center">
              <div className="text-xl font-black text-indigo-600">20%</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Recurring</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-200" />
            <div className="text-center">
              <div className="text-xl font-black text-indigo-600">3 months</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Attribution</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-200" />
            <div className="text-center">
              <div className="text-xl font-black text-indigo-600">Monthly</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Payouts</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-200" />
            <div className="text-center">
              <div className="text-xl font-black text-indigo-600">$50</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Min payout</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY JOIN (BENEFITS) ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-black tracking-[0.16em] text-indigo-600 uppercase">Why join</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            One of the most generous programs in email tooling
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">Real recurring revenue, not a one-time bounty.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ Icon, wrap, title, body }) => (
            <div
              key={title}
              className="bg-white border-2 border-slate-200 rounded-2xl p-6 min-h-[190px] hover:border-indigo-500/30 transition-all duration-300 card-vivid-shadow flex flex-col text-left space-y-4"
            >
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

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-black tracking-[0.16em] text-indigo-600 uppercase">How it works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            From sign-up to first payout in days, not months
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map(({ Icon, wrap, title, body }, i) => (
            <div
              key={title}
              className="relative bg-white border-2 border-slate-200 rounded-2xl p-6 min-h-[190px] hover:border-indigo-500/30 transition-all duration-300 card-vivid-shadow flex flex-col text-left space-y-4"
            >
              <span className="absolute top-5 right-6 text-4xl font-black text-slate-100 leading-none select-none pointer-events-none">
                {i + 1}
              </span>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 relative ${wrap}`}>
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

      {/* ── EARNINGS EXAMPLE ─────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-black tracking-[0.16em] text-indigo-600 uppercase">Your potential</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Here&apos;s what you can earn
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            Based on customers on our 100K Popular plan ($76/mo). Other plans pay 20% too.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          <div className="rounded-3xl bg-white border-2 border-slate-200 card-vivid-shadow overflow-hidden">
            <div className="grid grid-cols-3 px-6 py-3.5 border-b-2 border-slate-100 bg-slate-50">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Customers referred</div>
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 text-center">On the plan</div>
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 text-right">Your monthly earnings</div>
            </div>
            <div className="divide-y divide-slate-100">
              {exampleRows.map((row, i) => {
                const isLast = i === exampleRows.length - 1
                return (
                  <div
                    key={i}
                    className={`grid grid-cols-3 px-6 py-4 items-center transition-colors ${
                      isLast ? 'bg-indigo-50/60' : 'hover:bg-slate-50/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                        <Users className="w-4 h-4 text-indigo-600" />
                      </div>
                      <span className="text-[15px] font-black text-slate-900">{row.customers}</span>
                    </div>
                    <div className="text-[13px] text-slate-500 text-center font-bold">{row.plan}</div>
                    <div className="flex items-center justify-end gap-1.5">
                      {isLast && <TrendingUp className="w-4 h-4 text-emerald-600" />}
                      <span className={`text-2xl font-black tracking-tight ${isLast ? 'text-indigo-600' : 'text-slate-900'}`}>
                        ${row.earnings.toLocaleString()}
                      </span>
                      <span className="text-[12px] text-slate-400 font-semibold">/mo</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <p className="text-center text-[12px] text-slate-400 font-medium">
            These numbers are illustrative. Actual earnings depend on which plan your referrals choose.
          </p>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-black tracking-[0.16em] text-indigo-600 uppercase">Who it&apos;s for</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for people who care about deliverability
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            If your audience sends email, you have an audience for Giggal.ai.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {audience.map(({ Icon, wrap, title, body }) => (
            <div
              key={title}
              className="bg-white border-2 border-slate-200 rounded-2xl p-6 min-h-[190px] hover:border-indigo-500/30 transition-all duration-300 card-vivid-shadow flex flex-col text-left space-y-4"
            >
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

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-16">
        <div className="text-center space-y-3">
          <p className="text-[11px] font-black tracking-[0.16em] text-indigo-600 uppercase">FAQ</p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Common questions</h2>
        </div>

        <div className="space-y-6">
          <FaqAccordion items={faqs} />
          <p className="text-center text-[13px] text-slate-500 font-semibold">
            Still have questions?{' '}
            <Link href="/contact-us" className="font-extrabold text-indigo-600 hover:text-indigo-700">
              Talk to us
            </Link>
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/90">Start earning today</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">
            Ready to turn referrals into recurring income?
          </h2>
          <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">
            Sign up in 30 seconds and start earning 20% commission on every payment your referrals make.
          </p>

          <div className="pt-4">
            <a
              href={AFFILIATE_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold rounded-2xl text-base transition-all shadow-md hover:scale-[1.03] active:scale-95 duration-200"
            >
              Join the Affiliate Program
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-indigo-100 font-semibold pt-2">
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
      </section>

      <Footer />
    </main>
  )
}
