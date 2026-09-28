import TermArticle, { termMetadata, termParams } from '@/components/glossary/TermArticle'

export const dynamicParams = false

export function generateStaticParams() {
  return termParams('en')
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return termMetadata('en', params.slug)
}

export default function Page({ params }: { params: { slug: string } }) {
  return <TermArticle locale="en" slug={params.slug} />
}
