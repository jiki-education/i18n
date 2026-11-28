---
title: "Skenario"
description: "Kondisi awal yang berbeda-beda yang dipakai sebuah latihan untuk menjalankan satu potong code-mu, sehingga code itu harus berfungsi untuk semuanya."
en_md5: d5c4ee54eed8083e13f18bb7d256b86d
---

Setiap latihan punya skenario yang berbeda-beda, yaitu situasi berbeda yang harus dihadapi code-mu.

Kamu akan melihatnya sebagai tombol-tombol kecil tepat di atas output setiap latihan. Setiap tombol mewakili skenario yang berbeda. Tugasmu adalah menulis code yang berfungsi untuk semuanya, bukan hanya yang pertama. Coba kuulangi sekali lagi. Kamu menulis code-mu sekali, tapi code yang sama itu dijalankan untuk setiap skenario. Bedanya, setiap skenario bisa jadi disiapkan dengan cara yang sedikit berbeda, atau fungsi-fungsi yang kamu dapatkan bisa mengembalikan hal yang sedikit berbeda tergantung skenario yang sedang aktif.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/scenario-buttons.webp"
  alt="Deretan tombol skenario tepat di atas output sebuah latihan, dilingkari untuk menyorotinya"
  width="500"
  height="318"
/>

Mari kita ambil contoh permainan golf. Kamu mungkin perlu mengubah seberapa jauh bola menggelinding berdasarkan nilai kembalian (bahasa Inggris: _return value_) dari sebuah fungsi bernama `getShotLength` (panjang pukulan), yang memberi tahu seberapa jauh pemain golf itu memukul bolanya. Bayangkan pemainnya harus mengusap layar ponselnya untuk menentukan seberapa jauh ia memukul.

<img
  class="concept-image"
  src="/static/images/concept-assets/scenarios/golf-game.webp"
  alt="Pemandangan permainan golf dengan seorang pemain, sebuah bola, dan bendera di lubang sebelah kanan"
  width="412"
  height="400"
/>

Hasil yang kembali ke kamu datang lewat fungsi ini. Jadi, di satu skenario, kamu bisa memakai fungsi `getShotLength`, dan fungsi itu mengembalikan `23`, usapan pendek. Di skenario lain, ia mengembalikan `70`, usapan panjang. Di skenario lain lagi, ia mengembalikan `45`. Code-mu harus menggelindingkan bola sejauh yang tepat untuk setiap skenario, hanya dengan satu program, satu set code. Kamu perlu memakai fungsi `getShotLength` untuk melihat seberapa jauh pukulannya, lalu menggelindingkan bola ke titik itu.

```javascript
let distance = getShotLength()
```

Skenario memastikan code-mu benar-benar berfungsi dengan baik. Menulis code yang berfungsi di satu situasi tertentu itu cukup mudah. Jauh lebih sulit, dan jauh lebih bernilai, menulis code yang berfungsi di banyak situasi berbeda. Saat mengerjakan latihan, mulailah dari skenario pertama. Pastikan itu berhasil dulu. Baru setelah itu lanjut ke skenario berikutnya dan pastikan juga berhasil. Ketika code-mu gagal di skenario lain, pikirkan apa yang berbeda dan bagaimana code-mu perlu menyesuaikan diri.
