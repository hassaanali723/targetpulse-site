import { verifyForEntries, renderUrlSet, XML_HEADERS } from '@/lib/sitemapData'

export const dynamic = 'force-static'

export function GET() {
  return new Response(renderUrlSet(verifyForEntries()), { headers: XML_HEADERS })
}
