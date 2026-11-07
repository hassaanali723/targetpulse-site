---
title: Return-Path
seoTitle: "Return-Path nedir? Anlamı ve işleyişi"
description: Return-Path adresi nedir, From adresinden farkı nedir, bounce mesajları nereye gider ve SPF ile DMARC onu neden kontrol eder? Basit bir örnekle.
slug: return-path
date: 2026-11-05
updated: 2026-11-05
keyword: return path
short: Return-Path, bounce mesajlarının gittiği adrestir. Onu gönderen sunucu belirler ve çoğu zaman gelen kutunuzda gördüğünüz From adresinden farklıdır. SPF, Return-Path adresindeki alan adını kontrol eder.
related: spf, dmarc, mailer-daemon, ndr, hard-bounce, email-spoofing
cta: Artık var olmayan adresleri bounce olmadan önce kaldırın
---

## Return-Path nedir?

Return-Path, bounce mesajlarının gittiği adrestir. Bounce mesajı, bir e-posta teslim edilemediğinde sunucunun gönderdiği otomatik bildirimdir.

Her e-postanın iki gönderen adresi vardır. Birincisi **From** adresidir. Bu, okuyucunun gelen kutusunda gördüğü ad ve adrestir. İkincisi **Return-Path** adresidir. Okuyucular onu görmez. E-posta sunucuları onu kullanır.

Kâğıt bir mektup düşünün. Zarfın içindeki mektubun en üstünde sizin adınız yazar. Bu, From adresidir. Zarfın köşesinde ise bir iade adresi vardır. Postane bu adresi yalnızca mektubu teslim edemediğinde kullanır. Bu da Return-Path adresidir.

Return-Path, zarf göndereni (envelope sender) veya bounce adresi olarak da adlandırılır. Gönderen sunucu, teslimatın başında bu adresi alıcı sunucuya verir. Alıcı sunucu da bu adresi e-postanın en üstünde `Return-Path:` ile başlayan bir satıra yazar.

## Basit bir örnek

Bir e-posta bounce olduğunda Return-Path şöyle çalışır.

1. **Tom bir bülten gönderir.** Tom bir fırın işletir. Aylık bültenini bir e-posta servis sağlayıcısı üzerinden gönderir. Bu sağlayıcı, sizin adınıza toplu e-posta gönderen bir şirkettir.
2. **İki adres belirlenir.** From adresi tom@bakery.example olur. Sağlayıcı, Return-Path adresini kendi bounce adresi olarak belirler, örneğin bounces@mail.provider.example.
3. **Bir müşteri ayrılmıştır.** Listedeki bir müşteri iş değiştirmiştir. Eski adresi artık yoktur.
4. **Bounce mesajı Return-Path adresine gider.** Alıcı sunucu bounce bildirimini Tom'a değil, bounces@mail.provider.example adresine gönderir.
5. **Sağlayıcı gereğini yapar.** Sağlayıcı bounce mesajını okur ve o adrese göndermeyi durdurur. Tom bildirimi hiç görmez.

Bültenlerden gelen bounce mesajlarının çoğu zaman sizin gelen kutunuza ulaşmamasının nedeni budur. Bu mesajlar Return-Path adresine gider ve sağlayıcınız onları işler.

## Return-Path ve From adresi

| | From adresi | Return-Path |
|---|---|---|
| **Kim görür?** | Okuyucu, gelen kutusunda | E-posta sunucuları |
| **Kim belirler?** | Siz veya e-posta uygulamanız | Gönderen sunucu |
| **Ne işe yarar?** | E-postayı kimin gönderdiğini gösterir | Bounce mesajlarını alır |
| **SPF kontrol eder mi?** | Hayır | Evet |

İki adres aynı olabilir. Gmail veya Outlook'tan normal bir e-posta gönderdiğinizde genellikle aynıdır. Bir sağlayıcı üzerinden gönderdiğinizde ise genellikle farklıdır.

## Bir e-postanın Return-Path adresi nasıl bulunur?

E-postanın tüm başlıklarını açın. Gmail'de e-postayı açın, üç noktaya tıklayın ve **Orijinali göster** seçeneğini seçin. Outlook'ta mesaj özelliklerini açın. Üst kısımda şuna benzer bir satır arayın:

`Return-Path: <bounces@mail.provider.example>`

## SPF ve DMARC için neden önemlidir?

[SPF](/glossary/spf), alan adınızda bulunan ve e-postanızı göndermesine izin verilen sunucuları listeleyen bir kuraldır. SPF, Return-Path adresindeki alan adını kontrol eder. From adresini kontrol etmez.

[DMARC](/glossary/dmarc) ikinci bir test ekler. SPF kontrolünden geçen alan adının From adresindeki alan adıyla eşleşip eşleşmediğini sorar. Sağlayıcınız kendi Return-Path alan adını kullanıyorsa SPF sağlayıcı için geçebilir, ancak sizin From alan adınızla eşleşmeyebilir.

Birçok sağlayıcı, Return-Path adresini kendi alan adınızda belirlemenize izin verir. Buna çoğu zaman özel bounce alan adı (custom bounce domain) denir. Bu ayarla SPF sizin kendi alan adınız için geçer ve DMARC bu sonucu sayabilir.

**Örnek:** Tom'un From adresi bakery.example alan adındadır. Sağlayıcısı, Return-Path adresini bounces.bakery.example olarak belirlemesine izin verir. Artık SPF kontrolünden geçen alan adı, From adresindeki alan adıyla eşleşir.

## Doğrulama aracı nasıl yardımcı olur?

Listenizden gelen her bounce mesajı Return-Path adresine gider. Sağlayıcınız bunları sayar. Çok fazla bounce geri geldiğinde birçok sağlayıcı hesabı duraklatır veya listeyi temizlemenizi ister.

Bir [mail adresi doğrulama aracı](/email-checker), siz herhangi bir şey göndermeden önce alıcı sunucuya bir adresin var olup olmadığını sorar. Artık var olmayan adresler önce kaldırılır. Böylece Return-Path adresine çok daha az bounce mesajı ulaşır.
