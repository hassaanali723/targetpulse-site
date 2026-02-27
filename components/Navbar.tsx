'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Talk to human', href: '/contact-us' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-slate-200'
            : 'bg-white/90 backdrop-blur-md border-white/20'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group py-3" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="relative h-14 w-auto transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/Targetpulse-email verifier- logo.png"
                  alt="TargetPulse"
                  className="h-full w-auto object-contain drop-shadow-md"
                  style={{ maxHeight: 'none' }}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-[15px]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-800 hover:text-primary-600 transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://emailverifier.targetpulse.net/sign-up"
                className="ml-2 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full hover:from-primary-700 hover:to-primary-800 hover:shadow-lg transition-all duration-200 font-semibold"
              >
                Sign up
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — full screen overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-20 left-0 right-0 bg-white shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-primary-200 via-accent-200 to-transparent mx-6" />

          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-slate-700 font-medium hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 group"
              >
                <span>{link.name}</span>
                <span className="text-slate-300 group-hover:text-primary-400 transition-colors text-lg">›</span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="px-6 pb-8 pt-2">
            <div className="h-px bg-slate-100 mb-6" />
            <a
              href="https://emailverifier.targetpulse.net/sign-up"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl text-center font-semibold text-[15px] hover:from-primary-700 hover:to-primary-800 hover:shadow-lg transition-all duration-200"
            >
              Sign up — It&apos;s Free
            </a>
            <p className="text-center text-xs text-slate-400 mt-3">No credit card required</p>
          </div>
        </div>
      </div>
    </>
  )
}
