import SpamWordCheckerPage, { spamWordCheckerMetadata } from '@/components/tools/SpamWordChecker/SpamWordCheckerPage'

export const metadata = spamWordCheckerMetadata('es')

export default function Page() {
  return <SpamWordCheckerPage locale="es" />
}
