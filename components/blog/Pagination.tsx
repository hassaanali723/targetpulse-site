import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Numbered pagination for the blog index. `basePath` is the locale's blog hub
// (/blog, /it/blog, ...); page 1 is the hub itself and later pages live at
// <basePath>/page/<n>, so the hub keeps the canonical URL it already had.
export function pageHref(basePath: string, page: number): string {
  return page <= 1 ? basePath : `${basePath}/page/${page}`
}

export default function Pagination({
  basePath,
  page,
  totalPages,
  labels,
}: {
  basePath: string
  page: number
  totalPages: number
  labels: { prev: string; next: string; nav: string }
}) {
  if (totalPages <= 1) return null
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const box =
    'inline-flex h-10 min-w-10 items-center justify-center gap-1 rounded-xl border px-3 text-sm font-bold transition-colors'
  const idle = 'border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:text-indigo-700'
  const off = 'border-slate-200 bg-white/60 text-slate-300 cursor-default'

  return (
    <nav aria-label={labels.nav} className="mt-14 flex items-center justify-center gap-2">
      {page > 1 ? (
        <Link href={pageHref(basePath, page - 1)} rel="prev" className={`${box} ${idle}`}>
          <ChevronLeft className="h-4 w-4" />
          {labels.prev}
        </Link>
      ) : (
        <span className={`${box} ${off}`} aria-hidden="true">
          <ChevronLeft className="h-4 w-4" />
          {labels.prev}
        </span>
      )}

      {pages.map((n) =>
        n === page ? (
          <span key={n} aria-current="page" className={`${box} border-indigo-600 bg-indigo-600 text-white`}>
            {n}
          </span>
        ) : (
          <Link key={n} href={pageHref(basePath, n)} className={`${box} ${idle}`}>
            {n}
          </Link>
        ),
      )}

      {page < totalPages ? (
        <Link href={pageHref(basePath, page + 1)} rel="next" className={`${box} ${idle}`}>
          {labels.next}
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <span className={`${box} ${off}`} aria-hidden="true">
          {labels.next}
          <ChevronRight className="h-4 w-4" />
        </span>
      )}
    </nav>
  )
}
