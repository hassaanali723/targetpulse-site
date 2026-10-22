import BimiGeneratorPage, { bimiGeneratorMetadata } from '@/components/tools/BimiGenerator/BimiGeneratorPage'

export const metadata = bimiGeneratorMetadata('en')

export default function Page() {
  return <BimiGeneratorPage locale="en" />
}
