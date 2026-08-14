'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  INTEGRATIONS,
  CONNECTION_LABEL,
  type ConnectionType,
  type Integration,
} from '@/lib/integrations'
import { ZAPIER_APPS, zapierAppLogo } from '@/lib/zapierApps'

// Merge the curated registry with every programmatic Zapier app page.
// Curated entries win on slug collisions (they have hand-written copy).
const ALL_CARDS: Integration[] = [
  ...INTEGRATIONS,
  ...ZAPIER_APPS.filter((a) => !INTEGRATIONS.some((i) => i.slug === a.slug)).map(
    (a): Integration => ({
      slug: a.slug,
      name: a.name,
      description: `Verify ${a.name} emails in real time through Zapier and keep bad addresses out of your workflows.`,
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
function BrandMark({ integration }: { integration: Integration }) {
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
      alt={`${integration.name} email verification integration with Giggal.ai`}
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

function IntegrationCard({ integration }: { integration: Integration }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-3 mb-4">
        <BrandMark integration={integration} />
        <span
          className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-full border ${CONNECTION_BADGE[integration.connection]}`}
        >
          {CONNECTION_LABEL[integration.connection]}
        </span>
      </div>
      <h3 className="text-[15px] font-black text-slate-900 mb-1.5 flex items-center gap-1.5">
        {integration.name}
        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      </h3>
      <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
        {integration.description}
      </p>
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
const CONNECTION_FILTERS: { value: ConnectionType | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'direct', label: 'Direct' },
  { value: 'zapier', label: 'Via Zapier' },
  { value: 'api', label: 'API' },
  { value: 'mcp', label: 'MCP' },
]

export default function IntegrationsGrid() {
  const [query, setQuery] = useState('')
  const [connection, setConnection] = useState<ConnectionType | 'all'>('all')
  const [category, setCategory] = useState<string>('all')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ALL_CARDS.filter((i) => {
      if (connection !== 'all' && i.connection !== connection) return false
      if (category !== 'all' && i.category !== category) return false
      if (q && !`${i.name} ${i.description} ${i.category}`.toLowerCase().includes(q)) return false
      return true
    })
  }, [query, connection, category])

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
            placeholder="Search integrations…"
            aria-label="Search integrations"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-200 bg-white text-[14px] font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>

        {/* Connection type chips */}
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by connection type">
          {CONNECTION_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => {
                setConnection(f.value)
                setPage(1)
              }}
              className={`text-[12px] font-bold px-3.5 py-2 rounded-full border-2 transition-colors ${
                connection === f.value
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
              }`}
            >
              {f.label}
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
          aria-label="Filter by category"
          className="px-3.5 py-2.5 rounded-xl border-2 border-slate-200 bg-white text-[13px] font-bold text-slate-700 focus:outline-none focus:border-indigo-500"
        >
          <option value="all">All categories</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Grid */}
      {pageItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pageItems.map((i) => (
              <IntegrationCard key={i.slug} integration={i} />
            ))}
          </div>

          {/* Pagination */}
          {pageCount > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-10" role="navigation" aria-label="Pagination">
              <button
                onClick={() => goTo(safePage - 1)}
                disabled={safePage === 1}
                aria-label="Previous page"
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
                aria-label="Next page"
                className="w-10 h-10 rounded-xl border-2 border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-indigo-400 disabled:opacity-40 disabled:hover:border-slate-200 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
          <p className="text-center text-[12.5px] font-bold text-slate-500 mt-4">
            Showing {(safePage - 1) * PER_PAGE + 1}
            {'-'}
            {Math.min(safePage * PER_PAGE, filtered.length)} of {filtered.length} integrations
          </p>
        </>
      ) : (
        <div className="text-center py-16 border-2 border-dashed border-slate-200 rounded-2xl">
          <p className="text-[15px] font-bold text-slate-700 mb-1">No integrations match your search.</p>
          <p className="text-[13px] text-slate-500 font-medium">
            Need something specific? Every tool that can make an HTTP request works with our{' '}
            <Link href="/public/docs" className="text-indigo-600 font-bold hover:text-indigo-700">
              REST API
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  )
}
