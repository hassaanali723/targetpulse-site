// Renders the LeadMagic catch-all numbers for one competitor, with the
// competitor-publisher caveat baked in so it can never be cited without it
// (factual fence, section 1.3). Renders nothing if the competitor was not in
// the test, so it cannot imply a tool was measured when it was not.
import { Info } from 'lucide-react'
import { type Competitor, LEADMAGIC_BENCHMARK } from '@/lib/competitorPricing'

export default function BenchmarkCallout({ competitor }: { competitor: Competitor }) {
  if (!competitor.benchmarkAccuracy || !competitor.benchmarkCatchAllResolved) return null

  return (
    <div className="rounded-2xl border-2 border-slate-200 bg-white card-vivid-shadow p-6 md:p-8 space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="text-3xl font-black text-slate-900">
            {competitor.benchmarkCatchAllResolved}
          </div>
          <div className="text-[13px] text-slate-500 font-semibold">
            of catch-all addresses resolved
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-black text-slate-900">{competitor.benchmarkAccuracy}</div>
          <div className="text-[13px] text-slate-500 font-semibold">overall accuracy measured</div>
        </div>
      </div>
      <p className="text-[13px] text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-4">
        Figures for {competitor.name} come from an independent test run by {LEADMAGIC_BENCHMARK.publisher}, published{' '}
        {LEADMAGIC_BENCHMARK.publishedOn}, on {LEADMAGIC_BENCHMARK.sample}.
      </p>
      <p className="flex items-start gap-2 text-[12px] text-slate-400 leading-relaxed font-medium">
        <Info className="w-4 h-4 shrink-0 mt-0.5" />
        <span>{LEADMAGIC_BENCHMARK.caveat}</span>
      </p>
    </div>
  )
}
