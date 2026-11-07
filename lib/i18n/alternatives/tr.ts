// Turkish alternative pages (plans/15): translations of the English pages,
// same sections and FAQ. The searched form "<marka> alternatifi" is in the
// title and H1. Numbers 10.000, prices $9,90 (currency stays USD). Formal "siz".
// Catch-all keeps the English word (SEO-Plan/i18n-batch5-tr-terminology.md).
// Only the three clusters registered for tr: zerobounce, neverbounce, snovio.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const zerobounce: AltL10nConfig = {
  locale: 'tr',
  slug: 'zerobounce',
  path: '/tr/zerobounce-alternatifi',
  cluster: 'altZerobounce',
  metaTitle: 'ZeroBounce alternatifi: fiyat ve catch-all | Giggal.ai',
  ogTitle: 'Catch-all adres içeren listeler için ZeroBounce alternatifi',
  desc: "ZeroBounce 10.000 kredi için $129 alır ve catch-all adreslere sonuç yerine 1 ila 10 arası puan verir. Giggal.ai $9,90'dır ve bu adresleri doğrular.",
  h1: ['Catch-all adresleri doğrulayan ', 'ZeroBounce alternatifi', ''],
  heroP: "Aynı iş, onda bir fiyatına. ZeroBounce catch-all adresler için yalnızca 1 ila 10 arası bir puan verir. Giggal.ai ise geçerli ya da geçersiz diye net bir sonuç verir. 10.000 kredi için $129 yerine $9,90 ödersiniz.",
  bluf: [
    { k: 'Fiyat', v: '10.000 kredi için $129 yerine $9,90. Fark her miktar kademesinde devam eder.' },
    { k: 'Catch-all', v: 'Biz geçerli ya da geçersiz sonucunu veririz. ZeroBounce gerçek bir sonuç değil, 1 ila 10 arası bir puan verir.' },
    { k: 'Minimum alım', v: "Burada minimum alım yoktur. 1.000 ücretsiz krediyle başlarsınız. ZeroBounce'ta en az 2.000 kredi ($39) almanız gerekir." },
    { k: 'Deneyin', v: 'Toplu bir listede kullanabileceğiniz 1.000 ücretsiz kredi. Kredi kartı gerekmez.' },
  ],
  pricingFirst: true,
  pricingHeading: "ZeroBounce ve Giggal.ai fiyat karşılaştırması",
  pricingProse: "ZeroBounce'ta 2.000 kredilik minimum alım ve aylık $99'lık bir abonelik vardır. Giggal.ai'da ikisi de yoktur. Kredi satın alırsınız, istediğiniz kadar saklarsınız ve 1.000 ücretsiz krediyle başlarsınız.",
  pricingProseAfterLadder: true,
  catchAllHeading: 'Giggal.ai catch-all adresleri nasıl doğrular',
  catchAllProse: "Catch-all bir alan adında sunucu her adresi kabul eder. ZeroBounce bu adresleri doğrulamak yerine AI Scoring ile 1 ila 10 arası puanlar. Biz bu adresleri ayrı bir kontrol sürecine gönderir ve dört sonuçtan birini veririz.",
  catchAllProse2: "LeadMagic'in testinde ZeroBounce, catch-all adreslerin %12'si için sonuç verdi.",
  benchmark: true,
  featureNote: "ZeroBounce'un %99,6'lık doğruluk oranı kendi iddiasıdır, ölçülmüş bir değer değildir.",
  testSteps: [
    "Normalde ZeroBounce'a göndereceğiniz listeyi dışa aktarın.",
    'Listeyi buraya yükleyin ve 1.000 ücretsiz krediyle kontrol edin. Kredi kartı gerekmez.',
    'Catch-All etiketli satırları karşılaştırın. Kaç tanesinin gerçek bir sonuçla döndüğünü sayın.',
  ],
  faqs: [
    { q: 'İki aracın fiyatları nasıl karşılaştırılır?', a: '10.000 kredide $129 yerine $9,90, 100.000 kredide $649 yerine $76 ve bir milyon kredide $3.199 yerine $680. İki fiyatın tarihi de tablonun yanında yazılıdır.' },
    { q: "ZeroBounce'ta minimum alım var mı?", a: "Evet, $39 karşılığında 2.000 kredi. Giggal.ai'da minimum alım yoktur. Kredi kartı olmadan 1.000 ücretsiz krediyle başlarsınız. İki araçta da kredilerin süresi dolmaz." },
    { q: "ZeroBounce'un yalnızca puan verdiği catch-all bir adres için Giggal.ai ne yapar?", a: 'Yalnızca bir Catch-All etiketi yerine posta kutusunun gerçek olup olmadığını, yani teslim edilebilir mi teslim edilemez mi olduğunu söyler. Giggal.ai üzerindeki her doğrulama sabit olarak 1 kredi kullanır.' },
    { q: 'Giggal.ai catch-all adreslerde ne kadar doğru?', a: "Giggal.ai %98,5 doğrulukla doğrulama yapar. Çoğu aracın doğrulamadan yalnızca işaretlediği catch-all adreslerde ve SEG korumalı adreslerde gerçek bir teslim edilebilir ya da teslim edilemez sonucu verir." },
    { q: "Ödeme yapmadan önce Giggal.ai'ı deneyebilir miyim?", a: "Evet. Toplu bir yüklemede kullanabileceğiniz 1.000 ücretsiz kredi vardır ve kredi kartı gerekmez. ZeroBounce'ta temizlediğiniz bir listeyi yeniden kontrol edin ve Catch-All satırlarını karşılaştırın." },
  ],
  ctaHeadline: "ZeroBounce'un Catch-All olarak işaretlediği ve Giggal'ın doğruladığı adresleri görün",
  breadcrumb: 'ZeroBounce alternatifi',
}

const neverbounce: AltL10nConfig = {
  locale: 'tr',
  slug: 'neverbounce',
  path: '/tr/neverbounce-alternatifi',
  cluster: 'altNeverbounce',
  metaTitle: 'NeverBounce alternatifi: fiyat ve doğruluk | Giggal.ai',
  ogTitle: 'Catch-all adresleri doğrulayan NeverBounce alternatifi',
  desc: "NeverBounce 10.000 kredi için $50 alır ve bir testte catch-all adreslerin yalnızca %8'i için sonuç verdi. Giggal.ai $9,90'dır ve bu adresleri doğrular.",
  h1: ['Catch-all adresleri doğrulayan ', 'NeverBounce alternatifi', ''],
  heroP: "NeverBounce az sayıda catch-all adres için sonuç verir. LeadMagic'in testinde bu oran %8'di. Fiyatı 10.000 kredi için $50'dır. Giggal.ai bu adresleri geçerli ya da geçersiz olarak doğrular ve fiyatı $9,90'dır.",
  bluf: [
    { k: 'Fiyat', v: '10.000 kredi için $50, bizde $9,90. Bir milyon kredi için $2.500, bizde $680.' },
    { k: 'Catch-all', v: "Biz geçerli ya da geçersiz sonucunu veririz. NeverBounce az sayıda adres için sonuç verir (LeadMagic'in testinde %8)." },
    { k: 'Krediler', v: 'Süresi hiç dolmaz. NeverBounce kredilerinin süresi satın almadan 12 ay sonra dolar.' },
    { k: 'Deneyin', v: 'Toplu bir listede kullanabileceğiniz 1.000 ücretsiz kredi. Kredi kartı gerekmez.' },
  ],
  catchAllHeading: 'Giggal.ai catch-all adresleri nasıl doğrular',
  catchAllProse: "NeverBounce catch-all adresleri Accept-All olarak işaretler ve az sayıda adres için sonuç verir. LeadMagic'in testinde bu oran %8'di. Biz bu adresleri ayrı bir kontrol sürecine gönderir ve dört sonuçtan birini veririz.",
  benchmark: true,
  pricingHeading: 'NeverBounce ve Giggal.ai fiyat karşılaştırması',
  pricingProse: "NeverBounce 10.000 kredi için $50, 100.000 kredi için $400 ve bir milyon kredi için $2.500 alır. Giggal.ai aynı miktarlar için $9,90, $76 ve $680'dır. Minimum alım ve aylık ücret yoktur.",
  featureNote: "Tire işareti, rakamın herkese açık olmadığı anlamına gelir. NeverBounce'un ücretsiz paketinin büyüklüğü buna bir örnektir. Bu boşlukları tahminle doldurmuyoruz.",
  testSteps: [
    "NeverBounce'ta daha önce temizlediğiniz bir listeyi dışa aktarın.",
    'Listeyi burada 1.000 ücretsiz krediyle kontrol edin. Kredi kartı gerekmez.',
    "NeverBounce'un Catch-All olarak işaretlediği satırlara bakın. Kaç tanesinin gerçek çıktığını sayın.",
  ],
  faqs: [
    { q: 'İki aracın fiyatları nasıl karşılaştırılır?', a: "NeverBounce 10.000 kredi için $50 alır, Giggal.ai ise $9,90'dır. Bir milyon kredide fiyatlar $2.500 ve $680'dır. İki araç da tüm fiyat kademelerini yayınlar, bu yüzden rakamları kolayca kontrol edebilirsiniz." },
    { q: "NeverBounce'un işaretlediği catch-all adresler için Giggal.ai ne yapar?", a: "Accept-All etiketi yerine posta kutusunun gerçek olup olmadığını, yani teslim edilebilir mi teslim edilemez mi olduğunu söyler. LeadMagic'in testinde NeverBounce, catch-all adreslerin %8'i için sonuç verdi. Giggal.ai üzerindeki her doğrulama sabit olarak 1 kredi kullanır." },
    { q: 'Giggal.ai ve NeverBounce kredilerinin süresi ne zaman dolar?', a: "Giggal.ai kredilerinin süresi hiç dolmaz. NeverBounce kredilerinin süresi satın almadan 12 ay sonra dolar. Bu bilgi NeverBounce'un kendi fiyat sayfasında yazılıdır." },
    { q: "Giggal.ai'ın API'si var mı?", a: 'Evet. Giggal.ai herkese açık bir API dokümantasyonu ve bir MCP sunucusu sunar. Böylece kendi araçlarınızdan ve iş akışlarınızdan doğrulama yapabilirsiniz.' },
    { q: "Geçiş yapmadan önce Giggal.ai'ı deneyebilir miyim?", a: "Evet. Toplu bir yüklemede kullanabileceğiniz 1.000 ücretsiz kredi vardır ve kredi kartı gerekmez. NeverBounce'ta temizlediğiniz bir listeyi yeniden kontrol edin ve Catch-All satırlarına bakın." },
  ],
  ctaHeadline: "NeverBounce'un Catch-All satırlarını gerçek sonuçlara dönüştürün",
  breadcrumb: 'NeverBounce alternatifi',
}

const snovio: AltL10nConfig = {
  locale: 'tr',
  slug: 'snovio',
  path: '/tr/snovio-alternatifi',
  cluster: 'altSnovio',
  metaTitle: 'E-posta doğrulama için Snov.io alternatifi | Giggal.ai',
  ogTitle: 'E-posta doğrulama için geliştirilmiş Snov.io alternatifi',
  desc: "Snov.io doğrulamayı adres bulma ve gönderim kredilerine bağlar. Giggal.ai catch-all adresleri de doğrular: 10.000 kredi $9,90. 1.000 ücretsiz kredi.",
  h1: ['Doğrulama için geliştirilmiş ', 'Snov.io alternatifi', ''],
  heroP: "Snov.io adres bulma, doğrulama ve gönderimi kredi tabanlı tek bir platformda toplar. İhtiyacınız olan doğrulamaysa Giggal.ai, catch-all adresleri doğrulayan özel bir doğrulama aracıdır. Yayınlanmış fiyatı 10.000 kredi için $9,90'dır.",
  bluf: [
    { k: 'Odak', v: 'Snov.io bir adres bulma ve e-posta gönderim paketidir. Biz doğrulama yaparız ve catch-all adresleri de doğrularız.' },
    { k: 'Catch-all', v: 'Biz geçerli ya da geçersiz sonucunu veririz. Snov.io adresi işaretler ve orada durur.' },
    { k: 'Faturalama', v: "Snov.io doğrulama için paket kredilerinizi harcar. Bizde kullandıkça ödersiniz. Fiyat 10.000 kredi için $9,90'dan başlar." },
    { k: 'Deneyin', v: 'Toplu bir listede kullanabileceğiniz 1.000 ücretsiz kredi. Kredi kartı gerekmez.' },
  ],
  catchAllHeading: 'Giggal.ai catch-all adresleri nasıl doğrular',
  catchAllProse: "Snov.io doğrulamayı daha geniş bir müşteri adayı bulma sürecinin içinde yapar ve her kontrol için bir kredi harcar. Catch-all alan adlarında posta kutusunu doğrulamak yerine adresi işaretler. Giggal.ai doğrulama için geliştirilmiştir. Bu adresleri ayrı bir kontrol sürecine gönderir ve dört sonuçtan birini verir. Güvenli e-posta ağ geçitlerinin (SEG) arkasındaki adresleri de doğrular.",
  pricingHeading: 'Snov.io ve Giggal.ai fiyat karşılaştırması',
  pricingProse: "Snov.io ortak kredili aylık bir abonelik olarak satılır. Her doğrulama bir kredi kullanır. Ayda 10.000 doğrulamayı karşılayan en küçük paket, aylık $189 olan Pro M paketidir. Ayda 100.000 doğrulama için aylık $738 olan Ultra paketi gerekir (yıllık faturalamada yaklaşık %25 daha ucuz). Ayda bir milyon doğrulama özel bir pakettir. Kullanılmayan krediler, abonelik devam ettiği sürece sonraki aya aktarılır. Giggal.ai'da kullandıkça ödersiniz: 10.000 kredi için $9,90, 100.000 kredi için $76 ve bir milyon kredi için $680. Aylık taahhüt yoktur.",
  featureNote: 'Snov.io aylık faturalanır. Bu yüzden tablodaki rakam, o miktarı karşılayan en küçük paketin fiyatıdır. Tek seferlik bir fiyat değildir. Ayda bir milyon doğrulama özel bir pakettir.',
  testSteps: [
    "Snov.io'da daha önce kontrol ettiğiniz bir listeyi dışa aktarın.",
    'Listeyi burada 1.000 ücretsiz krediyle kontrol edin. Kredi kartı gerekmez.',
    "Snov.io'nun catch-all olarak işaretlediği satırlara bakın. Kaç tanesinin gerçek çıktığını sayın.",
  ],
  faqs: [
    { q: 'Giggal.ai doğrulama için iyi bir Snov.io alternatifi mi?', a: "İhtiyacınız olan doğrulamaysa evet. Giggal.ai, catch-all adresleri ve güvenli e-posta ağ geçitlerinin (SEG) arkasındaki adresleri doğrulayan özel bir doğrulama aracıdır. Kullandıkça ödersiniz ve fiyat 10.000 kredi için $9,90'dan başlar. Snov.io ayrıca e-posta adresi bulur ve e-posta kampanyaları yürütür. Giggal.ai bunları yapmaz." },
    { q: 'Giggal.ai, Snov.io gibi e-posta adresi bulur veya kampanya yürütür mü?', a: "Hayır. Giggal.ai yalnızca bir doğrulama aracıdır. Adres bulma, doğrulama ve gönderimi tek bir platformda istiyorsanız Snov.io size uygundur. Catch-all adresler için de sonuç veren temiz bir doğrulama istiyorsanız Giggal.ai bunun için geliştirilmiştir." },
    { q: "Snov.io'nun yalnızca işaretlediği catch-all adresleri Giggal.ai nasıl ele alır?", a: 'Snov.io catch-all adresleri posta kutusunu doğrulamadan işaretler. Giggal.ai ise gerçek bir teslim edilebilir ya da teslim edilemez sonucu verir. Her e-posta adresi için sabit olarak 1 kredi kullanılır.' },
    { q: 'Fiyatlar nasıl karşılaştırılır?', a: "Snov.io her doğrulama için paket kredilerinizi harcar. Fiyatı 1.000 kredi için aylık $39'dan başlar (yıllık faturalamada $29,25). Giggal.ai'da kullandıkça ödersiniz. Fiyat 10.000 kredi için $9,90'dır, aylık taahhüt yoktur ve kredilerin süresi hiç dolmaz." },
    { q: "Geçiş yapmadan önce Giggal.ai'ı deneyebilir miyim?", a: "Evet. Toplu bir yüklemede kullanabileceğiniz 1.000 ücretsiz kredi vardır ve kredi kartı gerekmez. Snov.io'nun catch-all olarak işaretlediği bir listeyi kontrol edin ve kaç adresin gerçek bir sonuç aldığını görün." },
  ],
  ctaHeadline: 'Platformun tamamını almadan e-posta doğrulama',
  breadcrumb: 'Snov.io alternatifi',
}

export const ALT_TR = { zerobounce, neverbounce, snovio }
