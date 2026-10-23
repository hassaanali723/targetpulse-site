---
title: BIMI
description: Apa itu BIMI di email, cara BIMI menampilkan logo merek di kotak masuk, apa yang Anda perlukan dulu, contoh BIMI record, dan kotak masuk mana yang mendukungnya.
slug: bimi
date: 2026-10-23
updated: 2026-10-23
keyword: bimi email
short: BIMI adalah standar email yang menampilkan logo merek Anda di samping email Anda, di kotak masuk yang mendukungnya. BIMI adalah singkatan dari Brand Indicators for Message Identification. BIMI hanya bekerja jika domain Anda lolos DMARC dengan kebijakan quarantine atau reject.
related: dmarc, dkim, spf, email-spoofing, dns-txt-record, domain-reputation
cta: Logo hanya berguna jika email sampai ke kotak masuk yang nyata
---

## Apa itu BIMI di email?

BIMI adalah singkatan dari Brand Indicators for Message Identification. BIMI adalah standar email yang memungkinkan sebuah merek menampilkan logonya di samping emailnya. Logo muncul di kotak masuk yang mendukung BIMI, seperti Gmail dan Apple Mail. Standar ini diterbitkan oleh BIMI Group, sebuah kelompok kerja dari perusahaan email.

BIMI sendiri tidak menambah keamanan. BIMI menampilkan logo pada email yang sudah lolos DMARC. Pekerjaan untuk sampai ke tahap itu yang melindungi domain Anda.

## Contoh: logo merek di Gmail

Buka Gmail di ponsel Anda. Setiap email di daftar punya gambar bulat kecil di sebelah kiri. Untuk sebagian besar pengirim, Gmail menampilkan lingkaran dengan huruf pertama nama pengirim. Untuk sebagian merek, Gmail menampilkan logo merek itu di lingkaran tersebut. Merek-merek itu memakai BIMI.

Misalnya, sebuah toko sepatu di example.com memasang BIMI. Toko itu mengirim newsletter ke alamat Gmail milik Priya. Inilah yang terjadi.

1. Gmail memeriksa SPF, DKIM, dan DMARC untuk example.com. Email itu lolos DMARC.
2. Gmail melihat bahwa kebijakan DMARC toko itu adalah quarantine atau reject.
3. Gmail mencari BIMI record di `default._bimi.example.com`.
4. Record itu menunjuk ke file logo toko dan ke sertifikat mereknya.
5. Gmail memeriksa sertifikat, lalu menampilkan logo di samping email.

Jika salah satu langkah gagal, Priya melihat huruf biasa. Email itu tetap terkirim seperti biasa.

## Yang Anda perlukan untuk BIMI

Anda memerlukan tiga hal sebelum logo muncul di Gmail.

- **DMARC dengan kebijakan penegakan.** Kebijakan [DMARC](/glossary/dmarc) Anda harus `p=quarantine` atau `p=reject`. Google menyatakan bahwa BIMI tidak mendukung `p=none`.
- **Logo dalam file SVG Tiny PS.** SVG adalah format gambar yang terdiri dari bentuk, bukan piksel. SVG Tiny PS adalah versi SVG yang lebih sederhana dan dibuat untuk kotak masuk. Gambarnya harus persegi dan memuat judul dengan nama merek Anda. Gambar tidak boleh berisi skrip, animasi, atau tautan ke file lain. Ukuran file sebaiknya di bawah 32 KB.
- **Sertifikat merek.** Ini adalah file dari otoritas sertifikat, yaitu perusahaan yang memeriksa hak Anda untuk memakai logo. Gmail menerima dua jenis.

| Sertifikat | Perlu merek dagang terdaftar | Yang ditampilkan Gmail |
| --- | --- | --- |
| VMC (Verified Mark Certificate) | Ya | Logo Anda dan tanda centang biru |
| CMC (Common Mark Certificate) | Tidak | Logo Anda, tanpa tanda centang |

## BIMI record

BIMI record adalah sebuah [DNS TXT record](/glossary/dns-txt-record). DNS adalah direktori publik tempat domain menerbitkan pengaturannya. TXT record adalah entri di DNS yang berisi teks biasa. BIMI record berada di `default._bimi.example.com`. Di sini, `default` adalah selector, yaitu label untuk record tersebut.

```text
v=BIMI1; l=https://example.com/bimi/logo.svg; a=https://example.com/bimi/certificate.pem
```

- `v=BIMI1` menyatakan bahwa ini adalah BIMI record.
- `l=` adalah alamat web logo SVG Anda.
- `a=` adalah alamat web sertifikat VMC atau CMC Anda, berupa file PEM.

Contoh dari Google sendiri juga menunjukkan record dengan `l=` dikosongkan dan hanya `a=` yang diisi. Ini bisa bekerja karena logo disimpan di dalam file sertifikat. Ikuti saran dari penyedia sertifikat Anda.

## Kotak masuk mana yang menampilkan logo BIMI

Dukungannya berbeda di setiap penyedia. Berikut aturan yang tercantum di halaman BIMI generator kami.

- **Gmail** menampilkan logo hanya dengan VMC atau CMC.
- **Apple Mail** menampilkan logo hanya dengan VMC.
- **Yahoo dan Fastmail** bisa menampilkan logo dari record tanpa sertifikat sama sekali.

Kotak masuk yang tidak mendukung BIMI tidak menampilkan perbedaan apa pun. Penyedia juga bisa butuh waktu untuk membaca BIMI record yang baru. Jadi, logo yang belum muncul di hari pertama tidak selalu berarti ada kesalahan.

## Cara memasang BIMI

1. Pasang SPF dan DKIM untuk setiap layanan yang mengirim email Anda.
2. Ubah kebijakan DMARC Anda ke quarantine atau reject. [DMARC generator](/dmarc-generator) (dalam bahasa Inggris) kami membuat record-nya.
3. Ubah logo Anda menjadi file SVG Tiny PS.
4. Beli VMC atau CMC jika Anda ingin logo muncul di Gmail.
5. Buat BIMI record dengan [BIMI generator](/bimi-generator) (dalam bahasa Inggris) kami. Alat ini juga memeriksa file SVG Anda di browser.
6. Terbitkan record di `default._bimi` pada DNS Anda.
7. Kirim email uji ke akun Gmail dan periksa apakah logo muncul.

## BIMI dan verifikasi email

BIMI sendiri tidak meningkatkan keterkiriman. BIMI hanya menampilkan logo pada email yang sampai ke kotak masuk dan lolos DMARC. Email ke alamat yang tidak ada akan bounce, jadi tidak ada yang melihat logonya. Sebuah [email checker](/email-checker) dan alat [verifikasi email massal](/bulk-email-verifier) menemukan alamat seperti itu, sehingga Anda bisa menghapusnya sebelum mengirim. Dengan [verifikasi email](/), lebih sedikit email Anda yang bounce, jadi lebih banyak orang sungguhan yang melihat logo Anda.
