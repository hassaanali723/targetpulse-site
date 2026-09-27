// "Lowest price" claim for the localized homes, read from the price data so it
// cannot drift (the English home computes the same thing inline). True only
// while no verified competitor price is at or below ours at 10,000 and at
// 100,000 emails.
import { COMPETITORS, giggalTierAt, tierAt } from '@/lib/competitorPricing'

function giggalIsLowestAt(credits: number): boolean {
  const ours = giggalTierAt(credits).totalUsd
  if (ours === null) return false
  return Object.values(COMPETITORS).every((c) => {
    const tier = tierAt(c, credits)
    return !tier || tier.status !== 'verified' || tier.totalUsd === null || tier.totalUsd > ours
  })
}

export const PRICE_CLAIM = giggalIsLowestAt(10000) && giggalIsLowestAt(100000)

// Giggal's price for 10,000 emails, in USD.
export const PRICE_10K = giggalTierAt(10000).totalUsd ?? 0
