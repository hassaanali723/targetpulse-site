'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Upload, Zap, CheckCircle, Download, TrendingUp, Clock, ArrowRight, AlertCircle, Check, AtSign, ShieldCheck, Plug } from 'lucide-react'
import HomePricingSection from '@/components/HomePricingSection'
import HomeComparisonSection from '@/components/HomeComparisonSection'
import HomeIntegrationsSection from '@/components/HomeIntegrationsSection'
import { useReveal } from '@/lib/useReveal'

const stats = [
  { icon: Zap, value: 'Real-Time', label: 'Live Results' },
  { icon: CheckCircle, value: '99%', label: 'Accuracy Rate' },
  { icon: Clock, value: '<1s', label: 'Per Email' },
  { icon: TrendingUp, value: '95%', label: 'Better Delivery' },
]

const platformTasks = [
  {
    icon: AtSign,
    iconBg: 'bg-gradient-to-br from-primary-500 to-primary-700',
    title: 'Single Email Verification',
    description: 'Validate one email at a time. Free to try, no account needed.',
  },
  {
    icon: Upload,
    iconBg: 'bg-gradient-to-br from-sky-500 to-sky-700',
    title: 'Bulk Email Verification',
    description: 'Upload a CSV or Excel and validate thousands of addresses in seconds.',
  },
  {
    icon: ShieldCheck,
    iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600',
    title: 'Catch-All Verification',
    description: 'Verify catch-all and accept-all domains other tools mark as Unknown.',
  },
  {
    icon: Plug,
    iconBg: 'bg-gradient-to-br from-violet-500 to-violet-700',
    title: 'API & Integrations',
    description: 'Connect with Mailchimp, HubSpot, SendGrid, and more, or use the API.',
  },
]

const features = [
  { text: 'Real-time results as emails are verified' },
  { text: 'Process thousands of emails in parallel' },
  { text: 'Resume verification at any time' },
  { text: 'Export as CSV, Excel, or JSON when complete' },
]

export default function HomeFeatureShowcase() {
  const heroReveal = useReveal()
  const stepsReveal = useReveal()

  return (
    <section id="real-time-verification" className="py-14 md:py-24 bg-white overflow-hidden">
      <div className="container-custom">

        {/* Split Layout */}
        <div
          ref={heroReveal as React.RefObject<HTMLDivElement>}
          className="reveal grid lg:grid-cols-2 gap-16 md:gap-16 items-center mb-14 md:mb-24"
        >
          {/* Left: Content */}
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 border border-primary-200/60 px-4 py-1.5 mb-6">
              <Zap className="h-3.5 w-3.5 text-primary-600" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-700">
                Real-Time Verification
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-[-0.02em] text-slate-900 mb-6 leading-[1.05]">
              Verify email lists
              <span className="block text-primary-600">
                in seconds
              </span>
            </h2>

            <p className="text-[17px] text-slate-500 mb-6 leading-relaxed">
              Upload your bulk email file and validate thousands of addresses in real-time.
              Improve deliverability and protect your sender reputation.
            </p>
            <p className="text-[17px] text-slate-500 mb-10 leading-relaxed">
              Watch progress live as your list is processed. Full results delivered in seconds,
              ready to export.
            </p>

            {/* Features */}
            <div className="space-y-3.5 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[15px] text-slate-700 font-medium">{f.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://giggal.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-primary-700 text-white rounded-xl font-semibold text-[15px] transition-colors duration-200"
              >
                <Zap className="h-4 w-4" />
                Try Real-Time Verification
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold text-[15px] hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* Right: Demo Card */}
          <div className="relative min-w-0">
            <div className="bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.10)] p-4 sm:p-6 border border-slate-100">
              {/* File Header */}
              <div className="flex items-center justify-between gap-2 mb-5 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Upload className="h-4 w-4 text-slate-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] font-semibold text-slate-900 truncate">customer_contacts_2024.csv</div>
                    <div className="text-[11px] text-slate-400 truncate">Feb 26, 2026 · 30,247 emails</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[12px] font-semibold flex-shrink-0">
                  <CheckCircle className="h-3 w-3" />
                  Completed
                </div>
              </div>

              {/* Progress + Stats */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 mb-5">
                {/* Circle — 100% complete */}
                <div className="relative w-20 h-20 flex-shrink-0">
                  <svg className="w-20 h-20 -rotate-90">
                    <circle cx="40" cy="40" r="34" stroke="#f1f5f9" strokeWidth="7" fill="none" />
                    <circle
                      cx="40" cy="40" r="34"
                      stroke="#10b981"
                      strokeWidth="7"
                      fill="none"
                      strokeDasharray="213.6"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-slate-900">100%</span>
                  </div>
                </div>

                {/* Grid */}
                <div className="flex-1 grid grid-cols-2 gap-2">
                  <div className="bg-emerald-50 rounded-xl p-3">
                    <div className="flex items-center gap-1 text-emerald-600 mb-1">
                      <CheckCircle className="h-3 w-3" />
                      <span className="text-[11px] font-medium">Deliverable</span>
                    </div>
                    <div className="text-xl font-bold text-emerald-700">18,542</div>
                  </div>
                  <div className="bg-rose-50 rounded-xl p-3">
                    <div className="flex items-center gap-1 text-rose-600 mb-1">
                      <AlertCircle className="h-3 w-3" />
                      <span className="text-[11px] font-medium">Undeliverable</span>
                    </div>
                    <div className="text-xl font-bold text-rose-700">8,156</div>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-3">
                    <div className="flex items-center gap-1 text-amber-600 mb-1">
                      <TrendingUp className="h-3 w-3" />
                      <span className="text-[11px] font-medium">Risky</span>
                    </div>
                    <div className="text-xl font-bold text-amber-700">2,894</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center gap-1 text-slate-500 mb-1">
                      <Clock className="h-3 w-3" />
                      <span className="text-[11px] font-medium">Unknown</span>
                    </div>
                    <div className="text-xl font-bold text-slate-600">655</div>
                  </div>
                </div>
              </div>

              {/* Download CTA */}
              <button className="w-full py-3 px-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-colors duration-200 flex items-center justify-center gap-2 group text-[14px] sm:text-base">
                <Download className="h-4 w-4 flex-shrink-0" />
                <span className="sm:hidden whitespace-nowrap">Download Verified Emails</span>
                <span className="hidden sm:inline">Download 18,542 Verified Emails</span>
                <ArrowRight className="h-4 w-4 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <p className="text-[11px] text-center text-slate-400 mt-3 font-medium px-2">
                Export to CSV, Excel, or JSON
              </p>
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-full mb-2 left-3 md:bottom-auto md:mb-0 md:-top-4 md:-left-4 bg-primary-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 text-[13px] font-bold">
              <Zap className="h-3.5 w-3.5" />
              Real-Time
            </div>
            <div className="absolute top-full mt-2 right-3 md:top-auto md:mt-0 md:-bottom-3 md:-right-3 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-[13px]">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-semibold text-slate-700">Verified in 12s</span>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 md:mb-24">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.09 }}
                className="group relative rounded-2xl border border-slate-100 bg-white p-7 overflow-hidden hover:border-primary-200/70 hover:shadow-[0_4px_28px_rgba(41,92,81,0.10)] transition-all duration-300"
              >
                {/* Corner gradient on hover */}
                <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-primary-50 via-primary-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none" />

                {/* Icon */}
                <div className="relative w-10 h-10 rounded-xl bg-primary-50 border border-primary-100/60 flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors duration-200">
                  <Icon className="h-4.5 w-4.5 text-primary-600" />
                </div>

                {/* Value */}
                <p className="relative text-4xl font-black tracking-tight mb-1 bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>

                {/* Label */}
                <p className="relative text-sm text-slate-500 font-medium">{stat.label}</p>

                {/* Bottom slide-in accent bar */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-accent-400 transition-all duration-500 ease-out rounded-b-2xl" />
              </motion.div>
            )
          })}
        </div>

        {/* One Platform — All verification tasks */}
        <div
          ref={stepsReveal as React.RefObject<HTMLDivElement>}
          className="reveal"
        >
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">
              One platform
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 leading-[1.1] mb-4">
              Every email verification task, in one place
            </h2>
            <p className="text-[15px] text-slate-500 leading-relaxed">
              Stop switching between tools. TargetPulse handles every kind of email verification
              you need, from single addresses to bulk lists, catch-all domains, and API workflows.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 md:mb-16">
            {platformTasks.map((task) => {
              const Icon = task.icon
              return (
                <div
                  key={task.title}
                  className="relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-primary-200/80 hover:shadow-[0_6px_28px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-md ${task.iconBg}`}>
                    <Icon className="h-5 w-5 text-white" strokeWidth={2.25} />
                  </div>
                  <h3 className="text-[16px] font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {task.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    {task.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <HomePricingSection />
        <HomeComparisonSection />
        <HomeIntegrationsSection />
      </div>
    </section>
  )
}
