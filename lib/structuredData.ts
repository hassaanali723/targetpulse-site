// Structured data schemas for TargetPulse Email Verification Tool
// Used as supplemental schema; primary JSON-LD is injected in app/layout.tsx

const baseUrl = 'https://targetpulse.net'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TargetPulse',
  url: baseUrl,
  logo: `${baseUrl}/Targetpulse-email verifier- logo.png`,
  description: 'Email verification and list cleaning tool. Validate emails in bulk or one-by-one to improve deliverability and protect sender reputation.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office 17366, 182-184 High Street North',
    addressLocality: 'East Ham',
    addressRegion: 'London',
    postalCode: 'E6 2JA',
    addressCountry: 'GB',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'info@targetpulse.net',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.linkedin.com/company/target-pulse/',
    'https://www.youtube.com/@TargetPulseOfficial',
    'https://www.facebook.com/share/1D31DYxZL5/',
    'https://www.instagram.com/targetpulsee',
  ],
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Pricing',
      item: `${baseUrl}/pricing`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Contact Us',
      item: `${baseUrl}/contact-us`,
    },
  ],
}

