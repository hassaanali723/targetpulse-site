import { MetadataRoute } from 'next'
import { MIMECAST_PAGE_LIVE } from '@/lib/flags'

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
    { url: `${baseUrl}/alternatives`, lastModified: '2026-08-06' },
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
    // Free single-address tool wrapping the verification widget.
    { url: `${baseUrl}/tools/catch-all-email-checker`, lastModified: '2026-08-08' },
    // Blog: index plus the first five educational articles, published together.
    { url: `${baseUrl}/blog`, lastModified: '2026-08-11' },
    { url: `${baseUrl}/blog/what-is-a-catch-all-email-address`, lastModified: '2026-08-11' },
    { url: `${baseUrl}/blog/why-cold-emails-bounce`, lastModified: '2026-08-11' },
    { url: `${baseUrl}/blog/good-bounce-rate-for-cold-email`, lastModified: '2026-08-11' },
    { url: `${baseUrl}/blog/what-is-a-secure-email-gateway`, lastModified: '2026-08-11' },
    { url: `${baseUrl}/blog/what-does-risky-mean-in-email-verification`, lastModified: '2026-08-11' },
    // Integrations hub + per-tool pages.
    { url: `${baseUrl}/integrations`, lastModified: '2026-08-12' },
    { url: `${baseUrl}/integrations/zapier`, lastModified: '2026-08-12' },
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
