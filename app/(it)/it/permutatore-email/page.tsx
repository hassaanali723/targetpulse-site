import EmailPermutatorPage, { emailPermutatorMetadata } from '@/components/tools/EmailPermutator/EmailPermutatorPage'

export const metadata = emailPermutatorMetadata('it')

export default function Page() {
  return <EmailPermutatorPage locale="it" />
}
