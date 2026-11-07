import VerificationApiPage, { verificationApiMetadata } from '@/components/pages/VerificationApi/VerificationApiPage'

export const metadata = verificationApiMetadata('ja')

export default function Page() {
  return <VerificationApiPage locale="ja" />
}
