import Link from 'next/link'
import { localizeHref, type Locale } from '@/lib/i18n/clusters'

// Shared by the localized disposable pages (ProvidersPage, CheckerPage).

/** An internal link routed to `locale`'s page when it exists, marked hreflang="en" when it does not. */
export function LocalLink({
  href,
  locale,
  className,
  children,
}: {
  href: string
  locale: Locale
  className?: string
  children: React.ReactNode
}) {
  const loc = localizeHref(href, locale)
  return (
    <Link href={loc.href} className={className} {...(loc.localized ? {} : { hrefLang: 'en' })}>
      {children}
    </Link>
  )
}

const inlineLink = 'text-indigo-600 font-bold hover:underline'

/** Renders the strings files' inline markup: **bold** and [label](/english-path). */
export function Rich({ text, locale }: { text: string; locale: Locale }) {
  const out: React.ReactNode[] = []
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index))
    if (m[1] !== undefined) {
      out.push(<strong key={m.index} className="text-slate-900">{m[1]}</strong>)
    } else {
      out.push(
        <LocalLink key={m.index} href={m[3]} locale={locale} className={inlineLink}>
          {m[2]}
        </LocalLink>,
      )
    }
    last = re.lastIndex
  }
  if (last < text.length) out.push(text.slice(last))
  return <>{out}</>
}
