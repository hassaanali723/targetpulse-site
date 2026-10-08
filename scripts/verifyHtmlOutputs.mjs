import fs from 'node:fs'
import path from 'node:path'

const pages = [
  { slug: 'email-extractor', h1Snippet: 'Free Email Extractor' },
  { slug: 'dkim-generator', h1Snippet: 'DKIM Generator' },
  { slug: 'dmarc-generator', h1Snippet: 'DMARC Record Generator' },
]

for (const p of pages) {
  const htmlPath = path.resolve(`.next/server/app/${p.slug}.html`)
  if (!fs.existsSync(htmlPath)) {
    console.error(`HTML file NOT found: ${htmlPath}`)
    process.exit(1)
  }

  const html = fs.readFileSync(htmlPath, 'utf8')

  // Check title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/)
  console.log(`\n=== /${p.slug} ===`)
  console.log('Title:', titleMatch ? titleMatch[1] : 'MISSING')

  // Check canonical
  const canonicalMatch = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/)
  console.log('Canonical:', canonicalMatch ? canonicalMatch[1] : 'MISSING')

  // Check H1
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)
  console.log('H1:', h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'MISSING')

  // Check JSON-LD
  const jsonLdMatches = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || []
  console.log(`JSON-LD blocks found: ${jsonLdMatches.length}`)
  for (const block of jsonLdMatches) {
    const raw = block.replace(/<\/?script[^>]*>/g, '')
    try {
      const parsed = JSON.parse(raw)
      console.log(' - Schema @type:', parsed['@type'])
    } catch {
      console.log(' - Schema could not be parsed as JSON')
    }
  }

  // Check OG Image
  const ogImgMatch = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/)
  console.log('og:image:', ogImgMatch ? ogImgMatch[1] : 'MISSING')

  // Verify non-JS content presence
  if (html.includes(p.h1Snippet)) {
    console.log('SSR Content: Confirmed in raw HTML')
  } else {
    console.error(`SSR snippet "${p.h1Snippet}" not found in raw HTML`)
  }
}
