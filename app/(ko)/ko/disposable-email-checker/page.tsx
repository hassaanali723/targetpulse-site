import CheckerPage, { checkerMetadata } from '@/components/disposable/CheckerPage'

export const metadata = checkerMetadata('ko')

export default function Page() {
  return <CheckerPage locale="ko" />
}
