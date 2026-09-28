import TermArticle, { termMetadata, termParams } from '@/components/glossary/TermArticle'

export const dynamicParams = false

export function generateStaticParams() {
  return termParams('pt-br')
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return termMetadata('pt-br', params.slug)
}

export default function Page({ params }: { params: { slug: string } }) {
  return <TermArticle locale="pt-br" slug={params.slug} />
}
