import { notFound } from 'next/navigation'

// Unknown /it/ paths must 404 inside the Italian root layout. Without this
// catch-all they would fall through to app/(en)/[...notFound] and render the
// English 404 with <html lang="en">.
export default function NotFoundCatchAllIt() {
  notFound()
}
