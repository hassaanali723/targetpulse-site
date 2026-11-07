import VerificationApiPage, { verificationApiMetadata } from '@/components/pages/VerificationApi/VerificationApiPage'

export const metadata = verificationApiMetadata('id')

export default function Page() {
  return <VerificationApiPage locale="id" />
}
