import EmailPermutatorPage, { emailPermutatorMetadata } from '@/components/tools/EmailPermutator/EmailPermutatorPage'

export const metadata = emailPermutatorMetadata('pt-br')

export default function Page() {
  return <EmailPermutatorPage locale="pt-br" />
}
