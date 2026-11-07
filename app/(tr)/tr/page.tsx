import type { Metadata } from 'next'
import Link from 'next/link'
import HomeL10n, { type HomeContent } from '@/components/l10n/Home'
import { MCP, REVIEW_BADGES, REVIEW_WALL } from '@/components/l10n/homeShared'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Turkish home. The title follows the final keyword plan ("Email doğrulama
// aracı: toplu mail doğrulama", SEO-Plan/i18n-batch5-tr-keyword-plan.md,
// Ahrefs Turkey 2026-11-07). The main search demand (mail adresi doğrulama,
// email checker) sits on /tr/mail-adresi-dogrulama,
// so the hero sends the visitor to the free checker first and to sign-up
// second. The page never frames the tool as finding the reader's own address
// and never claims leak checks. Only the alternatives registered for tr are
// listed.

const DESC =
  'Bir mail adresinin gerçekten var olup olmadığını gösteren email doğrulama aracı, catch-all alan adları dahil. Toplu mail doğrulama, API ve 1.000 ücretsiz kredi.'

const TITLE = 'Email doğrulama aracı: toplu mail doğrulama'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: '/tr', languages: hreflangAlternates('home') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'tr_TR',
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/tr',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai email doğrulama' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

const heroLink = 'text-white font-semibold underline decoration-emerald-400 decoration-2 underline-offset-4 hover:decoration-white'
const link = 'text-indigo-600 font-bold hover:underline'

const content: HomeContent = {
  h1Lead: 'Bounce oranını düşüren',
  h1Accent: 'mail doğrulama aracı',
  heroSub: (
    <>
      Toplu mail doğrulama yazılımımız, hangi e-posta adreslerinin gerçekten var olduğunu gösterir. Bu,{' '}
      <Link href="/tr/catch-all-dogrulama" className={heroLink}>catch-all alan adları</Link> için de geçerlidir.
    </>
  ),
  rating: { on: '', reviews: (n) => `(${n} değerlendirme)` },
  email: { label: 'Doğrulanacak e-posta adresi', placeholder: 'ad@sirketiniz.com.tr', button: 'Ücretsiz doğrulayın' },
  listQuestion: 'Tüm listeyi mi temizlemek istiyorsunuz?',
  listCta: '1.000 ücretsiz e-posta doğrulaması alın',
  noCard: 'Kart gerekmez.',
  stats: [
    { n: '500 milyon', suf: '+', l: 'Doğrulanan e-posta adresi' },
    { pre: '%', n: '98,5', l: 'Kurumsal listelerde doğruluk' },
    { pre: '<%', n: '3', l: 'Temizlenmiş listelerde bounce oranı' },
    { n: '1.000', l: 'Ücretsiz kredi, kart gerekmez' },
  ],
  bulk: {
    id: 'toplu',
    title: 'Tüm listeniz için toplu mail doğrulama',
    sub: 'Listenizi bir kez yükleyin. Toplu e-posta doğrulama hizmetimiz listedeki her adresi kontrol eder.',
    points: [
      'Her adres için teslim edilebilir veya teslim edilemez sonucu',
      'Catch-all adresler için de net sonuç',
      'CSV veya Excel, dosya başına en fazla 50.000 adres',
      'İşlem bitince temiz listeyi indirin',
    ],
  },
  catchAll: {
    title: 'Catch-all adresler neden ayrıca kontrol edilmeli',
    intro: (
      <>
        Bazı şirket e-posta sunucuları, gerçek olsun uydurma olsun, her adresi kabul eder. Böyle bir alan adına{' '}
        <Link href="/tr/catch-all-dogrulama" className={link}>catch-all alan adı</Link> denir. Çoğu doğrulama aracı
        bu farkı ayırt edemez. Bu yüzden bu adresleri &quot;riskli&quot; olarak işaretler ve kararı size bırakır.
      </>
    ),
    others: 'Çoğu e-posta doğrulama aracı',
    othersDetail: 'Catch-all, net sonuç yok',
    ourDetail: 'Catch-all, posta kutusu bulundu',
    risky: 'Riskli',
    deliverable: 'Teslim edilebilir',
    othersText: 'Karar size kalır. Ya e-postayı gönderip bounce riskini alırsınız ya da gerçek olabilecek bir kişiyi silersiniz.',
    ourText: 'Adresin gerçek olduğunu bilirsiniz ve e-postayı gönderirsiniz. Tahmin etmeniz gerekmez.',
  },
  features: {
    title: 'Email doğrulama: toplu temizleme, API ve entegrasyonlar tek kredi bakiyesiyle',
    intro: 'Bir liste yükleyin, API\'yi çağırın veya CRM\'inizi bağlayın. Her yöntem aynı e-posta adresi doğrulama kontrolünü çalıştırır.',
    items: [
      { title: 'Toplu liste temizleme', body: 'CSV veya Excel dosyası yükleyin, sonuçları birkaç dakika içinde alın.', points: ['Dosya başına en fazla 50.000 adres', 'Temiz listeyi CSV olarak indirin'], link: 'Bir listeyi ücretsiz temizleyin' },
      { title: 'Catch-all doğrulama', body: 'Catch-all alan adlarında "riskli" yerine net bir sonuç.', points: ['Diğer her kontrol gibi 1 kredi', 'Mimecast ve Proofpoint gibi ağ geçitlerinin arkasında da çalışır'], link: 'Catch-all doğrulama nasıl çalışır' },
      { title: 'Geliştiriciler için API', body: 'Kayıt formlarınızda ve uygulamalarınızda adresleri doğrulayın.', points: ['Her çağrıda tek bir adres veya bütün bir liste', 'API anahtarları panelinizde'], link: 'API dokümantasyonu' },
      { title: 'CRM ve uygulama entegrasyonları', body: 'Temizlenmiş kişileri HubSpot, Mailchimp ve diğer araçlara gönderin.', points: ['Zaten kullandığınız araçlarla çalışır', 'Diğer tüm araçlar için Zapier ve n8n'], link: 'Tüm entegrasyonları görün' },
      { title: 'Kullandıkça ödeme', body: 'Tüm fiyatlar herkese açıktır. Kredilerin süresi dolmaz.', points: ['Aylık taahhüt yok', 'Yalnızca ihtiyacınız olduğunda yeni kredi alın'], link: 'Tüm fiyatları görün' },
      { title: 'Öncelikli destek', body: 'Bir konuda takıldınız mı? Mühendislerimiz size doğrudan yardım eder.', points: ['Bot değil, gerçek kişiler', 'Bize e-posta gönderin veya iletişim formunu kullanın'], link: 'Destek ekibine ulaşın' },
    ],
    preview: {
      done: 'Tamamlandı',
      deliverable: 'Teslim edilebilir',
      undeliverable: 'Teslim edilemez',
      otherTools: 'Diğer araçlar',
      risky: 'Riskli',
      credit: '1 kredi',
      email: '1 e-posta',
      creditNote: 'Catch-all doğrulama dahil',
      reply: '24 saat',
      replyNote: 'Her zamanki yanıt süremiz.',
    },
  },
  pricing: {
    id: 'fiyatlar',
    claimTop: 'Düşük fiyat.',
    claimBottom: 'Yüksek değer.',
    fallbackTitle: 'ABD doları ile basit fiyatlandırma',
    priceLine: (p) => `10.000 e-posta ${p}, catch-all kontrolleri dahil.`,
    claim: { before: '', link: 'Diğer doğrulama araçlarıyla karşılaştırın', after: '.' },
    text: 'Gizli ücret yok. Gönderim hacminize göre tek seferlik kredi paketleri veya aylık planlar arasından seçim yapın.',
  },
  switcher: {
    id: 'alternatifler',
    title: 'Başka bir doğrulama aracından mı geçiyorsunuz?',
    intro: 'Giggal.ai\'ı diğer e-posta doğrulama araçlarıyla catch-all desteği, fiyat ve doğruluk açısından karşılaştırın.',
    items: [
      { name: 'ZeroBounce', href: '/tr/zerobounce-alternatifi', blurb: 'ZeroBounce\'un riskli olarak işaretlediği catch-all adresler için de sonuç alın.' },
      { name: 'NeverBounce', href: '/tr/neverbounce-alternatifi', blurb: 'Kullandıkça ödeme ve süresi hiç dolmayan krediler.' },
      { name: 'Snov.io', href: '/tr/snovio-alternatifi', blurb: 'Bir e-posta gönderim platformunun modülü değil, ayrı bir doğrulama aracı.' },
      { name: 'ZeroBounce vs NeverBounce', href: '/tr/karsilastirma/zerobounce-vs-neverbounce', blurb: 'İki aracın catch-all desteği, fiyatları ve kredileri açısından karşılaştırması.' },
    ],
    all: '28 doğrulama aracının tümünü karşılaştırın (İngilizce)',
  },
  integrations: {
    title: 'Pazarlama araçlarınızı bağlayın',
    sub: 'Giggal.ai, önde gelen CRM ve e-posta servis sağlayıcılarıyla doğrudan bağlantı kurar ve temizlenmiş kişileri otomatik olarak senkronize eder.',
    more: '80\'den fazla entegrasyon',
    alt: (n) => `Giggal.ai e-posta doğrulama için ${n} entegrasyonu`,
  },
  reviewBadges: REVIEW_BADGES.tr,
  reviewWall: REVIEW_WALL.tr,
  mcp: MCP.tr,
  faq: {
    title: 'Sık sorulan sorular',
    sub: 'Catch-all kontrolleri, doğruluk, fiyatlar ve başlangıç hakkında kısa yanıtlar.',
    more: 'Başka bir sorunuz mu var?',
    moreLink: 'Bize mesaj gönderin',
    items: [
      {
        q: 'Giggal.ai\'ı diğer doğrulama araçlarından ayıran nedir?',
        a: 'Giggal.ai, catch-all alan adlarındaki adresler ve güvenli e-posta ağ geçitlerinin (SEG) arkasındaki adresler için de net bir sonuç verir: geçerli veya geçersiz. Mimecast, Proofpoint ve Barracuda birer SEG örneğidir. Diğer araçlar catch-all adresleri "riskli", SEG arkasındaki adresleri "bilinmiyor" olarak işaretler ve kontrolü orada bırakır. Tipik bir satış ve pazarlama listesinde kişilerin yaklaşık %30\'u catch-all alan adlarındadır.',
      },
      {
        q: 'Doğrulama ne kadar doğru?',
        a: 'Kurumsal e-posta listelerinde yaklaşık %98,5. Temizlenmiş listelerde bounce oranı genellikle %3\'ün altındadır. Sonucu "bilinmiyor" olan kontrollerde krediniz iade edilir.',
      },
      {
        q: 'Krediler nasıl kullanılır?',
        a: 'Her kontrol, adres türünden bağımsız olarak bir kredi kullanır. Catch-all alan adlarındaki ve ağ geçitlerinin arkasındaki adresler de buna dahildir. Kredilerin süresi dolmaz. İlk 1.000 kredi ücretsizdir ve kredi kartı gerekmez.',
      },
      {
        q: 'Dosya yükleyebilir miyim?',
        a: 'Evet. CSV veya Excel dosyası yükleyebilirsiniz, dosya başına en fazla 50.000 adres. Büyük listelerde bile sonuçlar birkaç dakika içinde hazır olur. Temizlenmiş listeyi CSV olarak indirebilirsiniz.',
      },
      {
        q: 'API var mı?',
        a: 'Evet. Tekli kontrol ve toplu e-posta doğrulama için bir REST API sunuyoruz. Bir MCP sunucumuz da var. Bu sunucuyla Claude, ChatGPT ve Cursor içinden e-posta adreslerini kontrol edebilirsiniz.',
      },
      {
        q: 'Hesap açmadan tek bir adresi kontrol edebilir miyim?',
        a: 'Evet, ücretsiz mail adresi doğrulama aracıyla. Hesap veya kredi kartı gerekmez ve alıcıya hiçbir e-posta gönderilmez.',
      },
    ],
  },
  ctaHeadline: '1.000 ücretsiz e-posta doğrulamasıyla başlayın',
}

export default function HomeTr() {
  return <HomeL10n locale="tr" content={content} />
}
