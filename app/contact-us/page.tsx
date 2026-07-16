'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Wordmark from '@/components/Wordmark'
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, XCircle } from 'lucide-react'

export default function TalkToHumanPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', phone: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setIsSubmitting(false)
      setError(err instanceof Error ? err.message : 'Failed to send message')

      // Clear error after 5 seconds
      setTimeout(() => setError(''), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      {/* Ambient light effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-black tracking-[0.16em] text-indigo-700 uppercase">Contact Us</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Get In{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
          Have questions about our email verification tool? Need help getting started? Contact us today for support and assistance
        </p>
      </section>

      {/* Form + contact info */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 card-vivid-shadow space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 bg-indigo-600">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Send us a message</h3>
            </div>

            {submitted && (
              <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl text-emerald-700 text-sm font-semibold flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Thank you! We&apos;ll get back to you within 24 hours.</span>
              </div>
            )}

            {error && (
              <div className="p-4 bg-rose-50 border-2 border-rose-200 rounded-xl text-rose-700 text-sm font-semibold flex items-center gap-2.5">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  placeholder="Your Company Inc."
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Branded header */}
            <div className="bg-indigo-50/50 border-2 border-dashed border-indigo-200 rounded-3xl p-6 flex items-center gap-4">
              <Wordmark className="text-xl" />
              <span className="text-xs font-bold text-slate-500 leading-snug">
                Real humans, ready to help. We typically reply within 24 hours.
              </span>
            </div>

            {/* Email */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow hover:border-indigo-500 hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 bg-indigo-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-extrabold text-slate-900">Email Us</h4>
                  <p className="text-sm text-slate-600 font-medium">info@targetpulse.net</p>
                  <p className="text-sm text-slate-600 font-medium">hassaan@targetpulse.net</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow hover:border-emerald-500 hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 bg-emerald-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-extrabold text-slate-900">Call Us</h4>
                  <p className="text-sm text-slate-600 font-medium">+447577337716</p>
                  <p className="text-xs text-slate-500 font-semibold mt-1">Mon-Fri, 9AM-6PM GMT/BST</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow hover:border-violet-500 hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 bg-violet-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-extrabold text-slate-900">Visit Us</h4>
                  <p className="text-sm text-slate-600 font-medium">Office 17366</p>
                  <p className="text-sm text-slate-600 font-medium">182-184 High Street North</p>
                  <p className="text-sm text-slate-600 font-medium">East Ham London E6 2JA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">
            Prefer to Skip the Wait?
          </h2>
          <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">
            Start verifying emails instantly with 1,000 free credits — no credit card required.
          </p>
          <div className="pt-4">
            <Link
              href="/sign-up"
              className="px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold rounded-2xl text-base transition-all shadow-md inline-block hover:scale-[1.03] active:scale-95 duration-200"
            >
              Get Started For Free
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
