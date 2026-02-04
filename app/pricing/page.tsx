'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Check } from 'lucide-react'

export default function PricingPage() {
  const [isSubscription, setIsSubscription] = useState(false)
  const pricingTiers = [
    { credits: '2,000', price: '$15', perCredit: '$0.0075', popular: false },
    { credits: '5,000', price: '$30', perCredit: '$0.0060', popular: false },
    { credits: '10,000', price: '$55', perCredit: '$0.0055', popular: true },
    { credits: '25,000', price: '$125', perCredit: '$0.0050', popular: false },
    { credits: '50,000', price: '$225', perCredit: '$0.0045', popular: false },
    { credits: '100,000', price: '$400', perCredit: '$0.0040', popular: false },
    { credits: '250,000', price: '$875', perCredit: '$0.0035', popular: false },
    { credits: '500,000', price: '$1,500', perCredit: '$0.0030', popular: false },
    { credits: '1,000,000', price: '$2,500', perCredit: '$0.0025', popular: false },
  ]

  const features = [
    'Email Syntax Validation',
    'Domain & MX Record Verification',
    'SMTP Mailbox Verification',
    'Disposable Email Detection',
    'Role-Based Email Detection',
    'Catch-All Domain Detection',
    'Real-Time API Access',
    'Bulk Upload & Processing',
    'CSV, Excel & JSON Export',
    'Duplicate Email Removal',
    'Detailed Verification Reports',
    'No Credit Expiration',
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-3">
              Pay only for what you use. No monthly fees, no hidden charges.
            </p>
            <p className="text-lg text-primary-600 font-semibold mb-4">
              Pricing for TargetPulse Email Verifier Tool
            </p>
            <p className="text-lg text-gray-600">
              <strong>Start with 1,000 free trial credits</strong> to test our service
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Options Toggle */}
      <section className="pb-8">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto flex justify-center">
            <div className="bg-white rounded-2xl shadow-sm p-2 inline-flex">
              <button
                onClick={() => setIsSubscription(false)}
                className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  !isSubscription
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Pay-As-You-Go
              </button>
              <button
                onClick={() => setIsSubscription(true)}
                className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  isSubscription
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Subscription (5% off)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                  tier.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {tier.credits}
                  </h3>
                  <p className="text-gray-600 mb-4">Credits</p>
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {isSubscription 
                      ? `$${(parseFloat(tier.price.replace('$', '').replace(',', '')) * 0.95).toFixed(0)}`
                      : tier.price
                    }
                  </div>
                  <p className="text-sm text-gray-500">
                    {tier.perCredit} per credit
                  </p>
                  {isSubscription && (
                    <p className="text-xs text-green-600 font-semibold mt-2">
                      💰 Save 5% with subscription
                    </p>
                  )}
                </div>

                {!isSubscription && (
                  <div className="space-y-2 mb-6 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">One-time payment:</span>
                      <span className="font-semibold text-gray-900">{tier.price}</span>
                    </div>
                    <div className="text-xs text-gray-500 text-center mt-2">
                      Or save 5% with monthly subscription →
                    </div>
                  </div>
                )}

                {isSubscription && (
                  <div className="space-y-2 mb-6 bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Monthly payment:</span>
                      <span className="font-semibold text-green-600">
                        ${(parseFloat(tier.price.replace('$', '').replace(',', '')) * 0.95).toFixed(0)}/mo
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">You save:</span>
                      <span className="font-semibold text-green-600">
                        ${(parseFloat(tier.price.replace('$', '').replace(',', '')) * 0.05).toFixed(0)}/mo
                      </span>
                    </div>
                  </div>
                )}

                <a
                  href="https://emailverifier.targetpulse.net/pricing"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Amount */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Amount?
            </h3>
            <p className="text-gray-600 mb-6">
              Enter any number of credits you need. We'll calculate the best price based on volume discounts.
            </p>
            <a
              href="https://emailverifier.targetpulse.net/pricing"
              className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Calculate Custom Price
            </a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything Included in <span className="gradient-text">Every Plan</span>
              </h2>
              <p className="text-xl text-gray-600">
                All features available with any credit package
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="pb-24 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Our Pricing Works
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  💳 1 Credit = 1 Email Verification
                </h3>
                <p className="text-gray-700">
                  Simple and transparent. Each email address you verify consumes exactly one credit from your account.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  📊 Volume Discounts Applied Automatically
                </h3>
                <p className="text-gray-700">
                  The more credits you buy, the lower the per-credit cost. Prices range from $0.0075/credit (small packages) down to $0.0025/credit (1M credits).
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  🔄 Pay-As-You-Go or Subscribe (Save 5%)
                </h3>
                <p className="text-gray-700">
                  <strong>Pay-As-You-Go:</strong> One-time purchase, use credits whenever you need.<br />
                  <strong>Subscription:</strong> Receive credits monthly with automatic 5% discount.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ♾️ Credits Never Expire
                </h3>
                <p className="text-gray-700">
                  Purchase credits today and use them months later. No time limits, no expiration dates.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  🎁 1,000 Free Trial Credits
                </h3>
                <p className="text-gray-700">
                  New users get 1,000 complimentary credits to test the service. No credit card required to start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-700">
                  We accept all major credit cards, debit cards, and PayPal through our secure payment processor, Paddle.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Can I cancel my subscription anytime?
                </h3>
                <p className="text-gray-700">
                  Yes! You can cancel your subscription at any time. You'll keep all credits already added to your account, and you won't be charged again.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  What happens if I run out of credits?
                </h3>
                <p className="text-gray-700">
                  Simply purchase more credits anytime. Your account will be topped up instantly, and you can continue verifying emails immediately.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Do you offer refunds?
                </h3>
                <p className="text-gray-700">
                  Credits are generally non-refundable. However, we handle exceptional circumstances on a case-by-case basis. Please review our <a href="/refund-policy" className="text-primary-600 hover:underline">Refund Policy</a> for details.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Is there a minimum purchase?
                </h3>
                <p className="text-gray-700">
                  The minimum purchase is 2,000 credits for $15. You can also use your 1,000 free trial credits before purchasing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Clean Your Email List?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start with 1,000 free credits. No credit card required.
            </p>
            <a
              href="https://emailverifier.targetpulse.net/pricing"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
