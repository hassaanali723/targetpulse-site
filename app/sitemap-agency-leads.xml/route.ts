import { agencyLeadsEntries, renderUrlSet, XML_HEADERS } from '@/lib/sitemapData'

export const dynamic = 'force-static'

export async function GET() {
  return new Response(renderUrlSet(agencyLeadsEntries()), {
    headers: XML_HEADERS,
  })
}
