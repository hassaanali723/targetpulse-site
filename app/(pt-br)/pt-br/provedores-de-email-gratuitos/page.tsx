import FreeEmailProvidersPage, { freeEmailProvidersMetadata } from '@/components/tools/FreeEmailProviders/FreeEmailProvidersPage'

export const metadata = freeEmailProvidersMetadata('pt-br')

export default function Page() {
  return <FreeEmailProvidersPage locale="pt-br" />
}
