---
title: Mailer-daemon
seoTitle: "Mailer-daemon nedir? Anlamı ve işleyişi"
description: Mailer-daemon mesajı nedir, neden gelir, içindeki kod nasıl okunur ve göndermediğiniz bir e-posta için bu mesajı aldığınızda ne yapmalısınız?
slug: mailer-daemon
date: 2026-11-05
updated: 2026-11-05
keyword: mailer daemon
short: Mailer-daemon, bir e-posta sunucusunda otomatik mesajlar gönderen programdır. Bu mesajların çoğu bounce bildirimidir. Mailer-daemon'dan gelen bir mesaj, gönderdiğiniz bir e-postanın teslim edilmediği anlamına gelir.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Bounce olan adresleri göndermeden önce kaldırın
---

## Mailer-daemon nedir?

Mailer-daemon, bir e-posta sunucusunda otomatik bildirimler gönderen bir programdır. Bu bildirimlerin çoğu, gönderdiğiniz bir e-postanın teslim edilmediğini size söyler.

Önce birkaç terim. Sunucu, sürekli çalışan ve e-postaları işleyen bir bilgisayardır. Daemon, bir sunucuda arka planda, kimse onu izlemeden çalışan bir programdır. Yani mailer-daemon, teslim edilemeyen e-postalarla ilgilenen arka plan programıdır.

E-postanız reddedildiğinde mailer-daemon size bir bildirim gönderir. Gönderen adı genellikle `MAILER-DAEMON@` ve ardından sunucunun alan adıdır. Bazen de `postmaster@` olur. Alan adı, bir adreste @ işaretinden sonra gelen kısımdır, örneğin example.com.

Bu bildirime [teslim edilemedi raporu](/glossary/ndr) (NDR) denir. Rapor, hangi adresin başarısız olduğunu, ne zaman başarısız olduğunu ve nedenini söyler. Birçok kişi buna kısaca bounce mesajı der.

## Basit bir örnek

Bir mailer-daemon mesajı gelen kutunuza şöyle ulaşır.

1. **Priya bir fiyat teklifi gönderir.** Priya bir matbaa işletir. sam@client.example adresindeki yeni bir müşteriye fiyat teklifi gönderir.
2. **Adres yanlıştır.** Müşterinin gerçek adresi ise sam.lee@client.example şeklindedir. Priya adresi bir kartvizitten kopyalamış ve ".lee" kısmını atlamıştır.
3. **Sunucu e-postayı reddeder.** client.example alan adındaki e-posta sunucusunda "sam" adında bir posta kutusu yoktur. Sunucu e-postayı reddeder.
4. **Bir bildirim gelir.** Birkaç saniye sonra Priya, MAILER-DAEMON'dan bir e-posta alır. E-postada, gönderdiği e-postanın teslim edilemediği yazar.
5. **Priya kodu okur.** İçinde `550 5.1.1` kodunu bulur. Bu kod, adresin var olmadığı anlamına gelir.
6. **Priya hatayı düzeltir.** Kartviziti kontrol eder, adresi düzeltir ve teklifi yeniden gönderir.

Priya'nın e-postasını mailer-daemon engellemedi. E-postayı diğer sunucu reddetti. Mailer-daemon yalnızca bunu Priya'ya bildirdi.

## Mesaj nasıl okunur?

Mesajın önemli kısmı koddur. Üç basamaklı bir sayıya ve noktalarla ayrılmış bir sayıya bakın. Örnek: `550 5.1.1`. İlk basamak, sorunun ne tür bir sorun olduğunu söyler.

| İlk basamak | Tür | Anlamı | Ne yapmalı? |
|---|---|---|---|
| **5** | [Hard bounce](/glossary/hard-bounce) | Adres yoktur veya sunucu e-postanızı engellemiştir. | Hangisi olduğunu öğrenene kadar yeniden göndermeyin. |
| **4** | [Soft bounce](/glossary/soft-bounce) | Gelen kutusu doludur veya sunucu meşguldür. | Bekleyin. E-posta sunucunuz kendiliğinden yeniden dener. |

Kodun yanındaki metni alıcı sunucu yazar. İki örnek:

- Gmail: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft: `5.4.1 Recipient address rejected: Access denied`. Microsoft'un belgelerine göre bu, "alıcının adresi mevcut değil" anlamına gelir.

## Göndermediğiniz e-postalar için gelen mailer-daemon mesajları

Bazen hiç göndermediğiniz bir e-posta için bounce bildirimi alırsınız. Buna [backscatter](/glossary/backscatter) denir. Şöyle olur:

1. Spam gönderen biri binlerce e-posta gönderir. From alanına sizin adresinizi yazar, örneğin info@shop.example.
2. Bu e-postaların birçoğu var olmayan adreslere gider.
3. Alıcı sunucular bu e-postaları reddeder. Bu sunucuların mailer-daemon programı her bildirimi From adresine, yani size gönderir.
4. Gelen kutunuz, hiç yazmadığınız e-postalar için gelen mailer-daemon bildirimleriyle dolar.

Hesabınız ele geçirilmedi. Çözüm alan adınızdadır. SPF, DKIM ve DMARC kayıtlarını yayımlayın. Bunlar, alıcı sunuculara hangi e-postaların gerçekten sizden geldiğini söyleyen alan adı ayarlarıdır. Böylece alıcı sunucular size bounce bildirimi göndermek yerine sahte e-postaları reddedebilir.

## Gönderenler için neden önemlidir?

Her mailer-daemon mesajı bir bounce mesajıdır. Google ve Microsoft gibi e-posta sağlayıcıları, e-postalarınızın kaçının var olmayan adreslere gittiğini sayar. Çok sayıda `5.1.1` bildirimi, onlara listenizi kontrol etmediğinizi gösterir.

**Örnek:** bir şirket 2.000 kişilik eski bir listeye bülten gönderir. Hepsinde `5.1.1` kodu bulunan iki yüz mailer-daemon bildirimi geri gelir. Her biri, sağlayıcılara listeyi kimsenin temizlemediğini gösteren bir işarettir. Bu sayılar yalnızca bir örnektir.

## Doğrulama aracı nasıl yardımcı olur?

Bir [mail adresi doğrulama aracı](/email-checker), alıcı sunucuya bir adres için e-posta kabul edip etmediğini sorar. Bunu siz herhangi bir şey göndermeden önce yapar. Sunucu, mailer-daemon'ın daha sonra size göndereceği kodun aynısını verir. Fark şudur: hiçbir e-posta gönderilmemiştir ve itibarınız etkilenmez.

Bir [toplu mail doğrulama aracı](/bulk-email-verifier), aynı kontrolü bir listedeki her adres için yapar. [E-posta doğrulama](/) backscatter sorununu durdurmaz, çünkü o e-postaları siz göndermediniz. Kendi listenizdeki artık var olmayan adreslerden gelen mailer-daemon bildirimlerini ise durdurur.
