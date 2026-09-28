import GlossaryHub, { hubMetadata } from '@/components/glossary/GlossaryHub'

export const metadata = hubMetadata('pt-br')

export default function Page() {
  return <GlossaryHub locale="pt-br" />
}
