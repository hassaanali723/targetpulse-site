import VerificationApiPage, { verificationApiMetadata } from '@/components/pages/VerificationApi/VerificationApiPage'

export const metadata = verificationApiMetadata('fr')

export default function Page() {
  return <VerificationApiPage locale="fr" />
}
