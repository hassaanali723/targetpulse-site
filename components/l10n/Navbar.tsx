'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import LanguageSwitcher, { LanguageSwitcherInline } from '@/components/i18n/LanguageSwitcher'
import { getStrings, SIGNUP_URL, SIGNIN_URL, type L10nLocale } from '@/lib/i18n/strings'

// Localized navbar. Same layout and breakpoints as components/Navbar.tsx (the
// hamburger stays until lg so tablets do not wrap); labels and links come from
// the locale's string module.

export default function NavbarL10n({ locale }: { locale: L10nLocale }) {
  const { nav, home } = getStrings(locale)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const itemClass = 'hover:text-indigo-600 transition-colors duration-200'
  const mobileItem =
    'flex items-center justify-between w-full px-4 py-3 rounded-xl text-slate-700 font-bold hover:bg-slate-50 hover:text-indigo-700 transition-all duration-200'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        isScrolled ? 'bg-white/95 border-b border-slate-200 shadow-sm' : 'bg-white/90 border-b border-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href={home} className="flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)} aria-label={nav.homeAria}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/giggal-logo-wordmark.png" alt="Giggal.ai" width={396} height={96} className="h-7 sm:h-8 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8 text-sm font-bold text-slate-600 whitespace-nowrap">
              <Link href={nav.primary.href} className={itemClass}>{nav.primary.name}</Link>
              {nav.links.map((link) => (
                <Link key={link.href} href={link.href} className={itemClass}>{link.name}</Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4 xl:gap-6 whitespace-nowrap">
              <LanguageSwitcher current={locale} />
              <a href={SIGNIN_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">
                {nav.login}
              </a>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-sm font-bold rounded-xl text-white shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
              >
                {nav.signup}
              </a>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={nav.menu}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-slate-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-20 left-0 right-0 bg-white border-b border-slate-200 shadow-xl transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-2'
        }`}>
          <div className="px-6 py-4 space-y-1">
            <Link href={nav.primary.href} onClick={() => setIsMobileMenuOpen(false)} className={mobileItem}>
              <span>{nav.primary.name}</span>
              <span className="text-slate-300 text-lg">›</span>
            </Link>
            <div className="my-1 border-t border-slate-100" />
            {nav.links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={mobileItem}>
                <span>{link.name}</span>
                <span className="text-slate-300 text-lg">›</span>
              </Link>
            ))}
            <LanguageSwitcherInline current={locale} />
          </div>
          <div className="px-6 pb-8 pt-3 border-t border-slate-100 space-y-3">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-[15px] shadow-md shadow-indigo-600/20 transition-all duration-200"
            >
              {nav.signup}
            </a>
            <a
              href={SIGNIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-3 text-slate-600 font-bold text-sm hover:text-indigo-600 transition-colors"
            >
              {nav.login}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
