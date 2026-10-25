import DkimGeneratorPage, { dkimGeneratorMetadata } from '@/components/tools/DkimGenerator/DkimGeneratorPage'

export const metadata = dkimGeneratorMetadata('pt-br')

export default function Page() {
  return <DkimGeneratorPage locale="pt-br" />
}
