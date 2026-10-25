import DkimGeneratorPage, { dkimGeneratorMetadata } from '@/components/tools/DkimGenerator/DkimGeneratorPage'

export const metadata = dkimGeneratorMetadata('pl')

export default function Page() {
  return <DkimGeneratorPage locale="pl" />
}
