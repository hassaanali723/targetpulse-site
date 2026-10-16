'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { INTEGRATIONS, type ConnectionType, type Integration } from '@/lib/integrations'
import { ZAPIER_APPS, zapierAppLogo } from '@/lib/zapierApps'
import { localizeHref, type Locale } from '@/lib/i18n/clusters'
import type { GridStrings } from '@/lib/i18n/integrationPages/types'
import { Rich } from '@/components/integrations/pages/parts'

// Merge the curated registry with every programmatic Zapier app page.
// Curated entries win on slug collisions (they have hand-written copy).
const ALL_CARDS: Integration[] = [
  ...INTEGRATIONS,
  ...ZAPIER_APPS.filter((a) => !INTEGRATIONS.some((i) => i.slug === a.slug)).map(
    (a): Integration => ({
      slug: a.slug,
      name: a.name,
      // Filled per language from GridStrings.zapierAppDescription.
      description: '',
      category: a.category,
      connection: 'zapier',
      href: `/integrations/zapier/${a.slug}`,
      icon: zapierAppLogo(a.slug),
    })
  ),
]

const CATEGORIES = Array.from(new Set(ALL_CARDS.map((c) => c.category))).sort()

const PER_PAGE = 24

// ── Brand mark: local logo first, simpleicons CDN second, lettermark last ──
function BrandMark({ integration, alt }: { integration: Integration; alt: string }) {
  const [failed, setFailed] = useState(false)
  const color = integration.brandColor ?? '#4F46E5'
  const src = integration.icon ?? (integration.iconSlug ? `https://cdn.simpleicons.org/${integration.iconSlug}` : null)

  if (!src || failed) {
    return (
      <span
        className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black text-white shrink-0"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      >
        {integration.name[0]}
      </span>
    )
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={48}
      height={48}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="w-12 h-12 rounded-xl object-contain shrink-0"
    />
  )
}

const CONNECTION_BADGE: Record<ConnectionType, string> = {
  direct: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  zapier: 'bg-orange-50 text-orange-700 border-orange-200',
  api: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  mcp: 'bg-violet-50 text-violet-700 border-violet-200',
}

function IntegrationCard({ integration, s, categoryLabel }: { integration: Integration; s: GridStrings; categoryLabel: string }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-3 mb-4">
        <BrandMark integration={integration} alt={s.logoAlt.replace('{name}', integration.name)} />
        <span
          className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-full border ${CONNECTION_BADGE[integration.connection]}`}
        >
          {s.connection[integration.connection]}
        </span>
      </div>
      <h3 className="text-[15px] font-black text-slate-900 mb-1.5 flex items-center gap-1.5">
        {integration.name}
        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      </h3>
      <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
        {integration.description}
      </p>
      <p className="mt-auto pt-3 text-[11px] font-bold text-slate-400">{categoryLabel}</p>
    </>
  )

  const cardClass =
    'group flex flex-col bg-white border-2 border-slate-200 rounded-2xl p-5 card-vivid-shadow hover:border-indigo-500 transition-colors duration-200'

  return integration.external ? (
    <a href={integration.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
      {inner}
    </a>
  ) : (
    <Link href={integration.href} className={cardClass}>
      {inner}
    </Link>
  )
}

// ── Grid with search + connection & category filters + pagination ─────────
const CONNECTION_FILTERS: (ConnectionType | 'all')[] = ['all', 'direct', 'zapier', 'api', 'mcp']

export default function IntegrationsGrid({ s, locale = 'en' }: { s: GridStrings; locale?: Locale }) {
  // Cards in this language: translated description, local href when the
  // page exists in this language (otherwise the English page).
  const cards = useMemo(
    () =>
      ALL_CARDS.map((c) => ({
        ...c,
        description:
          s.descriptions[c.slug] ??
          (c.description || s.zapierAppDescription.replace('{name}', c.name)),
        href: c.external ? c.href : localizeHref(c.href, locale).href,
      })),
    [s, locale]
  )
  const catLabel = (c: string) => s.categories[c] ?? c

  const [query, setQuery] = useState('')
  const [connection, setConnection] = useState<ConnectionType | 'all'>('all')
  const [category, setCategory] = useState<string>('all')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return cards.filter((i) => {
      if (connection !== 'all' && i.connection !== connection) return false
      if (category !== 'all' && i.category !== category) return false
      if (q && !`${i.name} ${i.description} ${i.category} ${catLabel(i.category)}`.toLowerCase().includes(q)) return false
      return true
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards, query, connection, category])

  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const safePage = Math.min(page, pageCount)
  const pageItems = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE)

  const goTo = (p: number) => {
    setPage(Math.min(Math.max(1, p), pageCount))
    // Keep the controls in view when flipping pages.
    if (typeof window !== 'undefined') {
      document.getElementById('integrations-grid-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div id="integrations-grid-top" className="scroll-mt-28">
      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center mb-8">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setPage(1)
            }}
            placeholder={s.searchPlaceholder}
            aria-label={s.searchAria}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-200 bg-white text-[14px] font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>

        {/* Connection type chips */}
        <div className="flex flex-wrap gap-1.5" role="group" aria-label={s.connectionAria}>
          {CONNECTION_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setConnection(f)
                setPage(1)
              }}
              className={`text-[12px] font-bold px-3.5 py-2 rounded-full border-2 transition-colors ${
                connection === f
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
              }`}
            >
              {s.connection[f]}
            </button>
          ))}
        </div>

        {/* Category select */}
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value)
            setPage(1)
          }}
          aria-label={s.categoryAria}
          className="px-3.5 py-2.5 rounded-xl border-2 border-slate-200 bg-white text-[13px] font-bold text-slate-700 focus:outline-none focus:border-indigo-500"
        >
          <option value="all">{s.allCategories}</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {catLabel(c)}
            </option>
          ))}
        </select>
      </div>

      {/* Grid */}
      {pageItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pageItems.map((i) => (
              <IntegrationCard key={i.slug} integration={i} s={s} categoryLabel={catLabel(i.category)} />
            ))}
          </div>

          {/* Pagination */}
          {pageCount > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-10" role="navigation" aria-label={s.pagination}>
              <button
                onClick={() => goTo(safePage - 1)}
                disabled={safePage === 1}
                aria-label={s.prevPage}
                className="w-10 h-10 rounded-xl border-2 border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-indigo-400 disabled:opacity-40 disabled:hover:border-slate-200 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => goTo(p)}
                  aria-current={p === safePage ? 'page' : undefined}
                  className={`w-10 h-10 rounded-xl border-2 text-[14px] font-black transition-colors ${
                    p === safePage
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-400'
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => goTo(safePage + 1)}
                disabled={safePage === pageCount}
                aria-label={s.nextPage}
                className="w-10 h-10 rounded-xl border-2 border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-indigo-400 disabled:opacity-40 disabled:hover:border-slate-200 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
          <p className="text-center text-[12.5px] font-bold text-slate-500 mt-4">
            {s.showing
              .replace('{from}', String((safePage - 1) * PER_PAGE + 1))
              .replace('{to}', String(Math.min(safePage * PER_PAGE, filtered.length)))
              .replace('{total}', String(filtered.length))}
          </p>
        </>
      ) : (
        <div className="text-center py-16 border-2 border-dashed border-slate-200 rounded-2xl">
          <p className="text-[15px] font-bold text-slate-700 mb-1">{s.noMatchTitle}</p>
          <p className="text-[13px] text-slate-500 font-medium">
            <Rich text={s.noMatchText} />
          </p>
        </div>
      )}
    </div>
  )
}
