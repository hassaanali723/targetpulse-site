import DkimGeneratorPage, { dkimGeneratorMetadata } from '@/components/tools/DkimGenerator/DkimGeneratorPage'

export const metadata = dkimGeneratorMetadata('en')

export default function Page() {
  return <DkimGeneratorPage locale="en" />
}
