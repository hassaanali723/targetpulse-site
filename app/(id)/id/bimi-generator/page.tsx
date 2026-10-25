import BimiGeneratorPage, { bimiGeneratorMetadata } from '@/components/tools/BimiGenerator/BimiGeneratorPage'

export const metadata = bimiGeneratorMetadata('id')

export default function Page() {
  return <BimiGeneratorPage locale="id" />
}
