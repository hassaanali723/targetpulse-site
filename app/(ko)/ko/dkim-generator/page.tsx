import DkimGeneratorPage, { dkimGeneratorMetadata } from '@/components/tools/DkimGenerator/DkimGeneratorPage'

export const metadata = dkimGeneratorMetadata('ko')

export default function Page() {
  return <DkimGeneratorPage locale="ko" />
}
