'use client'

import React from 'react'
import { CheckCircle2, Upload, Shield, Zap, ArrowRight, Sparkles } from 'lucide-react'

export default function EmailVerifierHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg mb-6 border border-accent-200">
                <Sparkles className="w-4 h-4 text-accent-600" />
                <span className="text-sm font-semibold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Advanced Email Verification
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Verify Email Lists
                <span className="block gradient-text">In Seconds</span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Upload your CSV file and instantly validate thousands of email addresses. 
                Improve deliverability and protect your sender reputation.
              </p>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Bulk email validation',
                  '99% accuracy rate',
                  'Real-time verification',
                  'Detailed reports'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://emailverifier.targetpulse.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Upload className="w-5 h-5" />
                  <span>Start Verifying Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#features"
                  className="px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-lg font-bold hover:shadow-lg transition-all duration-300 border-2 border-primary-200 hover:border-primary-400 flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-100">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-primary-300 rounded-2xl p-12 text-center mb-6 bg-primary-50/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-700 font-semibold mb-2">Drop your CSV file here</p>
                  <p className="text-sm text-gray-500">or click to browse</p>
                  <p className="text-xs text-gray-400 mt-2">Max 10MB • CSV, XLSX</p>
                </div>

                {/* Stats Preview */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                    <div className="text-2xl font-bold text-green-700 mb-1">49</div>
                    <div className="text-xs text-green-600 font-medium">Deliverable</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                    <div className="text-2xl font-bold text-red-700 mb-1">24</div>
                    <div className="text-xs text-red-600 font-medium">Invalid</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
                    <div className="text-2xl font-bold text-yellow-700 mb-1">15</div>
                    <div className="text-xs text-yellow-600 font-medium">Risky</div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-xl flex items-center justify-center animate-float">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

