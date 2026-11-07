import EmailPermutatorPage, { emailPermutatorMetadata } from '@/components/tools/EmailPermutator/EmailPermutatorPage'

export const metadata = emailPermutatorMetadata('en')

export default function Page() {
  return <EmailPermutatorPage locale="en" />
}
