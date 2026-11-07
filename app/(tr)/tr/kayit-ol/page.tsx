import type { Metadata } from 'next'
import SignupPageL10n, { type SignupContent } from '@/components/l10n/SignupPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Turkish sign-up. "Ücretsiz kaydolun" is the sign-up term of the terminology
// sheet; the title carries "e-posta doğrulama" and the 1.000 free credits.

const PATH = '/tr/kayit-ol'
const DESC =
  'Ücretsiz Giggal.ai hesabınızı oluşturun ve 1.000 doğrulama kredisi alın. Kredi kartı gerekmez. Catch-all e-posta adreslerini %98,5 doğrulukla doğrulayın.'

export const metadata: Metadata = {
  title: { absolute: 'Ücretsiz kaydolun: 1.000 e-posta doğrulama kredisi | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('signup') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'tr_TR',
    title: 'Ücretsiz kaydolun: 1.000 e-posta doğrulama kredisi',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai e-posta doğrulama' }],
  },
}

const content: SignupContent = {
  path: PATH,
  crumb: 'Kayıt ol',
  h1Lead: 'Ücretsiz kaydolun,',
  h1Accent: '1.000 krediyle başlayın',
  intro: 'Ücretsiz Giggal.ai hesabınızı 30 saniyeden kısa sürede oluşturun. İlk 1.000 e-posta adresini ücretsiz doğrularız. Buna, başka araçların "riskli" olarak işaretlediği catch-all ve accept-all (her adresi kabul eden) alan adları da dahildir. Panel şu an yalnızca İngilizce olarak sunulmaktadır.',
  ctaPrimary: 'Ücretsiz hesap oluşturun',
  pricingLabel: 'Fiyatları görün',
  pricingHref: '/tr/fiyatlar',
  trustPoints: ['Kredi kartı gerekmez', 'Kredilerin süresi dolmaz', 'İstediğiniz zaman iptal edin'],
  perksKicker: 'Neler dahil',
  perksTitle: 'E-posta listenizi temizlemek için gereken her şey',
  perksText: 'Ücretsiz denemede tüm özelliklere tam erişim. Kilitli araç yok, gizli koşul yok.',
  perks: [
    { title: '1.000 ücretsiz kredi', body: 'İlk 1.000 e-posta adresinizi ücretsiz doğrularız. Kart gerekmez, kredilerin süresi dolmaz.' },
    { title: 'Gerçek zamanlı sonuçlar', body: 'Bir liste yükleyin ve doğrulama sonuçlarının anında ekrana gelmesini izleyin.' },
    { title: 'Catch-all doğrulama', body: 'Başka araçların atladığı catch-all alan adlarında net geçerli veya geçersiz sonuçlar alın.' },
    { title: 'Kullandıkça ödeme', body: 'Fiyatlar 3.000 kredi için $5 ile başlar. Kredilerin süresi dolmaz, istediğiniz zaman iptal edebilirsiniz.' },
  ],
  ctaTitle: 'Listenizi temizlemeye hazır mısınız?',
  ctaText: '30 saniyede kaydolun. İlk 1.000 doğrulamanız ücretsizdir.',
  ctaButton: 'Ücretsiz kaydolun',
}

export default function KayitOlPage() {
  return <SignupPageL10n locale="tr" content={content} />
}
