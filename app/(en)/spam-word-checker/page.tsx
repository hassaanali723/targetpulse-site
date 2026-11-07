import SpamWordCheckerPage, { spamWordCheckerMetadata } from '@/components/tools/SpamWordChecker/SpamWordCheckerPage'

export const metadata = spamWordCheckerMetadata('en')

export default function Page() {
  return <SpamWordCheckerPage locale="en" />
}
