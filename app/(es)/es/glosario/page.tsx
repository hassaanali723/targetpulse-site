import GlossaryHub, { hubMetadata } from '@/components/glossary/GlossaryHub'

export const metadata = hubMetadata('es')

export default function Page() {
  return <GlossaryHub locale="es" />
}
