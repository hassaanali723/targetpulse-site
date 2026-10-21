import { nlEntries, renderUrlSet, XML_HEADERS } from '@/lib/sitemapData'

export const dynamic = 'force-static'

// The Dutch site as its own child sitemap, so Search Console reports its
// indexing separately from the English sections.
export function GET() {
  return new Response(renderUrlSet(nlEntries()), { headers: XML_HEADERS })
}
