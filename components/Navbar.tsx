'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

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

  const navLinks = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Talk to us', href: '/contact-us' },
    { name: 'Earn with us', href: '/affiliates' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-[0_1px_12px_rgba(0,0,0,0.04)]'
          : 'bg-white/90 backdrop-blur-md border-b border-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src="/Targetpulse-email verifier- logo.png"
                alt="TargetPulse"
                className="h-12 w-auto object-contain hover:opacity-80 transition-opacity duration-200"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-[14px] font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 group"
                >
                  {link.name}
                  <span className="absolute bottom-0.5 left-4 right-4 h-[1.5px] bg-primary-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </Link>
              ))}
              <a
                href="https://emailverifier.targetpulse.net/sign-in"
                className="ml-3 inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-full text-[14px] font-semibold transition-all duration-200 hover:shadow-lg"
              >
                Sign in
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
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
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={`absolute top-16 left-0 right-0 bg-white border-b border-slate-100 shadow-xl transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-2'
        }`}>
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-slate-50 hover:text-primary-700 transition-all duration-200"
              >
                <span>{link.name}</span>
                <span className="text-slate-300 text-lg">›</span>
              </Link>
            ))}
          </div>
          <div className="px-6 pb-8 pt-3 border-t border-slate-100">
            <a
              href="https://emailverifier.targetpulse.net/sign-in"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl font-semibold text-[15px] hover:from-primary-700 hover:to-primary-800 hover:shadow-lg transition-all duration-200"
            >
              Sign in
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
