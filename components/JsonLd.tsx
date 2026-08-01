// Renders a JSON-LD <script> in the server-rendered HTML. No 'use client' so it
// works inside both server and client components.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
