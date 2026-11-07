import MimecastPage, { mimecastMetadata } from '@/components/pages/Mimecast/MimecastPage'

export const metadata = mimecastMetadata('de')

export default function Page() {
  return <MimecastPage locale="de" />
}
