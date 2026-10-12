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

const KIND_LABEL: Record<ProviderKind, string> = {
  webmail: 'Free webmail',
  privacy: 'Private and encrypted',
  isp: 'Internet provider',
}
const KIND_BADGE: Record<ProviderKind, string> = {
  webmail: 'bg-indigo-50 text-indigo-700',
  privacy: 'bg-emerald-50 text-emerald-700',
  isp: 'bg-amber-50 text-amber-800',
}
// What each type means for the person checking an address.
const KIND_NOTE: Record<ProviderKind, string> = {
  webmail: 'It’s a free webmail service that anyone can join.',
  privacy: 'It’s a private, encrypted email service.',
  isp: 'It comes with a home internet plan, so it’s a personal address too.',
}
const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`

const FILTERS: { key: 'all' | ProviderKind; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'webmail', label: 'Free webmail' },
  { key: 'privacy', label: 'Private and encrypted' },
  { key: 'isp', label: 'Internet providers' },
]

const checkedOn = new Date(`${FREE_LIST_CHECKED}T12:00:00Z`).toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

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

export default function FreeEmailProvidersTool() {
  const [checkInput, setCheckInput] = useState('')
  const [checked, setChecked] = useState<{ domain: string; error?: string } | null>(null)
  const [query, setQuery] = useState('')
  const [kind, setKind] = useState<'all' | ProviderKind>('all')
  const [copied, setCopied] = useState(false)

  const onCheck = (e: React.FormEvent) => {
    e.preventDefault()
    const domain = normalizeDomainInput(checkInput)
    if (!domain) setChecked({ domain: '', error: 'Enter a domain or an email address.' })
    else if (!looksLikeDomain(domain)) setChecked({ domain, error: 'That doesn’t look like a domain. Try something like gmail.com.' })
    else setChecked({ domain })
  }
  const match = checked && !checked.error ? FREE_DOMAIN_INDEX.get(checked.domain) : undefined

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/^.*@/, '')
    return FREE_EMAIL_PROVIDERS.filter((p) => kind === 'all' || p.kind === kind)
      .map((p) => {
        if (!q) return p
        const nameHit = p.name.toLowerCase().includes(q) || p.company.toLowerCase().includes(q)
        return nameHit ? p : { ...p, domains: p.domains.filter((d) => d.includes(q)) }
      })
      .filter((p) => p.domains.length > 0)
  }, [query, kind])
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
          {FREE_DOMAIN_COUNT} domains from {FREE_EMAIL_PROVIDERS.length} providers. Every one had working MX records when we checked on {checkedOn}.
        </span>
      </div>

      <div className="p-5 md:p-8 space-y-8">
        {/* Checker */}
        <form onSubmit={onCheck} className="space-y-2">
          <label htmlFor="free-check" className="block text-sm font-bold text-slate-900">
            Is this a free email domain?
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="free-check"
              type="text"
              value={checkInput}
              onChange={(e) => setCheckInput(e.target.value)}
              placeholder="Enter a domain or an email address"
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
              Check domain
            </button>
          </div>

          <div aria-live="polite">
            {checked?.error && <p className="text-sm text-rose-600 font-semibold pt-1">{checked.error}</p>}
            {checked && !checked.error && match && (
              <div className="mt-3 p-4 rounded-xl border bg-indigo-50 border-indigo-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="text-sm text-indigo-900">
                  <p className="font-bold break-all">{checked.domain} is a free email domain.</p>
                  <p className="mt-0.5">
                    It belongs to {match.name}
                    {match.company !== match.name ? `, run by ${match.company}` : ''}. {KIND_NOTE[match.kind]}
                  </p>
                </div>
              </div>
            )}
            {checked && !checked.error && !match && (
              <div className="mt-3 p-4 rounded-xl border bg-slate-50 border-slate-200 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <p className="font-bold text-slate-900 break-all">{checked.domain} isn’t on this list.</p>
                  <p className="mt-0.5">
                    It’s most likely a company, school or personal domain. It could also be a small free provider we don’t cover,
                    or a disposable address service. You can{' '}
                    <Link href={`/mx-lookup?domain=${encodeURIComponent(checked.domain)}`} className="text-indigo-600 font-semibold hover:underline">
                      look up its mail servers
                    </Link>{' '}
                    or{' '}
                    <Link href="/disposable-email-checker" className="text-indigo-600 font-semibold hover:underline">
                      check if it’s disposable
                    </Link>
                    .
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
                Browse the list
              </label>
              <input
                id="free-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter by domain or provider, e.g. hotmail or gmx"
                autoComplete="off"
                spellCheck={false}
                className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setKind(f.key)}
                  aria-pressed={kind === f.key}
                  className={`px-3 py-2 rounded-lg text-xs font-bold border transition-colors ${
                    kind === f.key ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <span className="text-slate-600 font-medium">
              Showing {plural(visibleDomains.length, 'domain')} from {plural(visible.length, 'provider')}
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={copyList}
                disabled={visibleDomains.length === 0}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold disabled:opacity-50"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy domains'}
              </button>
              <button
                type="button"
                disabled={visibleDomains.length === 0}
                onClick={() => download('free-email-domains.txt', 'text/plain;charset=utf-8', visibleDomains.map((x) => x.d).join('\n') + '\n')}
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
                    'free-email-domains.csv',
                    'text/csv;charset=utf-8',
                    ['domain,provider,company,country,type', ...visibleDomains.map(({ d, p }) => [d, p.name, p.company, p.country, KIND_LABEL[p.kind]].map(csvCell).join(','))].join('\r\n') + '\r\n'
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
                onClick={() => download('free-email-domains.json', 'application/json', JSON.stringify(visibleDomains.map((x) => x.d), null, 2) + '\n')}
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
                    <th className="py-2.5 px-4 w-1/3">Provider</th>
                    <th className="py-2.5 px-4">Domains</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {visible.map((p) => (
                    <tr key={p.name} className="align-top">
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">{p.name}</div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {p.company} · {p.country}
                        </div>
                        <span className={`inline-block mt-1.5 px-2 py-0.5 rounded text-[11px] font-bold ${KIND_BADGE[p.kind]}`}>
                          {KIND_LABEL[p.kind]}
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
                        No domains match that filter.
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
