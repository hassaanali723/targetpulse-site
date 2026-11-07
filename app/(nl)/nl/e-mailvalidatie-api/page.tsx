import ValidationApiPage, { validationApiMetadata } from '@/components/pages/ValidationApi/ValidationApiPage'

export const metadata = validationApiMetadata('nl')

export default function Page() {
  return <ValidationApiPage locale="nl" />
}
