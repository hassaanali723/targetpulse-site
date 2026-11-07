import ValidationApiPage, { validationApiMetadata } from '@/components/pages/ValidationApi/ValidationApiPage'

export const metadata = validationApiMetadata('en')

export default function Page() {
  return <ValidationApiPage locale="en" />
}
