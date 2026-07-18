import React from 'react'

// Review-platform links. Product Hunt embed provided by Product Hunt.
const PH_URL =
  'https://www.producthunt.com/products/targetpulse/reviews?utm_source=badge-product_rating&utm_medium=badge&utm_source=badge-targetpulse'
const G2_URL = 'https://www.g2.com/products/targetpulse-email-verifier/reviews'
const TRUSTPILOT_URL = 'https://uk.trustpilot.com/review/targetpulse.net'

const badgeLink = 'hover:opacity-80 hover:-translate-y-0.5 transition-all'

export default function ReviewBadges() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-6 pb-24">
      <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Reviewed by Real Teams</h2>
        <p className="text-sm text-slate-600 font-medium">Rated and trusted across the platforms buyers actually check.</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
        {/* Product Hunt — official rating embed */}
        <a href={PH_URL} target="_blank" rel="noopener noreferrer" className={badgeLink} aria-label="Read Giggal.ai reviews on Product Hunt">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/product_rating.svg?product_id=1181039&theme=light"
            alt="Giggal.ai on Product Hunt"
            width={242}
            height={108}
            className="h-[104px] w-auto"
          />
        </a>

        {/* G2 */}
        <a href={G2_URL} target="_blank" rel="noopener noreferrer" className={badgeLink} aria-label="Read Giggal.ai reviews on G2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/reviews/g2.jpeg" alt="Giggal.ai reviews on G2" className="h-[96px] w-auto" />
        </a>

        {/* Trustpilot */}
        <a href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer" className={badgeLink} aria-label="Read Giggal.ai reviews on Trustpilot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/reviews/trustpilot.jpeg" alt="Giggal.ai reviews on Trustpilot" className="h-[92px] w-auto" />
        </a>
      </div>
    </section>
  )
}
