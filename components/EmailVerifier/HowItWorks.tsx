'use client'

import React from 'react'
import { Upload, Search, CheckCircle, Download } from 'lucide-react'

export default function EmailVerifierHowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-10 h-10" />,
      title: 'Upload Your File',
      description: 'Drag and drop your CSV or Excel file containing email addresses. Supports up to 10MB file size.',
      color: 'from-primary-500 to-primary-600',
      number: '01'
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: 'Automatic Verification',
      description: 'Our advanced algorithm validates each email for syntax, domain, SMTP, and deliverability in real-time.',
      color: 'from-accent-500 to-accent-600',
      number: '02'
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: 'View Results',
      description: 'Get detailed breakdown of deliverable, undeliverable, risky, and unknown emails with comprehensive insights.',
      color: 'from-primary-600 to-accent-500',
      number: '03'
    },
    {
      icon: <Download className="w-10 h-10" />,
      title: 'Export Clean List',
      description: 'Download your verified email list filtered by status. Ready to use in your campaigns immediately.',
      color: 'from-accent-600 to-primary-600',
      number: '04'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Verify your email lists in 4 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines for Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-accent-200 to-primary-200 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent hover:-translate-y-2 h-full">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="https://emailverifier.targetpulse.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-10 py-5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <span>Try It Now - Free Credits</span>
            <Upload className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

