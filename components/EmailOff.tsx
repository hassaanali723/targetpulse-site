import React from 'react'

/**
 * Cloudflare's Email Address Obfuscation rewrites every address in the HTML
 * (info@giggal.ai, someone@example.com in code samples) into a link to
 * /cdn-cgi/l/email-protection. Browsers decode it with a script, but crawlers
 * follow the link and get a 404, so Ahrefs reported it as a broken link on
 * every page that shows an address. It protected nothing either: Next.js
 * already ships every address in plain text inside the page's data script.
 *
 * EmailOffRoot wraps each root layout's body in Cloudflare's
 * <!--email_off--> ... <!--/email_off--> markers, which switches obfuscation
 * off for the whole page. Cloudflare strips the markers from the response, so
 * they never reach the visitor.
 */
export function EmailOffRoot({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span hidden dangerouslySetInnerHTML={{ __html: '<!--email_off-->' }} />
      {children}
      <span hidden dangerouslySetInnerHTML={{ __html: '<!--/email_off-->' }} />
    </>
  )
}

/**
 * Kept so existing call sites still compile. The root layouts now cover every
 * page, and a nested <!--/email_off--> would end the excluded region early, so
 * this must stay a pass-through.
 */
export default function EmailOff({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
