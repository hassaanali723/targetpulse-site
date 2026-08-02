// Bottom line up front. A spec-sheet style summary: label on the left, the claim
// (with the number) on the right. Replaces the prose "short version" box so the
// answer is scannable in five seconds, not read as a paragraph.
import { type ReactNode } from 'react'

export default function Bluf({ points }: { points: { k: string; v: ReactNode }[] }) {
  return (
    <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 md:p-8 card-vivid-shadow">
      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-indigo-600 mb-5">
        Bottom line
      </p>
      <dl className="divide-y divide-slate-100">
        {points.map((p) => (
          <div
            key={p.k}
            className="grid grid-cols-[92px_1fr] sm:grid-cols-[132px_1fr] gap-4 py-3 first:pt-0 last:pb-0"
          >
            <dt className="text-[11px] font-black uppercase tracking-wide text-slate-400 pt-0.5">
              {p.k}
            </dt>
            <dd className="text-sm md:text-[15px] font-semibold text-slate-800 leading-snug">
              {p.v}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
