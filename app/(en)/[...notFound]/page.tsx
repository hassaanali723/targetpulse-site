import { notFound } from 'next/navigation'

// The English site lives in the (en) route group so that the Italian site can
// have its own root layout (and its own <html lang>). Without a single root
// layout, unmatched paths need a catch-all inside each group to reach that
// group's not-found page; this one covers every English path that no other
// route claims.
export default function NotFoundCatchAll() {
  notFound()
}
