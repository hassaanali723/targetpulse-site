import DkimGeneratorPage, { dkimGeneratorMetadata } from '@/components/tools/DkimGenerator/DkimGeneratorPage'

export const metadata = dkimGeneratorMetadata('fr')

export default function Page() {
  return <DkimGeneratorPage locale="fr" />
}
