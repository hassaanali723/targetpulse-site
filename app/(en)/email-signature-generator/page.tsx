import EmailSignaturePage, { emailSignatureMetadata } from '@/components/tools/EmailSignature/EmailSignaturePage'

export const metadata = emailSignatureMetadata('en')

export default function Page() {
  return <EmailSignaturePage locale="en" />
}
