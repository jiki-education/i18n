---
title: "Menambahkan input pada fungsi"
description: "Menambahkan lubang input ke fungsimu sendiri agar fungsi itu bisa melakukan hal berbeda berdasarkan nilai yang dimasukkan."
en_md5: f70d737888fcbda3306196ff069eb2f1
---

Fungsi-fungsi yang sudah kamu buat sejauh ini selalu melakukan hal yang persis sama setiap kali dipanggil. `turnAround` (berbalik arah) selalu berbelok ke kiri dua kali. `shootIfAlienAbove` (tembak jika ada alien di atas) selalu memeriksa lalu menembak.

Tapi coba ingat lagi fungsi-fungsi yang selama ini kamu pakai di kursus ini, bagaimana mereka melakukan hal yang berbeda tergantung input yang diberikan. Rectangle menerima left, top, width, dan height sebagai input, lalu menggambar persegi panjang yang berbeda sesuai yang kamu tentukan.

Sekarang kita akan menambahkan lubang input ke fungsimu sendiri juga.

Ada dua hal yang perlu kamu tahu untuk melakukannya. Pertama, bagaimana bentuknya, apa yang harus kamu tulis. Kedua, apa yang sebenarnya terjadi.

Bagian pertama cukup sederhana. Kamu cukup menambahkan tanda kurung, lalu nama-nama input yang kamu inginkan.

Jadi bayangkan kita membuat fungsi yang seharusnya menembak berkali-kali. Mari kita beri nama `shootMany` (tembak banyak kali).

Kita menulisnya seperti ini:

```javascript
function shootMany(numShots) {
  // ...
}
```

Kalau kamu mau memakai fungsi ini, panggil saja dengan jumlah tembakan yang kamu inginkan:

```javascript
shootMany(5)
shootMany(2)
```

Nah, ini bagian kuncinya. Saat kode dijalankan, apa pun yang kamu masukkan ke lubang input itu, `5` atau `2`, mini-Jiki yang bertopi di dalam fungsi mengambil input tersebut dan menaruhnya ke dalam kotak bernama `numShots` (jumlah tembakan), lalu meletakkan kotak itu di rak di dalam fungsi supaya bisa kamu pakai di kode fungsi tersebut.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-box.webp"
  alt="Mini-Jiki di dalam mesin shootMany menaruh input ke dalam kotak berlabel numShots"
  width="500"
  height="376"
/>

Aku ulangi sekali lagi.

Saat kita menulis `shootMany(5)` untuk memakai fungsi itu, Jiki di bagian luar mengambil sebuah `5` dan memasukkannya ke lubang input `shootMany`. Di dalam mesin, mini-Jiki mengeluarkan `5` itu dan menaruhnya ke dalam kotak bernama `numShots`, karena itulah nama yang kamu berikan untuk lubang input tersebut, lalu ia meletakkan kotak itu di rak di dalam fungsi, di dalam mesin.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-on-shelf.webp"
  alt="Mini-Jiki meletakkan kotak numShots ke rak di dalam mesin shootMany"
  width="500"
  height="302"
/>

Lalu di dalam fungsi, kamu bisa memakai kotak `numShots` itu sama seperti kamu memakai kotak lain. Tidak ada yang ajaib dari nama `numShots`. Kita bisa menamainya apa saja sesuka kita. Nama itu hanyalah instruksi untuk mini-Jiki agar selalu membuat kotak dengan label tersebut di dalam fungsi, lalu menaruh apa pun yang dimasukkan ke lubang itu ke dalam kotak tersebut.

Dan begitu ada nilai di dalam kotak itu, kamu bisa melakukan apa pun yang biasa kamu lakukan dengan kotak. Kamu bisa memakai kotak `numShots` sebagai bagian dari perulangan `repeat` untuk menembak dalam jumlah yang tepat. Kamu juga bisa punya lebih dari satu input. Cukup pisahkan dengan koma. Jadi, kalau kita punya fungsi bernama `drawStar` (gambar bintang) yang menggambar bintang berdasarkan posisi kiri atasnya, kita menulisnya seperti ini:

```javascript
function drawStar(left, top) {
  // ...
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-two-slots.webp"
  alt="Mesin drawStar dengan dua lubang input, menerima dua nilai terpisah"
  width="453"
  height="400"
/>

Lalu saat fungsi itu dipanggil, mini-Jiki akan menyimpan nilai-nilai yang masuk ke input ke dalam kotak bernama `left` (kiri) dan `top` (atas), kemudian menyimpannya di rak di dalam fungsi.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-boxes-shelf.webp"
  alt="Mini-Jiki menyimpan dua input ke dalam kotak berlabel left dan top di rak dalam mesin drawStar"
  width="431"
  height="400"
/>
