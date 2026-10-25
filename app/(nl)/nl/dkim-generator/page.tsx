import DkimGeneratorPage, { dkimGeneratorMetadata } from '@/components/tools/DkimGenerator/DkimGeneratorPage'

export const metadata = dkimGeneratorMetadata('nl')

export default function Page() {
  return <DkimGeneratorPage locale="nl" />
}
