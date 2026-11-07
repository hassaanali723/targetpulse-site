import SegPage, { segMetadata } from '@/components/pages/Seg/SegPage'

export const metadata = segMetadata('pl')

export default function Page() {
  return <SegPage locale="pl" />
}
