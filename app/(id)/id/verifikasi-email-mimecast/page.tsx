import MimecastPage, { mimecastMetadata } from '@/components/pages/Mimecast/MimecastPage'

export const metadata = mimecastMetadata('id')

export default function Page() {
  return <MimecastPage locale="id" />
}
