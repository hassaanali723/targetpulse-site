import ValidationApiPage, { validationApiMetadata } from '@/components/pages/ValidationApi/ValidationApiPage'

export const metadata = validationApiMetadata('de')

export default function Page() {
  return <ValidationApiPage locale="de" />
}
