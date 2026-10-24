import BounceRateCalculatorPage, { bounceRateMetadata } from '@/components/tools/BounceRateCalculator/BounceRateCalculatorPage'

export const metadata = bounceRateMetadata('pl')

export default function Page() {
  return <BounceRateCalculatorPage locale="pl" />
}
