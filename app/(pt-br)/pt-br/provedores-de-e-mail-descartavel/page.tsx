import ProvidersPage, { providersMetadata } from '@/components/disposable/ProvidersPage'

export const metadata = providersMetadata('pt-br')

export default function Page() {
  return <ProvidersPage locale="pt-br" />
}
