'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Sparkles, Shield, Zap, TrendingUp } from 'lucide-react'

export default function ProductShowcase() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-accent-50 to-primary-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-200 rounded-full blur-3xl opacity-40 animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-40 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-100 to-primary-100 backdrop-blur-md px-5 py-2.5 rounded-full border-2 border-accent-300">
              <Sparkles className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-semibold text-primary-700">Our Product</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 leading-tight">
                Introducing
                <span className="block bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text text-transparent">
                  Email Verifier
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Validate thousands of email addresses instantly. Improve deliverability, 
                reduce bounce rates, and protect your sender reputation.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-10">
                {[
                  { icon: <CheckCircle2 className="w-6 h-6" />, text: '99% Accuracy Rate' },
                  { icon: <Zap className="w-6 h-6" />, text: 'Real-time Verification' },
                  { icon: <Shield className="w-6 h-6" />, text: 'Protect Your Reputation' },
                  { icon: <TrendingUp className="w-6 h-6" />, text: '50% Better Deliverability' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-700">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <span className="text-lg font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/email-verifier"
                  className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Try Email Verifier</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/email-verifier"
                  className="px-8 py-4 bg-white border-2 border-primary-300 text-primary-700 rounded-full text-lg font-bold hover:bg-primary-50 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Visual - Interactive Card */}
            <div className="relative">
              {/* Main Product Card */}
              <div className="relative bg-white backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-200 shadow-2xl hover:scale-105 transition-transform duration-500">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 backdrop-blur-sm rounded-2xl p-6 border-2 border-green-300">
                    <div className="text-4xl font-bold text-green-600 mb-2">49</div>
                    <div className="text-sm text-green-700 font-medium">Deliverable</div>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-rose-100 backdrop-blur-sm rounded-2xl p-6 border-2 border-red-300">
                    <div className="text-4xl font-bold text-red-600 mb-2">24</div>
                    <div className="text-sm text-red-700 font-medium">Invalid</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-100 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-300">
                    <div className="text-4xl font-bold text-yellow-600 mb-2">15</div>
                    <div className="text-sm text-yellow-700 font-medium">Risky</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-300">
                    <div className="text-4xl font-bold text-gray-600 mb-2">5</div>
                    <div className="text-sm text-gray-700 font-medium">Unknown</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full" style={{ width: '100%' }} />
                </div>
                <p className="text-center text-gray-700 text-sm mt-3 font-medium">
                  93 of 93 Emails Processed
                </p>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl shadow-2xl flex items-center justify-center animate-float">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-2xl flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                <Shield className="w-12 h-12 text-white" />
              </div>

              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/30 to-primary-500/30 blur-3xl -z-10 rounded-3xl" />
            </div>
          </div>

          {/* Bottom Trust Badge */}
          <div className="text-center mt-16">
            <p className="text-gray-600 text-sm font-medium">
              🔒 Secure & Private • GDPR Compliant • 10,000+ Emails Verified Daily
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

