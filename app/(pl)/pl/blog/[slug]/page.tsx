import BlogArticleL10n, { blogArticleMetadata, blogArticleParams } from '@/components/l10n/BlogArticle'

export const dynamicParams = false

export function generateStaticParams() {
  return blogArticleParams('pl')
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return blogArticleMetadata('pl', params.slug)
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogArticleL10n locale="pl" slug={params.slug} />
}
