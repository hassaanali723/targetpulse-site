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
