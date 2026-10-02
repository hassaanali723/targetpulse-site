import ProvidersPage, { providersMetadata } from '@/components/disposable/ProvidersPage'

export const metadata = providersMetadata('de')

export default function Page() {
  return <ProvidersPage locale="de" />
}
