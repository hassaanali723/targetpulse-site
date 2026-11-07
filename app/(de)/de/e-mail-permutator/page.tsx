import EmailPermutatorPage, { emailPermutatorMetadata } from '@/components/tools/EmailPermutator/EmailPermutatorPage'

export const metadata = emailPermutatorMetadata('de')

export default function Page() {
  return <EmailPermutatorPage locale="de" />
}
