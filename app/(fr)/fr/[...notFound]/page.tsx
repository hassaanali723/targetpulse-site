import { notFound } from 'next/navigation'

// Unknown /fr/ paths must 404 inside this root layout, not fall through to
// the English one.
export default function NotFoundCatchAllFr() {
  notFound()
}
