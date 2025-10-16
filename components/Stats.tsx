'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { value: 98, label: 'Deliverability Rate', suffix: '%' },
    { value: 45, label: 'Average Open Rate', suffix: '%' },
    { value: 500, label: 'Campaigns Launched', suffix: '+' },
    { value: 15, label: 'Average Response Rate', suffix: '%' },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl top-0 -left-48 animate-pulse-slow" />
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl bottom-0 -right-48 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              inView={inView}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>
    </section>
  )
}

function StatCard({
  value,
  label,
  suffix,
  inView,
  delay,
}: {
  value: number
  label: string
  suffix: string
  inView: boolean
  delay: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <div
      className="group text-center animate-slide-up hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative">
        {/* Glowing Background */}
        <div className="absolute inset-0 bg-white/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-300">
          <div className="text-5xl md:text-6xl font-black text-white mb-3 group-hover:scale-110 transition-transform duration-300">
            {count}
            <span className="text-accent-300">{suffix}</span>
          </div>
          <div className="text-white/90 font-semibold text-lg">{label}</div>
          
          {/* Sparkle Effect */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
        </div>
      </div>
    </div>
  )
}

