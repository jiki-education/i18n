---
title: "Animasi"
description: "Mengelabui mata agar melihat gerakan dengan mengecat ulang latar belakang dan menggambar ulang setiap frame di posisi yang sedikit berbeda."
en_md5: 536994294072afea52dab51d3bb7cab8
---

Sejauh ini, setiap kali kita memakai perulangan `repeat` (ulangi) untuk menggambar, setiap hal baru yang kita gambar menambahkan sesuatu ke gambar yang sudah ada. Kalau kita menggambar bata baru pada sebuah dinding, bata itu mengisi celah yang kosong. Kalau kita menggambar 10 lingkaran, kita melihat 10 lingkaran di layar. Rasanya seperti melukis. Setelah cat menempel di dinding, cat itu tidak hilang saat kamu melukis sesuatu yang baru di sebelahnya. Catnya tetap di sana. Tapi bagaimana kalau kita ingin membuat sesuatu terlihat bergerak?

Pernahkah kamu melihat flip book? Waktu saya masih kecil, buku ini sangat populer, sekarang tidak begitu lagi. Flip book adalah buku kecil yang setiap halamannya berisi gambar yang sedikit berbeda. Saat kamu membalik halamannya dengan cepat, matamu melihat gambarnya berubah, dan otakmu mengira ada sesuatu yang bergerak. Sebenarnya tidak ada yang bergerak. Yang ada hanyalah banyak gambar yang sedikit berbeda, satu demi satu. Dan begitulah cara animasi bekerja di dalam kode. Triknya sama. Sebelum menggambar adegan baru, kita mengecat seluruh kanvas dengan warna latar, mirip seperti membuka halaman baru di flip book kita, lalu kita membuat perubahan kecil pada adegan itu supaya terlihat seperti gerakan.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/flip-book-pages.webp"
  alt="Sebuah flip book yang menampilkan figur tongkat sedang berlari, setiap halaman sedikit berbeda sehingga figurnya tampak bergerak"
  width="500"
  height="274"
/>

Jadi, kalau kita ambil blok kode yang sudah akrab, yaitu menggambar lingkaran di sepanjang layar, kita membuat variabel `position` (posisi), lalu ada blok `repeat` tempat kita menggambar lingkaran dan menggeser `position` satu langkah ke kanan. Kalau blok `repeat` itu kita jalankan 100 kali, kita akan melihat 100 lingkaran di sepanjang layar.

```javascript
let position = 0
repeat(100) {
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circles-trail.webp"
  alt="Jejak 100 lingkaran biru yang digambar dari kiri ke kanan di sepanjang layar"
  width="500"
  height="197"
/>

Sekarang, lihat apa yang terjadi kalau kita menambahkan satu persegi panjang biasa sebelum menggambar lingkarannya, setiap kali.

```javascript
let position = 0
repeat(100) {
  rectangle(0, 0, 100, 100, "white")
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

Alih-alih jejak lingkaran, mata kita sekarang dikelabui sehingga melihat satu lingkaran yang tampak meluncur di sepanjang layar.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circle-glide-frames.webp"
  alt="Rangkaian frame, masing-masing berupa kanvas putih baru dengan satu lingkaran biru yang posisinya satu langkah lebih ke kanan"
  width="500"
  height="187"
/>

Setiap kali kita melewati perulangan, kita mengecat latar yang benar-benar baru, menutupi semua yang ada sebelumnya, lalu menggambar lingkaran di posisi barunya.

Setiap putaran dalam perulangan itu seperti halaman baru di flip book.

Dan hal penting yang perlu dipahami di sini adalah kita tidak sedang menggerakkan lingkarannya. Lingkaran itu bukan objek yang bergeser melintasi layar. Dia cuma gambar. Setiap putaran, kita mengecat menimpa gambar lama, lalu membuat gambar yang benar-benar baru sedikit ke kanan. Matamu menyatukan semuanya dan melihat gerakan, padahal sebenarnya itu hanya banyak gambar terpisah, satu demi satu.

Kamu bisa memakai ide ini untuk membuat matahari terbenam. Kamu gerakkan mataharinya, ubah ukurannya, ubah warnanya. Tekniknya tetap sama. Tetapkan beberapa variabel, cat latar yang baru, lalu gambar semuanya. Perbarui variabelnya, lalu ulangi.
