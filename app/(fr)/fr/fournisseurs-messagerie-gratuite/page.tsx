import FreeEmailProvidersPage, { freeEmailProvidersMetadata } from '@/components/tools/FreeEmailProviders/FreeEmailProvidersPage'

export const metadata = freeEmailProvidersMetadata('fr')

export default function Page() {
  return <FreeEmailProvidersPage locale="fr" />
}
