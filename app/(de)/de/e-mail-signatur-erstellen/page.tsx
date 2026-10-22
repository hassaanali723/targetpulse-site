import EmailSignaturePage, { emailSignatureMetadata } from '@/components/tools/EmailSignature/EmailSignaturePage'

export const metadata = emailSignatureMetadata('de')

export default function Page() {
  return <EmailSignaturePage locale="de" />
}
