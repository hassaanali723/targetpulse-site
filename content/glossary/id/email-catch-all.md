---
title: Email catch-all
description: Apa itu domain email catch-all, kenapa perusahaan memasangnya, kenapa cek email biasa tidak bisa memastikan alamat di domain itu, dan apa yang harus dilakukan.
slug: email-catch-all
date: 2026-10-23
updated: 2026-10-23
keyword: email catch all
short: Domain email catch-all menerima email yang dikirim ke alamat apa pun di domain itu, termasuk nama yang tidak ada. Karena server selalu menjawab ya, cek email biasa tidak bisa tahu apakah sebuah kotak masuk benar-benar ada.
related: mx-record, smtp, hard-bounce, greylisting, secure-email-gateway, email-blacklist
cta: Dapatkan jawaban yang jelas untuk alamat catch-all
---

## Apa itu email catch-all?

Domain email catch-all menerima email yang dikirim ke alamat apa pun di domain itu. Alamatnya tidak harus ada.

Sebagian besar domain menolak email yang dikirim ke nama yang tidak mereka miliki. Domain catch-all tidak menolak. Domain itu menerima email dan memasukkannya ke satu kotak masuk bersama. Kadang email itu dihapus tanpa memberi tahu siapa pun.

Nama lain untuk pengaturan yang sama adalah **accept-all** dan **domain catch-all**. Banyak alat verifikasi memberi label "catch-all", "accept-all", atau "risky" (berisiko) pada alamat seperti ini.

## Contoh sederhana

1. **Acme memasang catch-all.** Acme adalah perusahaan kecil dengan domain acme.example. Manajer kantornya mengaktifkan catch-all agar tidak ada email pelanggan yang hilang.
2. **Sara menulis ke orang sungguhan.** Ia mengirim email ke jon@acme.example. Jon bekerja di sana. Ia menerima email itu.
3. **Sara salah ketik.** Lain kali ia mengetik jonn@acme.example. Tidak ada orang dengan nama itu.
4. **Server tetap menjawab ya.** Email itu tidak bounce. Email masuk ke kotak masuk bersama, dan mungkin tidak ada yang membacanya.

Sara tidak melihat pesan error, jadi ia mengira kedua email sampai. Hanya satu yang sampai ke Jon.

## Kenapa perusahaan memakai catch-all

Perusahaan mengaktifkan catch-all agar tidak melewatkan email. Pelanggan sering salah ketik. Nama mantan karyawan masih terus menerima email. Catch-all menyimpan semuanya di satu tempat.

## Kenapa catch-all menjadi masalah untuk verifikasi email

Cek email biasa menanyakan satu hal ke server: "Apakah Anda menerima email untuk alamat ini?" Di domain catch-all, jawabannya selalu ya. Orang sungguhan dan nama karangan mendapat jawaban yang sama.

Jadi, pemeriksaan dasar tidak bisa memastikan kotak masuknya. Pemeriksaan itu hanya bisa melaporkan bahwa domain menerima semua email.

Hal ini paling penting untuk daftar B2B. Dalam satu uji yang dipublikasikan terhadap 10.000 email bisnis nyata, 28% berada di domain catch-all. Uji ini dilakukan oleh LeadMagic, perusahaan yang menjual verifikasi email, jadi anggap ini sebagai uji dari vendor.

## Apa yang harus dilakukan dengan alamat catch-all

Anda punya tiga pilihan:

| Pilihan | Yang terjadi |
|---|---|
| **Hapus alamatnya** | Tidak ada risiko, tetapi Anda juga kehilangan kontak yang nyata |
| **Tetap kirim** | Sebagian sampai ke orang sungguhan, sebagian hilang atau bounce belakangan |
| **Periksa lebih dalam** | Alat verifikasi yang menguji lebih dari pemeriksaan dasar memisahkan alamat nyata dari yang palsu |

## Bagaimana alat verifikasi membantu

Giggal.ai menjalankan [verifikasi catch-all](/catch-all-verification) di setiap pemeriksaan. Giggal.ai memakai sinyal tambahan untuk memberi hasil yang jelas, dapat dikirim atau tidak dapat dikirim, bukan label "risky". Untuk panduan yang lebih panjang dengan lebih banyak contoh, baca [apa itu alamat email catch-all](/blog/what-is-a-catch-all-email-address).
