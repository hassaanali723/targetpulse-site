import CheckerPage, { checkerMetadata } from '@/components/disposable/CheckerPage'

export const metadata = checkerMetadata('pt-br')

export default function Page() {
  return <CheckerPage locale="pt-br" />
}
