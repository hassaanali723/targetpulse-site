import TermArticle, { termMetadata, termParams } from '@/components/glossary/TermArticle'

export const dynamicParams = false

export function generateStaticParams() {
  return termParams('es')
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return termMetadata('es', params.slug)
}

export default function Page({ params }: { params: { slug: string } }) {
  return <TermArticle locale="es" slug={params.slug} />
}
