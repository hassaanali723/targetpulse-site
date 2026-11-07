import MimecastPage, { mimecastMetadata } from '@/components/pages/Mimecast/MimecastPage'

export const metadata = mimecastMetadata('pt-br')

export default function Page() {
  return <MimecastPage locale="pt-br" />
}
