import SegPage, { segMetadata } from '@/components/pages/Seg/SegPage'

export const metadata = segMetadata('es')

export default function Page() {
  return <SegPage locale="es" />
}
