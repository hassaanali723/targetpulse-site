'use client'

import { useState } from 'react'
import { CheckCircle2, AlertCircle, Loader2, Star, TrendingUp, Shield } from 'lucide-react'

export default function HomeEmailHero() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'checking' | 'valid' | 'invalid'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setStatus('invalid')
      setMessage('Enter an email address to see how verification works.')
      return
    }

    setStatus('checking')
    setMessage('')

    const isBasicFormatValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

    setTimeout(() => {
      if (isBasicFormatValid) {
        setStatus('valid')
        setMessage('Format looks good. Run full verification in TargetPulse to check deliverability.')
      } else {
        setStatus('invalid')
        setMessage('This doesn\'t look like a valid email format.')
      }
    }, 600)
  }

  return (
    <section className="relative pt-32 pb-12 overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 -z-10">
        {/* Large Gradient Shapes - VERY VISIBLE */}
        <div className="absolute -top-20 -right-20 w-[800px] h-[800px] bg-gradient-to-br from-primary-400/30 to-primary-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[700px] h-[700px] bg-gradient-to-tr from-accent-400/30 to-accent-500/30 rounded-full blur-3xl" />
        
        {/* Decorative Circles - BOLD */}
        <div className="absolute top-32 left-[10%] w-40 h-40 border-[6px] border-primary-400/40 rounded-full" />
        <div className="absolute top-48 right-[15%] w-32 h-32 border-[6px] border-accent-400/40 rounded-full" />
        <div className="absolute bottom-40 right-[10%] w-48 h-48 border-[4px] border-primary-500/30 rounded-full" />
        
        {/* Accent Dots */}
        <div className="absolute top-60 left-[25%] w-3 h-3 bg-primary-500 rounded-full opacity-40" />
        <div className="absolute top-80 right-[30%] w-4 h-4 bg-accent-500 rounded-full opacity-40" />
        <div className="absolute bottom-60 left-[40%] w-2 h-2 bg-primary-600 rounded-full opacity-50" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary-200 bg-gradient-to-r from-primary-50 to-accent-50 px-4 py-2 shadow-sm backdrop-blur-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
              Email verifier by TargetPulse
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-5 leading-snug overflow-visible">
            Verify emails
            <span className="block bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent pb-1">
              before you hit send
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            TargetPulse Email Verifier cleans your lists in seconds so campaigns land in the inbox,
            not the spam folder. Try a single email below to see the experience.
          </p>

          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch gap-3 rounded-2xl border-2 border-slate-200 bg-white p-2.5 shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="flex-1 rounded-xl border-none bg-transparent px-4 py-3 text-sm md:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3 text-sm md:text-base font-bold text-white shadow-md hover:from-primary-700 hover:to-primary-800 hover:shadow-lg transition-all duration-200 min-w-[140px]"
                disabled={status === 'checking'}
              >
                {status === 'checking' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Checking…
                  </>
                ) : (
                  'Verify email'
                )}
              </button>
            </form>

            {status !== 'idle' && (
              <div className="mt-4 flex items-center justify-center text-left">
                <div
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs md:text-sm ${
                    status === 'valid'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                      : 'bg-amber-50 text-amber-700 border border-amber-100'
                  }`}
                >
                  {status === 'valid' ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  <span className="font-medium">
                    {status === 'valid' ? 'Syntax check passed' : 'Needs attention'}
                  </span>
                  <span className="hidden sm:inline text-slate-600/80 font-normal">
                    {message}
                  </span>
                </div>
              </div>
            )}
          </div>

          <p className="mt-8 text-xs md:text-sm text-slate-600 font-medium">
            1 email = 1 credit. Bulk verification, CSV uploads and detailed reports are available in the app.
          </p>

          {/* Trust Stats Bar */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xs font-bold shadow-md border-2 border-white">
                  S
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white text-xs font-bold shadow-md border-2 border-white">
                  D
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white text-xs font-bold shadow-md border-2 border-white">
                  A
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white text-xs font-bold shadow-md border-2 border-white">
                  I
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-white text-xs font-bold shadow-md border-2 border-white">
                  M
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm font-semibold text-slate-900">4.9/5</span>
                </div>
                <p className="text-xs text-slate-600">2,000+ users</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-10 w-px bg-slate-200" />

            {/* Emails Verified */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 shadow-sm">
                <Shield className="h-5 w-5 text-primary-700" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">10M+</p>
                <p className="text-xs text-slate-600 font-medium">Emails verified</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-10 w-px bg-slate-200" />

            {/* Success Rate */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 shadow-sm">
                <TrendingUp className="h-5 w-5 text-emerald-700" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">98.5%</p>
                <p className="text-xs text-slate-600 font-medium">Accuracy rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

