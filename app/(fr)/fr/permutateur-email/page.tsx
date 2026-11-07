import EmailPermutatorPage, { emailPermutatorMetadata } from '@/components/tools/EmailPermutator/EmailPermutatorPage'

export const metadata = emailPermutatorMetadata('fr')

export default function Page() {
  return <EmailPermutatorPage locale="fr" />
}
