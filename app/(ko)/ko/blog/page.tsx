import BlogIndexL10n, { blogIndexMetadata } from '@/components/l10n/BlogIndex'

export const metadata = blogIndexMetadata('ko')

export default function Page() {
  return <BlogIndexL10n locale="ko" />
}
