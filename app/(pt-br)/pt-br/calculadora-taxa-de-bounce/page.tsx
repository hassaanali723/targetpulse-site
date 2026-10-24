import BounceRateCalculatorPage, { bounceRateMetadata } from '@/components/tools/BounceRateCalculator/BounceRateCalculatorPage'

export const metadata = bounceRateMetadata('pt-br')

export default function Page() {
  return <BounceRateCalculatorPage locale="pt-br" />
}
