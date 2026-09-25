import PostCard, { FeaturedPostCard, type PostCardData } from '@/components/blog/PostCard'
import Pagination from '@/components/blog/Pagination'

// The body of a blog index: newest post as a full-width feature on page 1,
// the rest in a three-column grid, then pagination. Shared by the English
// index and the five localized hubs so all six stay in step.

/** Posts shown on one page. Page 1 spends one of them on the feature. */
export const PER_PAGE = 9

export function totalBlogPages(count: number): number {
  return Math.max(1, Math.ceil(count / PER_PAGE))
}

/** The slice of posts for `page`, 1-based. */
export function pageSlice<T>(posts: T[], page: number): T[] {
  return posts.slice((page - 1) * PER_PAGE, page * PER_PAGE)
}

export default function PostGrid({
  posts,
  page,
  totalPages,
  basePath,
  labels,
}: {
  posts: PostCardData[]
  page: number
  totalPages: number
  basePath: string
  labels: { readMore: string; prev: string; next: string; nav: string }
}) {
  // Only the first page leads with a feature; later pages are a plain grid so
  // the second-newest post is not promoted over the first.
  const featured = page === 1 ? posts[0] : undefined
  const rest = featured ? posts.slice(1) : posts

  return (
    <>
      {featured && (
        <div className="mb-10">
          <FeaturedPostCard post={featured} readMore={labels.readMore} />
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <PostCard key={post.href} post={post} readMore={labels.readMore} />
        ))}
      </div>

      <Pagination basePath={basePath} page={page} totalPages={totalPages} labels={labels} />
    </>
  )
}
