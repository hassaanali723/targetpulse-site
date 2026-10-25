import BimiGeneratorPage, { bimiGeneratorMetadata } from '@/components/tools/BimiGenerator/BimiGeneratorPage'

export const metadata = bimiGeneratorMetadata('pt-br')

export default function Page() {
  return <BimiGeneratorPage locale="pt-br" />
}
