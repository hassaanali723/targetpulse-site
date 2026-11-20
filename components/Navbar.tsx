'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  Menu, X, ChevronDown,
  MailCheck, ShieldCheck, Database,
  TrendingUp, ShieldAlert, Filter, UserCheck, UserX,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageSwitcher, { LanguageSwitcherInline } from '@/components/i18n/LanguageSwitcher'

const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
const SIGNIN_URL = 'https://emailverifier.giggal.ai/sign-in'

const catchAllLink = { name: 'Catch-all Verification', href: '/catch-all-verification' }

const useCasesList = [
  {
    name: 'B2B Lead Enrichment',
    href: '/use-cases/b2b-lead-enrichment',
    desc: 'Verify Apollo & Clay prospect lists.',
    Icon: UserCheck,
  },
  {
    name: 'Outreach Deliverability',
    href: '/use-cases/outreach-email-deliverability',
    desc: 'Protect cold email sequences from spam.',
    Icon: MailCheck,
  },
  {
    name: 'Safeguarding Domain Health',
    href: '/use-cases/safeguarding-domain-health',
    desc: 'Monitor DNS records and domain reputation.',
    Icon: ShieldCheck,
  },
  {
    name: 'CRM Data Cleaning',
    href: '/use-cases/crm-data-cleaning',
    desc: 'Purge dead leads from HubSpot & Salesforce.',
    Icon: Database,
  },
  {
    name: 'Email Warmup Deliverability',
    href: '/use-cases/email-warmup-deliverability',
    desc: 'Safe 4-week ramp schedule for new SDRs.',
    Icon: TrendingUp,
  },
  {
    name: 'Spam Suspension Resolution',
    href: '/use-cases/spam-suspension-resolution',
    desc: 'Delisting guide for Spamhaus & Google flags.',
    Icon: ShieldAlert,
  },
  {
    name: 'Email List Scrubbing',
    href: '/use-cases/email-list-scrubbing',
    desc: 'Cut Klaviyo & Mailchimp subscriber costs.',
    Icon: Filter,
  },
  {
    name: 'Prevent Fake Signups',
    href: '/use-cases/prevent-fake-signups',
    desc: 'Block burner emails & trial abuse.',
    Icon: UserX,
  },
]

const navLinks = [
  { name: 'Integrations', href: '/integrations' },
  { name: 'MCP', href: '/mcp' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Earn with us', href: '/affiliates' },
]

export default function Navbar({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false)
  const [isMobileUseCasesOpen, setIsMobileUseCasesOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  // Close menus when route changes
  useEffect(() => {
    setIsUseCasesOpen(false)
    setIsMobileMenuOpen(false)
    setIsMobileUseCasesOpen(false)
  }, [pathname])

  // Close desktop dropdown on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsUseCasesOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsUseCasesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setIsUseCasesOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsUseCasesOpen(false)
    }, 150)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        dark
          ? isScrolled
            ? 'bg-slate-900/95 border-b border-white/10 shadow-sm'
            : 'bg-slate-900 border-b border-white/10'
          : isScrolled
            ? 'bg-white/95 border-b border-slate-200 shadow-sm'
            : 'bg-white/90 border-b border-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo wordmark */}
            <Link href="/" className="flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)} aria-label="Giggal.ai home">
              {dark ? (
                <span className="text-2xl sm:text-[28px] font-black tracking-tight leading-none text-white">
                  Gig<span className="brand-wordmark-accent-light">gal.ai</span>
                </span>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/giggal-logo-wordmark.png"
                  alt="Giggal.ai"
                  width={396}
                  height={96}
                  className="h-7 sm:h-8 w-auto"
                />
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center space-x-3.5 xl:space-x-6 text-sm font-bold whitespace-nowrap ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
              <Link href={catchAllLink.href} className={`${dark ? 'hover:text-white' : 'hover:text-indigo-600'} transition-colors duration-200`}>
                {catchAllLink.name}
              </Link>

              {/* USE CASES DROPDOWN */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setIsUseCasesOpen((prev) => !prev)}
                  aria-expanded={isUseCasesOpen}
                  aria-haspopup="true"
                  className={`inline-flex items-center py-2 transition-colors duration-200 cursor-pointer ${
                    dark
                      ? isUseCasesOpen ? 'text-white' : 'hover:text-white'
                      : isUseCasesOpen ? 'text-indigo-600' : 'hover:text-indigo-600'
                  }`}
                >
                  <span>Use Cases</span>
                  <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${isUseCasesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* MINIMALIST & CLEAN DROPDOWN PANEL */}
                {isUseCasesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[540px] z-50">
                    <div className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-xl shadow-slate-900/10 ring-1 ring-black/5 animate-in fade-in-0 zoom-in-95 duration-150">
                      <div className="grid grid-cols-2 gap-1 whitespace-normal">
                        {useCasesList.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsUseCasesOpen(false)}
                            className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group text-left"
                          >
                            <item.Icon className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors shrink-0 mt-0.5 stroke-[1.75]" />
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
                                {item.name}
                              </div>
                              <p className="text-[11px] text-slate-500 mt-0.5 leading-snug font-normal">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${dark ? 'hover:text-white' : 'hover:text-indigo-600'} transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-5 whitespace-nowrap">
              <LanguageSwitcher current="en" tone={tone} />
              <a
                href={SIGNIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-bold transition-colors ${dark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-indigo-600'}`}
              >
                Log in
              </a>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-sm font-bold rounded-xl text-white shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
              >
                Sign up free
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${dark ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen
                ? <X className={`w-5 h-5 ${dark ? 'text-white' : 'text-slate-700'}`} />
                : <Menu className={`w-5 h-5 ${dark ? 'text-white' : 'text-slate-700'}`} />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={`absolute top-20 left-0 right-0 bg-white border-b border-slate-200 shadow-xl transition-transform duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-2'
        }`}>
          <div className="px-6 py-4 space-y-1">
            <Link
              href={catchAllLink.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-slate-700 font-bold hover:bg-slate-50 hover:text-indigo-700 transition-all duration-200"
            >
              <span>{catchAllLink.name}</span>
              <span className="text-slate-300 text-lg">›</span>
            </Link>

            {/* MOBILE USE CASES ACCORDION */}
            <div className="rounded-xl border border-slate-100 overflow-hidden">
              <button
                type="button"
                onClick={() => setIsMobileUseCasesOpen(!isMobileUseCasesOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-slate-700 font-bold hover:bg-slate-50 hover:text-indigo-700 transition-all duration-200"
              >
                <span>Use Cases</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isMobileUseCasesOpen ? 'rotate-180 text-indigo-600' : ''}`} />
              </button>

              {isMobileUseCasesOpen && (
                <div className="px-3 pb-3 pt-1 space-y-1 bg-slate-50/80 border-t border-slate-100">
                  {useCasesList.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setIsMobileUseCasesOpen(false)
                        setIsMobileMenuOpen(false)
                      }}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-indigo-600 hover:bg-white transition-colors"
                    >
                      <item.Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0 stroke-[1.75]" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="my-1 border-t border-slate-100" />
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-slate-700 font-bold hover:bg-slate-50 hover:text-indigo-700 transition-all duration-200"
              >
                <span>{link.name}</span>
                <span className="text-slate-300 text-lg">›</span>
              </Link>
            ))}
            <LanguageSwitcherInline current="en" />
          </div>
          <div className="px-6 pb-8 pt-3 border-t border-slate-100 space-y-3">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-[15px] shadow-md shadow-indigo-600/20 transition-all duration-200"
            >
              Sign up free
            </a>
            <a
              href={SIGNIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-3 text-slate-600 font-bold text-sm hover:text-indigo-600 transition-colors"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
