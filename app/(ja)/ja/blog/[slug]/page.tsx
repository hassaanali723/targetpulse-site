import BlogArticleL10n, { blogArticleMetadata, blogArticleParams } from '@/components/l10n/BlogArticle'

export const dynamicParams = false

export function generateStaticParams() {
  return blogArticleParams('ja')
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return blogArticleMetadata('ja', params.slug)
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogArticleL10n locale="ja" slug={params.slug} />
}
