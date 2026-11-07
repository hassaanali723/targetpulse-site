---
title: SMTP
seoTitle: "SMTP nedir? Anlamı ve işleyişi"
description: SMTP ne demek, bir e-posta bir sunucudan diğerine nasıl gider, SMTP sunucusu nedir, hangi SMTP portları kullanılır ve hata yanıtları ne anlama gelir?
slug: smtp
date: 2026-11-05
updated: 2026-11-05
keyword: smtp
short: SMTP, Simple Mail Transfer Protocol ifadesinin kısaltmasıdır. E-posta sunucularının birbirine e-posta göndermek için kullandığı kurallar bütünüdür. Gönderdiğiniz her e-posta, SMTP kullanılarak sunucudan sunucuya iletilir.
related: mta, mx-record, smtp-error-codes, esp, hard-bounce, greylisting
cta: Göndermeden önce her adresi alıcı sunucuya sorarak kontrol edin
---

## SMTP nedir? (SMTP ne demek)

SMTP, Simple Mail Transfer Protocol (Basit Posta Aktarım Protokolü) ifadesinin kısaltmasıdır. Protokol, iki bilgisayarın birbiriyle konuşmak için uyduğu sabit kurallar bütünüdür. SMTP, e-posta göndermenin kurallarıdır. Güncel sürümü RFC 5321 içinde tanımlanmıştır. RFC, bir internet standardını belirleyen herkese açık bir belgedir.

Sunucu, sürekli çalışan ve başka bilgisayarlar için bir iş yapan bilgisayardır. E-posta sunucusu e-posta gönderir, alır veya saklar. Yani "SMTP nedir" sorusunun kısa cevabı şudur: E-posta sunucularının e-postayı birbirine iletme yöntemidir.

SMTP yalnızca e-postayı taşır. Size gelen kutunuzu göstermez. Bunu, aşağıda açıklanan başka protokoller yapar.

## Örnek: Ana, Ben'e bir e-posta gönderiyor

Ana, Gmail kullanır. Ben, Northwind adlı bir şirkette çalışır. Adresi ben@northwind.com'dur ve şirketi Microsoft 365 üzerinden Outlook kullanır. Ana bir e-posta yazar ve Gönder düğmesine tıklar. Şunlar olur:

1. Gmail'in gönderen sunucusu Ana'nın e-postasını alır.
2. @ işaretinden sonraki kısmı, yani northwind.com kısmını okur. Bu, alan adıdır. Ben'in şirketinin internetteki adıdır.
3. DNS üzerinden northwind.com alan adının MX kaydını sorgular. DNS, internetin herkese açık dizinidir. [MX kaydı](/glossary/mx-record), bir alan adının e-postalarını alan sunucuyu belirtir.
4. MX kaydı bir Microsoft sunucusunu gösterir. Gmail'in sunucusu bu sunucuyla bağlantı açar.
5. Gmail'in sunucusu `EHLO` komutuyla kendini tanıtır. Sonra `MAIL FROM` ile gönderen adresini verir.
6. `RCPT TO:<ben@northwind.com>` ile alıcı adresini verir.
7. Microsoft'un sunucusu `250` yanıtını verir. Bu, o adres için e-posta kabul ettiği anlamına gelir.
8. Gmail'in sunucusu `DATA` komutuyla e-postanın kendisini gönderir.
9. Microsoft'un sunucusu yeniden `250` yanıtını verir. E-postayı kabul etmiştir ve Ben'in posta kutusuna koyar.
10. Gmail'in sunucusu `QUIT` ile bağlantıyı kapatır.

Ana da Ben de bu adımların hiçbirini görmez. Ana "Gönderildi" yazısını görür, Ben de yeni bir e-posta görür.

## SMTP sunucusu nedir?

SMTP sunucusu, SMTP kullanarak e-posta gönderen veya alan bir sunucudur. Örnekte Gmail'in gönderen sunucusu da Microsoft'un alıcı sunucusu da SMTP sunucusudur. Bu sunucularda çalışan yazılıma [mail transfer agent](/glossary/mta) veya MTA denir.

Bir e-posta programını veya uygulamayı kurarken SMTP sunucularıyla karşılaşırsınız. Diyelim ki bir web sitesindeki iletişim formunun bir Gmail hesabı üzerinden e-posta göndermesini istiyorsunuz. Formun, Gmail'in SMTP sunucusunun adresine ihtiyacı vardır: `smtp.gmail.com`. Ayrıca bir port numarasına, bir kullanıcı adına ve bir şifreye de ihtiyacı vardır. Form her e-postayı bu sunucuya verir, sunucu da e-postayı iletir.

Çok fazla e-posta gönderen işletmeler genellikle SendGrid veya Amazon SES gibi bir [e-posta servis sağlayıcısı](/glossary/esp) kullanır. Bu servisler müşterileri için SMTP sunucuları çalıştırır.

## SMTP portları: 25, 587 ve 465

Port, bir sunucuya bir bağlantının hangi hizmet için olduğunu söyleyen bir numaradır. SMTP üç yaygın port numarası kullanır.

| Port | Ne için kullanılır? | Şifreleme |
| --- | --- | --- |
| 25 | Bir e-posta sunucusunun başka bir e-posta sunucusuna e-posta göndermesi | İsteğe bağlı, STARTTLS ile açılır |
| 587 | Bir uygulamanın veya e-posta programının e-postayı kendi SMTP sunucusuna vermesi | Oturum açmadan önce STARTTLS ile açılır |
| 465 | 587 numaralı portla aynı iş | İlk andan itibaren şifrelidir |

STARTTLS, açık bir bağlantıyı şifreli bir bağlantıya çeviren bir komuttur. Şifreleme içeriği karıştırır. Böylece iki sunucu arasındaki hiç kimse içeriği okuyamaz.

Bir uygulamayı veya e-posta programını kuruyorsanız 587 veya 465 numaralı portu kullanın. Birçok ev internet sağlayıcısı ve bulut barındırma şirketi, 25 numaralı porttan giden bağlantıları engeller. Bunu, virüslü bilgisayarların spam göndermesini önlemek için yaparlar.

## SMTP, IMAP ve POP3

SMTP e-posta gönderir. E-postayı okumanızı sağlamaz. Okuma işini iki başka protokol yapar.

- **SMTP**, e-postayı programınızdan sunucunuza ve sunucudan sunucuya gönderir.
- **IMAP**, bir e-posta programının sunucuda kalan e-postaları okumasını sağlar. Telefonunuzda ve dizüstü bilgisayarınızda aynı gelen kutusunu görürsünüz.
- **POP3**, e-postayı tek bir cihaza indirir. Eski kurulumlar e-postayı çoğu zaman daha sonra sunucudan silerdi.

Bu yüzden Outlook veya Apple Mail gibi bir e-posta programı iki ayar kullanır. Gelen kutunuzu okumak için IMAP veya POP3 kullanır. Göndermek için SMTP kullanır.

## Bir SMTP sunucusu hayır dediğinde

Her SMTP yanıtı üç basamaklı bir kodla başlar. İlk basamak yanıtın türünü söyler.

- **2xx başarı anlamına gelir.** `250`, isteğin kabul edildiği anlamına gelir.
- **4xx geçici bir sorun anlamına gelir.** Gönderen sunucu daha sonra yeniden dener. Örnek: `451`, daha sonra yeniden deneyin.
- **5xx kalıcı bir hata anlamına gelir.** Yeniden göndermek de başarısız olur. Örnek: `550 5.1.1`, posta kutusu yok.

Gerçek bir e-postaya verilen 5xx yanıtı bir [hard bounce](/glossary/hard-bounce) olur. 4xx yanıtı ise bir [soft bounce](/glossary/soft-bounce) olur. [SMTP hata kodları](/glossary/smtp-error-codes) sayfası yaygın kodları ve her birinin anlamını listeler.

Bazı sunucular, henüz tanımadıkları gönderenlere bilerek 4xx yanıtı gönderir. Buna [greylisting](/glossary/greylisting) denir. İlk deneme başarısız olur, daha sonraki bir yeniden deneme kabul edilir.

## SMTP ve e-posta doğrulama

Bir [mail adresi doğrulama aracı](/email-checker), yukarıdaki örnekteki SMTP konuşmasının aynısını kullanır, ancak 8. adımdan önce durur. `RCPT TO` ile adresi sorar. `250` yanıtı, sunucunun bu adres için e-posta kabul ettiği anlamına gelir. `550 5.1.1` yanıtı, posta kutusunun var olmadığı anlamına gelir. Araç sonra `QUIT` gönderir, bu yüzden hiçbir e-posta gönderilmez. Bir [toplu mail doğrulama aracı](/bulk-email-verifier), bu [e-posta doğrulama](/) işlemini bütün bir liste için yapar. Böylece bounce olacak adresleri kaldırabilirsiniz.
