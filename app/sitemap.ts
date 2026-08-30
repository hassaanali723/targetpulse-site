import { MetadataRoute } from 'next'
import { MIMECAST_PAGE_LIVE } from '@/lib/flags'
import { allPairs } from '@/lib/compare'
import { ZAPIER_APPS } from '@/lib/zapierApps'

// lastModified uses plain 'YYYY-MM-DD' strings so the emitted <lastmod> is
// date-only (matching the reviewed sitemap). Each date is the page's real last
// content-change date; trivial meta-only edits do not bump it. Legal pages keep
// their original date. changefreq/priority are intentionally omitted (Google
// ignores both).
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://giggal.ai'

  return [
    { url: baseUrl, lastModified: '2026-08-01' },
    { url: `${baseUrl}/catch-all-verification`, lastModified: '2026-08-01' },
    { url: `${baseUrl}/seg-email-verification`, lastModified: '2026-08-02' },
    // The Mimecast spoke is released in a later deploy (ENABLE_MIMECAST_PAGE);
    // it only enters the sitemap once it is live so we never list a 404.
    ...(MIMECAST_PAGE_LIVE
      ? [{ url: `${baseUrl}/mimecast-email-verification`, lastModified: '2026-08-02' }]
      : []),
    // Competitor comparison hub + the six alternative pages, all released together.
    { url: `${baseUrl}/alternatives`, lastModified: '2026-08-21' },
    { url: `${baseUrl}/zerobounce-alternative`, lastModified: '2026-08-06' },
    { url: `${baseUrl}/neverbounce-alternative`, lastModified: '2026-08-06' },
    { url: `${baseUrl}/bounceban-alternative`, lastModified: '2026-08-06' },
    { url: `${baseUrl}/millionverifier-alternative`, lastModified: '2026-08-06' },
    { url: `${baseUrl}/reoon-alternative`, lastModified: '2026-08-06' },
    { url: `${baseUrl}/debounce-alternative`, lastModified: '2026-08-06' },
    // Second wave of competitor pages, review-site-validated pure verifiers.
    { url: `${baseUrl}/bouncer-alternative`, lastModified: '2026-08-12' },
    { url: `${baseUrl}/emailable-alternative`, lastModified: '2026-08-12' },
    { url: `${baseUrl}/clearout-alternative`, lastModified: '2026-08-12' },
    { url: `${baseUrl}/kickbox-alternative`, lastModified: '2026-08-12' },
    { url: `${baseUrl}/emaillistverify-alternative`, lastModified: '2026-08-12' },
    { url: `${baseUrl}/myemailverifier-alternative`, lastModified: '2026-08-12' },
    { url: `${baseUrl}/briteverify-alternative`, lastModified: '2026-08-12' },
    // Mid-tier verifiers and finder/outreach platforms.
    { url: `${baseUrl}/scrubby-alternative`, lastModified: '2026-08-12' },
    { url: `${baseUrl}/quickemailverification-alternative`, lastModified: '2026-08-12' },
    { url: `${baseUrl}/mailfloss-alternative`, lastModified: '2026-08-12' },
    { url: `${baseUrl}/bounceless-alternative`, lastModified: '2026-08-12' },
    { url: `${baseUrl}/hunter-alternative`, lastModified: '2026-08-12' },
    { url: `${baseUrl}/snovio-alternative`, lastModified: '2026-08-12' },
    { url: `${baseUrl}/apollo-alternative`, lastModified: '2026-08-12' },
    // Catch-all specialists and finder platforms. These are the tools that show
    // up when an answer engine is asked who actually resolves accept-all
    // addresses, which is why they got pages of their own.
    { url: `${baseUrl}/findymail-alternative`, lastModified: '2026-08-21' },
    { url: `${baseUrl}/leadmagic-alternative`, lastModified: '2026-08-21' },
    { url: `${baseUrl}/allegrow-alternative`, lastModified: '2026-08-21' },
    { url: `${baseUrl}/listmint-alternative`, lastModified: '2026-08-21' },
    { url: `${baseUrl}/anymailfinder-alternative`, lastModified: '2026-08-21' },
    { url: `${baseUrl}/no2bounce-alternative`, lastModified: '2026-08-21' },
    { url: `${baseUrl}/instantly-alternative`, lastModified: '2026-08-21' },
    // Free single-address tool wrapping the verification widget.
    { url: `${baseUrl}/tools/catch-all-email-checker`, lastModified: '2026-08-08' },
    // Programmatic head-to-head comparison hub + one page per competitor pair
    // (lib/compare.ts allPairs()). Future competitors auto-include their pairs.
    { url: `${baseUrl}/compare`, lastModified: '2026-08-16' },
    ...allPairs().map(({ a, b }) => ({
      url: `${baseUrl}/compare/${a}-vs-${b}`,
      lastModified: '2026-08-16',
    })),
    // Blog: index plus the first five educational articles, published together.
    { url: `${baseUrl}/blog`, lastModified: '2026-08-21' },
    { url: `${baseUrl}/blog/what-is-a-catch-all-email-address`, lastModified: '2026-08-11' },
    { url: `${baseUrl}/blog/why-cold-emails-bounce`, lastModified: '2026-08-11' },
    { url: `${baseUrl}/blog/good-bounce-rate-for-cold-email`, lastModified: '2026-08-11' },
    { url: `${baseUrl}/blog/what-is-a-secure-email-gateway`, lastModified: '2026-08-11' },
    { url: `${baseUrl}/blog/what-does-risky-mean-in-email-verification`, lastModified: '2026-08-11' },
    // Second wave: the queries answer engines get asked directly.
    { url: `${baseUrl}/blog/how-to-verify-emails-behind-secure-email-gateways`, lastModified: '2026-08-21' },
    { url: `${baseUrl}/blog/verify-emails-inside-claude-and-chatgpt`, lastModified: '2026-08-21' },
    { url: `${baseUrl}/blog/how-to-reduce-email-bounce-rate`, lastModified: '2026-08-21' },
    { url: `${baseUrl}/blog/how-accurate-are-email-verification-tools`, lastModified: '2026-08-21' },
    // Comparison guide.
    { url: `${baseUrl}/blog/best-email-verification-tools`, lastModified: '2026-08-30' },
    // Integrations hub + per-tool pages.
    { url: `${baseUrl}/integrations`, lastModified: '2026-08-12' },
    { url: `${baseUrl}/integrations/zapier`, lastModified: '2026-08-14' },
    { url: `${baseUrl}/integrations/n8n`, lastModified: '2026-08-16' },
    // One page per app that connects through Zapier (lib/zapierApps.ts).
    ...ZAPIER_APPS.map((a) => ({
      url: `${baseUrl}/integrations/zapier/${a.slug}`,
      lastModified: '2026-08-14',
    })),
    { url: `${baseUrl}/mcp`, lastModified: '2026-07-21' },
    { url: `${baseUrl}/pricing`, lastModified: '2026-07-29' },
    { url: `${baseUrl}/public/docs`, lastModified: '2026-07-24' },
    { url: `${baseUrl}/sign-up`, lastModified: '2026-07-21' },
    { url: `${baseUrl}/affiliates`, lastModified: '2026-07-21' },
    { url: `${baseUrl}/contact-us`, lastModified: '2026-07-21' },
    { url: `${baseUrl}/privacy-policy`, lastModified: '2026-02-04' },
    { url: `${baseUrl}/terms-of-service`, lastModified: '2026-02-04' },
    { url: `${baseUrl}/refund-policy`, lastModified: '2026-02-04' },
  ]
}
