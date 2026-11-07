import SpamWordCheckerPage, { spamWordCheckerMetadata } from '@/components/tools/SpamWordChecker/SpamWordCheckerPage'

export const metadata = spamWordCheckerMetadata('pt-br')

export default function Page() {
  return <SpamWordCheckerPage locale="pt-br" />
}
