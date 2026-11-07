import EmailPermutatorPage, { emailPermutatorMetadata } from '@/components/tools/EmailPermutator/EmailPermutatorPage'

export const metadata = emailPermutatorMetadata('tr')

export default function Page() {
  return <EmailPermutatorPage locale="tr" />
}
