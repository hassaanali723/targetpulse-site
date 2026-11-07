---
title: "Claude ve ChatGPT içinde e-posta nasıl doğrulanır?"
description: "Bir e-posta doğrulama aracını MCP ile Claude, ChatGPT, Cursor veya VS Code'a bağlayın ve CSV dosyası dışa aktarmadan adresleri sohbetin içinde kontrol edin."
slug: claude-ve-chatgpt-icinde-e-posta-dogrulama
date: 2026-11-05
keyword: claude chatgpt e-posta doğrulama
image: /blog/covers/tr/claude-ve-chatgpt-icinde-e-posta-dogrulama.webp
imageAlt: MCP üzerinden Claude ve ChatGPT içinde e-posta adreslerini doğrulama
cta: Sohbetten çıkmadan e-posta adreslerini doğrulayın
---

E-posta doğrulama işlemlerinin çoğu hâlâ 2015'teki gibi yapılıyor. Bir CSV dosyası dışa aktarırsınız, bir tarayıcı sekmesi açarsınız ve dosyayı yüklersiniz. Sonra beklersiniz, başka bir CSV dosyası indirirsiniz ve onu bir yere içe aktarırsınız. Bu yöntem çalışır. Ancak temelde tek bir soru için dört kez araç değiştirmeniz gerekir: Bu posta kutusu gerçek mi?

İşinizin bir kısmını zaten Claude veya ChatGPT içinde yapıyorsanız artık daha kısa bir yol var. Model Context Protocol (MCP), bir yapay zekâ asistanının dış bir aracı doğrudan çağırmasını sağlar. Yani doğrulama, zaten sürdürdüğünüz sohbetin içinde yapılabilir.

## MCP tam olarak nedir?

MCP, bir yapay zekâ asistanının dış bir hizmetle nasıl iletişim kuracağını tanımlayan bir belirtimdir. Anthropic bunu 2024'ün sonlarında yayımladı. O zamandan beri Claude dışında da yaygın olarak benimsendi. MCP'yi bir priz standardı gibi düşünebilirsiniz. MCP'den önce her asistan, her araç için ayrı bir entegrasyona ihtiyaç duyuyordu. Şimdi bir hizmet tek bir MCP sunucusu yayımlıyor ve bu standarda uyan her istemci onu kullanabiliyor.

Bir doğrulama aracında MCP üzerinden yapılacak işlerin sayısı azdır. İsteyeceğiniz şeyler birkaç taneyle sınırlıdır: bu adresi kontrol et, bu listeyi kontrol et, ayrıntılı dökümü göster, kaç kredim kaldığını söyle. Giggal.ai tam olarak bunları üç araç olarak sunar: `verify_emails`, `get_verification_details` ve `get_credit_balance`.

Bunu bir API'den farklı kılan şey, çağrıyı sizin yazmamanızdır. Ne istediğinizi zaten yazacağınız cümleyle söylersiniz. Asistan da hangi aracı hangi bağımsız değişkenlerle çağıracağını kendisi belirler.

## Bu yöntem neye uygundur, neye uygun değildir?

Sınırlar konusunda dürüst olmak, hayal kırıklığını önler.

Bu yöntem, doğrulama sohbette zaten yaptığınız daha büyük bir işin bir adımı olduğunda işe yarar. Bir konferansın katılımcı listesini yapıştırdınız ve e-postaları yazmadan önce geçersiz adresleri çıkarmak istiyorsunuz. Bir kayıt akışındaki hatayı ayıklıyorsunuz ve belirli bir adresin gerçek olup olmadığını öğrenmek istiyorsunuz. Bir e-posta dizisi hazırlıyorsunuz ve kesinleştirmeden önce hedef şirketteki 12 kişinin adresini kontrol etmek istiyorsunuz. Tüm bu durumlarda diğer seçenek sohbetten çıkmaktır. Araç çağrısı gerçekten daha hızlıdır.

200.000 satırlık bir listeyi temizlemek için ise uygun değildir. Bu iş için toplu yükleme veya API kullanılır. Bunu bir sohbet arayüzünden geçirmek, daha uzun bir bekleme ve çok sayıda token dışında bir şey katmaz. Bunun için paneli veya REST uç noktasını kullanın. Bu araçlar bu iş için vardır.

## Kurulum

Bir Giggal.ai hesabına ve bir API anahtarına ihtiyacınız var. Anahtar, uygulamadaki "Settings" bölümünde değil, "Developer API" sekmesinde bulunur. Bu küçük bir ayrıntıdır, ama insanların beklenenden daha sık takıldığı bir noktadır.

Sunucu uzak bir sunucudur. Bu yüzden kurulacak bir şey yoktur ve SDK gerekmez. Adresi `https://mcp.giggal.ai/mcp` şeklindedir ve API anahtarınızla kimlik doğrulaması yapar.

Claude Desktop'ta "Settings" bölümünü, ardından "Connectors" bölümünü açın ve bu URL'yi gösteren özel bir bağlayıcı ekleyin. Claude Code'a aynı sunucuyu `claude mcp add` komutuyla eklersiniz. Cursor ve VS Code, MCP sunucularını proje veya kullanıcı dizinindeki bir JSON yapılandırma dosyasından okur. Bu dosyanın yapısı ve tam kod parçacıkları [MCP sayfasında](/mcp) açıklanmıştır. ChatGPT, bu özelliğin etkin olduğu planlarda bağlayıcı ayarları üzerinden uzak MCP sunucularını destekler.

Bağlantı kurulduğunda asistan üç aracı listeler ve soru sormaya başlayabilirsiniz.

## Kullanım nasıl görünür?

Özel bir ifade kullanmanız gerekmez. Şu isteklerin hepsi çalışır:

- hello@stripe.com adresini doğrula ve gerçek bir posta kutusu olup olmadığını söyle
- Bir web semineri kaydından gelen on bir adres burada, hangilerinin geri döneceğini kontrol et
- Bunlardan hangileri catch-all alan adında ve posta kutuları gerçekten var mı
- Bunu çalıştırmadan önce kaç doğrulama kredim kaldı

Asistan `verify_emails` aracını çağırır, her adres için bir sonuç alır ve yanıtında bu sonucu açıklar. Bir liste sorduysanız aynı sohbette devam edebilirsiniz. Asistandan geçersiz olan her adresi çıkarmasını ve kalanları alan adına göre gruplamasını isteyin. Sonra bunları gönderim aracınıza doğrudan yapıştırabileceğiniz bir CSV bloğu olarak yazmasını isteyin. Bu işi değerli kılan asıl kısım bu ikinci yarıdır. Çünkü veriler zaten asistanın elindedir ve asistan onları başka bir araca gidip gelmeden yeniden düzenleyebilir.

## Catch-all kısmı burada her zamankinden daha önemlidir

Bir B2B listesinin yaklaşık %30'u, gerçek olsun olmasın, olası her adrese gelen e-postayı kabul eden alan adlarındadır. Çoğu doğrulama aracı bu adresleri riskli veya accept-all (her adresi kabul eden) etiketiyle döndürür. Bu, aracın sonucu belirleyemediği anlamına gelir.

Bu etiket bir panelde de kullanışsızdır. Bir sohbette ise daha kötüdür. Çünkü asistan kendisine verileni olduğu gibi aktarır. Sonunda on bir adresinizden dördünün belirsiz olduğunu söyleyen bir yanıt alırsınız. Bu da sormadan önceki durumunuzun aynısıdır. Giggal.ai bu adresleri geçerli veya geçersiz olarak çözümler. Adları belli 15 güvenli e-posta ağ geçidinin arkasındaki posta kutularını da çözümler. Böylece asistana dönen yanıt belirsiz bir etiket değil, gerçek bir sonuç olur.

## Maliyet ve makul bir önlem

MCP üzerinden yapılan doğrulamalar, diğer her yerde olduğu gibi aynı kredileri harcar. Her adres doğrulaması (catch-all ve SEG korumalı adresler dahil) sabit 1 kredidir. Ücretsiz paket, kart bilgisi istemeden 1.000 kredi içerir. Kredilerin süresi dolmaz.

Önlem basittir. Asistan ne isterseniz onu yapar. Buna niyetinizden daha büyük bir işi çalıştırmak da dahildir. Büyük bir işten önce kredi bakiyenizi sorun. Asistanı içine bakmadığınız bir dosyaya yönlendirmek yerine adresleri yapıştırın. Bu önlemlerin hiçbiri doğrulamaya özgü değildir. Ancak kullanıma göre ücretlendirilen bir API'de bu tür bir hata her zamankinden daha can sıkıcıdır.

## Kurmaya değer mi?

Claude veya ChatGPT'yi çoğu gün açıyorsanız ve e-posta listeleri işinizin bir parçasıysa, kurulum yaklaşık iki dakika sürer. Elle yaptığınız bir adımı da ortadan kaldırır. Doğrulama, her ay tarayıcıda çalıştırdığınız toplu bir işse panel gerçekten daha iyi bir araçtır. Bu yöntem size pek bir şey kazandırmaz.

Her istemci için kurulum talimatları ve yapılandırma kod parçacıkları [MCP sayfasında](/mcp) bulunur. Bu işlemleri bir betikle yapmayı tercih ederseniz [API dokümantasyonu](/public/docs) aynı işlemleri REST üzerinden anlatır.
