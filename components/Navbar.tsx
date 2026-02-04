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

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Email Verifier', href: '/email-verifier' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="group py-4">
            <div className="relative h-14 w-auto transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/logo.webp" 
                alt="TargetPulse" 
                className="h-full w-auto object-contain drop-shadow-md"
                style={{ maxHeight: 'none' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white rounded-lg shadow-lg mt-2 animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-center font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

