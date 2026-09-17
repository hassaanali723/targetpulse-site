import Link from 'next/link'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import JsonLd from '@/components/JsonLd'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { getStrings, type L10nLocale } from '@/lib/i18n/strings'

// Shared shell for the localized legal pages. The text is a courtesy
// translation; the notice at the top says the English version is the binding
// one and links to it.

export interface LegalSection {
  id?: string
  heading: string
  level?: 2 | 3
  paragraphs?: string[]
  list?: string[]
  after?: string[]
}

export default function LegalPageL10n({
  locale,
  path,
  title,
  accent,
  updated,
  englishHref,
  sections,
}: {
  locale: L10nLocale
  path: string
  title: string
  accent: string
  updated: string
  englishHref: string
  sections: LegalSection[]
}) {
  const { legal } = getStrings(locale)
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n(locale, [{ name: `${title} ${accent}`.trim(), path }])} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale={locale} />

      <section className="max-w-4xl mx-auto px-6 pt-28 md:pt-32 pb-12 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">
          {title}{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">{accent}</span>
        </h1>
        <p className="text-sm md:text-base text-slate-500 font-semibold">{legal.updated}: {updated}</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="mb-6 rounded-2xl border-2 border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900 font-medium leading-relaxed">
          {legal.notice}{' '}
          <Link href={englishHref} hrefLang="en" className="font-bold underline underline-offset-2">
            {legal.noticeLink}
          </Link>
          {legal.noticeTail}
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 card-vivid-shadow">
          {sections.map((s, i) => (
            <div key={s.heading}>
              {s.level === 3 ? (
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-3">{s.heading}</h3>
              ) : (
                <h2 id={s.id} className={`text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 scroll-mt-28 ${i === 0 ? 'mt-0' : 'mt-10'}`}>
                  {s.heading}
                </h2>
              )}
              {s.paragraphs?.map((p) => (
                <p key={p} className="text-slate-600 leading-relaxed mb-4">{p}</p>
              ))}
              {s.list && (
                <ul className="list-disc pl-6 mb-4 space-y-1.5 text-slate-600 leading-relaxed marker:text-indigo-400">
                  {s.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
              )}
              {s.after?.map((p) => (
                <p key={p} className="text-slate-600 leading-relaxed mb-4">{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <FooterL10n locale={locale} />
    </main>
  )
}
