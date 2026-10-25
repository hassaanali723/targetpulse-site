import DmarcGeneratorPage, { dmarcGeneratorMetadata } from '@/components/tools/DmarcGenerator/DmarcGeneratorPage'

export const metadata = dmarcGeneratorMetadata('fr')

export default function Page() {
  return <DmarcGeneratorPage locale="fr" />
}
