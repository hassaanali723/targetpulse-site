import { ArrowUpRight } from 'lucide-react'

// Two cards under the tool on /free-email-providers (English only for now).
// Each pairs a free account the visitor knows with its business version, sold
// by our sister product PureMail. Price from the two PureMail pages, checked
// 12 November 2026: from $2.90 per inbox a month.

const UTM = 'utm_source=giggal&utm_medium=free-email-providers&utm_campaign=top-cards'

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-6 h-6" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  )
}

function MicrosoftIcon() {
  return (
    <svg viewBox="0 0 23 23" className="w-6 h-6" aria-hidden="true">
      <path fill="#F25022" d="M1 1h10v10H1z" />
      <path fill="#7FBA00" d="M12 1h10v10H12z" />
      <path fill="#00A4EF" d="M1 12h10v10H1z" />
      <path fill="#FFB900" d="M12 12h10v10H12z" />
    </svg>
  )
}

const CARDS = [
  {
    free: 'Gmail',
    title: 'Google Workspace inboxes',
    text: 'Gmail on your own domain, set up with SPF, DKIM and DMARC.',
    cta: 'Get Google Workspace inboxes',
    href: `https://puremail.ai/google-workspace-inboxes/?${UTM}&utm_content=google-workspace`,
    Icon: GoogleIcon,
  },
  {
    free: 'Outlook.com',
    title: 'Microsoft 365 inboxes',
    text: 'Outlook on your own domain, set up with SPF, DKIM and DMARC.',
    cta: 'Get Microsoft 365 inboxes',
    href: `https://puremail.ai/microsoft-365-inboxes/?${UTM}&utm_content=microsoft-365`,
    Icon: MicrosoftIcon,
  },
]

export default function PureMailCards() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <p className="text-center text-sm md:text-base font-bold text-slate-900 mb-3">
        Need Gmail or Outlook on your own domain?
      </p>
      <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
        {CARDS.map((c) => (
          <a
            key={c.title}
            href={c.href}
            target="_blank"
            rel="noopener"
            className="group flex items-start gap-3 md:gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 md:p-5 shadow-sm hover:border-indigo-300 hover:shadow-md transition"
          >
            <span className="shrink-0 rounded-xl border border-slate-200 bg-white p-2 shadow-xs">
              <c.Icon />
            </span>
            <span className="min-w-0 space-y-1">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Business version of {c.free}
              </span>
              <span className="block text-base md:text-lg font-extrabold text-slate-900 tracking-tight">{c.title}</span>
              <span className="block text-sm text-slate-600 font-medium leading-relaxed">
                {c.text} From <strong className="text-slate-900">$2.90 per inbox a month</strong>.
              </span>
              <span className="inline-flex items-center gap-1 pt-1 text-sm font-bold text-indigo-600 group-hover:text-indigo-700">
                {c.cta}
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
