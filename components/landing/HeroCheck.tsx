'use client'

import React, { useEffect, useState } from 'react'
import { CheckCircle2, XCircle, ShieldCheck, MousePointer2, Loader2 } from 'lucide-react'

// Animated single-check hero: types through real addresses, moves a cursor to
// click Verify, then flips the result. Honest data (our own mailboxes resolve
// deliverable; one invented dead address shows the undeliverable state).
type Item = { email: string; status: 'deliverable' | 'undeliverable'; score: number; reason: string; tag?: string }

const ITEMS: Item[] = [
  { email: 'info@giggal.ai', status: 'deliverable', score: 99, reason: 'Real mailbox confirmed' },
  { email: 'hassaan@targetpulse.net', status: 'deliverable', score: 97, reason: 'Active business mailbox' },
  { email: 'support@puremail.ai', status: 'deliverable', score: 98, reason: 'Real mailbox confirmed' },
  { email: 'mamnoon@coreroute.uk', status: 'undeliverable', score: 8, reason: 'Catch-all domain, mailbox not found', tag: 'catch-all' },
  { email: 'hello@onelittleweb.com', status: 'deliverable', score: 90, reason: 'Catch-all domain, real mailbox confirmed', tag: 'catch-all' },
]

const CHIPS = ['All basic checks', 'Catch-all verification & SEG bypass', 'Mailbox existence']

type Phase = 'typing' | 'moving' | 'processing' | 'result'

export default function HeroCheck() {
  const [idx, setIdx] = useState(0)
  const [typed, setTyped] = useState('')
  const [phase, setPhase] = useState<Phase>('typing')

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []
    const wait = (ms: number) =>
      new Promise<void>((r) => { const t = setTimeout(r, ms); timers.push(t) })

    async function run() {
      // Reduced motion: show the first result statically, no loop.
      if (reduce) {
        setIdx(0); setTyped(ITEMS[0].email); setPhase('result')
        return
      }
      while (!cancelled) {
        for (let i = 0; i < ITEMS.length && !cancelled; i++) {
          setIdx(i); setPhase('typing'); setTyped('')
          const email = ITEMS[i].email
          for (let c = 1; c <= email.length && !cancelled; c++) {
            setTyped(email.slice(0, c))
            await wait(52)
          }
          await wait(320)
          setPhase('moving')     // cursor glides to the button (no processing yet)
          await wait(760)
          setPhase('processing') // button is now clicked; processing starts
          await wait(780)
          setPhase('result')
          await wait(2100)
        }
      }
    }
    run()
    return () => { cancelled = true; timers.forEach(clearTimeout) }
  }, [])

  const item = ITEMS[idx]
  const atButton = phase === 'moving' || phase === 'processing'
  const pressed = phase === 'processing'
  const processing = phase === 'processing'
  const showResult = phase === 'result'
  const deliverable = item.status === 'deliverable'

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-xl card-vivid-shadow p-6 sm:p-7 space-y-5">
      {/* input + verify (cursor lives on the button) */}
      <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 pl-4 pr-2 py-2.5">
        <span className="font-mono text-[13px] sm:text-sm text-slate-700 flex-1 min-w-0 truncate">
          {typed}
          {phase === 'typing' && <span className="inline-block w-px h-4 bg-indigo-500 align-middle ml-0.5 animate-pulse" />}
        </span>
        <span className="relative shrink-0">
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            className={`text-xs font-black text-white bg-indigo-600 px-4 py-2 rounded-lg transition-transform duration-150 ${pressed ? 'scale-95 ring-4 ring-indigo-500/25' : ''}`}
          >
            Verify
          </button>
          {/* Animated cursor: anchored at the button's bottom-right corner so only
              the transform changes between rest and click. Interpolating one
              transform (not swapping position props) is what makes it glide. */}
          <MousePointer2
            className={`absolute left-full top-full w-4 h-4 text-slate-800 drop-shadow-sm transition-transform duration-[650ms] ease-in-out ${
              atButton ? '-translate-x-[42px] -translate-y-[16px] scale-90' : 'translate-x-[6px] translate-y-[7px] scale-100'
            }`}
            fill="white"
          />
        </span>
      </div>

      {/* result box (fixed height to avoid layout shift) */}
      <div className="min-h-[74px]">
        {showResult ? (
          <div
            className={`rounded-xl border-2 p-4 flex items-center justify-between gap-3 ${
              deliverable ? 'border-emerald-200 bg-emerald-50/50' : 'border-rose-200 bg-rose-50/50'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className={`w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0 ${deliverable ? 'bg-emerald-500' : 'bg-rose-500'}`}>
                {deliverable ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-slate-900 text-sm capitalize">{item.status}</span>
                  {item.tag && (
                    <span className="text-[8px] font-black uppercase tracking-wide text-indigo-600 bg-indigo-50 ring-1 ring-indigo-100 px-1.5 py-0.5 rounded">{item.tag}</span>
                  )}
                </div>
                <div className="text-[11px] font-semibold text-slate-500 truncate">{item.reason}</div>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className={`text-2xl font-black tabular-nums leading-none ${deliverable ? 'text-emerald-600' : 'text-rose-600'}`}>{item.score}</div>
              <div className="text-[10px] font-bold text-slate-400 mt-0.5">score</div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/40 p-4 h-[74px] flex items-center gap-2.5 text-slate-400">
            {processing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-indigo-500" />
                <span className="text-[13px] font-bold text-slate-500">Checking mailbox…</span>
              </>
            ) : (
              <span className="text-[13px] font-semibold">Type an address and hit Verify</span>
            )}
          </div>
        )}
      </div>

      {/* value chips */}
      <div className="space-y-1.5">
        {CHIPS.map((c) => (
          <div key={c} className="flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-100 px-3 py-2">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span className="text-[11px] font-bold text-slate-600 leading-tight">{c}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
