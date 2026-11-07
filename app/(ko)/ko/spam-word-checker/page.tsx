import SpamWordCheckerPage, { spamWordCheckerMetadata } from '@/components/tools/SpamWordChecker/SpamWordCheckerPage'

export const metadata = spamWordCheckerMetadata('ko')

export default function Page() {
  return <SpamWordCheckerPage locale="ko" />
}
