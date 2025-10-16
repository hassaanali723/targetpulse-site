'use client'

import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Outreach?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Join hundreds of companies that trust TargetPulse to drive their growth
          </p>

          {/* Value Props */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-lg">No long-term contracts</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-lg">Results in 30 days</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-lg">Money-back guarantee</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group px-8 py-4 bg-white text-primary-600 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Your Free Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              View Case Studies
            </a>
          </div>

          {/* Trust Badge */}
          <p className="mt-12 text-white/80 text-sm">
            🔒 No credit card required • Free consultation • Instant access
          </p>
        </div>
      </div>
    </section>
  )
}

