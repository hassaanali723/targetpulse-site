---
title: DKIM
description: Apa itu DKIM, cara tanda tangan DKIM membuktikan email berasal dari domain Anda, contoh DKIM record, serta cara memasang dan memeriksanya.
slug: dkim
date: 2026-10-23
updated: 2026-10-23
keyword: dkim
short: DKIM adalah singkatan dari DomainKeys Identified Mail. DKIM menambahkan tanda tangan digital ke setiap email yang Anda kirim. Server penerima memeriksa tanda tangan itu untuk memastikan email berasal dari domain Anda dan tidak diubah setelah dikirim.
related: spf, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, bimi
cta: Email yang ditandatangani tetap bounce jika alamatnya tidak ada
---

## Apa itu DKIM?

DKIM adalah singkatan dari DomainKeys Identified Mail. DKIM didefinisikan di RFC 6376. DKIM menambahkan tanda tangan digital ke setiap email yang keluar dari server Anda. Tanda tangan digital adalah kode panjang yang hanya bisa dibuat oleh server Anda.

Server penerima memeriksa kode itu. Jika kodenya valid, ada dua hal yang benar. Email itu ditandatangani oleh domain Anda. Tidak ada yang mengubahnya setelah dikirim.

Domain adalah nama setelah tanda @ di alamat email, seperti example.com. DKIM bekerja per domain. Setiap domain yang mengirim email sebaiknya menandatanganinya dengan kuncinya sendiri.

## Contoh: sebuah toko mengirim struk

Sebuah toko online memakai domain example.com. Lena membeli lampu, dan toko itu mengirim struk ke alamat Gmail miliknya. Inilah yang dilakukan DKIM.

1. Server pengirim toko menulis struk itu.
2. Server memakai private key (kunci privat) untuk membuat tanda tangan bagi email itu. Private key adalah file rahasia yang tetap berada di server pengirim.
3. Server menambahkan tanda tangan ke email sebagai header bernama `DKIM-Signature`. Header adalah baris informasi teknis di bagian atas email. Pembaca biasanya tidak melihatnya.
4. Email sampai di Gmail.
5. Gmail membaca header itu. Gmail menemukan domain example.com dan selector s2026a.
6. Gmail mencari public key (kunci publik) untuk selector itu di DNS toko. DNS adalah direktori publik tempat domain menerbitkan pengaturannya.
7. Gmail memakai public key untuk memeriksa tanda tangan. Pemeriksaan berhasil.
8. Gmail mencatat hasilnya sebagai DKIM pass untuk example.com.

Misalnya seseorang mengubah jumlah di struk setelah email dikirim. Pemeriksaan di langkah 7 akan gagal. Public key bisa memastikan sebuah tanda tangan, tetapi tidak bisa membuatnya. Hanya private key yang bisa membuatnya.

## Tanda tangan DKIM

Tanda tangan DKIM adalah satu header dengan beberapa bagian, yang disebut tag. Setiap tag terdiri dari huruf, tanda sama dengan, dan nilai. Dua tag paling penting.

- `d=` adalah domain penanda tangan, misalnya `d=example.com`.
- `s=` adalah selector, misalnya `s=s2026a`. Selector adalah label yang memberi nama pada satu kunci. Sebuah domain bisa punya beberapa kunci sekaligus, masing-masing dengan selector sendiri.

Header itu juga berisi tanda tangan di `b=`, dan kode untuk isi email di `bh=`. Server penerima memakai semuanya untuk menjalankan pemeriksaan.

## DKIM record

Public key diterbitkan di DKIM record. Ini adalah [DNS TXT record](/glossary/dns-txt-record), yaitu entri DNS yang berisi teks biasa. Namanya dibentuk dari selector dan domain:

`s2026a._domainkey.example.com`

Nilai record-nya terlihat seperti ini:

```text
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

- `v=DKIM1` menyatakan bahwa ini adalah DKIM record.
- `k=rsa` menyebut jenis kuncinya.
- `p=` berisi public key. Nilai sebenarnya panjangnya beberapa ratus karakter.

Private key tidak pernah dimasukkan ke DNS. Kunci itu tetap di server pengirim. Untuk ukuran kunci, pakai 2048 bit. Gmail menerima 1024 bit sebagai batas minimum, tetapi menyarankan 2048. RFC 8301 menyatakan bahwa penanda tangan sebaiknya memakai 2048 bit.

## Kenapa DKIM penting

DKIM tetap bekerja saat email diteruskan. Misalnya seseorang meneruskan struk dari toko itu ke akun lain. Server penerus mengirimnya dari alamat IP miliknya sendiri. Alamat IP adalah angka yang mengenali sebuah server di internet. Alamat IP itu tidak ada di [SPF record](/glossary/spf) toko, jadi SPF gagal. Tanda tangan DKIM ikut berada di dalam email, jadi DKIM tetap lolos.

[DMARC](/glossary/dmarc) memakai DKIM. DMARC lolos jika SPF atau DKIM lolos untuk domain yang sama dengan yang tampil di alamat From. Penerusan email merusak SPF, jadi DKIM sering menjadi pemeriksaan yang membuat DMARC lolos.

DKIM juga wajib untuk pengirim massal. Panduan pengirim dari Google mewajibkan SPF, DKIM, dan DMARC bagi pengirim 5.000 email atau lebih per hari ke Gmail. Microsoft punya aturan yang sama untuk Outlook.com, Hotmail, dan Live.

## Cara memasang DKIM

Cara memasang DKIM tergantung pada siapa yang mengirim email Anda.

- **Anda memakai layanan email** seperti Google Workspace, Microsoft 365, Mailchimp, atau SendGrid. Layanan itu membuat kunci untuk Anda. Layanan itu menampilkan DKIM record yang perlu Anda tambahkan di penyedia DNS Anda. Penyedia DNS biasanya adalah perusahaan tempat Anda membeli domain.
- **Anda mengelola server email sendiri.** Anda membuat pasangan kunci sendiri. [DKIM generator](/dkim-generator) (dalam bahasa Inggris) kami membuat pasangan kunci 2048 bit dan TXT record di browser Anda. Anda memasang private key di server dan menerbitkan record di DNS.

Periksa satu masalah yang umum. Banyak layanan email secara bawaan menandatangani dengan domain bersama milik mereka sendiri. Tanda tangannya lolos, tetapi domain di `d=` bukan milik Anda, jadi DMARC alignment gagal. Aktifkan DKIM kustom di pengaturan layanan, agar `d=` menampilkan domain Anda. Halaman [DMARC alignment](/glossary/dmarc-alignment) menjelaskan kenapa ini penting.

## Cara memeriksa apakah DKIM bekerja

1. Kirim email dari domain Anda ke akun Gmail pribadi.
2. Buka email itu di Gmail.
3. Klik menu titik tiga dan pilih Tampilkan versi asli.
4. Cari baris DKIM di bagian atas. Baris itu harus bertuliskan PASS dengan domain Anda.

Jika bertuliskan FAIL, periksa dua hal. Record DNS mungkin belum selesai diterbitkan. Atau selector di server Anda mungkin tidak sama persis dengan selector di DNS.

## DKIM dan verifikasi email

DKIM membuktikan bahwa email berasal dari domain Anda. DKIM tidak membuktikan bahwa alamat penerima ada. Email yang ditandatangani dengan benar ke alamat mati tetap bounce. Sebuah [email verifier](/email-checker) menanyakan ke server penerima apakah setiap kotak masuk ada sebelum Anda mengirim. Alat [verifikasi email massal](/bulk-email-verifier) melakukan hal yang sama untuk seluruh daftar. DKIM membuktikan siapa yang mengirim email, dan [verifikasi email](/) memastikan email dikirim ke alamat yang bisa menerimanya.
