export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TargetPulse',
  url: 'https://targetpulse.com',
  logo: 'https://targetpulse.com/logo.png',
  description: 'Professional cold email marketing services that drive real results for B2B companies',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Marketing Street',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94105',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'Customer Service',
    email: 'hello@targetpulse.com',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.linkedin.com/company/targetpulse',
    'https://twitter.com/targetpulse',
    'https://www.facebook.com/targetpulse',
    'https://www.instagram.com/targetpulse',
  ],
}

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Cold Email Marketing',
  provider: {
    '@type': 'Organization',
    name: 'TargetPulse',
    url: 'https://targetpulse.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cold Email Marketing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cold Email Campaigns',
          description: 'Expertly crafted email sequences designed to capture attention and drive responses',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lead Generation',
          description: 'Strategic prospecting and list building to connect with decision-makers',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Campaign Analytics',
          description: 'Comprehensive tracking and reporting to optimize campaigns for maximum ROI',
        },
      },
    ],
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://targetpulse.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://targetpulse.com/#services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Portfolio',
      item: 'https://targetpulse.com/#portfolio',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Contact',
      item: 'https://targetpulse.com/#contact',
    },
  ],
}

