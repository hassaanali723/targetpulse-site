---
title: Google Postmaster Tools
seoTitle: "Google Postmaster Tools nedir? Anlamı ve işleyişi"
description: Google Postmaster Tools, Gmail'e gönderdiğiniz e-postalar hakkında ne gösterir, nasıl kurulur, Google'ın spam oranı sınırları nelerdir ve neyi göstermez?
slug: google-postmaster-tools
date: 2026-11-05
updated: 2026-11-05
keyword: google postmaster tools
short: Google Postmaster Tools, Gmail'in gönderim alan adınızı nasıl puanladığını gösteren, Google'a ait ücretsiz bir web sitesidir. Gmail kullanıcılarına gönderilen e-postalar için spam oranınızı, alan adı itibarınızı, IP itibarınızı, kimlik doğrulama sonuçlarınızı ve teslimat hatalarınızı bildirir.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: Postmaster Tools sorunları gönderimden sonra bildirir. E-posta doğrulama ise onları önler
---

## Google Postmaster Tools nedir?

Google Postmaster Tools, Google'ın e-posta gönderen kişiler için sunduğu ücretsiz bir web sitesidir. Alan adınızın Gmail adreslerine gönderdiği e-postalara Gmail'in nasıl davrandığını gösterir.

Önce birkaç terim. Alan adı, e-posta adresinizde @ işaretinden sonra gelen addır, örneğin example.com. DNS, bir alan adının ayarlarını yayımladığı herkese açık dizindir. Her ayara kayıt (record) denir.

Alan adınızı eklersiniz ve bir DNS kaydı ekleyerek alan adının sahibi olduğunuzu kanıtlarsınız. Google daha sonra alan adınızın Gmail adreslerine gönderdiği e-postalarla ilgili verileri size gösterir. Hizmet ücretsizdir. Gmail'in alan adınızı nasıl puanladığı hakkında tek resmi bilgi kaynağıdır.

Yalnızca Gmail'i kapsar. Outlook.com, Yahoo veya şirket e-posta sunucularına gönderilen e-postalar burada görünmez. Microsoft'un kendi ağı için ayrı bir hizmeti vardır.

## Basit bir örnek

Küçük bir şirket bu hizmeti şöyle kullanabilir. Sayılar yalnızca bir örnektir.

1. **Bir seyahat şirketi kaydolur.** Sunny Trips, sunnytrips.example alan adını Google Postmaster Tools'a ekler.
2. **Alan adının sahibi olduğunu kanıtlar.** Google ona bir kod verir. Şirket bu kodu DNS ayarlarına bir kayıt olarak ekler.
3. **Göndermeye devam eder.** Haftalık bültenini gönderir. Müşterilerinin birçoğu Gmail kullanır.
4. **Veriler görünür.** Gmail'e yeterince e-posta gittikten sonra Google Postmaster Tools grafikler göstermeye başlar.
5. **Bir sorun fark eder.** Bir hafta spam oranı %0,25'e yükselir. Bu, teslim edilen her 10.000 e-postadan 25'inin okuyucular tarafından spam olarak işaretlendiği anlamına gelir.
6. **Nedeni bulur.** Artış, şirketin hiç kaydolmamış kişilerden oluşan yeni bir listeye e-posta göndermesiyle başlamıştır. Şirket bu listeyi kullanmayı bırakır.

Bu panel olmasaydı Sunny Trips yalnızca düşen açılma oranlarını görürdü ve nedenini bilemezdi.

## Neler gösterir?

- **Spam oranı.** Teslim edilen e-postalarınızdan Gmail kullanıcılarının spam olarak işaretlediklerinin yüzdesi. Google'ın gönderen yönergeleri bu sayıya atıfta bulunur.
- **Alan adı itibarı ve IP itibarı.** Her biri için bir puan: kötü (bad), düşük (low), orta (medium) veya yüksek (high). IP adresiniz, gönderim sunucunuzu tanımlayan numaradır. Yüksek, Gmail'in e-postanızı nadiren filtrelediği anlamına gelir. Kötü, e-postanızın çoğunun spam klasörüne gittiği veya reddedildiği anlamına gelir.
- **Kimlik doğrulama.** E-postalarınızdan [SPF](/glossary/spf), [DKIM](/glossary/dkim) ve [DMARC](/glossary/dmarc) kontrollerinden geçenlerin yüzdesi. Bunlar, bir e-postanın gerçekten sizden geldiğini kanıtlayan alan adı kayıtlarıdır.
- **Şifreleme.** E-postalarınızdan TLS üzerinden gönderilenlerin yüzdesi. TLS, e-postayı sunucular arasında taşınırken şifreleyen bir standarttır.
- **Teslimat hataları.** Gmail'in reddettiği veya geciktirdiği e-postalarınızın yüzdesi ve nedeni.
- **Geri bildirim döngüsü (feedback loop).** Feedback-ID başlığını kullanan büyük gönderenler için kampanya başına şikâyet oranları. Başlık (header), bir e-postanın en üstünde bulunan teknik bilgi satırıdır.

## Google'ın yayımladığı sınırlar

Google'ın gönderen yönergeleri şunları söyler:

1. Postmaster Tools'ta görünen spam oranını %0,10'un altında tutun.
2. Spam oranınız hiçbir zaman %0,30'a veya üzerine çıkmasın.
3. Günde 5.000 veya daha fazla mesaj gönderenlerin SPF, DKIM ve DMARC kayıtları olmalıdır.
4. Bu gönderenlerin pazarlama e-postalarında tek tıkla abonelikten çıkma olmalıdır.

%0,30'un üzerine çıkan gönderenlerin e-postaları filtrelenir veya reddedilir. Bu sınırlar küçüktür. Teslim edilen 10.000 e-postada %0,30, 30 şikâyet demektir.

## Neleri göstermez?

Postmaster Tools, teslim edilen e-postalar hakkında rapor verir. Size var olmayan adresleri gösteremez. Artık var olmayan bir adrese giden e-posta, SMTP bağlantısı sırasında reddedilir. SMTP, e-posta sunucularının birbirine e-posta göndermesinin standart yoludur. Bu redde bounce denir. Bounce, bir e-postanın teslim edilmediğini bildiren otomatik mesajdır.

Bounce'lar spam oranına dahil değildir. Çok sayıda geçersiz adres içeren bir liste, düşük bir spam oranı gösterirken bounce oranı itibarınıza zarar veriyor olabilir.

**Örnek:** bir mağaza 10.000 adrese gönderir ve bunların 1.000'i yoktur. Google Postmaster Tools iyi bir spam oranı gösterir, çünkü yalnızca teslim edilen e-postaları sayar. 1.000 bounce bu sayıda görünmez.

Postmaster Tools ayrıca belirli bir hacim gerektirir. Alan adınız Gmail'e yalnızca az miktarda e-posta gönderiyorsa grafikler boş kalır. Google asgari hacmi yayımlamaz.

## Doğrulamayla birlikte nasıl çalışır?

Postmaster Tools sorunları siz gönderdikten sonra bildirir. Doğrulama ise nedenleri siz göndermeden önce ortadan kaldırır. Bir listeyi bir [mail adresi doğrulama aracından](/email-checker) geçirmek, bounce olan adresleri kaldırır. Şikâyete yol açan geçici adresleri ve rol tabanlı adresleri de kaldırır. Bir [toplu mail doğrulama aracı](/bulk-email-verifier) bunu tek bir yüklemeyle bütün bir liste için yapar. Bundan sonra Postmaster Tools'un bildireceği daha az sorun olur.

[E-posta doğrulama](/), Gmail puanlarınızı tek başına değiştirmez. Var olmayan adreslere göndermenizi engeller. [E-posta bounce oranı nedir ve nasıl düşürülür](/blog/how-to-reduce-email-bounce-rate) rehberi iki tarafı da açıklar.
