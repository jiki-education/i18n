---
title: "Menggunakan beberapa fungsi bersama-sama"
description: "Memecah sebuah masalah menjadi fungsi-fungsi kecil yang punya satu tanggung jawab dan saling memanggil, supaya tiap bagian tetap sederhana dan bisa dipakai ulang."
en_md5: 7df3110b30c0f279d7f04d3b4e331a99
---

Sejauh ini, setiap kali kamu menulis fungsi, hampir semuanya berdiri sendiri dan berisi seluruh logika yang dibutuhkannya untuk bekerja.

Sekarang kita akan melihat cara memecah fungsi supaya kita punya fungsi-fungsi yang lebih kecil yang bekerja bersama, bukan fungsi besar yang melakukan banyak hal sekaligus.

Sebagai aturan umum dalam pemrograman, kamu ingin setiap fungsi melakukan seminimal mungkin. Kita menyebutnya sebagai fungsi dengan tanggung jawab tunggal (bahasa Inggris: _single responsibility_). Setiap fungsi seharusnya hanya melakukan satu hal dan memakai fungsi lain untuk bagian-bagian kecilnya yang berbeda.

Mari kita lihat sebuah contoh.

Bayangkan kita punya sebuah fungsi yang tugasnya mengembalikan string yang mendeskripsikan sebuah nama.

Versi sederhananya akan terlihat seperti ini. Ada perulangan untuk menghitung, sesuatu yang sudah pernah kamu tulis, lalu ada template string yang menyusun hasilnya menjadi satu.

```javascript
function describeName(name) {
  let length = 0
  for (const letter in name) {
    length += 1
  }
  return `This name is ${length} letters long`
}
```

Kode ini bekerja dengan baik, tapi ia melakukan dua hal. Satu hal yang cukup umum, yaitu menghitung, dan satu hal yang sangat spesifik, yaitu menyusun string ini dalam format tertentu.

Akan jauh lebih bagus kalau kita pecah ini menjadi dua fungsi: satu yang bertanggung jawab untuk menghitung, dan satu yang bertanggung jawab untuk mendeskripsikan nama dalam format khusus ini.

```javascript
// Hanya menghitung huruf
function countLetters(str) {
  let count = 0
  for (const letter in str) {
    count += 1
  }
  return count
}

// Hanya memformat teks dengan rapi
function describeName(name) {
  const count = countLetters(name)
  return `The name has ${count} letters`
}
```

Lalu kita bisa memakai ulang fungsi menghitung yang umum itu di pemformatan string ini, tapi juga di tempat lain mana pun yang membutuhkannya. Kapan pun kita perlu menghitung huruf dalam sebuah string, fungsi itu benar-benar terlepas dari apa pun yang berurusan dengan pencetakan.

Kamu bisa membaca kedua fungsi itu secara terpisah dan langsung paham apa yang dilakukan masing-masing.

Saat fungsimu makin kompleks dan jumlahnya makin banyak, teknik inilah yang membedakan antara kode yang rapi dan mudah dibaca dengan kode yang benar-benar membingungkan dan berantakan.

Ada satu hal yang perlu disebut lagi di sini, yaitu apa pun yang kamu buat di dalam sebuah fungsi tidak bisa diakses oleh fungsi lain, kecuali kamu sengaja mengembalikannya.

Jadi kalau kamu mencoba merujuk variabel `count` (jumlah) dari dalam `describeName` (mendeskripsikan nama), kamu tidak bisa melakukannya, karena variabel itu milik fungsi yang lain.

<img
  class="concept-image"
  src="/static/images/concept-assets/function-composition/jiki-thinking.webp"
  alt="Jiki berpikir, dengan bola lampu di atas kepalanya, tentang bagaimana variabel tetap privat di dalam setiap fungsi"
  width="361"
  height="353"
/>

Di JavaScript, kita bisa membuat variabel di bagian paling atas, di atas segala-galanya, yang dipakai bersama antar fungsi, tapi aku sangat menyarankan kamu tidak melakukannya kecuali ada alasan yang benar-benar kuat.

Semakin kamu menjaga setiap fungsi tetap independen, dan istilah teknis untuk itu adalah murni (bahasa Inggris: _pure_), yaitu fungsi murni, semakin bersih kodemu dan semakin sedikit bug yang akan kamu buat.
