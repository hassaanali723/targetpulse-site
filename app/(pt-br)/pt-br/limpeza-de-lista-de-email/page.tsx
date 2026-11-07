import ListCleaningPage, { listCleaningMetadata } from '@/components/pages/ListCleaning/ListCleaningPage'

export const metadata = listCleaningMetadata('pt-br')

export default function Page() {
  return <ListCleaningPage locale="pt-br" />
}
