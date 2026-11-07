---
title: Backscatter
seoTitle: "Backscatter nedir? Anlamı ve işleyişi"
description: Backscatter nedir, hiç göndermediğiniz e-postalar için neden bounce mesajı alırsınız, hesabınız ele mi geçirildi ve alan adınızda bunu nasıl durdurursunuz?
slug: backscatter
date: 2026-11-05
updated: 2026-11-05
keyword: backscatter e-posta
short: Backscatter, hiç göndermediğiniz e-postalar için aldığınız bounce mesajlarıdır. Spam gönderen biri, kendi e-postalarının gönderen alanına sizin adresinizi yazmıştır. Bu e-postalar teslim edilemeyince bounce mesajları size geri gelir.
related: email-spoofing, ndr, mailer-daemon, spf, dmarc, email-blacklist
cta: Temiz bir listeyle kendi bounce oranınızı düşük tutun
---

## Backscatter nedir?

Backscatter, hiç göndermediğiniz e-postalar için aldığınız bounce mesajlarıdır.

Her şey spam ile başlar. Spam gönderen biri binlerce e-posta gönderir ve gönderen alanına sizin adresinizi yazar. Bu e-postaların birçoğu var olmayan adreslere gider. Alıcı sunucular, gönderen adresine bir bounce mesajı geri gönderir. Bu adres sizin olduğu için bounce mesajları sizin gelen kutunuza düşer.

Bounce mesajı, bir e-posta teslim edilemediğinde sunucunun gönderdiği otomatik bildirimdir. Resmi adı [teslim edilemedi raporu](/glossary/ndr) (non-delivery report) olarak geçer.

## Basit bir örnek

Backscatter küçük bir işletmeye şöyle ulaşır.

1. **Lena bir çiçekçi işletiyor.** Adresi hello@flowers.example.
2. **Spam gönderen biri onun adresini kopyalıyor.** Bu kişi 10.000 sahte e-posta gönderiyor. Her biri hello@flowers.example adresinden gönderilmiş gibi görünüyor.
3. **Birçok e-posta teslim edilemiyor.** Yaklaşık üçte biri var olmayan adreslere gidiyor.
4. **Bazı sunucular önce kabul edip sonra kontrol ediyor.** Bu sunucular e-postayı alıyor, sonra böyle bir posta kutusu olmadığını fark ediyor.
5. **Bounce mesajları Lena'ya gidiyor.** Bu sunucular bounce bildirimlerini hello@flowers.example adresine gönderiyor.
6. **Lena'nın gelen kutusu doluyor.** Bir sabah, hiç yazmadığı e-postalar için yüzlerce "Undeliverable" (teslim edilemedi) mesajı buluyor.

Bu sayılar yalnızca bir örnektir. Ancak bu durum sık görülür.

## Hesabım ele mi geçirildi?

Genellikle hayır. Sahte bir gönderen adresiyle e-posta göndermek için hesabınıza erişmek gerekmez. Bu, bir zarfın üzerine başka birinin iade adresini yazmaya benzer. Bunun için kimsenin o kişinin anahtarına ihtiyacı yoktur.

Gönderilenler klasörünüzü kontrol edin. E-postalar orada yoksa, hesabınız bunları göndermemiştir. Oradaysa şifrenizi değiştirin ve iki adımlı doğrulamayı açın.

## Neden olur?

Backscatter, bazı sunucular e-postayı önce kabul edip adresi sonra kontrol ettiği için oluşur. Kontrol başarısız olunca bu sunucular gönderen adresine bir bounce mesajı gönderir. Gönderen adresinin sahte olduğunu bilemezler.

İyi yönetilen sunucular, adresi karşı sunucu hâlâ bağlıyken kontrol eder. Adres yoksa e-postayı hemen reddeder. Hiç bounce mesajı oluşmaz, bu yüzden kimseye backscatter ulaşmaz.

## Alan adınızda nasıl durdurulur?

Spam gönderenlerin adresinizi yazmasını engelleyemezsiniz. Ancak alıcı sunucuların bu sahte e-postaları reddetmesini sağlayabilirsiniz. Bunu alan adınızdaki üç kayıtla yaparsınız.

| Kayıt | Ne işe yarar |
|---|---|
| [SPF](/glossary/spf) | Alan adınız adına e-posta göndermesine izin verilen sunucuları listeler |
| [DKIM](/glossary/dkim) | Bir e-postanın gerçekten sizden geldiğini kanıtlayan bir imza ekler |
| [DMARC](/glossary/dmarc) | Bu kontrollerden geçemeyen e-postalarla ne yapılacağını alıcı sunuculara söyler |

DMARC'ı önce `p=none` ile kurun ve raporları okuyun. Kontrollerden yalnızca kendi servisleriniz geçtiğinde önce `p=quarantine`, sonra `p=reject` politikasına geçin. `p=reject` ile sunucular sahte e-postaları size bounce olarak geri göndermek yerine reddeder.

O zamana kadar bounce mesajlarını bir klasöre filtreleyebilirsiniz. Bu mesajlara yanıt vermeyin.

## Sunucu sahipleri için neden önemlidir?

Bir e-posta sunucusu işletiyorsanız, sunucunuzun bilinmeyen adresleri nasıl işlediğini kontrol edin. Postayı kabul edip sonra bounce eden bir sunucu, hiçbir şey yapmamış kişilere backscatter gönderir. Bazı engelleme listeleri bunu yapan sunucuları listeler. Örneğin backscatterer.org adresindeki liste bunlardan biridir. Bir engelleme listesinde olmak, kendi e-postalarınızın teslim edilmesini engelleyebilir.

## Doğrulama aracı nasıl yardımcı olur?

[E-posta doğrulama](/) backscatter sorununu durdurmaz, çünkü o e-postaları siz göndermediniz. Ancak sizin neden olduğunuz bounce mesajlarında yardımcı olur. Göndermeden önce kendi listenizden artık var olmayan adresleri kaldırın. Böylece gelen kutunuzdaki her bounce mesajının nedenini bilirsiniz.
