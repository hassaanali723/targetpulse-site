import TermArticle, { termMetadata, termParams } from '@/components/glossary/TermArticle'

export const dynamicParams = false

export function generateStaticParams() {
  return termParams('ko')
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return termMetadata('ko', params.slug)
}

export default function Page({ params }: { params: { slug: string } }) {
  return <TermArticle locale="ko" slug={params.slug} />
}
