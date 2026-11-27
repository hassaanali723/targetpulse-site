// Turkish Bounceless alternative page. Translated from app/(en)/bounceless-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) are in
// lib/i18n/altBrands/tr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'tr',
  slug: 'bounceless',
  path: '/tr/bounceless-alternatifi',
  cluster: 'altBounceless',
  metaTitle: 'Bounceless alternatifi: Bounceless.io fiyatları | Giggal.ai',
  ogTitle: 'Ağ geçidi arkasındaki mailleri doğrulayan Bounceless alternatifi',
  desc: "Bounceless 10.000 kredi için $29 alır. Giggal.ai $9,90'dır, catch-all ve güvenli e-posta ağ geçidi arkasındaki mailleri kontrol eder. Kredilerin süresi dolmaz.",
  h1: ['Ağ geçidi arkasındaki mailleri de kontrol eden ', 'Bounceless alternatifi', ''],
  heroP:
    'Bounceless, tek seferlik kredi paketleri ve aylık abonelikler sunan düşük maliyetli bir mail doğrulama aracıdır. Standart kontrolü artık catch-all bilgisini de içerir. Giggal.ai da catch-all adresler için sonuç verir. Ayrıca adı belirtilen 15 güvenli e-posta ağ geçidinin arkasındaki adresleri kontrol eder.',
  bluf: [
    { k: 'Fiyat', v: "10.000 kredi Bounceless'te $29, Giggal.ai'da $9,90 tutar." },
    { k: 'Yüksek miktarda', v: "Bir milyon kredi Bounceless'te $579, Giggal.ai'da $680 tutar." },
    { k: 'Ağ geçitleri', v: 'Giggal.ai, arkasındaki adresleri kontrol ettiği 15 e-posta ağ geçidinin adını verir. Bounceless vermez.' },
    { k: 'Ücretsiz krediler', v: 'Bounceless iş e-posta adresiyle ayda 1.000 kredi verir. Giggal.ai bir kez 1.000 kredi verir.' },
  ],
  about: {
    heading: 'Bounceless nedir?',
    paragraphs: [
      'Bounceless, bounceless.io sitesinden sunulan bir e-posta doğrulama hizmetidir. Toplu listeleri ve tek tek adresleri doğrular. Bir API ve bir MCP sunucusu sunar.',
      "Hesapta gönderen durumu, gelen kutusuna ulaşma ve kayıt formu kontrolleri de vardır. Bounceless, 39.000'den fazla müşteri hesabı olduğunu söyler.",
      "Bounceless'in henüz yerel uygulama entegrasyonları yoktur. Mailchimp, HubSpot ve ActiveCampaign gibi araçlar için CSV ve API kılavuzları sunar.",
    ],
  },
  reasons: {
    heading: 'Kullanıcılar neden Bounceless alternatifi arıyor',
    items: [
      { k: 'Ağ geçitleri', v: 'Bounceless, Proofpoint veya Mimecast gibi güvenli e-posta ağ geçitlerinin adını vermez.' },
      { k: 'Entegrasyonlar', v: 'Henüz yerel uygulama entegrasyonları yoktur, yalnızca CSV ve API kılavuzları vardır.' },
      { k: '10.000 kredide fiyat', v: '10.000 kredi $29 tutar. Giggal.ai aynı miktar için $9,90 alır.' },
      { k: 'İş e-posta adresi', v: 'Aylık ücretsiz krediler için iş e-posta adresi gerekir. Herkese açık e-posta servislerindeki adresler bu kredileri almaz.' },
    ],
  },
  catchAllHeading: 'Catch-all adreslerde Bounceless ve Giggal.ai',
  catchAllProse:
    "Bounceless, 1 kredilik kontrolüne catch-all bilgisini dahil eder ve doğrulanmamış sonuçları ücretlendirmez. Giggal.ai da catch-all adresler için 1 krediyle sonuç verir ve bilinmiyor sonuçlarında krediyi iade eder. Asıl fark güvenli e-posta ağ geçitleridir. Giggal.ai bunlardan 15'inin arkasındaki adresleri kontrol eder. Bunlar arasında Proofpoint, Mimecast ve Barracuda vardır.",
  pricingHeading: 'Bounceless fiyatları: Giggal.ai ile karşılaştırma',
  pricingProse:
    "Bounceless'in kullandıkça öde kredi paketleri 5.000 kredi için $19, 10.000 kredi için $29, 100.000 kredi için $159 ve bir milyon kredi için $579 tutar. Aylık abonelikler 6.500 kredi için $19'dan başlar. Kredi paketlerinden ve aboneliklerden gelen kredilerin süresi hiç dolmaz.",
  pricingExtra: [
    "Giggal.ai'da 10.000 kredi $9,90, 100.000 kredi $76 ve bir milyon kredi $680 tutar. Bir milyon kredide Bounceless daha ucuzdur. 10.000 ve 100.000 kredide Giggal.ai daha ucuzdur.",
  ],
  strengths: {
    heading: 'Bounceless hangi durumlarda iyi bir seçimdir',
    intro: "Bounceless'in şu güçlü yönleri vardır:",
  },
  others: {
    heading: 'Diğer Bounceless alternatifleri',
    intro: "Bu doğrulama araçlarının fiyatları Bounceless'e yakındır. Fiyatlar, 27 Kasım 2026'da her sağlayıcının kendi sitesinden alınmıştır.",
    items: [
      { name: 'no2bounce', text: '10.000 kredi $20, bir milyon kredi $679 tutar. Kredilerin süresi hiç dolmaz.' },
      { name: 'QuickEmailVerification', text: 'Her gün 100 ücretsiz kredi verir. 10.000 kalıcı kredi $60 tutar.' },
      { name: 'Mailfloss', text: '41 e-posta platformuna bağlanır ve geçersiz adresleri her gün kaldırır. 10.000 ön ödemeli kredi $40 tutar.' },
    ],
  },
  testHeading: 'Tek bir listeyi Bounceless ve Giggal.ai ile kontrol edin',
  testSteps: [
    "Daha önce Bounceless'te kontrol ettiğiniz bir listeyi dışa aktarın.",
    'Listeyi burada 1.000 ücretsiz krediyle kontrol edin. Kredi kartı gerekmez.',
    "Catch-all satırlarını Bounceless'in verdiği catch-all bilgisiyle karşılaştırın.",
  ],
  ctaHeadline: 'Catch-all ve ağ geçidi arkasındaki mailler, adres başına 1 kredi',
  faqs: [
    {
      q: "Bounceless'in fiyatı ne kadar?",
      a: "Bounceless'in kullandıkça öde kredi paketleri 5.000 kredi için $19'dan başlar. 10.000 kredi $29, 100.000 kredi $159 ve bir milyon kredi $579 tutar. Aylık abonelikler 6.500 kredi için $19'dan başlar.",
    },
    {
      q: 'Bounceless ücretsiz mi?',
      a: 'İş e-posta adresiyle kaydolursanız Bounceless ayda 1.000 ücretsiz kredi verir. Kredi kartı gerekmez. Giggal.ai kredi kartı istemeden bir kez 1.000 ücretsiz kredi verir.',
    },
    {
      q: 'Bounceless catch-all mailleri doğrular mı?',
      a: 'Evet. Bounceless, catch-all bilgisini ek ücret almadan 1 kredilik standart kontrolüne dahil eder. Doğrulanmamış sonuçlar ücretlendirilmez.',
    },
    {
      q: 'Giggal.ai iyi bir Bounceless alternatifi mi?',
      a: 'Evet, listenizde çok sayıda şirket alan adı varsa. Giggal.ai, adı belirtilen 15 güvenli e-posta ağ geçidinin arkasındaki adresleri kontrol eder ve 10.000 kredi için $9,90 alır.',
    },
  ],
  breadcrumb: 'Bounceless alternatifi',
}

export default cfg
