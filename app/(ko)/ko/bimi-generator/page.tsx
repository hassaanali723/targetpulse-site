import BimiGeneratorPage, { bimiGeneratorMetadata } from '@/components/tools/BimiGenerator/BimiGeneratorPage'

export const metadata = bimiGeneratorMetadata('ko')

export default function Page() {
  return <BimiGeneratorPage locale="ko" />
}
