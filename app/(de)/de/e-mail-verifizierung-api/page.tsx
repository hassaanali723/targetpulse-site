import VerificationApiPage, { verificationApiMetadata } from '@/components/pages/VerificationApi/VerificationApiPage'

export const metadata = verificationApiMetadata('de')

export default function Page() {
  return <VerificationApiPage locale="de" />
}
