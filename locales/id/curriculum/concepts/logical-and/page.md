---
title: "Operator `&&` (Dan)"
description: "Menggabungkan dua kondisi dengan `&&` sehingga seluruh kondisi hanya benar kalau kedua bagiannya benar."
en_md5: cef8d76c4235e85573c3eeede294ab72
---

Kalau aku memintamu membuka pintu hanya jika ada orang yang usianya di atas 20 tahun, kamu mungkin sudah tahu harus berbuat apa. Tapi bagaimana kalau kamu perlu memeriksa apakah seseorang berusia di atas 20 tahun _dan_ memakai pakaian yang benar? Jadi kamu harus memeriksa dua kondisi yang berbeda sekaligus. Bagaimana caramu melakukannya?

Mungkin kamu bisa memakai percabangan `if` yang bersarang (bahasa Inggris: _nested_), mirip dengan perulangan bersarang yang pernah kita pakai sebelumnya. Jadi kamu bisa bilang, kalau `age` lebih besar dari `20`, kita masuk ke blok kode ini, lalu satu lagi `if` kalau `outfit` sama dengan `"disco"`, lalu satu tanda kurung kurawal lagi dan blok kode baru. Cara itu memang berhasil, tapi hasilnya jadi cukup berantakan, apalagi kalau kamu punya banyak percabangan.

Syukurlah, ada cara yang lebih mudah, yaitu dengan membuat kondisi yang punya beberapa bagian. Daripada hanya memeriksa satu hal dalam satu kondisi, kita bisa memeriksa dua, tiga, atau bahkan lebih banyak hal. Untuk melakukannya, kita perlu memakai kata kunci `and`. Sayangnya, di JavaScript, kata kunci and sebenarnya bukanlah kata and, padahal di beberapa bahasa pemrograman lain memang begitu. Sebagai gantinya, kamu harus menaruh dua ampersand bersebelahan. Mau tidak mau, kamu harus mengingat ini. Memang menjengkelkan, tapi begitulah adanya, dan lama-lama kamu akan terbiasa.

Jadi kita bisa memakai ini untuk membuat kondisi yang lebih rumit. Kita bisa bilang, kalau `age` lebih besar dari `20` dan `outfit`-nya `"disco"`, maka kita lanjut. Kalau `age` kurang dari `20` atau `outfit`-nya bukan `"disco"`, maka seluruh pernyataan itu, seluruh kondisinya, jadi salah. Kalau kamu pernah belajar logika, mungkin pernah membuat rangkaian elektronik, atau pernah mendalami matematika yang lebih lanjut, ini akan terasa sangat wajar. Kalau belum, kamu akan cepat memahaminya.

```javascript
if (age > 20 && outfit === "disco") {
  openDoor()
}
```

Ada satu hal yang sering bikin orang tersandung, baik saat memakai and maupun or, yaitu setiap sisi dari _and/or_ (dan/atau) harus berupa perbandingan yang lengkap. Jadi walaupun kamu membandingkan variabel yang sama di kedua sisi, kamu tetap harus mengulanginya. Kamu tidak bisa menulis `if age is greater than 13 and less than 20`. Kamu harus menulis `if age is greater than 13 and age is less than 20`. Kedua sisi harus berupa perbandingan yang lengkap.

```javascript
if (age > 13 && age < 20)
```
