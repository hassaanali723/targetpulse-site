import ProvidersPage, { providersMetadata } from '@/components/disposable/ProvidersPage'

export const metadata = providersMetadata('pl')

export default function Page() {
  return <ProvidersPage locale="pl" />
}
