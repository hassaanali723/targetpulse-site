---
title: DKIM
seoTitle: "DKIM nedir? Anlamı ve işleyişi"
description: DKIM nedir, DKIM imzası bir e-postanın alan adınızdan geldiğini nasıl kanıtlar, DKIM kaydı neye benzer, DKIM nasıl kurulur ve nasıl kontrol edilir?
slug: dkim
date: 2026-11-05
updated: 2026-11-05
keyword: dkim
short: DKIM, DomainKeys Identified Mail ifadesinin kısaltmasıdır. Gönderdiğiniz her e-postaya dijital bir imza ekler. Alıcı sunucu bu imzayı kontrol ederek e-postanın alan adınızdan geldiğini ve gönderildikten sonra değiştirilmediğini doğrular.
related: spf, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, bimi
cta: İmzalı bir e-posta da adres yoksa bounce olur
---

## DKIM nedir?

DKIM, DomainKeys Identified Mail ifadesinin kısaltmasıdır. RFC 6376 içinde tanımlanmıştır. DKIM, sunucunuzdan çıkan her e-postaya dijital bir imza ekler. Dijital imza, yalnızca sizin sunucunuzun oluşturabileceği uzun bir koddur.

Alıcı sunucu bu kodu kontrol eder. Kod geçerliyse iki şey doğrudur. E-posta sizin alan adınız tarafından imzalanmıştır. Gönderildikten sonra kimse onu değiştirmemiştir.

Alan adı, bir e-posta adresinde @ işaretinden sonra gelen addır, örneğin example.com. DKIM alan adı bazında çalışır. E-posta gönderen her alan adı, e-postalarını kendi anahtarıyla imzalamalıdır.

## Örnek: bir mağaza makbuz gönderiyor

example.com alan adında bir mağaza var. Lena bir lamba satın alıyor ve mağaza onun Gmail adresine bir makbuz gönderiyor. DKIM şunları yapar.

1. Mağazanın gönderen sunucusu makbuzu hazırlar.
2. Sunucu, e-posta için bir imza oluşturmak üzere özel anahtarı (private key) kullanır. Özel anahtar, gönderen sunucuda kalan gizli bir dosyadır.
3. Sunucu imzayı e-postaya `DKIM-Signature` adlı bir başlık (header) olarak ekler. Başlık, bir e-postanın en üstünde bulunan teknik bilgi satırıdır. Okuyucular onu normalde görmez.
4. E-posta Gmail'e ulaşır.
5. Gmail başlığı okur. example.com alan adını ve s2026a seçicisini bulur.
6. Gmail, bu seçicinin açık anahtarını (public key) mağazanın DNS kayıtlarında arar. DNS, bir alan adının ayarlarını yayımladığı herkese açık dizindir.
7. Gmail, imzayı kontrol etmek için açık anahtarı kullanır. Kontrol başarılı olur.
8. Gmail sonucu example.com için DKIM pass olarak kaydeder.

Diyelim ki biri, makbuz gönderildikten sonra makbuzdaki tutarı değiştirdi. O zaman 7. adımdaki kontrol başarısız olurdu. Açık anahtar bir imzayı doğrulayabilir, ancak imza oluşturamaz. Bunu yalnızca özel anahtar yapabilir.

## DKIM imzası

DKIM imzası, etiket (tag) denen birkaç parçadan oluşan tek bir başlıktır. Her etiket bir harf, bir eşittir işareti ve bir değerden oluşur. En önemli iki etiket şunlardır.

- `d=` imzalayan alan adıdır, örneğin `d=example.com`.
- `s=` seçicidir (selector), örneğin `s=s2026a`. Seçici, tek bir anahtara ad veren bir etikettir. Bir alan adının aynı anda birkaç anahtarı olabilir. Her birinin kendi seçicisi vardır.

Başlık ayrıca imzanın kendisini `b=` içinde, e-posta gövdesi için bir kodu da `bh=` içinde taşır. Alıcı sunucu kontrolü yapmak için bunların hepsini kullanır.

## DKIM kaydı

Açık anahtar bir DKIM kaydında yayımlanır. Bu kayıt bir [DNS TXT kaydıdır](/glossary/dns-txt-record), yani düz metin tutan bir DNS girişidir. Kaydın adı seçiciden ve alan adından oluşur:

`s2026a._domainkey.example.com`

Kaydın değeri şuna benzer:

```text
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

- `v=DKIM1`, bunun bir DKIM kaydı olduğunu belirtir.
- `k=rsa`, anahtarın türünü belirtir.
- `p=`, açık anahtarı tutar. Gerçek değer birkaç yüz karakter uzunluğundadır.

Özel anahtar asla DNS kayıtlarına girmez. Gönderen sunucuda kalır. Anahtar boyutu olarak 2048 bit kullanın. Gmail en az 1024 biti kabul eder, ancak 2048 biti önerir. RFC 8301, imzalayanların 2048 bit kullanması gerektiğini söyler.

## DKIM neden önemlidir?

DKIM, yönlendirmeden (forwarding) sonra da çalışır. Diyelim ki biri mağazanın makbuzunu başka bir hesaba yönlendirdi. Yönlendiren sunucu e-postayı kendi IP adresinden gönderir. IP adresi, internette bir sunucuyu tanımlayan numaradır. Bu IP adresi mağazanın [SPF kaydında](/glossary/spf) yoktur, bu yüzden SPF başarısız olur. DKIM imzası e-postanın içinde taşınır, bu yüzden yine geçer.

[DMARC](/glossary/dmarc), DKIM'i kullanır. DMARC, From adresinde görünen alan adı için SPF veya DKIM geçtiğinde geçer. Yönlendirme SPF'yi bozar. Bu yüzden DMARC'ın geçmesini sağlayan kontrol çoğu zaman DKIM'dir.

DKIM, toplu gönderim yapanlar için de zorunludur. Google'ın gönderen yönergeleri, Gmail'e günde 5.000 veya daha fazla e-posta gönderenlerden SPF, DKIM ve DMARC ister. Microsoft'un da Outlook.com, Hotmail ve Live için aynı kuralı vardır.

## DKIM nasıl kurulur?

DKIM'i nasıl kuracağınız, e-postanızı kimin gönderdiğine bağlıdır.

- **Bir e-posta servisi kullanıyorsunuz.** Google Workspace, Microsoft 365, Mailchimp veya SendGrid buna örnektir. Servis anahtarı sizin için oluşturur. DNS sağlayıcınıza eklemeniz gereken DKIM kaydını size gösterir. DNS sağlayıcınız genellikle alan adını satın aldığınız şirkettir.
- **Kendi e-posta sunucunuzu çalıştırıyorsunuz.** Anahtar çiftini kendiniz oluşturursunuz. [DKIM oluşturucumuz](/dkim-generator), tarayıcınızda 2048 bitlik bir anahtar çifti ve TXT kaydı oluşturur. Özel anahtarı sunucunuza kurarsınız ve kaydı DNS ayarlarınızda yayımlarsınız.

Sık görülen bir sorunu kontrol edin. Birçok e-posta servisi, varsayılan olarak kendi ortak alan adıyla imzalar. İmza geçer, ancak `d=` içindeki alan adı sizin değildir. Bu yüzden DMARC hizalaması başarısız olur. `d=` sizin alan adınızı göstersin diye servisin ayarlarında özel DKIM (custom DKIM) seçeneğini açın. Bunun neden önemli olduğunu [DMARC hizalaması](/glossary/dmarc-alignment) sayfası anlatır.

## DKIM'in çalıştığı nasıl kontrol edilir?

1. Alan adınızdan kişisel bir Gmail hesabına e-posta gönderin.
2. E-postayı Gmail'de açın.
3. Üç nokta menüsüne tıklayın ve "Orijinali göster" seçeneğini seçin.
4. Üst kısımdaki DKIM satırını bulun. Bu satırda alan adınızla birlikte PASS yazmalıdır.

FAIL yazıyorsa iki şeyi kontrol edin. DNS kaydının yayımlanması henüz tamamlanmamış olabilir. Ya da sunucunuzdaki seçici, DNS kaydındaki seçiciyle tam olarak eşleşmiyor olabilir.

## DKIM ve e-posta doğrulama

DKIM, bir e-postanın alan adınızdan geldiğini kanıtlar. Alıcının adresinin var olduğunu kanıtlamaz. Doğru imzalanmış bir e-posta da artık var olmayan bir adrese giderse bounce olur. Bir [mail adresi doğrulama aracı](/email-checker), siz göndermeden önce alıcı sunucuya her posta kutusunun var olup olmadığını sorar. Bir [toplu mail doğrulama aracı](/bulk-email-verifier) aynı işi bütün bir liste için yapar. DKIM e-postayı kimin gönderdiğini kanıtlar. [E-posta doğrulama](/) ise e-postanın onu alabilecek adreslere gitmesini sağlar.
