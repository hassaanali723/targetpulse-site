import MimecastPage, { mimecastMetadata } from '@/components/pages/Mimecast/MimecastPage'

export const metadata = mimecastMetadata('nl')

export default function Page() {
  return <MimecastPage locale="nl" />
}
