import SpamWordCheckerPage, { spamWordCheckerMetadata } from '@/components/tools/SpamWordChecker/SpamWordCheckerPage'

export const metadata = spamWordCheckerMetadata('tr')

export default function Page() {
  return <SpamWordCheckerPage locale="tr" />
}
