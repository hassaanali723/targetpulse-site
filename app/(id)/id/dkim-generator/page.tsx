import DkimGeneratorPage, { dkimGeneratorMetadata } from '@/components/tools/DkimGenerator/DkimGeneratorPage'

export const metadata = dkimGeneratorMetadata('id')

export default function Page() {
  return <DkimGeneratorPage locale="id" />
}
