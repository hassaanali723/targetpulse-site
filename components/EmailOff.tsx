import React from 'react'

/**
 * Wraps content in Cloudflare's email-obfuscation disable tags:
 * <!--email_off--> ... <!--/email_off-->
 *
 * Prevents Cloudflare from replacing real code sample email addresses
 * (such as info@giggal.ai or someone@example.com) with /cdn-cgi/l/email-protection links.
 */
export default function EmailOff({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: '<!--email_off-->' }} />
      {children}
      <span dangerouslySetInnerHTML={{ __html: '<!--/email_off-->' }} />
    </>
  )
}
