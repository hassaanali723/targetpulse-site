import CheckerPage, { checkerMetadata } from '@/components/disposable/CheckerPage'

export const metadata = checkerMetadata('fr')

export default function Page() {
  return <CheckerPage locale="fr" />
}
