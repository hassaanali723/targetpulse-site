---
title: Kampanyadan önce bir e-posta alan adı ne kadar süre ısıtılmalı?
seoTitle: "E-posta alan adı ısıtma süresi: kampanya öncesi plan"
description: "Yeni bir alan adı yaşlandıktan sonra yaklaşık 2 ila 4 haftalık ısıtma planlayın. Duruma göre süreler, günlük plan ve hazır olduğunuzu gösteren sayılar."
slug: e-posta-alan-adi-isitma-suresi
date: 2026-11-05
updated: 2026-11-05
keyword: e-posta alan adı ısıtma süresi
image: /blog/covers/tr/e-posta-alan-adi-isitma-suresi.webp
imageAlt: "E-posta alan adı ısıtma süresi: yaklaşık 30 günlük alan adı yaşı, 2 ila 4 haftalık artış, ardından bounce oranı %2'nin altında kaldığında gönderim"
cta: İlk kampanya listenizi göndermeden önce kontrol edin
---

Yeni bir e-posta alan adının gerçek bir kampanyadan önce yaklaşık 2 ila 4 haftalık ısıtmaya (warm-up) ihtiyacı vardır. Bu süre, alan adı birkaç hafta yaşlandıktan sonra başlamalıdır. Zaten normal iş e-postaları gönderen bir alan adındaki yeni bir posta kutusu ise genellikle yaklaşık 2 haftada hazır olur. Bir kampanyadan önce bir e-posta alan adının ne kadar süre ısıtılması gerektiğini soruyorsanız, planlama için kullanacağınız sayılar bunlardır. Gerçekten hazır olduğunuz zamana ise kendi bounce ve şikâyet oranlarınız karar verir.

Hiçbir e-posta sağlayıcısı resmî bir ısıtma süresi yayımlamaz. Google, Microsoft ve Yahoo, normal posta kutularından gönderilen e-postalar için bir gün sayısı vermez. İnternette gördüğünüz 14 gün ile 12 hafta arasındaki sayılar çoğunlukla ısıtma araçları satan şirketlerden gelir. Bu rehber, her sürenin neye dayandığını gösteriyor. Böylece durumunuza uygun olanı seçebilirsiniz.

Önce ısıtmanın ne olduğuna dair temel bilgilere ihtiyacınız varsa, [e-posta ısıtma](/glossary/email-warmup) sözlük maddemizle başlayın.

## Duruma göre bir e-posta alan adı ne kadar süre ısıtılmalı

Doğru süre, neyin yeni olduğuna bağlıdır: alan adı, posta kutusu, e-posta sağlayıcınızdaki hesap veya gönderim yapan IP adresi.

| Durum | Planlanacak süre | Neye dayanıyor |
|---|---|---|
| Tamamen yeni alan adı, yeni posta kutuları | Alan adını yaklaşık 30 gün yaşlandırın, ardından 2 ila 4 haftalık artış | Spamhaus, yeni kaydedilen alan adlarını ilk 24 saat boyunca engelleme listesine alır. Teslim edilebilirlik yazarı Al Iverson, ısıtmaya başlamadan önce alan adının en az 30 günlük olmasını önerir. |
| Zaten normal e-posta gönderen bir alan adında yeni posta kutusu | Yaklaşık 2 haftalık artış | Alan adının zaten bir gönderim geçmişi vardır. Yalnızca yeni posta kutusunun hacmi yenidir. |
| Yeni Microsoft 365 hesabı (tenant) | Tam dış gönderim sınırınıza ulaşmadan önce 60 gün | Microsoft, bir tenant'ın ilk 30 gününde dış alıcı sınırını %10'a, 31. ila 60. günlerde ise %25'e düşürüyor. Deneme tenant'larında sınır günde 500 dış alıcıya iner. |
| Bir aradan sonra geri dönen alan adı | Yeniymiş gibi yavaşça yeniden başlayın | Twilio SendGrid, 30 günden uzun süre gönderim yapılmadığında bir IP adresinin yeniden ısıtılmasını söyler. |
| Bir e-posta platformunda özel IP adresi | Platformun planına göre 30 ila 45 gün | Amazon SES hacmi 45 günde, Twilio SendGrid 41 günde, Mailchimp'in Mandrill hizmeti yaklaşık 30 günde artırır. Postmark 3 ila 6 hafta öngörür. |

Microsoft 365 sınırları en çok, yalnızca soğuk e-posta gönderimi için yeni bir tenant kuran ekipleri ilgilendirir. Microsoft bu değişikliği Ağustos 2026'da duyurdu ve Eylül 2026'nın ortası ile Kasım 2026'nın sonu arasında uyguluyor. Yeni bir tenant iki aylık olana kadar, ısıtma aracınız ne derse desin, tam dış hacimle gönderim yapamaz.

![Duruma göre e-posta alan adı ısıtma süreleri: tamamen yeni alan adı, mevcut alan adında yeni posta kutusu, yeni Microsoft 365 tenant'ı, ara verilmiş alan adı ve özel IP adresi](/blog/fig-tr-warm-up-time-by-situation.webp)

## İnternetteki sayılar neden birbirini tutmuyor

Bu soruyu aradığınızda 14 gün, 3 hafta, en az 30 gün, 4 ila 6 hafta ve 45 gün gibi sayılar bulursunuz. Bu farkın üç nedeni vardır.

Birincisi, kopyalanacak resmî bir sayı yoktur. Google'ın gönderen yönergeleri, gönderenlere "etkileşimli kullanıcılara düşük bir gönderim hacmiyle başlamalarını ve hacmi zaman içinde yavaşça artırmalarını" söyler. Ne kadar süre olduğunu söylemez. Yahoo'nun gönderenler için en iyi uygulamalar belgesi ise hacim artışını hiç ele almaz.

İkincisi, bazı sayılar onları içermeyen kaynaklara dayandırılır. Birkaç rehber, "4 ila 8 haftalık" bir süreyi ve her adımda hacmi 1,5 kat artırma kuralını Microsoft'a atfeder. Bu iki sayıyı da hiçbir Microsoft sayfasında bulamadık. Microsoft'un yayımladığı tek artış süresi, Azure Communication Services e-posta ürünü içindir: "iki ila dört hafta."

Üçüncüsü, bu soru için üst sıralarda çıkan sayfaların çoğu ısıtma araçları satan şirketlere aittir. Önerilen süre uzadıkça ücretli abonelik de daha fazla hafta sürer.

Gönderenlerin gerçek davranışı, önerilerden çok daha kısadır. Smartlead, 2026'nın ilk yarısında kendi platformu üzerinden gönderilen 850 milyondan fazla e-postayı analiz etti. Bulgusu şuydu: "ortalama bir gönderen, yeni bir posta kutusunu ilk kampanyasından önce 8 gün ısıtıyor. Bir yıl önce bu süre 9,4 gündü." Smartlead'in kendisi bunun gönderenlerin yaptığı şey olduğunu, kanıtlanmış güvenli bir alt sınır olmadığını belirtiyor.

## Isıtma sürenizi neler belirler

Süreyi beş şey etkiler.

**Alan adının yaşı.** Bu hafta kaydedilen bir alan adının hiçbir geçmişi yoktur. Spamhaus, yeni kaydedilen ve daha önce uzun süre kullanılmamış alan adlarını ilk 24 saat boyunca bir engelleme listesine ekler. Bazı alıcı sunucular bu listeyi kullanır. Soğuk e-posta için kullanacağınız alan adlarını ihtiyaç duymadan bir ay önce satın almak ek bir maliyet getirmez ve bu riski ortadan kaldırır.

**Ne kadar göndermeniz gerektiği.** Google'a göre "ne kadar çok e-posta gönderirseniz, gönderim hacmini o kadar yavaş artırmalısınız." Bir posta kutusundan günde 30 e-posta göndermesi gereken bir ekip, günde 3.000 göndermesi gereken bir ekipten çok daha önce bitirir.

**Ne sıklıkla gönderdiğiniz.** Google ayrıca "haftalık yerine her gün gönderim yaptığınızda gönderim hacmini daha hızlı artırabileceğinizi" söyler. Her iş günü biraz gönderim yapan bir alan adı, haftalık toplu gönderimler yapan bir alan adından daha hızlı geçmiş oluşturur.

**Alıcılarınızın hangi sağlayıcıları kullandığı.** Gmail'e, Outlook.com'a ve şirket sunucularına giden e-postalar ayrı ayrı değerlendirilir. Amazon SES, bazı sağlayıcılarda "yaklaşık iki haftada olumlu bir itibar oluşturabileceğinizi, bazılarında ise bunun altı haftaya kadar sürebileceğini" belirtir.

**Liste kalitesi.** Isıtma sırasındaki bounce'lar ve spam şikâyetleri süreyi uzatır, bazen haftalarca. Bu, çoğu ekibin doğrudan kontrol edebileceği faktördür. Aşağıda bunu ele alıyoruz.

## Günlük ısıtma planı

Güvenli bir artış küçük adımlarla büyür ve sonuçları görebilmek için her adımda yeterince bekler. Customer.io'nun alan adı ısıtma rehberi, her biri önceki hacmin yaklaşık 1,5 katı olan ve 2 ila 3 gün süren adımlar kullanır. Günde 50 soğuk e-posta hedefleyen tek bir posta kutusu için bu kalıp şöyledir.

| Günler | Günlük e-posta | Yalnızca şu durumda bir sonraki adıma geçin |
|---|---|---|
| 1. günden önce | Alan adı yaşlandırılmış, SPF, DKIM ve DMARC kurulmuş, gerçek e-posta trafiği var | Bir test e-postası kimlik doğrulamasından geçiyor |
| 1 ila 3 | 10 | Hard bounce yok, spam şikâyeti yok |
| 4 ila 6 | 15 | Bounce oranı %2'nin altında |
| 7 ila 9 | 22 | Yanıtlar geliyor, erteleme yok |
| 10 ila 12 | 33 | Bounce oranı %2'nin altında, spam oranı %0,08'in altında |
| 13 ila 15 | 50 | Yukarıdakiyle aynı, ardından bu seviyede kalın |

Önce en çok etkileşimde bulunan kişilerinize gönderin. Google'ın yönergesi "etkileşimli kullanıcılarla" başlamaktır. Uygulamada bu, sizi tanıyan kişiler, mevcut müşteriler ve size yakın zamanda yanıt verenler anlamına gelir.

Planın işe yaraması için iki kural vardır. Bir adım kötü görünüyorsa, bir sonrakine geçmek yerine o adımı tekrarlayın. Ve her iş günü gönderim yapın. Mailgun, ısıtma sınırlarının her gün gönderim yapıldığını varsaydığını belirtir. Durursanız "sekizinci günün sınırıyla devam edemezsiniz."

Günde 50'den fazla e-postaya ihtiyacınız varsa, tek bir posta kutusunu daha fazla zorlamak yerine daha fazla ısıtılmış posta kutusu ekleyin.

![Günde 10'dan 50 e-postaya yaklaşık 1,5 katlık adımlarla ilerleyen günlük e-posta ısıtma planı ve her adımdan önce yapılan bounce ve spam oranı kontrolleri](/blog/fig-tr-warm-up-ramp-schedule.webp)

## Alan adınızın hazır olduğunu nasıl anlarsınız

Bir alan adı, hacim artarken sayıları sağlıklı kalıyorsa hazırdır. İlk gerçek kampanyanızdan önce şunları kontrol edin:

- **%2'nin altında bounce oranı.** Customer.io'ya göre %2'nin üzerindeki bounce oranları "bir sonraki adıma geçmeden önce çözmeniz gereken liste hijyeni sorunlarına işaret eder." [Soğuk e-posta bounce oranı rehberimiz](/blog/good-bounce-rate-for-cold-email) bu aralıkları açıklıyor.
- **%0,08'in altında spam şikâyeti oranı.** Bu, Customer.io'nun ısıtma hedefidir. Google'ın Gmail için kesin sınırı %0,3'tür. Bu sınırın çok altında kalmak size hata payı bırakır.
- **Hız sınırı hatası yok.** Gmail 421 4.7.28 kodunu döndürürse, sizden "olağandışı bir e-posta hızı tespit etmiş" demektir. Yavaşlayın. Google'ın önerisi, hatalar durana kadar hacmi azaltmak ve "ardından tekrar yavaşça artırmaktır."
- **Kimlik doğrulaması başarılı.** Bir Gmail hesabına test e-postası gönderin, "Orijinali göster" seçeneğini açın ve SPF, DKIM ve DMARC sonuçlarının PASS olduğunu kontrol edin. [SPF, DKIM ve DMARC rehberimiz](/blog/spf-dkim-dmarc-explained) her kaydı ayrı ayrı anlatıyor.
- **Gerçek yanıtlar geliyor.** Gerçek kişilerden gelen yanıtlar, bir paneldeki herhangi bir puandan daha iyi bir işarettir. Kapanış satırının bile bir etkisi vardır: bir Boomerang çalışmasında [bir teşekkür ifadesiyle biten](/blog/how-to-end-an-email) e-postalar %62 oranında yanıt aldı, diğerleri ise %46 oranında.

Google Postmaster Tools bir sınırlamayla birlikte yardımcı olabilir. Uyumluluk durumu (Compliance status) paneli tüm gönderenlere açıktır. Ancak Google, "giden e-posta hacminin düşük olduğu günlerde" verilerin eksik olabileceğini söylüyor. Isıtma sırasındaki durum tam olarak budur. Kendi bounce ve şikâyet sayılarınıza güvenmek için Postmaster Tools'un dolmasını beklemeyin.

## Isıtma araçları süreci hızlandırır mı?

Otomatik ısıtma araçları, bir ağdaki posta kutuları arasında e-posta gönderir. E-postalar otomatik olarak açılır, yanıtlanır ve spam klasöründen çıkarılır. Amaç, gerçek kampanyanız başlamadan önce alan adınıza olumlu etkileşim kazandırmaktır.

Bunun ısıtma süresini kısalttığına dair kanıtlar zayıftır:

- **Google açılmaları kullanmaz.** Gönderen yönergelerinde "Google açılma oranlarını takip etmez" yazar.
- **Yapay etkileşim sayılmayabilir.** Bir e-posta platformu olan Customer.io, "gelen kutusu sağlayıcılarının yapay etkileşimi tespit ettiğini ve bunun için hiçbir itibar puanı vermediğini" belirtir ve bu hizmetleri desteklemez.
- **Isıtma e-postaları gerçek e-postalardan farklı yere düşer.** Smartlead'in kendi verileri, ısıtma e-postalarının yaklaşık %99 oranında gelen kutusuna ulaştığını gösteriyor. Smartlead, bu oranın ısıtma e-postalarına ait olduğunu ekliyor: "soğuk kampanyalara değil."
- **Google daha önce de karşı çıktı.** Bir e-posta aracı olan GMass, 2022 sonbaharında Google'ın kendisinden ısıtma sistemini kapatmasını, aksi hâlde Gmail API'sine erişimini kaybedeceğini söylediğini belirtiyor.

Google ve Microsoft, ısıtma araçları hakkında belirli bir kural yayımlamadı. Bir ısıtma aracı kullanıyorsanız, gelen kutusu puanını kampanyanızın gelen kutusuna ulaşacağının kanıtı olarak değil, bir araç metriği olarak görün. Önemli olan geçmişi, gerçek kişilerle yapılan gerçek yazışmalar oluşturur.

## Isıtmanın düzeltemeyeceği kısım: ilk kampanya listeniz

Tek bir kötü gönderim, haftalarca süren ısıtmayı boşa çıkarabilir. Bunun olağan nedeni ilk kampanya listesidir. Kişiler iş değiştirdikçe ve şirketler posta kutularını kapattıkça potansiyel müşteri listeleri eskir. 16. günde birkaç yüz eski adrese gönderim yaparsanız bounce oranı %2'nin çok üzerine çıkabilir.

Bu aşamadaki bounce'lar, yalnızca iki haftalık geçmişi olan bir alan adını etkiler. Bunları dengeleyecek kadar iyi geçmiş yoktur. Google, bounce'lar arttığında gönderenlere hacmi azaltmalarını söyler. Bu yüzden artışın yeniden başlaması gerekir.

Bu nedenle listeyi bounce'lar geldikten sonra değil, ilk kampanyadan önce kontrol edin:

1. Listeyi bir [mail adresi doğrulama aracında](/email-checker) kontrol edin veya tam bir [e-posta listesi temizleme](/email-list-cleaning) işleminden geçirin.
2. Geçersiz, geçici ve rol tabanlı adresleri çıkarın.
3. Catch-all adresleri ayrı ve daha yavaş bir grupta tutun. Catch-all bir alan adı her adresi kabul eder. Bu yüzden basit bir kontrol, kişinin var olup olmadığını söyleyemez. [Catch-all doğrulama](/catch-all-verification) bunu söyleyebilir.
4. İlk kampanyayı listenin en temiz kısmına gönderin, ardından genişletin.

## Isıtmadan sonra: hacmi sabit tutun

Isıtma, tek bir adımda tam hacme geçilerek bitmez. Google, gönderenlerden "e-postaları tutarlı bir hızda göndermelerini" ve "e-postaları ani yığınlar hâlinde göndermekten kaçınmalarını" ister. Yapılmaması gerekene açık bir örnek de verir: "daha önce gönderilen hacmi birden ikiye katlamak, hız sınırlamasına veya itibar düşüşlerine yol açabilir."

Amazon SES de özel IP adresleri için aynı öneriyi verir: "Isıtma süreci tamamlandıktan hemen sonra büyük hacimlerde e-posta göndermekten kaçınmalısınız." Son ısıtma seviyenizden aynı küçük adımlarla büyüyün ve iş günlerinde düzenli bir ritimle göndermeye devam edin.

## Sık sorulan sorular

**Bir e-posta alan adını 7 günde ısıtabilir miyim?**
Bir haftadan sonra küçük miktarlarda göndermeye başlayabilirsiniz ve birçok gönderen bunu yapar. Smartlead'in verilerine göre ortalama 8 gündür. Ancak tamamen yeni bir alan adında 7 günlük bir ısıtma, kötü bir gönderimi karşılayacak çok az geçmiş bırakır. Alan adı yeniyse, yaşlandıktan sonra en az 2 haftalık bir artış planlayın.

**Isıtma sırasında günde kaç e-posta göndermeliyim?**
Posta kutusu başına günde yaklaşık 10 e-postayla başlayın ve yukarıdaki planda olduğu gibi her 2 ila 3 günde bir yaklaşık 1,5 kat artırın. İhtiyacınız olan seviyede durun. Soğuk e-posta rehberleri genellikle bir posta kutusu için sınırı günde 30 ila 50 e-posta olarak koyar.

**Eski bir alan adının ısıtılması gerekir mi?**
Zaten her gün normal e-posta gönderiyorsa daha az gerekir. Bir ay veya daha uzun süredir gönderim yapmayan bir alan adı neredeyse yeni bir alan adı gibi ele alınmalıdır. Twilio SendGrid, bir IP adresinin yeniden ısıtılması gereken nokta olarak gönderimsiz 30 günü kullanır.

**Kampanyam başladıktan sonra ısıtmayı sürdürmeli miyim?**
Gönderiminizi sabit ve gerçek tutun. Isıtma aracı satan şirketler genellikle düşük seviyede bir ısıtmanın çalışmaya devam etmesini önerir. Gerçek yanıtlar ve temiz bir liste, ısıtma hacminden daha önemlidir.

**Google resmî bir ısıtma planı yayımlıyor mu?**
Hayır. Google, gönderenlere etkileşimli alıcılarla düşük hacimde başlamalarını, yavaşça artırmalarını ve ani sıçramalardan kaçınmalarını söyler. Bir gün sayısı vermez.

**Isıtma sırasında e-postalarım neden bounce oluyor?**
Genellikle ısıtma yüzünden değil, liste yüzünden. Adresleri bir [mail adresi doğrulama aracıyla](/email-checker) kontrol edin ve soğuk e-postaların neden geri döndüğünü [bu rehberde](/blog/why-cold-emails-bounce) okuyun.
