import { glossaryEntries, renderUrlSet, XML_HEADERS } from '@/lib/sitemapData'

export const dynamic = 'force-static'

// The English glossary as its own child sitemap; the localized terms sit in
// each language's sitemap next to that language's other pages.
export function GET() {
  return new Response(renderUrlSet(glossaryEntries()), { headers: XML_HEADERS })
}
