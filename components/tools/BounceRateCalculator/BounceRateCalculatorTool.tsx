'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { AlertTriangle, CheckCircle2, XCircle, ArrowRight, Info } from 'lucide-react'
import {
  emailBounce,
  checkLimits,
  websiteBounce,
  formatPct,
  BounceInputError,
  type EmailBounceResult,
  type WebsiteBounceResult,
} from '@/lib/tools/bounceRateCore'
import { bounceRateToolStrings, type BounceRateToolStrings } from '@/lib/i18n/tools/bounceRateToolStrings'
import { localizeHref, type Locale } from '@/lib/i18n/clusters'

type Mode = 'email' | 'website'

const fmtLocale = (n: number, locale: Locale) => {
  const code = locale === 'pt-br' ? 'pt-BR' : locale === 'en' ? 'en-US' : locale
  try {
    return n.toLocaleString(code)
  } catch {
    return n.toLocaleString('en-US')
  }
}

const andJoiner = (names: string[], loc: Locale): string => {
  if (names.length === 0) return ''
  if (names.length === 1) return names[0]
  const conjunction = {
    en: ' and ',
    fr: ' et ',
    es: ' y ',
    de: ' und ',
    it: ' e ',
    'pt-br': ' e ',
    nl: ' en ',
    pl: ' i ',
    id: ' dan ',
  }[loc] ?? ' and '
  return names.slice(0, -1).join(', ') + conjunction + names[names.length - 1]
}

// Accepts "10,000", "10 000" or "10.000"; empty stays empty.
const parse = (s: string): number | null => {
  const t = s.replace(/[,\s.]/g, '')
  if (t === '') return null
  return /^\d+$/.test(t) ? Number(t) : NaN
}

function NumberField({
  id,
  label,
  hint,
  value,
  onChange,
  placeholder,
}: {
  id: string
  label: string
  hint: string
  value: string
  onChange: (v: string) => void
  placeholder: string
}) {
  return (
    <div className="space-y-1.5 min-w-0">
      <label htmlFor={id} className="block text-sm font-bold text-slate-900">
        {label}
      </label>
      <input
        id={id}
        type="text"
        inputMode="numeric"
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full text-base px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
      />
      <p className="text-xs text-slate-500 leading-relaxed">{hint}</p>
    </div>
  )
}

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="p-3 sm:p-4 rounded-xl border border-slate-200 bg-white min-w-0">
      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{label}</div>
      <div className="mt-1 text-xl sm:text-2xl font-black text-slate-900">{value}</div>
      <p className="mt-1 text-xs text-slate-500 leading-relaxed">{note}</p>
    </div>
  )
}

function EmailResults({ r, t, locale }: { r: EmailBounceResult; t: BounceRateToolStrings; locale: Locale }) {
  const limits = checkLimits(r)
  const over = limits.filter((l) => l.over)
  const tone = over.length === 0 ? 'ok' : over.some((l) => l.limit >= 5) ? 'bad' : 'warn'
  const box = {
    ok: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    warn: 'bg-amber-50 border-amber-200 text-amber-900',
    bad: 'bg-rose-50 border-rose-200 text-rose-900',
  }[tone]
  const Icon = { ok: CheckCircle2, warn: AlertTriangle, bad: XCircle }[tone]
  const iconColor = { ok: 'text-emerald-600', warn: 'text-amber-600', bad: 'text-rose-600' }[tone]
  const overNames = Array.from(new Set(over.map((l) => l.name.replace(/ \(.*\)$/, ''))))
  const er = t.emailResults
  const fmt = (n: number) => fmtLocale(n, locale)

  return (
    <div className="space-y-5">
      <div className="rounded-xl bg-slate-900 text-white p-5 md:p-6">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{er.heading}</div>
        <div className="mt-1 text-4xl md:text-5xl font-black">{formatPct(r.rate)}</div>
        <p className="mt-2 font-mono text-xs sm:text-sm text-emerald-300 break-words">
          ({fmt(r.hard)} + {fmt(r.soft)}) ÷ {fmt(r.sent)} × 100 = {formatPct(r.rate)}
        </p>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          {er.bouncedOfSent(fmt(r.bounced), fmt(r.sent))}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
        <Stat label={er.statHard.label} value={formatPct(r.hardRate)} note={er.statHard.note} />
        <Stat label={er.statSoft.label} value={formatPct(r.softRate)} note={er.statSoft.note} />
        <div className="col-span-2 sm:col-span-1">
          <Stat label={er.statDelivered.label} value={formatPct(r.deliveredRate)} note={er.statDelivered.note(fmt(r.delivered))} />
        </div>
      </div>

      {r.rateOfDelivered !== null && r.bounced > 0 && (
        <p className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
          <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <span>{er.deliveredComparison(formatPct(r.rateOfDelivered))}</span>
        </p>
      )}

      <div className={`p-4 rounded-xl border flex items-start gap-3 ${box}`}>
        <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${iconColor}`} />
        <p className="text-sm font-medium leading-relaxed">
          {over.length === 0
            ? er.allUnderLimits(formatPct(r.hardRate))
            : er.overLimits(formatPct(r.hardRate), andJoiner(overNames, locale))}
        </p>
      </div>

      <div className="border border-slate-200 rounded-xl overflow-hidden">
        <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-700">
          {er.limitsHeader}
        </div>
        <ul className="divide-y divide-slate-100 bg-white">
          {limits.map((l) => (
            <li key={l.name} className="px-4 py-3 grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1.5">
              <div className="min-w-0">
                <span className="font-bold text-sm text-slate-900">{l.name}</span>
                <span className="text-xs text-slate-500"> · {l.counts === 'hard' ? er.countsHard : er.countsAll}</span>
                <p className="text-xs text-slate-600 leading-relaxed mt-0.5">{l.what}</p>
              </div>
              <div className="flex items-center gap-2 sm:block sm:text-right">
                <span
                  className={`inline-block px-2 py-0.5 rounded-md text-xs font-bold ${
                    l.over ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'
                  }`}
                >
                  {l.atLimit ? er.atLimit : l.over ? er.overLimit : er.underLimit} {l.limit}%
                </span>
                <p className="text-[11px] text-slate-500 sm:mt-1 sm:whitespace-nowrap">
                  {l.over ? er.tooMany(fmt(-l.room)) : er.leftRoom(fmt(l.room), l.counts)}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="bg-slate-50 border-t border-slate-200 px-4 py-2.5 text-xs text-slate-600 leading-relaxed">
          {er.providerNote}
        </p>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold">{er.ctaBox.title}</h3>
          <p className="text-sm text-slate-300">{er.ctaBox.desc}</p>
        </div>
        <Link
          href={localizeHref('/bulk-email-verifier', locale).href}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm whitespace-nowrap"
        >
          {er.ctaBox.button}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

function WebsiteResults({ r, t, locale }: { r: WebsiteBounceResult; t: BounceRateToolStrings; locale: Locale }) {
  const wr = t.websiteResults
  const fmt = (n: number) => fmtLocale(n, locale)

  return (
    <div className="space-y-5">
      <div className="rounded-xl bg-slate-900 text-white p-5 md:p-6">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{wr.heading}</div>
        <div className="mt-1 text-4xl md:text-5xl font-black">{formatPct(r.bounceRate)}</div>
        <p className="mt-2 font-mono text-xs sm:text-sm text-emerald-300 break-words">
          ({fmt(r.sessions)} − {fmt(r.engaged)}) ÷ {fmt(r.sessions)} × 100 = {formatPct(r.bounceRate)}
        </p>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          {wr.sessionsNotEngaged(fmt(r.sessions - r.engaged), fmt(r.sessions))}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <Stat label={wr.statEngagement.label} value={formatPct(r.engagementRate)} note={wr.statEngagement.note} />
        <Stat label={wr.statEngaged.label} value={fmt(r.engaged)} note={wr.statEngaged.note} />
      </div>
    </div>
  )
}

export default function BounceRateCalculatorTool({ locale = 'en' }: { locale?: Locale }) {
  const t = bounceRateToolStrings(locale)
  const [mode, setMode] = useState<Mode>('email')
  const [sent, setSent] = useState('')
  const [hard, setHard] = useState('')
  const [soft, setSoft] = useState('')
  const [sessions, setSessions] = useState('')
  const [engaged, setEngaged] = useState('')

  const email = useMemo(() => {
    const s = parse(sent)
    const h = parse(hard)
    const so = parse(soft)
    if (s === null || (h === null && so === null)) return { result: null, error: '' }
    if ([s, h, so].some((n) => Number.isNaN(n))) return { result: null, error: t.errorWhole }
    try {
      return { result: emailBounce({ sent: s, hard: h ?? 0, soft: so ?? 0 }), error: '' }
    } catch (e) {
      return { result: null, error: e instanceof BounceInputError ? e.message : t.errorCheck }
    }
  }, [sent, hard, soft, t])

  const site = useMemo(() => {
    const s = parse(sessions)
    const e = parse(engaged)
    if (s === null || e === null) return { result: null, error: '' }
    if (Number.isNaN(s) || Number.isNaN(e)) return { result: null, error: t.errorWhole }
    try {
      return { result: websiteBounce(s, e), error: '' }
    } catch (err) {
      return { result: null, error: err instanceof BounceInputError ? err.message : t.errorCheck }
    }
  }, [sessions, engaged, t])

  const tabClass = (m: Mode) =>
    `flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
      mode === m ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
    }`

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">
      <div className="p-5 md:p-8 space-y-6">
        <div role="tablist" aria-label={t.tabAria} className="inline-flex w-full sm:w-auto p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" role="tab" aria-selected={mode === 'email'} onClick={() => setMode('email')} className={tabClass('email')}>
            {t.tabEmail}
          </button>
          <button type="button" role="tab" aria-selected={mode === 'website'} onClick={() => setMode('website')} className={tabClass('website')}>
            {t.tabWebsite}
          </button>
        </div>

        {mode === 'email' && (
          <div role="tabpanel" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <NumberField id="br-sent" label={t.fieldSent.label} hint={t.fieldSent.hint} value={sent} onChange={setSent} placeholder={t.fieldSent.placeholder} />
              <NumberField id="br-hard" label={t.fieldHard.label} hint={t.fieldHard.hint} value={hard} onChange={setHard} placeholder={t.fieldHard.placeholder} />
              <NumberField id="br-soft" label={t.fieldSoft.label} hint={t.fieldSoft.hint} value={soft} onChange={setSoft} placeholder={t.fieldSoft.placeholder} />
            </div>
            {!email.result && !email.error && (
              <p className="text-sm text-slate-500">
                {t.tryExamplePrompt}
                <button
                  type="button"
                  onClick={() => {
                    setSent(fmtLocale(10000, locale))
                    setHard(fmtLocale(150, locale))
                    setSoft(fmtLocale(100, locale))
                  }}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  {t.tryExampleLink}
                </button>
                .
              </p>
            )}
            <div aria-live="polite">
              {email.error && <p className="text-sm text-rose-600 font-semibold">{email.error}</p>}
              {email.result && <EmailResults r={email.result} t={t} locale={locale} />}
            </div>
          </div>
        )}

        {mode === 'website' && (
          <div role="tabpanel" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NumberField id="br-sessions" label={t.fieldSessions.label} hint={t.fieldSessions.hint} value={sessions} onChange={setSessions} placeholder={t.fieldSessions.placeholder} />
              <NumberField id="br-engaged" label={t.fieldEngaged.label} hint={t.fieldEngaged.hint} value={engaged} onChange={setEngaged} placeholder={t.fieldEngaged.placeholder} />
            </div>
            {!site.result && !site.error && (
              <p className="text-sm text-slate-500">
                {t.tryExamplePrompt}
                <button
                  type="button"
                  onClick={() => {
                    setSessions(fmtLocale(2000, locale))
                    setEngaged(fmtLocale(1250, locale))
                  }}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  {t.tryExampleLink}
                </button>
                .
              </p>
            )}
            <div aria-live="polite">
              {site.error && <p className="text-sm text-rose-600 font-semibold">{site.error}</p>}
              {site.result && <WebsiteResults r={site.result} t={t} locale={locale} />}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
