import FreeEmailProvidersPage, { freeEmailProvidersMetadata } from '@/components/tools/FreeEmailProviders/FreeEmailProvidersPage'

export const metadata = freeEmailProvidersMetadata('ja')

export default function Page() {
  return <FreeEmailProvidersPage locale="ja" />
}
