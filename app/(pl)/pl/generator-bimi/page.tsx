import BimiGeneratorPage, { bimiGeneratorMetadata } from '@/components/tools/BimiGenerator/BimiGeneratorPage'

export const metadata = bimiGeneratorMetadata('pl')

export default function Page() {
  return <BimiGeneratorPage locale="pl" />
}
