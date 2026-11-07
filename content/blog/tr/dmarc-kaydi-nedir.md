---
title: "DMARC nedir? DMARC kaydı ve etiketleri"
seoTitle: "DMARC nedir? DMARC kaydı, etiketler ve örnekler"
description: "DMARC nedir? DMARC kaydı, kimlik doğrulamadan geçemeyen e-postayla ne yapılacağını söyleyen ve _dmarc adında bulunan bir TXT kaydıdır. Tüm 2026 etiketleri."
slug: dmarc-kaydi-nedir
date: 2026-11-05
updated: 2026-11-05
keyword: dmarc nedir
image: /blog/covers/tr/dmarc-kaydi-nedir.webp
imageAlt: "DMARC nedir? p=none yalnızca izler ve rapor gönderir, p=quarantine spam klasörüne gönderir, p=reject tamamen engeller"
cta: Alan adınızı koruyun, sonra bounce oranınızı düşük tutun
---

DMARC kaydı, alan adınızın DNS ayarlarına eklediğiniz kısa bir metin satırıdır. Diğer e-posta sunucularına, alan adınızdan geldiğini söyleyen ama güvenlik kontrollerinden geçemeyen bir e-postayla ne yapmaları gerektiğini söyler. Ayrıca sizin adınıza aldıkları e-postalar hakkındaki raporları size nereye göndereceklerini de söyler.

**Tek cümleyle:** DMARC, "Bir e-posta benim alan adımdan geldiğini söylüyor ama gerçekte benden gelmiyorsa onu spam klasörüne koy veya engelle ve bana bir rapor gönder" diyen herkese açık bir kuraldır.

## Bir örnekle DMARC

### Sorun

Herkes bir e-posta gönderip From satırına sizin adresinizi yazabilir. Alan adınızın `example.com` olduğunu varsayalım. Bir dolandırıcı müşterinize şu e-postayı gönderir:

```text
From: billing@example.com
Subject: Your invoice is overdue
Pay here: http://pay-now.example.net
```

Müşteriniz `example.com` adını görür ve güvenir. Ama bu e-postayı siz hiç göndermediniz.

### Zaten var olan iki kontrol

Gmail ve Outlook gibi e-posta sağlayıcıları her e-postada zaten iki kontrol yapabilir:

- **SPF:** Bu e-posta, `example.com` alan adının e-posta göndermesine izin verdiği bir sunucudan mı geldi?
- **DKIM:** Bu e-posta `example.com` alan adının dijital imzasını taşıyor mu?

Bu kontrollerin tek başına bir açığı vardır. Dolandırıcı kendi alan adı için bu kontrollerden geçebilir. From satırında ise yine sizin alan adınız görünür. Kontrolü, müşterinizin gördüğü adrese bağlayan hiçbir şey yoktur.

### DMARC ne ekler?

DMARC tek bir kural ekler. SPF veya DKIM, From satırında görünen alan adının aynısı için geçmelidir. Bu eşleşmeye **hizalama (alignment)** denir. Kontrollerden hiçbiri bu alan adı için geçmezse e-posta DMARC kontrolünden geçemez.

DMARC ayrıca kontrolden geçemeyen bir e-postaya ne olacağına karar vermenizi sağlar.

### Parça parça bir DMARC kaydı

`example.com` alan adının DNS ayarlarına şu satırı eklersiniz:

```text
v=DMARC1; p=reject; rua=mailto:reports@example.com
```

Her parçanın söylediği şudur:

- `v=DMARC1`: "Bu benim DMARC kuralım."
- `p=reject`: "Bir e-posta example.com'dan geldiğini söylüyor ama kontrolden geçemiyorsa onu engelle."
- `rua=mailto:reports@example.com`: "Benim adıma e-posta gönderen herkes hakkında bana günlük bir rapor gönder."

### Sahte e-postaya ne olur?

1. Dolandırıcının `billing@example.com` adresinden gönderdiği e-posta Gmail'e ulaşır.
2. Gmail, SPF ve DKIM kontrollerini yapar. Hiçbiri `example.com` için geçmez.
3. Gmail, DMARC kaydınızı okur. Kayıtta `p=reject` yazar.
4. Gmail e-postayı engeller. Müşteriniz e-postayı hiç görmez.

Gerçek e-postalarınız aynı kontrollerden geçer, bu yüzden normal şekilde teslim edilir.

### p için üç seçenek

| Ayar | DMARC kontrolünden geçemeyen e-postaya ne olur? | Ne zaman kullanılır? |
| --- | --- | --- |
| p=none | Hiçbir şey. Normal şekilde teslim edilir ve siz rapor alırsınız. | Önce, tüm gerçek göndericilerinizi bulurken |
| p=quarantine | Spam klasörüne gider. | Tüm gerçek göndericileriniz kontrolden geçtiğinde |
| p=reject | Tamamen engellenir. | Gerçek hiçbir e-postanın başarısız olmayacağından emin olduğunuzda |

### Çoğu alan adı bunu nasıl kurar?

1. `p=none` ile başlayın ve günlük raporları okuyun.
2. Sizin adınıza e-posta gönderen tüm gerçek hizmetleri bulun, örneğin e-posta aracınızı ve destek masanızı. Her birinin kontrolden geçtiğinden emin olun.
3. Önce `p=quarantine`, sonra `p=reject` ayarına geçin. Artık politikanıza uyan alıcılarda kimse alan adınızı taklit edemez.

Bu yüzden çoğu alan adı, yalnızca izleme yapan şuna benzer bir kayıtla başlar:

```text
v=DMARC1; p=none; rua=mailto:dmarc-reports@example.com
```

Bu rehberin geri kalanı, bir DMARC kaydının her parçasını ve daha sonra ekleyebileceğiniz ek seçenekleri daha ayrıntılı açıklar.

## SPF, DKIM ve From adresi daha ayrıntılı

DMARC, SPF ve DKIM'in üzerine kuruludur. [SPF ve DKIM](/blog/spf-dkim-dmarc-explained) rehberimiz bu ikisini ayrıntılı olarak anlatır. Kısa özeti aşağıdadır.

**SPF**, alan adınız adına e-posta göndermesine izin verilen sunucuların listesidir. Alıcı sunucu, e-postanın bu listedeki bir sunucudan gelip gelmediğini kontrol eder.

**DKIM**, her e-postaya eklenen dijital bir imzadır. Alıcı sunucu, imzayı DNS'inizdeki bir anahtarla karşılaştırır. İmza geçerliyse e-posta yolda değiştirilmemiştir ve alan adınız tarafından imzalanmıştır.

**From adresi**, alıcınızın gelen kutusunda gördüğü gönderen adresidir, örneğin `hello@example.com`. DMARC, SPF veya DKIM'in bu alan adının aynısı için geçtiğini kontrol eder.

## Bir DMARC kaydı nasıl görünür?

### DNS'te nereye eklenir?

DNS, alan adınızın herkese açık ayar listesidir. DNS ayarlarınızı DNS sağlayıcınızda düzenlersiniz. Bu genellikle alan adını satın aldığınız şirket veya barındırma (hosting) sağlayıcınızdır. DMARC kaydı bir TXT kaydıdır. TXT kaydı, düz metin tutan bir DNS girdisidir.

Kaydı `_dmarc` ana bilgisayar adı (host name) altına eklersiniz. Çoğu DNS paneli alan adınızı otomatik olarak sona ekler. Böylece `_dmarc`, `_dmarc.example.com` olur.

Sık yapılan bir hataya dikkat edin. Bazı paneller yalnızca `_dmarc` yazmanızı bekler. Oraya tam adı, yani `_dmarc.example.com` yazarsanız kayıt `_dmarc.example.com.example.com` adresine eklenir. Alıcı sunucular kaydı orada bulamaz.

### Yazım kuralları

- **`v=DMARC1` ile başlamalıdır.** Bu, kaydın ilk parçası olmalıdır. `DMARC1` büyük harfle yazılmalıdır. `v=dmarc1` yazarsanız, önce başka bir parça koyarsanız veya yanlış yazarsanız alıcı sunucular kaydın tamamını yok sayar. Bu durumda alan adınız hiç DMARC politikası yokmuş gibi değerlendirilir.
- **Parçaları noktalı virgülle ayırın.** Noktalı virgüllerin çevresinde boşluk bırakılabilir.
- **Politika eksikse.** `p` parçasının eksik veya hatalı olduğunu, ancak kayıtta `rua` içinde geçerli bir rapor adresi olduğunu varsayalım. Bu durumda alıcılar politikayı `p=none` olarak kabul eder. Hem `p` hem `rua` eksik veya hatalıysa alıcılar alan adınız için DMARC'ı tamamen atlar.
- **Yalnızca bir DMARC kaydı yayımlayın.** Bir alıcı sunucu `v=DMARC1` ile başlayan iki veya daha fazla TXT kaydı bulursa hepsini yok sayar. Bu kural, güncel DMARC standardı olan [RFC 9989](https://www.rfc-editor.org/info/rfc9989) belgesinden gelir. İki kayıt size iki politika vermez. Alan adınızı hiç korumasız bırakır.

### Kaydınızı nasıl kontrol edersiniz?

Kaydınızı bilgisayarınızın terminalinde bir komutla sorgulayabilirsiniz:

```text
dig TXT _dmarc.example.com +short
nslookup -type=TXT _dmarc.example.com
```

Linux ve macOS'ta `dig` komutunu kullanın. Bu komut kaydınızı tırnak içinde tek bir satırda gösterir. Windows'ta `nslookup` komutunu kullanın. Bu komut, DNS sunucunuzun döndürdüğü kaydı gösterir.

Komut hiçbir şey döndürmüyorsa iki durumdan biri geçerlidir. Ya kayıt henüz DNS'e yayılmamıştır ya da yanlış ana bilgisayar adı altına eklenmiştir.

## Tüm DMARC etiketleri ve hangilerine ihtiyacınız var?

Bir DMARC kaydının `p=none` gibi her parçasına etiket (tag) denir. Mayıs 2026 tarihli güncel standartta on bir etiket vardır.

| Etiket | Ne yapar? (basitçe) | Olası değerler | Yazmazsanız | Gerekli mi? |
| --- | --- | --- | --- | --- |
| v | "Bu bir DMARC kaydıdır" der. İlk sırada olmalıdır. | DMARC1 | Zorunludur | Evet |
| p | Politikanız: kontrolden geçemeyen e-postayla ne yapılacağı. Alan adınızı ve alt alan adlarını kapsar. | none, quarantine, reject | rua geçerliyse none kabul edilir | Evet |
| rua | Günlük özet raporların gönderileceği yer | Virgülle ayrılmış bir veya daha fazla mailto: adresi | Rapor almazsınız | Evet |
| sp | news.example.com gibi var olan alt alan adları için ayrı bir politika | none, quarantine, reject | p ile aynı | Yalnızca alt alan adlarının farklı kurallara ihtiyacı varsa |
| np | DNS'te var olmayan alt alan adları için bir politika | none, quarantine, reject | sp ile aynı, sp yoksa p ile aynı | Yalnızca uydurma alt alan adlarını engellemek için |
| adkim | DKIM alan adı eşleşmesinin ne kadar tam olması gerektiği. r = esnek, s = katı | r, s | r | Nadiren. Esnek, normal tercihtir |
| aspf | SPF alan adı eşleşmesinin ne kadar tam olması gerektiği. r = esnek, s = katı | r, s | r | Nadiren. Esnek, normal tercihtir |
| t | Test modu. Alıcıların politikanızı bir adım daha yumuşak uygulamasını sağlar | y, n | n | Yalnızca daha sıkı bir politikaya geçerken |
| ruf | Kontrolden geçemeyen her bir e-posta için raporun gönderileceği yer | Virgülle ayrılmış bir veya daha fazla mailto: adresi | Rapor almazsınız | Nadiren, gizlilik sınırları nedeniyle |
| fo | Tek e-posta raporları için seçenekler | 0, 1, d, s | 0 | Yalnızca ruf kullanıyorsanız |
| psd | Bir genel sonek (public suffix) alan adını işaretler | y, n, u | u | Yalnızca genel sonekler veya DNS'inin bölümlerini başkalarına dağıtan büyük kuruluşlar için |

Esnek ve katı eşleşme şöyle çalışır. Esnek eşleşmede bir alt alan adı da eşleşme sayılır. Yani `mail.example.com`, `example.com` ile eşleşir. Katı eşleşmede iki alan adı tamamen aynı olmalıdır.

2026 standardında üç eski etiket kaldırıldı. Bunlar yüzde etiketi (`pct`), rapor biçimi etiketi (`rf`) ve raporlama aralığı etiketidir (`ri`). Kayıtta kalmış bir `pct=100` zarar vermez. 100'ün altındaki bir `pct` değeri, geçiş sırasında politikayı e-postalarınızın yalnızca bir kısmına uygulamak için kullanılıyordu. Bu işi artık yeni `t` etiketi yapıyor.

**Çoğu alan adının ihtiyacı:** yalnızca `v`, `p` ve `rua`.

- Alt alan adlarınızın farklı kurallara ihtiyacı varsa `sp` veya `np` ekleyin.
- `psd` etiketine dokunmayın. Buna yalnızca DNS'inin bölümlerini başkalarına dağıtan büyük bir kuruluş yönetiyorsanız (`psd=n`) veya `co.uk` gibi bir genel sonek yönetiyorsanız (`psd=y`) ihtiyacınız olur.
- Esnek eşleşme (`adkim=r` ve `aspf=r`) varsayılandır ve neredeyse her alan adı için çalışır. Hizalama etiketlerine yalnızca katı uyumluluk kuralları bir alt alan adıyla imzalamayı yasaklıyorsa ihtiyacınız olur.

Bu etiketlerle bir kayıt oluşturmak veya eski bir kaydı temizlemek için [DMARC oluşturucumuzu](/dmarc-generator) kullanabilirsiniz.

## p=none, quarantine ve reject gerçekte ne yapar?

`p` etiketi, kaydın en önemli parçasıdır. Alıcı sunuculara DMARC kontrolünden geçemeyen bir e-postayla ne yapmaları gerektiğini söyler. Üç seçenek vardır. Her biri tam korumaya giden yolda bir aşamadır.

**p=none: yalnızca izleme.** Alıcılar kontrolden geçemeyen e-postaya özel bir işlem uygulamaz. E-posta normal şekilde teslim edilir ve yalnızca olağan spam filtreleri uygulanır. RFC 9989, `rua` raporlarıyla birlikte kullanılan bu ayara İzleme Modu (Monitoring Mode) adını verir. Bu mod, teslim edilebilirliğinizi hiç riske atmadan alan adınız adına e-posta gönderen her hizmeti gösterir.

**p=quarantine: spam klasörüne gönderme.** Alıcılar kontrolden geçemeyen e-postayı şüpheli olarak değerlendirir. Çoğu e-posta sağlayıcısında bu e-posta alıcının spam klasörüne gider. Bu ayar alıcılarınızı sahte e-postalardan korur. Kötü yapılandırılmış bir araçtan gelen gerçek e-posta da kaybolmaz, çünkü spam klasöründe yine bulunabilir.

**p=reject: engelleme.** Alıcılar kontrolden geçemeyen e-postayı reddeder. Çoğu bunu teslim sırasında, 5 ile başlayan kalıcı bir hata koduyla yapar. E-posta hiçbir posta kutusuna ulaşmaz. Gönderen sunucu bunun yerine bir bounce mesajı alır.

### Alıcılar politikanıza her zaman uymaz

Politikanız bir emir değil, bir istektir. Standarda göre alıcılar bir e-postayı yalnızca `p=reject` nedeniyle reddetmemelidir. E-posta hakkında başka hiçbir şey bilmiyorlarsa onu quarantine olarak değerlendirmelidirler. E-posta sağlayıcıları politikanızın yanında kendi gönderen itibarı verilerini ve spam filtrelerini de kullanır.

### Reject için neden SPF yetmez, DKIM de gerekir?

Yönlendirme SPF'yi bozar. Birinin iş e-postasını kişisel bir hesaba yönlendirdiğini varsayalım. Yönlendiren sunucu e-postayı kendi IP adresinden gönderir. Bu adres SPF kaydınızda olmadığı için SPF kontrolü başarısız olur.

DKIM yönlendirmeden etkilenmez. İmza e-postanın içinde taşınır. Bu yüzden geçerli kalır ve alan adınızla eşleşmeye devam eder. `p=reject` kullanan bir alan adının DKIM kullanması ve yalnızca SPF'ye dayanmaması bu nedenle gerekir.

### t=y ile test modu

RFC 9989 bir test modu ekler. `t=y` ayarlarsanız alıcılar politikanızı yayımladığınızdan bir adım daha yumuşak uygular:

- `reject`, `quarantine` olarak değerlendirilir.
- `quarantine`, `none` olarak değerlendirilir.

Test modu raporlarınızı değiştirmez. Politikanız `p=none` olduğunda da hiçbir etkisi yoktur. Daha sıkı bir politikanın gerçek e-postalarla nasıl çalıştığını, politikayı kalıcı hâle getirmeden önce görmenizi sağlar.

## Alt alan adları: sp ve np

Alt alan adı, alan adınızın önüne eklenen ek bir addır, örneğin `marketing.example.com` veya `support.example.com`. Birçok şirket alt alan adlarından e-posta gönderir. `sp` ve `np` etiketleri, kendi DMARC kaydı olmayan alt alan adları için kuralları belirler.

### Alıcı doğru kaydı nasıl bulur?

1. Alıcı önce From satırındaki alan adının tam olarak kendisi için bir DMARC kaydı arar. `news.example.com` adresinden gönderiyorsanız ve `_dmarc.news.example.com` kaydı varsa alıcı o kaydı kullanır.
2. Orada kayıt yoksa `_dmarc.example.com` adresindeki ana kaydınızı arar. Bunu bulmak için alan adının başındaki parçaları birer birer çıkararak adın sonuna doğru ilerler. Bunun için Public Suffix List'i kullanmaz.
3. Ana kaydınızı bulduğunda, gönderim yapan alt alan adının DNS'te var olup olmadığını kontrol eder.

Ardından kuralı seçer:

- Alt alan adı varsa `sp` uygulanır. `sp` yoksa `p` uygulanır.
- Alt alan adı yoksa (DNS, "böyle bir ad yok" anlamına gelen NXDOMAIN döndürürse) `np` uygulanır. `np` yoksa `sp` kullanılır. `sp` de yoksa `p` kullanılır.

### Bir örnek

`_dmarc.example.com` adresinde şu kaydın yayımlandığını varsayalım:

```text
v=DMARC1; p=reject; sp=quarantine; np=reject; rua=mailto:dmarc-reports@example.com
```

Bu kayıt üç farklı kural belirler:

- **`example.com` alan adının kendisinden gelen e-posta** `p=reject` kuralını kullanır. DMARC kontrolünden geçemezse alıcılardan bu e-postayı engellemeleri istenir.
- **DNS'te var olan bir alt alan adı olan `news.example.com` adresinden gelen e-posta** `sp=quarantine` kuralını kullanır. Bir hizmet sağlayıcı bir ayarı yanlış yaptığı için bir bültenin kontrolden geçemediğini düşünelim. Bülten geri dönmek yerine spam klasörüne gider.
- **DNS'te var olmayan `invoices-2026.example.com` gibi uydurma bir addan gelen e-posta** `np=reject` kuralını kullanır. Gerçek alt alan adlarınız quarantine kuralını alsa da birinin uydurduğu bir alt alan adı katı kuralı alır.

## DMARC raporu nedir?

DMARC'ta iki tür rapor vardır:

- `rua` ile ayarlanan **özet raporlar (aggregate reports)**. Bunlar günlük özetlerdir.
- `ruf` ile ayarlanan **hata raporları (failure reports)**. Bunlar kontrolden geçemeyen tek tek e-postaları anlatır.

### Özet raporlar (rua)

Özet rapor, Gmail gibi tek bir e-posta sağlayıcısından gelen bir özettir. Bu sağlayıcının aldığı ve alan adınızdan geldiğini söyleyen tüm e-postaları listeler. Rapor bir XML dosyasıdır. XML dosyası, yazılımın okuması için hazırlanmış yapılandırılmış bir metin dosyasıdır. Sağlayıcılar raporu bir e-posta eki olarak gönderir. Ek, düz bir `.xml` dosyası veya `.xml.gz` gibi sıkıştırılmış bir dosya olabilir.

Her rapor genellikle bir UTC gününü kapsar. Standarda göre alıcılar özet raporları en az 24 saatte bir göndermelidir. Ancak rapor göndermek zorunda değildirler.

Kısaltılmış örnek bir rapor:

```xml
<feedback>
  <report_metadata>
    <org_name>mail.receiver.example</org_name>
    <report_id>20261003.example.com</report_id>
    <date_range>
      <begin>1790985600</begin>
      <end>1791071999</end>
    </date_range>
  </report_metadata>
  <policy_published>
    <domain>example.com</domain>
    <p>none</p>
    <sp>none</sp>
  </policy_published>
  <record>
    <row>
      <source_ip>192.0.2.10</source_ip>
      <count>412</count>
      <policy_evaluated>
        <disposition>none</disposition>
        <dkim>pass</dkim>
        <spf>fail</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>example.com</header_from>
      <envelope_from>bounces.esp-mail.example</envelope_from>
    </identifiers>
    <auth_results>
      <dkim><domain>example.com</domain><result>pass</result></dkim>
      <spf><domain>bounces.esp-mail.example</domain><result>pass</result></spf>
    </auth_results>
  </record>
</feedback>
```

Raporun her bölümünün söylediği şudur:

- **`<report_metadata>`**: Rapor `mail.receiver.example` kaynağından geldi. Tam bir UTC gününü kapsıyor.
- **`<policy_published>`**: Alıcının `example.com` için gördüğü politika. Burada bu politika `p=none` ve `sp=none` şeklindedir.
- **`<row>`**: `192.0.2.10` IP adresinden 412 e-posta geldi.
- **SPF**: `<auth_results>` altında SPF geçti, ancak `bounces.esp-mail.example` alan adı için geçti. Bu alan adı, From alan adınız olan `example.com` değildir. Bu yüzden `<policy_evaluated>` altında SPF, eşleşmediği için `fail` gösterir.
- **DKIM**: `<auth_results>` altında DKIM, `example.com` için geçti. Bu, `<identifiers>` içinde gösterilen From alan adıyla eşleşir. Yani DKIM geçti ve eşleşti, bu 412 e-posta da DMARC kontrolünden geçti.

Ana nokta basittir. `<auth_results>`, ham SPF ve DKIM kontrollerini gösterir. `<policy_evaluated>` ise her kontrolün From alan adınızla da eşleşip eşleşmediğini gösterir. DMARC ikincisini kullanır.

### Hata raporları (ruf)

Hata raporları, genellikle adli (forensic) raporlar olarak da adlandırılır. Her biri kontrolden geçemeyen tek bir e-postayı anlatır. Bu raporlar e-postanın başlıklarını ve alıcıyla ilgili ayrıntıları içerebilir. Bu gizlilik riski nedeniyle birçok alıcı ayrıntıların çoğunu çıkarır veya hata raporu hiç göndermez. `fo` etiketi bu raporlar için seçenekleri belirler. Yalnızca `ruf` kullanıyorsanız önemlidir.

### Raporları okuma

Standart, özet raporları elle değil, bir yazılımla okumanızı önerir. Birçok e-posta sağlayıcısına gönderim yapıyorsanız her biri size her gün kendi raporunu gönderir.

## Neden DMARC e-postaları alıyorum?

Bu günlük e-postaları, DMARC kaydınızdaki `rua` etiketinde adresiniz bulunduğu için alırsınız. Sizin adınıza e-posta alan her e-posta sağlayıcısı, bu etiketteki her adrese günlük bir özet gönderir.

Konu satırı, [RFC 9990](https://www.rfc-editor.org/info/rfc9990) belgesinde belirlenen sabit bir biçimdedir:

```text
Report Domain: example.com Submitter: mail.receiver.example Report-ID: 20261003.example.com
```

Submitter, e-postayı kontrol eden sağlayıcıdır, örneğin Google veya Microsoft. XML raporu ekte bulunur ve çoğu zaman sıkıştırılmıştır.

Bu raporları kişisel bir gelen kutusuna göndermeyin. Bunun yerine `rua` değerini ayrı bir posta kutusuna veya bir rapor işleme hizmetine yönlendirin. Bunu kurduğunuzu hatırlamıyorsanız DMARC kaydınızı kontrol edin. Önceki bir yönetici veya bir e-posta platformunun kurulum rehberi bu adresi eklemiş olabilir.

### Raporları başka bir alan adına gönderme

Alan adınızın `example.com` olduğunu ve raporların `reports.example.net` alan adındaki bir adrese gönderilmesini istediğinizi varsayalım. Raporları alacak alan adının bunu kabul etmesi gerekir. Bunu, DNS'inde bir TXT kaydı yayımlayarak yapar. Bu kayıt olmadan alıcılar adresi yok sayar ve rapor göndermez.

Kayıt şu ana bilgisayar adına eklenir:

```text
example.com._report._dmarc.reports.example.net  TXT  v=DMARC1
```

Rapor hizmetleri bunun yerine genellikle bir joker (wildcard) kayıt yayımlar (`*._report._dmarc.reports.example.net`). Bu tek kayıt tüm müşteri alan adlarını kapsar. Bu yüzden her biri için ayrı kurulum gerekmez.

## E-posta kaybetmeden p=none ayarından reject ayarına geçme

Doğrudan reject ayarına geçmeyin. Her seferinde bir adım ilerleyin:

1. **İzlemeye başlayın.** `_dmarc` adresinde `p=none` ve çalışan bir `rua` adresi içeren bir DMARC kaydı yayımlayın. Rapor almaya başlarsınız ve tesliminizde hiçbir şey değişmez.
2. **Göndericilerinizi düzeltin.** Raporları okuyun. Alan adınız adına e-posta gönderen ve kontrollerden geçemeyen her gerçek hizmeti bulun ve ayarlarını düzeltin.
3. **Quarantine ayarına geçin.** Tüm gerçek göndericileriniz sürekli olarak kontrolden geçtiğinde `p=quarantine` ayarına geçin. Gerçek hiçbir e-postanın oraya düşmediğinden emin olmak için spam klasörlerini kontrol edin.
4. **Reject ayarına geçin.** `p=reject` ayarına geçin. Sizin adınıza gönderilen sahte e-postalar artık kimseye ulaşmadan engellenir.

Bu biraz zaman alabilir. Standarda göre tüm göndericilerin kontrolden geçmesini sağlamak, ne sıklıkla gönderim yaptığınıza bağlı olarak aylar sürebilir. Fatura araçları, destek masaları ve pazarlama platformları kolayca gözden kaçar. Bu yüzden raporlarınızı incelemeye devam edin.

**Kullanıcılarınız e-posta listelerine (mailing list) mesaj gönderiyorsa** daha yavaş ilerleyin. Standart, `p=none` ayarında en az bir ay, ardından quarantine ayarında da aynı süre kalmayı önerir. Reject ayarına geçmeden önce sonuçları karşılaştırın. E-posta listeleri çoğu zaman konu satırlarını değiştirir, altbilgi ekler veya mesajları yeniden gönderir. Bu değişiklikler SPF'yi bozar ve bazen DKIM'i de bozar. Birkaç haftalık raporları karşılaştırmak, reject e-postaları engellemeye başlamadan önce bu sorunları gösterir.

**Son adım için test modunu kullanın.** `t=y` ile, alıcılar hâlâ quarantine uygularken `p=reject` yayımlayabilirsiniz. Alıcıların reject ayarına nasıl tepki verdiğini görürsünüz. Ancak kontrolden geçemeyen e-postalar geri dönmek yerine yine spam klasörüne gider.

**Katı SPF hakkında bir not.** SPF kaydınız `-all` ile bitiyorsa bazı alıcılar başarısız e-postayı DMARC çalışmadan önce, SPF kontrolü sırasında reddeder. Bu e-postalar hiçbir zaman DMARC kontrolüne ulaşmaz. Günlük raporlarınızda da görünmezler.

## Sık yapılan DMARC kaydı hataları

### İki DMARC kaydı

Bu hata genellikle biri ilk kaydı düzenlemek yerine ikinci bir TXT kaydı eklediğinde olur. Alıcılar iki kaydı da görür ve RFC 9989'da yazdığı gibi ikisini de yok sayar. Bu durumda alan adınız hiç DMARC kaydı yokmuş gibi davranır.

**Çözüm:** DNS'inizi kontrol edin ve tüm etiketleri tek bir TXT kaydında birleştirin.

### Kayıt _dmarc üzerinde değil, ana alan adında

Ana bilgisayar adı olarak `example.com` girerseniz kayıt `_dmarc.example.com` adresinde değil, ana alan adınızda oluşturulur. E-posta sunucuları DMARC kaydını yalnızca `_dmarc` adında arar. Bu yüzden kaydı hiç bulamazlar.

**Çözüm:** Ana bilgisayar adını `_dmarc` olarak ayarlayın.

### v=DMARC1 ilk sırada değil veya büyük/küçük harf yanlış

`v=dmarc1` yazmak veya kayda `p=none; v=DMARC1` ile başlamak kaydı bozar. Alıcılar kaydı yok sayar.

**Çözüm:** `v=DMARC1` ifadesini kaydın en başına yazın ve ardından noktalı virgül koyun.

### mailto: olmadan yazılan rapor adresleri

`rua=mailto:dmarc@example.com` yerine `rua=dmarc@example.com` yazmak adres biçimini bozar. Alıcılar yalın bir adresi kullanamaz, bu yüzden hiç rapor gelmez.

**Çözüm:** `rua` ve `ruf` içindeki her adresi `mailto:` ile başlatın.

### İzin alınmadan başka bir alan adına gönderilen raporlar

Raporları bir hizmet sağlayıcının alan adına gönderiyorsanız ve bu alan adı izin kaydını yayımlamamışsa rapor almazsınız.

**Çözüm:** Yukarıda anlatıldığı gibi, dışarıdaki her rapor adresi için eşleşen bir `_report._dmarc` kaydı olduğundan emin olun.

### Yalnızca SPF ile reject

Yönlendirme, e-postayı gönderen IP adresini değiştirir. Bu yüzden yönlendirilen e-posta SPF kontrolünden geçemez. DKIM olmadan, yönlendirilen gerçek e-posta DMARC kontrolünden geçemez ve reject politikası altında geri döner.

**Çözüm:** `p=none` ayarının ötesine geçmeden önce e-postanızı gönderen her hizmette DKIM imzalamayı kurun.

### Eski rehberlerden kalan kaldırılmış etiketler

Birçok eski rehber, 100 veya kademeli geçiş için 20 gibi değerlerle bir yüzde etiketi ekliyordu. Kayıtta kalmış bir `pct=100` zarar vermez, ancak yüzdeyle kademeli geçiş artık standardın parçası değildir.

**Çözüm:** Eski yüzde etiketlerini kaldırın. Değişiklik yaparken daha yumuşak bir politikaya ihtiyacınız varsa `t=y` kullanın.

## Sık sorulan sorular

**Gerçekten bir DMARC kaydına ihtiyacım var mı?**
Kişisel Gmail veya Outlook hesaplarına e-posta gönderiyorsanız evet. Google ve Microsoft, günde 5.000 veya daha fazla e-posta gönderenlerin From alan adı eşleşecek şekilde bir DMARC kaydı yayımlamasını şart koşar. Daha küçük göndericilerin de bir DMARC kaydı olmalıdır. `rua` içeren bir `p=none` kaydının hiçbir maliyeti yoktur. Raporlar da sizin adınıza kimin e-posta gönderdiğini gösterir.

**DMARC kaydımı nasıl kontrol ederim?**
Terminalinizde `dig TXT _dmarc.yourdomain.com +short` komutunu veya Windows'ta `nslookup -type=TXT _dmarc.yourdomain.com` komutunu çalıştırın. Sonuç, `v=DMARC1` ile başlayan kaydınız olmalıdır. Bir Gmail hesabına test e-postası da gönderebilirsiniz. E-postayı açın ve "Orijinali göster" seçeneğini seçin. Burada DMARC kontrolünün geçip geçmediği görünür.

**DMARC fail ne demek?**
E-postanın iki kontrolden de geçemediği anlamına gelir. Ne SPF ne de DKIM, görünen From alan adıyla eşleşen bir alan adı için geçmiştir. Bu durumda alıcılar politikanıza uyar. Bazıları `550 5.7.1 Email rejected per DMARC policy for example.com` gibi açık bir ret mesajı gönderir. Nedeni [bounce mesajını okuyarak](/blog/550-5-7-1-error) bulabilirsiniz. Gmail, DMARC kaydı eksik olduğunda `4.7.31` hata kodunu, From alan adı eşleşmediğinde ise `4.7.32` hata kodunu kullanır.

**Birden fazla DMARC kaydım olabilir mi?**
Hayır. Bir alan adı yalnızca bir DMARC kaydı yayımlayabilir. RFC 9989'a göre bir alıcı sunucu birden fazla kayıt bulursa hepsini yok saymalıdır. Bu durumda alan adınızın hiç DMARC politikası kalmaz. İkinci bir kayıt eklemek yerine mevcut kaydınızı düzenleyin.

**DMARC benzer görünen alan adlarını durdurur mu?**
Hayır. DMARC yalnızca DNS'inizdeki alan adının tam olarak kendisini korur. Birinin benzer görünen bir alan adı kaydetmesini engelleyemez. Bu, örneğin iki harfi yer değiştirmiş veya .net gibi farklı bir uzantısı olan bir alan adı olabilir. DMARC sahte bir görünen adı da durduramaz. Benzer görünen alan adları için başka önlemler gerekir. Örneğin adınızı kopyalayan yeni alan adı kayıtlarını izleyebilirsiniz.

DMARC kaydı, e-postanızın gerçekten sizden geldiğini kanıtlar. Ancak artık var olmayan adreslere gönderim yaptığınızda yardımcı olamaz. Geçersiz adresleri çıkarmak ve bounce oranınızı düşük tutmak için bir sonraki gönderiminizden önce listenizi [Giggal.ai](/email-list-cleaning) (İngilizce) ile kontrol edin.
