---
title: DMARC
seoTitle: "DMARC: anlamı ve işleyişi"
description: DMARC nedir, neden vardır, SPF ve DKIM'i nasıl kullanır, üç DMARC politikası nelerdir, basit bir DMARC kaydı ne anlama gelir ve kimler DMARC ister?
slug: dmarc
date: 2026-11-05
updated: 2026-11-05
keyword: dmarc
short: DMARC, alan adınızın DNS kayıtlarında yayımladığınız bir kuraldır. Alan adınızdan geldiğini söyleyen ama SPF ve DKIM kontrollerinden geçemeyen bir e-postayla ne yapılacağını alıcı sunuculara söyler. Ayrıca raporları size nereye göndereceklerini de bildirir.
related: spf, dkim, dmarc-alignment, email-spoofing, bimi, dns-txt-record
cta: DMARC alan adınızı korur. E-posta doğrulama ise bounce oranınızı korur
---

## DMARC nedir?

DMARC, Domain-based Message Authentication, Reporting and Conformance ifadesinin kısaltmasıdır. DNS kayıtlarınızda yayımladığınız bir kuraldır. DNS, bir alan adının ayarlarını listelediği herkese açık dizindir. Bu kural, alıcı sunucular için tek bir soruyu yanıtlar: From adresinde sizin alan adınızı kullanan ama kontrollerden geçemeyen bir e-postaya ne olmalıdır?

From adresi, insanların gelen kutularında gördüğü gönderen adresidir. DMARC olmadan herkes oraya sizin alan adınızı yazabilir. DMARC ile Gmail, Outlook.com ve diğer sağlayıcılardan bu tür e-postaları spam klasörüne göndermelerini veya engellemelerini isteyebilirsiniz. Ayrıca sizin adınıza e-posta gönderen her sunucu hakkında size rapor göndermelerini de isteyebilirsiniz.

## Örnek: billing@example.com adresinden sahte bir fatura

Example Ltd, gerçek faturalarını billing@example.com adresinden gönderir. Bir dolandırıcı, şirketin müşterilerini kandırmak ister. Şunlar olur:

1. Dolandırıcı kendi sunucusundan bir e-posta gönderir. From adresinde billing@example.com yazar. Konu satırında "Faturanın vadesi geçti, bugün ödeyin" yazar.
2. E-posta, şirketin müşterilerinden biri olan Tom'a ulaşır.
3. Tom'un e-posta sağlayıcısı iki kontrol yapar. [SPF](/glossary/spf), gönderen sunucunun example.com adına göndermesine izin verilip verilmediğini kontrol eder. İzin verilmemiştir. [DKIM](/glossary/dkim), example.com alan adından geçerli bir imza arar. İmza yoktur.
4. Sağlayıcı, example.com alan adının DMARC kaydını sorgular. Kayıtta `p=reject` yazar.
5. Sağlayıcı e-postayı engeller. Tom e-postayı hiç görmez.

DMARC kaydı yoksa 4. adımda hiçbir şey bulunmaz. O zaman sağlayıcı kendi başına karar verir ve sahte fatura Tom'un gelen kutusuna ulaşabilir.

Alıcılar politikanızı bir istek olarak değerlendirir. Bunun yanında kendi spam filtrelerini de uygulayabilirler.

## DMARC nasıl karar verir: hizalama

SPF ve DKIM'in her biri bir alan adını kontrol eder. Ancak bu alan adı, From adresindeki alan adından farklı olabilir. Bir dolandırıcı, scam-mail.example gibi kendi alan adı için SPF kontrolünden geçebilir. Bu sırada From adresinde example.com görünebilir.

DMARC bu sorunu çözmek için bir kural ekler. SPF veya DKIM, From adresinde görünen alan adının aynısı için geçmelidir. Bu eşleşmeye hizalama (alignment) denir. İki kontrolden yalnızca birinin geçmesi ve eşleşmesi yeterlidir. Bu kuralın esnek (relaxed) ve katı (strict) sürümlerini [DMARC hizalaması](/glossary/dmarc-alignment) sayfası anlatır.

## Üç DMARC politikası

Politika, kaydın `p=` kısmıdır. Üç olası değeri vardır.

| Politika | DMARC kontrolünden geçemeyen e-postaya ne olur? | Ne zaman kullanılır? |
| --- | --- | --- |
| `p=none` | Normal şekilde teslim edilir. Yalnızca rapor alırsınız. | Başlangıçta, tüm gönderenlerinizi bulurken |
| `p=quarantine` | Spam klasörüne gider. | Tüm gerçek gönderenleriniz kontrolden geçtiğinde |
| `p=reject` | Engellenir ve hiçbir posta kutusuna ulaşmaz. | Hiçbir gerçek e-postanın başarısız olmadığından emin olduğunuzda |

## Basit bir DMARC kaydı

DMARC kaydı, `_dmarc` adındaki bir [DNS TXT kaydıdır](/glossary/dns-txt-record). example.com için kayıt `_dmarc.example.com` adresinde bulunur. Basit bir kayıt şöyledir:

```text
v=DMARC1; p=none; rua=mailto:reports@example.com
```

Kayıt, noktalı virgülle ayrılmış üç parçadan oluşur.

- `v=DMARC1`, bunun bir DMARC kaydı olduğunu belirtir. İlk sırada olmalıdır.
- `p=none` politikadır. Burada şunu söyler: özel bir şey yapma, yalnızca rapor gönder.
- `rua=mailto:reports@example.com`, günlük özet raporlarını alan adrestir.

Bir alan adının yalnızca bir DMARC kaydı olabilir. Alıcı sunucu iki kayıt bulursa ikisini de yok sayar. [DMARC kaydı nedir](/blog/what-is-a-dmarc-record) rehberi diğer tüm etiketleri ve raporların nasıl okunacağını anlatır.

## DMARC'a nasıl başlanır?

Çoğu alan adı üç adımda ilerler.

1. `p=none` ve bir `rua` adresi içeren bir kayıt yayımlayın. E-postanız için hiçbir şey değişmez ve raporlar gelmeye başlar.
2. Raporları okuyun. Raporlar, sizin alan adınızla e-posta gönderen her sunucuyu listeler. Her gerçek servisin alan adınız için SPF veya DKIM kontrolünden geçtiğinden emin olun. Bülten aracınız ve destek masası (help desk) aracınız buna iki örnektir.
3. `p=quarantine` politikasına geçin. Hiçbir gerçek e-posta spam klasörüne gitmediğinde `p=reject` politikasına geçin.

Standarda göre her gerçek gönderenin kontrolden geçmesini sağlamak aylar sürebilir. Fatura araçları gibi seyrek e-posta gönderen servisler kolayca gözden kaçabilir. [DMARC oluşturucumuz](/dmarc-generator) her adım için kaydı hazırlar.

`p=reject` kullanmadan önce tüm e-postalarınızın DKIM ile imzalandığından emin olun. Yönlendirme (forwarding) SPF'yi bozar. Yalnızca SPF'ye dayanan bir reject politikası, yönlendirilen gerçek e-postaları engelleyebilir.

## DMARC'ı kimler zorunlu tutar?

Google'ın gönderen yönergeleri, kişisel Gmail hesaplarına günde 5.000 veya daha fazla e-posta gönderenlerden bir DMARC kaydı ister. Microsoft'un da Outlook.com, Hotmail ve Live için aynı kuralı vardır. Microsoft bu kuralı 5 Mayıs 2025'te uygulamaya başladı. İki sağlayıcı için de `p=none` asgari şartı karşılar. From alan adı ayrıca SPF veya DKIM ile hizalanmalıdır.

Güncel DMARC standardı, Mayıs 2026'da yayımlanan RFC 9989'dur. Bu standart RFC 7489'un yerini aldı. `v=DMARC1` ile başlayan kayıtlar çalışmaya devam eder.

## DMARC ve e-posta doğrulama

DMARC, alan adınızı sizin adınıza e-posta gönderen kişilere karşı korur. Kendi listenizdeki adreslerle ilgili hiçbir şey yapmaz. Artık var olmayan bir posta kutusuna giden e-posta, DMARC kontrolünden geçse bile bounce olur. Bir [mail adresi doğrulama aracı](/email-checker) bu adresleri siz göndermeden önce bulur. Bir [toplu mail doğrulama aracı](/bulk-email-verifier) da onları bütün bir listede bulur. [E-posta doğrulama](/) ile bounce oranınız düşük kalır. DMARC de dolandırıcıların alan adınızı kullanmasını engeller.
