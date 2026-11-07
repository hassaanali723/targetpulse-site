---
title: Catch-all e-posta
seoTitle: "Catch-all e-posta nedir? Anlamı ve işleyişi"
description: Catch-all e-posta alan adı nedir, şirketler neden kurar, normal bir kontrol bu adresleri neden doğrulayamaz ve bu adreslerle ne yapmalısınız?
slug: catch-all-e-posta
date: 2026-11-05
updated: 2026-11-05
keyword: catch all e-posta
short: Catch-all e-posta alan adı, var olmayan adlar dahil, üzerindeki herhangi bir adrese gönderilen postayı kabul eder. Sunucu her şeye evet dediği için normal bir e-posta kontrolü, belirli bir posta kutusunun gerçek olup olmadığını anlayamaz.
related: mx-record, smtp, hard-bounce, greylisting, secure-email-gateway, email-blacklist
cta: Catch-all adresler için gerçek bir yanıt alın
---

## Catch-all e-posta nedir?

Catch-all e-posta alan adı, üzerindeki herhangi bir adrese gönderilen postayı kabul eder. Adresin var olması gerekmez.

Çoğu alan adı, sahip olmadığı bir ada gönderilen e-postayı reddeder. Catch-all alan adı reddetmez. E-postayı kabul eder ve ortak bir posta kutusuna koyar. Bazen de kimseye haber vermeden siler.

Aynı ayarın başka adları da vardır: **accept-all** (her adresi kabul eden) ve **catch-all alan adı**. Birçok doğrulama aracı bu adresleri "catch-all", "accept-all" veya "risky" (riskli) olarak etiketler.

## Basit bir örnek

1. **Acme bir catch-all kurar.** Acme, acme.example alan adına sahip küçük bir şirkettir. Ofis yöneticisi, hiçbir müşteri e-postası kaybolmasın diye catch-all ayarını açar.
2. **Sara gerçek bir kişiye yazar.** jon@acme.example adresine e-posta gönderir. Jon orada çalışır. E-postayı alır.
3. **Sara bir yazım hatası yapar.** Bir sonraki sefer jonn@acme.example yazar. Böyle biri yoktur.
4. **Sunucu yine evet der.** E-posta bounce olmaz. Ortak posta kutusuna düşer ve belki kimse okumaz.

Sara hiçbir hata görmez, bu yüzden iki e-postanın da ulaştığını düşünür. Jon'a yalnızca biri ulaşmıştır.

## Şirketler neden catch-all kullanır?

Şirketler e-posta kaçırmamak için catch-all ayarını açar. Müşteriler yazım hatası yapar. Ayrılan çalışanların adlarına posta gelmeye devam eder. Catch-all, bunların hepsini tek bir yerde toplar.

## Catch-all neden e-posta doğrulama için bir sorundur?

Normal bir e-posta kontrolü sunucuya tek bir soru sorar: "Bu adres için posta kabul ediyor musunuz?" Catch-all alan adında cevap her zaman evettir. Gerçek bir kişi de uydurma bir ad da aynı cevabı alır.

Bu yüzden basit bir kontrol posta kutusunu doğrulayamaz. Yalnızca alan adının her şeyi kabul ettiğini bildirebilir.

Bu durum en çok B2B listelerinde önemlidir. 10.000 gerçek iş e-postasıyla yapılan ve sonuçları yayımlanan bir testte, adreslerin %28'i catch-all alan adlarındaydı. Testi, e-posta doğrulama hizmeti satan bir şirket olan LeadMagic yaptı. Bu yüzden sonucu bir hizmet sağlayıcısının kendi testi olarak değerlendirin.

## Catch-all adreslerle ne yapmalısınız?

Üç seçeneğiniz vardır:

| Seçenek | Ne olur? |
|---|---|
| **Kaldırmak** | Risk yoktur, ancak gerçek kişileri de kaybedersiniz |
| **Göndermek** | Bazıları gerçek kişilere ulaşır, bazıları kaybolur veya daha sonra bounce olur |
| **Daha derin kontrol etmek** | Basit kontrolün ötesinde test yapan bir doğrulama aracı, gerçek adresleri sahtelerden ayırır |

## Doğrulama aracı nasıl yardımcı olur?

Giggal.ai, her kontrolün bir parçası olarak [catch-all doğrulama](/catch-all-verification) yapar. "Riskli" etiketi yerine gerçek bir sonuç vermek için ek sinyaller kullanır. Sonuç teslim edilebilir veya teslim edilemez olur. Daha fazla örnek içeren uzun bir rehber için [Catch-all e-posta adresi nedir?](/blog/what-is-a-catch-all-email-address) yazımızı okuyun.
