// Deployment gate for the Mimecast spoke page. The hub (/seg-email-verification)
// ships first; the Mimecast page, its sitemap entry, its footer link, and the
// hub -> Mimecast contextual link are all held behind this one flag so they can
// be released together in a later deploy by setting ENABLE_MIMECAST_PAGE=true.
// Default (unset) keeps the Mimecast page returning 404 and unlinked.
export const MIMECAST_PAGE_LIVE = process.env.ENABLE_MIMECAST_PAGE === 'true'
