import ProvidersPage, { providersMetadata } from '@/components/disposable/ProvidersPage'

export const metadata = providersMetadata('it')

export default function Page() {
  return <ProvidersPage locale="it" />
}
