import TermArticle, { termMetadata, termParams } from '@/components/glossary/TermArticle'

export const dynamicParams = false

export function generateStaticParams() {
  return termParams('fr')
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return termMetadata('fr', params.slug)
}

export default function Page({ params }: { params: { slug: string } }) {
  return <TermArticle locale="fr" slug={params.slug} />
}
