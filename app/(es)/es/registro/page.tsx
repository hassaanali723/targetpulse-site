import type { Metadata } from 'next'
import SignupPageL10n, { type SignupContent } from '@/components/l10n/SignupPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/es/registro'
const DESC =
  'Crea tu cuenta de Giggal.ai gratis en segundos. 1.000 créditos de verificación gratis, sin tarjeta. Verifica dominios catch-all con un 98,5 % de precisión.'

export const metadata: Metadata = {
  title: { absolute: 'Regístrate Gratis: 1.000 Verificaciones Incluidas | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('signup') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'es_LA',
    title: 'Regístrate gratis: 1.000 verificaciones de correo incluidas',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verificación de correo' }],
  },
}

const content: SignupContent = {
  path: PATH,
  crumb: 'Registro',
  h1Lead: 'Regístrate gratis',
  h1Accent: 'y empieza con 1.000 créditos',
  intro: 'Crea tu cuenta de Giggal.ai en menos de 30 segundos. Las primeras 1.000 verificaciones corren por nuestra cuenta, incluidos los dominios catch-all y accept-all que otras herramientas marcan como "desconocido". El panel de usuario está por ahora en inglés.',
  ctaPrimary: 'Crear mi cuenta gratis',
  pricingLabel: 'Ver precios',
  pricingHref: '/es/precios',
  trustPoints: ['Sin tarjeta', 'Los créditos no caducan', 'Cancela cuando quieras'],
  perksKicker: 'Qué incluye',
  perksTitle: 'Todo lo que necesitas para limpiar tu lista',
  perksText: 'Acceso completo a todas las funciones con la prueba gratis. Sin herramientas bloqueadas, sin asteriscos.',
  perks: [
    { title: '1.000 créditos gratis', body: 'Las primeras 1.000 verificaciones te las regalamos. Sin tarjeta, sin caducidad.' },
    { title: 'Resultados en tiempo real', body: 'Sube una lista y mira cómo llegan las verificaciones fila a fila.' },
    { title: 'Verificación catch-all', body: 'Resultados claros, válido o no válido, en los dominios catch-all que otras herramientas se saltan.' },
    { title: 'Precios por uso', body: 'Desde 5 $ por 3.000 créditos. Los créditos no caducan, cancela cuando quieras.' },
  ],
  ctaTitle: '¿Listo para limpiar tu lista?',
  ctaText: 'Registro en 30 segundos. Las primeras 1.000 verificaciones son gratis.',
  ctaButton: 'Regístrate gratis',
}

export default function RegistroPage() {
  return <SignupPageL10n locale="es" content={content} />
}
