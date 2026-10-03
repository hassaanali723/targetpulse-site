// Animated demo for the bulk section: a results window where a scan line runs
// down a list and each row resolves from a spinner to its result, while the
// progress bar fills and the count runs up. Decorative (aria-hidden): the
// section's heading and checklist carry the content. Sample addresses are the
// invented ones used in ProductPreview, never real contacts.
//
// Static by default: rendered in its finished state, so it is complete
// without JavaScript. The loop starts once MotionRuntime marks it .is-in
// (globals.css, "Home motion, part 3").

import { Check, Mail, X } from 'lucide-react'

type Row = { email: string; ok: boolean; score: number; catchAll?: boolean }

const ROWS: Row[] = [
  { email: 'info@giggal.ai', ok: true, score: 99 },
  { email: 'hassaan@targetpulse.net', ok: true, score: 97 },
  { email: 'hello@onelittleweb.com', ok: true, score: 90, catchAll: true },
  { email: 'mamnoon@coreroute.uk', ok: false, score: 8, catchAll: true },
  { email: 'info@activarmor.com', ok: true, score: 94, catchAll: true },
]

export default function BulkScanDemo({ total = '4,820' }: { total?: string }) {
  return (
    <div data-inview aria-hidden="true" className="scan-demo relative">
      {/* Soft colour behind the window. */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-indigo-200/50 via-transparent to-emerald-200/50 blur-2xl" />
      <div className="relative rounded-2xl border border-slate-200 bg-white shadow-[0_30px_70px_-30px_rgba(30,27,75,0.35)] overflow-clip">
        <div className="flex items-center gap-2 px-4 h-10 border-b border-slate-100 bg-slate-50/80">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
          <span className="ml-2 text-[11px] font-semibold text-slate-400">emailverifier.giggal.ai</span>
        </div>

        <div className="px-5 pt-4 pb-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[13px] font-black text-slate-900 truncate">Q3_Outbound_Prospects.csv</p>
            <p className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 tabular-nums">
              <Mail className="w-3 h-3" />
              <span data-count>{total}</span>
            </p>
          </div>
          <span className="scan-live inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 ring-1 ring-emerald-100">
            <span className="scan-live-dot w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="w-8 h-1.5 rounded-full bg-emerald-200 overflow-clip">
              <span className="scan-progress block h-full w-full rounded-full bg-emerald-500" />
            </span>
          </span>
        </div>

        <div className="relative px-3 pb-4">
          {/* The scan line that runs down the rows. */}
          <span className="scan-line pointer-events-none absolute inset-x-3 top-0 h-12 rounded-lg" />
          <ul className="space-y-1.5">
            {ROWS.map((r, i) => (
              <li
                key={r.email}
                style={{ ['--i' as string]: i }}
                className="scan-row relative h-12 flex items-center gap-3 rounded-lg px-3"
              >
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black ${r.ok ? 'bg-indigo-50 text-indigo-600' : 'bg-rose-50 text-rose-500'}`}>
                  {r.email[0].toUpperCase()}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-[13px] font-semibold text-slate-800 truncate">{r.email}</span>
                  <span className="mt-1 block h-1 w-24 rounded-full bg-slate-100 overflow-clip">
                    <span
                      className={`scan-score block h-full rounded-full ${r.ok ? 'bg-gradient-to-r from-indigo-500 to-emerald-400' : 'bg-rose-400'}`}
                      style={{ width: `${r.score}%` }}
                    />
                  </span>
                </span>
                {r.catchAll && (
                  <span className="hidden sm:inline-flex shrink-0 rounded-md bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold text-amber-700 ring-1 ring-inset ring-amber-200">
                    catch-all
                  </span>
                )}
                {/* Result slot: a spinner while checking, then the result. */}
                <span className="relative shrink-0 w-7 h-7">
                  <span className="scan-spin absolute inset-1 rounded-full border-2 border-slate-200 border-t-indigo-500" />
                  <span
                    className={`scan-result absolute inset-0 rounded-full flex items-center justify-center text-white ${r.ok ? 'bg-emerald-500 shadow-[0_6px_16px_-6px_rgba(16,185,129,0.8)]' : 'bg-rose-500 shadow-[0_6px_16px_-6px_rgba(244,63,94,0.8)]'}`}
                  >
                    {r.ok ? <Check className="w-4 h-4" strokeWidth={3.5} /> : <X className="w-4 h-4" strokeWidth={3.5} />}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
