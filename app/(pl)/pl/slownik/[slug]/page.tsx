import TermArticle, { termMetadata, termParams } from '@/components/glossary/TermArticle'

export const dynamicParams = false

export function generateStaticParams() {
  return termParams('pl')
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return termMetadata('pl', params.slug)
}

export default function Page({ params }: { params: { slug: string } }) {
  return <TermArticle locale="pl" slug={params.slug} />
}
