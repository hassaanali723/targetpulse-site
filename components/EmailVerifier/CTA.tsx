'use client'

import React from 'react'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

export default function EmailVerifierCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-accent-300" />
            <span className="text-sm font-semibold">Start with Free Credits</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Clean Your Email List?
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of marketers who trust our email verification tool to improve their campaign performance
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-lg">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
              <span>Instant results</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
              <span>99% accuracy</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://emailverifier.targetpulse.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 bg-white text-primary-700 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Launch Email Verifier</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/pricing"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 flex items-center justify-center"
            >
              View Pricing
            </a>
          </div>

          {/* Trust Badge */}
          <p className="mt-12 text-white/70">
            🔒 Secure & Private • GDPR Compliant • No data stored
          </p>
        </div>
      </div>
    </section>
  )
}

