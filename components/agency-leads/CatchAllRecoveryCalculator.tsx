'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'

const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const VOLUMES = [2500, 10000, 25000, 50000]
const CATCH_ALL_OPTIONS = [
  { label: '30% (Typical B2B list)', rate: 30 },
  { label: '40% (Agency / SaaS heavy)', rate: 40 },
]

export default function CatchAllRecoveryCalculator({
  platformLabel,
  defaultCatchAllRate = 30,
}: {
  platformLabel: string
  defaultCatchAllRate?: number
}) {
  const [volume, setVolume] = useState<number>(10000)
  const [catchAllRate, setCatchAllRate] = useState<number>(defaultCatchAllRate)

  // Based on Giggal.ai illustrative benchmark: ~80% of catch-all addresses turn out valid
  // and ~15% illustrative dead / bad addresses removed before send.
  const catchAllPool = Math.round(volume * (catchAllRate / 100))
  const recoveredCatchAll = Math.round(catchAllPool * 0.8)
  const badCatchAllRemoved = catchAllPool - recoveredCatchAll
  const standardBadRemoved = Math.round((volume - catchAllPool) * 0.15)
  const totalBadRemoved = standardBadRemoved + badCatchAllRemoved
  const cleanDeliverable = volume - totalBadRemoved

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_12px_36px_-16px_rgba(15,23,42,0.12)]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {platformLabel} Catch-All Pipeline Estimator (Illustrative)
          </h3>
          <p className="text-sm text-slate-600 mt-1 font-medium">
            Model how many catch-all prospects ordinary checkers mark risky vs what deep verification resolves at ~80% typical valid share (98.5% accuracy).
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <div className="flex flex-wrap gap-1.5">
            {VOLUMES.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setVolume(v)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  volume === v
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {v.toLocaleString('en-US')} rows
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {CATCH_ALL_OPTIONS.map((opt) => (
              <button
                key={opt.rate}
                type="button"
                onClick={() => setCatchAllRate(opt.rate)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                  catchAllRate === opt.rate
                    ? 'border-indigo-300 bg-indigo-50 text-indigo-700'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Catch-All Bucket ({catchAllRate}%)</div>
          <div className="text-2xl font-black text-amber-600 mt-1 tabular-nums">
            {catchAllPool.toLocaleString('en-US')}
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Addresses ordinary tools mark Risky without checking the mailbox.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-50/80 border border-emerald-200 p-4">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Catch-All Recovered (~80%)</div>
          <div className="text-2xl font-black text-emerald-700 mt-1 tabular-nums">
            +{recoveredCatchAll.toLocaleString('en-US')}
          </div>
          <p className="text-xs text-emerald-800/80 mt-1">
            Contacts moved from Risky to Deliverable at 98.5% accuracy.
          </p>
        </div>

        <div className="rounded-2xl bg-rose-50/70 border border-rose-200/80 p-4">
          <div className="text-xs font-bold text-rose-700 uppercase tracking-wider">Invalid Addresses Cut</div>
          <div className="text-2xl font-black text-rose-700 mt-1 tabular-nums">
            -{totalBadRemoved.toLocaleString('en-US')}
          </div>
          <p className="text-xs text-rose-800/80 mt-1">
            Illustrative dead addresses removed across standard and catch-all checks.
          </p>
        </div>

        <div className="rounded-2xl bg-indigo-50/80 border border-indigo-200 p-4">
          <div className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Clean Deliverable List</div>
          <div className="text-2xl font-black text-indigo-700 mt-1 tabular-nums">
            {cleanDeliverable.toLocaleString('en-US')}
          </div>
          <p className="text-xs text-indigo-900/75 mt-1">
            Cleaned lists verified with Giggal.ai typically bounce under 3%.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            1,000 free credits (up to 50,000 rows per file)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            1 credit per check, Unknown refunded
          </span>
        </div>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-colors"
        >
          <span>Verify up to {volume.toLocaleString('en-US')} leads</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  )
}
