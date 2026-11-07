---
title: Güvenli e-posta ağ geçidi (SEG)
seoTitle: "Güvenli e-posta ağ geçidi nedir? Anlamı ve işleyişi"
description: Güvenli e-posta ağ geçidi (SEG) nedir, e-postayı şirket gelen kutusuna ulaşmadan nasıl filtreler, MX kaydından nasıl anlaşılır, kontrolleri neden etkiler?
slug: guvenli-e-posta-ag-gecidi
date: 2026-11-05
updated: 2026-11-05
keyword: güvenli e-posta ağ geçidi
short: Güvenli e-posta ağ geçidi (SEG, secure email gateway), bir şirketin posta kutularının önünde duran bir filtredir. Gelen her e-postayı, kimse almadan önce spam, kimlik avı ve zararlı dosyalar açısından kontrol eder. Yaygın örnekler Mimecast, Proofpoint ve Barracuda'dır.
related: spam-filter, mx-record, catch-all-email, greylisting, email-spoofing, dmarc
cta: Güvenli e-posta ağ geçitlerinin arkasındaki adresleri doğrulayın
---

## Güvenli e-posta ağ geçidi nedir?

Güvenli e-posta ağ geçidi (SEG, secure email gateway), bir şirketin e-postaları için bir güvenlik filtresidir. İnternet ile şirketin posta kutuları arasında durur.

Şirkete gönderilen her e-posta önce ağ geçidine gider. Ağ geçidi e-postayı tarar. Spam, kimlik avı (phishing) bağlantıları ve zararlı ekler arar. Güvenli e-posta posta kutusuna iletilir. Tehlikeli e-posta engellenir veya bekletilir.

Büyük şirketler, bankalar, hastaneler ve devlet kurumları çoğu zaman bir ağ geçidi kullanır. En bilinen ürünler arasında Mimecast, Proofpoint ve Barracuda vardır.

## Basit bir örnek

1. **Daniel bir bankaya e-posta gönderir.** Daniel yazılım satar. Bir bankadaki bir yöneticiye yazar.
2. **E-postayı önce ağ geçidi alır.** Bankanın e-postaları bir Proofpoint ağ geçidinden geçer.
3. **Ağ geçidi e-postayı tarar.** Daniel'in e-postasındaki bağlantıları ve eki kontrol eder.
4. **E-posta teslim edilir.** Hiçbir şey zararlı görünmez, bu yüzden ağ geçidi e-postayı yöneticinin gelen kutusuna iletir.

Daniel ağ geçidini hiç görmez. E-postasında tehlikeli bir bağlantı olsaydı e-posta orada durdurulurdu.

## Ağ geçidi nasıl anlaşılır?

Alan adının [MX kaydına](/glossary/mx-record) bakın. MX kaydı, bir alan adının e-postalarını hangi sunucunun aldığını herkese söyler. Bir ağ geçidi kullanılıyorsa MX kaydı e-posta sağlayıcısı yerine ağ geçidini gösterir.

| Ağ geçidi | MX kaydı çoğu zaman şununla biter |
|---|---|
| **Mimecast** | `mimecast.com` |
| **Proofpoint** | `pphosted.com` |
| **Barracuda** | `barracudanetworks.com` |

Herhangi bir alan adının MX kaydını bir MX kaydı sorgulama aracıyla görebilirsiniz.

## Ağ geçitleri e-posta doğrulamayı neden etkiler?

Bir e-posta adresi doğrulama aracı, alıcı sunucuya bir adresin var olup olmadığını sorar. Ağ geçidi olan bir alan adında, gerçek e-posta sunucusu yerine ağ geçidi yanıt verir.

Bazı ağ geçitleri kontrollere hiç yanıt vermez. Çoğu araç bu durumda kişi gerçek olsa bile "unknown" (bilinmiyor) sonucunu verir. Diğer ağ geçitleri her adrese evet der. Bu da bir [catch-all](/glossary/catch-all-email) alan adıyla aynı görünür.

Bu durum en çok iş listelerini etkiler, çünkü büyük şirketlerde çalışan kişiler çoğu zaman ağ geçitlerinin arkasındadır.

## Doğrulama aracı nasıl yardımcı olur?

Giggal.ai; Mimecast, Proofpoint ve Barracuda dahil adıyla bilinen 15 ağ geçidini tanır ve bunların arkasındaki adresler için gerçek bir sonuç verir. Bunun adım adım nasıl çalıştığını görmek için [güvenli e-posta ağ geçidi arkasındaki adreslerin nasıl doğrulandığını](/blog/how-to-verify-emails-behind-secure-email-gateways) anlatan yazımızı okuyun.
