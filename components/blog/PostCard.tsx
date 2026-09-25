import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

// One card in the blog index grid. Locale-agnostic: the caller passes an
// already-localized href, date string and "read more" label, so the English
// index and the five localized hubs render identically.
//
// Cover images are 1200x630 (lib/blogCovers.ts), so the frame uses that exact
// ratio rather than 16/9 and nothing is cropped.
export interface PostCardData {
  href: string
  title: string
  description: string
  date: string
  dateLabel: string
  image: string
  imageAlt: string
}

export default function PostCard({ post, readMore }: { post: PostCardData; readMore: string }) {
  return (
    <article className="group h-full">
      <Link
        href={post.href}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/10"
      >
        {post.image ? (
          <div className="relative aspect-[1200/630] w-full overflow-hidden bg-slate-100">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <div className="aspect-[1200/630] w-full bg-gradient-to-br from-indigo-950 to-indigo-800" />
        )}

        <div className="flex flex-1 flex-col p-5">
          <time dateTime={post.date} className="text-[12px] font-bold uppercase tracking-wider text-slate-400">
            {post.dateLabel}
          </time>
          <h3 className="mt-2 text-lg font-black leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-indigo-700">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm font-medium leading-relaxed text-slate-600">
            {post.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 pt-1 text-sm font-bold text-indigo-600">
            {readMore}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  )
}

/** The newest post, given the full width of the page above the grid. */
export function FeaturedPostCard({ post, readMore }: { post: PostCardData; readMore: string }) {
  return (
    <article className="group">
      <Link
        href={post.href}
        className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-200 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-900/10 md:grid-cols-2"
      >
        {post.image ? (
          <div className="relative aspect-[1200/630] w-full overflow-hidden bg-slate-100 md:aspect-auto md:h-full md:min-h-[300px]">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <div className="aspect-[1200/630] w-full bg-gradient-to-br from-indigo-950 to-indigo-800 md:aspect-auto md:h-full" />
        )}

        <div className="flex flex-col justify-center p-7 md:p-10">
          <time dateTime={post.date} className="text-[12px] font-bold uppercase tracking-wider text-indigo-600">
            {post.dateLabel}
          </time>
          <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-900 transition-colors group-hover:text-indigo-700 md:text-3xl">
            {post.title}
          </h2>
          <p className="mt-3 text-[15px] font-medium leading-relaxed text-slate-600">
            {post.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600">
            {readMore}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  )
}
