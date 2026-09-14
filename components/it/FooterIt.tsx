// Server component: Italian footer, same grid as components/Footer.tsx.
import React from 'react'
import { Linkedin, Youtube, Facebook, Instagram, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Wordmark from '@/components/Wordmark'
import { footer } from '@/lib/i18n/it'

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/giggal-ai/', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@giggal-ai', label: 'YouTube' },
  { icon: Facebook, href: 'https://www.facebook.com/share/1D31DYxZL5/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/giggal.ai', label: 'Instagram' },
]

const linkClass =
  'inline-flex items-center gap-1 text-[14px] font-medium text-slate-500 hover:text-indigo-600 transition-colors duration-200'
const headingClass = 'text-[11px] font-bold uppercase tracking-[0.16em] text-slate-900 mb-4'

function Column({ heading, links }: { heading: string; links: { name: string; href: string }[] }) {
  return (
    <>
      <p className={headingClass}>{heading}</p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href + link.name}>
            <Link href={link.href} className={linkClass}>
              {link.name}
              {!link.href.startsWith('/it') && <ArrowUpRight className="w-3 h-3 opacity-60" />}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default function FooterIt() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-500">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12">
          <div className="md:col-span-3 space-y-4">
            <Link href="/it" className="inline-flex items-center" aria-label="Giggal.ai, pagina iniziale">
              <Wordmark className="text-2xl" />
            </Link>
            <p className="text-[13.5px] text-slate-500 max-w-sm leading-relaxed font-medium">{footer.blurb}</p>
            <div className="flex items-center gap-2 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-[12px] font-medium text-slate-500 pt-2">
              {footer.language}:{' '}
              <span className="font-bold text-slate-800">Italiano</span> ·{' '}
              <Link href="/" hrefLang="en" lang="en" className="hover:text-indigo-600">English</Link>
            </p>
          </div>

          <div className="md:col-span-2">
            <Column heading={footer.solutions.heading} links={footer.solutions.links} />
          </div>
          <div className="md:col-span-2">
            <Column heading={footer.resources.heading} links={footer.resources.links} />
          </div>
          <div className="md:col-span-2">
            <Column heading={footer.product.heading} links={footer.product.links} />
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-6">
            <div>
              <Column heading={footer.company.heading} links={footer.company.links} />
            </div>
            <div>
              <Column heading="Note legali" links={footer.legal} />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 text-center">
          <p className="text-[12px] font-medium text-slate-500">
            © {currentYear}{' '}
            <span className="font-bold text-slate-800">
              Gig<span className="brand-wordmark-accent">gal.ai</span>
            </span>
            . {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
