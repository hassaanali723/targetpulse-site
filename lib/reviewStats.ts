// Review numbers shown on the homes (hero rating line and the review cards).
//
// SourceForge publishes Giggal.ai's rating and review count in the script
// behind its embeddable badge, so the site reads them from there. The fetch
// is cached for a day: the page stays static and fast, and the numbers update
// on their own without a deploy. If the feed is down or its format changes,
// the last numbers we read by hand are shown instead.
//
// Product Hunt has no keyless feed (its API needs a token, and its own review
// badge shows no numbers), so its count is a rounded floor that stays true as
// reviews come in. Capterra has no public feed either, so its score is typed
// in by hand. G2 has no public feed and shows no number at all.

export interface ReviewStats {
  rating: number
  count: number
}

const SOURCEFORGE_FEED = 'https://b.sf-syn.com/badge_js?sf_id=4117310'
const ONE_DAY = 60 * 60 * 24

// Read from the feed on 2026-10-04. Only used when the live read fails.
const SOURCEFORGE_FALLBACK: ReviewStats = { rating: 4.9, count: 138 }

export async function getSourceForgeStats(): Promise<ReviewStats> {
  try {
    const res = await fetch(SOURCEFORGE_FEED, { next: { revalidate: ONE_DAY } })
    if (!res.ok) return SOURCEFORGE_FALLBACK
    const js = await res.text()
    const count = Number(/var ratingCount\s*=\s*(\d+)\s*;/.exec(js)?.[1])
    const rating = Number(/var avg_rating\s*=\s*([\d.]+)\s*;/.exec(js)?.[1])
    if (!Number.isInteger(count) || count <= 0) return SOURCEFORGE_FALLBACK
    if (!(rating >= 1 && rating <= 5)) return SOURCEFORGE_FALLBACK
    return { rating, count }
  } catch {
    return SOURCEFORGE_FALLBACK
  }
}

// Product Hunt: 4.93 from 54 reviews on 2026-10-04. The count is shown as
// "50+", rounded down to the nearest 10, so it never overstates. Raise it by
// hand when the real count passes the next step of 10.
export const PRODUCT_HUNT_RATING = 4.9
export const PRODUCT_HUNT_REVIEWS = '50+'

// Capterra: 5.0 from 7 reviews, read from the rating data on Capterra's own
// product page (capterra.com/p/10053924/Giggal-ai/) on 2026-10-04. The count
// is not shown, so it cannot go stale; check the score when reviews come in.
export const CAPTERRA_RATING = 5
