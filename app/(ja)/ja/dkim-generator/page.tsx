import DkimGeneratorPage, { dkimGeneratorMetadata } from '@/components/tools/DkimGenerator/DkimGeneratorPage'

export const metadata = dkimGeneratorMetadata('ja')

export default function Page() {
  return <DkimGeneratorPage locale="ja" />
}
