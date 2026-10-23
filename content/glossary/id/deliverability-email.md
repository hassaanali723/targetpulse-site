---
title: Deliverability email
description: Apa arti deliverability email, bedanya dengan delivery, faktor yang memengaruhinya, cara mengukurnya, dan langkah-langkah untuk meningkatkannya.
slug: deliverability-email
date: 2026-10-23
updated: 2026-10-23
keyword: deliverability email
short: Deliverability email menunjukkan apakah email Anda sampai ke kotak masuk. Email bisa terkirim tetapi tetap masuk ke folder spam. Deliverability yang baik berarti sebagian besar email Anda masuk ke kotak masuk, bukan ke spam dan tidak diblokir.
related: inbox-placement, sender-reputation, bounce-rate, spam-filter, email-warmup, postmaster-tools
cta: Mengurangi bounce adalah langkah pertama untuk deliverability yang lebih baik
---

## Apa itu deliverability email?

Deliverability email, atau tingkat keterkiriman email, adalah kemampuan email Anda untuk sampai ke kotak masuk. Email yang Anda kirim bisa berakhir di salah satu dari tiga tempat. Email bisa sampai ke kotak masuk. Email bisa masuk ke folder spam. Atau server penerima bisa menolaknya, yang disebut bounce.

Deliverability berkaitan dengan tempat pertama, yaitu kotak masuk. Penyedia kotak masuk menentukan ke mana setiap email pergi. Penyedia kotak masuk adalah perusahaan yang menyimpan kotak masuk penerima, seperti Gmail, Outlook.com, atau Yahoo. Setiap penyedia menjalankan [filter spam](/glossary/spam-filter) yang membuat keputusan ini untuk setiap email.

## Delivery vs deliverability

Dua kata ini terdengar mirip, tetapi mengukur hal yang berbeda. Delivery menghitung email yang diterima oleh server penerima. Deliverability melihat ke mana email yang diterima itu pergi.

Misalnya Anda mengirim 1.000 email ke pelanggan Anda. Ini adalah angka contoh.

| Tahap | Email | Artinya |
| --- | --- | --- |
| Dikirim | 1.000 | Anda menekan tombol kirim |
| Bounce | 40 | Server penerima menolaknya |
| Terkirim | 960 | Server penerima menerimanya |
| Di kotak masuk | 800 | Pelanggan melihatnya di kotak masuk |
| Di spam | 160 | Pelanggan hanya melihatnya jika membuka folder spam |

Alat pengiriman Anda menunjukkan tingkat delivery 96 persen. Angka itu terlihat baik. Namun hanya 800 dari 1.000 email yang sampai ke kotak masuk. Itu berarti [inbox placement](/glossary/inbox-placement) sebesar 80 persen. Alat pengiriman tidak bisa melihat folder tujuan sebuah email, jadi alat itu melaporkan angka 96 persen.

## Faktor yang memengaruhi deliverability email

Penyedia tidak memublikasikan aturan persisnya. Berikut faktor-faktor yang sudah diketahui.

- **Autentikasi.** Apakah domain Anda lolos [SPF](/glossary/spf), [DKIM](/glossary/dkim), dan [DMARC](/glossary/dmarc). Record ini membuktikan bahwa email benar-benar dari Anda.
- **Reputasi pengirim.** Seberapa besar penyedia memercayai domain dan alamat IP pengiriman Anda, berdasarkan email Anda sebelumnya. Alamat IP adalah angka yang mengenali sebuah server di internet. Lihat [reputasi pengirim](/glossary/sender-reputation).
- **Bounce.** Mengirim ke alamat yang tidak ada memberi tahu penyedia bahwa daftar Anda tidak diperiksa.
- **Keluhan spam.** Seberapa sering orang menekan "Laporkan spam". Panduan pengirim dari Google menyarankan angka ini di bawah 0,10 persen dan tidak pernah mencapai 0,30 persen.
- **Kualitas daftar.** Apakah orang meminta email Anda, dan apakah daftar Anda berisi [spam trap](/glossary/spam-trap).
- **Konten.** Tautan, gambar, dan pilihan kata. Konten kurang berpengaruh dibanding faktor-faktor di atas.

## Cara mengukur deliverability

Anda tidak bisa melihat isi kotak masuk orang lain. Jadi, Anda mengukur deliverability dengan dua cara.

**Seed test.** Anda mengirim email ke sekumpulan kotak masuk uji milik Anda sendiri, di Gmail, Outlook.com, Yahoo, dan penyedia lain. Lalu Anda memeriksa di mana email itu masuk di setiap kotak masuk. Kumpulan alamat uji ini disebut [seed list](/glossary/seed-list).

**Data dari penyedia.** [Google Postmaster Tools](/glossary/postmaster-tools) adalah layanan gratis dari Google. Layanan ini menampilkan data tentang email yang dikirim domain Anda ke pengguna Gmail, seperti tingkat keluhan spam dan hasil autentikasi. Microsoft punya layanan serupa untuk Outlook.com, bernama SNDS.

Perhatikan juga angka Anda sendiri. Penurunan tiba-tiba pada jumlah email yang dibuka di satu penyedia bisa berarti email Anda mulai masuk ke spam di sana.

## Cara meningkatkan deliverability email

1. Pasang SPF, DKIM, dan DMARC untuk setiap layanan yang mengirim email atas nama domain Anda.
2. Verifikasi daftar Anda sebelum mengirim, dan hapus alamat yang tidak ada.
3. Kirim email hanya kepada orang yang memintanya. Jangan pernah membeli daftar email.
4. Tambahkan tautan berhenti berlangganan yang jelas. Google mewajibkan berhenti berlangganan dengan satu klik di email pemasaran dari pengirim 5.000 email atau lebih per hari.
5. Berhenti mengirim ke orang yang tidak membuka apa pun selama berbulan-bulan.
6. Mulai pelan-pelan dengan domain atau alamat IP baru. Lihat [warm-up email](/glossary/email-warmup).
7. Pantau tingkat keluhan Anda di Postmaster Tools, dan cari penyebabnya saat angkanya naik.

## Deliverability email dan verifikasi email

Verifikasi meningkatkan satu bagian dari deliverability, yaitu bounce rate (tingkat bounce) Anda. Sebuah [email checker](/email-checker) menemukan alamat yang tidak ada sebelum Anda mengirim email ke sana. Alat [verifikasi email massal](/bulk-email-verifier) melakukan hal ini untuk seluruh daftar dalam satu kali unggah. Lebih sedikit bounce melindungi reputasi pengirim Anda, dan reputasi memengaruhi apakah email Anda sampai ke kotak masuk. Namun, [verifikasi email](/) tidak memperbaiki autentikasi, konten, atau keluhan, jadi langkah-langkah lain di atas tetap penting.
