import GlossaryHub, { hubMetadata } from '@/components/glossary/GlossaryHub'

export const metadata = hubMetadata('ja')

export default function Page() {
  return <GlossaryHub locale="ja" />
}
