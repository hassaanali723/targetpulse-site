import BounceRateCalculatorPage, { bounceRateMetadata } from '@/components/tools/BounceRateCalculator/BounceRateCalculatorPage'

export const metadata = bounceRateMetadata('fr')

export default function Page() {
  return <BounceRateCalculatorPage locale="fr" />
}
