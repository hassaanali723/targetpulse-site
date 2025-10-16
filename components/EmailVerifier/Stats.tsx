'use client'

import React from 'react'
import { TrendingUp, Users, CheckCircle, Zap } from 'lucide-react'

export default function EmailVerifierStats() {
  const stats = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      value: '99%',
      label: 'Accuracy Rate',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      value: '<1s',
      label: 'Per Email',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: '10K+',
      label: 'Verified Daily',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: '50%',
      label: 'Better Delivery',
      color: 'from-accent-500 to-accent-600'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              <div className="relative">
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

