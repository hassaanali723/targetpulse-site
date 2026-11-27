// Turkish no2bounce alternative page. Translated from app/(en)/no2bounce-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) are in
// lib/i18n/altBrands/tr/facts.ts. Suffixes after a USD amount follow "dolar".
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'tr',
  slug: 'no2bounce',
  path: '/tr/no2bounce-alternatifi',
  cluster: 'altNo2bounce',
  metaTitle: 'no2bounce alternatifi: fiyatlar ve catch-all | Giggal.ai',
  ogTitle: 'Catch-all mail doğrulama için no2bounce alternatifi',
  desc: "no2bounce 10.000 kredi için $20 alır. Giggal.ai, catch-all ve ağ geçidi arkasındaki 10.000 maili $9,90'a doğrular. 1.000 ücretsiz kredi, kart gerekmez.",
  h1: ['Mail başına fiyatı daha düşük ', 'no2bounce alternatifi', ''],
  heroP:
    'no2bounce, süresi hiç dolmayan kullandıkça öde kredileri satan bir mail doğrulama aracıdır. Giggal.ai da aynı şekilde çalışır. Farklar fiyat, ücretsiz krediler ve iki aracın catch-all adresleri kontrol etme yöntemidir.',
  bluf: [
    { k: 'Fiyat', v: "10.000 kredi no2bounce'ta $20, Giggal.ai'da $9,90 tutar." },
    { k: 'Yüksek miktarda', v: "Bir milyon kredi no2bounce'ta $679, Giggal.ai'da $680 tutar." },
    { k: 'Ücretsiz krediler', v: 'no2bounce 100 ücretsiz kredi verir. Giggal.ai 1.000 kredi verir. İkisi de kredi kartı istemez.' },
    { k: 'Kredilerin süresi', v: 'İki araçta da kredilerin süresi hiç dolmaz.' },
  ],
  about: {
    heading: 'no2bounce nedir?',
    paragraphs: [
      'no2bounce bir e-posta doğrulama hizmetidir. Tek tek adresleri, toplu listeleri ve API üzerinden gönderilen adresleri doğrular. Aynı kredilerle e-posta adresi bulma aracı, alan adı araması ve e-posta puanlama da kullanılır.',
      'no2bounce, catch-all alan adlarında posta kutusunun var olup olmadığını doğrulamak için kontrollü test mesajları gönderir. %99,6 doğruluk iddia eder.',
      'Bağlandığı araçlar arasında HubSpot, Salesforce, Clay, Zapier, Google Sheets ve Zoho CRM vardır.',
    ],
  },
  reasons: {
    heading: 'Kullanıcılar neden no2bounce alternatifi arıyor',
    items: [
      { k: '10.000 kredide fiyat', v: 'no2bounce 10.000 kredi için $20 alır. Giggal.ai aynı miktar için $9,90 alır.' },
      { k: '100.000 kredide', v: "100.000 kredi no2bounce'ta $149, Giggal.ai'da $76 tutar." },
      { k: 'Ücretsiz deneme', v: 'no2bounce 100 ücretsiz kredi verir. Giggal.ai 1.000 kredi verir. Bu miktar, gerçek bir örnek listeyi denemeye yeter.' },
    ],
  },
  catchAllHeading: 'no2bounce ve Giggal.ai catch-all adresleri nasıl kontrol eder',
  catchAllProse:
    'no2bounce, catch-all posta kutularını doğrulamak için kendi sunucuları üzerinden kontrollü test mesajları gönderir. Giggal.ai catch-all adresler için sonuç verir. Her adres 1 kredi kullanır ve ayrı bir ücret yoktur. Giggal.ai ayrıca adı belirtilen 15 güvenli e-posta ağ geçidinin (SEG) arkasındaki adresleri kontrol eder. Bunlar arasında Proofpoint, Mimecast ve Barracuda vardır.',
  pricingHeading: 'no2bounce fiyatları: Giggal.ai ile karşılaştırma',
  pricingProse:
    'no2bounce kullandıkça öde kredi paketleri satar. Paketler $20 karşılığında 10.000 krediden başlar ve 50 milyon krediye kadar çıkar. 100.000 kredi $149, bir milyon kredi $679 tutar. Aylık paketler %15, yıllık paketler %20 daha ucuzdur.',
  pricingExtra: [
    "Giggal.ai'da 10.000 kredi $9,90, 100.000 kredi $76 ve bir milyon kredi $680 tutar. Seçmeniz gereken bir paket yoktur. İki araçta da kredilerin süresi hiç dolmaz.",
  ],
  strengths: {
    heading: 'no2bounce hangi durumlarda iyi bir seçimdir',
    intro: 'no2bounce şu ihtiyaçlar için makul bir seçimdir:',
  },
  others: {
    heading: 'Diğer no2bounce alternatifleri',
    intro: "Bu doğrulama araçları da süresi hiç dolmayan krediler satar. Fiyatlar, 27 Kasım 2026'da her sağlayıcının kendi sitesinden alınmıştır.",
    items: [
      { name: 'Bounceless', text: '10.000 kredi $29, bir milyon kredi $579 tutar. İş e-posta adresiyle ayda 1.000 ücretsiz kredi verir.' },
      { name: 'QuickEmailVerification', text: '10.000 kredi $60 tutar. Her gün 100 ücretsiz kredi verir.' },
      { name: 'Scrubby', text: "Kullandıkça öde fiyatı kredi başına $0,008'dır. Doğrulanması zor adresler için bir Deep Verification seçeneği vardır." },
    ],
  },
  testHeading: "no2bounce ve Giggal.ai'ı tek bir listede karşılaştırın",
  testSteps: [
    "Daha önce no2bounce'ta kontrol ettiğiniz bir listeyi dışa aktarın.",
    'Listeyi burada 1.000 ücretsiz krediyle kontrol edin. Kredi kartı gerekmez.',
    "Catch-all satırlarını no2bounce'un verdiği sonuçlarla karşılaştırın.",
  ],
  ctaHeadline: 'Aynı iş, mail başına daha düşük fiyatla',
  faqs: [
    {
      q: "no2bounce'un fiyatı ne kadar?",
      a: "no2bounce'un kullandıkça öde paketleri 10.000 kredi için $20'dan başlar. 100.000 kredi $149, bir milyon kredi $679 tutar. Aylık paketler %15, yıllık paketler %20 daha ucuzdur.",
    },
    {
      q: 'no2bounce ücretsiz mi?',
      a: 'no2bounce kredi kartı istemeden 100 ücretsiz kredi verir ve bu kredilerin süresi hiç dolmaz. Sonrasında kredi satın alırsınız. Giggal.ai kredi kartı istemeden 1.000 ücretsiz kredi verir.',
    },
    {
      q: 'Giggal.ai iyi bir no2bounce alternatifi mi?',
      a: 'Evet. İki araç da süresi hiç dolmayan krediler satar. Giggal.ai 10.000 ve 100.000 kredide daha ucuzdur ve on kat fazla ücretsiz kredi verir. Bir milyon kredide iki fiyat neredeyse aynıdır.',
    },
    {
      q: 'no2bounce kredilerinin süresi dolar mı?',
      a: 'Hayır. Satın aldığınız no2bounce kredileri, siz kullanana kadar hesabınızda kalır. Abonelik kredileri, abonelik aktif olduğu sürece geçerlidir. Giggal.ai kredilerinin süresi hiç dolmaz.',
    },
  ],
  breadcrumb: 'no2bounce alternatifi',
}

export default cfg
