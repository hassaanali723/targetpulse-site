'use client'

import React from 'react'
import { Linkedin, Youtube, Facebook, Instagram, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Wordmark from '@/components/Wordmark'

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/target-pulse/', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@TargetPulseOfficial', label: 'YouTube' },
  { icon: Facebook, href: 'https://www.facebook.com/share/1D31DYxZL5/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/targetpulsee', label: 'Instagram' },
]

const productLinks = [
  { name: 'Email Verifier', href: '/' },
  { name: 'Catch-All Verification', href: '/catch-all-verification' },
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

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-400 overflow-hidden">
      <div className="container-custom py-14 md:py-16">
        {/* Top grid: Brand + Product + Company */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-10">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block" aria-label="Giggal.ai home">
              <Wordmark tone="light" className="text-3xl opacity-90 hover:opacity-100 transition-opacity duration-200" />
            </Link>
            <p className="mt-4 text-[13.5px] text-slate-400 max-w-sm leading-relaxed">
              Email verification that keeps your campaigns landing in real inboxes —
              including catch-all and accept-all domains other tools skip.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-slate-200 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product column */}
          <div className="md:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-300 mb-4">Product</p>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-[14px] text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                    {link.external && <ArrowUpRight className="w-3 h-3 opacity-60" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-300 mb-4">Company</p>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* Bottom row: copyright + secondary legal nav */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 mt-6">
          <p className="text-[12px] text-slate-500">
            © {currentYear} Giggal.ai. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
