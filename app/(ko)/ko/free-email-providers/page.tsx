import FreeEmailProvidersPage, { freeEmailProvidersMetadata } from '@/components/tools/FreeEmailProviders/FreeEmailProvidersPage'

export const metadata = freeEmailProvidersMetadata('ko')

export default function Page() {
  return <FreeEmailProvidersPage locale="ko" />
}
