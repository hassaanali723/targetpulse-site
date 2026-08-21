// Server component. No interactivity, so it ships zero client JS.
import React from 'react'
import { Linkedin, Youtube, Facebook, Instagram, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Wordmark from '@/components/Wordmark'
import { MIMECAST_PAGE_LIVE } from '@/lib/flags'

// Only profiles that carry the Giggal name. A social href is still text on the
// page, so a profile on an old handle would put that name in the footer of
// every page on the site.
const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/giggal-ai/', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@giggal-ai', label: 'YouTube' },
  { icon: Facebook, href: 'https://www.facebook.com/share/1D31DYxZL5/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/giggal.ai', label: 'Instagram' },
]

const solutionsLinks = [
  { name: 'Catch-all Verification', href: '/catch-all-verification' },
  { name: 'SEG Verification', href: '/seg-email-verification' },
  ...(MIMECAST_PAGE_LIVE
    ? [{ name: 'Mimecast Verification', href: '/mimecast-email-verification' }]
    : []),
  { name: 'MCP Server', href: '/mcp' },
]

const productLinks = [
  { name: 'Email Verifier', href: '/' },
  { name: 'Free catch-all checker', href: '/tools/catch-all-email-checker' },
  { name: 'Integrations', href: '/integrations' },
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

const linkClass =
  'inline-flex items-center gap-1 text-[14px] font-medium text-slate-500 hover:text-indigo-600 transition-colors duration-200'
const headingClass = 'text-[11px] font-bold uppercase tracking-[0.16em] text-slate-900 mb-4'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-500">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-3 space-y-4">
            <Link href="/" className="inline-flex items-center" aria-label="Giggal.ai home">
              <Wordmark className="text-2xl" />
            </Link>
            <p className="text-[13.5px] text-slate-500 max-w-sm leading-relaxed font-medium">
              High-performance SMTP verification that keeps your campaigns landing in real inboxes,
              including catch-all and accept-all domains other tools skip.
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
                  className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions column */}
          <div className="md:col-span-2">
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

          {/* Resources column */}
          <div className="md:col-span-2">
            <p className={headingClass}>Resources</p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blog" className={linkClass}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/alternatives" className={linkClass}>
                  Compare verifiers
                </Link>
              </li>
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
        <div className="pt-8 border-t border-slate-100 text-center">
          <p className="text-[12px] font-medium text-slate-500">
            © {currentYear}{' '}
            <span className="font-bold text-slate-800">
              Gig<span className="brand-wordmark-accent">gal.ai</span>
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
