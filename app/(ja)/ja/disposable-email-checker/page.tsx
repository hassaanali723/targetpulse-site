import CheckerPage, { checkerMetadata } from '@/components/disposable/CheckerPage'

export const metadata = checkerMetadata('ja')

export default function Page() {
  return <CheckerPage locale="ja" />
}
