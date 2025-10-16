'use client'

import React, { useState } from 'react'
import { CheckCircle2, XCircle, AlertTriangle, HelpCircle, Shield, Mail, BarChart3, FileText } from 'lucide-react'

export default function EmailVerifierFeatures() {
  const [activeTab, setActiveTab] = useState(0)

  const features = [
    {
      icon: <CheckCircle2 className="w-12 h-12" />,
      title: 'Deliverable Emails',
      description: 'Valid email addresses that are safe to send to. These emails passed all validation checks including syntax, domain, and SMTP verification.',
      color: '#10b981',
      bgColor: 'from-green-500 to-emerald-600',
      stats: '100% Score'
    },
    {
      icon: <XCircle className="w-12 h-12" />,
      title: 'Undeliverable Emails',
      description: 'Invalid or non-existent email addresses. Includes invalid format, non-existent domains, rejected emails, and invalid SMTP configurations.',
      color: '#ef4444',
      bgColor: 'from-red-500 to-rose-600',
      stats: '0% Score'
    },
    {
      icon: <AlertTriangle className="w-12 h-12" />,
      title: 'Risky Emails',
      description: 'Low-quality or potentially problematic emails. These may have low deliverability due to domain issues or reputation concerns.',
      color: '#f59e0b',
      bgColor: 'from-yellow-500 to-orange-600',
      stats: '20% Score'
    },
    {
      icon: <HelpCircle className="w-12 h-12" />,
      title: 'Unknown Status',
      description: 'Emails that couldn\'t be verified due to connection issues, timeouts, or SMTP unavailability. May require manual verification.',
      color: '#6b7280',
      bgColor: 'from-gray-500 to-gray-600',
      stats: 'N/A'
    }
  ]

  const capabilities = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Reputation',
      description: 'Check reputation scores and blacklist status to protect your sender reputation.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Attributes',
      description: 'Detect disposable emails, role accounts, catch-all domains, and other quality signals.',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Detailed Analytics',
      description: 'Get comprehensive reports with validation breakdown and actionable insights.',
      color: 'from-primary-600 to-accent-500'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Export Results',
      description: 'Download verified email lists in CSV format filtered by status categories.',
      color: 'from-accent-600 to-primary-500'
    }
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive <span className="gradient-text">Email Validation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced verification technology that categorizes every email with detailed insights
          </p>
        </div>

        {/* Email Status Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${feature.color}20 0%, ${feature.color}10 100%)` }}
              onMouseEnter={() => setActiveTab(index)}
            >
              <div className="p-8 h-full flex flex-col">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.bgColor} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {feature.description}
                </p>
                <div className={`inline-flex px-4 py-2 bg-gradient-to-r ${feature.bgColor} text-white rounded-full text-sm font-semibold self-start`}>
                  {feature.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Capabilities */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-gray-100">
          <h3 className="text-3xl font-bold text-center mb-12">
            Advanced Verification <span className="gradient-text">Capabilities</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="group text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${capability.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {capability.icon}
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">
                  {capability.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

