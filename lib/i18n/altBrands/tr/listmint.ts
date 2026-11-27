// Turkish Listmint alternative page. Translated from app/(en)/listmint-alternative
// (2026-11-27). The competitor's words (free start, strengths) come from
// lib/i18n/altBrands/tr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'tr',
  slug: 'listmint',
  path: '/tr/listmint-alternatifi',
  cluster: 'altListmint',
  metaTitle: 'Listmint alternatifi: catch-all mail doğrulama | Giggal.ai',
  ogTitle: 'Catch-all mail doğrulama için Listmint alternatifi',
  desc: "Listmint ayda $99'dır ve 5.000 catch-all kredisi içerir. Giggal.ai catch-all adresleri 1 krediyle kontrol eder: 10.000 kredi $9,90'dır ve süresi hiç dolmaz.",
  h1: ['Tek bir kredi havuzu olan ', 'Listmint alternatifi', ''],
  heroP:
    'Listmint, catch-all adreslere odaklanan bir mail doğrulama aracıdır. Her paketi standart kredilere ve daha küçük bir catch-all kredi havuzuna böler. Giggal.ai tek bir havuz kullanır. Bir catch-all kontrolü, diğer tüm e-posta adresleri gibi 1 kredi tutar.',
  bluf: [
    { k: 'Krediler', v: "Listmint'in iki kredi havuzu vardır. Giggal.ai'ın tek bir havuzu vardır ve e-posta başına 1 kredi kullanır." },
    { k: 'Fiyat', v: "Listmint Starter ayda $99'dır. Giggal.ai'da 10.000 kredi $9,90'dır ve bir kez satın alınır." },
    { k: 'Catch-all', v: "Listmint Starter ayda 5.000 catch-all kredisi verir. Giggal.ai'da ayrı bir sınır yoktur." },
    { k: 'Ağ geçitleri', v: 'Giggal.ai, adı belirtilen 15 e-posta ağ geçidinin arkasındaki adresleri kontrol eder. Listmint hiçbir ağ geçidinin adını vermez.' },
  ],
  about: {
    heading: 'Listmint nedir?',
    paragraphs: [
      "Listmint, listmint.io'nun sunduğu bir e-posta doğrulama hizmetidir. Standart SMTP kontrolleri ve ayrı bir catch-all kontrolü yapar. Listmint, catch-all adresleri elle doğruladığını söyler.",
      'Catch-all kredileri, standart kredilerinden daha pahalıdır. Bu yüzden her paket büyük bir standart kredi havuzu ve daha küçük bir catch-all kredi havuzu içerir.',
      'Listmint, catch-all adresleri gerçek zamanlı olarak doğrulayabildiğini de söyler.',
    ],
  },
  reasons: {
    heading: 'Kullanıcılar neden Listmint alternatifi arıyor',
    items: [
      { k: 'Catch-all sınırı', v: 'Starter ayda 5.000 catch-all kredisi içerir. Büyük bir B2B listesi bunların hepsini kullanabilir.' },
      { k: 'Aylık paket', v: 'Listmint aylık faturalanır. Giggal.ai kredileri bir kez satın alınır ve süreleri hiç dolmaz.' },
      { k: 'Miktar', v: "Yayınlanan en büyük paket, 50.000 standart kredi içeren Agency'dir. Daha fazlası için Enterprise teklifi gerekir." },
      { k: 'Ağ geçitleri', v: 'Listmint, arkasındaki adresleri kontrol edebildiği güvenli e-posta ağ geçitlerinin adını vermez.' },
    ],
  },
  catchAllHeading: 'Catch-all adreslerde Listmint ve Giggal.ai karşılaştırması',
  catchAllProse:
    "Listmint, catch-all kontrollerini ayrı bir kredi havuzundan ücretlendirir. $99'lık Starter paketinde bu havuz ayda 5.000 kredidir. Giggal.ai'da ayrı bir havuz yoktur. Catch-all olsun ya da olmasın, her adres 1 kredi tutar. Giggal.ai bir yanıt alamadığında sonuç bilinmiyor olur ve kredi iade edilir.",
  pricingHeading: 'Listmint fiyatları ve Giggal.ai karşılaştırması',
  pricingProse:
    "Listmint Starter, 20.000 standart kredi ve 5.000 catch-all kredisi için ayda $99'dır. Agency, 50.000 standart kredi ve 10.000 catch-all kredisi için ayda $187'dır. Enterprise paketinin fiyatı talep üzerine verilir.",
  pricingExtra: [
    "Giggal.ai'da paket kademeleri yoktur. 10.000 kredi $9,90, 100.000 kredi $76'dır. Bu kredilerin hepsini catch-all adresler için kullanabilirsiniz.",
  ],
  strengths: {
    heading: 'Listmint ne zaman iyi bir seçimdir',
    intro: 'Şunları istiyorsanız Listmint mantıklı bir seçimdir:',
  },
  others: {
    heading: 'Diğer Listmint alternatifleri',
    intro: "Bu doğrulama araçları da catch-all adresler için sonuç verir. Fiyatlar, 27 Kasım 2026'da her sağlayıcının kendi sitesinden alınmıştır.",
    items: [
      { name: 'Scrubby', text: "Catch-all alan adlarını ve ağ geçidiyle korunan alan adlarını 1 krediyle kontrol eder. Deep Verification 3 kredi tutar ve gerçek e-postalar gönderir. Kullandıkça öde fiyatı kredi başına $0,008'dır." },
      { name: 'no2bounce', text: "Catch-all posta kutularını doğrulamak için test mesajları gönderir. 10.000 kullandıkça öde kredisi $20'dır ve süresi hiç dolmaz." },
      { name: 'Allegrow', text: "Satış ekipleri için catch-all kişilerde geçerli veya geçersiz sonucu verir. Starter paketi ayda 5.000 kişi için $99'dır." },
    ],
  },
  testHeading: 'Bir Listmint listesini Giggal.ai ile kontrol edin',
  testSteps: [
    "Listmint'te daha önce kontrol ettiğiniz bir listeyi dışa aktarın.",
    'Listeyi burada 1.000 ücretsiz krediyle kontrol edin. Kredi kartı gerekmez.',
    "Catch-all satırlarını, Listmint'in verdiği sonuçlarla karşılaştırın.",
  ],
  ctaHeadline: 'Catch-all adresleri ayrı bir kredi sınırı olmadan kontrol edin',
  faqs: [
    {
      q: 'Listmint fiyatı ne kadar?',
      a: "Listmint Starter ayda $99'dır ve 20.000 standart kredi ile 5.000 catch-all kredisi içerir. Agency ayda $187'dır ve 50.000 standart kredi ile 10.000 catch-all kredisi içerir. Enterprise paketinin fiyatı talep üzerine verilir.",
    },
    {
      q: "Listmint'te neden ayrı catch-all kredileri var?",
      a: 'Listmint, catch-all kredilerinin normal SMTP kredilerinden daha pahalı olduğunu söyler. Bunun nedeni, catch-all kontrolünün daha fazla iş gerektirmesidir. Giggal.ai, catch-all dahil her adres için 1 kredi alır.',
    },
    {
      q: 'Giggal.ai iyi bir Listmint alternatifi mi?',
      a: "Çok sayıda catch-all adres içeren mail listelerini doğruluyorsanız evet. Giggal.ai'da ayrı bir catch-all sınırı ve aylık paket yoktur. 10.000 kredi $9,90'dır.",
    },
    {
      q: "Listmint'in ücretsiz denemesi var mı?",
      a: 'Listmint ücretsiz bir başlangıç sunar, ancak bunun kaç kredi içerdiğini yayınlamaz. Giggal.ai kredi kartı istemeden 1.000 ücretsiz kredi verir.',
    },
  ],
  breadcrumb: 'Listmint alternatifi',
}

export default cfg
