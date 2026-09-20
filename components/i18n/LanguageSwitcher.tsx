'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { CLUSTERS, LOCALES, type Cluster, type Locale } from '@/lib/i18n/clusters'

// Language menu: a globe button that opens a list of every locale in LOCALES.
// Each entry links to the same page in that language, or to that language's
// home when the page has no counterpart. No auto-redirect by browser
// language: crawlers must reach both versions; hreflang tags do the targeting.
//
// To add a language: add it to LOCALES in lib/i18n/clusters.ts and to
// LOCALE_META below.

const LOCALE_META: Record<Locale, { native: string; short: string }> = {
  en: { native: 'English', short: 'EN' },
  it: { native: 'Italiano', short: 'IT' },
  de: { native: 'Deutsch', short: 'DE' },
  es: { native: 'Español', short: 'ES' },
}

// Flags as inline SVG rather than emoji: Windows renders flag emoji as two
// letters ("US"), which is most of the desktop audience. 3:2 ratio, 20x14.
function Flag({ locale, className = '' }: { locale: Locale; className?: string }) {
  const common = { viewBox: '0 0 60 40', 'aria-hidden': true, className: `w-5 h-[14px] rounded-[2px] shrink-0 ${className}` } as const
  switch (locale) {
    case 'en':
      return (
        <svg {...common}>
          <rect width="60" height="40" fill="#B22234" />
          {[3, 9, 15, 21, 27, 33].map((y) => <rect key={y} y={y} width="60" height="3" fill="#fff" />)}
          <rect width="24" height="21" fill="#3C3B6E" />
        </svg>
      )
    case 'it':
      return (
        <svg {...common}>
          <rect width="20" height="40" fill="#009246" />
          <rect x="20" width="20" height="40" fill="#fff" />
          <rect x="40" width="20" height="40" fill="#CE2B37" />
        </svg>
      )
    case 'de':
      return (
        <svg {...common}>
          <rect width="60" height="13.4" fill="#000" />
          <rect y="13.3" width="60" height="13.4" fill="#DD0000" />
          <rect y="26.6" width="60" height="13.4" fill="#FFCE00" />
        </svg>
      )
    case 'es':
      return (
        <svg {...common}>
          <rect width="60" height="40" fill="#AA151B" />
          <rect y="10" width="60" height="20" fill="#F1BF00" />
        </svg>
      )
  }
}

function alternateOf(pathname: string, from: Locale, target: Locale): string {
  if (from === target) return pathname
  const clean = pathname.replace(/\/$/, '') || '/'
  for (const c of Object.values(CLUSTERS) as Cluster[]) {
    const here = c[from]
    if (here && (here.replace(/\/$/, '') || '/') === clean) {
      const there = c[target]
      if (there) return there
    }
  }
  return CLUSTERS.home[target] ?? '/'
}

function GlobeIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-4">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

const LABEL: Record<Locale, string> = { en: 'Language', it: 'Lingua', de: 'Sprache', es: 'Idioma' }

/** Desktop: globe + current code, opens a dropdown listing all languages. */
export default function LanguageSwitcher({
  current,
  className = '',
}: {
  current: Locale
  className?: string
}) {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={LABEL[current]}
        title={LABEL[current]}
        className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-bold text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
      >
        <Flag locale={current} />
        <span>{LOCALE_META[current].short}</span>
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}>
          <path fillRule="evenodd" d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          aria-label={LABEL[current]}
          className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-900/10 z-50"
        >
          {LOCALES.map((loc) => {
            const active = loc === current
            const href = alternateOf(pathname, current, loc)
            return (
              <Link
                key={loc}
                href={href}
                hrefLang={loc}
                lang={loc}
                role="menuitem"
                aria-current={active ? 'true' : undefined}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  active ? 'text-indigo-700 bg-indigo-50' : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-700'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Flag locale={loc} />
                  {LOCALE_META[loc].native}
                </span>
                {active ? <CheckIcon /> : <span className="text-xs font-bold text-slate-400">{LOCALE_META[loc].short}</span>}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

/** Mobile menu: a labelled row of language options, no dropdown. */
export function LanguageSwitcherInline({ current }: { current: Locale }) {
  const pathname = usePathname() || '/'
  return (
    <div className="px-4 py-3">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
        <GlobeIcon className="w-4 h-4" />
        {LABEL[current]}
      </div>
      <div className="flex flex-wrap gap-2">
        {LOCALES.map((loc) => {
          const active = loc === current
          return (
            <Link
              key={loc}
              href={alternateOf(pathname, current, loc)}
              hrefLang={loc}
              lang={loc}
              aria-current={active ? 'true' : undefined}
              className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-semibold transition-colors ${
                active
                  ? 'border-indigo-200 bg-indigo-50 text-indigo-700'
                  : 'border-slate-200 text-slate-700 hover:border-indigo-200 hover:text-indigo-700'
              }`}
            >
              <Flag locale={loc} />
              {LOCALE_META[loc].native}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
