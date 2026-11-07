---
title: PTR kaydı
seoTitle: "PTR kaydı nedir? Anlamı ve işleyişi"
description: PTR kaydı nedir, e-posta sunucuları onu neden kontrol eder, gönderen IP adresinin PTR kaydı yoksa ne olur ve PTR kaydı nasıl kurulur?
slug: ptr-kaydi
date: 2026-11-05
updated: 2026-11-05
keyword: ptr kaydı
short: PTR kaydı, bir IP adresini bir sunucu adına bağlayan bir DNS kaydıdır. Normal bir DNS kaydının tersidir. E-posta sunucuları kendilerine gönderim yapan IP adresinin PTR kaydını kontrol eder. Bazıları PTR kaydı olmayan bir IP adresinden gelen e-postayı reddeder.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Yalnızca DNS ayarlarınızı değil, listenizi de kontrol edin
---

## PTR kaydı nedir?

PTR kaydı, bir IP adresini bir sunucu adına bağlayan bir ayardır. PTR, pointer (işaretçi) kelimesinin kısaltmasıdır.

Önce birkaç terim. Sunucu, örneğin e-posta göndermek için sürekli çalışan bir bilgisayardır. IP adresi, internette bir sunucuyu tanımlayan numaradır, örneğin `203.0.113.10`. Ana bilgisayar adı (hostname), tek bir sunucunun adıdır, örneğin `mail.example.com`. DNS, adları ve numaraları birbirine bağlayan herkese açık dizindir. DNS içindeki her girişe kayıt (record) denir.

Normal bir DNS kaydı bir adı bir IP adresine bağlar. Örneğin `mail.example.com`, `203.0.113.10` adresini gösterir. PTR kaydı bunun tersini yapar. `203.0.113.10` adresini `mail.example.com` adına bağlar. Buna ters DNS (reverse DNS) denir.

PTR kaydı, alan adınızın DNS ayarlarında bulunmaz. IP adresinin sahibine ait ayrı bir DNS bölgesinde (zone) bulunur. Bölge, tek bir sahibin yönettiği DNS kayıtlarının bütünüdür. Sahip genellikle barındırma (hosting) şirketiniz veya e-posta sağlayıcınızdır. Bir PTR kaydını kurmak veya değiştirmek için onlardan istersiniz.

## Basit bir örnek

Gönderen bir sunucunun PTR kaydı olmadığında şunlar olur.

1. **Bir şirket bir e-posta sunucusu kurar.** Green Garden Ltd, `203.0.113.10` IP adresinde kendi e-posta sunucusunu çalıştırır.
2. **Bir e-posta gönderir.** Sunucu, Gmail adresi olan bir müşteriye bülten gönderir.
3. **Gmail PTR kaydını sorgular.** Gmail, `203.0.113.10` IP adresini görür. Bu adrese hangi adın ait olduğunu DNS sistemine sorar.
4. **Yanıt gelmez.** Bu IP adresi için kimse bir PTR kaydı kurmamıştır.
5. **Gmail e-postayı reddeder.** `550 5.7.25` kodunu döndürür. Mesajda, gönderen IP adresinin PTR kaydı olmadığı yazar.
6. **Green Garden sorunu çözer.** Barındırma şirketinden, `203.0.113.10` için PTR kaydını `mail.greengarden.example` olarak ayarlamasını ister.
7. **Bir sonraki e-posta bu kontrolden geçer.** Gmail PTR kaydını yeniden sorgular ve aynı IP adresini geri gösteren bir ad bulur.

Müşterinin adresinde baştan beri sorun yoktu. Eksik olan yalnızca gönderenin ayarıydı.

## E-posta sunucuları neden kontrol eder?

Sunucunuz bir alıcı sunucuya bağlandığında alıcı sunucu IP adresinizi görür. Bu IP'nin PTR kaydını sorgular. Sonra iki şeyi kontrol eder:

1. IP adresinin bir PTR kaydı var mı?
2. PTR kaydındaki ana bilgisayar adı aynı IP adresini geri gösteriyor mu?

**Örnek:** `203.0.113.10` için PTR kaydında `mail.greengarden.example` yazar. `mail.greengarden.example` için normal DNS kaydında `203.0.113.10` yazar. Her biri diğerini gösterir, bu yüzden iki sorunun cevabı da evettir.

İkisi de doğruysa gönderen, birinin bilerek kurduğu gerçek bir e-posta sunucusu gibi görünür. PTR kaydı yoksa gönderen şu üç şeyden birine benzer:

- bir ev internet bağlantısı;
- virüslü bir bilgisayar;
- kimsenin yapılandırmadığı bir sunucu.

Spam çoğu zaman bunlardan gelir.

## PTR kaydı olmadan ne olur?

Bazı sağlayıcılar e-postayı reddeder. Gmail'in hata başvuru listesinde `550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record` hatası yer alır. Bu kalıcı bir rettir. Adres var olsa bile gönderim aracınız bunu bir [hard bounce](/glossary/hard-bounce) olarak kaydeder. Hard bounce, kalıcı olarak reddedilen bir e-postadır.

Diğer sağlayıcılar e-postayı kabul eder, ancak ona daha düşük bir puan verir. Daha düşük puan, e-postanın spam klasörüne gitme olasılığının daha yüksek olduğu anlamına gelir. Yani hiçbir hata geri gelmese bile eksik bir PTR kaydı size zarar verebilir.

## PTR kaydı nasıl kurulur?

1. E-postanızın gönderildiği IP adresini bulun.
2. Bu adresin göstereceği ana bilgisayar adını seçin. Örnek: `mail.example.com`.
3. Bu ana bilgisayar adının aynı IP adresini gösteren normal bir DNS kaydı olduğundan emin olun.
4. Barındırma şirketinizden veya e-posta sağlayıcınızdan, IP adresinin PTR kaydını bu ana bilgisayar adına ayarlamasını isteyin.
5. IP adresi için bir ters DNS sorgusu yapın. Sorgu, 2. adımda seçtiğiniz ana bilgisayar adını göstermelidir.

Google Workspace, Microsoft 365, SendGrid veya Amazon SES üzerinden gönderiyorsanız gönderim IP adresleri sağlayıcıya aittir. PTR kayıtları zaten kuruludur. Yalnızca kendi e-posta sunucunuzu çalıştırıyorsanız veya özel bir IP adresi kullanıyorsanız PTR kaydı kurmanız gerekir. Özel IP adresi (dedicated IP), yalnızca sizin şirketinizin e-posta gönderdiği adrestir.

## PTR kayıtları ve doğrulama

PTR kaydı, gönderenin IP adresiyle ilgilidir. Alıcının adresiyle ilgili değildir. Bir [mail adresi doğrulama aracının](/email-checker) listenizi doğrulamak için sizin PTR kaydınıza ihtiyacı yoktur. Bir [toplu mail doğrulama aracının](/bulk-email-verifier) da ihtiyacı yoktur.

Ancak bir doğrulama aracının kendi IP adreslerinin her birinde PTR kaydı olması gerekir. Bu kayıtlar olmadan alıcı sunucular onunla konuşmayı reddeder. Bir doğrulama servisinin, dizüstü bilgisayardan çalıştırılan bir betikten farklı yanıtlar almasının bir nedeni budur. [E-posta doğrulama](/), listenizdeki adreslerin var olduğunu kontrol eder. Kendi PTR kaydınız ise barındırma şirketiniz veya e-posta sağlayıcınızla düzelttiğiniz ayrı bir ayardır.
