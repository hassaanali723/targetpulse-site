// The cross-links every competitor page must carry, with the exact anchor text
// from the internal-linking table (section 6). Anchor text is fixed here so it
// stays consistent and never degrades to "click here" or "learn more".
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const LINKS = [
  { href: '/alternatives', anchor: 'compare all verifiers' },
  { href: '/catch-all-verification', anchor: 'verify catch-all & risky emails' },
  { href: '/seg-email-verification', anchor: 'emails protected by SEG gateways' },
  { href: '/pricing', anchor: 'pricing and credits' },
]

export default function RelatedLinks() {
  return (
    <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
        Keep reading
      </h2>
      <ul className="grid sm:grid-cols-2 gap-3">
        {LINKS.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="group flex items-center justify-between gap-3 rounded-2xl border-2 border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-700 hover:border-indigo-300 hover:text-indigo-700 card-vivid-shadow transition-colors"
            >
              {l.anchor}
              <ArrowRight className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
