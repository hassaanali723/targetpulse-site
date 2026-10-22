import DkimGeneratorPage, { dkimGeneratorMetadata } from '@/components/tools/DkimGenerator/DkimGeneratorPage'

export const metadata = dkimGeneratorMetadata('it')

export default function Page() {
  return <DkimGeneratorPage locale="it" />
}
