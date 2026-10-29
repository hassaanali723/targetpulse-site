import BimiGeneratorPage, { bimiGeneratorMetadata } from '@/components/tools/BimiGenerator/BimiGeneratorPage'

export const metadata = bimiGeneratorMetadata('ja')

export default function Page() {
  return <BimiGeneratorPage locale="ja" />
}
