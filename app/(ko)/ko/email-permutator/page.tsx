import EmailPermutatorPage, { emailPermutatorMetadata } from '@/components/tools/EmailPermutator/EmailPermutatorPage'

export const metadata = emailPermutatorMetadata('ko')

export default function Page() {
  return <EmailPermutatorPage locale="ko" />
}
