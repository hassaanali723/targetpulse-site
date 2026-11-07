---
title: "SPF, DKIM ve DMARC nedir?"
seoTitle: "SPF kaydı nedir? DKIM ve DMARC ile nasıl çalışır?"
description: "SPF kaydı sunucuyu, DKIM kaydı imzayı, DMARC ise bunlardan birinin From alan adınızla eşleştiğini kontrol eder. Sık yapılan hatalar ve 2026 değişiklikleri."
slug: spf-dkim-dmarc-nedir
date: 2026-11-05
updated: 2026-11-05
keyword: spf kaydı nedir
image: /blog/covers/tr/spf-dkim-dmarc-nedir.webp
imageAlt: "SPF, DKIM ve DMARC nedir? Toplu gönderici eşiği günde 5.000 mesaj, SPF'de en fazla 10 DNS sorgusu, Gmail'in spam oranı üst sınırı %0,3"
cta: Önce kimlik doğrulamayı düzeltin, sonra listenizi temizleyin
---

SPF, DKIM ve DMARC, her biri bir e-posta hakkında farklı bir soruyu yanıtlayan üç DNS kaydıdır. SPF (Sender Policy Framework), alan adınız adına e-posta göndermesine izin verilen sunucuları listeler. DKIM (DomainKeys Identified Mail), her mesaja bir imza ekler. Bu imza sayesinde alıcı, mesaj sizden çıktıktan sonra hiçbir şeyin değiştirilmediğini anlayabilir. DMARC (Domain-based Message Authentication, Reporting and Conformance), bu ikisinden en az birinin From adresinizdeki alan adıyla eşleştiğini kontrol eder. İkisi de eşleşmezse alıcıya ne yapması gerektiğini söyler. 2024'ten bu yana bu kayıtlar isteğe bağlı değildir. Gmail ve Outlook.com artık bu kontrollerden geçemeyen e-postaların önemli bir kısmını yalnızca spam klasörüne göndermek yerine reddediyor.

| Kayıt | Neyi kontrol eder? | Nerede bulunur? |
| --- | --- | --- |
| SPF | Alan adınız adına hangi sunucuların gönderim yapabileceğini | Alan adınızdaki TXT kaydı |
| DKIM | Her mesajdaki dijital imzayı | selector._domainkey.yourdomain adresindeki TXT kaydı |
| DMARC | SPF veya DKIM'in From alan adınızla eşleştiğini ve eşleşmezse ne yapılacağını | _dmarc.yourdomain adresindeki TXT kaydı |

## Bu kayıtları neden artık atlayamazsınız?

Google, 1 Şubat 2024'ten itibaren kişisel Gmail hesaplarına e-posta gönderen herkes için zorunlu gönderici kuralları getirdi. Bu temel gereksinimlere göre her gönderici SPF veya DKIM'den birini yapılandırmalıdır. Gönderim yaptığı IP adresleri için geçerli ileri ve geri DNS kurmalı ve bunları eşleşen PTR kayıtlarıyla desteklemelidir. PTR kaydı, bir IP adresini bir alan adına bağlayan geri DNS kaydıdır. Gönderici ayrıca iletimde TLS şifrelemesi kullanmalı ve RFC 5322 belirtimine uymalıdır. Google Postmaster Tools'taki spam oranınız %0,3'ün altında kalmalıdır. Google bu oranın %0,1'in altında tutulmasını önerir. Google, kimliği doğrulanmamış e-posta gönderirseniz mesajların spam klasörüne düşebileceği veya 5.7.26 hata koduyla doğrudan reddedilebileceği konusunda uyarır.

Kişisel Gmail adreslerine günde 5.000 veya daha fazla mesaj gönderiyorsanız Google sizi toplu gönderici olarak sınıflandırır ve kurallar sıkılaşır. Toplu göndericiler SPF ile DKIM arasında seçim yapamaz. Her iki protokolü de kurmaları gerekir. Ayrıca bir DMARC kaydı yayımlamaları gerekir. Görünen From başlığı ile SPF veya DKIM arasında alan adı hizalamasını da sağlamaları gerekir. Pazarlama mesajlarında çalışan bir tek tıkla abonelikten çıkma seçeneği de bulunmalıdır. Google bu 5.000 mesajlık eşiği, ana alan adınız ve tüm alt alan adlarınız için 24 saatlik bir süre boyunca toplam olarak hesaplar. Alan adınız bu eşiğe bir kez ulaştığında Google toplu gönderici durumunu kalıcı kabul eder. Gmail, Kasım 2025'ten itibaren kurallara uymayan trafiğe karşı yaptırımları artırmaya başladı. Bu kapsamda geçici teslim gecikmeleri ve kalıcı retler uygular. Bu kurallar Google Workspace iş posta kutuları için değil, kişisel Gmail hesapları için geçerlidir.

Microsoft da 5 Mayıs 2025'te kendi kimlik doğrulama kurallarını uygulamaya koydu. Bu kurallar, tüketicilere yönelik Outlook.com, Hotmail ve Live hesaplarına günde 5.000 veya daha fazla mesaj gönderen göndericiler için geçerlidir. Bu eşiği aşan göndericiler SPF kontrolünden geçmeli ve geçerli bir DKIM imzasına sahip olmalıdır. Ayrıca SPF veya DKIM ile hizalı, p=none veya daha sıkı bir politikaya ayarlanmış bir DMARC kaydı yayımlamalıdır. Bu gereksinimleri karşılamazsanız Microsoft mesajlarınızı 550 5.7.515 Access denied, sending domain does not meet the required authentication level bounce koduyla engeller. Yahoo da 2024'te toplu göndericiler için benzer kurallar getirdi.

| Kod | Hangi kontrol başarısız oldu? |
| --- | --- |
| 4.7.27 ve 5.7.27 | SPF geçmedi |
| 4.7.30 ve 5.7.30 | DKIM geçmedi |
| 4.7.31 | DMARC kaydı yok veya politika yok |
| 4.7.32 | From alan adı SPF veya DKIM ile hizalı değil |
| 4.7.23 ve 5.7.25 | PTR kaydı sorunları |

Google, geçici hız sınırlamaları için 4.x kodlarını, kalıcı teslim engelleri için 5.x kodlarını kullanır. Kampanyalarınızdaki e-postalar geri döndüğünde neyin yanlış gittiğini pazarlama panelinize bakarak tahmin etmeyin. Sunucunun ham ret başlıklarını inceleyin. Bunun nasıl yapıldığını [bounce mesajlarını okuma](/blog/550-5-7-1-error) rehberimizde anlattık.

## SPF kaydı: alan adınız adına hangi sunucuların gönderim yapabileceği

RFC 7208'de standartlaştırılan Sender Policy Framework, gelen bir mesajın zarf göndericisini (envelope sender) doğrular. Zarf göndericisi, e-posta sunucularının bounce'ları geri göndermek için kullandığı Return-Path veya MAIL FROM adresidir. SPF, ilk HELO veya EHLO el sıkışması sırasında bildirilen sunucu adını da değerlendirebilir. SPF yalnızca zarf göndericisine bakar ve insanların gelen kutusunda gördüğü From adresini dikkate almaz. Bu yüzden SPF tek başına bir saldırganın marka adınızı taklit etmesini engelleyemez.

Bir [SPF kaydı](/glossary/spf), DNS'te tek bir TXT kaydı olarak bulunur. Alıcı sunuculara alan adınız adına hangi IP adreslerinin, MX sunucularının ve üçüncü taraf platformların e-posta gönderebileceğini söyler. Tipik bir kayıt şöyle görünür:

```text
v=spf1 include:_spf.google.com include:spf.your-esp.example ~all
```

Her kayıt `v=spf1` ile başlar. `include:_spf.google.com` ifadesi, alıcı sunuculara Google'ın SPF kaydını sorgulamalarını ve orada listelenen IP adreslerine izin vermelerini söyler. İkinci include ifadesi, pazarlama platformunuzun veya işlemsel e-posta hizmetinizin çalıştırdığı sunuculara gönderim yetkisi verir.

Sondaki yönerge, alıcılara listede olmayan göndericilere nasıl davranacaklarını söyler. `~all` şeklinde yazılan softfail niteleyicisi, listede olmayan sunucuların büyük olasılıkla yetkisiz olduğunu belirtir. Ancak alıcılara mesajı kabul edip spam filtresi uygulamalarını önerir. `-all` şeklinde yazılan fail niteleyicisi, listede olmayan sunucuları kesin başarısız (hard fail) olarak işaretler. Bazı alıcılar bu e-postayı doğrudan reddeder. Karmaşık yapıları denetleyen göndericiler, meşru iş e-postaları yanlışlıkla düşürülmesin diye genellikle `~all` ile başlar.

RFC 7208, aşamayacağınız iki kesin sınır koyar. Birincisi, bir alan adı yalnızca bir SPF kaydı yayımlayabilir. İki kayıt yayımlamak permerror (kalıcı hata) üretir ve giden tüm e-postalarınız için SPF'yi geçersiz kılar. İkincisi, SPF değerlendirmesi `include`, `a`, `mx`, `ptr`, `exists` ve `redirect` genelinde en fazla 10 DNS sorgusuyla sınırlıdır. Kaydınızı çözümlemek on birinci bir sorgu gerektirirse alıcı sunucular permerror döndürür. Yönlendirme de SPF'yi bozar. Bir alıcı mesajınızı yönlendirdiğinde, yönlendiren sunucunun IP adresi kaydınızla eşleşmez ve SPF başarısız olur.

## DKIM kaydı: mesajın değiştirilmediğini kanıtlayan imza

RFC 6376'da tanımlanan DKIM, sunucu üzerinde değil, mesajın kendisi üzerinde çalışır. Sunucunuz bir mesajı göndermeye hazırlanırken seçili başlıkların ve gövdenin kriptografik bir özetini (hash) oluşturur. Bu özeti özel bir anahtarla imzalar ve sonucu bir `DKIM-Signature` başlığına yazar. Başlık iki ana değer taşır: `d=` etiketindeki imzalayan alan adı ve `s=` etiketindeki seçici (selector) dizesi. DKIM yalnızca imzanın geçerli olup olmadığını söyler. Başarısızlık durumunda ne yapılacağına karar vermek DMARC'ın işidir.

Mesaj ulaştığında alıcı, seçiciyi ve alan adını başlıktan okur. Ardından `s._domainkey.d` adresindeki ortak anahtarı DNS'ten sorgular ve imzayı kontrol eder. DKIM başlıkları ve içeriği imzalar. E-postanın kendisini şifrelemez. Gövde okunabilir metin olarak iletilir. Ancak imza, yolda kimsenin konu satırını, gönderici bilgilerini veya gövde metnini değiştirmediğini kanıtlar.

Standart e-posta yönlendirme, başlıkları ve gövde içeriğini olduğu gibi korur. Bu yüzden geçerli bir DKIM imzası genellikle yönlendirmeden sonra da geçerli kalır. Bu, yönlendirilen e-postalarda DKIM'i SPF'den daha güvenilir kılar. Yine de altbilgi ekleyen veya konu satırına etiket koyan e-posta listeleri imzayı bozabilir. Gmail en az 1024 bitlik anahtarlar ister ve 2048 bit önerir.

DNS'teki bir DKIM ortak anahtar kaydı şu biçimdedir:

```text
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

`v=DKIM1` etiketi protokol sürümünü belirtir, `k=rsa` etiketi anahtar algoritmasını tanımlar ve `p=` etiketi base64 ile kodlanmış ortak anahtarı taşır. Kendi e-posta sunucunuzu çalıştırıyorsanız [DKIM oluşturucumuzla](/dkim-generator) bir anahtar çifti oluşturabilirsiniz.

Sık yapılan bir hata, platformun varsayılan imzalarına güvenmektir. Birçok e-posta platformu giden e-postaları varsayılan olarak kendi paylaşımlı alan adıyla imzalar (`d=shared-esp.example`). İmza geçerli olsa da imzalayan alan adı görünen From alan adınızla eşleşmez ve DMARC hizalaması başarısız olur. İmzanın `d=` etiketinde sizin alan adınızı kullanması için platform ayarlarınızdan özel DKIM kurmanız gerekir.

## DMARC: iki kontrolü From adresinize bağlayan kontrol

Domain-based Message Authentication, Reporting, and Conformance, zarf kontrollerini ve kriptografik imzaları insanların okuduğu görünen From adresine bağlar. Hizalama (alignment), SPF veya DKIM kontrolünden geçen alan adının From satırındaki alan adıyla aynı olması demektir. SPF veya DKIM'den biri kimlik doğrulamadan geçtiğinde VE From başlığındaki alan adıyla hizalı olduğunda DMARC başarılı olur. Bir mesajın iki kontrolde de aynı anda hizalı olması gerekmez. Yine de Google ikisinin de hizalanmasını önerir ve ileride ikisinin birden zorunlu olabileceğini belirtir.

Şirketinizin haftalık bir bülten gönderdiğini düşünelim. Mesajda `From: news@example.com` görünür. E-posta hizmetiniz bounce'ları işlemek için kendi zarf adresini kullanır ve Return-Path değerini `bounce-123@bounces.esp-mail.example` olarak ayarlar. Hizmetiniz mesajı `d=example.com` ile özel DKIM kullanarak da imzalar.

Alıcı sunucu bu mesajı işlerken:
1. SPF, `bounces.esp-mail.example` zarf alan adını kontrol eder ve geçer. Ancak `esp-mail.example`, `example.com` ile eşleşmez. Bu yüzden SPF, DMARC hizalamasından geçemez.
2. DKIM, `example.com` için imzayı kontrol eder, kriptografik özeti doğrular ve From başlığındaki `example.com` alan adıyla eşleşir. Bu yüzden DKIM geçer ve DMARC hizalamasını sağlar.
3. DKIM geçtiği ve hizalı olduğu için mesaj DMARC'tan başarıyla geçer.

DMARC, hem SPF hem DKIM için iki hizalama modu sunar. Esnek (relaxed) hizalama varsayılan ayardır. Kuruluş alan adınızın (organizational domain) alt alan adlarının ana alan adıyla hizalanmasına izin verir. Örneğin `news.example.com` adresinden gönderilen e-posta, `example.com` SPF veya DKIM alan adıyla hizalanır. `aspf=s` veya `adkim=s` ile yapılandırılan katı (strict) hizalama ise alan adının tam eşleşmesini ister ve alt alan adı farklarına izin vermez.

DMARC kaydınız üç olası politika talimatı yayımlar:
- `p=none`: DMARC'ı izleme moduna alır. Alıcılar e-postayı normal şekilde teslim eder ve kimlik doğrulama raporları toplar.
- `p=quarantine`: Alıcılardan, DMARC'tan geçemeyen e-postayı spam veya gereksiz e-posta klasörüne göndermelerini ister.
- `p=reject`: Alıcılardan, DMARC'tan geçemeyen e-postayı reddetmelerini ister.

rua etiketi, alıcılara özet raporları (aggregate reports) nereye göndereceklerini söyler. Bu raporlar genellikle alan adınızı kullanarak hangi IP adreslerinin e-posta gönderdiğini gösteren günlük XML dosyalarıdır. `_dmarc.example.com` adresinde yayımlanan standart bir başlangıç kaydı şöyle görünür:

```text
_dmarc.example.com TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"
```

Mayıs 2026'da Internet Engineering Task Force (IETF), Standards Track kapsamında RFC 9989'u yayımladı. Bununla birlikte özet raporlar için RFC 9990'ı ve hata raporları için RFC 9991'i de yayımladı. Bu yeni standartlar RFC 7489'u ve RFC 9091'i resmi olarak geçersiz kılar. `v=DMARC1` ile başlayan mevcut kayıtlar çalışmaya devam eder, ancak güncellenen belirtim bazı etiketlerde değişiklik yapar. Yüzde etiketi (`pct`) ve rapor biçimi etiketi (`rf`) kaldırılmıştır ve artık standardın parçası değildir. Raporlama aralığı etiketi (`ri`) ise eski (historic) olarak sınıflandırılmıştır. Politika geçişlerini test eden göndericiler artık test modu için yeni `t` etiketini kullanır. Yöneticiler de `np` etiketiyle var olmayan alt alan adları için politika tanımlayabilir. Mevcut DNS kaydınızda yüzde etiketi varsa onu kaldırmayı planlayın. [DMARC oluşturucumuzla](/dmarc-generator) güncel bir kayıt oluşturabilir veya eski etiketleri temizleyebilirsiniz.

## Alıcı sunucu bir mesajı nasıl kontrol eder?

Gelen bir e-posta alıcı ağ geçidine ulaştığında sunucu kimlik doğrulama kontrollerini belirli bir sırayla çalıştırır:

1. Sunucu ağ bağlantısını kabul eder, gönderenin IP adresini not eder ve HELO veya EHLO selamlamasını değerlendirir.
2. Sunucu, zarftaki Return-Path adresinden alan adını alır. Gönderen IP için SPF izinlerini kontrol etmek üzere DNS'i sorgular.
3. Sunucu `DKIM-Signature` başlığını bulur ve `selector._domainkey.domain` adresindeki ortak anahtarı DNS'ten sorgular. Ardından başlıklar ve gövde içeriği üzerinden kriptografik özetleri yeniden hesaplar.
4. Sunucu görünen From başlığını inceler ve `_dmarc.domain` adresindeki DMARC politika kaydını DNS'ten sorgular.
5. Sunucu alan adı hizalamasını değerlendirir. Kimliği doğrulanmış SPF alan adının veya kimliği doğrulanmış DKIM alan adının görünen From alan adıyla eşleşip eşleşmediğini kontrol eder.
6. Sunucu, hizalama sonucuna göre yayımlanmış DMARC politikasını (none, quarantine veya reject) uygular.
7. rua ile rapor istediyseniz sunucu sonucu size göndereceği bir sonraki özet rapora ekler.

Gmail'de herhangi bir mesajda "Orijinali göster" seçeneğini açarak üç sonucu da görebilirsiniz.

## SPF, DKIM ve DMARC genellikle nerede bozulur?

Yeni bir e-posta hizmeti eklerken iki SPF kaydı yayımlamak sık yapılan bir hatadır. Bir yönetici kurulum belgelerini izleyerek `v=spf1 include:sendgrid.net ~all` kaydını ekleyebilir. Böylece mevcut Google kaydının yanına ikinci bir TXT kaydı yayımlamış olur. RFC 7208, tek bir alan adında birden fazla SPF kaydını yasaklar. Alıcı sunucular iki kayıt bulduğunda permerror ile durur ve SPF başarısız olur. Bunu, izin verilen tüm hizmetleri tek bir dizede birleştirerek düzeltirsiniz: `v=spf1 include:_spf.google.com include:sendgrid.net ~all`.

10 sorgu sınırını aşmak, fark edilmeyen başka bir teslim sorununa yol açar. Her `include`, `a`, `mx`, `ptr`, `exists` veya `redirect` etiketi bu sınıra dahil edilir. Hizmet sağlayıcıların kayıtlarının içindeki iç içe include ifadeleri de sayılır. Kaydınız on birinci bir sorgu gerektirirse alıcı sunucular otomatik olarak permerror döndürür. Sorgu sınırı sorununu eski hizmet kayıtlarını temizleyerek, sorgu denetim araçları kullanarak veya include ifadelerini açık `ip4` aralıklarıyla değiştirerek düzeltirsiniz. Ancak son yöntemi yalnızca sizin kontrol ettiğiniz ve değişmeyen gönderim IP adresleri için kullanın.

Yeni bir gönderim hizmetini DNS'e eklemeden bağlamak, giden e-postalarınızı spam filtrelerine açık bırakır. Satış veya destek ekipleri, DNS'i yöneten kişiye haber vermeden randevu planlayıcıları, yardım masası platformları veya fatura sistemleri bağlar. Bu yeni sunucular SPF kaydınızda listelenmez ve DKIM anahtarlarınızla imzalamaz. Bu yüzden mesajları kimlik doğrulamadan geçemez ve spam klasörüne düşer. Çözüm basit bir kuraldır: yeni bir araç bağlayan herkes DNS'i yöneten kişiye haber verir. Buna ek olarak DMARC raporlarınızda tanımadığınız göndericileri kontrol edin.

Platformun imzaladığı DKIM'e güvenmek, imza kriptografik olarak doğrulansa bile DMARC hizalamasını bozar. Bir e-posta hizmeti mesajları `d=platform-mail.example` ile imzalar ve From satırınızda `From: support@yourcompany.example` görünür. Bu durumda DKIM teknik kontrolleri geçer, ancak alan adınızla hizalamada başarısız olur. Bu uyuşmazlığı düzeltmek için platform ayarlarınızı açın, alan adınız için özel DKIM anahtarları oluşturun ve seçici kayıtlarını DNS panelinizde yayımlayın.

Mesaj yönlendirme, bir alıcı iş e-postasını kişisel gelen kutusuna yönlendirdiğinde düzenli olarak SPF'yi bozar. Aradaki sunucu mesajı kendi IP adresiyle iletir ve bu adres SPF kaydınızla eşleşmez. Dış yönlendirme ayarlarını kontrol edemezsiniz. Ancak mesajlarınız geçerli DKIM imzaları taşırsa yönlendirmeden bozulmadan çıkar. Sonraki aktarımlarda da DMARC gereksinimlerini karşılar.

Ücretsiz bir `@gmail.com` From adresiyle başka bir platform üzerinden toplu kampanya göndermek, yapısı gereği DMARC'tan geçemez. Google'ın gönderici yönergeleri, Gmail adreslerini dış sunuculardan taklit etmenin teslim edilebilirliğe zarar verdiği konusunda açıkça uyarır. Üçüncü taraf platformlar Google'ın alan adı için geçerli kriptografik imza üretemez ve SPF'den geçemez. Bu yüzden e-posta sağlayıcıları bu e-postayı reddeder veya spam klasörüne alır. Göndericiler e-posta kampanyalarını her zaman sahip oldukları özel bir alan adından göndermelidir.

DMARC'ı kalıcı olarak `p=none` ayarında bırakmak, alan adınızı taklide açık bırakır. İzleme politikası Gmail ve Microsoft'un asgari şartını karşılar. Ancak `p=none`, sahte e-posta göründüğünde alıcı sunuculara hiçbir koruyucu işlem yapmamalarını söyler. Alan adınızı birebir taklit eden biri bu ayarda DMARC tarafından durdurulmaz. Günlük özet raporlarınızı birkaç hafta inceleyin ve tüm meşru gönderim kaynaklarının hizalı olduğunu doğrulayın. Ardından politikanızı önce `p=quarantine`, sonra `p=reject` düzeyine yükseltin.

## SPF, DKIM ve DMARC kurulum kontrol listesi

Bu adımları sırayla uygulayın:

1. Alan adınızı kullanarak e-posta gönderen tüm iç hizmetleri, pazarlama platformlarını, destek masalarını ve işlemsel araçları listeleyin.
2. İzin verilen gönderim sunucularını kapsayan tek ve birleşik bir [SPF kaydı](/glossary/spf) yayımlayın ve toplam sorgu sayısını 10'un altında tutun. [SPF kaydı kontrol aracı](/spf-checker) sorguları sizin için sayar.
3. Her gönderim platformunda kendi alan adınızla özel DKIM imzalamayı açın ve eşleşen seçici kayıtlarını DNS'te yayımlayın.
4. Gönderim IP adreslerinizin geçerli bir ileri DNS kaydına ve geri DNS'te eşleşen bir [PTR kaydına](/glossary/ptr-record) sahip olduğundan emin olun.
5. Özet XML raporlarını almaya başlamak için `_dmarc` adresinde `p=none` ve etkin bir `rua` posta kutusu içeren ilk [DMARC kaydınızı](/blog/what-is-a-dmarc-record) yayımlayın.
6. Alan adı itibarını, teslim hatalarını ve spam şikâyeti oranlarını izlemek için gönderim alan adınızı [Google Postmaster Tools](/glossary/postmaster-tools) hizmetine kaydedin.
7. Her meşru gönderim akışının SPF veya DKIM hizalamasını sağladığını doğrulamak için özet DMARC raporlarınızı birkaç hafta inceleyin.
8. DMARC politikanızı `p=none` düzeyinden `p=quarantine` düzeyine yükseltin ve teslimin kararlı olup olmadığını değerlendirin. Ardından politikanızı `p=reject` düzeyine taşıyın.
9. Kişisel bir Gmail hesabına test mesajı gönderin ve "Orijinali göster" seçeneğini açın. SPF, DKIM ve DMARC sonuçlarının hepsinin PASS olduğunu doğrulayın.

## Sık sorulan sorular

**DMARC için hem SPF hem DKIM gerekir mi?**
Hayır. DMARC, SPF veya DKIM'den birinin kimlik doğrulamadan geçmesini ve görünen From başlığınızdaki alan adıyla hizalı olmasını ister. Alan adınızda iki protokolün de etkin olması, yönlendirme SPF'yi bozduğunda daha dayanıklı bir yapı sağlar. Google da yüksek hacimli gönderim için ikisinin birden yapılandırılmasını önerir. Ancak yalnızca bir mekanizma geçerli hizalama sağlasa bile mesaj DMARC'tan geçer.

**SPF ile DMARC arasındaki fark nedir?**
SPF, Return-Path başlığındaki teknik zarf göndericisi adresi için e-posta göndermeye yetkili sunucu IP adreslerini belirler. DMARC ise insanların e-posta programında gördüğü From adresini inceler. SPF veya DKIM'den birinin bu görünen alan adıyla hizalı olduğunu doğrular. Ardından alıcı sunuculara, doğrulamadan geçemeyen mesajları kabul etmelerini, spam klasörüne almalarını veya reddetmelerini söyler.

**Günde 5.000'den az e-posta gönderiyorsam DMARC gerekir mi?**
Gmail DMARC'ı yalnızca toplu göndericilerden ister. Bu yüzden düşük hacimde DMARC kullanmadığınız için engellenmezsiniz, ancak yine de SPF veya DKIM gerekir. Buna rağmen rua içeren bir p=none kaydı yayımlamaya değer. Çünkü raporlar, alan adınız adına hangi hizmetlerin gönderim yaptığını gösterir. Unuttuğunuz hizmetler ve sizi taklit eden kişiler de bu raporlarda görünür.

**İki SPF kaydım olabilir mi?**
Hayır. RFC 7208, bir alan adında birden fazla SPF kaydı yayımlamayı yasaklar. Alıcı sunucular DNS'te birden fazla SPF kaydı bulursa değerlendirmeyi hemen permerror ile durdurur ve SPF'yi başarısız sayar. İzin verilen tüm IP adreslerini ve üçüncü taraf include ifadelerini `v=spf1` ile başlayan tek bir kayıtta birleştirmeniz gerekir.

**DMARC'ı en basit şekilde nasıl açıklayabilirim?**
SPF, mesajı gönderen sunucunun alan adınız adına göndermeye yetkili olduğunu kontrol eder. DKIM ise mesajın değiştirilmediğini gösteren bir imzayı kontrol eder. DMARC son kontroldür. Bu ikisinden birinin From adresiyle aynı alan adına ait olduğunu doğrular. İkisi de ait değilse DMARC, alıcı sunucuya ne yapacağını söyler: mesajı yine de teslim etmek, spam klasörüne göndermek veya reddetmek.

Bu kayıtlar kim olduğunuzu kanıtlar, ancak e-postayı nereye gönderdiğinizi düzeltmez. Artık var olmayan adreslere giden e-postalar yine geri döner. [E-posta bounce oranı nasıl düşürülür](/blog/how-to-reduce-email-bounce-rate) rehberimiz bu konuyu ele alır. Bir sonraki gönderimden önce listenizi [Giggal.ai](/email-list-cleaning) (İngilizce) ile kontrol edebilirsiniz.
