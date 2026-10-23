import GlossaryHub, { hubMetadata } from '@/components/glossary/GlossaryHub'

export const metadata = hubMetadata('id')

export default function Page() {
  return <GlossaryHub locale="id" />
}
