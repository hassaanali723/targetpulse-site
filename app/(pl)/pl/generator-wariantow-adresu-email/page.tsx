import EmailPermutatorPage, { emailPermutatorMetadata } from '@/components/tools/EmailPermutator/EmailPermutatorPage'

export const metadata = emailPermutatorMetadata('pl')

export default function Page() {
  return <EmailPermutatorPage locale="pl" />
}
