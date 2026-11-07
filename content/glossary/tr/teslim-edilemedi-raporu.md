---
title: Teslim edilemedi raporu (NDR)
seoTitle: "Teslim edilemedi raporu (NDR) nedir?"
description: Teslim edilemedi raporu (NDR) nedir, kim gönderir, içindeki kod ve bölümler nasıl okunur ve bu raporu aldığınızda ne yapmalısınız? Basit bir örnekle.
slug: teslim-edilemedi-raporu
date: 2026-11-05
updated: 2026-11-05
keyword: teslim edilemedi raporu
short: Teslim edilemedi raporu (NDR, non-delivery report), gönderdiğiniz bir mesajın teslim edilmediğini size bildiren otomatik bir e-postadır. Başarısız olan adresi belirtir ve nedenini açıklayan bir kod verir. Çoğu kişi buna bounce mesajı der.
related: mailer-daemon, hard-bounce, soft-bounce, backscatter, return-path, smtp
cta: Size NDR gönderecek adresleri kaldırın
---

## Teslim edilemedi raporu nedir?

Teslim edilemedi raporu (NDR, non-delivery report), bir mesajın teslim edilmediğini size bildiren otomatik bir e-postadır. Gönderdikten birkaç saniye veya birkaç saat sonra gelir.

Çoğu kişi buna bounce mesajı der. E-posta standartlarındaki teknik adı teslimat durumu bildirimidir (delivery status notification, DSN). Üç ad da aynı anlama gelir.

NDR genellikle `MAILER-DAEMON@` veya `postmaster@` gibi bir adresten gelir. Bunlar bir e-posta sunucusundaki otomatik gönderenlerdir. Bu mesajları kimse elle yazmaz. Onları [mailer-daemon](/glossary/mailer-daemon) adlı bir program oluşturur.

## Basit bir örnek

Bir NDR size şöyle ulaşır.

1. **Ana bir fatura gönderir.** Ana bir muhasebecidir. mark@oldfirm.example adresindeki bir müşteriye fatura gönderir.
2. **Adres artık yoktur.** Mark geçen yıl o şirketten ayrıldı. Posta kutusu silindi.
3. **Sunucu e-postayı reddeder.** oldfirm.example alan adındaki e-posta sunucusunda Mark için bir posta kutusu yoktur. Sunucu e-postayı reddeder.
4. **NDR gelir.** Bir dakika sonra Ana, "Undeliverable" veya "Delivery Status Notification (Failure)" başlıklı bir e-posta alır.
5. **Ana kodu okur.** İçinde `550 5.1.1` kodunu bulur. Bu kod, adresin var olmadığı anlamına gelir.
6. **Ana sorunu çözer.** Müşteriden yeni bir iletişim adresi ister ve faturayı bu adrese gönderir.

Sorunun nedeni NDR değildi. NDR yalnızca sorunu Ana'ya bildirdi.

## NDR'de neler bulunur?

Her e-posta uygulamasında farklı görünse de çoğu NDR aynı bölümlerden oluşur.

| Bölüm | Ne gösterir? |
|---|---|
| **Başarısız adres** | E-postanızı alamayan adres |
| **Hata kodu** | Sorunu açıklayan kısa bir kod, örneğin `550 5.1.1` |
| **Sunucu mesajı** | Alıcı sunucudan gelen bir cümle, örneğin "user unknown" (kullanıcı bilinmiyor) |
| **Orijinal e-postanız** | Neyin başarısız olduğunu görebilmeniz için çoğu zaman eklenir |

## Kod nasıl okunur?

Kodun ilk basamağı, sorunun türünü söyler.

| İlk basamak | Tür | Anlamı | Ne yapmalı? |
|---|---|---|---|
| **5** | [Hard bounce](/glossary/hard-bounce) | Hata kalıcıdır. Adres var olmayabilir veya sunucu sizi engellemiş olabilir. | Hangisi olduğunu öğrenene kadar bu adrese yeniden göndermeyin. |
| **4** | [Soft bounce](/glossary/soft-bounce) | Hata geçicidir. Gelen kutusu dolu veya sunucu meşgul olabilir. | Bekleyin. E-posta sunucunuz kendiliğinden yeniden dener. |

İki yaygın örnek:

- `550 5.1.1`, adresin var olmadığı anlamına gelir. Adresi listenizden kaldırın.
- `452 4.2.2`, posta kutusunun dolu olduğu anlamına gelir. Daha sonra yeniden deneyin.

## Göndermediğiniz bir e-posta için NDR aldığınızda

Bazen hiç yazmadığınız bir e-posta için NDR gelir. Buna [backscatter](/glossary/backscatter) denir. Spam gönderen biri sizin adresinizi gönderen alanına yazmıştır. E-posta başarısız olmuş ve NDR size gelmiştir. Hesabınız genellikle ele geçirilmemiştir. Alan adınız için SPF, DKIM ve DMARC kayıtlarını yayımlamak, alıcı sunucuların bunun yerine sahte e-postaları reddetmesine yardımcı olur.

## NDR'ler gönderenler için neden önemlidir?

Artık var olmayan bir adresten gelen her NDR aleyhinize sayılır. Google ve Microsoft gibi e-posta sağlayıcıları, e-postalarınızın kaçının var olmayan adreslere gittiğini izler. `5.1.1` kodlu çok sayıda NDR, onlara listenizin eski olduğunu gösterir.

**Örnek:** bir mağaza 5.000 eski kişiye bir kampanya teklifi gönderir. 400 NDR geri gelirse bu, listenin %8'i demektir. Birçok gönderim platformu bu tür sayılara sahip hesapları incelemeye alır veya duraklatır. Bu sayılar yalnızca bir örnektir.

## Doğrulama aracı nasıl yardımcı olur?

Bir [mail adresi doğrulama aracı](/email-checker), siz göndermeden önce alıcı sunucuya bir adresi sorar. Sunucu, bir NDR'ye yazacağı yanıtın aynısını verir. Fark şudur: hiçbir e-posta gönderilmemiştir. Bu yüzden hiçbir şey bounce olmaz ve itibarınız etkilenmez.
