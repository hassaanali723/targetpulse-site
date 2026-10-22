'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Search, Loader2, Copy, Check, AlertTriangle, CheckCircle2, XCircle, MinusCircle, Server, ArrowRight } from 'lucide-react'
import { lookupMx, toZoneText, MxInputError, type MxLookupResult } from '@/lib/tools/mxLookupCore'
import { mxToolStrings, mxIssueText, type MxToolStrings } from '@/lib/i18n/tools/mxToolStrings'
import type { Locale } from '@/lib/i18n/clusters'

const EXAMPLES = ['gmail.com', 'outlook.com', 'example.com']

// One summary per outcome, written for someone who has never seen an MX record.
// The wording lives in lib/i18n/tools/mxToolStrings.ts.
function summary(r: MxLookupResult, t: MxToolStrings): { tone: 'ok' | 'warn' | 'bad' | 'info'; title: string; text: string } {
  const p = {
    domain: r.domain,
    servers: r.hosts.filter((h) => h.exchange).length,
    provider: r.primaryProvider,
    fallback: r.fallbackAddresses[0] ?? '',
  }
  switch (r.outcome) {
    case 'ok':
      return { tone: 'ok', ...t.summary.ok(p) }
    case 'ok-with-issues':
      return { tone: 'warn', ...t.summary.okWithIssues(p) }
    case 'implicit':
      return { tone: 'warn', ...t.summary.implicit(p) }
    case 'none':
      return { tone: 'bad', ...t.summary.none(p) }
    case 'null-mx':
      return { tone: 'info', ...t.summary.nullMx(p) }
    case 'nxdomain':
      return { tone: 'bad', ...t.summary.nxdomain(p) }
  }
}

const TONE = {
  ok: { box: 'bg-emerald-50 border-emerald-200', title: 'text-emerald-900', text: 'text-emerald-800', Icon: CheckCircle2, icon: 'text-emerald-600' },
  warn: { box: 'bg-amber-50 border-amber-200', title: 'text-amber-900', text: 'text-amber-800', Icon: AlertTriangle, icon: 'text-amber-600' },
  bad: { box: 'bg-rose-50 border-rose-200', title: 'text-rose-900', text: 'text-rose-800', Icon: XCircle, icon: 'text-rose-600' },
  info: { box: 'bg-slate-50 border-slate-200', title: 'text-slate-900', text: 'text-slate-700', Icon: MinusCircle, icon: 'text-slate-500' },
}

export default function MxLookupTool({ locale = 'en' }: { locale?: Locale }) {
  const t = mxToolStrings(locale)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<MxLookupResult | null>(null)
  const [inputError, setInputError] = useState('')
  const [lookupError, setLookupError] = useState('')
  const [copied, setCopied] = useState(false)
  const runId = useRef(0)

  const run = useCallback(async (value: string) => {
    const id = ++runId.current
    setInputError('')
    setLookupError('')
    setLoading(true)
    try {
      const r = await lookupMx(value)
      if (id !== runId.current) return
      setResult(r)
      // Shareable URL: /mx-lookup?domain=example.com runs the same lookup.
      window.history.replaceState(null, '', `?domain=${encodeURIComponent(r.domain)}`)
    } catch (err) {
      if (id !== runId.current) return
      setResult(null)
      if (err instanceof MxInputError) setInputError(err.kind === 'empty' ? t.inputEmpty : t.inputInvalid)
      else setLookupError(t.lookupError)
    } finally {
      if (id === runId.current) setLoading(false)
    }
  }, [t])

  // Run the lookup from a shared link.
  useEffect(() => {
    const d = new URLSearchParams(window.location.search).get('domain')
    if (d) {
      setInput(d)
      run(d)
    }
  }, [run])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    run(input)
  }

  const copyRecords = async () => {
    if (!result) return
    const text = toZoneText(result)
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

  const s = result ? summary(result, t) : null
  const tone = s ? TONE[s.tone] : null
  const servers = result ? result.hosts : []

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">

      <div className="p-5 md:p-8 space-y-6">
        <form onSubmit={onSubmit} className="space-y-2">
          <label htmlFor="mx-domain" className="block text-sm font-bold text-slate-900">
            {t.label}
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="mx-domain"
              type="text"
              inputMode="url"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              className={`flex-1 text-base px-4 py-3 bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono ${
                inputError ? 'border-rose-400' : 'border-slate-300'
              }`}
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-colors shadow-sm disabled:opacity-60"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              {t.button}
            </button>
          </div>
          {inputError ? (
            <p className="text-sm text-rose-600 font-semibold">{inputError}</p>
          ) : (
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span>{t.tryLabel}</span>
              {EXAMPLES.map((ex) => (
                <button
                  key={ex}
                  type="button"
                  onClick={() => {
                    setInput(ex)
                    run(ex)
                  }}
                  className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono font-semibold"
                >
                  {ex}
                </button>
              ))}
            </div>
          )}
        </form>

        <div aria-live="polite" className="space-y-5">
          {lookupError && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-sm text-rose-800 font-medium flex items-start gap-2">
              <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{lookupError}</span>
            </div>
          )}

          {result && s && tone && (
            <>
              <div className={`p-4 md:p-5 rounded-xl border flex items-start gap-3 ${tone.box}`}>
                <tone.Icon className={`w-6 h-6 shrink-0 mt-0.5 ${tone.icon}`} />
                <div className="min-w-0">
                  <h3 className={`text-base md:text-lg font-bold break-words ${tone.title}`}>{s.title}</h3>
                  <p className={`text-sm leading-relaxed mt-1 ${tone.text}`}>{s.text}</p>
                </div>
              </div>

              {servers.length > 0 && (
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                        <tr>
                          <th className="py-2.5 px-4 w-20">{t.thPriority}</th>
                          <th className="py-2.5 px-4">{t.thServer}</th>
                          <th className="py-2.5 px-4 hidden sm:table-cell">{t.thIps}</th>
                          <th className="py-2.5 px-4 w-20 hidden md:table-cell">{t.thTtl}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {servers.map((h, i) => (
                          <tr key={`${h.preference}-${h.exchange}-${i}`} className="align-top">
                            <td className="py-3 px-4 font-mono font-bold text-slate-900">{h.preference}</td>
                            <td className="py-3 px-4 min-w-0">
                              <div className="font-mono font-semibold text-slate-900 break-all">{h.exchange || t.nullMx}</div>
                              {/* Show the provider once per run of servers, not on every row. */}
                              {h.provider && h.provider !== servers[i - 1]?.provider && (
                                <span className="inline-block mt-1 px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[11px] font-bold">
                                  {h.provider}
                                </span>
                              )}
                              <div className="sm:hidden mt-1 font-mono text-xs text-slate-500">
                                {[...h.ipv4, ...h.ipv6].slice(0, 2).map((ip) => (
                                  <div key={ip} className="break-all">
                                    {ip}
                                  </div>
                                ))}
                              </div>
                              {h.issues.map((issue) => (
                                <p key={issue.code} className="mt-1.5 text-xs text-amber-800 font-medium flex items-start gap-1.5">
                                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                                  <span>{mxIssueText(t, issue)}</span>
                                </p>
                              ))}
                            </td>
                            <td className="py-3 px-4 font-mono text-xs text-slate-600 hidden sm:table-cell break-all">
                              {h.ipv4.length + h.ipv6.length === 0 ? (
                                <span className="text-slate-400">{t.none}</span>
                              ) : (
                                <>
                                  {h.ipv4.slice(0, 3).map((ip) => (
                                    <div key={ip}>{ip}</div>
                                  ))}
                                  {h.ipv6.slice(0, 2).map((ip) => (
                                    <div key={ip} className="text-slate-400">
                                      {ip}
                                    </div>
                                  ))}
                                </>
                              )}
                            </td>
                            <td className="py-3 px-4 font-mono text-xs text-slate-600 hidden md:table-cell">{h.ttl}s</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-slate-50 border-t border-slate-200 px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
                    <span>{t.legend}</span>
                    <button
                      type="button"
                      onClick={copyRecords}
                      className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 hover:text-indigo-700 shrink-0"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? t.copied : t.copy}
                    </button>
                  </div>
                </div>
              )}

              {result.issues.map((issue) => (
                <div key={issue.code} className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-900 font-medium flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{mxIssueText(t, issue)}</span>
                </div>
              ))}

              <p className="text-xs text-slate-500 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5" />
                {t.answeredBy} {result.resolver}
                {result.dnssecValidated ? t.dnssec : ''}
              </p>

              {(result.outcome === 'ok' || result.outcome === 'ok-with-issues' || result.outcome === 'implicit') && (
                <div className="rounded-xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold">{t.ctaTitle}</h3>
                    <p className="text-sm text-slate-300">{t.ctaText}</p>
                  </div>
                  <Link
                    href={t.ctaHref}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm whitespace-nowrap"
                  >
                    {t.ctaButton}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
