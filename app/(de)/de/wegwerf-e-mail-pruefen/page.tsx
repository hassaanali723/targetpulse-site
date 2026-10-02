import CheckerPage, { checkerMetadata } from '@/components/disposable/CheckerPage'

export const metadata = checkerMetadata('de')

export default function Page() {
  return <CheckerPage locale="de" />
}
