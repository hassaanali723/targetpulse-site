import DkimGeneratorPage, { dkimGeneratorMetadata } from '@/components/tools/DkimGenerator/DkimGeneratorPage'

export const metadata = dkimGeneratorMetadata('de')

export default function Page() {
  return <DkimGeneratorPage locale="de" />
}
