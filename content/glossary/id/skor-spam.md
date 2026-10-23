---
title: Skor spam
description: Apa itu skor spam email, cara SpamAssassin menjumlahkan poin, apa yang menaikkan skor, cara memeriksa skor spam Anda, dan cara menurunkannya.
slug: skor-spam
date: 2026-10-23
updated: 2026-10-23
keyword: skor spam
short: Skor spam adalah angka yang diberikan filter spam pada sebuah email. Makin tinggi angkanya, makin besar kemungkinan email masuk ke folder spam. Setiap tanda peringatan yang ditemukan filter menambah poin.
related: spam-filter, spam-trap, deliverability, sender-reputation, email-blacklist, complaint-rate
cta: Turunkan bounce Anda, bukan hanya skor spam Anda
---

## Apa itu skor spam?

Skor spam (spam score) adalah angka yang dihitung [filter spam](/glossary/spam-filter) untuk setiap email. Filter spam adalah perangkat lunak yang menentukan apakah email masuk ke kotak masuk atau ke spam. Filter memeriksa email dengan sebuah daftar aturan. Setiap aturan yang cocok menambah poin, dan beberapa aturan mengurangi poin. Totalnya adalah skor spam email.

Jika skor mencapai batas tertentu, filter menandai email itu sebagai spam. Contoh yang paling dikenal adalah SpamAssassin, filter spam gratis yang dipakai banyak server email. Penyedia besar seperti Gmail dan Outlook.com memakai sistem mereka sendiri. Mereka tidak menunjukkan skor kepada pengirim.

## Cara kerja skor spam: contoh SpamAssassin

SpamAssassin adalah proyek dari Apache Software Foundation. Secara bawaan, SpamAssassin menandai email sebagai spam saat skornya mencapai 5,0 poin. Pemilik setiap server email bisa mengubah batas ini.

Misalnya sebuah toko mengirim email dengan tiga masalah ini.

- Baris subjeknya "FREE GIFT!!! ACT NOW".
- Email tidak punya tanda tangan DKIM yang valid.
- Email berupa satu gambar besar dengan hampir tanpa teks.

Tiga aturan cocok. Poin di bawah ini adalah nilai contoh untuk ilustrasi. Aturan SpamAssassin yang sebenarnya punya skor sendiri, dan skor itu berubah antarversi.

| Aturan yang cocok | Contoh poin |
| --- | --- |
| Subjek sebagian besar huruf kapital | 1,5 |
| Tidak ada tanda tangan DKIM yang valid | 1,0 |
| Email sebagian besar berupa satu gambar dengan sedikit teks | 2,0 |
| **Total** | **4,5** |

Totalnya 4,5, jadi email itu berada sedikit di bawah batas bawaan 5,0. Satu aturan lagi, seperti pemendek tautan, bisa membuatnya melewati batas. Lalu email itu akan masuk ke spam.

## Apa yang menaikkan skor spam

- **Autentikasi yang tidak ada.** Tidak ada [SPF](/glossary/spf), [DKIM](/glossary/dkim), atau [DMARC](/glossary/dmarc) record, atau record-nya gagal.
- **Alamat IP pengirim ada di blacklist.** Alamat IP adalah angka yang mengenali sebuah server di internet. Banyak filter memeriksa daftar publik sumber spam yang dikenal. Lihat [blacklist email](/glossary/email-blacklist).
- **Kata-kata khas spam dan HURUF KAPITAL SEMUA.** Frasa seperti "act now" atau "100% free", deretan tanda seru, dan baris subjek dengan huruf kapital.
- **HTML yang rusak.** HTML adalah kode yang mengatur tampilan email. Kode dengan error, atau kode yang disalin dari halaman web, terlihat ceroboh bagi filter.
- **Pemendek tautan.** Tautan pendek seperti bit.ly menyembunyikan tujuannya. Filter dan pembaca sama-sama tidak memercayainya.

## Skor spam untuk situs web adalah hal yang berbeda

Anda mungkin juga melihat "Spam Score" di alat SEO. SEO berarti membuat situs web tampil lebih tinggi di hasil pencarian. Moz, sebuah perusahaan SEO, memakai Spam Score untuk memperkirakan seberapa mirip sebuah situs web dengan situs yang terkena penalti dari Google. Ini adalah skor untuk situs web, bukan untuk email. Skor ini tidak berhubungan dengan apakah email Anda sampai ke kotak masuk.

## Cara memeriksa skor spam email Anda

1. Buka mail-tester.com. Situs ini menampilkan alamat email uji.
2. Kirim email Anda yang sebenarnya ke alamat itu, dari alat yang biasa Anda pakai.
3. Buka halaman hasil. Halaman ini menampilkan skor dari 10 dan mencantumkan setiap masalah yang ditemukan.
4. Tempelkan baris subjek dan teks Anda ke [spam word checker](/spam-word-checker) (dalam bahasa Inggris) kami. Alat ini menandai kata berisiko, huruf kapital, dan pemendek tautan di browser Anda.

Di mail-tester.com, skor yang lebih tinggi lebih baik. Di SpamAssassin, skor yang lebih rendah lebih baik. Baca daftar masalahnya, bukan hanya angkanya.

## Cara menurunkan skor spam Anda

1. Pasang SPF, DKIM, dan DMARC untuk domain pengirim Anda.
2. Pastikan alamat IP pengirim Anda tidak ada di blacklist. Alat seperti MXToolbox bisa memeriksanya.
3. Tulis baris subjek dengan huruf biasa. Pakai paling banyak satu tanda seru.
4. Pakai tautan lengkap ke domain Anda sendiri, bukan pemendek tautan.
5. Kirim campuran teks dan gambar, bukan satu gambar besar.
6. Pakai HTML yang rapi dari editor alat email Anda, bukan kode yang disalin dari situs web.
7. Uji lagi setelah setiap perubahan.

## Skor spam dan verifikasi email

Menjalankan [verifikasi email](/) tidak mengubah skor spam Anda. Skor itu berkaitan dengan isi dan pengaturan email Anda, dan alat verifikasi tidak menyentuh keduanya. Yang dilakukan [email checker](/email-checker) adalah menemukan alamat yang tidak ada sebelum Anda mengirim. Alat [verifikasi email massal](/bulk-email-verifier) menghapusnya dari seluruh daftar. Ini mengurangi bounce dan menghapus alamat mati sebelum alamat itu menjadi [spam trap](/glossary/spam-trap). Bounce dan spam trap memengaruhi reputasi pengirim Anda, dan penyedia besar seperti Gmail terutama memutuskan berdasarkan reputasi, bukan skor konten.
