import BimiGeneratorPage, { bimiGeneratorMetadata } from '@/components/tools/BimiGenerator/BimiGeneratorPage'

export const metadata = bimiGeneratorMetadata('de')

export default function Page() {
  return <BimiGeneratorPage locale="de" />
}
