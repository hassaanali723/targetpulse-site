import BounceRateCalculatorPage, { bounceRateMetadata } from '@/components/tools/BounceRateCalculator/BounceRateCalculatorPage'

export const metadata = bounceRateMetadata('ja')

export default function Page() {
  return <BounceRateCalculatorPage locale="ja" />
}
