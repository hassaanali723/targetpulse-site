// Shared plumbing between a post's frontmatter and the index cards.
import type { PostMeta } from '@/lib/blog'
import type { PostCardData } from '@/components/blog/PostCard'

const MONTHS_EN = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

export function formatBlogDate(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  if (!y || !m || !d) return iso
  return `${d} ${MONTHS_EN[m - 1]} ${y}`
}

/**
 * A post as the index card needs it. `basePath` is the locale's blog hub, and
 * `formatDate` lets each locale print its own date format.
 */
export function blogCardData(
  post: PostMeta,
  basePath: string,
  formatDate: (iso: string) => string = formatBlogDate,
): PostCardData {
  return {
    href: `${basePath}/${post.slug}`,
    title: post.title,
    description: post.description,
    date: post.date,
    dateLabel: formatDate(post.date),
    image: post.image,
    imageAlt: post.imageAlt,
  }
}

export const EN_BLOG_LABELS = {
  readMore: 'Read the article',
  prev: 'Previous',
  next: 'Next',
  nav: 'Blog pagination',
}
