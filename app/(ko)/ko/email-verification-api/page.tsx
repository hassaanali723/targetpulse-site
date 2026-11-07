import VerificationApiPage, { verificationApiMetadata } from '@/components/pages/VerificationApi/VerificationApiPage'

export const metadata = verificationApiMetadata('ko')

export default function Page() {
  return <VerificationApiPage locale="ko" />
}
