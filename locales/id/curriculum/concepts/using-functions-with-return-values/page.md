---
title: "Fungsi yang mengembalikan sesuatu"
description: "Menangkap nilai yang keluar dari saluran keluaran sebuah fungsi dan memakainya di dalam code."
en_md5: 830f19fb6aaf184c1f32ade792b60a12
---

Sejauh ini kita sudah melihat fungsi-fungsi yang melakukan sesuatu di dunia nyata. Jadi, fungsi `circle` (lingkaran) menggambar sebuah lingkaran. Fungsi `move` (gerakkan) memindahkan karaktermu. Tapi ada juga fungsi yang bekerja dengan cara berbeda. Alih-alih melakukan sesuatu di luar sana, fungsi-fungsi ini memberimu sesuatu yang bisa kamu pakai di dalam code. Saat sebuah fungsi memberikan sesuatu kembali kepada Jiki untuk dipakai di dalam code, kita katakan bahwa fungsi itu mengembalikan (bahasa Inggris: _returning_) sesuatu. Fungsi itu mengembalikan sesuatu keluar kepada Jiki. Kamu bisa membayangkan mesin-mesin ini punya saluran keluaran. Kita sudah punya lubang tempat memasukkan benda, tapi mesinnya juga bisa punya satu lubang keluaran, atau saluran tempat sesuatu bisa keluar lagi. Saat Jiki menekan tombol di mesin itu, mesinnya berdengung dan bekerja, lalu pada akhirnya ada sesuatu yang muncul keluar dari saluran itu. Bisa berupa angka. Bisa juga berupa string. Intinya, itu sesuatu yang bisa ditangkap dan dipakai oleh Jiki.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/machine-with-return-chute.webp"
  alt="Mesin dengan saluran keluaran di salah satu sisinya, siap mengirim sebuah nilai kembali keluar kepada Jiki"
  width="500"
  height="317"
/>

Sebagian besar fungsi, mungkin 95% di antaranya, mengembalikan sesuatu. Mungkin fungsi itu menghitung sesuatu untukmu lalu mengembalikan nilainya, atau menggabungkan beberapa string lalu memberimu string hasilnya. Atau mungkin fungsi itu memberimu waktu saat ini setiap kali kamu menjalankan mesin tersebut. Mari kita lihat contoh yang terakhir ini. Misalkan kita punya fungsi bernama `getCurrentTime` (ambil waktu saat ini). Setiap kali Jiki menjalankan mesinnya, secarik kertas meluncur keluar dari saluran keluaran dengan waktu tertulis di atasnya, mungkin 14:35.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/paper-out-of-chute.webp"
  alt="Mesin getCurrentTime dengan secarik kertas bertuliskan 14:35 yang meluncur keluar dari saluran keluarannya"
  width="500"
  height="312"
/>

Lalu nilai yang dikembalikan itu bisa kita masukkan ke dalam kotak dengan `let`:

```javascript
let time = getCurrentTime()
```

Jiki akan menjalankan mesinnya, mengambil waktu saat ini dari saluran, lalu menyimpannya di dalam kotak bernama `time`.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/jiki-boxing-time.webp"
  alt="Jiki memasukkan kertas bertuliskan 14:35 dari saluran ke dalam kotak berlabel time"
  width="372"
  height="400"
/>

Nah, penting untuk dipahami bahwa kertas yang dimasukkan Jiki ke dalam kotak sudah tetap pada saat itu juga. Walaupun waktu sebenarnya berubah selama programmu berjalan, kotaknya tetap berisi kertas bertuliskan 14:35 itu. Begitu sesuatu sudah masuk ke dalam kotak, isinya tetap. Tidak akan berubah secara ajaib. Kalau nanti kita ingin memasukkan waktu saat ini ke dalam kotak itu lagi, kita perlu memakai fungsi `getCurrentTime` lagi untuk mengambilnya.

Sebagian besar fungsi yang mengembalikan sesuatu juga punya input. Misalnya, kita mungkin punya fungsi `join` (gabungkan) yang menerima dua string sebagai input dan mengembalikannya dalam keadaan sudah tergabung dengan satu spasi. Jadi kalau kita memakai mesin `join` dengan input `"Hello"` dan `"World"`, dari saluran akan keluar satu string bertuliskan `"Hello World"`.

```javascript
join("Hello", "World"); // "Hello World"
```
