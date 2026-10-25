import FreeEmailProvidersPage, { freeEmailProvidersMetadata } from '@/components/tools/FreeEmailProviders/FreeEmailProvidersPage'

export const metadata = freeEmailProvidersMetadata('nl')

export default function Page() {
  return <FreeEmailProvidersPage locale="nl" />
}
