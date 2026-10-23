import TermArticle, { termMetadata, termParams } from '@/components/glossary/TermArticle'

export const dynamicParams = false

export function generateStaticParams() {
  return termParams('id')
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return termMetadata('id', params.slug)
}

export default function Page({ params }: { params: { slug: string } }) {
  return <TermArticle locale="id" slug={params.slug} />
}
