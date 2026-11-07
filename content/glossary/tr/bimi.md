---
title: BIMI
seoTitle: "BIMI nedir? Anlamı ve işleyişi"
description: E-postada BIMI nedir, marka logonuzu gelen kutusunda nasıl gösterir, önce neye ihtiyacınız var, BIMI kaydı neye benzer ve hangi gelen kutuları logoyu gösterir?
slug: bimi
date: 2026-11-05
updated: 2026-11-05
keyword: bimi e-posta
short: BIMI, destekleyen gelen kutularında e-postalarınızın yanında marka logonuzu gösteren bir e-posta standardıdır. Brand Indicators for Message Identification ifadesinin kısaltmasıdır. Yalnızca alan adınız quarantine veya reject politikasıyla DMARC kontrolünden geçtiğinde çalışır.
related: dmarc, dkim, spf, email-spoofing, dns-txt-record, domain-reputation
cta: Logo yalnızca e-posta gerçek bir gelen kutusuna ulaşırsa işe yarar
---

## E-postada BIMI nedir?

BIMI, Brand Indicators for Message Identification ifadesinin kısaltmasıdır. Bir markanın e-postalarının yanında kendi logosunu göstermesini sağlayan bir e-posta standardıdır. Logo, Gmail ve Apple Mail gibi BIMI'yi destekleyen gelen kutularında görünür. Standardı, e-posta şirketlerinden oluşan bir çalışma grubu olan BIMI Group yayımlar.

BIMI tek başına güvenlik sağlamaz. Logoyu yalnızca DMARC kontrolünden zaten geçen e-postalarda gösterir. Alan adınızı koruyan şey, bu noktaya gelmek için yaptığınız çalışmadır.

## Örnek: Gmail'de bir marka logosu

Telefonunuzda Gmail'i açın. Listedeki her e-postanın solunda küçük, yuvarlak bir resim vardır. Çoğu gönderen için Gmail, gönderen adının ilk harfini içeren bir daire gösterir. Bazı markalar için Gmail bu dairede markanın kendi logosunu gösterir. Bu markalar BIMI kullanır.

Diyelim ki example.com alan adındaki bir ayakkabı mağazası BIMI'yi kuruyor. Mağaza, Priya'nın Gmail adresine bir bülten gönderiyor. Şunlar olur:

1. Gmail, example.com için SPF, DKIM ve DMARC kontrollerini yapar. E-posta DMARC kontrolünden geçer.
2. Gmail, mağazanın DMARC politikasının quarantine veya reject olduğunu görür.
3. Gmail, `default._bimi.example.com` adresindeki BIMI kaydını sorgular.
4. Kayıt, mağazanın logo dosyasının ve marka sertifikasının adresini verir.
5. Gmail sertifikayı kontrol eder, sonra logoyu e-postanın yanında gösterir.

Herhangi bir adım başarısız olursa Priya her zamanki harfi görür. E-postanın kendisi yine normal şekilde teslim edilir.

## BIMI için neye ihtiyacınız var?

Gmail'de bir logonun görünmesi için önce üç şeye ihtiyacınız vardır.

- **Uygulanan bir DMARC politikası.** [DMARC](/glossary/dmarc) politikanız `p=quarantine` veya `p=reject` olmalıdır. Google, BIMI'nin `p=none` politikasını desteklemediğini belirtir.
- **SVG Tiny PS dosyası olarak logo.** SVG, piksellerden değil şekillerden oluşan bir resim biçimidir. SVG Tiny PS, SVG'nin gelen kutuları için hazırlanmış sadeleştirilmiş bir sürümüdür. Resim kare olmalı ve marka adınızı içeren bir başlık (title) taşımalıdır. İçinde komut dosyası (script), animasyon veya başka dosyalara bağlantı bulunamaz. Dosya boyutu 32 KB altında kalmalıdır.
- **Bir marka sertifikası (mark certificate).** Bu, logoyu kullanma hakkınızı kontrol eden bir şirketten, yani bir sertifika otoritesinden (certificate authority) alınan bir dosyadır. Gmail iki türü kabul eder.

| Sertifika | Tescilli marka gerekir mi? | Gmail'in gösterdiği |
| --- | --- | --- |
| VMC (Verified Mark Certificate) | Evet | Logonuz ve mavi bir onay işareti |
| CMC (Common Mark Certificate) | Hayır | Onay işareti olmadan logonuz |

## BIMI kaydı

BIMI kaydı bir [DNS TXT kaydıdır](/glossary/dns-txt-record). DNS, bir alan adının ayarlarını yayımladığı herkese açık dizindir. TXT kaydı, DNS içinde düz metin tutan bir giriştir. BIMI kaydı `default._bimi.example.com` adresinde bulunur. Burada `default`, seçicidir (selector), yani kayda verilen bir etikettir.

```text
v=BIMI1; l=https://example.com/bimi/logo.svg; a=https://example.com/bimi/certificate.pem
```

- `v=BIMI1`, bunun bir BIMI kaydı olduğunu belirtir.
- `l=`, SVG logonuzun web adresidir.
- `a=`, VMC veya CMC sertifikanızın web adresidir. Bu sertifika bir PEM dosyasıdır.

Google'ın kendi örneklerinde `l=` alanı boş bırakılmış ve yalnızca `a=` doldurulmuş bir kayıt da yer alır. Bu kayıt çalışır, çünkü logo sertifika dosyasının içinde saklanır. Sertifika sağlayıcınızın önerisine uyun.

## Hangi gelen kutuları BIMI logolarını gösterir?

Destek, sağlayıcıya göre değişir. Aşağıdakiler, BIMI oluşturucu sayfamızda belirtilen kurallardır.

- **Gmail**, logoyu yalnızca VMC veya CMC ile gösterir.
- **Apple Mail**, logoyu yalnızca VMC ile gösterir.
- **Yahoo ve Fastmail**, hiç sertifikası olmayan bir kayıttan da logo gösterebilir.

BIMI'yi desteklemeyen gelen kutularında hiçbir şey değişmez. Sağlayıcıların yeni bir BIMI kaydını fark etmesi de biraz zaman alabilir. Bu yüzden ilk gün görünmeyen bir logo her zaman bir hata değildir.

## BIMI nasıl kurulur?

1. E-postanızı gönderen her servis için SPF ve DKIM'i kurun.
2. DMARC politikanızı quarantine veya reject olarak değiştirin. [DMARC oluşturucumuz](/dmarc-generator) kaydı sizin için hazırlar.
3. Logonuzu SVG Tiny PS dosyasına dönüştürün.
4. Logonun Gmail'de görünmesini istiyorsanız bir VMC veya CMC satın alın.
5. BIMI kaydını [BIMI oluşturucumuzla](/bimi-generator) hazırlayın. Araç, SVG dosyanızı tarayıcınızda da kontrol eder.
6. Kaydı DNS ayarlarınızda `default._bimi` adıyla yayımlayın.
7. Bir Gmail hesabına test e-postası gönderin ve logonun görünüp görünmediğine bakın.

## BIMI ve e-posta doğrulama

BIMI tek başına teslimatı iyileştirmez. Logoyu yalnızca gelen kutusuna ulaşan ve DMARC kontrolünden geçen e-postalarda gösterir. Var olmayan bir adrese giden e-posta bounce olur, bu yüzden logoyu kimse görmez. Bir [mail adresi doğrulama aracı](/email-checker) ve bir [toplu mail doğrulama aracı](/bulk-email-verifier) bu adresleri bulur. Böylece onları göndermeden önce kaldırabilirsiniz. [E-posta doğrulama](/) ile daha az e-postanız bounce olur ve logonuzu daha çok gerçek kişi görür.
