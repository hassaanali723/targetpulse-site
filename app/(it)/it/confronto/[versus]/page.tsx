import ComparePageL10n, { compareL10nMetadata, compareStaticParams } from '@/components/l10n/ComparePage'

// Only the pairs with local brand demand exist here (plans/15); any other
// pair falls through to this locale's 404.
export const dynamicParams = false

export function generateStaticParams() {
  return compareStaticParams('it')
}

export function generateMetadata({ params }: { params: { versus: string } }) {
  return compareL10nMetadata('it', params.versus)
}

export default function Page({ params }: { params: { versus: string } }) {
  return <ComparePageL10n locale="it" versus={params.versus} />
}
