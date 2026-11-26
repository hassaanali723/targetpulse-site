'use client'

// Cold email campaign calculator: starts from the lead list, not from a daily
// sending goal. Leads x emails per lead = total sends; spread over the days you
// want to finish in, that gives sends per day, then inboxes and domains. The
// invalid share shows what verifying the list first saves.
// Inbox prices are PureMail's public prices, checked 2026-11-26:
// $3.30 per inbox under 30, $3.10 at 30 to 100, $2.90 from 101, minimum 10.

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Inbox, Globe, CalendarDays, Send, ShieldCheck } from 'lucide-react'

// Pricing page, so the copy link on the page (home page) and this button point
// to different URLs: one link per target.
const PUREMAIL_URL =
  'https://puremail.ai/pricing/?utm_source=giggal&utm_medium=campaign-calculator&utm_campaign=tool'

const fmt = (n: number) => Math.round(n).toLocaleString('en-US')
const money = (n: number) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

function inboxPrice(inboxes: number): number {
  if (inboxes > 100) return 2.9
  if (inboxes >= 30) return 3.1
  return 3.3
}

function Choice<T extends number>({
  label,
  hint,
  options,
  value,
  onChange,
  suffix,
}: {
  label: string
  hint: string
  options: T[]
  value: T
  onChange: (v: T) => void
  suffix: string
}) {
  return (
    <fieldset className="space-y-2 min-w-0">
      <legend className="block text-sm font-bold text-slate-900">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            aria-pressed={value === o}
            className={`px-3 py-2 rounded-lg text-sm font-bold border transition-colors ${
              value === o ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {o}
            {suffix}
          </button>
        ))}
      </div>
      <p className="text-xs text-slate-500 font-medium leading-relaxed">{hint}</p>
    </fieldset>
  )
}

function NumberInput({
  id,
  label,
  hint,
  value,
  onChange,
}: {
  id: string
  label: string
  hint: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="space-y-2 min-w-0">
      <label htmlFor={id} className="block text-sm font-bold text-slate-900">
        {label}
      </label>
      <input
        id={id}
        type="text"
        inputMode="numeric"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full text-base px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold"
      />
      <p className="text-xs text-slate-500 font-medium leading-relaxed">{hint}</p>
    </div>
  )
}

// Whole numbers only. Commas, spaces and dots are read as thousands separators
// ("10,000", "10 000", "10.000"), the same as the bounce rate calculator.
// Anything else (letters, "1e6", negatives) counts as empty.
const toNum = (s: string) => {
  const t = s.replace(/[,\s.]/g, '')
  return /^\d+$/.test(t) ? Number(t) : 0
}

// Days are small numbers, so a dot is a decimal point there, not a separator:
// "0.5" is not a valid number of sending days.
const toDays = (s: string) => {
  const t = s.replace(/[,\s]/g, '')
  return /^\d+$/.test(t) ? Number(t) : 0
}

const plural = (n: number, one: string, many: string) => `${fmt(n)} ${n === 1 ? one : many}`

export default function CampaignCalculatorTool() {
  const [leads, setLeads] = useState('10,000')
  const [days, setDays] = useState('20')
  const [steps, setSteps] = useState<1 | 2 | 3 | 4 | 5>(3)
  const [perInbox, setPerInbox] = useState<20 | 30 | 40>(30)
  const [perDomain, setPerDomain] = useState<2 | 3 | 4>(2)
  const [invalidPct, setInvalidPct] = useState<0 | 5 | 10 | 20 | 30>(10)

  const r = useMemo(() => {
    const L = toNum(leads)
    const D = toDays(days)
    if (!L || !D) return null
    const invalid = Math.round((L * invalidPct) / 100)
    const valid = L - invalid
    const plan = (n: number) => {
      const sends = n * steps
      const perDay = Math.ceil(sends / D)
      const inboxes = Math.max(1, Math.ceil(perDay / perInbox))
      const domains = Math.max(1, Math.ceil(inboxes / perDomain))
      return { sends, perDay, inboxes, domains }
    }
    const clean = plan(valid)
    const raw = plan(L)
    const billed = Math.max(10, clean.inboxes)
    const price = inboxPrice(billed)
    return { L, D, invalid, valid, clean, raw, billed, price, cost: billed * price }
  }, [leads, days, steps, perInbox, perDomain, invalidPct])

  // overflow-clip, not overflow-hidden: hidden would make the card a scroll
  // container and break the sticky summary bar below lg.
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-clip">
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        {/* Inputs */}
        <div className="p-5 md:p-8 space-y-6 border-b lg:border-b-0 lg:border-r border-slate-200">
          <div className="grid sm:grid-cols-2 gap-5">
            <NumberInput id="cc-leads" label="Leads in your list" hint="Everyone you plan to email in this campaign." value={leads} onChange={setLeads} />
            <NumberInput id="cc-days" label="Sending days to finish" hint="Working days, if you only send on weekdays." value={days} onChange={setDays} />
          </div>
          <Choice
            label="Emails per lead"
            hint="The first email plus follow-ups. A 3-step sequence sends up to 3 emails to each lead."
            options={[1, 2, 3, 4, 5] as (1 | 2 | 3 | 4 | 5)[]}
            value={steps}
            onChange={setSteps}
            suffix=""
          />
          <Choice
            label="Emails per inbox per day"
            hint="20 is the careful choice for new domains, 30 is common for warmed-up inboxes, 40 is the upper end."
            options={[20, 30, 40] as (20 | 30 | 40)[]}
            value={perInbox}
            onChange={setPerInbox}
            suffix=" a day"
          />
          <Choice
            label="Inboxes per domain"
            hint="Fewer inboxes per domain spreads the risk across more domains."
            options={[2, 3, 4] as (2 | 3 | 4)[]}
            value={perDomain}
            onChange={setPerDomain}
            suffix=" per domain"
          />
          <Choice
            label="Invalid addresses in the list"
            hint="An example share. Run the list through a bulk email verifier to get your real number."
            options={[0, 5, 10, 20, 30] as (0 | 5 | 10 | 20 | 30)[]}
            value={invalidPct}
            onChange={setInvalidPct}
            suffix="%"
          />

          {/* Below lg the results sit under all the inputs, off screen. This bar
              keeps the main numbers in view while the visitor changes inputs. */}
          {r && (
            <div className="lg:hidden sticky bottom-0 -mx-5 md:-mx-8 px-5 md:px-8 py-3 bg-white/95 backdrop-blur border-t border-slate-200 flex items-center justify-between gap-3 text-sm">
              <span className="font-semibold text-slate-700">
                <strong className="text-slate-900">{plural(r.clean.inboxes, 'inbox', 'inboxes')}</strong> ·{' '}
                <strong className="text-slate-900">{plural(r.clean.domains, 'domain', 'domains')}</strong> · {fmt(r.clean.perDay)} emails a day
              </span>
              <a href="#cc-results" className="shrink-0 font-bold text-indigo-600 hover:underline">
                Full plan ↓
              </a>
            </div>
          )}
        </div>

        {/* Results */}
        <div id="cc-results" className="p-5 md:p-8 bg-slate-50/70 space-y-5 scroll-mt-24" aria-live="polite">
          {!r ? (
            <p className="text-sm text-slate-600 font-medium">Enter the number of leads and the sending days to see your plan.</p>
          ) : (
            <>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Your plan, after removing invalid addresses</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { Icon: Inbox, label: 'Inboxes', value: fmt(r.clean.inboxes) },
                  { Icon: Globe, label: 'Domains', value: fmt(r.clean.domains) },
                  { Icon: Send, label: 'Emails per day', value: fmt(r.clean.perDay) },
                  { Icon: CalendarDays, label: 'Total emails', value: fmt(r.clean.sends) },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <m.Icon className="w-4 h-4 text-indigo-500" aria-hidden="true" />
                      {m.label}
                    </div>
                    <div className="mt-1 text-2xl font-black text-slate-900 tabular-nums">{m.value}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                {plural(r.valid, 'valid lead', 'valid leads')} × {plural(steps, 'email', 'emails')} = {plural(r.clean.sends, 'email', 'emails')} over{' '}
                {plural(r.D, 'day', 'days')} = {fmt(r.clean.perDay)} a day ÷ {perInbox} per inbox = {plural(r.clean.inboxes, 'inbox', 'inboxes')} ÷ {perDomain} per
                domain = {plural(r.clean.domains, 'domain', 'domains')}.
              </p>

              {r.invalid > 0 && (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-sm text-slate-700">
                  <p className="flex items-center gap-2 font-bold text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    What verifying the list first saves
                  </p>
                  <ul className="mt-2 space-y-1 font-medium">
                    <li>
                      <strong className="text-slate-900">{fmt(r.invalid)}</strong> bounces you never send
                    </li>
                    {r.raw.inboxes > r.clean.inboxes && (
                      <li>
                        <strong className="text-slate-900">{fmt(r.raw.inboxes - r.clean.inboxes)}</strong> fewer inboxes ({fmt(r.raw.inboxes)} without verifying)
                      </li>
                    )}
                  </ul>
                  <Link href="/bulk-email-verifier" className="mt-2 inline-flex items-center gap-1 font-bold text-emerald-700 hover:underline">
                    Verify your list first <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              )}

              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                <p className="font-bold text-slate-900">Inbox cost: about {money(r.cost)} a month</p>
                <p className="mt-1 font-medium leading-relaxed">
                  {fmt(r.billed)} Google Workspace or Microsoft 365 inboxes at {money(r.price)} each, based on PureMail&apos;s prices
                  {r.billed > r.clean.inboxes ? ', which start at 10 inboxes' : ''}. Domains are extra, bought from your registrar.
                </p>
                <a
                  href={PUREMAIL_URL}
                  rel="noopener"
                  className="mt-3 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold transition-colors"
                >
                  Get {fmt(r.billed)} inboxes on PureMail <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
