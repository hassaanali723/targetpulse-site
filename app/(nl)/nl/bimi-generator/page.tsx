import BimiGeneratorPage, { bimiGeneratorMetadata } from '@/components/tools/BimiGenerator/BimiGeneratorPage'

export const metadata = bimiGeneratorMetadata('nl')

export default function Page() {
  return <BimiGeneratorPage locale="nl" />
}
