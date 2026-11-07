import EmailPermutatorPage, { emailPermutatorMetadata } from '@/components/tools/EmailPermutator/EmailPermutatorPage'

export const metadata = emailPermutatorMetadata('id')

export default function Page() {
  return <EmailPermutatorPage locale="id" />
}
