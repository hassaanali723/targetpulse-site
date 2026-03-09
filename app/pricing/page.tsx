'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Check, Loader2, Calculator, DollarSign, Mail, AlertCircle } from 'lucide-react'
import EmailDetailsModal, { PublicEmailValidationResult } from '@/components/EmailDetailsModal'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

async function verifyEmailPublic(email: string): Promise<{
  rateLimited: boolean
  result?: PublicEmailValidationResult
  message?: string
}> {
  const res = await fetch(`${BACKEND_URL}/api/public/validate-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
  const data = await res.json().catch(() => ({}))
  if (res.status === 429) {
    return {
      rateLimited: true,
      message: data.message || 'You can verify up to 5 emails per hour as a guest. Sign up for unlimited verification.',
    }
  }
  if (!res.ok || !data.success) throw new Error(data.error || 'Validation failed')
  return { rateLimited: false, result: data.data as PublicEmailValidationResult }
}

export default function PricingPage() {
  const [isSubscription, setIsSubscription] = useState(false)
  const [calculatorEmail, setCalculatorEmail] = useState('')
  const [calculatorStatus, setCalculatorStatus] = useState<'idle' | 'checking' | 'done' | 'error' | 'ratelimit'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [rateLimitMsg, setRateLimitMsg] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalResult, setModalResult] = useState<PublicEmailValidationResult | null>(null)
  const [emailCount, setEmailCount] = useState(10000)

  const handleCalculatorSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = calculatorEmail.trim()
    if (!trimmed) return

    setCalculatorStatus('checking')
    setErrorMsg('')
    setRateLimitMsg('')

    try {
      const { rateLimited, result, message } = await verifyEmailPublic(trimmed)
      if (rateLimited) {
        setCalculatorStatus('ratelimit')
        setRateLimitMsg(message || 'Rate limit reached. Sign up for unlimited verification.')
        return
      }
      if (result) {
        setModalResult(result)
        setModalOpen(true)
        setCalculatorStatus('done')
      }
    } catch (err: unknown) {
      setCalculatorStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Verification failed. Please try again.')
    }
  }

  const calculatePrice = (credits: number) => {
    if (credits >= 1000000) return credits * 0.00125
    if (credits >= 500000) return credits * 0.0015
    if (credits >= 250000) return credits * 0.00175
    if (credits >= 100000) return credits * 0.002
    if (credits >= 50000) return credits * 0.00225
    if (credits >= 25000) return credits * 0.0025
    if (credits >= 10000) return credits * 0.00275
    if (credits >= 5000) return credits * 0.003
    if (credits >= 2000) return credits * 0.00375
    return credits * 0.005
  }
  const pricingTiers = [
    { credits: '2,000', price: '$7.50', perCredit: '$0.00375', popular: false },
    { credits: '5,000', price: '$15.00', perCredit: '$0.0030', popular: false },
    { credits: '10,000', price: '$27.50', perCredit: '$0.00275', popular: true },
    { credits: '25,000', price: '$62.50', perCredit: '$0.0025', popular: false },
    { credits: '50,000', price: '$112.50', perCredit: '$0.00225', popular: false },
    { credits: '100,000', price: '$200.00', perCredit: '$0.0020', popular: false },
    { credits: '250,000', price: '$437.50', perCredit: '$0.00175', popular: false },
    { credits: '500,000', price: '$750.00', perCredit: '$0.0015', popular: false },
    { credits: '1,000,000', price: '$1,250.00', perCredit: '$0.00125', popular: false },
  ]

  const features = [
    'Email Syntax Validation',
    'Domain & MX Record Verification',
    'SMTP Mailbox Verification',
    'Disposable Email Detection',
    'Role-Based Email Detection',
    'Catch-All Domain Detection',
    'Bulk Upload & Processing',
    'CSV, Excel & JSON Export',
    'Duplicate Email Removal',
    'Detailed Verification Reports',
    'No Credit Expiration',
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-100/50 to-accent-100/50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 -z-10">
          {/* Large Gradient Shapes */}
          <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-primary-400/20 to-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-accent-400/20 to-accent-500/20 rounded-full blur-3xl" />
          
          {/* Decorative Circles */}
          <div className="absolute top-32 left-[15%] w-32 h-32 border-[4px] border-primary-400/30 rounded-full" />
          <div className="absolute top-48 right-[20%] w-24 h-24 border-[4px] border-accent-400/30 rounded-full" />
          <div className="absolute bottom-32 right-[15%] w-40 h-40 border-[3px] border-primary-500/25 rounded-full" />
          
          {/* Accent Dots */}
          <div className="absolute top-60 left-[20%] w-2 h-2 bg-primary-500 rounded-full opacity-40" />
          <div className="absolute top-80 right-[25%] w-3 h-3 bg-accent-500 rounded-full opacity-40" />
          <div className="absolute bottom-60 left-[30%] w-2 h-2 bg-primary-600 rounded-full opacity-50" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary-200 bg-gradient-to-r from-primary-50 to-accent-50 px-4 py-2 shadow-sm backdrop-blur-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
                Transparent pricing
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-5 leading-snug">
              Simple, <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent">Transparent Pricing</span>
            </h1>
            <p className="text-xl text-slate-600 mb-3">
              Pay only for what you use. No monthly fees, no hidden charges.
            </p>
            <p className="text-lg text-primary-600 font-semibold mb-4">
              Start with <strong>1,000 free trial credits</strong> to test our service
            </p>
          </div>
        </div>
      </section>

      {/* Email Verification Calculator */}
      <section className="relative py-16 overflow-hidden">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Email Verification Demo */}
              <div className="lg:order-1">
                <div className="bg-white/80 rounded-3xl border border-slate-100 p-8 shadow-lg backdrop-blur-sm">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                    Try <span className="gradient-text">Email Verification</span>
                  </h2>
                  <p className="text-slate-600 mb-6">
                    See how our verification works before you buy. Each email costs exactly 1 credit.
                  </p>

                  <form onSubmit={handleCalculatorSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row items-stretch gap-3 rounded-2xl border-2 border-slate-200 bg-white p-2.5 shadow-md hover:shadow-lg transition-shadow">
                      <input
                        type="email"
                        value={calculatorEmail}
                        onChange={(e) => setCalculatorEmail(e.target.value)}
                        placeholder="test@example.com"
                        className="flex-1 rounded-xl border-none bg-transparent px-4 py-3 text-sm md:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3 text-sm md:text-base font-bold text-white shadow-md hover:from-primary-700 hover:to-primary-800 hover:shadow-lg transition-all duration-200 min-w-[120px]"
                        disabled={calculatorStatus === 'checking'}
                      >
                        {calculatorStatus === 'checking' ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Verifying…
                          </>
                        ) : (
                          <>
                            <Mail className="mr-2 h-4 w-4" />
                            Verify
                          </>
                        )}
                      </button>
                    </div>

                    {/* Error message */}
                    {calculatorStatus === 'error' && (
                      <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm bg-rose-50 text-rose-700 border border-rose-100">
                        <AlertCircle className="h-4 w-4 flex-shrink-0" />
                        <span className="font-medium">{errorMsg}</span>
                      </div>
                    )}

                    {/* Rate limit message */}
                    {calculatorStatus === 'ratelimit' && (
                      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-center">
                        <p className="text-sm font-semibold text-amber-800 mb-1">Free limit reached</p>
                        <p className="text-xs text-amber-700 mb-3">{rateLimitMsg}</p>
                        <a
                          href="https://emailverifier.targetpulse.net/sign-up"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl text-xs font-semibold hover:from-primary-700 hover:to-primary-800 transition-all"
                        >
                          Sign up for free — unlimited verification
                        </a>
                      </div>
                    )}
                  </form>

                  {/* Results Modal */}
                  {modalResult && (
                    <EmailDetailsModal
                      open={modalOpen}
                      onClose={() => setModalOpen(false)}
                      emailDetails={modalResult}
                    />
                  )}
                </div>
              </div>

              {/* Pricing Calculator */}
              <div className="lg:order-2">
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl border border-primary-100 p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <Calculator className="mr-3 h-6 w-6 text-primary-600" />
                    Pricing Calculator
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Number of emails to verify
                      </label>
                      <input
                        type="number"
                        value={emailCount}
                        onChange={(e) => setEmailCount(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                        min="1"
                        max="10000000"
                      />
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-slate-600">Total Cost:</span>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-slate-900">
                            ${calculatePrice(emailCount).toFixed(2)}
                          </div>
                          <div className="text-sm text-slate-500">
                            ${(calculatePrice(emailCount) / emailCount).toFixed(5)} per email
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-emerald-600">
                        <DollarSign className="h-4 w-4 mr-1" />
                        Volume discounts applied automatically
                      </div>
                    </div>

                    <a
                      href="https://emailverifier.targetpulse.net/pricing"
                      className="block w-full text-center bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Options Toggle */}
      <section className="pb-12">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Choose Your <span className="gradient-text">Payment Method</span>
              </h2>
              <p className="text-lg text-slate-600">
                Pay once or subscribe monthly for 5% savings
              </p>
            </div>

            <div className="flex justify-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-2 inline-flex border border-slate-200">
                <button
                  onClick={() => setIsSubscription(false)}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    !isSubscription
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  Pay-As-You-Go
                </button>
                <button
                  onClick={() => setIsSubscription(true)}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                    isSubscription
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  Subscription
                  <span className="ml-1 text-xs bg-accent-500 text-white px-1.5 py-0.5 rounded-full">
                    5% off
                  </span>
                </button>
              </div>
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
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">
                    {tier.credits}
                  </h3>
                  <p className="text-slate-600 mb-4">Credits</p>
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {isSubscription 
                      ? `$${(parseFloat(tier.price.replace('$', '').replace(',', '')) * 0.95).toFixed(0)}`
                      : tier.price
                    }
                  </div>
                  <p className="text-sm text-slate-500">
                    {tier.perCredit} per credit
                  </p>
                  {parseInt(tier.credits.replace(/,/g, '')) < 1000 && (
                    <p className="text-xs text-slate-500 mt-1">
                      For purchases under 1,000 credits: $0.005 per credit
                    </p>
                  )}
                  {isSubscription && (
                    <p className="text-xs text-green-600 font-semibold mt-2">
                      💰 Save 5% with subscription
                    </p>
                  )}
                </div>

                {!isSubscription && (
                  <div className="space-y-2 mb-6 bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">One-time payment:</span>
                      <span className="font-semibold text-slate-900">{tier.price}</span>
                    </div>
                    <div className="text-xs text-slate-500 text-center mt-2">
                      Or save 5% with monthly subscription →
                    </div>
                  </div>
                )}

                {isSubscription && (
                  <div className="space-y-2 mb-6 bg-emerald-50 rounded-lg p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Monthly payment:</span>
                      <span className="font-semibold text-emerald-600">
                        ${(parseFloat(tier.price.replace('$', '').replace(',', '')) * 0.95).toFixed(0)}/mo
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">You save:</span>
                      <span className="font-semibold text-emerald-600">
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
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
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
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Need a Custom Amount?
            </h3>
            <p className="text-slate-600 mb-6">
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

      {/* What's Included - Feature Showcase */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
                Everything Included in <span className="gradient-text">Every Plan</span>
              </h2>
              <p className="text-lg text-slate-500 mb-6">
                All features available with any credit package
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-slate-200 text-slate-800 font-medium text-base mb-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white">
                    <Check className="w-4 h-4" />
                  </span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Visual Step-by-Step */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50">
        {/* Background Graphics */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-[10%] w-64 h-64 bg-gradient-to-br from-accent-400/15 to-accent-500/15 rounded-full blur-2xl" />
          <div className="absolute bottom-20 left-[15%] w-48 h-48 bg-gradient-to-br from-primary-400/15 to-primary-500/15 rounded-full blur-2xl" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                How Our <span className="gradient-text">Pricing Works</span>
              </h2>
              <p className="text-xl text-slate-600">
                Simple, transparent, and designed to scale with your needs
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Step 1 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white text-2xl shadow-md mb-4">
                  💳
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">1 Credit = 1 Email</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Each email verification uses exactly one credit from your balance.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white text-2xl shadow-md mb-4">
                  📊
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Volume Discounts</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Buy more credits, pay less per credit. From $0.00375 to $0.00125!</p>
              </div>

              {/* Step 3 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 text-white text-2xl shadow-md mb-4">
                  🔄
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">5% Subscription Savings</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Subscribe monthly for automatic 5% discount on all packages.</p>
              </div>

              {/* Step 4 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white text-2xl shadow-md mb-4">
                  ♾️
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Never Expire</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Use your credits anytime - they never expire or go to waste.</p>
              </div>
            </div>

            {/* Free Trial Highlight */}
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-8 shadow-2xl text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 text-3xl mb-4">
                  🎁
                </div>
                <h3 className="text-2xl font-bold mb-2">Start with 1,000 Free Credits!</h3>
                <p className="text-white/90 mb-4">Test our service risk-free. No credit card required.</p>
                <a
                  href="https://emailverifier.targetpulse.net/pricing"
                  className="inline-block bg-white text-primary-600 px-6 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  Claim Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-lg text-slate-600">
                Everything you need to know about our pricing and service
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-slate-700">
                  We accept all major credit and debit cards through our secure payment processor.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Can I cancel my subscription anytime?
                </h3>
                <p className="text-slate-700">
                  Yes! You can cancel your subscription at any time. You'll keep all credits already added to your account, and you won't be charged again.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  What happens if I run out of credits?
                </h3>
                <p className="text-slate-700">
                  Simply purchase more credits anytime. Your account will be topped up instantly, and you can continue verifying emails immediately.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Do you offer refunds?
                </h3>
                <p className="text-slate-700">
                  Credits are generally non-refundable. However, we handle exceptional circumstances on a case-by-case basis. Please review our <a href="/refund-policy" className="text-primary-600 hover:underline font-semibold">Refund Policy</a> for details.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300 md:col-span-2">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Is there a minimum purchase?
                </h3>
                <p className="text-slate-700">
                  No, you can purchase any amount of credits. The price per credit keeps reducing as the number of credits increases. You can also use your 1,000 free trial credits before purchasing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-[20%] w-96 h-96 bg-gradient-to-br from-primary-400/10 to-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-[15%] w-80 h-80 bg-gradient-to-br from-accent-400/10 to-accent-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 rounded-3xl shadow-2xl p-12 text-center text-white relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-xl" />
              
              <div className="relative">
                <div className="inline-flex items-center space-x-2 rounded-full bg-white/20 px-4 py-2 mb-6">
                  <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                    Get started today
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Ready to Clean Your Email List?
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Start with 1,000 free credits. No credit card required. Begin verifying emails in seconds.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://emailverifier.targetpulse.net/pricing"
                    className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-slate-50"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Get Started Free
                  </a>
                  <p className="text-white/80 text-sm">
                    Join 2,000+ satisfied customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
