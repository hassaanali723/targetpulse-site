// Turkish Scrubby alternative page. Translated from app/(en)/scrubby-alternative
// (2026-11-27). Quick Verification and Deep Verification stay in English. The
// competitor's words (free tier, expiry, strengths) are in
// lib/i18n/altBrands/tr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'tr',
  slug: 'scrubby',
  path: '/tr/scrubby-alternatifi',
  cluster: 'altScrubby',
  metaTitle: 'Scrubby alternatifi: Scrubby.io fiyatları | Giggal.ai',
  ogTitle: 'Catch-all ve ağ geçidi arkasındaki mailler için Scrubby alternatifi',
  desc: "Scrubby kredi başına $0,008 alır ve Deep Verification 72 saate kadar sürer. Giggal.ai, catch-all ve ağ geçidi arkasındaki 10.000 maili $9,90'a kontrol eder.",
  h1: ["10.000 maili $9,90'a kontrol eden ", 'Scrubby alternatifi', ''],
  heroP:
    'Scrubby, catch-all adresleri ve ağ geçidiyle korunan mail adreslerini doğrular. Giggal.ai da aynı zor adreslere odaklanır. Farklar fiyatta ve kontrollerin işleyişindedir. Scrubby kredi başına $0,008 alır. Giggal.ai 10.000 mail için $9,90 alır.',
  bluf: [
    { k: 'Fiyat', v: "10.000 kredi Scrubby'de $80, Giggal.ai'da $9,90 tutar." },
    { k: 'Derin kontrol', v: "Scrubby'nin Deep Verification kontrolü 3 kredi kullanır ve gerçek e-postalar gönderir. Kesin sonuçların gelmesi 72 saate kadar sürer." },
    { k: 'Ücretsiz krediler', v: 'Scrubby 200 ücretsiz kredi verir. Giggal.ai 1.000 kredi verir. İkisi de kredi kartı istemez.' },
    { k: 'İadeler', v: "Scrubby, satın alımların iade edilmediğini belirtir. Giggal.ai bilinmiyor sonuçlarında krediyi iade eder." },
  ],
  about: {
    heading: 'Scrubby nedir?',
    paragraphs: [
      'Scrubby, scrubby.io sitesinden sunulan bir e-posta doğrulama aracıdır. Diğer doğrulama araçlarının doğrulayamadığı catch-all ve riskli adreslere odaklanır.',
      'İki kontrol türü vardır. Quick Verification 1 kredi kullanır. Standart alan adlarını, catch-all alan adlarını ve SEG korumalı alan adlarını kapsar. Deep Verification 3 kredi kullanır. Scrubby bu kontrolde her adrese gerçek e-postalar gönderir ve kesin sonuçları 72 saat içinde verir.',
      'Scrubby; Clay, Instantly, Smartlead, Apollo ve HubSpot gibi araçlarla bağlantı kurar.',
    ],
  },
  reasons: {
    heading: 'Ekipler neden Scrubby alternatifi arıyor',
    items: [
      { k: 'Fiyat', v: "Kullandıkça öde fiyatı kredi başına $0,008'dır. 10.000 kontrol $80, 100.000 kontrol $800 tutar." },
      { k: 'Bekleme süresi', v: 'Deep Verification sonuçlarının gelmesi 72 saate kadar sürer.' },
      { k: 'Gerçek e-postalar', v: 'Deep Verification, listenizdeki her adrese gerçek e-postalar gönderir.' },
      { k: 'İade yok', v: 'Scrubby, satın alımların iade edilmediğini belirtir.' },
    ],
  },
  catchAllHeading: 'Catch-all ve ağ geçidi arkasındaki maillerde Scrubby ve Giggal.ai',
  catchAllProse:
    "Scrubby de Giggal.ai da catch-all adresler ve ağ geçidiyle korunan adresler için sonuç verir. Giggal.ai her adres için 1 kredi alır ve daha derin bir kademe yoktur. Arkasındaki adresleri kontrol ettiği 15 ağ geçidinin adını verir. Bunlar arasında Proofpoint, Mimecast ve Barracuda vardır. Bir yanıt alamadığında kredi iade edilir.",
  pricingHeading: 'Scrubby fiyatları: Giggal.ai ile karşılaştırma',
  pricingProse:
    "Scrubby'nin kullandıkça öde fiyatı kredi başına $0,008'dır. Yani 10.000 kredi $80 tutar. Aylık paketler şunlardır: 6.000 kredi için $47 olan Starter, 15.000 kredi için $97 olan Growth ve 100.000 kredi için $497 olan Pro. Kullandıkça öde kredilerinin süresi hiç dolmaz. Paket kredileri sonraki aya aktarılır.",
  pricingExtra: [
    "Bir Deep Verification 3 kredi kullanır. Yani 10.000 derin kontrol 30.000 kredi kullanır. Giggal.ai'da 10.000 kredi $9,90, 100.000 kredi $76 tutar.",
  ],
  strengths: {
    heading: 'Scrubby hangi durumlarda iyi bir seçimdir',
    intro: "Scrubby'nin bilmeniz gereken güçlü yönleri vardır:",
  },
  others: {
    heading: 'Diğer Scrubby alternatifleri',
    intro: "Bu araçlar da catch-all adresler için sonuç verir. Fiyatlar, 27 Kasım 2026'da her sağlayıcının kendi sitesinden alınmıştır.",
    items: [
      { name: 'no2bounce', text: 'Catch-all posta kutularını doğrulamak için test mesajları gönderir. 10.000 kredi $20 tutar ve kredilerin süresi hiç dolmaz.' },
      { name: 'Listmint', text: "Catch-all adresleri elle kontrol eder. Starter paketi ayda $99'dır ve 20.000 standart kredi ile 5.000 catch-all kredisi içerir." },
      { name: 'Allegrow', text: "Catch-all kişiler için geçerli ya da geçersiz sonucu verir. Ağ geçidi olarak Proofpoint ve Mimecast'i adıyla belirtir. Starter paketi ayda $99'dır." },
    ],
  },
  testHeading: "Giggal.ai'ı catch-all adreslerinizde deneyin",
  testSteps: [
    "Daha önce Scrubby'de kontrol ettiğiniz bir listeyi dışa aktarın.",
    'Listeyi burada 1.000 ücretsiz krediyle kontrol edin. Kredi kartı gerekmez.',
    "Aynı catch-all adresler için sonuçları Scrubby'nin sonuçlarıyla karşılaştırın.",
  ],
  ctaHeadline: "Aynı zor adresleri 10.000 adres için $9,90'a kontrol edin",
  faqs: [
    {
      q: "Scrubby'nin fiyatı ne kadar?",
      a: "Scrubby'nin kullandıkça öde fiyatı kredi başına $0,008'dır, yani 10.000 kredi $80 tutar. Aylık paketler 6.000 kredi için $47'dan başlar. Deep Verification her e-posta için 3 kredi kullanır.",
    },
    {
      q: 'Scrubby Deep Verification nedir?',
      a: "Scrubby'nin doğrulanması zor adresler için sunduğu daha yavaş kontroldür. 3 kredi kullanır, her adrese gerçek e-postalar gönderir ve kesin sonuçları 72 saat içinde verir.",
    },
    {
      q: "Scrubby'nin ücretsiz denemesi var mı?",
      a: 'Evet. Scrubby kredi kartı istemeden 200 ücretsiz kredi verir. Giggal.ai kredi kartı istemeden 1.000 ücretsiz kredi verir.',
    },
    {
      q: 'Giggal.ai iyi bir Scrubby alternatifi mi?',
      a: 'Evet. İki araç da catch-all adresler ve ağ geçidi arkasındaki adresler için sonuç verir. Giggal.ai 10.000 kredi için $9,90 alır ve bilinmiyor sonuçlarında krediyi iade eder.',
    },
  ],
  breadcrumb: 'Scrubby alternatifi',
}

export default cfg
