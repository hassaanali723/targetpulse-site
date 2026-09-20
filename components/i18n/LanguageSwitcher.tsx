'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { CLUSTERS, HREFLANG_CODE, LOCALES, type Cluster, type Locale } from '@/lib/i18n/clusters'

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
  'pt-br': { native: 'Português (Brasil)', short: 'PT' },
  fr: { native: 'Français', short: 'FR' },
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

// Inline SVG flags, simplified to the shapes people recognise at 20px: no
// stars on the US canton, no coat of arms on the Spanish band. Inline so the
// menu needs no image requests. English gets the US flag, the primary market.
const FLAG_PATHS: Record<Locale, React.ReactNode> = {
  en: (
    <>
      <rect width="20" height="14" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} y={y} width="20" height="1" fill="#b22234" />
      ))}
      <rect width="8" height="7" fill="#3c3b6e" />
    </>
  ),
  it: (
    <>
      <rect width="7" height="14" fill="#009246" />
      <rect x="7" width="6" height="14" fill="#fff" />
      <rect x="13" width="7" height="14" fill="#ce2b37" />
    </>
  ),
  de: (
    <>
      <rect width="20" height="5" fill="#000" />
      <rect y="5" width="20" height="4" fill="#dd0000" />
      <rect y="9" width="20" height="5" fill="#ffce00" />
    </>
  ),
  es: (
    <>
      <rect width="20" height="14" fill="#c60b1e" />
      <rect y="3.5" width="20" height="7" fill="#ffc400" />
    </>
  ),
  'pt-br': (
    <>
      <rect width="20" height="14" fill="#009c3b" />
      <path d="M10 1.5 18.5 7 10 12.5 1.5 7z" fill="#ffdf00" />
      <circle cx="10" cy="7" r="3.2" fill="#002776" />
    </>
  ),
  fr: (
    <>
      <rect width="7" height="14" fill="#0055a4" />
      <rect x="7" width="6" height="14" fill="#fff" />
      <rect x="13" width="7" height="14" fill="#ef4135" />
    </>
  ),
}

function Flag({ locale, className = '' }: { locale: Locale; className?: string }) {
  return (
    <svg viewBox="0 0 20 14" aria-hidden="true" className={`shrink-0 rounded-[3px] ring-1 ring-slate-900/10 ${className}`}>
      {FLAG_PATHS[locale]}
    </svg>
  )
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

const LABEL: Record<Locale, string> = { en: 'Language', it: 'Lingua', de: 'Sprache', es: 'Idioma', 'pt-br': 'Idioma', fr: 'Langue' }

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
        <Flag locale={current} className="w-5 h-3.5" />
        <span>{LOCALE_META[current].short}</span>
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}>
          <path fillRule="evenodd" d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          aria-label={LABEL[current]}
          className="absolute right-0 mt-2 w-52 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-900/10 z-50"
        >
          {LOCALES.map((loc) => {
            const active = loc === current
            const href = alternateOf(pathname, current, loc)
            return (
              <Link
                key={loc}
                href={href}
                hrefLang={HREFLANG_CODE[loc]}
                lang={HREFLANG_CODE[loc]}
                role="menuitem"
                aria-current={active ? 'true' : undefined}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  active ? 'text-indigo-700 bg-indigo-50' : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-700'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Flag locale={loc} className="w-5 h-3.5" />
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
              hrefLang={HREFLANG_CODE[loc]}
              lang={HREFLANG_CODE[loc]}
              aria-current={active ? 'true' : undefined}
              className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-semibold transition-colors ${
                active
                  ? 'border-indigo-200 bg-indigo-50 text-indigo-700'
                  : 'border-slate-200 text-slate-700 hover:border-indigo-200 hover:text-indigo-700'
              }`}
            >
              <Flag locale={loc} className="w-5 h-3.5" />
              {LOCALE_META[loc].native}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
