import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogIndexL10n, { blogIndexPagedMetadata, blogPagedParams } from '@/components/l10n/BlogIndex'
import { getAllPosts } from '@/lib/blog'
import { totalBlogPages } from '@/components/blog/PostGrid'

export const dynamicParams = false

export function generateStaticParams() {
  return blogPagedParams('es')
}

export function generateMetadata({ params }: { params: { page: string } }): Metadata {
  return blogIndexPagedMetadata('es', Number(params.page))
}

export default function Page({ params }: { params: { page: string } }) {
  const page = Number(params.page)
  if (!Number.isInteger(page) || page < 2 || page > totalBlogPages(getAllPosts('es').length)) notFound()
  return <BlogIndexL10n locale="es" page={page} />
}
