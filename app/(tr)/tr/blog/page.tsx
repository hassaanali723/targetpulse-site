import BlogIndexL10n, { blogIndexMetadata } from '@/components/l10n/BlogIndex'

export const metadata = blogIndexMetadata('tr')

export default function Page() {
  return <BlogIndexL10n locale="tr" />
}
