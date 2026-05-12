'use client'

import React from 'react'
import { Linkedin, Youtube, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/target-pulse/', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@TargetPulseOfficial', label: 'YouTube' },
  { icon: Facebook, href: 'https://www.facebook.com/share/1D31DYxZL5/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/targetpulsee', label: 'Instagram' },
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
    <footer className="relative bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-slate-400 overflow-hidden">
      <div className="container-custom py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <Link href="/">
            <img
              src="/Targetpulse-email verifier- logo.png"
              alt="TargetPulse"
              className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
            />
          </Link>

          {/* Tagline */}
          <p className="text-[13px] text-slate-500 max-w-sm leading-relaxed">
            Email verification that keeps your campaigns landing in real inboxes.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-2">
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

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-white/5" />

          {/* Legal Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-[12px] text-slate-600">
            © {currentYear} TargetPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
