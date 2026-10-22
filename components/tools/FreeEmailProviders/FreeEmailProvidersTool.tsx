'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search, Copy, Check, Download, CheckCircle2, HelpCircle, ListChecks } from 'lucide-react'
import {
  FREE_EMAIL_PROVIDERS,
  FREE_DOMAIN_INDEX,
  FREE_DOMAIN_COUNT,
  FREE_LIST_CHECKED,
  type ProviderKind,
} from '@/lib/tools/freeEmailProviders'
import { normalizeDomainInput, looksLikeDomain } from '@/lib/tools/domainInput'
import { freeProvidersToolStrings, freeProviderCompany } from '@/lib/i18n/tools/freeProvidersToolStrings'
import type { Locale } from '@/lib/i18n/clusters'

// The wording (type labels, notes, filters, messages) lives in
// lib/i18n/tools/freeProvidersToolStrings.ts.
const KIND_BADGE: Record<ProviderKind, string> = {
  webmail: 'bg-indigo-50 text-indigo-700',
  privacy: 'bg-emerald-50 text-emerald-700',
  isp: 'bg-amber-50 text-amber-800',
}
const FILTERS: ('all' | ProviderKind)[] = ['all', 'webmail', 'privacy', 'isp']

/** The date the list was checked, written in `dateLocale`. */
function checkedOn(dateLocale: string): string {
  return new Date(`${FREE_LIST_CHECKED}T12:00:00Z`).toLocaleDateString(dateLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

/** Fills the {slot} markers of a strings-file template with text or elements. */
function fill(template: string, slots: Record<string, React.ReactNode>): React.ReactNode[] {
  return template.split(/(\{\w+\})/).map((part, i) => {
    const m = /^\{(\w+)\}$/.exec(part)
    return m && m[1] in slots ? <React.Fragment key={i}>{slots[m[1]]}</React.Fragment> : part
  })
}

function download(name: string, type: string, content: string) {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = name
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export default function FreeEmailProvidersTool({ locale = 'en' }: { locale?: Locale }) {
  const t = freeProvidersToolStrings(locale)
  const [checkInput, setCheckInput] = useState('')
  const [checked, setChecked] = useState<{ domain: string; error?: string } | null>(null)
  const [query, setQuery] = useState('')
  const [kind, setKind] = useState<'all' | ProviderKind>('all')
  const [copied, setCopied] = useState(false)

  const onCheck = (e: React.FormEvent) => {
    e.preventDefault()
    const domain = normalizeDomainInput(checkInput)
    if (!domain) setChecked({ domain: '', error: t.inputEmpty })
    else if (!looksLikeDomain(domain)) setChecked({ domain, error: t.inputInvalid })
    else setChecked({ domain })
  }
  const match = checked && !checked.error ? FREE_DOMAIN_INDEX.get(checked.domain) : undefined

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/^.*@/, '')
    return FREE_EMAIL_PROVIDERS.filter((p) => kind === 'all' || p.kind === kind)
      .map((p) => {
        if (!q) return p
        // The translated company name matches too; for English it is the same as p.company.
        const nameHit =
          p.name.toLowerCase().includes(q) ||
          p.company.toLowerCase().includes(q) ||
          freeProviderCompany(t, p).toLowerCase().includes(q)
        return nameHit ? p : { ...p, domains: p.domains.filter((d) => d.includes(q)) }
      })
      .filter((p) => p.domains.length > 0)
  }, [query, kind, t])
  const visibleDomains = visible.flatMap((p) => p.domains.map((d) => ({ d, p })))

  const copyList = async () => {
    const text = visibleDomains.map((x) => x.d).join('\n')
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }
  const csvCell = (s: string) => `"${s.replace(/"/g, '""')}"`

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">
      <div className="bg-slate-900 text-slate-300 px-5 py-2.5 text-xs md:text-sm font-medium flex items-center gap-2 border-b border-slate-800">
        <ListChecks className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>
          {t.banner({ domains: FREE_DOMAIN_COUNT, providers: FREE_EMAIL_PROVIDERS.length, date: checkedOn(t.dateLocale) })}
        </span>
      </div>

      <div className="p-5 md:p-8 space-y-8">
        {/* Checker */}
        <form onSubmit={onCheck} className="space-y-2">
          <label htmlFor="free-check" className="block text-sm font-bold text-slate-900">
            {t.checkLabel}
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="free-check"
              type="text"
              value={checkInput}
              onChange={(e) => setCheckInput(e.target.value)}
              placeholder={t.checkPlaceholder}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              className="flex-1 text-base px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-colors shadow-sm"
            >
              <Search className="w-4 h-4" />
              {t.checkButton}
            </button>
          </div>

          <div aria-live="polite">
            {checked?.error && <p className="text-sm text-rose-600 font-semibold pt-1">{checked.error}</p>}
            {checked && !checked.error && match && (
              <div className="mt-3 p-4 rounded-xl border bg-indigo-50 border-indigo-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="text-sm text-indigo-900">
                  <p className="font-bold break-all">{t.isFree(checked.domain)}</p>
                  <p className="mt-0.5">
                    {t.belongsTo(match.name, match.company !== match.name ? freeProviderCompany(t, match) : null)}{' '}
                    {t.kindNotes[match.kind]}
                  </p>
                </div>
              </div>
            )}
            {checked && !checked.error && !match && (
              <div className="mt-3 p-4 rounded-xl border bg-slate-50 border-slate-200 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <p className="font-bold text-slate-900 break-all">{t.notListed(checked.domain)}</p>
                  <p className="mt-0.5">
                    {fill(t.notListedText, {
                      mx: (
                        <Link
                          href={`${t.mxHref}?domain=${encodeURIComponent(checked.domain)}`}
                          className="text-indigo-600 font-semibold hover:underline"
                        >
                          {t.mxLink}
                        </Link>
                      ),
                      disposable: (
                        <Link href={t.disposableHref} className="text-indigo-600 font-semibold hover:underline">
                          {t.disposableLink}
                        </Link>
                      ),
                    })}
                  </p>
                </div>
              </div>
            )}
          </div>
        </form>

        {/* Browse and download */}
        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3">
            <div className="flex-1 space-y-2">
              <label htmlFor="free-search" className="block text-sm font-bold text-slate-900">
                {t.browseLabel}
              </label>
              <input
                id="free-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.browsePlaceholder}
                autoComplete="off"
                spellCheck={false}
                className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setKind(key)}
                  aria-pressed={kind === key}
                  className={`px-3 py-2 rounded-lg text-xs font-bold border transition-colors ${
                    kind === key ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {t.filters[key]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <span className="text-slate-600 font-medium">
              {t.showing(visibleDomains.length, visible.length)}
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={copyList}
                disabled={visibleDomains.length === 0}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold disabled:opacity-50"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? t.copied : t.copy}
              </button>
              <button
                type="button"
                disabled={visibleDomains.length === 0}
                onClick={() => download(t.fileTxt, 'text/plain;charset=utf-8', visibleDomains.map((x) => x.d).join('\n') + '\n')}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5" />
                TXT
              </button>
              <button
                type="button"
                disabled={visibleDomains.length === 0}
                onClick={() =>
                  download(
                    t.fileCsv,
                    'text/csv;charset=utf-8',
                    // Byte order mark for localized lists (accented labels) so Excel reads UTF-8; English bytes unchanged.
                    (locale === 'en' ? '' : '﻿') +
                    [t.csvHeader, ...visibleDomains.map(({ d, p }) => [d, p.name, freeProviderCompany(t, p), p.country, t.kindLabels[p.kind]].map(csvCell).join(','))].join('\r\n') + '\r\n'
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5" />
                CSV
              </button>
              <button
                type="button"
                disabled={visibleDomains.length === 0}
                onClick={() => download(t.fileJson, 'application/json', JSON.stringify(visibleDomains.map((x) => x.d), null, 2) + '\n')}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5" />
                JSON
              </button>
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="max-h-[32rem] overflow-y-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold sticky top-0 z-10">
                  <tr>
                    <th className="py-2.5 px-4 w-1/3">{t.thProvider}</th>
                    <th className="py-2.5 px-4">{t.thDomains}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {visible.map((p) => (
                    <tr key={p.name} className="align-top">
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">{p.name}</div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {freeProviderCompany(t, p)} · {p.country}
                        </div>
                        <span className={`inline-block mt-1.5 px-2 py-0.5 rounded text-[11px] font-bold ${KIND_BADGE[p.kind]}`}>
                          {t.kindLabels[p.kind]}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1.5">
                          {p.domains.map((d) => (
                            <span key={d} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono text-xs">
                              {d}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                  {visible.length === 0 && (
                    <tr>
                      <td colSpan={2} className="py-8 px-4 text-center text-slate-500">
                        {t.empty}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
