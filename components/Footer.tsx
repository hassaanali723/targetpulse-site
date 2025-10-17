'use client'

import React from 'react'
import { Linkedin, Youtube, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white py-12 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="h-16 w-auto">
            <img 
              src="/logo.webp" 
              alt="TargetPulse" 
              className="h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              style={{ maxHeight: 'none' }}
            />
          </div>

          {/* Tagline */}
          <p className="text-gray-300 max-w-md text-sm">
            Precision Email Marketing
          </p>

          {/* Social Media Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/company/target-pulse/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-11 h-11 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.youtube.com/@TargetPulseOfficial/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-11 h-11 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              <Youtube className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.facebook.com/share/1D31DYxZL5/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-11 h-11 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/targetpulsee"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-11 h-11 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {currentYear} TargetPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

