'use client'

import { useState, useEffect, useRef } from 'react'
import { Sparkles, ShieldCheck, Target, TrendingDown } from 'lucide-react'

// The "Include Catch-All Verification" toggle from the app's upload screen,
// shown in the /catch-all-verification hero. Moved out of the page so the page
// itself can be a server component (RatingChips is async).

// Illustrative list split shown in the interactive card.
// OFF: catch-all addresses (~30% of the list) sit in the "Risky" bucket.
// ON: that bucket resolves, roughly 80% deliverable, 20% undeliverable.
const OFF = { deliverable: 27204, undeliverable: 7531, risky: 14886 }
const ON = { deliverable: 39113, undeliverable: 10508, risky: 0 }

// Tween a number toward its target so the redistribution reads as movement.
function useCountUp(target: number, duration = 700) {
  const [val, setVal] = useState(target)
  const prev = useRef(target)
  useEffect(() => {
    const from = prev.current
    const to = target
    prev.current = target
    if (from === to) return
    let raf = 0
    const start = performance.now()
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(from + (to - from) * eased))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return val
}

const TONES = {
  emerald: { card: 'bg-emerald-50 border-emerald-100', label: 'text-emerald-700', num: 'text-emerald-600' },
  rose: { card: 'bg-rose-50 border-rose-100', label: 'text-rose-600', num: 'text-rose-600' },
  amber: { card: 'bg-amber-50 border-amber-100', label: 'text-amber-700', num: 'text-amber-600' },
} as const

function StatCard({
  label, value, tone, resolved,
}: { label: string; value: number; tone: keyof typeof TONES; resolved?: boolean }) {
  const shown = useCountUp(value)
  const t = TONES[tone]
  return (
    <div className={`rounded-xl border p-3 text-center transition-all duration-500 ${resolved ? 'bg-slate-50 border-slate-100 opacity-60' : t.card}`}>
      <div className={`text-[9px] font-black uppercase tracking-wider mb-1 ${resolved ? 'text-slate-400' : t.label}`}>{label}</div>
      <div className={`text-lg font-black tabular-nums ${resolved ? 'text-slate-400' : t.num}`}>{shown.toLocaleString('en-US')}</div>
      <div className="text-[9px] font-semibold mt-0.5 h-3 leading-3">
        {resolved && <span className="text-emerald-600">resolved</span>}
      </div>
    </div>
  )
}

export default function CatchAllToggleCard() {
  const [toggleOn, setToggleOn] = useState(false)
  const counts = toggleOn ? ON : OFF

  return (
    <div className="bg-white border-2 border-slate-200 rounded-3xl card-vivid-shadow overflow-hidden">
      <div className="bg-indigo-600 px-6 py-5 text-white">
        <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-300 mb-2">
          <Sparkles className="w-3 h-3" />
          {toggleOn ? 'Deep verification enabled' : 'Standard verification'}
        </div>
        <div className="text-xl font-black mb-1">Confirm Email Validation</div>
        <div className="text-[12px] text-white/70">leads_2026.csv</div>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-3 gap-2 mb-5">
          <StatCard label="Deliverable" value={counts.deliverable} tone="emerald" />
          <StatCard label="Undeliverable" value={counts.undeliverable} tone="rose" />
          <StatCard label="Risky" value={counts.risky} tone="amber" resolved={toggleOn} />
        </div>

        <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50/40 p-4">
          <div className="flex items-start gap-3 mb-3">
            <button
              type="button"
              onClick={() => setToggleOn(!toggleOn)}
              className={`relative w-11 h-6 rounded-full flex-shrink-0 transition-colors ${toggleOn ? 'bg-indigo-600' : 'bg-slate-300'}`}
              aria-label="Toggle catch-all verification"
              aria-pressed={toggleOn}
            >
              <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${toggleOn ? 'left-[22px]' : 'left-0.5'}`} />
            </button>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-[14px] font-black text-slate-900">Include Catch-All Verification</span>
                <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded-full">
                  <Sparkles className="w-2.5 h-2.5" />
                  Recommended
                </span>
              </div>
              <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
                On a typical list, around 30% of emails sit on catch-all domains.
                We verify each one and most turn out to be valid.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="rounded-xl bg-white border border-slate-100 p-2.5 text-center">
              <Target className="w-3.5 h-3.5 text-indigo-600 mx-auto mb-1" />
              <div className="text-[11px] font-black text-slate-900">~80% Valid</div>
            </div>
            <div className="rounded-xl bg-white border border-slate-100 p-2.5 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 mx-auto mb-1" />
              <div className="text-[11px] font-black text-slate-900">Cleaner List</div>
            </div>
            <div className="rounded-xl bg-white border border-slate-100 p-2.5 text-center">
              <TrendingDown className="w-3.5 h-3.5 text-emerald-600 mx-auto mb-1" />
              <div className="text-[11px] font-black text-slate-900">&lt;3% Bounce</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
