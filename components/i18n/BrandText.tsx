import React from 'react'

// Brand names keep English casing inside CSS `uppercase` labels. With
// <html lang="tr">, the browser uppercases i to İ (Zapier becomes ZAPİER);
// marking the brand lang="en" keeps it ZAPIER. Other languages render the same.
const BRANDS = /(Giggal\.ai|Zapier|Snov\.io|HubSpot|Mailchimp|Gmail|Outlook|Claude|ChatGPT|ZeroBounce|NeverBounce)/

export default function BrandText({ text }: { text: string }) {
  const parts = text.split(BRANDS)
  if (parts.length === 1) return <>{text}</>
  return (
    <>
      {parts.map((p, i) => (i % 2 ? <span key={i} lang="en">{p}</span> : p))}
    </>
  )
}
