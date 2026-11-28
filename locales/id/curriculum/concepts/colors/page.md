---
title: "Warna"
description: "Dua cara untuk menentukan warna apa pun yang kamu mau. RGB mencampur cahaya merah, hijau, dan biru. HSL memakai hue, saturasi, dan kecerahan."
en_md5: a0eea0481b975e45f75774d83966a4a7
---

Kalau kamu suatu saat membuat sesuatu yang visual dengan kode (dan walaupun kamu ingin menjadi data scientist dan menganggap semua urusan menggambar itu agak membosankan, menyampaikan data lewat visual tetap keterampilan penting), ada dua cara berbeda untuk menyatakan warna. Kamu sudah memakai warna dengan namanya, seperti “red” atau “yellow”, sebagai input terakhir di fungsi menggambarmu, dan itu cara yang praktis untuk cepat memakai warna, tapi cukup terbatas. Nama warna yang bisa kita pakai hanya sedikit. Jadi sekarang kita akan melihat dua cara untuk menyatakan warna apa pun yang kamu mau, dan keduanya disebut RGB dan HSL.

RGB membuat kita bisa membayangkan warna sebagai campuran merah, hijau, dan biru. Itulah kepanjangan RGB: merah (bahasa Inggris: _red (R)_), hijau (bahasa Inggris: _green (G)_), biru (bahasa Inggris: _blue (B)_). Kalau kamu ingat pelajaran mencampur cat di sekolah, idenya mirip, hanya saja yang kita campur bukan cat, melainkan cahaya.

Di banyak latihan, kamu akan menemukan fungsi bernama `rgb`, yang menerima tiga angka sebagai input, satu untuk merah, satu untuk hijau, satu untuk biru, lalu mengembalikan sebuah warna.

Angka yang bisa kamu pakai sebagai input berkisar dari nol sampai `255`. Nol berarti aku tidak mau warna itu sama sekali, dan `255` berarti campur sebanyak mungkin warna itu. Jadi kalau kita memakai fungsi `rgb` dengan `255`, nol, dan nol sebagai input, artinya aku mau semua merahnya. Ingat, `255` adalah angka terbesar yang bisa kamu masukkan. Tapi kita tidak mau hijau atau biru, jadi keduanya nol. Hasilnya keluar warna merah, dan kita bisa menyimpan merah itu di sebuah variabel lalu memakainya di fungsi `circle` seperti yang sudah kita lakukan dengan string nama warna. Lalu bagaimana kalau kita memakai fungsi `rgb` dengan nol, `255`, nol? Sekarang artinya tidak ada merah, semua hijau, tidak ada biru. Jadi kita mendapat lingkaran hijau. Bagaimana kalau kita mau kuning? Kuning adalah campuran merah dan hijau. Jadi kita bisa bilang beri aku semua merah, semua hijau, dan tidak ada biru, dan itu akan menghasilkan kuning. Kita juga bisa memakai angka yang lebih kecil. Jadi kalau kita mau sedikit merah, tidak ada hijau, dan banyak biru, kita akan mendapat ungu. Lalu banyak merah, sedikit hijau, biru agak lebih banyak, itu menghasilkan merah muda. Jadi itulah RGB. Kita mencampur merah, hijau, dan biru untuk mendapat berbagai kombinasi.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/rgb-intro.webp"
  alt="Tiga lingkaran cahaya merah, hijau, dan biru yang saling tumpang tindih dan bercampur menghasilkan kuning, magenta, sian, dan putih"
  width="500"
  height="390"
/>

```javascript
let red = rgb(255, 0, 0)
let green = rgb(0, 255, 0)
let yellow = rgb(255, 255, 0)
let pink = rgb(230, 50, 170)
```

Sekarang mari kita lihat HSL, yang memberi kita cara berpikir yang sama sekali berbeda tentang warna. HSL adalah singkatan dari hue (H), saturasi (S), dan kecerahan (L). Sama seperti RGB, kamu punya fungsi bernama `hsl` yang menerima tiga angka, satu untuk hue, satu untuk saturasi, dan satu untuk kecerahan, lalu mengembalikan sebuah warna. Mari kita urai arti ketiga kata itu.

Hue adalah nuansa warna (bahasa Inggris: _shade_) yang kamu mau, dan nilainya dari nol sampai 360. Coba bayangkan pelangi. Beginilah cara aku memikirkannya. Di sebelah kiri ada merah, lalu oranye, kuning, hijau, biru, ungu, dan sebenarnya kita kembali lagi ke merah. Jadi kalau kamu bilang nol, kamu mulai dari kiri, dan itu merah. Kalau kamu bilang `120`, kamu meminta hijau. `230` adalah biru. Kamu juga bisa menganggapnya sebagai roda warna (bahasa Inggris: _color wheel_), dan itulah sebenarnya angka 360 itu. Itu adalah jumlah derajat dalam lingkaran. Aku selalu mencari angkanya di internet, jadi tidak perlu khawatir menghafalnya, tapi senang juga tahu apa yang sedang terjadi. Jadi itulah hue, yaitu nuansanya. Berikutnya ada saturasi, yaitu seberapa hidup warnanya. Nilainya dari nol sampai 100. Di angka nol, kamu hanya mendapat abu-abu. Tidak ada warna, tidak ada ton sama sekali di situ. Di angka 100, kamu mendapat warna penuh, hidup, dan menyala. Lalu ada kecerahan. Kecerahan adalah seberapa terang warnanya, dan nilainya juga dari nol sampai 100. Di angka nol, kamu mendapat hitam. Apa pun hue yang kamu pilih, hasilnya hitam. Tidak ada cahaya di dalamnya. Dan di angka 100, kamu mendapat putih. Apa pun yang lain, semuanya penuh cahaya, jadi putih. Angka 50 tepat di tengah, warna yang normal. Jadi kamu bisa membayangkan ini sebagai slider untuk membuat warna lebih terang atau lebih gelap.

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/hsl-intro.webp"
  alt="Sebuah pelangi dan sebuah roda warna yang menunjukkan hue bergerak dari 0 (merah) ke 120 (hijau) ke 240 (biru)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/saturation-slider.webp"
  alt="Slider saturasi dari 0 (abu-abu), melewati 50, sampai 100 (magenta cerah)"
  width="500"
  height="398"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/colors/lightness-slider.webp"
  alt="Slider kecerahan dari 0 (hitam), melewati 50 (warna penuh), sampai 100 (putih)"
  width="500"
  height="398"
/>

Jadi kalau kita mau lingkaran merah biasa, yang dengan RGB kita tulis sebagai 255, nol, nol, yaitu semua merah, tanpa hijau, tanpa biru, di sini kita memakai nol, 100, 50. Nol untuk hue merah, 100 untuk saturasi, warna penuh, dan 50 untuk kecerahan, yang merupakan tingkat kecerahan normal. Kalau kita mau menjadikannya lingkaran hijau, kita cukup mengubah hue-nya menjadi `120`. Kalau kita mau membuatnya hijau yang lebih gelap, kita bisa menurunkan kecerahannya sampai `25`.

Kalau kita mau membuatnya hijau yang lebih kusam, kita bisa mengurangi sebagian warnanya, sebagian saturasinya, misalnya menurunkannya ke `30`.

Kalau kamu mau merah muda cerah yang menyala, hue sekitar 300 adalah merah muda, lalu kita naikkan saturasinya ke 100 supaya benar-benar hidup, dan kita juga menaikkan kecerahannya ke sekitar 60.

```javascript
let red = hsl(0, 100, 50)
let green = hsl(120, 100, 50)
let darkGreen = hsl(120, 100, 25)
let dullGreen = hsl(120, 30, 50)
let hotPink = hsl(300, 100, 60)
```

Jadi kita punya dua cara berbeda untuk menyatakan warna, dan keduanya berguna di situasi yang berbeda. RGB bagus saat kamu ingin mengatur satu komponen tertentu: seberapa banyak merah, seberapa banyak hijau, seberapa banyak biru. HSL bagus saat kamu ingin berputar-putar melewati warna-warna. Kalau kamu mau pelangi, kamu cukup terus menaikkan hue-nya.
