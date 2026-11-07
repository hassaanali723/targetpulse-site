import SegPage, { segMetadata } from '@/components/pages/Seg/SegPage'

export const metadata = segMetadata('id')

export default function Page() {
  return <SegPage locale="id" />
}
