import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Wordmark from '@/components/Wordmark'
import { ArrowRight, Check, Sparkles, Zap, Shield, Gauge } from 'lucide-react'

const SIGNUP_URL = 'https://emailverifier.targetpulse.net/sign-up'

export const metadata: Metadata = {
  title: 'Sign Up Free, 1,000 Free Email Verification Credits',
  description: 'Create your free Giggal.ai account in seconds. Get 1,000 free verification credits, no credit card required. Verify catch-all and accept-all email domains with 99% accuracy.',
  alternates: {
    canonical: '/sign-up',
  },
  openGraph: {
    title: 'Sign Up Free, Giggal.ai Email Verifier',
    description: 'Get 1,000 free verification credits to start. No credit card required. Verify catch-all and accept-all email domains with 99% accuracy.',
    url: 'https://targetpulse.net/sign-up',
    type: 'website',
  },
}

const perks = [
  { Icon: Sparkles, wrap: 'bg-indigo-600 shadow-indigo-600/10',   title: '1,000 free credits',     body: 'Verify your first 1,000 emails on us. No card required, no expiry.' },
  { Icon: Zap,      wrap: 'bg-emerald-500 shadow-emerald-500/10', title: 'Real-time results',      body: 'Upload a list and watch verifications stream in instantly.' },
  { Icon: Shield,   wrap: 'bg-violet-600 shadow-violet-600/10',   title: 'Catch-all verification', body: 'Get clear valid or invalid verdicts on catch-all domains other tools skip.' },
  { Icon: Gauge,    wrap: 'bg-amber-500 shadow-amber-500/10',     title: 'Pay-as-you-go pricing',  body: 'From $5 for 3,000 credits. Credits never expire, cancel anytime.' },
]

const trustPoints = [
  'No credit card required',
  'Credits never expire',
  'Cancel anytime',
]

export default function SignUpPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2.5 bg-white border-2 border-slate-200 rounded-2xl px-5 py-2.5 card-vivid-shadow">
          <Wordmark className="text-xl" />
        </div>

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-black tracking-[0.16em] text-indigo-700 uppercase">
              Free trial · No card required
            </span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Sign up free
          <span className="block bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent pb-2">
            start with 1,000 credits
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Create your free Giggal.ai account in under 30 seconds. Verify your first 1,000 emails on us —
          including catch-all and accept-all domains other tools mark as "unknown."
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
          >
            Create your free account
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-sm shadow-sm"
          >
            See pricing
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-4 text-[13px] font-medium text-slate-600">
          {trustPoints.map((point) => (
            <span key={point} className="inline-flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 shrink-0">
                <Check className="w-3 h-3 text-white" />
              </span>
              {point}
            </span>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">What&apos;s included</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything you need to clean your email list
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            Full access to every feature on the free trial — no gated tools, no asterisks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map(({ Icon, wrap, title, body }) => (
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

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">
            Ready to clean your list?
          </h2>
          <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">
            Sign up in 30 seconds. Your first 1,000 verifications are on us.
          </p>
          <div className="pt-4">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold rounded-2xl text-base transition-all shadow-md inline-flex items-center gap-2 hover:scale-[1.03] active:scale-95 duration-200"
            >
              Sign up free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
