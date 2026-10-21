import CheckerPage, { checkerMetadata } from '@/components/disposable/CheckerPage'

export const metadata = checkerMetadata('nl')

export default function Page() {
  return <CheckerPage locale="nl" />
}
