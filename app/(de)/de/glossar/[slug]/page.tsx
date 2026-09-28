import TermArticle, { termMetadata, termParams } from '@/components/glossary/TermArticle'

export const dynamicParams = false

export function generateStaticParams() {
  return termParams('de')
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return termMetadata('de', params.slug)
}

export default function Page({ params }: { params: { slug: string } }) {
  return <TermArticle locale="de" slug={params.slug} />
}
