import BimiGeneratorPage, { bimiGeneratorMetadata } from '@/components/tools/BimiGenerator/BimiGeneratorPage'

export const metadata = bimiGeneratorMetadata('fr')

export default function Page() {
  return <BimiGeneratorPage locale="fr" />
}
