import React from 'react'

// A faithful, coded recreation of the real Giggal.ai results dashboard, used as
// the hero product shot instead of a mocked-up chip. Sample rows use invented
// addresses (never real customer contacts). Palette matches the site: indigo
// for deliverable, rose for undeliverable, slate for unknown.

type Row = { email: string; status: 'deliverable' | 'undeliverable' | 'unknown'; score: number; tag?: string }

const ROWS: Row[] = [
  { email: 'info@giggal.ai', status: 'deliverable', score: 99 },
  { email: 'hassaan@targetpulse.net', status: 'deliverable', score: 97 },
  { email: 'hello@onelittleweb.com', status: 'deliverable', score: 90, tag: 'catch-all' },
  { email: 'mamnoon@coreroute.uk', status: 'undeliverable', score: 8, tag: 'catch-all' },
]

const STATUS: Record<Row['status'], string> = {
  deliverable: 'bg-indigo-50 text-indigo-700 ring-indigo-100',
  undeliverable: 'bg-rose-50 text-rose-600 ring-rose-100',
  unknown: 'bg-slate-100 text-slate-500 ring-slate-200',
}

function Tile({
  count, label, tone, a, b,
}: { count: string; label: string; tone: 'indigo' | 'rose' | 'slate'; a: string; b: string }) {
  const tones = {
    indigo: 'from-indigo-50 to-white border-indigo-100 text-indigo-700',
    rose: 'from-rose-50 to-white border-rose-100 text-rose-600',
    slate: 'from-slate-50 to-white border-slate-200 text-slate-600',
  }[tone]
  return (
    <div className={`rounded-xl border bg-gradient-to-b p-3 ${tones}`}>
      <div className="text-xl font-black leading-none tabular-nums">{count}</div>
      <div className="text-[10px] font-bold uppercase tracking-wide mt-1">{label}</div>
      <div className="mt-2 space-y-1 border-t border-current/10 pt-1.5">
        <div className="flex justify-between text-[10px] font-semibold text-slate-500"><span>{a.split('·')[0]}</span><span className="tabular-nums text-slate-700">{a.split('·')[1]}</span></div>
        <div className="flex justify-between text-[10px] font-semibold text-slate-500"><span>{b.split('·')[0]}</span><span className="tabular-nums text-slate-700">{b.split('·')[1]}</span></div>
      </div>
    </div>
  )
}

export default function ProductPreview() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-xl card-vivid-shadow overflow-hidden">
      {/* window chrome */}
      <div className="flex items-center gap-2 px-4 h-10 border-b border-slate-100 bg-slate-50/80">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
        <span className="ml-2 text-[11px] font-semibold text-slate-400">emailverifier.giggal.ai</span>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* result header */}
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[13px] font-black text-slate-900 truncate">Q3_Outbound_Prospects.csv</p>
            <p className="text-[11px] font-semibold text-slate-400">4,820 emails · completed</p>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wide text-indigo-700 bg-indigo-50 ring-1 ring-indigo-100 px-2.5 py-1 rounded-lg">
            Catch-all included
          </span>
        </div>

        {/* summary: donut + tiles */}
        <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
          <div className="relative w-[76px] h-[76px] shrink-0">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#eef2ff" strokeWidth="4" />
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#4f46e5" strokeWidth="4" strokeLinecap="round" strokeDasharray="97.4 97.4" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm font-black text-slate-900 leading-none">100%</span>
              <span className="text-[8px] font-bold text-slate-400 mt-0.5">4,820</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Tile count="3,930" label="Deliverable" tone="indigo" a="Business·2,215" b="Free·1,715" />
            <Tile count="890" label="Undeliverable" tone="rose" a="Bad domain·260" b="Rejected·630" />
          </div>
        </div>

        {/* results table */}
        <div className="rounded-xl border border-slate-100 overflow-hidden">
          <div className="flex items-center justify-between px-3 h-8 bg-slate-50 border-b border-slate-100">
            <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">Email</span>
            <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">Status · Score</span>
          </div>
          <div className="divide-y divide-slate-50">
            {ROWS.map((r) => (
              <div key={r.email} className="flex items-center justify-between gap-2 px-3 py-2">
                <span className="text-[11px] font-mono font-semibold text-slate-700 truncate">{r.email}</span>
                <span className="flex items-center gap-2 shrink-0">
                  {r.tag && <span className="text-[9px] font-bold text-slate-400 hidden sm:inline">{r.tag}</span>}
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ring-1 ${STATUS[r.status]}`}>{r.status}</span>
                  <span className="text-[11px] font-black text-slate-500 tabular-nums w-8 text-right">{r.score}%</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
