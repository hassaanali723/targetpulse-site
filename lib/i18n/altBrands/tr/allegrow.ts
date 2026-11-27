// Turkish Allegrow alternative page. Translated from app/(en)/allegrow-alternative
// (2026-11-27). The competitor's words (trial, strengths, estimate note) come
// from lib/i18n/altBrands/tr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'tr',
  slug: 'allegrow',
  path: '/tr/allegrow-alternatifi',
  cluster: 'altAllegrow',
  metaTitle: 'Allegrow alternatifi: Allegrow fiyatları 2026 | Giggal.ai',
  ogTitle: 'E-posta başına ödeme yaptığınız Allegrow alternatifi',
  desc: "Allegrow fiyatları ayda 5.000 kişi için $99'dan başlar. Giggal.ai catch-all ve ağ geçidi arkasındaki mailleri doğrular: 10.000 kredi $9,90, süresi dolmaz.",
  h1: ['E-posta başına ödeme yaptığınız ', 'Allegrow alternatifi', ''],
  heroP:
    "Allegrow, satış ekipleri için bir e-posta doğrulama ve teslim edilebilirlik platformudur. Ayda 5.000 kişi için $99'dan başlayan aylık bir paket olarak satılır. Giggal.ai tek seferlik kredilerle mail doğrulama yapar. 10.000 kredi $9,90'dır ve süresi hiç dolmaz.",
  bluf: [
    { k: 'Faturalama', v: 'Allegrow aylık bir pakettir. Giggal.ai kredileri bir kez satın alınır.' },
    { k: 'Fiyat', v: "Allegrow Starter ayda 5.000 kişi için $99'dır. Giggal.ai'da 10.000 kredi $9,90'dır." },
    { k: 'Catch-all', v: "İki araç da catch-all adreslerde geçerli veya geçersiz sonucu verir. İkisi de Proofpoint ve Mimecast'i adıyla belirtir." },
    { k: 'Ek araçlar', v: 'Allegrow ayrıca gelen kutusuna ulaşmayı ve alan adı durumunu takip eder. Giggal.ai bunu yapmaz.' },
  ],
  about: {
    heading: 'Allegrow nedir?',
    paragraphs: [
      'Allegrow, satış ve gelir ekipleri için bir B2B e-posta doğrulama platformudur. Catch-all adresler dahil kişileri doğrular ve geçerli veya geçersiz sonucunu verir. Allegrow, bir catch-all adresi doğrulamak için hiçbir zaman e-posta göndermediğini söyler.',
      'Bağlı posta kutuları için gönderen itibarını ve gelen kutusuna ulaşmayı da takip eder. Outreach, Salesloft, HubSpot, Apollo, ZoomInfo ve Clay ile entegre çalışır.',
      'Allegrow SOC 2 raporları sunar. En üst paketinde SSO, ek bir özellik olarak sunulur.',
    ],
  },
  pricingFirst: true,
  pricingHeading: "2026'da Allegrow fiyatları",
  pricingProse:
    "Allegrow Starter ayda 5.000 kişi için $99'dır. Ek kişiler 1.000 kişi başına $8'dır. Scale Plus Unlimited, yıllık faturalamayla ayda $1.340'dır ve kredi sınırı yoktur. API paketinin fiyatı talep üzerine verilir.",
  pricingExtra: [
    "Buna göre Starter ile ayda 10.000 kişi $139 tutar. Bu rakamı yayınlanmış fiyatlardan biz hesapladık. Allegrow'un listelediği bir paket değildir. Giggal.ai 10.000 krediyi $9,90'a, 100.000 krediyi $76'a bir kez satar.",
  ],
  reasons: {
    heading: 'Ekipler neden Allegrow alternatifi arıyor',
    items: [
      { k: 'Aylık maliyet', v: 'Starter her ay $99 tutar. Yılda birkaç kez doğrulama yapan ekipler, kullanmadıkları aylar için de ödeme yapar.' },
      { k: 'Entegrasyonlar', v: "HubSpot, Outreach ve Salesloft için yerel entegrasyonlar Scale Plus paketindedir. Starter, Clay'e API anahtarıyla bağlanır." },
      { k: 'Deneme sınırları', v: '14 günlük deneme 1.000 adresi kapsar. Entegrasyonlar ve API erişimi denemeye dahil değildir.' },
    ],
  },
  catchAllHeading: 'Catch-all ve ağ geçidi adreslerinde Allegrow ve Giggal.ai karşılaştırması',
  catchAllProse:
    "Allegrow da Giggal.ai da catch-all adreslerde geçerli veya geçersiz sonucu verir. İkisi de arkasındaki adresleri kontrol ettiği ağ geçitleri arasında Proofpoint ve Mimecast'i adıyla belirtir. Ana fark faturalamadır. Allegrow aylık bir kişi kotası kullanır. Giggal.ai, süresi hiç dolmayan kredilerden adres başına 1 kredi düşer.",
  strengths: {
    heading: "Allegrow'un iyi yaptığı işler",
    intro: 'Allegrow doğrulamadan fazlasını kapsar. Şu ihtiyaçlar için daha iyi bir seçimdir:',
  },
  others: {
    heading: 'Diğer Allegrow alternatifleri',
    intro: "Bu araçlar da catch-all adresleri doğrular. Fiyatlar, 27 Kasım 2026'da her sağlayıcının kendi sitesinden alınmıştır.",
    items: [
      { name: 'Scrubby', text: "Catch-all alan adlarını ve ağ geçidiyle korunan alan adlarını kontrol eder. Kullandıkça öde fiyatı kredi başına $0,008'dır. Aylık paketler $47'dan başlar." },
      { name: 'Listmint', text: "Catch-all adresleri ayrı bir kredi havuzundan kontrol eder. Starter paketi ayda $99'dır ve 20.000 standart kredi ile 5.000 catch-all kredisi içerir." },
      { name: 'Bounceless', text: "1 kredilik kontrolüne catch-all bilgisini dahil eder ve gelen kutusuna ulaşma araçları sunar. 10.000 kredi $29'dır." },
    ],
  },
  testHeading: "Giggal.ai'ı Allegrow sonuçlarınızla karşılaştırın",
  testSteps: [
    "Allegrow'da daha önce kontrol ettiğiniz bir listeyi dışa aktarın.",
    'Listeyi burada 1.000 ücretsiz krediyle kontrol edin. Kredi kartı gerekmez.',
    "Catch-all sonuçlarını, Allegrow'un aynı kişiler için verdiği sonuçlarla karşılaştırın.",
  ],
  ctaHeadline: 'Aynı zor adresleri e-posta başına ödeyerek doğrulayın',
  faqs: [
    {
      q: 'Allegrow fiyatı ne kadar?',
      a: "Allegrow Starter ayda 5.000 kişi için $99'dır. Ek kişiler 1.000 kişi başına $8'dır. Scale Plus Unlimited, yıllık faturalamayla ayda $1.340'dır. API paketinin fiyatı talep üzerine verilir.",
    },
    {
      q: "Allegrow'un ücretsiz denemesi var mı?",
      a: "Evet. Allegrow'un 1.000 adrese kadar 14 günlük bir denemesi vardır ve kredi kartı gerekmez. Entegrasyonlar ve API erişimi denemeye dahil değildir.",
    },
    {
      q: 'Giggal.ai iyi bir Allegrow alternatifi mi?',
      a: "Yalnızca doğrulamaya ihtiyacınız varsa evet. Giggal.ai, catch-all adresler ve ağ geçidi arkasındaki adresler için sonuç verir. 10.000 kredi $9,90'dır. Gelen kutusuna ulaşmayı veya gönderen itibarını takip etmez.",
    },
    {
      q: 'Allegrow catch-all mail adreslerini doğrulamak için e-posta gönderir mi?',
      a: 'Hayır. Allegrow, bir catch-all adresi doğrulamak için hiçbir zaman e-posta göndermediğini söyler.',
    },
    {
      q: "Allegrow'un sınırsız paketi var mı?",
      a: "Evet. Scale Plus Unlimited, yıllık faturalamayla ayda $1.340'dır. Entegrasyonlar veya CSV üzerinden sınırsız doğrulama sunar. Giggal.ai'da sınırsız paket yoktur.",
    },
  ],
  breadcrumb: 'Allegrow alternatifi',
}

export default cfg
