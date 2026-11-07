import PlusAddressingPage, { plusAddressingMetadata } from '@/components/tools/PlusAddressing/PlusAddressingPage'

export const metadata = plusAddressingMetadata('nl')

export default function Page() {
  return <PlusAddressingPage locale="nl" />
}
