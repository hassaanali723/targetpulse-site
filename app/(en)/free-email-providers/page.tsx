import FreeEmailProvidersPage, { freeEmailProvidersMetadata } from '@/components/tools/FreeEmailProviders/FreeEmailProvidersPage'

export const metadata = freeEmailProvidersMetadata('en')

export default function Page() {
  return <FreeEmailProvidersPage locale="en" />
}
