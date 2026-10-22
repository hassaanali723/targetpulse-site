import FreeEmailProvidersPage, { freeEmailProvidersMetadata } from '@/components/tools/FreeEmailProviders/FreeEmailProvidersPage'

export const metadata = freeEmailProvidersMetadata('es')

export default function Page() {
  return <FreeEmailProvidersPage locale="es" />
}
