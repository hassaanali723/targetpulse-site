'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Wordmark from '@/components/Wordmark'

const SIGNUP_URL = 'https://emailverifier.targetpulse.net/sign-up'

const navLinks = [
  { name: 'Catch-all Verification', href: '/catch-all-verification' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Earn with us', href: '/affiliates' },
  { name: 'Talk to us', href: '/contact-us' },
]

export default function Navbar() {
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

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        isScrolled
          ? 'bg-white/95 border-b border-slate-200 shadow-sm'
          : 'bg-white/90 border-b border-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo wordmark */}
            <Link href="/" className="flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)} aria-label="Giggal.ai home">
              <Wordmark className="text-2xl sm:text-3xl" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-bold text-slate-600">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-indigo-600 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Sign in
              </a>
              <Link
                href="/sign-up"
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-sm font-bold rounded-xl text-white shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
              >
                Sign up free
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen
                ? <X className="w-5 h-5 text-slate-700" />
                : <Menu className="w-5 h-5 text-slate-700" />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={`absolute top-20 left-0 right-0 bg-white border-b border-slate-200 shadow-xl transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-2'
        }`}>
          <div className="px-6 py-4 space-y-1">
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
          </div>
          <div className="px-6 pb-8 pt-3 border-t border-slate-100 space-y-3">
            <Link
              href="/sign-up"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-[15px] shadow-md shadow-indigo-600/20 transition-all duration-200"
            >
              Sign up free
            </Link>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-3 text-slate-600 font-bold text-sm hover:text-indigo-600 transition-colors"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
