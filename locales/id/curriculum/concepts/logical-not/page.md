---
title: "Operator `!` (Not)"
description: "Memakai `!` untuk membalik boolean: benar jadi salah dan salah jadi benar, berguna untuk membalik nilai atau membalik hasil pengecekan."
en_md5: 5d752c7a85e6e17d914c73c83429de80
---

Sejauh ini, saat kita membandingkan dua hal untuk melihat apakah keduanya sama, kita memakai tiga tanda sama dengan. Tapi kadang-kadang kita ingin memeriksa apakah dua hal tidak sama, dan untuk itu kita memakai tanda seru diikuti dua tanda sama dengan. Dan secara umum, dalam pemrograman, tanda seru atau _bang_ (begitu sebutan teman-teman Amerika kita untuk tanda seru) berarti tidak. Jadi bayangkan kamu bekerja di sebuah toko, dan manajemen sudah memutuskan bahwa pakaian disko tidak boleh masuk.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/shop-bouncer.webp"
  alt="Seorang penjaga pintu di depan toko memeriksa pakaian orang-orang yang mengantre"
  width="451"
  height="400"
/>

Kita bisa bilang, "Kalau pakaiannya bukan disko, buka pintunya." Percabangan `if` bekerja dengan cara yang persis sama.

```javascript
if (outfit !== "disco") {
  openDoor()
}
```

Bedanya, kondisinya mengembalikan nilai benar kalau kedua hal itu berbeda, dan mengembalikan nilai salah kalau keduanya sama. Jadi kita bisa menulis hal yang sama dengan cara lain: "Kalau pakaiannya disko, tidak usah lakukan apa-apa. Kalau bukan, buka pintunya." Tapi secara umum, memakai operator `not` lebih mudah dan lebih rapi supaya kamu benar-benar tahu dan bisa mengatakan maksudmu.

Ada satu hal lagi yang berkaitan dengan ini. Kadang kamu punya variabel yang bernilai benar, dan kamu ingin membaliknya jadi salah. Atau kamu punya sesuatu yang bernilai salah, dan kamu ingin membaliknya jadi benar. Ini bisa kita pakai untuk melacak sesuatu. Jadi bayangkan ada sesuatu yang memantul dari kiri ke kanan, dan kita punya variabel bernama `movingRight` (bergerak ke kanan), yang bernilai benar saat kamu seharusnya bergerak ke kanan. Tapi kamu ingin membalik (bahasa Inggris: _toggle_) nilainya jadi salah, yaitu saat kamu mencapai tepi kanan.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/pong-court.webp"
  alt="Lapangan bergaya Pong dengan bet dan bola yang memantul dari sisi ke sisi, menggambarkan cara membalik variabel movingRight"
  width="500"
  height="352"
/>

Jadi kita bisa melakukannya dengan menulis, "Kalau `movingRight` sama dengan benar, `movingRight` jadi salah. Kalau tidak, `movingRight` jadi benar." Itu salah satu cara membalik variabelnya. Jadi Jiki akan melihat `movingRight` untuk mengecek apakah nilainya benar atau salah, lalu mencari kebalikannya dan menaruh nilai itu kembali ke dalam kotak.

```javascript
if (movingRight === true) {
  movingRight = false
} else {
  movingRight = true
}
```

Tapi ada cara yang lebih rapi untuk melakukan ini, yaitu memakai tanda seru atau bang yang sama:

```javascript
movingRight = !movingRight
```

Dan itu membaliknya. `!movingRight` berarti kebalikan dari nilai apa pun sebelumnya.

Jadi kalau `movingRight` tadinya benar, sekarang jadi salah. Kalau tadinya salah, sekarang jadi benar. Jiki mengambil isi kotak saat ini, dan bang itu memberitahunya untuk mencari kebalikannya. Kebalikan dari benar adalah salah. Kebalikan dari salah adalah benar. Lalu Jiki menaruhnya kembali ke dalam kotak. Ini persis sama dengan percabangan `if`/`else` yang lebih panjang tadi, cuma jauh lebih rapi dan lebih ringkas saat ditulis.
