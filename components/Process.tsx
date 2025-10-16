'use client'

import React, { useState } from 'react'
import { CheckCircle2, ArrowRight, Circle } from 'lucide-react'

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business, target audience, and goals to create a customized cold email strategy.',
      points: [
        'Market research & competitor analysis',
        'ICP (Ideal Customer Profile) definition',
        'Value proposition development',
        'Campaign goal setting',
      ],
    },
    {
      number: '02',
      title: 'List Building & Segmentation',
      description: 'We build high-quality prospect lists and segment them for maximum relevance and engagement.',
      points: [
        'Prospect identification & verification',
        'Data enrichment & validation',
        'Audience segmentation',
        'Contact list hygiene',
      ],
    },
    {
      number: '03',
      title: 'Email Copywriting',
      description: 'Our expert copywriters craft compelling, personalized emails that resonate with your audience.',
      points: [
        'Attention-grabbing subject lines',
        'Personalized email sequences',
        'Clear value propositions',
        'Strong calls-to-action',
      ],
    },
    {
      number: '04',
      title: 'Campaign Setup & Testing',
      description: 'We configure your campaigns with optimal settings and run tests to ensure maximum deliverability.',
      points: [
        'Email warmup & domain setup',
        'A/B testing framework',
        'Deliverability optimization',
        'Tracking & analytics setup',
      ],
    },
    {
      number: '05',
      title: 'Launch & Monitor',
      description: 'We launch your campaign and continuously monitor performance to ensure optimal results.',
      points: [
        'Campaign deployment',
        'Real-time monitoring',
        'Response management',
        'Performance tracking',
      ],
    },
    {
      number: '06',
      title: 'Optimize & Scale',
      description: 'Based on data insights, we optimize and scale successful campaigns for maximum ROI.',
      points: [
        'Data analysis & insights',
        'Continuous optimization',
        'Campaign scaling',
        'Monthly reporting',
      ],
    },
  ]

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Proven <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic, data-driven approach to cold email marketing that delivers consistent results
          </p>
        </div>

        {/* Process Flow Diagram */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div 
                  className={`bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 h-full border-2 relative overflow-hidden group ${
                    activeStep === index 
                      ? 'border-primary-400 shadow-2xl -translate-y-2 scale-105' 
                      : 'border-gray-100 hover:border-primary-200 hover:-translate-y-1'
                  }`}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Step Number with Circle Background */}
                  <div className="relative mb-6">
                    <div className={`absolute -top-2 -left-2 w-24 h-24 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                    <div className="relative text-7xl font-black gradient-text opacity-15 group-hover:opacity-25 transition-opacity">
                      {step.number}
                    </div>
                    {/* Progress Circle */}
                    <div className={`absolute top-0 right-0 w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                      activeStep === index 
                        ? 'border-primary-500 bg-primary-500 scale-110' 
                        : 'border-gray-200 bg-white'
                    }`}>
                      {activeStep === index ? (
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      ) : (
                        <Circle className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="relative text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-700 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Points with Staggered Animation */}
                  <ul className="relative space-y-3">
                    {step.points.map((point, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start group/item"
                        style={{
                          animation: activeStep === index ? `slideInRight 0.3s ease-out ${idx * 0.1}s both` : ''
                        }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                        <span className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative Corner */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Animated Arrow Connector */}
                {(index + 1) % 3 !== 0 && index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className={`transition-all duration-300 ${activeStep === index || activeStep === index + 1 ? 'scale-125' : ''}`}>
                      <ArrowRight className={`w-8 h-8 transition-colors ${activeStep === index || activeStep === index + 1 ? 'text-primary-600' : 'text-primary-300'}`} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Flow Visualization */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 rounded-3xl p-12 md:p-16 shadow-2xl border-2 border-white/50 backdrop-blur-sm overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-200/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent-200/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-center mb-16">
                <span className="gradient-text">Campaign Flow</span> Overview
              </h3>

              <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-6">
                {[
                  { icon: '🎯', label: 'Target Audience', color: 'from-primary-500 to-primary-600' },
                  { icon: '✍️', label: 'Craft Message', color: 'from-primary-600 to-accent-500' },
                  { icon: '📧', label: 'Send Campaign', color: 'from-accent-500 to-accent-600' },
                  { icon: '📊', label: 'Track Results', color: 'from-accent-600 to-primary-500' },
                  { icon: '🚀', label: 'Scale Success', color: 'from-primary-500 to-accent-600' },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center group">
                    <div className="text-center relative">
                      {/* Pulsing Ring */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-full animate-ping opacity-20`} />
                      
                      {/* Icon Container */}
                      <div className={`relative w-28 h-28 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-5xl mb-4 mx-auto shadow-2xl hover:scale-125 hover:rotate-12 transition-all duration-500 cursor-pointer border-4 border-white`}>
                        {item.icon}
                        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      
                      <p className="font-bold text-gray-800 text-lg group-hover:text-primary-700 transition-colors">{item.label}</p>
                    </div>
                    
                    {/* Animated Arrow */}
                    {index < 4 && (
                      <div className="hidden md:block mx-6 my-8 md:my-0">
                        <div className="relative">
                          <ArrowRight className="w-10 h-10 text-primary-400 group-hover:text-primary-600 group-hover:translate-x-2 transition-all duration-300" />
                          <div className="absolute inset-0 bg-primary-200 blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

