import Link from 'next/link'
import { ZAPIER_APPS } from '@/lib/zapierApps'

// Plain, always-visible index of every Zapier app page.
//
// The grid above is a client component that paginates 24 cards at a time, so
// only four of these URLs ever appeared in the server HTML and Googlebot never
// fetched the other 69. This list exists purely so all 73 are discoverable
// without JavaScript. It is deliberately unstyled-looking — no cards, no logos,
// small type — because it is a crawl path and a fallback index, not a feature
// competing with the grid for attention.
//
// Derived from ZAPIER_APPS, the same source behind the routes and the sitemap,
// so a new app appears here with no edit to this file.

export default function ZapierAppList() {
  const apps = [...ZAPIER_APPS].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="border-t border-slate-200 pt-10 space-y-5">
        <div className="space-y-2">
          <h2 className="text-lg font-black text-slate-900 tracking-tight">
            Every Zapier app we support
          </h2>
          <p className="text-[13px] text-slate-500 font-medium max-w-2xl">
            {apps.length} apps connect to Giggal.ai through Zapier. Each has its own setup
            guide.
          </p>
        </div>

        {/* CSS columns rather than a grid: the list flows top-to-bottom in each
            column, which reads better alphabetically than left-to-right cells. */}
        <ul className="columns-2 sm:columns-3 lg:columns-4 gap-x-6 space-y-1.5">
          {apps.map((a) => (
            <li key={a.slug} className="break-inside-avoid">
              <Link
                href={`/integrations/zapier/${a.slug}`}
                className="text-[13px] font-medium text-slate-500 hover:text-indigo-600 transition-colors"
              >
                {a.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
