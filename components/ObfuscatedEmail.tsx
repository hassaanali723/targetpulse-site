// Renders an email address with the "@" split into its own element, so the
// contiguous "user@domain.tld" string never appears in the server-rendered
// HTML. Cloudflare's Email Address Obfuscation scans the HTML for that pattern
// and, when it finds one, injects a render-blocking /cdn-cgi/.../email-decode
// script on the page. Breaking the pattern here keeps that script off pages
// that only show a sample/demo address, while real contact pages keep
// obfuscation. Reads identically to a plain address on screen.
export default function ObfuscatedEmail({
  user,
  domain,
}: {
  user: string
  domain: string
}) {
  return (
    <>
      {user}
      <span>@</span>
      {domain}
    </>
  )
}
