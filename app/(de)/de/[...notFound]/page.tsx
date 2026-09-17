import { notFound } from 'next/navigation'

// Unknown /de/ paths must 404 inside this root layout, not fall through to
// the English one.
export default function NotFoundCatchAllDE() {
  notFound()
}
