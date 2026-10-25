import DkimGeneratorPage, { dkimGeneratorMetadata } from '@/components/tools/DkimGenerator/DkimGeneratorPage'

export const metadata = dkimGeneratorMetadata('es')

export default function Page() {
  return <DkimGeneratorPage locale="es" />
}
