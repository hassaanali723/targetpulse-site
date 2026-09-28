import TermArticle, { termMetadata, termParams } from '@/components/glossary/TermArticle'

export const dynamicParams = false

export function generateStaticParams() {
  return termParams('it')
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return termMetadata('it', params.slug)
}

export default function Page({ params }: { params: { slug: string } }) {
  return <TermArticle locale="it" slug={params.slug} />
}
