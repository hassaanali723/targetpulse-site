'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import { useReveal } from '@/lib/useReveal'

const faqs = [
  {
    question: 'Is TargetPulse Email Verifier free to use?',
    answer: 'Yes. You get 1,000 free verification credits to start — no credit card required. After that, pay only for what you use with our pay-as-you-go pricing. No monthly fees; buy credits when you need them and use them at your own pace.',
  },
  {
    question: 'How do I verify my email list?',
    answer: 'Upload your CSV or Excel file to TargetPulse Email Verifier. Our tool runs real-time verification: you see results as each email is checked and can download verified results at any time, even while the rest of your list is still processing.',
  },
  {
    question: 'How accurate is TargetPulse Email Verifier?',
    answer: 'We aim for high accuracy through multiple checks: syntax, MX/domain, role-based and free-mail detection, disposable screening, blacklist checks, SMTP mailbox verification, and catch-all detection. This helps you maintain strong deliverability and a healthy sender reputation.',
  },
  {
    question: 'How many emails can I verify with one credit?',
    answer: 'One credit equals one email. So 1,000 credits verify 1,000 email addresses. We use a simple, transparent model: no hidden usage, and your credits do not expire.',
  },
  {
    question: 'How frequently should I verify my email lists?',
    answer: 'We recommend verifying before every major send and every 3–6 months to keep your list clean. Because we give you real-time results, you can fix lists quickly and remove invalid or risky addresses before they hurt deliverability.',
  },
  {
    question: 'What do different email verification statuses mean?',
    answer: 'We return four outcomes: Deliverable (valid and safe to use), Risky (e.g. catch-all or full mailbox), Undeliverable (invalid format, bad domain, or rejected), and Unknown (timeout or server issues). Each result helps you decide which contacts to keep, pause, or remove.',
  },
  {
    question: 'Can I verify catch-all emails?',
    answer: 'Yes — and we go far deeper than most tools that just mark catch-alls as “Unknown.” Our AI-powered detection scores every catch-all address across three signals: Domain Intelligence (SPF/DKIM/DMARC, SSL, domain reputation), AI Pattern Analysis (name structure, character patterns, human-likeness), and Mailbox Behavior (deep SMTP probing). You get a clear confidence rating — High (90%+ likely deliverable), Medium, Low, or Very Low — so you know exactly which catch-all addresses are safe to keep.',
  },
]

export default function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionReveal = useReveal()

  return (
    <section id="faq" className="py-14 md:py-24 bg-slate-50/50">
      <div className="container-custom">
        <div
          ref={sectionReveal as React.RefObject<HTMLDivElement>}
          className="reveal max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900">
              Frequently asked questions
            </h2>
          </div>

          {/* FAQ Card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_24px_rgba(0,0,0,0.04)] overflow-hidden divide-y divide-slate-100 px-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div key={index} className="group">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[15px] font-semibold text-slate-800 group-hover:text-primary-700 transition-colors duration-200 pr-2">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-slate-400 group-hover:text-primary-600 transition-colors duration-200">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? '500px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <p className="text-[15px] text-slate-500 leading-relaxed pb-5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <p className="text-center text-[14px] text-slate-500 mt-8">
            Still have questions?{' '}
            <Link href="/contact-us" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              Talk to us →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
