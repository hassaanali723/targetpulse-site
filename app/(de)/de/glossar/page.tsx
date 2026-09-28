import GlossaryHub, { hubMetadata } from '@/components/glossary/GlossaryHub'

export const metadata = hubMetadata('de')

export default function Page() {
  return <GlossaryHub locale="de" />
}
