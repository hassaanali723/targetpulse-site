---
title: MX kaydı
seoTitle: "MX kaydı nedir? Anlamı ve işleyişi"
description: MX kaydı nedir, e-posta sunucuları e-postayı nereye teslim edeceğini onunla nasıl bulur, öncelik numarası ne demektir ve eksik MX kaydı ne gösterir?
slug: mx-kaydi
date: 2026-11-05
updated: 2026-11-05
keyword: mx kaydı
short: MX kaydı, bir alan adının e-postalarını hangi sunucunun aldığını belirten bir ayardır. name@example.com adresine gönderdiğinizde e-posta sunucunuz, e-postayı nereye teslim edeceğini bulmak için example.com alan adının MX kaydını sorgular.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Bir adresin e-posta alıp alamayacağını kontrol edin
---

## MX kaydı nedir?

MX kaydı, bir alan adının e-postalarını hangi sunucunun aldığını belirten bir ayardır. MX, mail exchanger (posta değişim sunucusu) ifadesinin kısaltmasıdır.

Önce birkaç terim. Alan adı, example.com gibi bir addır. Aynı zamanda bir e-posta adresinin @ işaretinden sonra gelen kısmıdır. Sunucu, sürekli çalışan ve e-postaları işleyen bir bilgisayardır. DNS, alan adlarını sunuculara bağlayan herkese açık dizindir. DNS içindeki her girişe kayıt (record) denir. Yani MX kaydı, bir DNS kaydı türüdür.

Bir alan adının MX kayıtları, o alan adı için gelen e-postaları kabul eden sunucuları listeler. Bu kayıtları herkes sorgulayabilir.

Bir alan adının birden fazla MX kaydı olabilir. Her MX kaydının bir öncelik numarası vardır. Numarası düşük olan sunucular önce denenir. Bir Google Workspace alan adı için tipik bir kurulum şöyledir:

| öncelik | e-posta sunucusu |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

Önceliği 1 olan sunucu yanıt vermezse gönderen sunucu bir sonrakini dener.

## Basit bir örnek

Tek bir e-postaya şunlar olur.

1. **Ömer bir e-posta yazar.** Ömer, name@example.com adresindeki muhasebecisine e-posta göndermek ister. Gönder düğmesine tıklar.
2. **E-posta sunucusu alan adını okur.** Adresin example.com ile bittiğini görür.
3. **MX kaydını sorgular.** example.com için e-postaları hangi sunucunun aldığını DNS sistemine sorar.
4. **DNS yanıt verir.** example.com alan adının MX kaydında şu yazar: mail.example.com, öncelik 10.
5. **E-postayı teslim eder.** Ömer'in e-posta sunucusu mail.example.com sunucusuna bağlanır ve e-postayı teslim eder.
6. **Muhasebeci e-postayı alır.** E-posta muhasebecinin gelen kutusuna ulaşır.

Ömer bu adımları hiç görmez. E-posta sunucusu bunları onun yerine yapar. Ancak 4. adımda bir MX kaydı olmasaydı e-postanın gidecek bir yeri olmazdı.

## E-posta MX kayıtlarını nasıl kullanır?

`name@example.com` adresine gönderdiğinizde e-posta sunucunuz üç şey yapar:

1. `example.com` için MX kayıtlarını sorgular.
2. Öncelik numarası en düşük olan sunucuya bağlanır.
3. E-postayı SMTP ile teslim eder. SMTP, e-posta sunucularının birbirine e-posta göndermesinin standart yoludur.

E-posta standardı RFC 5321 bu süreci açıklar. MX kaydı olmayan alan adlarını da ele alır. Alan adının normal bir A kaydı varsa e-posta sunucuları bu kaydı MX kaydı gibi kullanır. A kaydı, bir alan adını tek bir sunucunun numarasına, yani IP adresine bağlayan bir DNS kaydıdır.

## MX kaydı bir adres hakkında size ne söyler?

MX kaydı, e-posta doğrulamadaki ilk gerçek kontroldür. Ondan önce sözdizimi (syntax) kontrolü gelir. Sözdizimi kontrolü yalnızca biçime bakar, örneğin adreste tek bir @ işareti olduğuna ve boşluk olmadığına.

MX kaydı sorgusunun üç olası sonucu vardır:

- **MX kaydı da A kaydı da yok.** Alan adı e-posta alamaz. Bu alan adındaki her adres geçersizdir. **Örnek:** biri gmail.com gibi bilinen bir alan adını iki harfinin yeri değişmiş şekilde yazar. Bu tür bir yazım hatası genellikle bu adımda başarısız olur.
- **MX kaydı var.** Alan adı e-posta alabilir. Bu, belirli bir posta kutusunun var olup olmadığını söylemez. Bunun için bir sonraki adım gerekir: sunucuyla bir SMTP konuşması. **Örnek:** example.com alan adının bir MX kaydı vardır, ancak bu, anna@example.com posta kutusunun gerçek olduğunu kanıtlamaz.
- **MX kaydı bilinen bir ağ geçidini gösteriyor.** E-posta sunucusu Proofpoint, Mimecast veya Barracuda ise alan adı bir [güvenli e-posta ağ geçidi](/glossary/secure-email-gateway) kullanıyordur. Ağ geçidi, bir şirketin e-postalarını çalışanların gelen kutularına ulaşmadan önce kontrol eden bir güvenlik hizmetidir. Bu alan adlarında posta kutusu kontrolü farklı davranır.

## Gönderenler için neden önemlidir?

Herkes bir DNS sorgusuyla bir alan adının MX kaydını okuyabilir. Ücretsiz [MX kaydı sorgulama](/mx-lookup) aracımız, herhangi bir alan adının MX kayıtlarını gösterir. Bir şirket e-posta sağlayıcısını değiştirdiğinde veya kapandığında MX kayıtları değişir veya kaybolur. Adresler çalışmayı bırakır. Kimse size haber vermez. Bu, eski listelerde görülen [hard bounce'ların](/glossary/hard-bounce) yaygın bir nedenidir. Hard bounce, kalıcı olarak reddedilen bir e-postadır.

**Örnek:** 2021'de bir fuarda old-firm.example şirketinden 40 kişiyle tanıştınız. Şirket 2024'te kapanır ve alan adının artık bir MX kaydı yoktur. Bu 40 kişiye gönderdiğiniz her e-posta artık bounce olur.

## Doğrulama aracı bunu nasıl ele alır?

Bir [mail adresi doğrulama aracı](/email-checker) önce MX kaydını sorgular. MX kaydı yoksa adres geçersiz olarak işaretlenir ve başka kontrol yapılmaz. MX kaydı varsa araç o sunucuya bağlanır ve posta kutusunun var olup olmadığını sorar. MX sorgusu, araca sunucunun ne tür bir sunucu olduğunu da söyler. Bu, [catch-all alan adları](/glossary/catch-all-email) ve ağ geçitleri için önemlidir.

Bir [toplu mail doğrulama aracı](/bulk-email-verifier), listenizdeki her alan adı için aynı MX kaydı sorgusunu yapar. [E-posta doğrulama](/), siz göndermeden önce e-posta alamayan alan adlarını bulmak için MX kaydını kullanır. Kendi DNS ayarlarınızda hiçbir şeyi değiştirmez.
