import EmailPermutatorPage, { emailPermutatorMetadata } from '@/components/tools/EmailPermutator/EmailPermutatorPage'

export const metadata = emailPermutatorMetadata('ja')

export default function Page() {
  return <EmailPermutatorPage locale="ja" />
}
