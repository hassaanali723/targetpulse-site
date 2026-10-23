---
title: Reputasi domain
description: Apa itu reputasi domain email, bedanya dengan reputasi IP, apa yang merusaknya, cara memeriksanya, dan cara melindungi domain pengirim Anda.
slug: reputasi-domain
date: 2026-10-23
updated: 2026-10-23
keyword: reputasi domain
short: Reputasi domain adalah seberapa besar penyedia kotak masuk seperti Gmail memercayai domain pengirim Anda. Domain adalah bagian alamat email Anda setelah tanda @, seperti example.com. Reputasi domain yang baik tetap melekat pada Anda, bahkan saat Anda berganti layanan pengiriman.
related: ip-reputation, sender-reputation, postmaster-tools, dmarc, bounce-rate, email-warmup
cta: Lindungi reputasi domain Anda sebelum pengiriman berikutnya
---

## Apa itu reputasi domain?

Domain adalah nama setelah tanda @ di alamat email Anda. Di anna@example.com, domainnya adalah example.com. Penyedia kotak masuk seperti Gmail, Outlook.com, dan Yahoo menyimpan riwayat email yang datang dari setiap domain. Mereka mencatat bounce, keluhan spam, dan hasil autentikasi. Mereka juga mencatat cara orang menanggapi email itu. Dari riwayat ini, mereka menentukan seberapa besar mereka memercayai domain itu. Tingkat kepercayaan itu adalah reputasi domain.

Penyedia bisa menghubungkan setiap email dengan domain aslinya karena tiga record. [SPF](/glossary/spf), [DKIM](/glossary/dkim), dan [DMARC](/glossary/dmarc) membuktikan dari domain mana sebuah email benar-benar berasal. Sebuah bisnis bisa sering berganti server pengiriman, tetapi biasanya memakai domain yang sama selama bertahun-tahun.

## Contoh: pindah ke ESP baru

Sebuah perusahaan bernama Brightline mengirim newsletter dari news@brightline.com. Perusahaan ini sudah memakai satu ESP selama tiga tahun. ESP adalah perusahaan yang mengirim email untuk pelanggannya, seperti Mailchimp atau Brevo.

Brightline memutuskan pindah ke ESP lain. Inilah yang berubah.

1. ESP baru mengirim dari server yang berbeda, jadi alamat IP berubah. Alamat IP adalah angka yang mengenali sebuah server di internet.
2. Domainnya tetap sama. Email tetap datang dari news@brightline.com.
3. Gmail melihat alamat IP baru. Namun Gmail mengenali brightline.com dan tanda tangan DKIM-nya.
4. Reputasi domain Brightline ikut pindah. Riwayat tiga tahunnya membantu email mereka tetap sampai ke kotak masuk.

Kebalikannya juga berlaku. Jika reputasi domain Brightline buruk, ESP baru tidak akan memperbaikinya. Masalahnya tetap melekat pada domain.

## Reputasi domain vs reputasi IP

| | Reputasi domain | Reputasi IP |
| --- | --- | --- |
| Yang dinilai | Domain pengirim Anda, seperti example.com | Alamat server tempat email Anda keluar |
| Berubah saat Anda ganti ESP | Tidak | Ya |
| Dipakai bersama pengirim lain | Tidak, hanya Anda yang memakai domain Anda | Sering, di IP bersama |
| Cara penyedia mengenalinya | Dari domain di SPF, DKIM, dan DMARC | Dari alamat IP yang terhubung |

Penyedia memakai keduanya. Halaman [reputasi IP](/glossary/ip-reputation) menjelaskan bagian yang lain.

## Apa yang merusak reputasi domain

- **Bounce.** Banyak email ke alamat yang tidak ada menunjukkan daftar yang dibeli atau tidak pernah dibersihkan.
- **Keluhan spam.** Panduan pengirim dari Google menyarankan tingkat spam di bawah 0,10 persen dan tidak pernah mencapai 0,30 persen.
- **Spam trap.** Ini adalah alamat yang ada hanya untuk menangkap pengirim dengan daftar yang buruk. Lihat [spam trap](/glossary/spam-trap).
- **Autentikasi yang tidak ada.** Tanpa SPF, DKIM, dan DMARC, penyedia tidak bisa yakin bahwa sebuah email benar-benar dari Anda.
- **Volume yang tiba-tiba.** Domain baru atau domain yang lama diam lalu tiba-tiba mengirim ribuan email terlihat seperti perilaku spammer.

## Cara memeriksa reputasi domain Anda

Tidak ada satu skor publik. Setiap penyedia punya penilaiannya sendiri tentang domain Anda. Berikut cara utama untuk melihatnya.

- **Google Postmaster Tools.** Layanan gratis dari Google untuk email yang dikirim ke pengguna Gmail. Anda menambahkan domain dan membuktikan kepemilikannya dengan DNS record, yaitu pengaturan di direktori publik domain Anda. Setelah itu, layanan ini menampilkan data seperti tingkat spam dan hasil autentikasi. Lihat [Google Postmaster Tools](/glossary/postmaster-tools).
- **Angka Anda sendiri.** Open rate yang turun di satu penyedia bisa berarti email Anda masuk ke spam di sana.
- **Cek blacklist.** Alat seperti MXToolbox menunjukkan apakah domain Anda ada di blacklist domain publik.

## Cara melindungi reputasi domain Anda

1. Pasang SPF, DKIM, dan DMARC untuk setiap layanan yang mengirim email atas nama domain Anda.
2. Verifikasi daftar Anda sebelum setiap pengiriman besar, dan hapus alamat yang akan bounce.
3. Kirim cold email dari domain atau subdomain terpisah, seperti brightline-mail.com atau outreach.brightline.com. Cara ini memberi jarak antara cold email dan domain utama Anda. Penyedia tetap bisa menghubungkan subdomain dengan domain utamanya.
4. Mulai pelan-pelan dengan domain baru. Kirim volume harian yang kecil dan naikkan selama beberapa minggu. Lihat [warm-up email](/glossary/email-warmup).
5. Buat proses berhenti berlangganan mudah, agar orang berhenti berlangganan dan tidak menekan "Laporkan spam".

## Reputasi domain dan verifikasi email

Bounce adalah salah satu sinyal yang dipakai penyedia untuk menilai domain Anda, dan Anda bisa mengendalikannya sebelum mengirim. Sebuah [email verifier](/email-checker) menemukan alamat yang tidak ada. Alat [verifikasi email massal](/bulk-email-verifier) melakukan hal yang sama untuk seluruh daftar, jadi kampanye Anda dikirim ke kotak masuk yang nyata. [Verifikasi email](/) secara rutin juga menghapus alamat lama sebelum alamat itu menjadi spam trap daur ulang. Verifikasi tidak memperbaiki keluhan atau autentikasi yang tidak ada, jadi langkah-langkah lain di atas tetap berlaku.
