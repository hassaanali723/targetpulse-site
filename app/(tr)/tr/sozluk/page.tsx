import GlossaryHub, { hubMetadata } from '@/components/glossary/GlossaryHub'

export const metadata = hubMetadata('tr')

export default function Page() {
  return <GlossaryHub locale="tr" />
}
