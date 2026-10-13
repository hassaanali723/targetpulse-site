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

type Mode = 'email' | 'website'

const fmt = (n: number) => n.toLocaleString('en-US')

// Accepts "10,000" or "10 000"; empty stays empty.
const parse = (s: string): number | null => {
  const t = s.replace(/[,\s]/g, '')
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

function EmailResults({ r }: { r: EmailBounceResult }) {
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

  return (
    <div className="space-y-5">
      <div className="rounded-xl bg-slate-900 text-white p-5 md:p-6">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email bounce rate</div>
        <div className="mt-1 text-4xl md:text-5xl font-black">{formatPct(r.rate)}</div>
        <p className="mt-2 font-mono text-xs sm:text-sm text-emerald-300 break-words">
          ({fmt(r.hard)} + {fmt(r.soft)}) ÷ {fmt(r.sent)} × 100 = {formatPct(r.rate)}
        </p>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          {fmt(r.bounced)} of {fmt(r.sent)} emails bounced. Mailchimp, Klaviyo and Mailgun count it this way.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
        <Stat label="Hard bounce rate" value={formatPct(r.hardRate)} note="Most provider limits count only these." />
        <Stat label="Soft bounce rate" value={formatPct(r.softRate)} note="Temporary failures, such as a full mailbox." />
        <div className="col-span-2 sm:col-span-1">
          <Stat label="Delivered rate" value={formatPct(r.deliveredRate)} note={`${fmt(r.delivered)} emails were accepted.`} />
        </div>
      </div>

      {r.rateOfDelivered !== null && r.bounced > 0 && (
        <p className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
          <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <span>
            If your tool divides by delivered emails instead of sent, the same numbers give {formatPct(r.rateOfDelivered)}. Check how your
            tool words it before you compare.
          </span>
        </p>
      )}

      <div className={`p-4 rounded-xl border flex items-start gap-3 ${box}`}>
        <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${iconColor}`} />
        <p className="text-sm font-medium leading-relaxed">
          {over.length === 0
            ? `Your hard bounce rate of ${formatPct(r.hardRate)} is under every provider limit below.`
            : `Your hard bounce rate is ${formatPct(r.hardRate)}, which is at or above the limit ${overNames.join(', ').replace(/, ([^,]*)$/, ' and $1')} ${overNames.length === 1 ? 'sets' : 'set'}. Clean the list before your next send.`}
        </p>
      </div>

      <div className="border border-slate-200 rounded-xl overflow-hidden">
        <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-700">
          Your numbers against provider limits
        </div>
        <ul className="divide-y divide-slate-100 bg-white">
          {limits.map((l) => (
            <li key={l.name} className="px-4 py-3 grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1.5">
              <div className="min-w-0">
                <span className="font-bold text-sm text-slate-900">{l.name}</span>
                <span className="text-xs text-slate-500"> · {l.counts === 'hard' ? 'hard bounces' : 'all bounces'}</span>
                <p className="text-xs text-slate-600 leading-relaxed mt-0.5">{l.what}</p>
              </div>
              <div className="flex items-center gap-2 sm:block sm:text-right">
                <span
                  className={`inline-block px-2 py-0.5 rounded-md text-xs font-bold ${
                    l.over ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'
                  }`}
                >
                  {l.atLimit ? 'At' : l.over ? 'Over' : 'Under'} {l.limit}%
                </span>
                <p className="text-[11px] text-slate-500 sm:mt-1 sm:whitespace-nowrap">
                  {l.over
                    ? `${fmt(-l.room)} too many`
                    : `${fmt(l.room)} more ${l.counts === 'hard' ? 'hard ' : ''}bounce${l.room === 1 ? '' : 's'} left`}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="bg-slate-50 border-t border-slate-200 px-4 py-2.5 text-xs text-slate-600 leading-relaxed">
          Gmail, Yahoo and Microsoft publish no bounce rate limit. Their 0.3% rule is about spam complaints, not bounces. Mailchimp
          doesn’t publish a number either.
        </p>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold">Most hard bounces come from addresses that don’t exist</h3>
          <p className="text-sm text-slate-300">Checking the list before you send removes them, so they never count against you.</p>
        </div>
        <Link
          href="/bulk-email-verifier"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm whitespace-nowrap"
        >
          Verify an email list
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

function WebsiteResults({ r }: { r: WebsiteBounceResult }) {
  return (
    <div className="space-y-5">
      <div className="rounded-xl bg-slate-900 text-white p-5 md:p-6">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Website bounce rate (GA4)</div>
        <div className="mt-1 text-4xl md:text-5xl font-black">{formatPct(r.bounceRate)}</div>
        <p className="mt-2 font-mono text-xs sm:text-sm text-emerald-300 break-words">
          ({fmt(r.sessions)} − {fmt(r.engaged)}) ÷ {fmt(r.sessions)} × 100 = {formatPct(r.bounceRate)}
        </p>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          {fmt(r.sessions - r.engaged)} of {fmt(r.sessions)} sessions were not engaged.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <Stat label="Engagement rate" value={formatPct(r.engagementRate)} note="Engaged sessions ÷ sessions. Bounce rate is 100% minus this." />
        <Stat label="Engaged sessions" value={fmt(r.engaged)} note="Over 10 seconds, a key event, or 2 or more page views." />
      </div>
    </div>
  )
}

export default function BounceRateCalculatorTool() {
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
    if ([s, h, so].some((n) => Number.isNaN(n))) return { result: null, error: 'Use whole numbers only, without decimals or letters.' }
    try {
      return { result: emailBounce({ sent: s, hard: h ?? 0, soft: so ?? 0 }), error: '' }
    } catch (e) {
      return { result: null, error: e instanceof BounceInputError ? e.message : 'Check the numbers.' }
    }
  }, [sent, hard, soft])

  const site = useMemo(() => {
    const s = parse(sessions)
    const e = parse(engaged)
    if (s === null || e === null) return { result: null, error: '' }
    if (Number.isNaN(s) || Number.isNaN(e)) return { result: null, error: 'Use whole numbers only, without decimals or letters.' }
    try {
      return { result: websiteBounce(s, e), error: '' }
    } catch (err) {
      return { result: null, error: err instanceof BounceInputError ? err.message : 'Check the numbers.' }
    }
  }, [sessions, engaged])

  const tabClass = (m: Mode) =>
    `flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
      mode === m ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
    }`

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">
      <div className="p-5 md:p-8 space-y-6">
        <div role="tablist" aria-label="What to calculate" className="inline-flex w-full sm:w-auto p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" role="tab" aria-selected={mode === 'email'} onClick={() => setMode('email')} className={tabClass('email')}>
            Email<span className="hidden sm:inline"> bounce rate</span>
          </button>
          <button type="button" role="tab" aria-selected={mode === 'website'} onClick={() => setMode('website')} className={tabClass('website')}>
            Website<span className="hidden sm:inline"> bounce rate</span>
          </button>
        </div>

        {mode === 'email' && (
          <div role="tabpanel" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <NumberField id="br-sent" label="Emails sent" hint="The total your tool reports for the send." value={sent} onChange={setSent} placeholder="10,000" />
              <NumberField id="br-hard" label="Hard bounces" hint="Permanent: the address doesn’t exist." value={hard} onChange={setHard} placeholder="150" />
              <NumberField id="br-soft" label="Soft bounces" hint="Temporary. Leave empty if your tool shows only one number." value={soft} onChange={setSoft} placeholder="100" />
            </div>
            {!email.result && !email.error && (
              <p className="text-sm text-slate-500">
                Enter your numbers, or{' '}
                <button
                  type="button"
                  onClick={() => {
                    setSent('10,000')
                    setHard('150')
                    setSoft('100')
                  }}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  try an example
                </button>
                .
              </p>
            )}
            <div aria-live="polite">
              {email.error && <p className="text-sm text-rose-600 font-semibold">{email.error}</p>}
              {email.result && <EmailResults r={email.result} />}
            </div>
          </div>
        )}

        {mode === 'website' && (
          <div role="tabpanel" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NumberField id="br-sessions" label="Sessions" hint="From your Google Analytics 4 report." value={sessions} onChange={setSessions} placeholder="2,000" />
              <NumberField id="br-engaged" label="Engaged sessions" hint="Same report and date range." value={engaged} onChange={setEngaged} placeholder="1,250" />
            </div>
            {!site.result && !site.error && (
              <p className="text-sm text-slate-500">
                Enter your numbers, or{' '}
                <button
                  type="button"
                  onClick={() => {
                    setSessions('2,000')
                    setEngaged('1,250')
                  }}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  try an example
                </button>
                .
              </p>
            )}
            <div aria-live="polite">
              {site.error && <p className="text-sm text-rose-600 font-semibold">{site.error}</p>}
              {site.result && <WebsiteResults r={site.result} />}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
