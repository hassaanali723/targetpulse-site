import ProvidersPage, { providersMetadata } from '@/components/disposable/ProvidersPage'

export const metadata = providersMetadata('id')

export default function Page() {
  return <ProvidersPage locale="id" />
}
