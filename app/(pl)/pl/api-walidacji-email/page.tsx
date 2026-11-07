import ValidationApiPage, { validationApiMetadata } from '@/components/pages/ValidationApi/ValidationApiPage'

export const metadata = validationApiMetadata('pl')

export default function Page() {
  return <ValidationApiPage locale="pl" />
}
