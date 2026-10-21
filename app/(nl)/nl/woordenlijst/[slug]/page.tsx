import TermArticle, { termMetadata, termParams } from '@/components/glossary/TermArticle'

export const dynamicParams = false

export function generateStaticParams() {
  return termParams('nl')
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return termMetadata('nl', params.slug)
}

export default function Page({ params }: { params: { slug: string } }) {
  return <TermArticle locale="nl" slug={params.slug} />
}
