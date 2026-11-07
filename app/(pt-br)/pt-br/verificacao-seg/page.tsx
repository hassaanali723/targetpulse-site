import SegPage, { segMetadata } from '@/components/pages/Seg/SegPage'

export const metadata = segMetadata('pt-br')

export default function Page() {
  return <SegPage locale="pt-br" />
}
