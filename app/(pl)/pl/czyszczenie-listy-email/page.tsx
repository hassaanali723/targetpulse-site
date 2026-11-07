import ListCleaningPage, { listCleaningMetadata } from '@/components/pages/ListCleaning/ListCleaningPage'

export const metadata = listCleaningMetadata('pl')

export default function Page() {
  return <ListCleaningPage locale="pl" />
}
