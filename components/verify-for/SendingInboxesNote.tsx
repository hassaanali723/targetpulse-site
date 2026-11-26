import { ArrowRight, Clock, BadgeDollarSign, ShieldCheck } from 'lucide-react'

// A card pointing cold emailers to PureMail for sending inboxes. Used at the
// end of each /verify-for hero (tool + slug) and on the cold email use-cases
// and DNS tools (lead + medium + slug). PureMail is mentioned like any outside
// service: no "our", no "partner". Dofollow is allowed for puremail.ai only.
// Facts from puremail.ai, checked 2026-11-26: live in about four hours, from
// $2.90 an inbox, no setup fee, SPF/DKIM/DMARC/MX configured.

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-5 h-5" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  )
}

function MicrosoftIcon() {
  return (
    <svg viewBox="0 0 23 23" className="w-5 h-5" aria-hidden="true">
      <path fill="#F25022" d="M1 1h10v10H1z" />
      <path fill="#7FBA00" d="M12 1h10v10H12z" />
      <path fill="#00A4EF" d="M1 12h10v10H1z" />
      <path fill="#FFB900" d="M12 12h10v10H12z" />
    </svg>
  )
}

export default function SendingInboxesNote({
  tool,
  lead,
  slug,
  medium = 'verify-for',
  className = 'mt-8',
}: {
  tool?: string
  lead?: string
  slug: string
  medium?: string
  className?: string
}) {
  const href = `https://puremail.ai/?utm_source=giggal&utm_medium=${medium}&utm_campaign=${slug}`
  const heading = lead ?? `Need more inboxes to send from ${tool}?`
  const body = tool
    ? `Get Google Workspace and Outlook inboxes on your own domains, with SPF, DKIM, DMARC and MX set up and ready to connect to ${tool}.`
    : 'Get Google Workspace and Outlook inboxes on your own domains, with SPF, DKIM, DMARC and MX set up for you.'

  return (
    <div
      className={`${className} relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-800 p-6 sm:p-7 text-left shadow-[0_24px_50px_-24px_rgba(49,46,129,0.6)]`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.35),transparent_65%)]"
      />
      <div className="relative flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
              <GoogleIcon />
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
              <MicrosoftIcon />
            </span>
            <span className="ml-1 text-[11px] font-bold uppercase tracking-widest text-indigo-200">Sending inboxes</span>
          </div>
          <p className="mt-4 text-xl sm:text-2xl font-extrabold tracking-tight text-white">{heading}</p>
          <p className="mt-2 text-sm sm:text-base text-indigo-100/90 leading-relaxed max-w-2xl">{body}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {[
              { Icon: Clock, text: 'Live in about 4 hours' },
              { Icon: BadgeDollarSign, text: 'From $2.90 per inbox' },
              { Icon: ShieldCheck, text: 'No setup fee' },
            ].map((f) => (
              <li
                key={f.text}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-inset ring-white/15"
              >
                <f.Icon className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />
                {f.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="shrink-0">
          <a
            href={href}
            rel="noopener"
            className="group inline-flex w-full lg:w-auto items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-indigo-900 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-indigo-50"
          >
            Get inboxes on PureMail
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <p className="mt-2 text-center text-xs text-indigo-200/80">Cancel any time from your dashboard</p>
        </div>
      </div>
    </div>
  )
}
