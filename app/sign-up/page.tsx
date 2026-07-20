import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, Check, Sparkles, Zap, Shield, Gauge } from 'lucide-react'

const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'

export const metadata: Metadata = {
  title: 'Sign Up Free, 1,000 Free Email Verification Credits',
  description: 'Create your free Giggal.ai account in seconds. Get 1,000 free verification credits, no credit card required. Verify catch-all and accept-all email domains with 99% accuracy.',
  alternates: {
    canonical: '/sign-up',
  },
  openGraph: {
    title: 'Sign Up Free, Giggal.ai Email Verifier',
    description: 'Get 1,000 free verification credits to start. No credit card required. Verify catch-all and accept-all email domains with 99% accuracy.',
    url: 'https://giggal.ai/sign-up',
    type: 'website',
  },
}

const perks = [
  { Icon: Sparkles, title: '1,000 free credits',          body: 'Verify your first 1,000 emails on us. No card required, no expiry.' },
  { Icon: Zap,      title: 'Real-time results',           body: 'Upload a list and watch verifications stream in instantly.' },
  { Icon: Shield,   title: 'Catch-all verification',      body: 'Get clear valid or invalid verdicts on catch-all domains other tools skip.' },
  { Icon: Gauge,    title: 'Pay-as-you-go pricing',       body: 'From $5 for 3,000 credits. Credits never expire, cancel anytime.' },
]

export default function SignUpPage() {
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
                Free trial · No card required
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] text-slate-900 mb-5 leading-[1.05]">
              Sign up free
              <span className="block bg-gradient-to-r from-primary-600 via-primary-700 to-accent-500 bg-clip-text text-transparent pb-2">
                start with 1,000 credits
              </span>
            </h1>

            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto">
              Create your free Giggal.ai account in under 30 seconds. Verify your first 1,000 emails on us —
              including catch-all and accept-all domains other tools mark as "unknown."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-bold text-[15px] transition-all duration-200 shadow-[0_4px_24px_rgba(79, 70, 229,0.25)] hover:shadow-[0_6px_28px_rgba(79, 70, 229,0.35)]"
              >
                Create your free account
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-4 text-slate-600 hover:text-primary-700 font-semibold text-[14px] transition-colors"
              >
                See pricing
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] text-slate-500">
              <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> No credit card required</span>
              <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Credits never expire</span>
              <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">What&apos;s included</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 mb-3">
              Everything you need to clean your email list
            </h2>
            <p className="text-[15px] text-slate-500">
              Full access to every feature on the free trial — no gated tools, no asterisks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {perks.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-white p-6 hover:border-primary-300/60 hover:shadow-[0_6px_24px_rgba(79, 70, 229,0.10)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary-50 border border-primary-100/60 mb-4">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-12 text-center text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-400/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3" />

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                  Ready to clean your list?
                </h2>
                <p className="text-white/80 text-[16px] mb-8 max-w-xl mx-auto">
                  Sign up in 30 seconds. Your first 1,000 verifications are on us.
                </p>
                <a
                  href={SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-xl font-bold text-[15px] hover:bg-slate-50 transition-colors duration-200 shadow-xl"
                >
                  Sign up free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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
