import MimecastPage, { mimecastMetadata } from '@/components/pages/Mimecast/MimecastPage'

export const metadata = mimecastMetadata('es')

export default function Page() {
  return <MimecastPage locale="es" />
}
