import ListCleaningPage, { listCleaningMetadata } from '@/components/pages/ListCleaning/ListCleaningPage'

export const metadata = listCleaningMetadata('fr')

export default function Page() {
  return <ListCleaningPage locale="fr" />
}
