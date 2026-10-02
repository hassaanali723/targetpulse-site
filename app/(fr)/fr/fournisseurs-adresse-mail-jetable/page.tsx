import ProvidersPage, { providersMetadata } from '@/components/disposable/ProvidersPage'

export const metadata = providersMetadata('fr')

export default function Page() {
  return <ProvidersPage locale="fr" />
}
