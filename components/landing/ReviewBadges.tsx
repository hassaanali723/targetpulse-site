'use client'

import React, { useEffect, useRef } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    Trustpilot?: { loadFromElement: (el: HTMLElement, forceReload?: boolean) => void }
  }
}

const PH_URL =
  'https://www.producthunt.com/products/giggal-ai/reviews?utm_source=badge-product_rating&utm_medium=badge&utm_source=badge-giggal-ai'
const SOURCEFORGE_URL = 'https://sourceforge.net/software/product/Giggal.ai/'
const SF_SCRIPT_SRC = 'https://b.sf-syn.com/badge_js?sf_id=4117310&variant_id=sf'

// Four equal bordered chips, one per platform, each holding that platform's
// ORIGINAL asset (PH rating embed / G2 logo / SF hex badge / TP Review
// Collector widget). Height contract: every cell gets the SAME explicit
// height (works in 1-col, 2-col, and 4-col layouts alike — items-stretch
// can't equalize a 1-col stack). The PH embed sizes by height (h-full
// w-auto) so it renders at exactly the shared height too.
const CELL_H = 'h-[112px]'
const chip =
  `${CELL_H} flex flex-col items-center justify-center gap-2 rounded-[10px] bg-white py-3 px-4 transition-colors duration-200`

export default function ReviewBadges() {
  const trustpilotRef = useRef<HTMLDivElement>(null)

  // Trustpilot re-hydration: mount + script-ready + bfcache restore.
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

  // SourceForge re-hydration: SF has no reload API — re-inject its script;
  // it re-scans .sf-root divs each time it runs.
  useEffect(() => {
    const rehydrateSF = () => {
      document
        .querySelectorAll(`script[src="${SF_SCRIPT_SRC}"]`)
        .forEach((s) => s.remove())
      const s = document.createElement('script')
      s.async = true
      s.src = SF_SCRIPT_SRC
      document.body.appendChild(s)
    }
    rehydrateSF()
    window.addEventListener('pageshow', rehydrateSF)
    return () => window.removeEventListener('pageshow', rehydrateSF)
  }, [])

  return (
    <section className="cv-section max-w-6xl mx-auto px-6 pt-6 pb-24">
      <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Reviewed by Real Teams
        </h2>
        <p className="text-sm text-slate-600 font-medium">
          Rated and trusted across the platforms buyers actually check.
        </p>
      </div>

      {/* Three equal rectangles: 1-col mobile, 3-col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[800px] mx-auto">
        {/* Product Hunt — official rating embed (has its own coral border) */}
        <a
          href={PH_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read Giggal.ai reviews on Product Hunt"
          className={`${CELL_H} flex items-center justify-center`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/product_rating.svg?product_id=1181039&theme=light"
            alt="Giggal.ai on Product Hunt"
            width={242}
            height={108}
            loading="lazy"
            decoding="async"
            className="h-full w-auto max-w-full object-contain"
          />
        </a>

        {/* SourceForge — original hex badge (logo + stars + "user reviews"),
            hydrated in place by their script. Amber frame. */}
        <div className={`${chip} border border-amber-500/50 hover:border-amber-500`}>
          <div
            className="sf-root flex items-center justify-center"
            data-id="4117310"
            data-badge="light-default"
            data-variant-id="sf"
            style={{ width: '72px' }}
          >
            <a
              href={SOURCEFORGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read Giggal.ai reviews on SourceForge"
              className="text-[13px] font-semibold text-slate-500"
            >
              SourceForge reviews
            </a>
          </div>
        </div>

        {/* Trustpilot — official Review Collector TrustBox, snippet kept
            VERBATIM as provided in the Trustpilot dashboard (attributes,
            token, and fallback anchor untouched). Only the outer chip is
            our layout container. */}
        <div className={`${chip} border border-[#00B67A]/50 hover:border-[#00B67A]`}>
          <div className="w-full max-w-[210px]">
            {/* TrustBox widget - Review Collector */}
            <div
              ref={trustpilotRef}
              className="trustpilot-widget"
              data-locale="en-US"
              data-template-id="56278e9abfbbba0bdcd568bc"
              data-businessunit-id="6a5fcced4feea6f63067e572"
              data-style-height="52px"
              data-style-width="100%"
              data-token="86ebd706-f637-4f02-8a2e-81a5348fb7de"
            >
              <a href="https://www.trustpilot.com/review/giggal.ai" target="_blank" rel="noopener">
                Trustpilot
              </a>
            </div>
            {/* End TrustBox widget */}
          </div>
        </div>
      </div>

      {/* TrustBox script — per Trustpilot's install instructions ("as close
          to the top of the page as possible"); afterInteractive loads it
          right after hydration. onLoad + the pageshow effect use Trustpilot's
          own documented SPA API (Trustpilot.loadFromElement) so the widget
          survives client-side navigation and bfcache restores. */}
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.Trustpilot && trustpilotRef.current) {
            window.Trustpilot.loadFromElement(trustpilotRef.current, true)
          }
        }}
      />
    </section>
  )
}
