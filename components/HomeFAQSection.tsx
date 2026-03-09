'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Is TargetPulse Email Verifier free to use?',
    answer: 'Yes. You get 1,000 free verification credits to start—no credit card required. After that, pay only for what you use with our pay-as-you-go pricing. There are no monthly fees; buy credits when you need them and use them at your own pace.',
  },
  {
    question: 'How do I verify my email list?',
    answer: 'Upload your CSV or Excel file to TargetPulse Email Verifier. Our tool runs real-time verification: you see results as each email is checked and can download verified results at any time, even while the rest of your list is still processing. No need to wait for the full run to finish.',
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
    answer: 'We recommend verifying before every major send and then every 3 to 6 months to keep your list clean. Because we give you real-time results, you can fix lists quickly and remove invalid or risky addresses before they hurt deliverability.',
  },
  {
    question: 'What do different email verification statuses mean?',
    answer: 'We return four outcomes: Deliverable (valid and safe to use), Risky (e.g. catch-all or full mailbox), Undeliverable (invalid format, bad domain, or rejected), and Unknown (timeout or server issues). Each result helps you decide which contacts to keep, pause, or remove from your list.',
  },
]

export default function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="pt-5 pb-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 text-center">
            Frequently Asked <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-slate-600 text-center mb-10">
            Everything you need to know about email verification
          </p>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={index}
                  className="rounded-2xl border-2 border-slate-100 bg-white overflow-hidden transition-all duration-200 hover:border-primary-100"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold text-slate-900 hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="text-base md:text-lg pr-2">{faq.question}</span>
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="pl-0 border-t border-slate-100 pt-4">
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
