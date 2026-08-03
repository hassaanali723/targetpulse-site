'use client'

import React, { useEffect, useRef } from 'react'
import Script from 'next/script'

// Bootstrap scripts expose these globals once loaded.
declare global {
  interface Window {
    Trustpilot?: { loadFromElement: (el: HTMLElement, forceReload?: boolean) => void }
  }
}

const PH_URL =
  'https://www.producthunt.com/products/giggal-ai/reviews?utm_source=badge-product_rating&utm_medium=badge&utm_source=badge-giggal-ai'
const G2_URL = 'https://www.g2.com/products/giggal/reviews'
const SOURCEFORGE_URL = 'https://sourceforge.net/software/product/Giggal.ai/'

// Shared card style — same dimensions, border, shadow, and hover for every
// review platform so the row reads as one system. Hover uses ONLY color +
// shadow changes (no opacity/transform/filter) to avoid creating a new
// stacking context that would break child-widget rendering.
const badgeCard =
  'flex items-center justify-center h-[132px] w-full rounded-2xl border border-slate-200 bg-white ' +
  'shadow-[0_2px_10px_-4px_rgba(15,23,42,0.05)] px-5 py-4 ' +
  'hover:border-indigo-300 hover:shadow-[0_10px_28px_-10px_rgba(79,70,229,0.18)] ' +
  'transition-[border-color,box-shadow] duration-300'

export default function ReviewBadges() {
  const trustpilotRef = useRef<HTMLDivElement>(null)

  // Re-hydrate Trustpilot in three cases: mount (SPA nav), script-ready
  // (initial load), and bfcache restore (browser back button).
  useEffect(() => {
    const rehydrate = () => {
      if (window.Trustpilot && trustpilotRef.current) {
        window.Trustpilot.loadFromElement(trustpilotRef.current, true)
      }
    }
    rehydrate()
    window.addEventListener('pageshow', rehydrate)
    return () => window.removeEventListener('pageshow', rehydrate)
  }, [])

  return (
    <section className="cv-section max-w-6xl mx-auto px-6 pt-6 pb-24">
      <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Reviewed by Real Teams
        </h2>
        <p className="text-sm text-slate-600 font-medium">
          Rated and trusted across the platforms buyers actually check.
        </p>
      </div>

      {/* Unified 4-card grid: 1 col mobile → 2 tablet → 4 desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
        {/* Product Hunt */}
        <a
          href={PH_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read Giggal.ai reviews on Product Hunt"
          className={badgeCard}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/product_rating.svg?product_id=1181039&theme=light"
            alt="Giggal.ai on Product Hunt"
            width={242}
            height={108}
            loading="lazy"
            decoding="async"
            className="max-h-[96px] w-auto"
          />
        </a>

        {/* G2 — sits on a white card so its white PNG background disappears */}
        <a
          href={G2_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read Giggal.ai reviews on G2"
          className={badgeCard}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/reviews/g2.webp"
            alt="Giggal.ai reviews on G2"
            width={192}
            height={192}
            loading="lazy"
            decoding="async"
            className="max-h-[92px] w-auto"
          />
        </a>

        {/* SourceForge — official badge, hydrated by their b.sf-syn.com script.
            Cannot wrap in <a> because the script rewrites the div's inner
            HTML with its own link. */}
        <div className={badgeCard}>
          <div
            className="sf-root"
            data-id="4117310"
            data-badge="light-default"
            data-variant-id="sf"
            style={{ width: '110px' }}
          >
            <a
              href={SOURCEFORGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read Giggal.ai reviews on SourceForge"
              className="text-slate-500 text-xs"
            >
              Giggal.ai Reviews
            </a>
          </div>
        </div>

        {/* Trustpilot Review Collector — same card treatment, widget centered.
            It's a "leave a review" CTA rather than a rating badge, but the
            uniform card wraps the visual difference so nothing looks off. */}
        <div className={badgeCard}>
          <div className="w-full max-w-[220px]">
            <div
              ref={trustpilotRef}
              className="trustpilot-widget"
              data-locale="en-US"
              data-template-id="56278e9abfbbba0bdcd568bc"
              data-businessunit-id="6a5fcced4feea6f63067e572"
              data-style-height="52px"
              data-style-width="100%"
              data-token="1f1acf6c-b650-429b-b287-089270bd436a"
            >
              <a
                href="https://www.trustpilot.com/review/giggal.ai"
                target="_blank"
                rel="noopener"
                className="text-slate-500 text-xs"
              >
                Trustpilot
              </a>
            </div>
          </div>
        </div>
      </div>

      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Trustpilot && trustpilotRef.current) {
            window.Trustpilot.loadFromElement(trustpilotRef.current, true)
          }
        }}
      />

      <Script
        src="https://b.sf-syn.com/badge_js?sf_id=4117310&variant_id=sf"
        strategy="lazyOnload"
      />
    </section>
  )
}
