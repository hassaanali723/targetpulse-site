import { renderSitemapIndex, XML_HEADERS } from '@/lib/sitemapData'

export const dynamic = 'force-static'

// Sitemap index. Children are split by section so Search Console reports
// indexing per section instead of collapsing ~330 URLs into a single number.
export function GET() {
  return new Response(
    renderSitemapIndex([
      'sitemap-core.xml',
      'sitemap-alternatives.xml',
      'sitemap-compare.xml',
      'sitemap-integrations.xml',
      'sitemap-blog.xml',
      'sitemap-it.xml',
    ]),
    { headers: XML_HEADERS }
  )
}
