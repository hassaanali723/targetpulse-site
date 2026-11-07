---
title: Double opt-in
seoTitle: "Double opt-in nedir? Anlamı ve işleyişi"
description: Double opt-in ne demektir, onay e-postası nasıl çalışır, single ve double opt-in karşılaştırması, işletmeler neden kullanır ve nasıl kurulur?
slug: double-opt-in
date: 2026-11-05
updated: 2026-11-05
keyword: double opt in
short: Double opt-in, bir kişinin e-postalarınıza kaydolduktan sonra bir onay e-postasındaki bağlantıya tıklayarak kaydını onaylaması demektir. Kişi ancak bu tıklamadan sonra listenize eklenir. Bu, kişinin adresin sahibi olduğunu ve e-postanızı istediğini gösterir.
related: single-opt-in, list-cleaning, email-hygiene, suppression-list, spam-trap, typo-domain
cta: Yazım hatalarını onay e-postası bounce olmadan, kayıt sırasında yakalayın
---

## Double opt-in nedir?

Double opt-in, kişileri bir e-posta listesine iki adımda eklemenin bir yoludur. Önce kişi web sitenizde e-posta adresini girer. Sonra o adrese gönderdiğiniz bir e-postadaki bağlantıya tıklar. Adres ancak bundan sonra listenize eklenir.

Opt in, katılmayı seçmek demektir. "Double" (çift), kişinin iki kez seçtiği anlamına gelir: bir kez formda, bir kez de e-postada. Hiç onaylanmayan bir adres hiçbir zaman eklenmez.

## Örnek: Maria bir fırının bültenine katılıyor

Maria, mahallesindeki fırının web sitesini ziyaret eder. Fırının aylık bültenini almak ister.

1. Kayıt formuna maria.lopez@gmail.com adresini yazar ve Abone ol düğmesine tıklar.
2. Web sitesi bir mesaj gösterir: "E-postanızı onaylamak için lütfen gelen kutunuzu kontrol edin."
3. Bir dakika sonra Maria fırından bir e-posta alır. Konu satırında "Lütfen e-postanızı onaylayın" yazar.
4. E-postada "Evet, beni abone yap" yazan tek bir düğme vardır.
5. Maria düğmeye tıklar. "Teşekkürler, abone oldunuz." yazan bir sayfa açılır.
6. Fırının e-posta aracı Maria'yı listeye ekler. Tıklamasının tarihini ve saatini kaydeder.

Şimdi Maria'nın yanlışlıkla maria.lopez@gmial.com yazdığını düşünün. Onay e-postası ona hiç ulaşmazdı. Maria hiç tıklamazdı, bu yüzden yanlış adres listeye hiç katılmazdı.

## Single opt-in ve double opt-in

[Single opt-in](/glossary/single-opt-in) yönteminde kişi adresini girer ve hemen listeye eklenir. Onay adımı yoktur.

| | Single opt-in | Double opt-in |
| --- | --- | --- |
| Abone için adım sayısı | Bir: formu doldurmak | İki: formu doldurmak, sonra bağlantıya tıklamak |
| Listenin büyümesi | Daha hızlı, çünkü herkes eklenir | Daha yavaş, çünkü bazı kişiler hiç onaylamaz |
| Yanlış yazılmış adresler | Listeye eklenir, sonra bounce olur | Hiç eklenmez |
| Botların yaptığı sahte kayıtlar | Listeye eklenir | Biri bağlantıya tıklamadıkça hiç eklenmez |
| İznin kanıtı | Yalnızca kayıt formu | Onay tıklamasının kaydı |
| Spam tuzağı riski | Daha yüksek | Daha düşük |

## İşletmeler neden double opt-in kullanır?

- **İznin kanıtı.** İzin, kişinin e-postanızı almayı kabul ettiği anlamına gelir. Double opt-in ile işletme, her kişinin ne zaman onay verdiğini gösterebilir.
- **Daha az sahte ve yanlış yazılmış adres.** E-posta alamayan adresler hiç onaylanmaz, bu yüzden listeye hiç katılmaz.
- **Daha az spam tuzağı.** [Yazım hatalı bir alan adındaki](/glossary/typo-domain) adres, tek onay e-postasını alabilir. Ancak kimse bağlantıya tıklamaz, bu yüzden adres listeye hiç katılmaz. Aynı durum diğer [spam tuzakları](/glossary/spam-trap) için de geçerlidir.
- **Katılmak için adım atan okuyucular.** Listedeki her kişi, e-postanızı istediğini onaylamak için bir bağlantıya tıklamıştır.

## ESP'nizde double opt-in nasıl kurulur?

ESP, listenize e-posta göndermek için kullandığınız servistir. Mailchimp ve Brevo buna örnektir. Birçok ESP, double opt-in özelliğini bir ayar olarak sunar. Menü adları farklıdır, ancak adımlar benzerdir.

1. Listenizin, kitlenizin (audience) veya kayıt formunuzun ayarlarını açın.
2. Double opt-in seçeneğini veya onay e-postasını açın.
3. Onay e-postasını düzenleyin. "Lütfen e-postanızı onaylayın" gibi açık bir konu satırı ve tek bir büyük düğme kullanın.
4. Kişilerin tıkladıktan sonra göreceği sayfayı ayarlayın.
5. Formu yayımlamadan önce kendi adresinizle test edin.
6. ESP'nizin her abone için onay tarihini ve saatini kaydettiğini kontrol edin.

Onay e-postasını kısa tutun. Kişi kaydolduğunu henüz unutmamışken e-postayı hemen gönderin.

## Double opt-in ve e-posta doğrulama

Double opt-in ve doğrulama farklı işler yapar ve birlikte iyi çalışır. Kayıt sırasında yapılan bir kontrol, gmial.com gibi yazım hatalarını onay e-postası bounce olmadan önce yakalar. Bu, bir [mail adresi doğrulama aracının](/email-checker) yaptığı kontrolün aynısıdır. Ardından double opt-in, kişinin adresin sahibi olduğunu ve e-postanızı istediğini gösterir. Double opt-in kullanmaya başlamadan önce toplanan eski adresler için bir [toplu mail doğrulama aracı](/bulk-email-verifier) kullanın. Bu araç, düzenli [e-posta doğrulama](/) sürecinin bir parçası olarak bounce olacak adresleri kaldırır.
