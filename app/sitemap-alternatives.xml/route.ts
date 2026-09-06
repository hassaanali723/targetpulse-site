import { alternativesEntries, renderUrlSet, XML_HEADERS } from '@/lib/sitemapData'

export const dynamic = 'force-static'

export function GET() {
  return new Response(renderUrlSet(alternativesEntries()), { headers: XML_HEADERS })
}
