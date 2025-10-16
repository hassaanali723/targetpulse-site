'use client'

import { Clock, DollarSign, Users, Shield, Zap, Award } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Save Time & Resources',
      description: 'Focus on closing deals while we handle the entire outreach process from strategy to execution.',
      stat: '80%',
      statLabel: 'Time Saved',
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: 'Cost-Effective Growth',
      description: 'Get better ROI compared to traditional marketing channels with our data-driven approach.',
      stat: '3.5x',
      statLabel: 'Average ROI',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Quality Leads',
      description: 'Connect with decision-makers who are actually interested in what you have to offer.',
      stat: '92%',
      statLabel: 'Lead Quality',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Protect Your Reputation',
      description: 'We ensure compliance and maintain your sender reputation with best-in-class deliverability.',
      stat: '98%',
      statLabel: 'Inbox Rate',
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Rapid Deployment',
      description: 'Get your first campaign live within days, not weeks. Start seeing results quickly.',
      stat: '7 Days',
      statLabel: 'To Launch',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Expert Team',
      description: 'Work with experienced copywriters, strategists, and data analysts dedicated to your success.',
      stat: '10+',
      statLabel: 'Years Experience',
    },
  ]

  return (
    <section id="benefits" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">TargetPulse</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Partner with us and experience the difference that expertise and dedication can make
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 group"
            >
              {/* Icon & Stat */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold gradient-text">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-gray-400">{benefit.statLabel}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Benefits List */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-center mb-12">
              What You Get With Every Campaign
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Dedicated account manager',
                'Custom email sequences',
                'Advanced list building',
                'A/B testing & optimization',
                'Weekly performance reports',
                'CRM integration support',
                'Domain & inbox setup',
                'Unlimited revisions',
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

