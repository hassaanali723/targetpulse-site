'use client'

import React, { useState } from 'react'
import { Mail, Users, BarChart3, Target, Zap, Shield } from 'lucide-react'

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const services = [
    {
      icon: <Mail className="w-10 h-10" />,
      title: 'Cold Email Campaigns',
      description: 'Expertly crafted email sequences designed to capture attention and drive responses from your ideal customers.',
      color: '#295C51',
      accent: '#E9BB71',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Lead Generation',
      description: 'Strategic prospecting and list building to connect you with decision-makers in your target market.',
      color: '#E9BB71',
      accent: '#295C51',
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: 'Campaign Analytics',
      description: 'Comprehensive tracking and reporting to optimize your campaigns for maximum ROI and conversion.',
      color: '#295C51',
      accent: '#E9BB71',
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Audience Targeting',
      description: 'Precise segmentation and targeting to ensure your message reaches the most relevant prospects.',
      color: '#1e3e37',
      accent: '#E9BB71',
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'A/B Testing',
      description: 'Continuous optimization through systematic testing of subject lines, content, and timing.',
      color: '#d69634',
      accent: '#295C51',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Deliverability Management',
      description: 'Advanced inbox placement strategies to ensure your emails land where they matter most.',
      color: '#244d44',
      accent: '#f5cf87',
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cold email marketing solutions designed to grow your business and drive real results
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer h-full
                ${hoveredIndex === index ? 'scale-[1.02] shadow-2xl' : 'shadow-lg hover:shadow-xl'}
              `}
              style={{
                background: `linear-gradient(135deg, ${service.color} 0%, ${service.accent} 100%)`,
              }}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div 
                  className="absolute inset-0 transition-transform duration-1000"
                  style={{
                    background: `radial-gradient(circle at ${hoveredIndex === index ? '50% 50%' : '0% 0%'}, white 0%, transparent 70%)`,
                  }}
                />
              </div>

              {/* Floating Shapes */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 transform translate-x-16 -translate-y-16"
                style={{ backgroundColor: service.accent }}
              />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10 transform -translate-x-12 translate-y-12"
                style={{ backgroundColor: service.accent }}
              />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Icon with Animated Background */}
                <div className="relative mb-6">
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-30 blur-xl group-hover:blur-2xl transition-all duration-500"
                    style={{ backgroundColor: service.accent }}
                  />
                  <div 
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-white backdrop-blur-sm border-2 border-white/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
                    style={{ backgroundColor: `${service.color}40` }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white drop-shadow-lg">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 leading-relaxed text-base md:text-lg flex-grow">
                  {service.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 flex items-center space-x-2">
                  <div 
                    className="h-1 bg-white/30 rounded-full transition-all duration-500 group-hover:w-20"
                    style={{ width: hoveredIndex === index ? '80px' : '40px' }}
                  />
                  <div className="w-2 h-2 bg-white/50 rounded-full" />
                  <div className="w-2 h-2 bg-white/30 rounded-full" />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${service.accent}40 0%, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

