import FreeEmailProvidersPage, { freeEmailProvidersMetadata } from '@/components/tools/FreeEmailProviders/FreeEmailProvidersPage'

export const metadata = freeEmailProvidersMetadata('pl')

export default function Page() {
  return <FreeEmailProvidersPage locale="pl" />
}
