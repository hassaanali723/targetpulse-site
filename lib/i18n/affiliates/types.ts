// Copy of the localized affiliate page (components/l10n/AffiliatesPage.tsx).
// Mirrors app/(en)/affiliates/page.tsx section by section; the English page
// is the source. Money and plain numbers in the earnings table are formatted
// by the component with the locale's usd()/number(), so they are not here.

export interface AffiliateCard {
  title: string
  body: string
}

export interface AffiliatesContent {
  meta: {
    title: string // rendered as is (include " | Giggal.ai"), at most 64 characters
    description: string
    ogTitle: string
    ogDescription: string
  }
  crumb: string
  h1Lead: string
  h1Accent: string
  intro: { before: string; after: string } // the Giggal.ai wordmark sits between them
  joinCta: string
  howCta: string
  stats: { value: string; label: string }[] // 4: 20% / 3 months / Monthly / $50
  why: { eyebrow: string; h2: string; sub: string; cards: AffiliateCard[] } // 4 cards
  how: { eyebrow: string; h2: string; steps: AffiliateCard[] } // 3 steps
  earn: {
    eyebrow: string
    h2: string
    sub: string
    colCustomers: string
    colPlan: string
    colEarnings: string
    perMonth: string // the "/mo" suffix, e.g. "/Monat"
    note: string
  }
  who: { eyebrow: string; h2: string; sub: string; cards: AffiliateCard[] } // 4 cards
  faq: { eyebrow: string; h2: string; items: { q: string; a: string }[]; more: string; talk: string } // 7 items
  final: { h2: string; text: string; checks: [string, string, string] }
}
