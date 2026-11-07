import TermArticle, { termMetadata, termParams } from '@/components/glossary/TermArticle'

export const dynamicParams = false

export function generateStaticParams() {
  return termParams('tr')
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return termMetadata('tr', params.slug)
}

export default function Page({ params }: { params: { slug: string } }) {
  return <TermArticle locale="tr" slug={params.slug} />
}
