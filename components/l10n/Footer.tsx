// Server component: localized footer, same grid as components/Footer.tsx.
import React from 'react'
import { Linkedin, Youtube, Facebook, Instagram, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { HREFLANG_CODE } from '@/lib/i18n/clusters'
import { getStrings, STRINGS, type L10nLocale } from '@/lib/i18n/strings'

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/giggal-ai/', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@giggal-ai', label: 'YouTube' },
  { icon: Facebook, href: 'https://www.facebook.com/share/1D31DYxZL5/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/giggal.ai', label: 'Instagram' },
]

// Dark footer, the same slate as the home heroes and the English footer.
const linkClass =
  'inline-flex items-center gap-1 whitespace-nowrap text-[14px] font-medium text-slate-400 hover:text-white transition-colors duration-200'
const headingClass = 'text-[11px] font-bold uppercase tracking-[0.16em] text-white mb-4'

function Column({ heading, links, prefix }: { heading: string; links: { name: string; href: string }[]; prefix: string }) {
  return (
    <>
      <p className={headingClass}>{heading}</p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href + link.name}>
            <Link href={link.href} className={linkClass}>
              {link.name}
              {!link.href.startsWith(prefix) && <ArrowUpRight className="w-3 h-3 opacity-60" />}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default function FooterL10n({ locale }: { locale: L10nLocale }) {
  const s = getStrings(locale)
  const { footer, home } = s
  const currentYear = new Date().getFullYear()
  const others = (Object.keys(STRINGS) as L10nLocale[]).filter((l) => l !== locale)

  return (
    <footer className="relative bg-slate-900 text-slate-400">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Each link column is as wide as its longest link and links never wrap
            (whitespace-nowrap in linkClass). When a row runs out of room, a
            whole column moves down instead of its text breaking. Translated
            labels are longer than the English ones, so the brand column always
            takes its own row here, leaving the full width to the link columns. */}
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-10 mb-12">
          <div className="basis-full space-y-4">
            <Link href={home} className="inline-flex items-center" aria-label={s.nav.homeAria}>
              <span className="text-2xl font-black tracking-tight leading-none text-white">
                Gig<span className="brand-wordmark-accent-light">gal.ai</span>
              </span>
            </Link>
            <p className="text-[13.5px] text-slate-400 max-w-sm leading-relaxed font-medium">{footer.blurb}</p>
            <div className="flex items-center gap-2 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="max-w-md text-[12.5px] font-medium text-slate-400 leading-relaxed pt-2">
              {footer.language}:{' '}
              <span className="font-bold text-white">{s.nativeName}</span>
              {' · '}
              <Link href="/" hrefLang="en" lang="en" className="hover:text-white">English</Link>
              {others.map((l) => (
                <React.Fragment key={l}>
                  {' · '}
                  <Link href={STRINGS[l].home} hrefLang={HREFLANG_CODE[l]} lang={HREFLANG_CODE[l]} className="hover:text-white">{STRINGS[l].nativeName}</Link>
                </React.Fragment>
              ))}
            </p>
          </div>

          <div className="shrink-0">
            <Column heading={footer.freeTools.heading} links={footer.freeTools.links} prefix={home} />
          </div>
          <div className="shrink-0">
            <Column heading={footer.product.heading} links={footer.product.links} prefix={home} />
          </div>
          <div className="shrink-0 space-y-6">
            <div>
              <Column heading={footer.solutions.heading} links={footer.solutions.links} prefix={home} />
            </div>
            <div>
              <Column heading={footer.resources.heading} links={footer.resources.links} prefix={home} />
            </div>
          </div>
          <div className="shrink-0 space-y-6">
            <div>
              <Column heading={footer.company.heading} links={footer.company.links} prefix={home} />
            </div>
            <div>
              <Column heading={s.legalHeading} links={footer.legal} prefix={home} />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-[12px] font-medium text-slate-500">
            © {currentYear}{' '}
            <span className="font-bold text-white">
              Gig<span className="brand-wordmark-accent-light">gal.ai</span>
            </span>
            . {footer.rights}
          </p>
          <p className="mt-2 text-[12px] text-slate-500">
            {footer.operatedBy} {footer.abuseReports}{' '}
            <a href="mailto:abuse@giggal.ai" className="text-slate-400 hover:text-white transition-colors">abuse@giggal.ai</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
