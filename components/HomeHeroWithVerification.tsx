'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle2, AlertCircle, Loader2, ShieldCheck,
  HelpCircle, AlertTriangle, Mail, AtSign, FileCheck, Zap, Coins,
} from 'lucide-react'
import EmailDetailsModal, { PublicEmailValidationResult } from './EmailDetailsModal'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

async function verifyEmailPublic(email: string): Promise<{
  rateLimited: boolean
  result?: PublicEmailValidationResult
  message?: string
}> {
  const res = await fetch(`${BACKEND_URL}/api/public/validate-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
  const data = await res.json().catch(() => ({}))
  if (res.status === 429) {
    return { rateLimited: true, message: data.message || 'You can verify up to 5 emails per hour as a guest. Sign up for unlimited verification.' }
  }
  if (!res.ok || !data.success) throw new Error(data.error || 'Validation failed')
  return { rateLimited: false, result: data.data as PublicEmailValidationResult }
}

const checks = [
  { title: 'Syntax check', description: 'Validates email format to prevent hard bounces and invalid addresses.' },
  { title: 'MX / domain check', description: 'Confirms the domain has valid MX records so it can receive email.' },
  { title: 'Role-based & free-mail detection', description: 'Flags role accounts (support@, info@) and free providers for deliverability scoring.' },
  { title: 'Disposable email screening', description: 'Detects temporary domains that are not suitable for long-term contact lists.' },
  { title: 'Blacklist check', description: 'Checks domain and IPs against reputation lists to flag known bad senders.' },
  { title: 'SMTP mailbox verification', description: 'Connects to the mail server and verifies whether the mailbox exists and accepts mail.' },
  { title: 'Catch-all detection', description: 'Identifies domains that accept all addresses, so deliverability is uncertain.' },
]

const outcomes: {
  label: string
  color: string
  icon: typeof CheckCircle2
  description: string
  refund?: boolean
}[] = [
  { label: 'Deliverable', color: 'emerald', icon: CheckCircle2, description: 'Email is valid, reachable, and passed checks. Safe to keep in your contact database.' },
  { label: 'Risky', color: 'amber', icon: AlertTriangle, description: 'May accept mail but has higher risk: catch-all domain, full mailbox, or lower deliverability.' },
  { label: 'Undeliverable', color: 'rose', icon: AlertTriangle, description: 'Not deliverable due to invalid format, domain, rejected mailbox, disposable email, or blacklisted.' },
  { label: 'Unknown', color: 'slate', icon: HelpCircle, description: 'Could not be verified reliably: timeout, server unavailable, or connection issues.', refund: true },
]

const colorClasses: Record<string, { chip: string; icon: string; border: string; dot: string }> = {
  emerald: { chip: 'bg-emerald-50 text-emerald-700', icon: 'bg-emerald-50 text-emerald-600', border: 'border-emerald-100 hover:border-emerald-200', dot: 'bg-emerald-500' },
  amber:   { chip: 'bg-amber-50 text-amber-700',   icon: 'bg-amber-50 text-amber-600',   border: 'border-amber-100 hover:border-amber-200',   dot: 'bg-amber-500' },
  rose:    { chip: 'bg-rose-50 text-rose-700',     icon: 'bg-rose-50 text-rose-600',     border: 'border-rose-100 hover:border-rose-200',     dot: 'bg-rose-500' },
  slate:   { chip: 'bg-slate-50 text-slate-600',   icon: 'bg-slate-50 text-slate-500',   border: 'border-slate-100 hover:border-slate-200',   dot: 'bg-slate-400' },
}

export default function HomeHeroWithVerification() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'checking' | 'done' | 'error' | 'ratelimit'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [rateLimitMsg, setRateLimitMsg] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalResult, setModalResult] = useState<PublicEmailValidationResult | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) return
    setStatus('checking')
    setErrorMsg('')
    setRateLimitMsg('')
    try {
      const { rateLimited, result, message } = await verifyEmailPublic(trimmed)
      if (rateLimited) {
        setStatus('ratelimit')
        setRateLimitMsg(message || 'Rate limit reached. Sign up for unlimited verification.')
        return
      }
      if (result) {
        setModalResult(result)
        setModalOpen(true)
        setStatus('done')
      }
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Verification failed. Please try again.')
    }
  }

  return (
    <section id="email-verifier" className="relative pt-20 pb-14 md:pt-28 md:pb-24 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-[0.45]" />
        <div className="absolute top-0 right-0 w-[700px] h-[600px] bg-primary-50 rounded-full blur-[130px] -translate-y-1/3 translate-x-1/4 opacity-70" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-accent-50 rounded-full blur-[110px] translate-y-1/4 -translate-x-1/4 opacity-60" />
      </div>

      {/* Floating background icons — hidden on mobile to avoid overlapping content */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-[7%] w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center shadow-lg animate-[float_6s_ease-in-out_infinite]">
          <Mail className="w-5 h-5 text-primary-600" />
        </div>
        <div className="absolute top-28 right-[10%] w-10 h-10 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center shadow-md animation-delay-2000 animate-[float_6s_ease-in-out_infinite]">
          <AtSign className="w-5 h-5 text-accent-600" />
        </div>
        <div className="absolute top-48 left-[22%] w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center shadow-lg animation-delay-4000 animate-[float_6s_ease-in-out_infinite]">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
        </div>
        <div className="absolute bottom-52 left-[14%] w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-md animate-[float_6s_ease-in-out_infinite]">
          <FileCheck className="w-5 h-5 text-primary-600" />
        </div>
        <div className="absolute top-64 right-[26%] w-9 h-9 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center shadow-md animation-delay-4000 animate-[float_6s_ease-in-out_infinite]">
          <Zap className="w-4 h-4 text-amber-600" />
        </div>
      </div>

      <div className="container-custom relative">
        {/* Hero Text */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary-200/60 bg-primary-50/80 px-4 py-1.5 mb-6 md:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.16em] text-primary-700 uppercase">
              Email Verifier by TargetPulse
            </span>
          </div>

          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] leading-[1.05] text-slate-900 mb-5 md:mb-6">
            Verify emails
            <span className="block bg-gradient-to-r from-primary-600 via-primary-700 to-accent-500 bg-clip-text text-transparent pb-2">
              before you hit send
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-normal">
            TargetPulse cleans your email lists in seconds — removing invalid addresses so every campaign lands in real inboxes.
          </p>

          {/* Email Form */}
          <div className="max-w-xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 p-1.5 rounded-2xl border border-slate-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_32px_rgba(0,0,0,0.10)] transition-shadow duration-300"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="flex-1 px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 bg-transparent border-none outline-none"
              />
              <button
                type="submit"
                disabled={status === 'checking'}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold rounded-xl transition-colors duration-200 min-w-[130px]"
              >
                {status === 'checking' ? (
                  <><Loader2 className="h-4 w-4 animate-spin" />Verifying…</>
                ) : 'Verify email'}
              </button>
            </form>

            {status === 'error' && (
              <div className="mt-4 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs bg-rose-50 text-rose-700 border border-rose-100">
                  <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                  <span className="font-medium">{errorMsg}</span>
                </div>
              </div>
            )}

            {status === 'ratelimit' && (
              <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-center">
                <p className="text-sm font-semibold text-amber-800 mb-1">Free limit reached</p>
                <p className="text-xs text-amber-700 mb-3">{rateLimitMsg}</p>
                <a
                  href="https://emailverifier.targetpulse.net/sign-up"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-xs font-semibold transition-colors"
                >
                  Sign up free — unlimited verification
                </a>
              </div>
            )}
          </div>

          <p className="mt-3 text-[12px] text-slate-400 font-medium">
            Try 5 emails free · No account needed · 1 credit = 1 email
          </p>

          {modalResult && (
            <EmailDetailsModal
              open={modalOpen}
              onClose={() => setModalOpen(false)}
              emailDetails={modalResult}
            />
          )}

          {/* Stats */}
          <div className="mt-14 flex items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">10M+</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Emails verified</p>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">98.5%</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Accuracy rate</p>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">&lt;1s</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Per email</p>
            </div>
          </div>
        </div>

        {/* Verification Explainer */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-10 shadow-[0_2px_40px_rgba(0,0,0,0.04)]">
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center">
            {/* Left: Checks */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
                Verification checks
              </p>
              <p className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">
                7 layers of email validation
              </p>

              <div className="space-y-2">
                {checks.map((item) => (
                  <div
                    key={item.title}
                    className="relative flex gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3.5 hover:border-primary-200/80 hover:shadow-[0_2px_16px_rgba(41,92,81,0.07)] hover:-translate-y-0.5 transition-all duration-200 group"
                  >
                    {/* Branch: card right edge → vertical bus */}
                    <div
                      className="hidden lg:block absolute left-full top-1/2 h-px w-5"
                      style={{ backgroundColor: 'rgba(41,92,81,0.3)' }}
                    />
                    <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-primary-50 text-primary-600 flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                      <ShieldCheck className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-slate-800 group-hover:text-primary-700 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[13px] text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center: Logo hub with mind-map connectors */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="hidden lg:flex items-center justify-center self-stretch"
              style={{ position: 'relative', zIndex: 1 }}
            >
              {/* LEFT vertical bus — sits in the middle of the 40px gap */}
              <div
                className="absolute top-0 bottom-0 right-full mr-5 w-px"
                style={{ background: 'linear-gradient(to bottom, rgba(41,92,81,0) 0%, rgba(41,92,81,0.3) 15%, rgba(41,92,81,0.3) 85%, rgba(41,92,81,0) 100%)' }}
              />
              {/* LEFT horizontal stub — bus → logo */}
              <div
                className="absolute top-1/2 right-full h-px w-5"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(41,92,81,0.45) 50%, transparent 50%)',
                  backgroundSize: '6px 1px',
                  backgroundRepeat: 'repeat-x',
                  animation: 'dashFlow 1.2s linear infinite',
                }}
              />

              {/* RIGHT horizontal stub — logo → bus */}
              <div
                className="absolute top-1/2 left-full h-px w-5"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(41,92,81,0.45) 50%, transparent 50%)',
                  backgroundSize: '6px 1px',
                  backgroundRepeat: 'repeat-x',
                  animation: 'dashFlow 1.2s linear infinite',
                  animationDelay: '0.4s',
                }}
              />
              {/* RIGHT vertical bus — middle of right gap */}
              <div
                className="absolute top-0 bottom-0 left-full ml-5 w-px"
                style={{ background: 'linear-gradient(to bottom, rgba(41,92,81,0) 0%, rgba(41,92,81,0.3) 15%, rgba(41,92,81,0.3) 85%, rgba(41,92,81,0) 100%)' }}
              />

              {/* Concentric pulse rings */}
              <motion.div
                className="absolute w-36 h-36 rounded-3xl bg-primary-50"
                animate={{ opacity: [0.3, 0.1, 0.3], scale: [1, 1.08, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute w-52 h-52 rounded-3xl bg-primary-50"
                animate={{ opacity: [0.15, 0.05, 0.15], scale: [1, 1.06, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              />

              {/* Logo */}
              <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-[0_8px_40px_rgba(41,92,81,0.18)] border border-primary-100/60 p-3 z-10">
                <img
                  src="/Targetpulse logo - minimal.png"
                  alt="TargetPulse"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Right: Outcomes */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
                Verification outcomes
              </p>
              <p className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">
                4 possible results, crystal clear
              </p>

              <div className="space-y-2">
                {outcomes.map(({ label, color, icon: Icon, description, refund }) => {
                  const colors = colorClasses[color]
                  return (
                    <div
                      key={label}
                      className={`relative flex items-start gap-3 rounded-xl border bg-white px-4 py-3.5 ${colors.border} hover:shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200 group`}
                    >
                      {/* Branch: vertical bus → card left edge */}
                      <div
                        className="hidden lg:block absolute right-full top-1/2 h-px w-5"
                        style={{ backgroundColor: 'rgba(41,92,81,0.3)' }}
                      />
                      <div className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg flex-shrink-0 ${colors.icon} group-hover:scale-105 transition-transform duration-200`}>
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${colors.chip}`}>
                            <span className={`w-1 h-1 rounded-full ${colors.dot}`} />
                            {label}
                          </div>
                          {refund && (
                            <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-50 to-emerald-100/80 border border-emerald-200/70 px-2 py-0.5 text-[10px] font-bold text-emerald-700 tracking-wide uppercase">
                              <Coins className="w-2.5 h-2.5" />
                              Credits Refunded
                            </div>
                          )}
                        </div>
                        <p className="text-[13px] text-slate-500 leading-relaxed">
                          {description}
                        </p>
                        {refund && (
                          <p className="mt-1.5 text-[12px] text-emerald-700 font-medium leading-relaxed">
                            You only pay for emails we can actually verify — Unknown results are refunded automatically.
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
