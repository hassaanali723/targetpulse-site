import Link from 'next/link'
import NavbarIt from '@/components/it/NavbarIt'
import FooterIt from '@/components/it/FooterIt'
import { notFound as t } from '@/lib/i18n/it'

export default function NotFoundIt() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <NavbarIt />
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-24 text-center space-y-6">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">{t.kicker}</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">{t.title}</h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto font-medium">{t.text}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link href="/it/verifica-email" className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 transition-all text-sm">
            {t.primary}
          </Link>
          <Link href="/it" className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 font-bold rounded-xl text-slate-700 transition-all text-sm">
            {t.secondary}
          </Link>
        </div>
      </section>
      <FooterIt />
    </main>
  )
}
