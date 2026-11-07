import EmailPermutatorPage, { emailPermutatorMetadata } from '@/components/tools/EmailPermutator/EmailPermutatorPage'

export const metadata = emailPermutatorMetadata('nl')

export default function Page() {
  return <EmailPermutatorPage locale="nl" />
}
