import type { Metadata } from 'next'
import PricingPageL10n, { type PricingContent } from '@/components/l10n/PricingPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Turkish pricing page. Title starts with "E-posta doğrulama fiyatları" and
// adds the 10.000-credit price. Money is written $9,90 and never converted to
// lira (SEO-Plan/i18n-batch5-tr-terminology.md, Formats).

const PATH = '/tr/fiyatlar'
const TITLE = 'E-posta doğrulama fiyatları: 10.000 kredi $9,90'
const DESC =
  'E-posta doğrulama fiyatları: 10.000 kredi $9,90, adres başına en düşük $0,0007. Tek seferlik alın veya abonelikle %10 tasarruf edin. Kredilerin süresi dolmaz.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('pricing') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'tr_TR',
    title: 'E-posta doğrulama fiyatları',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai e-posta doğrulama' }],
  },
}

const content: PricingContent = {
  path: PATH,
  crumb: 'Fiyatlar',
  h1Lead: 'E-posta doğrulama',
  h1Accent: 'fiyatları',
  intro: (
    <>
      Yalnızca kullandığınız kadar ödersiniz. Aylık ücret yok, gizli masraf yok ve kredilerin süresi hiç dolmaz.{' '}
      <strong className="text-indigo-600 font-extrabold">1.000 ücretsiz deneme kredisiyle</strong> başlarsınız, kart gerekmez.
    </>
  ),
  contactHref: '/tr/iletisim',
  includedTitle: 'Her pakette tüm özellikler dahil',
  includedText: 'Tüm özellikler, tüm paketlerde. Kademe yok, ücretli kilit yok.',
  features: [
    'Posta kutusu kontrolü',
    'Alan adı ve MX kaydı doğrulama',
    'Güvenli e-posta ağ geçidi (SEG) tespiti',
    'Geçici e-posta tespiti',
    'Rol tabanlı adres (info@ gibi) tespiti',
    'Catch-all doğrulama',
    'Toplu yükleme ve işleme',
    'CSV, Excel ve JSON dışa aktarma',
    'Yinelenen adresleri kaldırma',
    'Ayrıntılı doğrulama raporları',
    'Kredilerin süresi dolmaz',
  ],
  rulesTitle: 'Basit fiyatlandırma',
  rulesText: 'Fiyatlarımızı açık ve öngörülebilir tutan dört ilke.',
  rules: [
    { title: '1 kredi = 1 e-posta', body: 'Her e-posta doğrulaması bakiyenizden tam olarak bir kredi kullanır. Catch-all adresler ve SEG korumalı adresler de buna dahildir.' },
    { title: 'Hacim indirimi', body: 'Ne kadar çok kredi alırsanız kredi başına o kadar az ödersiniz: $0,0017 ila $0,0007.' },
    { title: 'Abonelikte %10 indirim', body: 'Aylık abone olun, her pakette otomatik olarak %10 tasarruf edin.' },
    { title: 'Kredilerin süresi dolmaz', body: 'Kredilerinizi istediğiniz zaman kullanın. İhtiyacınız olana kadar hesabınızda kalır.' },
  ],
  faqTitle: 'Sık sorulan sorular',
  faqText: 'Krediler, ödeme ve iadeler hakkında bilmeniz gerekenler.',
  faq: [
    { q: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?', a: 'Güvenli ödeme altyapımız Stripe üzerinden tüm yaygın kredi kartlarını ve banka kartlarını kabul ediyoruz. Fiyatlar ABD doları cinsindendir. Döviz kurunu bankanız uygular.' },
    { q: 'Aboneliğimi istediğim zaman iptal edebilir miyim?', a: 'Evet, istediğiniz zaman iptal edebilirsiniz. Hesabınızdaki tüm krediler sizde kalır ve sizden tekrar ücret alınmaz.' },
    { q: 'Kredilerim biterse ne olur?', a: 'İstediğiniz zaman yeni kredi satın alabilirsiniz. Bakiyeniz anında yüklenir.' },
    { q: 'İade yapıyor musunuz?', a: 'Krediler genel olarak iade edilmez. İstisnai durumları tek tek değerlendiririz. Sonucu "bilinmiyor" olan doğrulamaların kredisi size geri verilir. Ayrıntılar iade politikamızda yer alır.' },
    { q: 'Asgari satın alma tutarı var mı?', a: 'En küçük paket 3.000 kredidir ($5,00). Satın almadan önce 1.000 ücretsiz deneme kredisi de alırsınız.' },
    { q: 'Kredilerin süresi dolar mı?', a: 'Hiçbir zaman. Krediler siz kullanana kadar hesabınızda kalır.' },
  ],
  ctaTitle: '1.000 ücretsiz krediyle başlayın',
  ctaText: 'Kredi kartı gerekmez. İlk e-posta adreslerinizi ücretsiz doğrulayın ve sonuçları saniyeler içinde görün.',
  ctaButton: 'Ücretsiz kredilerinizi alın',
  ctaHref: '/tr/kayit-ol',
}

export default function FiyatlarPage() {
  return <PricingPageL10n locale="tr" content={content} />
}
