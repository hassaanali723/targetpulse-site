import BlogArticleL10n, { blogArticleMetadata, blogArticleParams } from '@/components/l10n/BlogArticle'

export const dynamicParams = false

export function generateStaticParams() {
  return blogArticleParams('es')
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return blogArticleMetadata('es', params.slug)
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogArticleL10n locale="es" slug={params.slug} />
}
