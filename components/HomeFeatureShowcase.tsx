'use client'

import { Upload, Zap, CheckCircle, Download, TrendingUp, Users, Clock, Target, Play, ArrowRight, AlertCircle } from 'lucide-react'
import HomePricingSection from '@/components/HomePricingSection'

const stats = [
  {
    icon: Zap,
    value: 'Real-Time',
    label: 'Live Results',
    color: 'primary',
    highlight: true,
  },
  {
    icon: CheckCircle,
    value: '99%',
    label: 'Accuracy Rate',
    color: 'emerald',
  },
  {
    icon: Clock,
    value: '<1s',
    label: 'Per Email',
    color: 'primary',
  },
  {
    icon: TrendingUp,
    value: '80%',
    label: 'Better Delivery',
    color: 'accent',
  },
]

const howItWorks = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload Your File',
    description: 'Upload CSV or Excel with thousands of emails. Processing starts instantly - no waiting required.',
    color: 'primary',
  },
  {
    number: '02',
    icon: Play,
    title: 'Real-Time Processing',
    description: 'Watch emails verify in real-time and see results immediately as they process.',
    color: 'primary',
    highlight: true,
  },
  {
    number: '03',
    icon: Download,
    title: 'Download Anytime',
    description: 'Download verified emails while others continue processing. Get clean results instantly.',
    color: 'accent',
    highlight: true,
  },
  {
    number: '04',
    icon: Target,
    title: 'Use Verified Results',
    description: 'Use verified emails immediately in your systems with confidence and lower bounce risk.',
    color: 'primary',
  },
]

const colorClasses = {
  emerald: {
    bg: 'bg-emerald-100',
    icon: 'text-emerald-700',
    border: 'border-emerald-200',
    glow: 'shadow-emerald-200',
  },
  amber: {
    bg: 'bg-amber-100',
    icon: 'text-amber-700',
    border: 'border-amber-200',
    glow: 'shadow-amber-200',
  },
  primary: {
    bg: 'bg-primary-100',
    icon: 'text-primary-700',
    border: 'border-primary-200',
    glow: 'shadow-primary-200',
  },
  accent: {
    bg: 'bg-accent-100',
    icon: 'text-accent-700',
    border: 'border-accent-200',
    glow: 'shadow-accent-200',
  },
}

export default function HomeFeatureShowcase() {
  return (
    <section id="real-time-verification" className="py-20 bg-white">
      <div className="container-custom">
        {/* Split Layout: Real-Time Demo + Features */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 border-2 border-primary-200 px-4 py-2 mb-6">
              <Zap className="h-5 w-5 text-primary-600" />
              <span className="text-sm font-bold uppercase tracking-wider text-primary-700">
                ⚡ Real-Time Verification
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Verify Email Lists
              <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              In Seconds
              </span>
            </h2>

            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Upload your bulk email file and instantly validate thousands of email addresses in real-time. Improve deliverability and protect your sender reputation.
            </p>

            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Start downloading verified results immediately while the rest continue processing in the background. No waiting required.
            </p>

            {/* Feature Checkmarks */}
            <div className="space-y-3 mb-8">
              {[
                { text: 'Real-time results as emails are verified', highlight: true },
                { text: 'Download verified emails anytime during processing', highlight: true },
                { text: 'Process thousands of emails in parallel', highlight: false },
                { text: 'Resume verification at any time', highlight: false },
              ].map((feature, index) => (
                <div key={index} className={`flex items-start gap-3 ${feature.highlight ? 'bg-primary-50 border-2 border-primary-200 rounded-lg p-3' : ''}`}>
                  <div className={`flex h-5 w-5 items-center justify-center rounded-full mt-0.5 ${feature.highlight ? 'bg-primary-600' : 'bg-primary-100'}`}>
                    <CheckCircle className={`h-3 w-3 ${feature.highlight ? 'text-white' : 'text-primary-700'}`} />
                  </div>
                  <span className={`text-sm leading-relaxed ${feature.highlight ? 'font-semibold text-slate-900' : 'font-medium text-slate-700'}`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://emailverifier.targetpulse.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Zap className="h-5 w-5" />
                Try Real-Time Verification
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-full font-semibold hover:border-primary-300 hover:bg-slate-50 transition-all duration-200"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* Right: Real-Time Verification Demo */}
          <div className="relative">
            {/* Main Card - File Verification in Progress */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 border-2 border-slate-100 hover:shadow-3xl transition-shadow duration-300">
              {/* File Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Upload className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">customer_contacts_2024.csv</div>
                    <div className="text-xs text-slate-500">Feb 26, 2026 • 30,247 emails</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Processing
                </div>
              </div>

              {/* Progress Circle + Stats */}
              <div className="flex items-center gap-6 mb-4">
                {/* Circular Progress */}
                <div className="relative w-24 h-24">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="62.8"
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-slate-900">75%</span>
                  </div>
                </div>

                {/* Real-time Stats Grid */}
                <div className="flex-1 grid grid-cols-2 gap-2">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 hover:scale-105 transition-transform">
                    <div className="flex items-center gap-1 text-emerald-700 mb-1">
                      <CheckCircle className="h-3 w-3" />
                      <span className="text-xs font-medium">Deliverable</span>
                    </div>
                    <div className="text-2xl font-bold text-emerald-700">18,542</div>
                  </div>
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 hover:scale-105 transition-transform">
                    <div className="flex items-center gap-1 text-rose-700 mb-1">
                      <AlertCircle className="h-3 w-3" />
                      <span className="text-xs font-medium">Undeliverable</span>
                    </div>
                    <div className="text-2xl font-bold text-rose-700">8,156</div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 hover:scale-105 transition-transform">
                    <div className="flex items-center gap-1 text-amber-700 mb-1">
                      <TrendingUp className="h-3 w-3" />
                      <span className="text-xs font-medium">Risky</span>
                    </div>
                    <div className="text-2xl font-bold text-amber-700">2,894</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 hover:scale-105 transition-transform">
                    <div className="flex items-center gap-1 text-slate-700 mb-1">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs font-medium">Unknown</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-700">655</div>
                  </div>
                </div>
              </div>

              {/* Download Now Button */}
              <button className="w-full py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 group">
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download 18,542 Verified Emails Now
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-center text-slate-600 mt-3">
                ⚡ <span className="font-semibold">Don't wait!</span> Download verified emails while processing continues
              </p>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -left-6 bg-gradient-to-br from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-float">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-bold">Real-Time</span>
            </div>

            {/* Floating Processing Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white border-2 border-emerald-200 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-slate-700">Still Processing...</span>
            </div>
          </div>
        </div>

        {/* Stats Bar - Highlighting Real-Time */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const colors = colorClasses[stat.color as keyof typeof colorClasses]
            const Icon = stat.icon
            
            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl border-2 ${colors.border} ${stat.highlight ? 'ring-4 ring-primary-200' : ''} bg-white p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group`}
              >
                {stat.highlight && (
                  <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                    NEW
                  </div>
                )}
                <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-50 transition-opacity`} />
                <div className="relative">
                  <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${stat.highlight ? 'animate-pulse' : ''}`}>
                    <Icon className={`h-6 w-6 ${colors.icon}`} />
                  </div>
                  <div className={`text-3xl font-bold text-slate-900 mb-1 ${stat.highlight ? 'bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent' : ''}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* How It Works - Emphasizing Real-Time */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Real-Time</span> Verification Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get instant results as your emails are verified
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {howItWorks.map((step, index) => {
            const Icon = step.icon
            const colors = colorClasses[step.color as keyof typeof colorClasses]
            
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 ${step.highlight ? 'border-primary-300 ring-4 ring-primary-100' : 'border-slate-100'} p-6 hover:border-primary-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group`}
              >
                {step.highlight && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                    ⚡ Real-Time
                  </div>
                )}

                {/* Step Number Badge */}
                <div className={`absolute -top-3 -right-3 w-10 h-10 ${step.highlight ? 'bg-gradient-to-br from-primary-500 to-primary-600' : 'bg-gradient-to-br from-primary-500 to-accent-500'} text-white rounded-full flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${step.highlight ? 'animate-pulse' : ''}`}>
                  <Icon className={`h-7 w-7 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors ${step.highlight ? 'text-primary-700' : ''}`}>
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        <HomePricingSection />
      </div>
    </section>
  )
}

