import BlogArticleL10n, { blogArticleMetadata, blogArticleParams } from '@/components/l10n/BlogArticle'

export const dynamicParams = false

export function generateStaticParams() {
  return blogArticleParams('pt-br')
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return blogArticleMetadata('pt-br', params.slug)
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogArticleL10n locale="pt-br" slug={params.slug} />
}
