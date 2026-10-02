import ProvidersPage, { providersMetadata } from '@/components/disposable/ProvidersPage'

export const metadata = providersMetadata('en')

export default function Page() {
  return <ProvidersPage locale="en" />
}
