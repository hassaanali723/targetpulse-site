'use client'

import { useEffect, useState } from 'react'

type TocItem = { id: string; text: string }

// Table of contents with scroll-spy. Rendered twice per article: a sticky
// left rail on desktop (variant "side") and a boxed block on mobile
// (variant "box"). Both highlight the section currently in view.
export default function TableOfContents({
  items,
  variant,
}: {
  items: TocItem[]
  variant: 'side' | 'box'
}) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null)
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-96px 0px -68% 0px', threshold: 0 },
    )
    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [items])

  return (
    <nav
      aria-label="Table of contents"
      className={variant === 'side' ? 'blog-toc-side' : 'blog-toc'}
    >
      <p className="blog-toc-title">On this page</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className={activeId === item.id ? 'is-active' : undefined}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
