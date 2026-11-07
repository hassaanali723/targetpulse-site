import PlusAddressingPage, { plusAddressingMetadata } from '@/components/tools/PlusAddressing/PlusAddressingPage'

export const metadata = plusAddressingMetadata('de')

export default function Page() {
  return <PlusAddressingPage locale="de" />
}
