---
title: "Memahami perulangan `for`"
description: "Perulangan dengan tiga bagian (inisialisasi, kondisi, dan penambahan) yang memberimu kendali penuh atas iterasi."
en_md5: 0ad4155ded18c2df27d29e5355bd0532
---

Kamu mungkin ingat bahwa perulangan repeat sebenarnya tidak benar-benar ada di JavaScript. Itu cuma tambahan supaya hidupmu sedikit lebih mudah selama kita baru mulai.

Jadi, kita pakai apa sebagai gantinya? Kita pakai perulangan `for` biasa, dan bentuknya seperti ini.

```javascript
for (let i = 0; i < 5; i++) {
  // ...
}
```

Kamu bisa lihat sendiri kenapa hal ini mungkin terasa agak menakutkan di hari pertamamu.

Tapi sekarang kamu sudah punya semua pengetahuan yang kamu butuhkan untuk nyaman dengan ini. Jadi mari kita bedah satu per satu.

Perulangan `for` punya tiga komponen: inisialisasi, kondisi, dan penambahan (bahasa Inggris: _increment_).

Bagian inisialisasi, yaitu `let i = 0` ini, dijalankan di awal seluruh perulangan. Ia hanya berjalan sekali, dan di sini ia membuat sebuah kotak bernama `i` (indeks) yang diisi dengan nol. `i` hanyalah sebuah huruf yang dipakai untuk melacak sebuah nilai selama kita berulang, dan secara tradisional `i` atau `x` yang dipakai untuk ini.

Bagian berikutnya dijalankan setiap kali, tepat sebelum tiap iterasi perulangan.

Kalau kondisinya benar, kita jalankan perulangannya lagi.

Kalau tidak, kita tidak menjalankannya.

Dan yang terakhir adalah penambahan, yaitu `i++`.

`i++` artinya sama dengan `i = i + 1`. Itu hanya singkatan, cara untuk menambah `i` sebanyak satu setiap kali.

Jadi dalam contoh ini, kita isi `i` dengan nol. Kita cek apakah `i` kurang dari dua, ternyata iya, jadi kita jalankan perulangannya.

Lalu di akhir, kita tambah `i` dengan satu, jadi `i` sekarang bernilai satu. Nol ditambah satu sama dengan satu.

Lalu kita jalan lagi. Kita cek apakah satu kurang dari dua.

Ternyata iya, jadi kita jalankan perulangannya. Lalu di akhir, kita tambah `i` lagi. Sekarang nilainya dua, satu ditambah satu sama dengan dua.

```javascript
i = 0
i < 2 // true - run the loop
...   // Do the iteration
i = i + 1 // 1

i < 2 // true - run the loop
...   // Do the iteration
i = i + 1 // 2

i < 2 // false - exit the loop
```

Lalu kita masuk putaran ketiga. Kali ini kita cek apakah dua kurang dari dua, ternyata tidak, jadi kita tidak menjalankan perulangannya, dan sebenarnya perulangannya sudah selesai sampai di situ. Kita tinggal lanjut ke kode apa pun di bawahnya. Jadi kita sudah menjalankan perulangan itu dua kali, dan itu hal yang berguna untuk diketahui. Selama kita mulai dari nol dan punya kondisi `i < n`, angka `n` adalah berapa kali perulangan itu akan dijalankan.

Jadi ini sama saja dengan menulis repeat dua kali.

Jadi sebenarnya tidak sulit, tapi jauh lebih berbelit daripada sekadar menulis repeat dua kali. Kelebihan perulangan `for` adalah kamu bisa melakukan apa pun di ketiga bagian itu. Kamu bisa mulai dari angka yang berbeda, menghitung naik lebih dari satu, menghitung mundur, atau memakai kondisi yang bergantung pada sesuatu selain penghitung sederhana. Fleksibilitas itulah yang membuat perulangan `for` menjadi tulang punggung JavaScript.
