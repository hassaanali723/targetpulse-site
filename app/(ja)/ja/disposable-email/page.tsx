import ProvidersPage, { providersMetadata } from '@/components/disposable/ProvidersPage'

export const metadata = providersMetadata('ja')

export default function Page() {
  return <ProvidersPage locale="ja" />
}
