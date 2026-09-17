import Link from 'next/link'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import { getStrings } from '@/lib/i18n/strings'

export default function NotFoundDE() {
  const { notFound: t, home } = getStrings('de')
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <NavbarL10n locale="de" />
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-24 text-center space-y-6">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">{t.kicker}</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">{t.title}</h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto font-medium">{t.text}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link href="/de/email-adresse-pruefen" className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 transition-all text-sm">
            {t.primary}
          </Link>
          <Link href={home} className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 font-bold rounded-xl text-slate-700 transition-all text-sm">
            {t.secondary}
          </Link>
        </div>
      </section>
      <FooterL10n locale="de" />
    </main>
  )
}
