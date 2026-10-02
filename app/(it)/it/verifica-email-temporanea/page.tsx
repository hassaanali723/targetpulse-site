import CheckerPage, { checkerMetadata } from '@/components/disposable/CheckerPage'

export const metadata = checkerMetadata('it')

export default function Page() {
  return <CheckerPage locale="it" />
}
