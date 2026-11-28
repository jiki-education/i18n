---
title: "Perulangan di dalam perulangan"
description: "Menaruh satu perulangan di dalam perulangan lain sehingga perulangan dalam berjalan sepenuhnya untuk setiap langkah perulangan luar, yang sangat cocok untuk grid."
en_md5: 4ca3e15c1737b6e8cf2f03a56d23a887
---

Misalnya kita ingin membuat satu baris bunga. Kita bisa menulis kode seperti ini. Kita menentukan posisi, kita menanam satu bunga, kita menambah posisinya dengan 10, kita ulangi, dan kita mendapatkan satu baris bunga yang rapi.

```javascript
let x = 10
repeat(5) {
  plant(x, 50, 10)
  x = x + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/single-row-flowers.webp"
  alt="Jiki di depan papan tulis dengan satu baris bunga rapi yang tertanam di bawahnya"
  width="406"
  height="400"
/>

Tapi bagaimana kalau kita ingin grid bunga yang punya baris dan kolom? Mungkin empat baris dengan lima bunga di setiap baris.

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/grid-question.webp"
  alt="Grid bunga empat kali lima dengan Jiki sedang memikirkan cara menggambarnya"
  width="383"
  height="400"
/>

Kita sudah punya perulangan yang menggambar satu baris bunga. Bagaimana caranya supaya perulangan itu bisa menggambar empat baris? Atau apa yang bisa kita lakukan untuk menggambar empat baris?

Salah satu pilihannya adalah menyalin dan menempel perulangan itu empat kali, lalu mengubah posisi atasnya untuk masing-masing. Itu memang berhasil. Tidak ada masalah. Tapi jadi berulang-ulang, dan ada cara yang lebih baik. Kita tahu kalau kode berulang-ulang, kita bisa memakai perulangan untuk menyederhanakannya.

Jadi di sini kita bisa memakai satu perulangan di dalam perulangan lain. Satu perulangan untuk baris, dan satu lagi untuk bunga di baris itu. Mari kita mulai dengan menambahkan perulangan `repeat` di sekitar kode yang sudah ada, supaya kamu bisa merasakan cara kerjanya. Dan kita akan mengulangnya sekali saja. Jadi kita meminta Jiki melakukan semua yang ada di dalam tanda kurung kurawal luar ini satu kali. Hasilnya persis sama dengan tidak memakai perulangan luar sama sekali. Kita meminta Jiki mengulang sesuatu satu kali, yang sama saja dengan meminta Jiki melakukannya tanpa `repeat`. Tapi beginilah cara kode ini bekerja. Ini kode yang sah dan valid. Kita punya satu perulangan di dalam perulangan lain.

Jadi sekarang, apa yang terjadi kalau perulangan luar itu kita ubah supaya mengulang dua kali? Sekarang Jiki akan menjalankan bagian `plant` (menanam) lima kali itu dua kali. Dia akan menanam 10 bunga. Tapi semua bunga itu akan berada di baris yang sama.

Sama seperti kita perlu menggeser posisi dari kiri ke kanan sedikit setiap kali, setelah menggambar satu baris penuh kita juga perlu menggeser posisi vertikalnya. Jadi bagaimana caranya? Kita bisa menambahkan variabel luar untuk posisi atas, memakainya di fungsi `plant`, lalu menambahnya dengan 10 setelah setiap baris.

Jadi coba telusuri nilai setiap variabel di setiap langkah. Posisi atas mulai dari 10. Untuk lima kali pertama kita menanam, nilainya tetap seperti itu. Posisi kirinya bertambah. Lalu kita menambahkan 10 lagi ke posisi atas itu, dan kita menanam lima bunga lagi sedikit lebih ke bawah. Posisi kiri kita atur ulang kembali ke 10, lalu kita naikkan lagi setiap kali.

Dan sekarang kita bisa bilang ulangi ini empat kali, dan kita akan mendapatkan empat baris yang masing-masing berisi lima tanaman.

```javascript
let y = 10
repeat(4) {
  let x = 10
  repeat(5) {
    plant(x, y, 10)
    x = x + 10
  }
  y = y + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/flower-grid-result.webp"
  alt="Grid bunga empat kali lima yang sudah selesai, dengan Jiki yang gembira mengacungkan dua jempol"
  width="389"
  height="400"
/>

Hal penting yang perlu dipahami adalah Jiki menyelesaikan semua pekerjaan di perulangan dalam (bahasa Inggris: _inner loop_) sebelum kembali ke perulangan luar (bahasa Inggris: _outer loop_). Dia tidak bolak-balik. Dia menyelesaikan perulangan dalam, lalu lanjut ke langkah berikutnya di perulangan luar.

Dalam situasi ini, kamu bisa membayangkan perulangan luar sebagai pengatur kelompok atau barisnya, dan perulangan dalam sebagai pengatur setiap item di kelompok itu, atau setiap item di baris itu. Jadi dalam contoh kita, perulangan luar membuat empat baris, dan perulangan dalam menaruh lima tanaman, lima item, di setiap kelompok.
