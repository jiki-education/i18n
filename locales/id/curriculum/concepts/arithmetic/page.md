---
title: "Aritmetika"
description: "Menggabungkan variabel dengan matematika supaya nilai-nilai bisa saling berhubungan dan bergantung lewat penjumlahan, pengurangan, perkalian, dan pembagian."
en_md5: 7ce54754a3ca29896609a01a51b12377
---

Sejauh ini, saat membuat variabel, kita hanya memakai nilai-nilai sederhana: angka seperti `50` atau string seperti `"yellow"`. Variabel jadi jauh lebih kuat ketika kita bisa memakainya dalam kombinasi satu sama lain. Misalnya, kita bisa mengatakan bahwa tepi kiri persegi panjang harus berjarak tertentu dari tepi kanvas.

Dalam pemrograman, kita bisa memakai matematika biasa: menjumlahkan, mengurangkan, mengalikan, dan membagi. Variabel-variabel yang sudah kita buat pun bisa kita pakai di dalamnya.

Mari kita mulai dengan membayangkan kita ingin menggambar persegi panjang di kanvas, dengan jarak 10 dari kiri dan dari kanan, serta 20 dari atas dan dari bawah. Jadi persegi panjang itu akan berada di tengah kanvas, sedikit lebih panjang daripada tingginya.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/rectangle-on-canvas.webp"
  alt="Persegi panjang biru di tengah kanvas, berjarak 10 dari kiri dan kanan serta 20 dari atas dan bawah"
  width="399"
  height="400"
/>

Saat menggambar persegi panjang, kita perlu mengetahui `left` (kiri), `top` (atas), `width` (lebar), dan `height` (tinggi), juga warnanya. Jadi kita bisa mulai dengan menuliskannya.

Sekarang kita perlu benar-benar menghitung berapa nilai `left`, `top`, `width`, dan `height`-nya. Mari kita tentukan. `Left` adalah 10. `Top` adalah 20. Untuk `width`, ukurannya adalah lebar kanvas, yaitu 100, dikurangi 10 di kiri dan 10 di kanan, jadi 80. Lalu `height` adalah tinggi kanvas, yang juga 100, dikurangi 20 di atas dan 20 di bawah, jadi 60.

```javascript
let left = 10
let top = 20
let width = 80
let height = 60

rectangle(left, top, width, height, "blue")
```

Jadi kita bisa menetapkan variabel-variabel itu. `Left`, 10, `top`, 20, `width`, 80, `height`, 60. Tapi apa yang terjadi kalau sekarang kita ingin memindahkan persegi panjang itu sedikit ke dalam, membuatnya sedikit lebih kecil? Kalau kita ingin jaraknya 20 dari kiri dan kanan serta 30 dari atas dan bawah? Kita harus menghitung semuanya lagi dari awal. `width` sekarang 100 dikurangi 20 dikurangi 20, dan `height` 100 dikurangi 30 dikurangi 30. Ini jelas lebih banyak kerjaan dan matematika daripada yang mau aku kerjakan. Jadi, lebih baik kita suruh komputer yang mengerjakannya.

Kita bisa menetapkan `width` sebagai 100 dikurangi `left` dikurangi `left`, dan `height` sebagai 100 dikurangi `top` dikurangi `top`, karena jarak atas dan bawahnya sama. Atau kita bisa menuliskannya sebagai 100 dikurangi `left` dikali dua, atau 100 dikurangi `top` dikali dua.

```javascript
let width = 100 - left * 2
let height = 100 - top * 2
```

Sekarang kalau kita mengubah `left` atau `top`, `width` dan `height` juga akan ikut berubah. Jadi nilainya mulai saling berhubungan. Lalu bagaimana dengan kanvasnya? Sekarang ukurannya 100. Tapi bagaimana kalau kanvas kita berubah menjadi 200 untuk lebar dan tingginya? Sebaiknya kita membuat variabel bernama `canvasSize` (ukuran kanvas) dan mengisinya dengan 100. Sekarang `width` kita adalah `canvasSize` dikurangi `left` dikali dua, dan `height` kita adalah `canvasSize` dikurangi `top` dikali dua.

```javascript
let canvasSize = 100
let left = 20
let top = 30
let width = canvasSize - left * 2 // 60
let height = canvasSize - top * 2 // 40

rectangle(left, top, width, height, "blue")
```

Mari kita pikirkan apa yang Jiki lakukan saat kita menulis let `height` sama dengan `canvasSize` dikurangi `top` dikali dua. Pertama, dia mengambil kotak `top` dari rak, menemukan 30 di dalamnya, mengeluarkan kalkulator sakunya dan menghitung 30 dikali dua, lalu mencatat 60 dalam pikirannya.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-1.webp"
  alt="Jiki mengambil kotak top dari rak dan menghitung bahwa 30 dikali dua adalah 60"
  width="377"
  height="400"
/>

Lalu dia mengambil kotak `canvasSize` dari rak, menemukan 100 di dalamnya, dan menghitung bahwa 100 dikurangi 60 adalah 40. Sekarang dia tahu bahwa yang sebenarnya kita maksud adalah let `height` sama dengan 40. Jadi dia menjalankan perintah let itu: mengambil kotak baru, menulis `height` di atasnya, lalu memasukkan 40 ke dalamnya. Nanti, saat dia memakai `height`, dia cukup mengambil angka 40 itu lagi.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-3.webp"
  alt="Jiki mengambil kotak baru, menulis height di atasnya, dan memasukkan 40 ke dalamnya"
  width="462"
  height="400"
/>

Setelah semuanya berjalan di sebuah latihan, cobalah mengubah nilai-nilai variabel itu dan lihat apa yang terjadi. Perhatikan bagaimana nilainya membesar dan mengecil. Luangkan waktumu, dan pikirkan hubungan antara satu hal dengan yang lain.
