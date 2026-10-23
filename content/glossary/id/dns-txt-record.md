---
title: DNS TXT record
description: Apa itu DNS TXT record, kegunaannya di email (SPF, DKIM, dan DMARC), cara menambahkannya, aturan yang bisa merusaknya, dan cara memeriksanya. Dengan contoh.
slug: dns-txt-record
date: 2026-10-23
updated: 2026-10-23
keyword: dns txt record
short: DNS TXT record adalah sebaris teks yang disimpan di pengaturan domain Anda. Server email membaca TXT record untuk memeriksa SPF, DKIM, dan DMARC. Layanan lain membacanya untuk memastikan bahwa Anda pemilik domain itu.
related: spf, dkim, dmarc, mx-record, ptr-record, bimi
cta: Record Anda sudah terpasang. Sekarang periksa alamat yang Anda kirimi email
---

## Apa itu DNS TXT record?

DNS TXT record adalah sebaris teks yang disimpan di pengaturan domain Anda. Siapa pun di internet bisa membacanya.

Pertama, apa itu DNS. DNS adalah singkatan dari Domain Name System. DNS bekerja seperti buku telepon publik untuk domain. Saat seseorang mengetik domain Anda, DNS memberi tahu komputernya di mana domain itu berada. DNS menyimpan berbagai jenis entri, yang disebut record. Setiap jenis record punya satu tugas.

TXT record berisi teks biasa. Record ini tidak mengarahkan siapa pun ke mana pun. Record ini adalah catatan yang menempel pada domain Anda. Sistem lain membaca catatan itu dan bertindak berdasarkan isinya.

## Kegunaan TXT record

Di email, TXT record menyimpan aturan yang membuktikan bahwa email Anda asli.

| Kegunaan | Lokasi record | Contoh nilai |
|---|---|---|
| **[SPF](/glossary/spf)** | domain Anda, misalnya `example.com` | `v=spf1 include:_spf.google.com ~all` |
| **[DKIM](/glossary/dkim)** | `selector._domainkey.example.com` | `v=DKIM1; k=rsa; p=MIIBIjANBg...` |
| **[DMARC](/glossary/dmarc)** | `_dmarc.example.com` | `v=DMARC1; p=none; rua=mailto:reports@example.com` |
| **Bukti kepemilikan domain** | domain Anda | `google-site-verification=abc123...` |

Nilai di atas adalah contoh yang dipendekkan. Nilai sebenarnya berasal dari penyedia email Anda atau layanan yang Anda hubungkan.

## Contoh sederhana

Begini cara menambahkan TXT record.

1. **Marco mulai memakai Google Workspace.** Ia ingin email dari marco@studio.example sampai ke kotak masuk.
2. **Google memberinya sebuah nilai.** Panduan pemasangan memintanya menambahkan SPF record dengan `v=spf1 include:_spf.google.com ~all`.
3. **Marco membuka pengaturan domainnya.** Ia masuk ke tempat ia membeli domain. Tempat ini disebut registrar atau penyedia DNS.
4. **Ia menambahkan TXT record.** Ia memilih jenis TXT, membiarkan kolom nama berisi domainnya, lalu menempelkan nilainya.
5. **Ia menunggu.** Perubahan bisa butuh beberapa menit sampai beberapa jam untuk terlihat di mana-mana.
6. **Server sekarang bisa memeriksanya.** Saat Marco mengirim email, server penerima membaca TXT record miliknya. Server melihat bahwa server Google diizinkan mengirim untuk studio.example.

## Aturan yang bisa merusak TXT record

Sebagian besar masalah TXT record berasal dari beberapa kesalahan sederhana.

- **Hanya satu SPF record per domain.** Jika sebuah domain punya dua TXT record yang diawali `v=spf1`, SPF gagal. Gabungkan keduanya menjadi satu record.
- **Nilai yang panjang dipecah.** Satu potong teks di TXT record bisa berisi hingga 255 karakter. Nilai yang panjang, seperti kunci DKIM, disimpan dalam beberapa potong. Sebagian besar penyedia DNS melakukannya untuk Anda.
- **Pakai nama yang tepat.** DMARC record harus berada di `_dmarc`, bukan di domain utama Anda. DKIM record harus berada di nama selector yang diberikan penyedia Anda.
- **Salin nilainya dengan tepat.** Satu karakter yang hilang membuat record tidak berguna.

## Cara memeriksa TXT record

Anda bisa membaca TXT record dari domain mana pun. Di komputer Mac atau Linux, buka terminal dan ketik `dig TXT example.com`. Di Windows, ketik `nslookup -type=TXT example.com`.

Anda juga bisa memakai [SPF checker](/spf-checker) (dalam bahasa Inggris) kami. Alat ini membaca SPF record sebuah domain dan menjelaskan apa yang diizinkannya.

## Hubungan TXT record dengan verifikasi

TXT record melindungi email yang Anda kirim. Record ini membuktikan bahwa email berasal dari Anda. Record ini tidak memberi tahu apa pun tentang apakah orang yang Anda kirimi email masih punya kotak masuk.

Itu adalah pemeriksaan yang berbeda. Sebuah [email checker](/email-checker) menanyakan ke server penerima apakah sebuah alamat ada. Anda memerlukan keduanya: record yang benar di domain Anda, dan daftar alamat nyata yang bersih.
