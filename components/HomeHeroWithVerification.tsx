'use client'

import { useState, useRef, useEffect } from 'react'
import { CheckCircle2, AlertCircle, Loader2, Star, TrendingUp, Shield, ShieldCheck, HelpCircle, AlertTriangle, Mail, AtSign, FileCheck, Database, Zap } from 'lucide-react'
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
    return {
      rateLimited: true,
      message: data.message || 'You can verify up to 5 emails per hour as a guest. Sign up for unlimited verification.',
    }
  }

  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Validation failed')
  }

  return { rateLimited: false, result: data.data as PublicEmailValidationResult }
}

const checks = [
  {
    title: 'Syntax check',
    description: 'Validates email format to prevent hard bounces and invalid addresses.',
  },
  {
    title: 'MX / domain check',
    description: 'Confirms the domain has valid MX records so it can receive email.',
  },
  {
    title: 'Role-based & free-mail detection',
    description: 'Flags role accounts (support@, info@) and free providers for deliverability scoring.',
  },
  {
    title: 'Disposable email screening',
    description: 'Detects temporary domains that are not suitable for long-term outreach.',
  },
  {
    title: 'Blacklist check',
    description: 'Checks domain and IPs against reputation lists to flag known bad senders.',
  },
  {
    title: 'SMTP mailbox verification',
    description: 'Connects to the mail server and verifies whether the mailbox exists and accepts mail.',
  },
  {
    title: 'Catch-all detection',
    description: 'Identifies domains that accept all addresses, so deliverability is uncertain.',
  },
]

const outcomes = [
  {
    label: 'Deliverable',
    color: 'emerald',
    icon: CheckCircle2,
    description: 'Email is valid, reachable, and passed checks. Safe to use for outreach.',
  },
  {
    label: 'Risky',
    color: 'amber',
    icon: AlertTriangle,
    description: 'May accept mail but has higher risk: catch-all domain, full mailbox, or lower deliverability.',
  },
  {
    label: 'Undeliverable',
    color: 'rose',
    icon: AlertTriangle,
    description: 'Not deliverable due to invalid format, domain, rejected mailbox, disposable email, or blacklisted.',
  },
  {
    label: 'Unknown',
    color: 'slate',
    icon: HelpCircle,
    description: 'Could not be verified reliably: timeout, server unavailable, or connection issues.',
  },
]

const colorClasses: Record<string, { chip: string; icon: string; border: string }> = {
  emerald: {
    chip: 'bg-emerald-50 text-emerald-800',
    icon: 'bg-emerald-100 text-emerald-700',
    border: 'border-emerald-100',
  },
  amber: {
    chip: 'bg-amber-50 text-amber-900',
    icon: 'bg-amber-100 text-amber-700',
    border: 'border-amber-100',
  },
  rose: {
    chip: 'bg-rose-50 text-rose-900',
    icon: 'bg-rose-100 text-rose-700',
    border: 'border-rose-100',
  },
  slate: {
    chip: 'bg-slate-50 text-slate-900',
    icon: 'bg-slate-100 text-slate-700',
    border: 'border-slate-100',
  },
}

export default function HomeHeroWithVerification() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'checking' | 'done' | 'error' | 'ratelimit'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [rateLimitMsg, setRateLimitMsg] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalResult, setModalResult] = useState<PublicEmailValidationResult | null>(null)

  // Refs for SVG connector
  const gridRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const checkRefs = useRef<(HTMLDivElement | null)[]>([])
  const outcomeRefs = useRef<(HTMLDivElement | null)[]>([])
  const [svgDims, setSvgDims] = useState({ width: 0, height: 0 })
  const [leftPaths, setLeftPaths] = useState<string[]>([])
  const [rightPaths, setRightPaths] = useState<string[]>([])

  const computePaths = () => {
    if (!gridRef.current || !logoRef.current) return

    const cRect = gridRef.current.getBoundingClientRect()
    setSvgDims({ width: cRect.width, height: cRect.height })

    const lRect = logoRef.current.getBoundingClientRect()
    const logoLeft  = lRect.left  - cRect.left
    const logoRight = lRect.right - cRect.left
    const logoMidY  = lRect.top   - cRect.top + lRect.height / 2

    // Bezier curves from right-center of each check tile → left-center of logo
    const newLeft: string[] = []
    checkRefs.current.forEach((el) => {
      if (!el) return
      const r = el.getBoundingClientRect()
      const x0 = r.right - cRect.left
      const y0 = r.top   - cRect.top + r.height / 2
      const x1 = logoLeft
      const y1 = logoMidY
      // Control points fan the curves nicely
      const cx1 = x0 + (x1 - x0) * 0.55
      const cx2 = x0 + (x1 - x0) * 0.45
      newLeft.push(`M ${x0} ${y0} C ${cx1} ${y0} ${cx2} ${y1} ${x1} ${y1}`)
    })

    // Bezier curves from right-center of logo → left-center of each outcome tile
    const newRight: string[] = []
    outcomeRefs.current.forEach((el) => {
      if (!el) return
      const r = el.getBoundingClientRect()
      const x0 = logoRight
      const y0 = logoMidY
      const x1 = r.left - cRect.left
      const y1 = r.top  - cRect.top + r.height / 2
      const cx1 = x0 + (x1 - x0) * 0.45
      const cx2 = x0 + (x1 - x0) * 0.55
      newRight.push(`M ${x0} ${y0} C ${cx1} ${y0} ${cx2} ${y1} ${x1} ${y1}`)
    })

    setLeftPaths(newLeft)
    setRightPaths(newRight)
  }

  useEffect(() => {
    // Delay slightly so the grid is fully laid out before measuring
    const t = setTimeout(computePaths, 150)
    window.addEventListener('resize', computePaths)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', computePaths)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    <section id="email-verifier" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary-100/50 to-accent-100/50">
      {/* Background Graphics - Email Verification Theme */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle gradient backgrounds */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-primary-400/20 to-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-accent-400/20 to-accent-500/20 rounded-full blur-3xl" />
        
        {/* Floating Email Icons */}
        <div className="absolute top-24 left-[8%] w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center shadow-lg animate-float">
          <Mail className="w-6 h-6 text-primary-600" />
        </div>
        
        <div className="absolute top-32 right-[12%] w-10 h-10 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center shadow-lg animate-float animation-delay-2000">
          <AtSign className="w-5 h-5 text-accent-600" />
        </div>
        
        <div className="absolute top-48 left-[20%] w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center shadow-lg animate-float animation-delay-4000">
          <CheckCircle2 className="w-7 h-7 text-emerald-600" />
        </div>
        
        <div className="absolute bottom-32 right-[18%] w-11 h-11 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center shadow-lg animate-float animation-delay-2000">
          <Shield className="w-6 h-6 text-slate-600" />
        </div>
        
        <div className="absolute bottom-48 left-[15%] w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center shadow-lg animate-float">
          <FileCheck className="w-6 h-6 text-primary-600" />
        </div>
        
        <div className="absolute top-60 right-[25%] w-9 h-9 bg-gradient-to-br from-accent-100 to-accent-200 rounded-lg flex items-center justify-center shadow-lg animate-float animation-delay-4000">
          <Database className="w-5 h-5 text-accent-600" />
        </div>
        
        <div className="absolute bottom-60 right-[8%] w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center shadow-lg animate-float animation-delay-2000">
          <Zap className="w-6 h-6 text-amber-600" />
        </div>
        
        {/* Floating @ symbols as background elements */}
        <div className="absolute top-36 left-[35%] text-primary-200 opacity-30 animate-float animation-delay-4000">
          <AtSign className="w-16 h-16" />
        </div>
        
        <div className="absolute bottom-40 left-[30%] text-accent-200 opacity-25 animate-float">
          <Mail className="w-20 h-20" />
        </div>
        
        <div className="absolute top-80 right-[35%] text-emerald-200 opacity-30 animate-float animation-delay-2000">
          <ShieldCheck className="w-16 h-16" />
        </div>
        
        {/* Small floating dots for texture */}
        <div className="absolute top-44 left-[60%] w-2 h-2 bg-primary-400 rounded-full opacity-40 animate-pulse" />
        <div className="absolute top-72 left-[70%] w-1.5 h-1.5 bg-accent-400 rounded-full opacity-30 animate-pulse animation-delay-2000" />
        <div className="absolute bottom-80 right-[60%] w-2.5 h-2.5 bg-emerald-400 rounded-full opacity-35 animate-pulse animation-delay-4000" />
        <div className="absolute bottom-52 left-[45%] w-1 h-1 bg-slate-400 rounded-full opacity-25 animate-pulse" />
      </div>

      <div className="container-custom relative">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary-200 bg-gradient-to-r from-primary-50 to-accent-50 px-4 py-2 shadow-sm backdrop-blur-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
              Email verifier by TargetPulse
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-5 leading-snug overflow-visible">
            Verify emails
            <span className="block bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent pb-1">
              before you hit send
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            TargetPulse Email Verifier cleans your lists in seconds so campaigns land in the inbox,
            not the spam folder. Try a single email below to see the experience.
          </p>

          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch gap-3 rounded-2xl border-2 border-slate-200 bg-white p-2.5 shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="flex-1 rounded-xl border-none bg-transparent px-4 py-3 text-sm md:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3 text-sm md:text-base font-bold text-white shadow-md hover:from-primary-700 hover:to-primary-800 hover:shadow-lg transition-all duration-200 min-w-[140px]"
                disabled={status === 'checking'}
              >
                {status === 'checking' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying…
                  </>
                ) : (
                  'Verify email'
                )}
              </button>
            </form>

            {/* Error message */}
            {status === 'error' && (
              <div className="mt-4 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm bg-rose-50 text-rose-700 border border-rose-100">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span className="font-medium">{errorMsg}</span>
                </div>
              </div>
            )}

            {/* Rate limit message */}
            {status === 'ratelimit' && (
              <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-center">
                <p className="text-sm font-semibold text-amber-800 mb-1">Free limit reached</p>
                <p className="text-xs text-amber-700 mb-3">{rateLimitMsg}</p>
                <a
                  href="https://emailverifier.targetpulse.net/sign-up"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl text-xs font-semibold hover:from-primary-700 hover:to-primary-800 transition-all"
                >
                  Sign up for free — unlimited verification
                </a>
              </div>
            )}
          </div>

          {/* Results Modal */}
          {modalResult && (
            <EmailDetailsModal
              open={modalOpen}
              onClose={() => setModalOpen(false)}
              emailDetails={modalResult}
            />
          )}

          <p className="mt-8 text-xs md:text-sm text-slate-600 font-medium">
            1 email = 1 credit. Bulk verification, CSV uploads and detailed reports are available in the app.
          </p>

          {/* Trust Stats Bar */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {['S','D','A','I','M'].map((letter, i) => {
                  const colors = ['from-blue-500 to-blue-600','from-emerald-500 to-emerald-600','from-orange-500 to-orange-600','from-purple-500 to-purple-600','from-pink-500 to-pink-600']
                  return (
                    <div key={letter} className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${colors[i]} text-white text-xs font-bold shadow-md border-2 border-white`}>
                      {letter}
                    </div>
                  )
                })}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-1 text-sm font-semibold text-slate-900">4.9/5</span>
                </div>
                <p className="text-xs text-slate-600">2,000+ users</p>
              </div>
            </div>

            <div className="hidden md:block h-10 w-px bg-slate-200" />

            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 shadow-sm">
                <Shield className="h-5 w-5 text-primary-700" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">10M+</p>
                <p className="text-xs text-slate-600 font-medium">Emails verified</p>
              </div>
            </div>

            <div className="hidden md:block h-10 w-px bg-slate-200" />

            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 shadow-sm">
                <TrendingUp className="h-5 w-5 text-emerald-700" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">98.5%</p>
                <p className="text-xs text-slate-600 font-medium">Accuracy rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Explainer Section */}
        <div className="max-w-6xl mx-auto rounded-3xl border border-slate-100 bg-white/80 p-6 md:p-10 shadow-sm backdrop-blur-sm">

          {/* 3-column grid — ref on this div so SVG coords are relative to it */}
          <div
            ref={gridRef}
            className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center"
          >
            {/* ── SVG overlay (desktop only) ── */}
            {svgDims.width > 0 && (
              <svg
                className="absolute inset-0 hidden lg:block pointer-events-none"
                width={svgDims.width}
                height={svgDims.height}
                style={{ overflow: 'visible', zIndex: 0 }}
              >
                {/* Left check tiles → logo */}
                {leftPaths.map((d, i) => (
                  <path
                    key={`l${i}`}
                    d={d}
                    fill="none"
                    stroke="#295C51"
                    strokeWidth="1"
                    strokeOpacity="0.25"
                    strokeLinecap="round"
                  />
                ))}

                {/* Logo → right outcome tiles */}
                {rightPaths.map((d, i) => (
                  <path
                    key={`r${i}`}
                    d={d}
                    fill="none"
                    stroke="#295C51"
                    strokeWidth="1"
                    strokeOpacity="0.25"
                    strokeLinecap="round"
                  />
                ))}
              </svg>
            )}

            {/* ── Left column: Checks ── */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
                Email verification checks
              </h2>
              <p className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 mb-6">
                We perform several checks when verifying emails.
              </p>

              <div className="space-y-3">
                {checks.map((item, i) => (
                  <div
                    key={item.title}
                    ref={(el) => { checkRefs.current[i] = el }}
                    className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3 hover:bg-white hover:shadow-md hover:border-primary-200 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-700 flex-shrink-0 group-hover:bg-primary-200 group-hover:scale-110 transition-all duration-200">
                      <ShieldCheck className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 group-hover:text-primary-700 transition-colors">{item.title}</h3>
                      <p className="mt-1 text-xs md:text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Center column: Logo hub ── */}
            <div
              ref={logoRef}
              className="hidden lg:flex items-center justify-center"
              style={{ position: 'relative', zIndex: 1 }}
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-white to-slate-50 shadow-2xl border border-slate-200 p-4">
                <img
                  src="/Targetpulse logo - minimal.png"
                  alt="TargetPulse"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* ── Right column: Outcomes ── */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
                Email verification outcomes
              </h2>
              <p className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 mb-6">
                These are the possible results of an email verification.
              </p>

              <div className="space-y-3">
                {outcomes.map(({ label, color, icon: Icon, description }, i) => {
                  const colors = colorClasses[color]
                  return (
                    <div
                      key={label}
                      ref={(el) => { outcomeRefs.current[i] = el }}
                      className={`flex items-start gap-3 rounded-2xl border bg-white/90 px-4 py-3 ${colors.border} hover:shadow-lg hover:-translate-y-0.5 hover:bg-white transition-all duration-200 cursor-pointer group`}
                    >
                      <div className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-full flex-shrink-0 ${colors.icon} group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${colors.chip}`}>
                          {label}
                        </div>
                        <p className="mt-1 text-xs md:text-sm text-slate-600 group-hover:text-slate-700 transition-colors">{description}</p>
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
