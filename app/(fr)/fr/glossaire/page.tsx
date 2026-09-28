import GlossaryHub, { hubMetadata } from '@/components/glossary/GlossaryHub'

export const metadata = hubMetadata('fr')

export default function Page() {
  return <GlossaryHub locale="fr" />
}
