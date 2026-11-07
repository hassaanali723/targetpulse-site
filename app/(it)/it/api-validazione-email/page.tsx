import ValidationApiPage, { validationApiMetadata } from '@/components/pages/ValidationApi/ValidationApiPage'

export const metadata = validationApiMetadata('it')

export default function Page() {
  return <ValidationApiPage locale="it" />
}
