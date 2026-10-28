---
title: DMARC
description: Apa itu DMARC, kenapa DMARC dibuat, cara DMARC memakai SPF dan DKIM, tiga kebijakan DMARC, penjelasan DMARC record sederhana, dan siapa yang mewajibkannya.
slug: dmarc
date: 2026-10-23
updated: 2026-10-23
keyword: dmarc
short: DMARC adalah aturan yang Anda terbitkan di DNS domain Anda. Aturan ini memberi tahu server penerima apa yang harus dilakukan dengan email yang mengaku dari domain Anda tetapi gagal SPF dan DKIM. DMARC juga memberi tahu ke mana laporan harus dikirim kepada Anda.
related: spf, dkim, dmarc-alignment, email-spoofing, bimi, dns-txt-record
cta: DMARC melindungi domain Anda. Verifikasi melindungi bounce rate Anda
---

## Apa itu DMARC?

DMARC adalah singkatan dari Domain-based Message Authentication, Reporting and Conformance. DMARC adalah aturan yang Anda terbitkan di DNS. DNS adalah direktori publik tempat domain mencantumkan pengaturannya. Aturan ini menjawab satu pertanyaan untuk server penerima. Apa yang harus terjadi pada email yang memakai domain Anda di alamat From tetapi gagal pemeriksaan?

Alamat From adalah alamat pengirim yang dilihat orang di kotak masuk mereka. Tanpa DMARC, siapa pun bisa memasang domain Anda di sana. Dengan DMARC, Anda bisa meminta Gmail, Outlook.com, dan penyedia lain untuk mengirim email seperti itu ke spam atau memblokirnya. Anda juga bisa meminta mereka mengirimkan laporan tentang setiap server yang mengirim email atas nama Anda.

## Contoh: invoice palsu dari billing@example.com

Example Ltd mengirim invoice aslinya dari billing@example.com. Seorang penipu ingin menipu pelanggan perusahaan itu. Inilah yang terjadi.

1. Penipu itu mengirim email dari servernya sendiri. Alamat From bertuliskan billing@example.com. Subjeknya bertuliskan "Invoice lewat jatuh tempo, bayar hari ini".
2. Email itu sampai ke Tom, salah satu pelanggan perusahaan.
3. Penyedia email Tom menjalankan dua pemeriksaan. [SPF](/glossary/spf) memeriksa apakah server pengirim diizinkan mengirim untuk example.com. Ternyata tidak. [DKIM](/glossary/dkim) memeriksa tanda tangan yang valid dari example.com. Tidak ada tanda tangan.
4. Penyedia mencari DMARC record milik example.com. Record itu bertuliskan `p=reject`.
5. Penyedia memblokir email itu. Tom tidak pernah melihatnya.

Tanpa DMARC record, langkah 4 tidak menemukan apa pun. Penyedia lalu memutuskan sendiri, dan invoice palsu itu bisa sampai ke kotak masuk Tom.

Server penerima memperlakukan kebijakan Anda sebagai permintaan. Mereka juga bisa menerapkan filter spam mereka sendiri di sampingnya.

## Cara DMARC memutuskan: alignment

SPF dan DKIM masing-masing memeriksa sebuah domain. Namun domain ini bisa berbeda dengan domain di alamat From. Seorang penipu bisa lolos SPF untuk domainnya sendiri, seperti scam-mail.example, sementara alamat From menampilkan example.com.

DMARC menambahkan satu aturan untuk mengatasi ini. SPF atau DKIM harus lolos untuk domain yang sama dengan yang tampil di alamat From. Kecocokan ini disebut alignment. Cukup satu dari dua pemeriksaan yang perlu lolos dan cocok. Halaman [DMARC alignment](/glossary/dmarc-alignment) menjelaskan versi relaxed dan strict dari aturan ini.

## Tiga kebijakan DMARC

Kebijakan adalah bagian `p=` di record. Ada tiga nilai yang mungkin.

| Kebijakan | Yang terjadi pada email yang gagal DMARC | Kapan dipakai |
| --- | --- | --- |
| `p=none` | Email dikirim seperti biasa. Anda hanya mendapat laporan. | Di awal, saat Anda mencari semua pengirim Anda |
| `p=quarantine` | Email masuk ke folder spam. | Saat semua pengirim asli Anda sudah lolos |
| `p=reject` | Email diblokir dan tidak pernah sampai ke kotak masuk. | Saat Anda yakin tidak ada email asli yang gagal |

## DMARC record sederhana

DMARC record adalah [DNS TXT record](/glossary/dns-txt-record) dengan nama `_dmarc`. Untuk example.com, record ini berada di `_dmarc.example.com`. Berikut record sederhana:

```text
v=DMARC1; p=none; rua=mailto:reports@example.com
```

Record ini punya tiga bagian, dipisahkan dengan titik koma.

- `v=DMARC1` menyatakan bahwa ini adalah DMARC record. Bagian ini harus berada di depan.
- `p=none` adalah kebijakannya. Di sini artinya: jangan lakukan apa pun yang khusus, cukup laporkan.
- `rua=mailto:reports@example.com` adalah alamat yang menerima laporan ringkasan harian.

Sebuah domain hanya boleh punya satu DMARC record. Jika server penerima menemukan dua, server mengabaikan keduanya. Panduan [apa itu DMARC record](/blog/what-is-a-dmarc-record) menjelaskan semua tag lain dan cara membaca laporannya.

## Cara memulai DMARC

Sebagian besar domain menaikkan kebijakannya dalam tiga langkah.

1. Terbitkan record dengan `p=none` dan alamat `rua`. Tidak ada yang berubah pada email Anda, dan laporan mulai berdatangan.
2. Baca laporannya. Laporan mencantumkan setiap server yang mengirim email atas nama domain Anda. Pastikan setiap layanan asli lolos SPF atau DKIM untuk domain Anda. Alat newsletter dan help desk Anda adalah dua contohnya.
3. Ubah ke `p=quarantine`. Saat tidak ada email asli yang masuk ke spam, ubah ke `p=reject`.

Standar DMARC menyatakan bahwa membuat semua pengirim asli lolos bisa memakan waktu berbulan-bulan. Layanan yang jarang mengirim, seperti alat penagihan, mudah terlewat. [DMARC generator](/dmarc-generator) kami membuat record untuk setiap langkah.

Sebelum memakai `p=reject`, pastikan semua email Anda ditandatangani dengan DKIM. Penerusan email merusak SPF. Kebijakan reject yang hanya bergantung pada SPF bisa memblokir email asli yang diteruskan.

## Siapa yang mewajibkan DMARC

Panduan pengirim dari Google mewajibkan DMARC record bagi pengirim 5.000 email atau lebih per hari ke akun Gmail pribadi. Microsoft punya aturan yang sama untuk Outlook.com, Hotmail, dan Live. Microsoft mulai menegakkannya pada 5 Mei 2025. Untuk keduanya, `p=none` sudah memenuhi batas minimum. Domain From juga harus selaras (align) dengan SPF atau DKIM.

Standar DMARC yang berlaku saat ini adalah RFC 9989, yang diterbitkan pada Mei 2026. Standar ini menggantikan RFC 7489. Record yang diawali `v=DMARC1` tetap bekerja.

## DMARC dan verifikasi email

DMARC melindungi domain Anda dari orang yang mengirim email atas nama Anda. DMARC tidak berpengaruh pada alamat di daftar Anda sendiri. Email ke kotak masuk yang sudah tidak ada tetap bounce, meskipun lolos DMARC. Sebuah [email checker](/email-checker) menemukan alamat seperti itu sebelum Anda mengirim, dan alat [verifikasi email massal](/bulk-email-verifier) menemukannya di seluruh daftar. Dengan [verifikasi email](/), bounce rate Anda tetap rendah, dan DMARC mencegah penipu memakai domain Anda.
