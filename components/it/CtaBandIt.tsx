// Italian final CTA band, same layout as components/alternatives/AltCtaBand.tsx.
import { ArrowRight, Check } from 'lucide-react'
import { cta, SIGNUP_URL } from '@/lib/i18n/it'

export default function CtaBandIt({ headline = cta.headline }: { headline?: string }) {
  return (
    <section className="cv-section max-w-6xl mx-auto px-6 pb-24">
      <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">{headline}</h2>
        <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">{cta.offer}</p>
        <div className="pt-4">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold rounded-2xl text-base transition-all shadow-md hover:scale-[1.03] active:scale-95 duration-200"
          >
            {cta.button}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
        <div className="flex items-center justify-center gap-5 text-[12px] text-indigo-100 font-medium flex-wrap pt-2">
          {cta.trust.map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
