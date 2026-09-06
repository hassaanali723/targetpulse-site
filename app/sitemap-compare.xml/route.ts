import { compareEntries, renderUrlSet, XML_HEADERS } from '@/lib/sitemapData'

export const dynamic = 'force-static'

export function GET() {
  return new Response(renderUrlSet(compareEntries()), { headers: XML_HEADERS })
}
