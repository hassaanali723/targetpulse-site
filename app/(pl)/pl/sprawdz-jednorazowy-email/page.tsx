import CheckerPage, { checkerMetadata } from '@/components/disposable/CheckerPage'

export const metadata = checkerMetadata('pl')

export default function Page() {
  return <CheckerPage locale="pl" />
}
