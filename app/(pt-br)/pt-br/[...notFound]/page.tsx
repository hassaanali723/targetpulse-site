import { notFound } from 'next/navigation'

// Unknown /pt-br/ paths must 404 inside this root layout, not fall through to
// the English one.
export default function NotFoundCatchAllPtBr() {
  notFound()
}
