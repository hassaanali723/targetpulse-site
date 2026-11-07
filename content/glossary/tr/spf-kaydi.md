---
title: SPF kaydı
seoTitle: "SPF kaydı: anlamı ve işleyişi"
description: SPF kaydı nedir, neye benzer, alıcı sunucular onu nasıl kontrol eder, on DNS sorgusu sınırı nedir ve kontrol başarısız olunca hangi bounce kodları gelir?
slug: spf-kaydi
date: 2026-11-05
updated: 2026-11-05
keyword: spf kaydı
short: SPF kaydı, alan adınızda bulunan ve o alan adı adına e-posta göndermesine izin verilen sunucuları listeleyen bir metin satırıdır. Alıcı sunucular, alan adınızdan geldiğini söyleyen bir e-postanın sizin sunucularınızdan biri tarafından gönderildiğini doğrulamak için bu kaydı kontrol eder.
related: dkim, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, return-path
cta: Kimlik doğrulama bir tür bounce sorununu çözer. E-posta doğrulama diğerini çözer
---

## SPF kaydı nedir?

SPF kaydı, alan adınızda bulunan ve o alan adı adına e-posta göndermesine izin verilen sunucuları listeleyen bir metin satırıdır. SPF, Sender Policy Framework ifadesinin kısaltmasıdır. RFC 7208 içinde tanımlanmıştır.

Önce birkaç terim. Alan adı, bir e-posta adresinde @ işaretinden sonra gelen addır, örneğin example.com. Sunucu, e-posta gönderen veya alan bir bilgisayardır. DNS, bir alan adının ayarlarını yayımladığı herkese açık dizindir. Her ayara kayıt (record) denir. SPF kaydı bir [DNS TXT kaydıdır](/glossary/dns-txt-record), yani düz metin tutan bir DNS kaydıdır.

Basit bir SPF kaydı şöyle görünür:

`v=spf1 include:_spf.google.com -all`

Her parçanın bir anlamı vardır:

- `v=spf1`, bunun bir SPF kaydı olduğunu belirtir.
- `include:_spf.google.com`, Google'ın listelediği her sunucunun bu alan adı adına göndermesine izin verildiğini belirtir.
- `-all`, diğer tüm sunuculardan gelen e-postaların reddedilmesini söyler.
- `~all` daha yumuşak bir sondur. Diğer sunuculardan gelen e-postaların şüpheli sayılmasını, ancak reddedilmemesini söyler.

## Basit bir örnek

Tek bir SPF kaydı küçük bir işletmeyi şöyle korur.

1. **Bir fırın Google Workspace kullanır.** Rosa's Bakery, e-postalarını Google Workspace üzerinden rosa@bakery.example adresinden gönderir.
2. **Fırın bir SPF kaydı yayımlar.** Kayıtta `v=spf1 include:_spf.google.com -all` yazar. Bu, bakery.example adına yalnızca Google'ın sunucularının e-posta gönderebileceği anlamına gelir.
3. **Rosa bir müşteriye e-posta gönderir.** E-posta Google'ın sunucularından birinden çıkar.
4. **Müşterinin sunucusu kontrol eder.** bakery.example için SPF kaydını sorgular. Google'ın sunucusuna izin verilmiştir, bu yüzden sonuç pass olur.
5. **Biri sahte bir e-posta gönderir.** Bir dolandırıcı, bakery.example alan adından geldiğini söyleyen bir e-posta gönderir. E-posta, kayıtta olmayan bir sunucudan gelir.
6. **Kontrol başarısız olur.** Kayıt `-all` ile bittiği için müşterinin sunucusu sahte e-postayı reddedebilir.

## Alıcı sunucular kaydı nasıl kontrol eder?

Bir e-posta geldiğinde alıcı sunucu, [Return-Path](/glossary/return-path) adresindeki alan adını okur. Return-Path, bounce mesajlarının gönderildiği adrestir. Bounce, bir e-postanın teslim edilmediğini gönderene bildiren otomatik mesajdır.

Sunucu o alan adının SPF kaydını alır. Sonra e-postayı teslim eden IP adresinin kayıtta olup olmadığını kontrol eder. IP adresi, internette bir sunucuyu tanımlayan numaradır. Üç yaygın sonuç vardır:

- **Pass.** IP adresi kayıttadır. E-posta, izin verilen bir sunucudan gelmiştir.
- **Fail.** IP adresi kayıtta değildir ve kayıt `-all` ile biter. Sunucu e-postayı reddedebilir.
- **Softfail.** IP adresi kayıtta değildir ve kayıt `~all` ile biter. Sunucu e-postayı kabul eder, ancak şüpheli olarak işaretler.

Microsoft Exchange Online, kontrolden geçemeyen bir e-postayı `5.7.23 The message was rejected because of Sender Policy Framework violation` ile reddeder. Gmail, hiç kimlik doğrulaması olmayan bir e-posta için `550 5.7.26` döndürür. İki kod da 5 ile başlar. Adreste sorun olmasa bile gönderim aracınız bunları [hard bounce](/glossary/hard-bounce) olarak kaydeder.

## Kimlerin SPF kaydına ihtiyacı vardır?

Toplu e-posta gönderen herkesin SPF kaydına ihtiyacı vardır. Google'ın gönderen yönergeleri, Gmail'e günde 5.000 veya daha fazla mesaj gönderenlerden SPF ve DKIM ister. DMARC'ı da zorunlu tutar. Microsoft da Outlook.com, Hotmail ve Live adreslerine günde 5.000'den fazla e-posta gönderen alan adlarından aynı üç kaydı ister. Microsoft bu kuralı 5 Mayıs 2025'te uygulamaya başladı.

Bundan daha az gönderiyorsanız da bu kayıtlar önemlidir. Bu kayıtlar olmadan e-postanızın spam klasörüne gitme olasılığı daha yüksektir.

## On DNS sorgusu sınırı

RFC 7208, bir SPF kontrolünü on DNS sorgusuyla (DNS lookup) sınırlar. Sorgu, alıcı sunucunun DNS sistemine sorduğu tek bir sorudur. Kaydınızdaki her `include:`, `a`, `mx` ve `redirect` bir sorgu olarak sayılır. Dahil ettiğiniz kayıtların içindeki sorgular da sayılır. Toplam ondan fazlaysa kontrol kalıcı bir hata döndürür. Çoğu alıcı sunucu bu hatayı fail olarak değerlendirir.

Bir SPF kaydının bozulmasının en yaygın yolu budur. Bir şirket kayda e-posta araçlarını birbiri ardına ekler. On birinci sorgu eklendiğinde kaydın tamamı çalışmayı bırakır. [SPF kaydı kontrol aracı](/spf-checker), her include içindekiler dahil, kaydınızdaki sorguları sayar.

**Örnek:** bir şirketin SPF kaydı; ofis e-postasını, bülten aracını, destek masası (help desk) aracını ve fatura aracını içerir. Bunların bazıları da içlerinde başka kayıtlar barındırır. Hepsi birlikte 11 sorgu gerektirir. O günden itibaren, şirketin kendi ofisinden gönderilen e-postalar için bile SPF kontrolü başarısız olur.

## SPF üç kayıttan biridir

- SPF, e-postayı hangi sunucunun gönderdiğini kontrol eder.
- [DKIM](/glossary/dkim), e-postanın gönderildikten sonra değiştirilmediğini kontrol eder.
- [DMARC](/glossary/dmarc), iki kontrolü okuyucunun gördüğü From adresine bağlar. Ayrıca kontroller başarısız olduğunda ne yapılacağını alıcı sunuculara söyler.

Bir alan adının üçüne de ihtiyacı vardır. [Hard bounce ve soft bounce](/blog/hard-bounce-vs-soft-bounce) rehberi, hata kodlarının bir bounce raporunda nasıl göründüğünü gösterir.

## SPF kayıtları ve e-posta doğrulama

SPF kaydı, alan adınız adına hangi sunucuların e-posta gönderebileceğini kanıtlar. Alıcının adresinin var olduğunu kanıtlamaz. Kimlik doğrulaması doğru yapılmış bir e-posta da artık var olmayan bir adrese giderse bounce olur. Bir [mail adresi doğrulama aracı](/email-checker), siz göndermeden önce alıcı sunucuya bir posta kutusunun var olup olmadığını sorar. Bir [toplu mail doğrulama aracı](/bulk-email-verifier) aynı işi bütün bir liste için yapar. Doğru bir SPF kaydı `5.7.23` gibi kimlik doğrulama bounce'larını önlemeye yardımcı olur. [E-posta doğrulama](/) ise `5.1.1` gibi kodlarla bounce olacak adresleri bulur.
