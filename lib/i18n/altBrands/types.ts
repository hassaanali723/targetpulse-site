// Types for the per-language brand facts (lib/i18n/altBrands/<locale>/facts.ts).
import type { Competitor } from '@/lib/competitorPricing'

/** A competitor's words in one language; numbers stay in competitorPricing.ts. */
export type AltFacts = Partial<
  Pick<Competitor, 'freeTier' | 'creditsExpire' | 'catchAllCreditCost' | 'claimedAccuracy' | 'pricingBasisNote' | 'betterFitFor' | 'estimateNote'>
> & {
  notes?: Record<string, string> // English tier note -> localized
}

/** Labels for the wide brand-page layout (components/l10n/AltPageWide.tsx). */
export interface AltWideUi {
  keyFacts: (name: string) => string
  factRows: { price10k: string; free: string; expiry: string; catchAll: string }
  perMonth: string // after a price, e.g. " im Monat"
  notPublished: string
}
