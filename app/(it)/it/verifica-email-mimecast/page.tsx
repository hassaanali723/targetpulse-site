import MimecastPage, { mimecastMetadata } from '@/components/pages/Mimecast/MimecastPage'

export const metadata = mimecastMetadata('it')

export default function Page() {
  return <MimecastPage locale="it" />
}
