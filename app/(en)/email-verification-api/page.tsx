import VerificationApiPage, { verificationApiMetadata } from '@/components/pages/VerificationApi/VerificationApiPage'

export const metadata = verificationApiMetadata('en')

export default function Page() {
  return <VerificationApiPage locale="en" />
}
