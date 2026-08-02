// Deployment gate for the Mimecast spoke page. The hub (/seg-email-verification)
// ships first; the Mimecast page, its sitemap entry, its footer link, the nav
// Solutions dropdown entry, and the hub -> Mimecast contextual link are all held
// behind this one flag so they can be released together in a later deploy by
// setting NEXT_PUBLIC_ENABLE_MIMECAST_PAGE=true. Default (unset) keeps the
// Mimecast page returning 404 and unlinked.
//
// It is NEXT_PUBLIC_ because the Navbar (a client component) also reads it, and
// a server-only value there would hydrate inconsistently. NEXT_PUBLIC_ vars
// resolve to the same value on server and client.
export const MIMECAST_PAGE_LIVE = process.env.NEXT_PUBLIC_ENABLE_MIMECAST_PAGE === 'true'
