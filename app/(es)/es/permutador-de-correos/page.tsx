import EmailPermutatorPage, { emailPermutatorMetadata } from '@/components/tools/EmailPermutator/EmailPermutatorPage'

export const metadata = emailPermutatorMetadata('es')

export default function Page() {
  return <EmailPermutatorPage locale="es" />
}
