import SpamWordCheckerPage, { spamWordCheckerMetadata } from '@/components/tools/SpamWordChecker/SpamWordCheckerPage'

export const metadata = spamWordCheckerMetadata('ja')

export default function Page() {
  return <SpamWordCheckerPage locale="ja" />
}
