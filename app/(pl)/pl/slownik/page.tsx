import GlossaryHub, { hubMetadata } from '@/components/glossary/GlossaryHub'

export const metadata = hubMetadata('pl')

export default function Page() {
  return <GlossaryHub locale="pl" />
}
