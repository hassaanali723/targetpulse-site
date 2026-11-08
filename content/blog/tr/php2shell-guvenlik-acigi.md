---
title: "PHP2Shell (CVE-2026-109618 ve CVE-2026-109619) nedir ve nasıl yamalanır?"
seoTitle: "PHP2Shell güvenlik açığı: PHP nasıl yamalanır?"
description: "PHP2Shell, saldırganların web sunucularında kod çalıştırmasına izin veren iki kritik PHP açığıdır. Güvenli sürümleri, yamayı ve sonraki kontrolleri görün."
slug: php2shell-guvenlik-acigi
date: 2026-11-08
updated: 2026-11-08
keyword: php2shell güvenlik açığı
image: /blog/covers/tr/php2shell-guvenlik-acigi.webp
imageAlt: "PHP2Shell: CVE-2026-109618 ve CVE-2026-109619, 10 üzerinden 9,2 önem derecesi, PHP 8.5.12, 8.4.27, 8.3.36 ve 8.2.35 ile düzeltildi"
cta: Alan adınız kara listeye girmeden önce mail listenizi doğrulayın
---

PHP2Shell, PHP'nin kendisinde bulunan iki kritik hatanın adıdır: CVE-2026-109618 ve CVE-2026-109619. Bu hatalar, saldırganın PHP çalıştıran bir web sunucusunda kendi kodunu çalıştırmasına izin verir. Saldırganın bir parolaya veya hesaba ihtiyacı yoktur. PHP iki hatayı da 21 Ekim 2026'da düzeltti ve saldırganlar bu hataları şimdiden kullanıyor.

Yalnızca bir satır okuyacaksanız, bu satırı okuyun. PHP'yi **8.5.12, 8.4.27, 8.3.36 veya 8.2.35** sürümüne (ya da daha yenisine) güncelleyin, ardından **PHP'yi yeniden başlatın**. Yeni paket, PHP süreçleri yeniden başlayana kadar hiçbir işe yaramaz.

![PHP2Shell için 4 adımda yapılacaklar: tüm PHP kurulumlarını bulun, PHP'yi düzeltilmiş bir sürüme güncelleyin, PHP'yi yeniden başlatın, ardından izinsiz giriş olup olmadığını kontrol edin](/blog/fig-tr-php2shell-what-to-do.webp)

## PHP2Shell nedir, basit bir dille

PHP, web sitelerinin büyük bir kısmının arkasındaki programlama dilidir. WordPress, Laravel, Drupal, Magento ve phpBB'nin hepsi PHP ile çalışır. Bu sitelerin çoğu, her sayfa isteğini PHP'nin işlediği bir sunucuda çalışır.

PHP2Shell, WordPress'te veya sizin kodunuzda bulunan bir hata değildir. Altta çalışan motor olan PHP'de bulunan bir hatadır. Bu yüzden sitenin kendi kodunda hiçbir hata olmasa bile, yama yapılmamış bir sunucudaki her PHP sitesi risk altındadır.

PHP iki hatayı da 10 üzerinden 9,2 olarak puanladı (CVSS v4.0). Bu, "kritik" seviyesidir. PHP2Shell adı, saldırının sonucundan gelir: bir shell (komut satırı). Bu, saldırganın sunucunuzda komut yazabilmesi demektir.

## PHP2Shell adım adım nasıl çalışır?

Önce PHP'nin bir web sayfasını nasıl işlediğine dair dört bilgiye ihtiyacınız var.

1. Bir PHP sunucusu, birkaç PHP "çalışanını" (worker) sürekli açık tutar. Her çalışan bir web isteğini işler, sonra bir sonrakini işler ve bu böyle devam eder.
2. PHP, her istek için o isteğin verilerine bellek ayırır. Buna form alanları, çerezler, yüklenen dosyalar ve oturum verileri dahildir.
3. İstek bittiğinde PHP bu belleği temizler. Bir sonraki istek, geride hiçbir şey kalmadan başlamalıdır.
4. Her isteğin, `php.ini` içindeki `memory_limit` ile belirlenen bir bellek sınırı vardır. Bir istek bu sınırı aşarsa PHP isteği durdurur.

PHP2Shell'in iki hatası da 2. ve 3. adımlardaki yanlışlardır. PHP, hangi belleğin geçerli olduğunu karıştırır.

### Hata 1 (CVE-2026-109618): PHP'nin belleği yarı yolda biter

1. Saldırgan, çok fazla bellek kullanacak şekilde hazırlanmış bir istek gönderir.
2. PHP, isteğin verilerini doldururken bellek sınırına ulaşır. Bu verilerin bir kısmı yalnızca yarıya kadar yazılmıştır.
3. PHP isteği durdurur ve temizlik işlemini çalıştırır.
4. Temizlik işlemi, yarım yazılmış verileri tamamlanmış gibi kabul eder. Böylece PHP, anlamsız veriler veya saldırganın seçtiği veriler içeren bir bellekle çalışır.

PHP'nin bu hata için önerdiği geçici çözüm, bellek sınırını kaldırmak ve yüklemeleri küçük tutmaktır. Bu da saldırının, büyük bir istekle sınıra ulaşmaya dayandığını gösterir.

### Hata 2 (CVE-2026-109619): önceki istekten kalanlar

1. Bir istek biter ve PHP kullandığı belleği serbest bırakır.
2. PHP yanlışlıkla, serbest bırakılan belleğin bir kısmının nerede olduğunu gösteren bir not tutar.
3. Aynı çalışan bir sonraki isteği alır. Bu istek saldırgandan gelebilir.
4. PHP notu sıfırlamadan önce yeni istek bu notu izler. Artık başka bir şey içeren belleği okur veya bu belleğe yazar.

Programcılar buna "use after free" (serbest bırakıldıktan sonra kullanım) hatası der. PHP, doğrulanmış bir sonuç belirtiyor: saldırgan, görmemesi gereken belleği okuyabilir. PHP'nin geçici çözümü, oturum yükleme ilerlemesi (session upload progress) özelliğini kapatmaktır. Bu özellik, bir dosya yüklemesinin ne kadar ilerlediğini bildirir. Varsayılan olarak açıktır.

### Bir bellek hatası saldırganın kod çalıştırmasını neden sağlar?

Bir programın belleğinde iki tür şey bulunur. Biri metin ve sayılar gibi verilerdir. Diğeri ise programın bir sonra çalıştıracağı talimatların konumudur.

Saldırgan, PHP'nin kullanmaması gereken belleğe ne yazılacağını seçebilirse bu konumları değiştirebilir. O zaman PHP kendi talimatları yerine saldırganın talimatlarını çalıştırır. Buna bellek bozulması (memory corruption) denir. İki hata da bu yolla uzaktan kod çalıştırmaya (RCE) dönüşür. Uzaktan kod çalıştırma, internetteki birinin sunucunuzda komut çalıştırması demektir.

![PHP2Shell tek bir web isteğini nasıl sunucunun kontrolüne dönüştürür: saldırgan giriş yapmadan özel hazırlanmış bir istek gönderir, PHP isteğin belleğini yanlış işler, saldırganın verileri PHP'nin kendi verilerinin yerini alır ve PHP saldırganın komutlarını çalıştırır](/blog/fig-tr-php2shell-how-it-works.webp)

PHP'ye göre risk en yüksek mod_php kullanan Apache'dedir. Orada saldırı, sitenizin kodu çalışmadan önce başlayabilir. Sitenizin kendi hatasının olması gerekmez.

### İki hatanın karşılaştırması

| | CVE-2026-109618 | CVE-2026-109619 |
|---|---|---|
| PHP'nin verdiği ad | RCE via OOM corruption (bellek yetersizliği kaynaklı bozulma ile RCE) | RCE via stale global state (eskimiş genel durum ile RCE) |
| Ne ters gidiyor? | PHP'nin belleği hazırlık sırasında biter, ardından yarım kalmış verilere güvenir | PHP, önceki bir istekten kalan belleği yeniden kullanır |
| Saldırganın neye ihtiyacı var? | Tek bir web isteği, giriş gerekmez | Aynı PHP çalışanına giden istekler, giriş gerekmez |
| Doğrulanmış sonuçlar | Uzaktan kod çalıştırma | Uzaktan kod çalıştırma, bellek okuma |
| Önem derecesi (CVSS v4.0) | 9,2, kritik | 9,2, kritik |

## Nasıl bulundu?

PHP Foundation, Calif, OpenAI ve Wiz dahil olmak üzere birkaç ekibe teşekkür etti. Calif ve Wiz, araştırmalarında yapay zekâ modelleri kullandıklarını söyledi. PHP, düzeltmeyi 20 Ekim'de önceden duyurdu ve 21 Ekim'de yayımladı.

Saldırganlar düzeltmeden daha hızlıydı. Amazon, hatayı kullanma girişimini düzeltmenin yayımlanmasından dört gün önce, 17 Ekim'de gördü.

## Saldırgan PHP2Shell ile neler yapabilir?

Saldırgan PHP üzerinden kod çalıştırdığında, PHP'nin çalıştığı hesap olarak hareket eder. Birçok Linux sunucusunda bu hesap `www-data` hesabıdır. Bu hesap, web sitenizin dosyalarını okuyabilir ve değiştirebilir.

| Saldırganın yapabileceği | Sizin için anlamı |
|---|---|
| Sunucuda komut çalıştırmak | Sitenizin dosyalarını okuyabilir, değiştirebilir veya silebilir. Sahte sayfalar yayımlayabilir. |
| Bellekten gizli bilgileri okumak | Wiz'e göre sızan bellek, diğer ziyaretçilerin isteklerinden parolaları, token'ları, API anahtarlarını ve sertifikaları açığa çıkarabilir. |
| Yapılandırma dosyalarınızı okumak | `wp-config.php` ve `.env` gibi dosyalar veritabanı parolalarını içerir. Saldırgan bunlarla müşteri verilerini kopyalayabilir. |
| Arka kapı yerleştirmek | Gizli bir PHP dosyası, yama yaptıktan sonra da geri girmelerini sağlar. NCSC bu dosyaları aramanızı istiyor. |
| Sunucunuzdan spam ve phishing göndermek | Alan adınız ve IP adresiniz kara listelere girer, gerçek e-postalarınız ulaşmaz. |
| Makinenin tamamını ele geçirmek | Dream Research, saldırganların PHP2Shell'i bir Linux çekirdek hatasıyla (CVE-2026-46300) birleştirerek 24 güvenlik duvarının tam kontrolünü ele geçirdiğini bildirdi. Tenable bu raporu doğrulamadı. |

## Kimler etkileniyor?

PHP'nin güvenlik bildirisi, web isteklerine yanıt veren her PHP kurulumunu sayıyor:

- PHP-FPM (Nginx ile en yaygın kurulum)
- mod_php ile Apache
- php-cgi
- FrankenPHP
- LiteSpeed

İngiltere'nin National Cyber Security Centre'ı (NCSC) daha da ileri gidiyor. PHP çalıştıran her kurumun, sürümü ne olursa olsun risk altında olduğunu varsayması gerektiğini söylüyor. Buna, cihazlar ve barındırılan araçlar gibi satın aldığınız ürünlerin içine yerleştirilmiş PHP de dahildir.

26 Ekim'de güvenlik şirketi Trail of Bits, çalışan exploit'lerin yama yapılmamış PHP 8.2 ila 8.5 sürümlerinde başarılı olduğunu açıkladı. Bunları MediaWiki, Symfony, Laravel ve phpBB üzerinde gösterdi.

## Gerçek saldırılarda kullanılıyor mu?

Evet. Bu bir teori değil.

![PHP2Shell zaman çizelgesi: ilk saldırı girişimi 17 Ekim'de görüldü, düzeltme 21 Ekim'de yayımlandı, 26 Ekim'de CISA KEV listesine eklendi, ABD federal kurumları için yama son tarihi 29 Ekim](/blog/fig-tr-php2shell-timeline.webp)

- **17 Ekim:** Amazon'un tehdit istihbaratı ekibi, hatayı kullanma girişimi gördü. Bu, düzeltmenin yayımlanmasından dört gün önceydi.
- **21 Ekim:** PHP düzeltilmiş sürümleri yayımladı. Cloudflare, aynı gün ilk saldırıları gördüğünü söyledi.
- **26 Ekim:** ABD'nin siber savunma kurumu CISA, iki hatayı da Known Exploited Vulnerabilities (KEV, istismar edildiği bilinen açıklar) kataloğuna ekledi. Bu listede yalnızca gerçek saldırılara dair kanıtı olan hatalar yer alır.
- **29 Ekim:** CISA'nın ABD federal kurumlarına yama için verdiği son tarih.

## Hangi PHP sürümleri güvenli?

Tabloda kendi PHP dalınızı bulun. Sürümünüz düzeltilmiş sürümden düşükse risk altındasınız.

| PHP dalınız | Risk altında olan sürümler | Düzeltilmiş sürüm | Notlar |
|---|---|---|---|
| 8.5 | 8.5.12'den eski | 8.5.12 | |
| 8.4 | 8.4.27'den eski | 8.4.27 | |
| 8.3 | 8.3.36'dan eski | 8.3.36 | |
| 8.2 | 8.2.35'ten eski | 8.2.35 | 8.2, 31 Aralık 2026'da düzeltme almayı bırakır |
| 8.1, 8.0, 7.4 | tüm sürümler | resmi sürüm yok | PHP küçük kaynak kodu yamaları yayımladı. Linux sağlayıcınızın bir düzeltmesi olabilir. |
| 7.3 ile 5.4 arası | tüm sürümler | yok | Destek dışı. Yükseltin. |

**Linux dağıtımları farklı sürüm numaraları kullanır.** Debian, Ubuntu ve Red Hat, düzeltmeyi çoğu zaman numarayı değiştirmeden eski bir sürüme ekler. Bu yüzden `php -v`, zaten güvenli olan bir sunucuda "eski" bir numara gösterebilir. Bu sistemlerde yalnızca numaraya bakmayın, sağlayıcınızın CVE-2026-109618 için yayımladığı güvenlik bildirimini kontrol edin.

## PHP sürümünüzü nasıl kontrol edersiniz?

Kurulumunuza uyan yöntemi seçin.

| Sitenizin çalıştığı yer | PHP sürümünü görme yolu |
|---|---|
| Kendi sunucunuz (SSH) | `php -v` komutunu çalıştırın. Web sitesinin kullandığı sürüm için PHP-FPM veya Apache paketini de kontrol edin. |
| WordPress | Sırasıyla **Araçlar**, **Site sağlığı**, **Bilgiler** ve **Sunucu** bölümüne gidin. |
| cPanel hosting | **MultiPHP Manager**'ı açın. Her alan adı için PHP sürümünü listeler. |
| Diğer paylaşımlı hosting | Hosting panelinize bakın veya destek ekibine sorun. |

Aynı sunucuda komut satırı ve web sitesi farklı PHP sürümleri kullanabilir. Web sayfalarını sunan sürümü kontrol edin.

## Nasıl yama yapılır?

Çözüm, yeni PHP sürümünü kurmak ve PHP'yi yeniden başlatmaktır. PHP'nin kendi ifadesiyle: "Tam bir risk azaltma yöntemi yoktur, güncellemek tek güvenli seçenektir."

**Paylaşımlı hosting.** PHP'yi hosting firmanız sizin için yamalar. Sunucunun düzeltilmiş bir sürümle çalıştığını destek ekibine onaylatın. Paneliniz PHP sürümü seçmenize izin veriyorsa desteklenen bir dal seçin.

**Debian veya Ubuntu sunucusu.**

```bash
sudo apt update
sudo apt upgrade
sudo systemctl restart php8.3-fpm   # use your version number
sudo systemctl restart apache2      # only if you use Apache
```

**Red Hat, AlmaLinux veya Rocky Linux sunucusu.**

```bash
sudo dnf upgrade 'php*'
sudo systemctl restart php-fpm
sudo systemctl restart httpd        # only if you use Apache
```

**Docker.** İmajınızın etiketini düzeltilmiş bir etiketle değiştirin, örneğin `php:8.4.27-fpm`. Her konteyneri yeniden derleyin ve yeniden dağıtın. Eski ve hâlâ çalışan bir konteyner risk altında kalır.

Bunlardan hangisini yaparsanız yapın, ardından tekrar kontrol edin. `php -v` komutunu çalıştırın veya WordPress'teki Site sağlığı sayfasını yeniden yükleyin. Yeni sürümü ya da sağlayıcınızın düzeltilmiş paketini doğrulayın.

## Bugün yama yapamıyorsanız

PHP, riski azaltan birkaç ayar sıralıyor. PHP, bu ayarların sunucuyu güvenli hale getirmediğini açıkça belirtiyor. Bunları yalnızca güncellemeyi hazırlarken kullanın.

| Ayar | Hangi açığa karşı yardımcı olur? | Nerede ayarlanır? |
|---|---|---|
| `memory_limit=-1` | CVE-2026-109618 | `php.ini` içinde, uygulamaların geçersiz kılamayacağı şekilde |
| Düşük `post_max_size` | CVE-2026-109618 | `php.ini` |
| `session.upload_progress.enabled=0` | CVE-2026-109619 | `php.ini` veya FPM havuz yapılandırması. `ini_set()` veya `.user.ini` ile değil |
| `fatal_error_backtraces=0` | CVE-2026-109619, yalnızca PHP 8.5 | `php.ini` |

Bunları değiştirdikten sonra her PHP çalışanını yeniden başlatın. PHP ayrıca `RLIMIT_AS` veya `RLIMIT_DATA` değerlerini bellek sınırı olarak kullanmamanız konusunda uyarıyor. Bunlar hatayı tetikleyebilir.

NCSC bir seçenek daha sunuyor. Hızlıca güncelleme yapamıyor veya riski azaltamıyorsanız, yapabilene kadar sistemi çevrimdışı duruma getirin.

## Zaten hacklenip hacklenmediğinizi kontrol edin

Saldırganlar önden başladı. İlk girişim, düzeltmeden dört gün önce geldi. Bu yüzden şu anda yamalı olan bir sunucuya daha önce izinsiz girilmiş olabilir.

NCSC, yama yapılmamış sistemlerde izinsiz giriş belirtilerini ve arka kapıları kontrol etmenizi istiyor. Bir PHP sunucusunda yaygın belirtiler şunlardır:

- Sizin oluşturmadığınız yeni `.php` dosyaları. Bunlar çoğunlukla yükleme veya önbellek klasörlerinde olur.
- WordPress'te veya uygulamanızda yeni yönetici kullanıcılar.
- Olağan dışı giden bağlantılar veya açıklayamadığınız CPU kullanımı.
- Sunucunuzdan giden e-postalarda ani bir artış.
- IP adresinizin veya alan adınızın bir kara listede olduğunu söyleyen geri dönen mailler (bounce).

Son ikisi, siteniz normal görünse bile önemlidir. Hacklenmiş bir sunucu sıklıkla alan adınızdan spam veya phishing göndermek için kullanılır. Bu, alan adınızı kara listelere sokabilir ve gerçek e-postalarınız gelen kutularına ulaşmayı bırakır. [Mail alan adınızın kara listede olup olmadığını nasıl kontrol edeceğinizi](/blog/how-to-check-if-email-domain-is-blacklisted) anlatan rehberimiz, bir kaydı nasıl sorgulayıp düzelteceğinizi gösteriyor.

İzinsiz giriş belirtileri bulursanız yama yapmak yeterli değildir. Saldırgan bir arka kapı bırakmış olabilir. Temiz bir yedekten geri yükleyin veya bir olay müdahale ekibiyle çalışın.

## Bilmeniz gereken iki ilgili sorun

**CVE-2026-115560.** PHP, 23 Ekim'de oturum yükleme ilerlemesi hakkında ayrı bir güvenlik bildirisi yayımladı. PHP, bunun istismar edilmesinin olası olmadığını söylüyor. Yukarıdaki tablodaki `session.upload_progress.enabled=0` ayarı bu sorunu da kapsar.

**Düzeltilmiş sürümlerde bir SimpleXML sorunu.** PHP 8.4.27 ve 8.5.12, SimpleXML kullanan bazı uygulamaların çökmesine neden olabilir (php-src issue #24488). Nedeni güvenlik düzeltmesi değil, ayrı bir değişikliktir. 26 Ekim itibarıyla bir düzeltme birleştirildi ama henüz yayımlanmadı. Güncellemeden sonra uygulamanızı test edin. Bu sorun yüzünden açığı olan sürümde kalmayın.

## İzleyin: PHP güvenlik ekibi süreci nasıl yönetti?

```youtube
No3T8JQqhtM
İzleyin: [PHP2Shell: How the PHP Security Team Handled It (with Volker Dusch)](https://www.youtube.com/watch?v=No3T8JQqhtM), Laravel News
```

## Kısa yanıtlar

| Soru | Yanıt |
|---|---|
| PHP2Shell nedir? | Saldırganların bir sunucuda kod çalıştırmasına izin veren iki kritik PHP hatası: CVE-2026-109618 ve CVE-2026-109619. |
| Giriş yapmak gerekiyor mu? | Hayır. İnternetteki bir saldırgan bunu hesap olmadan kullanabilir. |
| Saldırılarda kullanılıyor mu? | Evet. CISA, iki hatayı da 26 Ekim 2026'da KEV kataloğuna ekledi. |
| Hangi sürümler düzeltiyor? | 8.5.12, 8.4.27, 8.3.36 ve 8.2.35. |
| Paketi güncellemek yeterli mi? | Hayır. PHP-FPM'i, Apache'yi veya konteynerlerinizi de yeniden başlatın. |
| Güvenlik duvarı bunu çözer mi? | Hayır. Web güvenlik duvarı kuralları bazı saldırıları engelleyebilir, ama hatayı yalnızca güncelleme düzeltir. |

## Kaynaklar

- [PHP news archive 2026](https://www.php.net/archive/2026.php): sürüm notları ve güvenlik bildirisi
- [NCSC: Critical security issue affecting PHP](https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php)
- [CISA Known Exploited Vulnerabilities catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- [Tenable: PHP2Shell FAQ](https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote): Amazon, Cloudflare ve Trail of Bits'in istismar raporları
