import ValidationApiPage, { validationApiMetadata } from '@/components/pages/ValidationApi/ValidationApiPage'

export const metadata = validationApiMetadata('fr')

export default function Page() {
  return <ValidationApiPage locale="fr" />
}
