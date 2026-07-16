'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Wordmark from '@/components/Wordmark'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import {
  Sparkles, Globe, Mail, CheckCircle2, AlertCircle,
  AlertTriangle, ArrowRight, TrendingDown, Users, Building2,
  Megaphone, MailCheck, Check, Target, ShieldCheck,
} from 'lucide-react'

const APP_URL = 'https://emailverifier.targetpulse.net/sign-up'

const signals = [
  {
    Icon: Mail,
    wrap: 'bg-indigo-600 shadow-indigo-600/10',
    title: 'Deep Mailbox Verification',
    body: 'We confirm the true existence of each mailbox, not just whether the domain accepts everything. Where standard SMTP checks see a generic acceptance and stop, we keep going until we reach a real answer.',
  },
  {
    Icon: Globe,
    wrap: 'bg-violet-600 shadow-violet-600/10',
    title: 'Domain Trust Signals',
    body: 'We review the authentication setup of every domain: SPF, DKIM, DMARC records, SSL certificates, and hosting reputation. Domains configured properly are far more likely to host real mailboxes.',
  },
  {
    Icon: ShieldCheck,
    wrap: 'bg-emerald-500 shadow-emerald-500/10',
    title: 'SEG and Gateway Handling',
    body: 'Addresses protected by Secure Email Gateways such as Mimecast, Proofpoint, and Barracuda are verified directly. The gateway no longer hides whether a real mailbox sits behind the address.',
  },
]

const audience = [
  { Icon: Megaphone, wrap: 'bg-indigo-600 shadow-indigo-600/10', title: 'Cold outreach teams', body: 'Send to verified contacts only. Lower bounce, higher reply rates, healthier sender domains.' },
  { Icon: Building2, wrap: 'bg-violet-600 shadow-violet-600/10', title: 'Marketing agencies', body: 'Clean every client list with the same verifier so reporting and deliverability stay predictable.' },
  { Icon: Users, wrap: 'bg-blue-600 shadow-blue-600/10', title: 'Sales operations', body: 'Keep your CRM full of contacts that actually receive your sequences and product updates.' },
  { Icon: MailCheck, wrap: 'bg-emerald-500 shadow-emerald-500/10', title: 'Newsletter publishers', body: 'Protect open and click metrics by removing addresses that look real but never deliver.' },
]

const faqs: FaqItem[] = [
  {
    q: 'What is a catch-all email domain?',
    a: 'A catch-all domain accepts every email sent to it, even addresses that do not exist. The server simply replies "yes, this exists" to any address, which is why traditional SMTP checks cannot tell you whether the mailbox is real.',
  },
  {
    q: 'Why does catch-all verification cost more credits?',
    a: 'A standard verification is a single check. A catch-all verification runs deeper, including direct mailbox checks on addresses protected by Secure Email Gateways. The extra work is the reason a catch-all check costs 1.5 credits instead of 1.',
  },
  {
    q: 'How accurate is catch-all verification?',
    a: 'Around 99% on standard business lists. Instead of guessing based on SMTP responses alone, we verify the true existence of the mailbox so the verdict you see is the one that holds up when you actually send.',
  },
  {
    q: 'Will catch-all verification slow down my main list?',
    a: 'No. Catch-all checks run alongside your regular verification, not after. Your full list still completes in the same window.',
  },
  {
    q: 'Can I verify only the catch-all emails from a list I already cleaned somewhere else?',
    a: 'Yes. Open Catch-All Detection in your dashboard, paste or upload only the addresses you want to check, and verify just those.',
  },
  {
    q: 'What happens if a catch-all check comes back as Unknown?',
    a: 'That is rare, but if we cannot reach a verdict the credit is refunded automatically. You only pay for verifications we can complete.',
  },
]

const EMAIL_COUNT = 49621

export default function CatchAllVerificationPage() {
  const [toggleOn, setToggleOn] = useState(true)

  const rate = toggleOn ? 1.5 : 1
  const total = Math.round(EMAIL_COUNT * rate)
  const extra = total - EMAIL_COUNT

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      {/* Ambient light effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-24 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left: Headline + copy */}
        <div className="min-w-0 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-black tracking-[0.16em] text-indigo-700 uppercase">
              Catch-All Verification
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
            Catch-All Email Verification with{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
              Real Verdicts
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
            Most verifiers stop at catch-all and accept-all domains. Giggal.ai confirms the
            true existence of each mailbox, including addresses sitting behind Secure Email
            Gateways like Mimecast and Proofpoint, with 99% accuracy.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
            >
              Start verifying catch-all emails
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link
              href="/pricing"
              className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-center text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              See pricing
            </Link>
          </div>

          <p className="text-[12px] text-slate-400 font-medium">
            1,000 free credits to start. No card required.
          </p>
        </div>

        {/* Right: Toggle mockup card (from app screenshot) */}
        <div className="min-w-0">
          <div className="bg-white border-2 border-slate-200 rounded-3xl card-vivid-shadow overflow-hidden">
            <div className="bg-indigo-600 px-6 py-5 text-white">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-300 mb-2">
                <Sparkles className="w-3 h-3" />
                Deep Verification Enabled
              </div>
              <div className="text-xl font-black mb-1">Confirm Email Validation</div>
              <div className="text-[12px] text-white/70">leads_2026.csv</div>
            </div>

            <div className="p-5">
              <div className="grid grid-cols-3 gap-2 mb-5">
                <div className="rounded-xl bg-slate-50 border border-slate-100 p-3 text-center">
                  <div className="text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">Emails</div>
                  <div className="text-lg font-black text-slate-900">{EMAIL_COUNT.toLocaleString()}</div>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-100 p-3 text-center">
                  <div className="text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">Rate</div>
                  <div className="text-lg font-black text-slate-900 transition-all">{rate}</div>
                  <div className="text-[9px] text-slate-400 font-semibold">credits / email</div>
                </div>
                <div className={`rounded-xl p-3 text-center transition-colors ${toggleOn ? 'bg-indigo-50 border border-indigo-100' : 'bg-slate-50 border border-slate-100'}`}>
                  <div className={`text-[9px] font-black uppercase tracking-wider mb-1 ${toggleOn ? 'text-indigo-700' : 'text-slate-400'}`}>Total</div>
                  <div className={`text-lg font-black ${toggleOn ? 'text-indigo-700' : 'text-slate-900'}`}>{total.toLocaleString()}</div>
                  {extra > 0 && (
                    <div className="text-[9px] text-indigo-600 font-bold">+{extra.toLocaleString()}</div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50/40 p-4">
                <div className="flex items-start gap-3 mb-3">
                  <button
                    type="button"
                    onClick={() => setToggleOn(!toggleOn)}
                    className={`relative w-11 h-6 rounded-full flex-shrink-0 transition-colors ${toggleOn ? 'bg-indigo-600' : 'bg-slate-300'}`}
                    aria-label="Toggle catch-all verification"
                  >
                    <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${toggleOn ? 'left-[22px]' : 'left-0.5'}`} />
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[14px] font-black text-slate-900">Include Catch-All Verification</span>
                      <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded-full">
                        <Sparkles className="w-2.5 h-2.5" />
                        Recommended
                      </span>
                    </div>
                    <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
                      On a typical list, around 30% of emails sit on catch-all domains.
                      We verify each one and most turn out to be valid.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div className="rounded-xl bg-white border border-slate-100 p-2.5 text-center">
                    <Target className="w-3.5 h-3.5 text-indigo-600 mx-auto mb-1" />
                    <div className="text-[11px] font-black text-slate-900">~80% Valid</div>
                  </div>
                  <div className="rounded-xl bg-white border border-slate-100 p-2.5 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 mx-auto mb-1" />
                    <div className="text-[11px] font-black text-slate-900">Cleaner List</div>
                  </div>
                  <div className="rounded-xl bg-white border border-slate-100 p-2.5 text-center">
                    <TrendingDown className="w-3.5 h-3.5 text-emerald-600 mx-auto mb-1" />
                    <div className="text-[11px] font-black text-slate-900">&lt;3% Bounce</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS A CATCH-ALL DOMAIN ─────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-8">
        <div className="text-center space-y-3">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">The Background</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            What is a catch-all email domain?
          </h2>
        </div>
        <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          <p>
            A catch-all domain accepts every email sent to it, even addresses that do not
            exist. The server replies with a generic acceptance to any address, so a normal
            SMTP check cannot tell you whether a real mailbox is behind the address.
          </p>
          <p>
            On a typical sales or marketing list, around 30 percent of contacts sit on
            catch-all domains. Most verification tools see that pattern, give up, and label
            everything as Risky or Unknown. You end up with a long list of contacts you
            cannot confidently use.
          </p>
          <p>
            That leaves two bad choices. Send to them and risk bounces, spam traps, and a
            damaged sender reputation. Or delete them and lose real customers you could have
            reached. Catch-all verification solves this by checking the actual existence of
            the mailbox instead of guessing.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS: 3 SIGNALS ─────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Giggal.ai verifies catch-all emails
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            Every catch-all address goes through multiple layers of verification that combine
            into a single clear verdict. You see Valid or Invalid, not a technical report.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {signals.map(({ Icon, wrap, title, body }) => (
            <div
              key={title}
              className="bg-white border-2 border-slate-200 rounded-2xl p-6 min-h-[190px] hover:border-indigo-500/30 transition-all duration-300 card-vivid-shadow flex flex-col text-left space-y-4"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${wrap}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900 leading-tight">{title}</h3>
                <p className="text-[13px] sm:text-sm text-slate-500 font-semibold leading-normal">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPARISON: OLD WAY vs GIGGAL.AI ─────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">Clear Results</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            From guesswork to clear verdicts
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            See the difference between a typical verifier and Giggal.ai on the same list of
            48,000 emails.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Old way card */}
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow space-y-5">
            <span className="inline-block text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-100 px-3 py-1 rounded-lg">A typical verifier</span>
            <div className="text-[15px] font-bold text-slate-700">48,028 emails verified</div>

            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3">
                <div className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-[13px] font-bold">Deliverable</span>
                </div>
                <span className="text-lg font-black text-emerald-700">31,566</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-rose-50 border border-rose-100 px-4 py-3">
                <div className="flex items-center gap-2 text-rose-700">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-[13px] font-bold">Undeliverable</span>
                </div>
                <span className="text-lg font-black text-rose-700">5,982</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-amber-50 border border-amber-100 px-4 py-3">
                <div className="flex items-center gap-2 text-amber-700">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-[13px] font-bold">Catch-all</span>
                </div>
                <span className="text-lg font-black text-amber-700">10,480</span>
              </div>
            </div>

            <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
              Over 10,000 catch-all contacts you cannot confidently send to. Around 80 percent
              of them are real, but you have no way to know which.
            </p>
          </div>

          {/* Giggal.ai card */}
          <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 card-vivid-shadow ring-2 ring-indigo-600/5 relative overflow-hidden space-y-5">
            <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full bg-emerald-500/5 blur-xl pointer-events-none" />

            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="flex items-center bg-indigo-50/60 border border-indigo-100/60 px-3 py-1.5 rounded-xl">
                <Wordmark className="text-sm sm:text-base" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700">With catch-all verification</span>
            </div>

            <div className="text-[15px] font-bold text-slate-700">48,028 emails verified</div>

            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3">
                <div className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-[13px] font-bold">Valid</span>
                </div>
                <span className="text-lg font-black text-emerald-700">39,950</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-rose-50 border border-rose-100 px-4 py-3">
                <div className="flex items-center gap-2 text-rose-700">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-[13px] font-bold">Invalid</span>
                </div>
                <span className="text-lg font-black text-rose-700">8,078</span>
              </div>
            </div>

            <p className="text-[12px] text-indigo-800 font-semibold leading-relaxed">
              Around 8,400 more deliverable contacts recovered from the catch-all pile.
              Every address gets a clear verdict.
            </p>
          </div>
        </div>
      </section>

      {/* ── TWO WAYS TO RUN IT ─────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">In the App</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Two ways to run catch-all verification
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 bg-indigo-600 shadow-indigo-600/10">
              <span className="text-lg font-black">1</span>
            </div>
            <h3 className="text-base font-black text-slate-900 leading-tight">During bulk verification</h3>
            <p className="text-[13px] sm:text-sm text-slate-500 font-semibold leading-relaxed">
              When you upload a list, flip on the Include Catch-All Verification toggle.
              Every regular and catch-all address is checked in one run. Catch-all addresses
              cost 1.5 credits each instead of 1.
            </p>
            <div className="text-[12px] text-slate-400 font-bold">Best for fresh lists you have not verified yet.</div>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 bg-emerald-500 shadow-emerald-500/10">
              <span className="text-lg font-black">2</span>
            </div>
            <h3 className="text-base font-black text-slate-900 leading-tight">As a standalone Catch-All Detection task</h3>
            <p className="text-[13px] sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Already ran a list without catch-all verification? Open Catch-All Detection in
              your dashboard, paste or upload only the catch-all addresses, and verify just
              those. Same 1.5 credits per email.
            </p>
            <div className="text-[12px] text-slate-400 font-bold">Best for lists you cleaned somewhere else and want to recover.</div>
          </div>
        </div>
      </section>

      {/* ── WHO IT IS FOR ──────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">Who Uses It</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for teams that depend on deliverability
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* ── PRICING ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pay only for what you verify
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            A regular email verification costs 1 credit. A catch-all email verification costs
            1.5 credits. No monthly fees, no minimums, and credits never expire.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow text-left space-y-3">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              Standard
            </div>
            <div className="text-3xl font-black text-slate-900">1 credit</div>
            <div className="text-[13px] text-slate-500 font-semibold">per email verification</div>
          </div>
          <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 card-vivid-shadow ring-2 ring-indigo-600/5 text-left space-y-3">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Catch-All
            </div>
            <div className="text-3xl font-black text-indigo-700">1.5 credits</div>
            <div className="text-[13px] text-slate-500 font-semibold">per catch-all verification</div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-800 font-extrabold text-sm transition-colors"
          >
            See full pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-16">
        <div className="text-center space-y-3">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">FAQ</p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Catch-all verification questions
          </h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">
            Get clear verdicts on every catch-all address
          </h2>
          <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">
            Start with 1,000 free credits. No card required. See what your list really looks like.
          </p>
          <div className="pt-4">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold rounded-2xl text-base transition-all shadow-md hover:scale-[1.03] active:scale-95 duration-200"
            >
              Start verifying for free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
          <div className="flex items-center justify-center gap-5 text-[12px] text-indigo-100 font-medium flex-wrap pt-2">
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> Free trial
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> Credits never expire
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> Refunds on Unknown
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
