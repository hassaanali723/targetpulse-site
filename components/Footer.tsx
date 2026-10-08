// Server component. No interactivity, so it ships zero client JS.
import React from 'react'
import { Linkedin, Youtube, Facebook, Instagram, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

// Only profiles that carry the Giggal name. A social href is still text on the
// page, so a profile on an old handle would put that name in the footer of
// every page on the site.
const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/giggal-ai/', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@giggal-ai', label: 'YouTube' },
  { icon: Facebook, href: 'https://www.facebook.com/share/1D31DYxZL5/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/giggal.ai', label: 'Instagram' },
]

// The SEG and Mimecast pages stay live as product support pages but carry no
// search demand (plans/11 item 10), so the sitewide footer no longer links
// them; the catch-all page and the blog do.
const solutionsLinks = [
  { name: 'Catch-all Verification', href: '/catch-all-verification' },
  { name: 'MCP Server', href: '/mcp' },
]

const freeToolsLinks = [
  { name: 'Email checker', href: '/email-checker' },
  { name: 'Disposable email checker', href: '/disposable-email-checker' },
  { name: 'Disposable email providers', href: '/disposable-email-providers' },
  { name: 'Email extractor', href: '/email-extractor' },
  { name: 'DKIM generator', href: '/dkim-generator' },
  { name: 'DMARC generator', href: '/dmarc-generator' },
]

const productLinks = [
  { name: 'Email Verifier', href: '/' },
  { name: 'Email list cleaning', href: '/email-list-cleaning' },
  { name: 'Integrations', href: '/integrations' },
  { name: 'Email verification API', href: '/email-verification-api' },
  { name: 'Email validation API', href: '/email-validation-api' },
  { name: 'API Reference', href: '/public/docs' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Sign up free', href: '/sign-up', external: true },
]

const companyLinks = [
  { name: 'Earn with Us', href: '/affiliates' },
  { name: 'Talk to Us', href: '/contact-us' },
]

const legalLinks = [
  { name: 'Terms of Service', href: '/terms-of-service' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Refund Policy', href: '/refund-policy' },
  { name: 'Cancellation', href: '/terms-of-service#cancellation-policy' },
]

// Every other language home, in the site's language order (lib/i18n/clusters
// LOCALES). Names and homes match lib/i18n/strings.ts.
const otherLanguages = [
  { href: '/it', lang: 'it', name: 'Italiano' },
  { href: '/de', lang: 'de', name: 'Deutsch' },
  { href: '/es', lang: 'es', name: 'Español' },
  { href: '/pt-br', lang: 'pt-BR', name: 'Português (Brasil)' },
  { href: '/fr', lang: 'fr', name: 'Français' },
]

// Dark footer, the same slate as the home page hero.
const linkClass =
  'inline-flex items-center gap-1 text-[14px] font-medium text-slate-400 hover:text-white transition-colors duration-200'
const headingClass = 'text-[11px] font-bold uppercase tracking-[0.16em] text-white mb-4'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-slate-900 text-slate-400">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-3 space-y-4">
            <Link href="/" className="inline-flex items-center" aria-label="Giggal.ai home">
              <span className="text-2xl font-black tracking-tight leading-none text-white">
                Gig<span className="brand-wordmark-accent-light">gal.ai</span>
              </span>
            </Link>
            <p className="text-[13.5px] text-slate-400 max-w-sm leading-relaxed font-medium">
              Email verification that checks whether each mailbox exists, so your campaigns reach real inboxes, including on catch-all and accept-all domains other tools skip.
            </p>

            {/* Other languages. Plain links so the crawl path to every
                language site exists from every English page, not only from
                the head tags. */}
            <p className="text-[12.5px] font-medium text-slate-400 leading-relaxed">
              Language: <span className="font-bold text-white">English</span>
              {otherLanguages.map((l) => (
                <React.Fragment key={l.href}>
                  {' · '}
                  <Link href={l.href} hrefLang={l.lang} lang={l.lang} className="hover:text-white">
                    {l.name}
                  </Link>
                </React.Fragment>
              ))}
            </p>

            {/* Social icons */}
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
          </div>

          {/* Free tools column */}
          <div className="md:col-span-2">
            <p className={headingClass}>Free tools</p>
            <ul className="space-y-2.5">
              {freeToolsLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product column */}
          <div className="md:col-span-2">
            <p className={headingClass}>Product</p>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                    {link.external && <ArrowUpRight className="w-3 h-3 opacity-60" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Resources column */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <p className={headingClass}>Solutions</p>
              <ul className="space-y-2.5">
                {solutionsLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={linkClass}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={headingClass}>Resources</p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/blog" className={linkClass}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/glossary" className={linkClass}>
                    Glossary
                  </Link>
                </li>
                <li>
                  <Link href="/alternatives" className={linkClass}>
                    Verifier comparison
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Company + Legal column */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-6">
            <div>
              <p className={headingClass}>Company</p>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={linkClass}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={headingClass}>Legal</p>
              <ul className="space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={linkClass}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-[12px] font-medium text-slate-500">
            © {currentYear}{' '}
            <span className="font-bold text-white">
              Gig<span className="brand-wordmark-accent-light">gal.ai</span>
            </span>
            . All rights reserved.
          </p>
          <p className="mt-2 text-[12px] text-slate-500">
            Giggal.ai is operated by TargetPulse Ltd, London, United Kingdom. Abuse reports:{' '}
            <a href="mailto:abuse@giggal.ai" className="text-slate-400 hover:text-white transition-colors">abuse@giggal.ai</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
