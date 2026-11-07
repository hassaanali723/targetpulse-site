import EmailSignaturePage, { emailSignatureMetadata } from '@/components/tools/EmailSignature/EmailSignaturePage'

export const metadata = emailSignatureMetadata('tr')

export default function Page() {
  return <EmailSignaturePage locale="tr" />
}
