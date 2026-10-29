import { notFound } from 'next/navigation'

// Unknown /ja/ paths must 404 inside this root layout, not fall through to
// the English one.
export default function NotFoundCatchAllJa() {
  notFound()
}
