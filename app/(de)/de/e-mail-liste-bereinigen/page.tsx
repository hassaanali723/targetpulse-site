import ListCleaningPage, { listCleaningMetadata } from '@/components/pages/ListCleaning/ListCleaningPage'

export const metadata = listCleaningMetadata('de')

export default function Page() {
  return <ListCleaningPage locale="de" />
}
