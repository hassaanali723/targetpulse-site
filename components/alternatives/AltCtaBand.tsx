// Shared final CTA band for every alternative page, matching the one on
// /seg-email-verification so the pages look native. Headline can vary per page;
// the offer line and trust row stay constant.
import { ArrowRight, Check } from 'lucide-react'

const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

export default function AltCtaBand({
  headline = 'Run a list and compare the results',
}: {
  headline?: string
}) {
  return (
    <section className="cv-section max-w-6xl mx-auto px-6 pb-24">
      <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">
          {headline}
        </h2>
        <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">
          1,000 free credits, no card required.
        </p>
        <div className="pt-4">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold rounded-2xl text-base transition-all shadow-md hover:scale-[1.03] active:scale-95 duration-200"
          >
            Start verifying for free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
        <div className="flex items-center justify-center gap-5 text-[12px] text-indigo-100 font-medium flex-wrap pt-2">
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5" /> Free trial
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5" /> Credits never expire
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5" /> Refunds on Unknown
          </span>
        </div>
      </div>
    </section>
  )
}
