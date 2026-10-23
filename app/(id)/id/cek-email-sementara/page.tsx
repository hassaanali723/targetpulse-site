import CheckerPage, { checkerMetadata } from '@/components/disposable/CheckerPage'

export const metadata = checkerMetadata('id')

export default function Page() {
  return <CheckerPage locale="id" />
}
