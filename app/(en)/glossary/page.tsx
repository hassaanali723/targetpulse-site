import GlossaryHub, { hubMetadata } from '@/components/glossary/GlossaryHub'

export const metadata = hubMetadata('en')

export default function Page() {
  return <GlossaryHub locale="en" />
}
