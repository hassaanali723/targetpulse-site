import { llmsShort } from '@/lib/llms'

// Static: the content is assembled from files in the repo, so it only changes
// on deploy. Served as text/plain so crawlers get the bytes, not a download.
export const dynamic = 'force-static'

export function GET() {
  return new Response(llmsShort(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
