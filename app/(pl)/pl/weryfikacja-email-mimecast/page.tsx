import MimecastPage, { mimecastMetadata } from '@/components/pages/Mimecast/MimecastPage'

export const metadata = mimecastMetadata('pl')

export default function Page() {
  return <MimecastPage locale="pl" />
}
