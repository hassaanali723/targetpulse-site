import PlusAddressingPage, { plusAddressingMetadata } from '@/components/tools/PlusAddressing/PlusAddressingPage'

export const metadata = plusAddressingMetadata('fr')

export default function Page() {
  return <PlusAddressingPage locale="fr" />
}
