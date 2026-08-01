// Single source of truth for the pay-as-you-go credit packages. Rendered by
// PricingTable (the /pricing page + homepage pricing block) AND read by the
// SoftwareApplication JSON-LD offers, so the visible prices and the structured
// data can never drift. Sourced from the backend (frontend/src/constants/pricing.ts).
export interface Offer {
  credits: number
  price: number
  popular?: boolean
}

export const RAW_OFFERS: Offer[] = [
  { credits: 3000, price: 5.0 },
  { credits: 10000, price: 9.9 },
  { credits: 30000, price: 28.0 },
  { credits: 50000, price: 39.0 },
  { credits: 100000, price: 76.0, popular: true },
  { credits: 300000, price: 222.0 },
  { credits: 500000, price: 360.0 },
  { credits: 800000, price: 559.0 },
  { credits: 1000000, price: 680.0 },
]
