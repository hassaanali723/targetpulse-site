import VerificationApiPage, { verificationApiMetadata } from '@/components/pages/VerificationApi/VerificationApiPage'

export const metadata = verificationApiMetadata('nl')

export default function Page() {
  return <VerificationApiPage locale="nl" />
}
