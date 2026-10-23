---
title: Secure email gateway (SEG)
description: Apa itu secure email gateway, cara menyaring email sebelum sampai ke kotak masuk perusahaan, cara mengenalinya dari MX record, dan pengaruhnya pada cek email.
slug: secure-email-gateway
date: 2026-10-23
updated: 2026-10-23
keyword: secure email gateway
short: Secure email gateway, atau SEG, adalah filter yang berada di depan kotak masuk sebuah perusahaan. Gateway ini memeriksa setiap email masuk untuk spam, phishing, dan file berbahaya sebelum ada yang menerimanya. Contoh yang umum adalah Mimecast, Proofpoint, dan Barracuda.
related: spam-filter, mx-record, catch-all-email, greylisting, email-spoofing, dmarc
cta: Verifikasi alamat di balik secure email gateway
---

## Apa itu secure email gateway?

Secure email gateway, atau SEG, adalah filter keamanan untuk email sebuah perusahaan. Dalam bahasa Indonesia, SEG bisa disebut gateway keamanan email. Gateway ini berada di antara internet dan kotak masuk perusahaan.

Setiap email yang dikirim ke perusahaan masuk ke gateway lebih dulu. Gateway memindainya. Gateway mencari spam, tautan phishing, dan lampiran berbahaya. Email yang aman diteruskan ke kotak masuk. Email yang berbahaya diblokir atau ditahan.

Perusahaan besar, bank, rumah sakit, dan kantor pemerintah sering memakai gateway. Produk yang paling dikenal antara lain Mimecast, Proofpoint, dan Barracuda.

## Contoh sederhana

1. **Daniel mengirim email ke sebuah bank.** Daniel menjual perangkat lunak. Ia menulis email ke seorang manajer di sebuah bank.
2. **Gateway menerimanya lebih dulu.** Email yang masuk ke bank itu melewati gateway Proofpoint.
3. **Gateway memindainya.** Gateway memeriksa tautan dan lampiran di email Daniel.
4. **Email diteruskan.** Tidak ada yang terlihat berbahaya, jadi gateway meneruskannya ke kotak masuk manajer.

Daniel tidak pernah melihat gateway itu. Jika emailnya berisi tautan berbahaya, email itu akan berhenti di sana.

## Cara mengenali gateway

Lihat [MX record](/glossary/mx-record) domain itu. MX record memberi tahu dunia server mana yang menerima email untuk sebuah domain. Jika gateway dipakai, MX record menunjuk ke gateway, bukan ke penyedia kotak masuk.

| Gateway | MX record sering diakhiri dengan |
|---|---|
| **Mimecast** | `mimecast.com` |
| **Proofpoint** | `pphosted.com` |
| **Barracuda** | `barracudanetworks.com` |

Anda bisa mencari MX record domain mana pun dengan alat MX lookup.

## Kenapa gateway memengaruhi verifikasi email

Email checker menanyakan ke server penerima apakah sebuah alamat ada. Di domain yang memakai gateway, gateway yang menjawab, bukan server email yang sebenarnya.

Sebagian gateway sama sekali menolak menjawab pemeriksaan. Sebagian besar alat lalu memberi hasil "unknown" (tidak diketahui), bahkan saat orangnya nyata. Gateway lain menjawab ya untuk setiap alamat, yang terlihat sama seperti domain [catch-all](/glossary/catch-all-email).

Hal ini paling berdampak pada daftar bisnis, karena kontak yang bekerja di perusahaan besar sering berada di balik gateway.

## Bagaimana alat verifikasi membantu

Giggal.ai mengenali 15 gateway, termasuk Mimecast, Proofpoint, dan Barracuda, dan memberi hasil yang jelas untuk alamat di balik gateway itu. Untuk melihat cara kerjanya langkah demi langkah, baca [cara memverifikasi email di balik secure email gateway](/blog/how-to-verify-emails-behind-secure-email-gateways).
