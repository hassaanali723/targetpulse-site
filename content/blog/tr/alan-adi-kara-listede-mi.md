---
title: "Alan adınız kara listede mi? Nasıl kontrol edilir ve listeden nasıl çıkılır"
seoTitle: "Mail kara liste kontrolü ve listeden çıkma (2026)"
description: "Mail kara liste kontrolü: alan adınızın veya IP'nizin kara listede olup olmadığını öğrenin, SMTP hata kodlarını okuyun, DNSBL sorgusu yapın ve listeden çıkın."
slug: alan-adi-kara-listede-mi
date: 2026-11-07
updated: 2026-11-07
keyword: mail kara liste kontrolü
image: /blog/covers/tr/alan-adi-kara-listede-mi.webp
imageAlt: "Mail kara liste kontrolü: DNSBL sorguları, SMTP hata kodları ve kara listeden çıkma adımları"
cta: Listenizi göndermeden önce doğrulayın
---

E-posta operasyonlarında teslim edilebilirliğin aniden çökmesi kadar işi aksatan az şey vardır. Bir sabah kampanyalarınız normal etkileşim alır. Ertesi gün açılma oranları sıfıra yaklaşır, yanıtlar kesilir ve giden e-posta kuyruğunuz ret bildirimleriyle dolar:

```text
550 5.7.1 Service unavailable; client [198.51.100.24] blocked using zen.spamhaus.org
554 5.7.1 Access denied; sender IP listed in Barracuda Reputation Network
```

Alıcı e-posta sunucuları mesajlarınızı konu satırına veya içeriğe bakmadan reddediyorsa, gönderim IP adresiniz veya alan adınız bir DNS tabanlı engelleme listesine (DNSBL) girmiştir. Bu listelere genellikle e-posta kara listesi (blacklist) veya RBL denir.

Kara listeye girmek geçici bir içerik filtresi değildir. Doğrudan ağ düzeyinde bir engeldir. Büyük alıcı ağları (Google Workspace, Microsoft 365, Yahoo Mail ve kurumsal e-posta ağ geçitleri dahil) bu gerçek zamanlı veritabanlarını ilk SMTP el sıkışması sırasında sorgular. Tanımlayıcınız işaretliyse bağlantı o anda kesilir.

Bu yazıda e-posta kara listelerinin nasıl çalıştığını, alan adınızın veya IP'nizin büyük spam karşıtı veritabanlarında listelenip listelenmediğini nasıl kontrol edeceğinizi, listeden çıkma taleplerini nasıl başarıyla göndereceğinizi ve gönderen itibarınızı tekrarlanan işaretlemelerden nasıl koruyacağınızı anlatıyoruz.

---

## Kara liste engeli ile spam filtresi arasındaki fark nedir?

Soruna çözüm aramadan önce, bir kara liste kaydıyla mı yoksa spam klasörüne düşmekle mi uğraştığınızı belirlemek işinizi kolaylaştırır.

| Özellik | DNSBL / RBL kara listesi | E-posta sağlayıcısının spam filtresi |
| --- | --- | --- |
| **Tespit noktası** | İlk SMTP el sıkışması (bağlantı aşaması) | Teslimattan sonraki analiz (gelen kutusu sıralaması) |
| **Sunucu yanıtı** | Hard bounce (`550` veya `554` kodu) ya da kesilen bağlantı | `250 OK` koduyla kabul edilir |
| **Kullanıcının gördüğü** | Alıcı e-postayı hiç almaz | E-posta alıcının spam klasörüne düşer |
| **Kapsam** | O DNSBL'yi kullanan tüm e-posta sunucularında geçerli | Tek bir e-posta sağlayıcısıyla sınırlı (örneğin yalnızca Gmail) |
| **Ana neden** | Spam tuzağına gönderim, yüksek bounce oranı, açık relay sunucuları | Düşük kullanıcı etkileşimi, spam gibi görünen metin, eksik SPF/DKIM |
| **Çözüm** | Kara liste yöneticisine resmi listeden çıkma talebi | Alan adı ısıtma, listeyi ayıklama, itibarı düzeltme |

Mesajlarınız spam klasörüne düşüyor ama e-posta sunucusu kayıtlarınızda `250 OK` teslim durumu görünüyorsa alan adınız bir DNSBL'de kara listede değildir. Bu durumda alıcı e-posta sağlayıcısı mesajınızı algoritmik itibar puanlarına göre sıralıyordur.

E-posta sunucunuz belirli kara liste sunucu adlarını belirten kesin retler alıyorsa etkin bir DNSBL kaydınız vardır ve hemen düzeltilmesi gerekir.

---

## E-posta alan adınızın veya IP'nizin kara listede olup olmadığı nasıl kontrol edilir

Kara liste kontrolü, gönderim IP'nizin veya alan adınızın olumlu bir sorgu kaydı döndürüp döndürmediğini görmek için DNSBL sunucularını sorgulamaktır. Durumunuzu otomatik çoklu RBL tarayıcılarıyla veya terminalden elle yapacağınız DNS sorgularıyla kontrol edebilirsiniz.

### 1. Otomatik çoklu RBL tarayıcıları

Çoklu RBL sorgulama servisleri, onlarca herkese açık kara listeyi birkaç saniye içinde aynı anda sorgular. En güvenilir ücretsiz tarayıcılar şunlardır:

- **MXToolbox Blacklist Check**: Gönderim IP'niz veya alan adınız için 100'den fazla DNSBL'yi tarar.
- **DNSChecker Email Blacklist**: 50'den fazla DNSBL ve SURBL veritabanında hızlı ve eşzamanlı sorgu yapar.
- **MultiRBL (valli.org)**: Geliştiricilere yönelik, 200'den fazla kara listeyi sorgulayan hafif bir sorgu aracıdır.

Tarama yapmak için gönderim IP adresinizi (ofisinizin Wi-Fi IP'si değil, e-posta sunucunuzun IP'si) veya gönderim alan adınızı (örneğin `company.com`) girin.

```youtube
wOIJHhHZt04
İzleyin: [How To Use Email Blacklist Checker or Spam Database Lookup Tool](https://www.youtube.com/watch?v=wOIJHhHZt04), InboxAlly: Mastering Email Deliverability
```

### 2. Komut satırından elle DNSBL kontrolü (sistem yöneticileri için)

Otomatik web araçları pratiktir. Ancak `dig` veya `nslookup` ile elle yapılan sorgular, önbelleğe alınmamış ham sonucu doğrudan kara liste yöneticisinin yetkili ad sunucularından verir.

DNS tabanlı kara listeler, [IETF RFC 5782](https://datatracker.ietf.org/doc/html/rfc5782) uyarınca ters IP adresi gösterimini kullanır. Bir kara listeyi elle sorgulamak için:

1. Gönderim IPv4 adresinizin dört bölümünü ters çevirin. Örneğin e-posta sunucunuzun IP'si `198.51.100.24` ise ters çevrilmiş hâli `24.100.51.198` olur.
2. Sonuna DNSBL'nin kök alan adını ekleyin (örneğin `zen.spamhaus.org`).
3. `dig` ile standart bir `A` kaydı DNS sorgusu çalıştırın:

```bash
# Query Spamhaus ZEN for IP 198.51.100.24
dig +short 24.100.51.198.zen.spamhaus.org

# Query Barracuda Reputation Block List (BRBL)
dig +short 24.100.51.198.b.barracudacentral.org

# Query SpamCop (SCBL)
dig +short 24.100.51.198.bl.spamcop.net
```

#### Dönen kodu yorumlama

- **Yanıt yok / `NXDOMAIN`**: IP'niz temizdir. Kara listede adresiniz için olumsuz bir kayıt yoktur.
- **`127.0.0.X` yanıtı**: IP'niz listededir. Son bölüm, kaydın türünü gösterir:

```text
127.0.0.2 -> SBL (Spamhaus Block List: Verified spam source or trap hit)
127.0.0.4 -> XBL (Exploit Block List: Compromised server, malware, or open proxy)
127.0.0.10 -> PBL (Policy Block List: Residential/dynamic IP that should not send direct MX mail)
```

Yukarıdaki kodların anlamı şöyledir: `127.0.0.2` doğrulanmış spam kaynağı veya spam tuzağına gönderim (SBL), `127.0.0.4` ele geçirilmiş sunucu, zararlı yazılım veya açık proxy (XBL), `127.0.0.10` doğrudan MX'e e-posta göndermemesi gereken ev veya dinamik IP (PBL).

Gönderim IP'nizin değil de alan adınızın bir alan adı kara listesinde (DBL) işaretli olup olmadığını kontrol etmek için alan adını doğrudan sorgulayın:

```bash
# Query Spamhaus Domain Blocklist (DBL)
dig +short company.com.dbl.spamhaus.org
```

`127.0.1.2` yanıtı, alan adının kendisinin spam alan adı olarak işaretlendiğini gösterir. Bu durumda gönderim IP adresinizi değiştirseniz bile e-posta sağlayıcıları mesajlarınızı reddeder.

---

## Gerçekten önemli olan 5 kara liste

İnternette yüzlerce herkese açık ve özel e-posta kara listesi vardır. Ancak e-postalarınızın alıcıların gelen kutusuna ulaşıp ulaşmadığı üzerinde gerçek etkisi olan liste sayısı azdır.

Küçük veya gösteriş amaçlı birçok kara liste (bireylerin amatör engelleme listeleri veya listeden çıkarmak için para isteyen servisler gibi) büyük e-posta sağlayıcıları tarafından dikkate alınmaz. Hiç kimsenin kullanmadığı bilinmeyen bir listeye girmek teslim edilebilirliğinize zarar vermez.

Dikkatinizi önemli olan ana listelere verin:

### 1. Spamhaus (ZEN: SBL, XBL, CSS, DBL)

Spamhaus dünyanın en etkili spam karşıtı kuruluşudur. Veri setleri, büyük telekomünikasyon ağları, Fortune 500 şirketlerinin e-posta ağ geçitleri ve bireysel e-posta sağlayıcıları dahil dünya genelinde 3 milyardan fazla posta kutusunu korur.

- **SBL (Spamhaus Block List)**: Doğrulanmış spam kaynaklarını, onaysız toplanmış e-posta listelerini ve spam tuzaklarına gönderim yapan göndericileri hedefler.
- **XBL (Exploit Block List)**: Üçüncü taraf açıklarla, botnet'lerle ve zararlı yazılımlarla ele geçirilmiş sunucuları hedefler.
- **DBL (Domain Block List)**: Spam mesajlarında, oltalama (phishing) tuzaklarında veya şikâyetleri dikkate almayan barındırma hizmetlerinde bulunan alan adlarını işaretler.
- **ZEN**: SBL, SBLCSS, XBL ve PBL kayıtlarını içeren birleşik bölgedir.

Spamhaus'a girmek, hemen müdahale gerektiren bir operasyonel acil durumdur. Dünya genelinde büyük kurumsal e-posta sunucularında ve internet servis sağlayıcılarında teslimatları engeller.

### 2. Barracuda (BRBL)

Barracuda Reputation Block List (`b.barracudacentral.org`), Barracuda Networks tarafından yönetilir. Kurumsal ağlarda çalışan binlerce Barracuda Email Security Gateway cihazından toplanan trafik verilerine dayanır.

B2B soğuk e-posta veya kurumsal pazarlama e-postaları gönderiyorsanız Barracuda'ya girmek, şirket içi veya bulut tabanlı Barracuda güvenlik filtrelerini kullanan kurumsal alıcılarda hemen yüksek bounce oranlarına yol açar.

### 3. SpamCop (SCBL)

SpamCop, şikâyete dayalı en eski kara listelerden birini (`bl.spamcop.net`) yönetir. Alıcılar e-postaları spam olarak işaretlediğinde veya otomatik tuzaklar istenmeyen mesaj aldığında göndericiler listeye otomatik olarak eklenir.

Spamhaus'un aksine SpamCop kayıtları değişkendir ve kısa sürer. Spam şikâyetleri eşiğin altına düştüğünde kayıtlar genellikle 24 ila 48 saat içinde kendiliğinden sona erer.

### 4. Invaluement (ivmURI, ivmSIP)

Invaluement, yüksek hacimli kurumsal e-posta filtrelerinde ve güvenlik yazılımlarında sık kullanılan kurumsal düzeyde ticari bir itibar veritabanıdır. Snowshoe spam'i (spam'i geniş IP adresi blokları arasında dağıtma) hızlı tespit etmesi ve alan adı düzeyinde URL itibarı takibiyle bilinir.

### 5. UCEPROTECT Level 3'ü neden göz ardı edebilirsiniz

Çoklu RBL sorgulama araçlarını kullanan göndericiler, **UCEPROTECT Level 3** satırında parlak kırmızı bir kayıt gördüklerinde sık sık paniğe kapılır.

UCEPROTECT Level 3, tek tek gönderim IP'leri yerine alt ağların ve otonom sistem numaralarının (ASN) tamamını kara listeye alır. Bulut barındırma sağlayıcınızdaki (DigitalOcean, AWS, Linode veya Hetzner gibi) ilgisiz bir müşteri spam gönderirse UCEPROTECT, o sağlayıcının tamamındaki binlerce komşu temiz IP adresini işaretler.

Bu geniş çaplı yan etki nedeniyle büyük e-posta sağlayıcıları (Google, Microsoft ve Yahoo dahil) teslim kararlarında UCEPROTECT Level 3'ü kullanmaz. Teslim edilebilirlik mühendisleri ve postmaster'lar Level 3 kayıtlarını büyük ölçüde dikkate almaz. Listeden çıkarmak için para isteyen servislere ücret ödemeyin.

---

## Adım adım kara listeden çıkma rehberi

Kara liste kontrolünüz ana veritabanlarından birinde etkin bir kayıt olduğunu doğrularsa bu dört adımlı düzeltme sürecini izleyin.

```
[ Step 1: Halt Outbound Queues ]
             │
             ▼
[ Step 2: Audit Root Cause & Logs ]
             │
             ▼
[ Step 3: Implement Technical Fixes ]
             │
             ▼
[ Step 4: Submit Delisting Request ]
```

Şemadaki dört adım şunlardır: giden kuyrukları durdurun, kök nedeni ve kayıtları inceleyin, teknik düzeltmeleri uygulayın, listeden çıkma talebini gönderin.

### 1. adım: Giden gönderimleri hemen durdurun

E-posta sunucunuz hâlâ mesaj gönderirken listeden çıkma talebi göndermeyin. Sunucunuz hâlâ spam tuzaklarına gönderim yaparken veya bounce üretirken çıkarılmayı isterseniz talebiniz reddedilir ve IP'niz iş birliği yapmayan, tekrar eden bir ihlalci olarak işaretlenir.

- Otomatik giden e-posta dizilerini ve soğuk e-posta kampanyalarını durdurun.
- Ele geçirilmiş hesapların veya güvenlik açığı olan iletişim formlarının neden olduğu giden spam yığınları için e-posta sunucusu kuyruğunuzu (Postfix'te `mailq`) kontrol edin.

### 2. adım: Kök nedeni bulun ve düzeltin

Kara listeler, tetikleyen bir olay olmadan IP işaretlemez. Kayda şu dört yaygın tetikleyiciden hangisinin neden olduğunu bulmak için kayıtlarınızı ve altyapınızı inceleyin:

1. **Pristine spam tuzakları**: Hiçbir zaman bir insana ait olmamış adreslere e-posta gönderdiniz. Bu adresler yalnızca web sitelerinden adres toplayan botları yakalamak için yayımlanır. Doğrulama yapmadan bir potansiyel müşteri listesi satın aldıysanız veya web sitelerinin iletişim sayfalarından adres topladıysanız büyük olasılıkla bir pristine tuzağa gönderim yaptınız.
2. **Yüksek bounce oranları**: Gönderim bounce oranınız %2,0 ila %5,0'ı aştı. Bu, eskimiş, doğrulanmamış veya uydurma kişi kayıtlarına işaret eder.
3. **Ele geçirilmiş kimlik bilgileri**: Sunucunuzdaki bir kullanıcı hesabı ele geçirildi ve oltalama veya spam mesajları göndermek için kullanıldı.
4. **Eksik kimlik doğrulama**: Alan adınızda hizalanmış SPF ve DKIM kayıtları yok. Bu durum, üçüncü tarafların alan adınızı taklit etmesine izin verir.

### 3. adım: Ana kuruluşlara çıkarılma talebi gönderin

Sorun çözüldüğünde ve kayıtlarınız temiz olduğunda resmi listeden çıkma taleplerini doğrudan resmi portaller üzerinden gönderin:

#### Spamhaus'tan çıkma
1. Resmi [Spamhaus IP and Domain Reputation Checker](https://check.spamhaus.org/) sayfasına gidin.
2. Listelenen IP adresinizi veya alan adınızı girin.
3. Spamhaus'un verdiği kayıt kodunu ve açıklamayı inceleyin.
4. **Request Removal** düğmesine tıklayın ve doğrulama formunu doldurun.
5. Alan adınızda çalışan bir yönetici e-posta adresi verin. Temiz göndericilerin ilk çıkarılma talepleri genellikle 1 ila 4 saat içinde işlenir.

#### Barracuda'dan çıkma
1. [Barracuda Central Reputation System](https://www.barracudacentral.org/lookups) sayfasına gidin.
2. E-posta sunucunuzun IP adresini girin.
3. **Barracuda Removal Request** formuna geçin.
4. İletişim bilgilerinizi girin ve yaptığınız düzeltmeyi açık ve somut şekilde anlatın. Yanıt süresi genellikle 12 ila 24 saattir.

#### SpamCop'tan çıkma
- [SpamCop](https://www.spamcop.net/bl.shtml) için elle talep göndermek nadiren gerekir. Soruna neden olan e-posta akışını durdurduğunuz sürece SpamCop, son bildirilen şikâyetten 24 ila 48 saat sonra kaydı otomatik olarak kaldırır.

### Listeden çıkma talebinde ne yazmalı (ve ne yazmamalı)

Listeden çıkma talepleri deneyimli ağ mühendisleri tarafından incelenir. Talebinizi nasıl yazdığınız onaylanıp onaylanmayacağını belirler:

> **Şunu yazmayın:**  
> *"Biz meşru bir işletmeyiz ve bu acil bir hata. Bize para kaybettiriyorsunuz. IP'mizi hemen listeden çıkarın."*  
> (Bu metin hiçbir teknik güvence vermez ve talebin önceliği düşürülür.)

> **Şunu yazın:**  
> *"24 Ekim'de yüklenen ve doğrulanmamış bir pazarlama listesinin bounce ve şikâyet artışına neden olduğunu tespit ettik. Giden gönderimleri hemen durdurduk. Doğrulanmamış tüm kayıtları sildik, geçersiz ve geçici adresleri çıkarmak için göndermeden önce çalışan otomatik liste temizliği kurduk ve SPF ve DKIM hizalamamızı doğruladık. Giden kuyruğumuz temiz."*

---

## Kara listelerden kalıcı olarak nasıl uzak durulur

Listeden çıkmak işin yalnızca yarısıdır. Gönderim alışkanlıklarınız değişmezse alan adınız birkaç gün içinde aynı kara listelere geri döner.

Gönderen itibarınızı korumak için sürekli uygulanan üç önlem gerekir:

### 1. Sıkı e-posta kimlik doğrulaması uygulayın

Kimliği doğrulanmamış e-posta akışları alan adı taklidine açıktır. Bir spam gönderici alan adınızı bir oltalama kampanyasının `From:` başlığında kullanırsa alan adınızın itibarı zarar görür.

- **SPF (Sender Policy Framework)**: Alan adınız adına hangi e-posta sunucularının gönderim yapabileceğini açıkça belirtin. Ayarlarınızı ücretsiz [SPF kaydı kontrol](/spf-checker) aracımızla doğrulayın.
- **DKIM (DomainKeys Identified Mail)**: Giden her mesajı 2048 bit bir anahtarla şifreli olarak imzalayın. Temiz DNS anahtarlarını [DKIM oluşturucu](/dkim-generator) aracımızla oluşturabilirsiniz.
- **DMARC**: Alıcı sunuculara, alan adınızdan geldiğini iddia eden yetkisiz mesajları reddetmelerini söyleyin.

### 2. Bounce oranlarını ve SMR verilerini izleyin

Bounce oranınızı kesinlikle %2,0'ın altında tutun. %3,0'ın üzerindeki bir bounce oranı zayıf liste bakımına işaret eder. %5,0'ın üzerindeki bir oran ise kurumsal filtrelerde otomatik kara listeye alınmayı tetikler.

- Geçmiş teslim ölçümlerinizi [bounce oranı hesaplama](/bounce-rate-calculator) aracımızla ölçün ve karşılaştırın.
- Geçici sunucu sorunlarını kalıcı geçersiz adreslerden ayırmak için [hard bounce ve soft bounce farkı](/blog/hard-bounce-vs-soft-bounce) yazımızı okuyun.

### 3. Göndermeden önce her listeyi temizleyin

E-posta kara listesi kayıtlarının %85'inden fazlası pristine spam tuzaklarına gönderimden veya silinmiş posta kutularına tekrar tekrar e-posta göndermekten kaynaklanır.

Web sitelerinden toplanmış potansiyel müşteri listeleri, eski CRM veritabanları ve webinar kayıtları sık sık yazım hatalı alan adları, geçici e-posta adresleri ve geri dönüştürülmüş spam tuzaklarına dönüşmüş terk edilmiş adresler içerir.

Kişi listelerini gönderim platformunuza veya soğuk e-posta aracınıza aktarmadan önce adresleri ayrı bir doğrulama adımından geçirin. Tek tek adresleri ücretsiz [mail adresi doğrulama](/email-checker) aracımızla test edebilir, geçici alan adlarını [geçici mail kontrolü](/disposable-email-checker) aracımızla tespit edebilirsiniz. Liste temizliği, kapanmış alan adlarını, söz dizimi hatalarını, geçici e-posta sağlayıcılarını ve bilinen tuzak ağlarını e-posta sunucunuz onlara dokunmadan önce ayıklar.

---

## Sık sorulan sorular

### Kara listeden çıkarılmanın etkili olması ne kadar sürer?
Liste yöneticisi talebinizi onayladığında yetkili DNSBL sunucuları neredeyse hemen güncellenir. Ancak alıcı e-posta sunucuları DNS kayıtlarını yerel olarak önbelleğe alır. Alıcı sunucunun DNS TTL (Time to Live) ayarlarına bağlı olarak normal e-posta teslimatının tüm ağlarda yeniden başlaması genellikle 2 ila 24 saat sürer.

### Google Workspace veya SendGrid gibi bilinen bir ESP kullanırsam alan adım kara listeye girebilir mi?
Evet. E-posta hizmet sağlayıcıları altyapıyı yönetir ama gönderdiğiniz adreslerden siz sorumlu olursunuz. Google Workspace veya SendGrid üzerinden soğuk e-posta ya da doğrulanmamış toplu listeler gönderir ve spam tuzaklarına takılırsanız Spamhaus, gönderim alan adınızı Domain Blocklist'te (DBL) işaretleyebilir. Bu durumda e-postanız hangi platformdan gönderilirse gönderilsin reddedilir.

### Alan adım kara listedeyse alan adımı değiştirmeli miyim?
Hayır. Kara listedeki bir alan adını bırakıp yenisini kaydetmek bir hatadır. Yeni alan adlarının hiç gönderen itibarı yoktur ve e-posta sağlayıcılarının sıkı hız sınırlamalarıyla ve greylisting uygulamalarıyla karşılaşır. Kök nedeni düzeltmek, abone listenizi temizlemek ve mevcut alan adınızda resmi listeden çıkma sürecini tamamlamak hem daha hızlıdır hem de uzun vadeli teslim edilebilirlik için daha iyidir.
