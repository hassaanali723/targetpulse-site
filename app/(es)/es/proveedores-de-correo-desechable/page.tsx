import ProvidersPage, { providersMetadata } from '@/components/disposable/ProvidersPage'

export const metadata = providersMetadata('es')

export default function Page() {
  return <ProvidersPage locale="es" />
}
