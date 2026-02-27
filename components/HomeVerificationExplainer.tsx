import { CheckCircle2, ShieldCheck, Mail, AlertTriangle, HelpCircle } from 'lucide-react'

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

export default function HomeVerificationExplainer() {
  return (
    <section className="pt-8 pb-20">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto rounded-3xl border border-slate-100 bg-white/80 p-6 md:p-10 shadow-sm backdrop-blur-sm relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,auto)_minmax(0,1fr)] items-center">
            {/* Checks */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
                Email verification checks
              </h2>
              <p className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 mb-6">
                We perform several checks when verifying emails.
              </p>

              <div className="space-y-3">
                {checks.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3"
                  >
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-700 flex-shrink-0">
                      <ShieldCheck className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-xs md:text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Icon with simple arrow flow */}
            <div className="hidden lg:flex items-center justify-center relative px-8">
              {/* Left arrow pointing to icon */}
              <div className="absolute right-[calc(50%+50px)] flex items-center">
                <div className="w-12 h-[2px] bg-slate-300"></div>
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-slate-400"></div>
              </div>

              {/* Icon container */}
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg">
                <Mail className="h-10 w-10 text-white" />
              </div>

              {/* Right arrow pointing from icon */}
              <div className="absolute left-[calc(50%+50px)] flex items-center">
                <div className="w-12 h-[2px] bg-slate-300"></div>
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-slate-400"></div>
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
                Email verification outcomes
              </h2>
              <p className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 mb-6">
                These are the possible results of an email verification.
              </p>

              <div className="space-y-3">
                {outcomes.map(({ label, color, icon: Icon, description }) => {
                  const colors = colorClasses[color]

                  return (
                    <div
                      key={label}
                      className={`flex items-start gap-3 rounded-2xl border bg-white/90 px-4 py-3 ${colors.border}`}
                    >
                      <div
                        className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-full flex-shrink-0 ${colors.icon}`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${colors.chip}`}>
                          {label}
                        </div>
                        <p className="mt-1 text-xs md:text-sm text-slate-600">{description}</p>
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
