import GlossaryHub, { hubMetadata } from '@/components/glossary/GlossaryHub'

export const metadata = hubMetadata('nl')

export default function Page() {
  return <GlossaryHub locale="nl" />
}
