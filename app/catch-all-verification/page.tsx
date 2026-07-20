'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Sparkles, Globe, Mail, CheckCircle2, AlertCircle,
  AlertTriangle, ArrowRight, TrendingDown, Users, Building2,
  Megaphone, MailCheck, Check, Target, ShieldCheck,
} from 'lucide-react'

const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const signals = [
  {
    Icon: Mail,
    title: 'Deep Mailbox Verification',
    body: 'We confirm the true existence of each mailbox, not just whether the domain accepts everything. Where standard SMTP checks see a generic acceptance and stop, we keep going until we reach a real answer.',
  },
  {
    Icon: Globe,
    title: 'Domain Trust Signals',
    body: 'We review the authentication setup of every domain: SPF, DKIM, DMARC records, SSL certificates, and hosting reputation. Domains configured properly are far more likely to host real mailboxes.',
  },
  {
    Icon: ShieldCheck,
    title: 'SEG and Gateway Handling',
    body: 'Addresses protected by Secure Email Gateways such as Mimecast, Proofpoint, and Barracuda are verified directly. The gateway no longer hides whether a real mailbox sits behind the address.',
  },
]

const audience = [
  { Icon: Megaphone, title: 'Cold outreach teams', body: 'Send to verified contacts only. Lower bounce, higher reply rates, healthier sender domains.' },
  { Icon: Building2, title: 'Marketing agencies', body: 'Clean every client list with the same verifier so reporting and deliverability stay predictable.' },
  { Icon: Users, title: 'Sales operations', body: 'Keep your CRM full of contacts that actually receive your sequences and product updates.' },
  { Icon: MailCheck, title: 'Newsletter publishers', body: 'Protect open and click metrics by removing addresses that look real but never deliver.' },
]

const faqs = [
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
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [toggleOn, setToggleOn] = useState(true)

  const rate = toggleOn ? 1.5 : 1
  const total = Math.round(EMAIL_COUNT * rate)
  const extra = total - EMAIL_COUNT

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="dot-grid absolute inset-0 opacity-[0.4]" />
          <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-primary-50 rounded-full blur-[130px] -translate-y-1/3 translate-x-1/4 opacity-70" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-accent-50 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 opacity-60" />
        </div>

        <div className="container-custom">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Left: Headline + copy */}
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-primary-50/80 px-4 py-1.5 mb-6">
                <Sparkles className="w-3 h-3 text-primary-600" />
                <span className="text-[11px] font-semibold tracking-[0.16em] text-primary-700 uppercase">
                  Catch-All Verification
                </span>
              </div>

              <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.02em] text-slate-900 mb-5 leading-[1.05]">
                Catch-All Email Verification with Real Verdicts
              </h1>

              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Most verifiers stop at catch-all and accept-all domains. Giggal.ai confirms the
                true existence of each mailbox, including addresses sitting behind Secure Email
                Gateways like Mimecast and Proofpoint, with 99% accuracy.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-3">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-bold text-[15px] transition-all duration-200 shadow-[0_4px_24px_rgba(41,92,81,0.25)]"
                >
                  Start verifying catch-all emails
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-slate-700 hover:text-primary-700 font-semibold text-[14px] transition-colors"
                >
                  See pricing
                </a>
              </div>

              <p className="mt-5 text-[12px] text-slate-400 font-medium">
                1,000 free credits to start. No card required.
              </p>
            </div>

            {/* Right: Toggle mockup card (from app screenshot) */}
            <div className="relative">
              <div className="rounded-2xl bg-white border border-slate-100 shadow-[0_8px_48px_rgba(0,0,0,0.10)] overflow-hidden">
                <div className="bg-gradient-to-br from-primary-700 to-primary-800 px-6 py-5 text-white">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-300 mb-2">
                    <Sparkles className="w-3 h-3" />
                    Deep Verification Enabled
                  </div>
                  <div className="text-xl font-bold mb-1">Confirm Email Validation</div>
                  <div className="text-[12px] text-white/70">leads_2026.csv</div>
                </div>

                <div className="p-5">
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    <div className="rounded-xl bg-slate-50 p-3 text-center">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Emails</div>
                      <div className="text-lg font-extrabold text-slate-900">{EMAIL_COUNT.toLocaleString()}</div>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3 text-center">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Rate</div>
                      <div className="text-lg font-extrabold text-slate-900 transition-all">{rate}</div>
                      <div className="text-[9px] text-slate-400">credits / email</div>
                    </div>
                    <div className={`rounded-xl p-3 text-center transition-colors ${toggleOn ? 'bg-primary-50 border border-primary-100' : 'bg-slate-50 border border-slate-100'}`}>
                      <div className={`text-[9px] font-bold uppercase tracking-wider mb-1 ${toggleOn ? 'text-primary-700' : 'text-slate-400'}`}>Total</div>
                      <div className={`text-lg font-extrabold ${toggleOn ? 'text-primary-700' : 'text-slate-900'}`}>{total.toLocaleString()}</div>
                      {extra > 0 && (
                        <div className="text-[9px] text-primary-600 font-semibold">+{extra.toLocaleString()}</div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-xl border-2 border-primary-200 bg-primary-50/40 p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <button
                        type="button"
                        onClick={() => setToggleOn(!toggleOn)}
                        className={`relative w-11 h-6 rounded-full flex-shrink-0 transition-colors ${toggleOn ? 'bg-primary-600' : 'bg-slate-300'}`}
                        aria-label="Toggle catch-all verification"
                      >
                        <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${toggleOn ? 'left-[22px]' : 'left-0.5'}`} />
                      </button>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-[14px] font-bold text-slate-900">Include Catch-All Verification</span>
                          <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-accent-700 bg-accent-50 border border-accent-200/70 px-2 py-0.5 rounded-full">
                            <Sparkles className="w-2.5 h-2.5" />
                            Recommended
                          </span>
                        </div>
                        <p className="text-[12px] text-slate-500 leading-relaxed">
                          On a typical list, around 30% of emails sit on catch-all domains.
                          We verify each one and most turn out to be valid.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-3">
                      <div className="rounded-lg bg-white border border-slate-100 p-2.5 text-center">
                        <Target className="w-3.5 h-3.5 text-primary-600 mx-auto mb-1" />
                        <div className="text-[11px] font-bold text-slate-900">~80% Valid</div>
                      </div>
                      <div className="rounded-lg bg-white border border-slate-100 p-2.5 text-center">
                        <ShieldCheck className="w-3.5 h-3.5 text-primary-600 mx-auto mb-1" />
                        <div className="text-[11px] font-bold text-slate-900">Cleaner List</div>
                      </div>
                      <div className="rounded-lg bg-white border border-slate-100 p-2.5 text-center">
                        <TrendingDown className="w-3.5 h-3.5 text-emerald-600 mx-auto mb-1" />
                        <div className="text-[11px] font-bold text-slate-900">&lt;3% Bounce</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS A CATCH-ALL DOMAIN ─────────────────────── */}
      <section className="py-16 md:py-20 bg-slate-50/60 border-y border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3 text-center">The Background</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 mb-6 text-center leading-[1.1]">
              What is a catch-all email domain?
            </h2>
            <div className="space-y-5 text-[16px] text-slate-600 leading-relaxed">
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
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS: 3 SIGNALS ─────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 mb-4 leading-[1.1]">
              How Giggal.ai verifies catch-all emails
            </h2>
            <p className="text-[16px] text-slate-500 leading-relaxed">
              Every catch-all address goes through multiple layers of verification that combine
              into a single clear verdict. You see Valid or Invalid, not a technical report.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {signals.map(({ Icon, title, body }, i) => (
              <div
                key={title}
                className="relative rounded-2xl border border-slate-100 bg-white p-6 hover:border-primary-300/60 hover:shadow-[0_6px_24px_rgba(41,92,81,0.10)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="absolute -top-3 left-6 bg-gradient-to-br from-primary-600 to-primary-700 text-white text-[12px] font-bold w-7 h-7 flex items-center justify-center rounded-lg shadow-md">
                  {i + 1}
                </div>
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary-50 border border-primary-100/60 mb-4 mt-2">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON: OLD WAY vs GIGGAL.AI ─────────────── */}
      <section className="py-16 md:py-20 bg-slate-50/60 border-y border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">Clear Results</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 mb-4 leading-[1.1]">
              From guesswork to clear verdicts
            </h2>
            <p className="text-[16px] text-slate-500 leading-relaxed">
              See the difference between a typical verifier and Giggal.ai on the same list of
              48,000 emails.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {/* Old way card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">A typical verifier</div>
              <div className="text-[15px] font-semibold text-slate-700 mb-5">48,028 emails verified</div>

              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-3">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[13px] font-semibold">Deliverable</span>
                  </div>
                  <span className="text-[18px] font-extrabold text-emerald-700">31,566</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-rose-50 px-4 py-3">
                  <div className="flex items-center gap-2 text-rose-700">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-[13px] font-semibold">Undeliverable</span>
                  </div>
                  <span className="text-[18px] font-extrabold text-rose-700">5,982</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-orange-50 border border-orange-100 px-4 py-3">
                  <div className="flex items-center gap-2 text-orange-700">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-[13px] font-semibold">Catch-all</span>
                  </div>
                  <span className="text-[18px] font-extrabold text-orange-700">10,480</span>
                </div>
              </div>

              <p className="mt-5 text-[12px] text-slate-500 leading-relaxed">
                Over 10,000 catch-all contacts you cannot confidently send to. Around 80 percent
                of them are real, but you have no way to know which.
              </p>
            </div>

            {/* Giggal.ai card */}
            <div className="rounded-2xl border-2 border-primary-300/70 bg-gradient-to-br from-primary-50 via-white to-primary-50/30 p-6 shadow-[0_4px_28px_rgba(41,92,81,0.10)] relative">
              <div className="absolute -top-3 left-6">
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                  <Sparkles className="w-2.5 h-2.5" />
                  GIGGAL.AI
                </span>
              </div>

              <div className="text-[10px] font-bold uppercase tracking-wider text-primary-700 mb-3 mt-1">With catch-all verification</div>
              <div className="text-[15px] font-semibold text-slate-700 mb-5">48,028 emails verified</div>

              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-3">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[13px] font-semibold">Valid</span>
                  </div>
                  <span className="text-[18px] font-extrabold text-emerald-700">39,950</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-rose-50 px-4 py-3">
                  <div className="flex items-center gap-2 text-rose-700">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-[13px] font-semibold">Invalid</span>
                  </div>
                  <span className="text-[18px] font-extrabold text-rose-700">8,078</span>
                </div>
              </div>

              <p className="mt-5 text-[12px] text-primary-800 font-medium leading-relaxed">
                Around 8,400 more deliverable contacts recovered from the catch-all pile.
                Every address gets a clear verdict.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TWO WAYS TO RUN IT ─────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">In the App</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 mb-4 leading-[1.1]">
              Two ways to run catch-all verification
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-100 bg-white p-7 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-50 border border-primary-100/60 mb-4">
                <span className="text-primary-700 font-extrabold">1</span>
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-2">During bulk verification</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed mb-3">
                When you upload a list, flip on the Include Catch-All Verification toggle.
                Every regular and catch-all address is checked in one run. Catch-all addresses
                cost 1.5 credits each instead of 1.
              </p>
              <div className="text-[12px] text-slate-400 font-medium">Best for fresh lists you have not verified yet.</div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-7 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-50 border border-primary-100/60 mb-4">
                <span className="text-primary-700 font-extrabold">2</span>
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-2">As a standalone Catch-All Detection task</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed mb-3">
                Already ran a list without catch-all verification? Open Catch-All Detection in
                your dashboard, paste or upload only the catch-all addresses, and verify just
                those. Same 1.5 credits per email.
              </p>
              <div className="text-[12px] text-slate-400 font-medium">Best for lists you cleaned somewhere else and want to recover.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT IS FOR ──────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-slate-50/60 border-y border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">Who Uses It</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 mb-4 leading-[1.1]">
              Built for teams that depend on deliverability
            </h2>
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

      {/* ── PRICING ────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 mb-5 leading-[1.1]">
              Pay only for what you verify
            </h2>
            <p className="text-[16px] text-slate-500 mb-10 leading-relaxed">
              A regular email verification costs 1 credit. A catch-all email verification costs
              1.5 credits. No monthly fees, no minimums, and credits never expire.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 text-left">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full mb-3">
                  <span className="w-1 h-1 rounded-full bg-slate-400" />
                  Standard
                </div>
                <div className="text-3xl font-extrabold text-slate-900 mb-1">1 credit</div>
                <div className="text-[13px] text-slate-500">per email verification</div>
              </div>
              <div className="rounded-2xl border-2 border-primary-300/70 bg-gradient-to-br from-primary-50 via-white to-primary-50/40 p-6 text-left">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary-700 bg-primary-100 px-2 py-0.5 rounded-full mb-3">
                  <span className="w-1 h-1 rounded-full bg-primary-500" />
                  Catch-All
                </div>
                <div className="text-3xl font-extrabold text-primary-700 mb-1">1.5 credits</div>
                <div className="text-[13px] text-slate-500">per catch-all verification</div>
              </div>
            </div>

            <a
              href="/pricing"
              className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-semibold text-[14px] transition-colors"
            >
              See full pricing
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-slate-50/60 border-y border-slate-100">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 leading-[1.1]">
                Catch-all verification questions
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 divide-y divide-slate-100">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-slate-50/50 transition-colors"
                  >
                    <h3 className="text-[15px] font-semibold text-slate-900 m-0">{faq.q}</h3>
                    <span className="text-slate-400 text-xl flex-shrink-0 font-light">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: openFaq === i ? '500px' : '0',
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

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="py-20 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-10 md:p-12 text-center text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-400/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3" />

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3 leading-[1.1]">
                  Get clear verdicts on every catch-all address
                </h2>
                <p className="text-white/80 text-[16px] mb-8 max-w-xl mx-auto">
                  Start with 1,000 free credits. No card required. See what your list really looks like.
                </p>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-xl font-bold text-[15px] hover:bg-slate-50 transition-colors duration-200 shadow-xl"
                >
                  Start verifying for free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <div className="mt-5 flex items-center justify-center gap-5 text-[12px] text-white/70 flex-wrap">
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
