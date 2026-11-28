---
title: "Memperbarui variabel"
description: "Mengubah isi variabel saat program berjalan, sehingga kamu bisa melacak posisi, hitungan, skor, dan nilai lain yang terus berubah."
en_md5: f9b2fbb6bfd82a620b093e88951ff841
---

Sejauh ini, ketika kita membuat variabel, kita menaruh nilai di dalam kotak lalu mengambilnya lagi nanti. Itu sangat berguna untuk membuat kode kita lebih jelas dan mengurangi hitungan di kepala yang mungkin harus kita lakukan. Tapi manfaat sesungguhnya dari variabel datang dari kemampuan mengubah isi kotak, isi variabel, sepanjang program berjalan. Jadi walaupun kita menjalankan potongan kode yang sama berkali-kali, hasilnya bisa berbeda tergantung apa yang ada di dalam kotak-kotak itu.

Misalnya kita ingin menanam bunga di taman. Kita punya fungsi `plant` (menanam) yang praktis, dengan satu input untuk posisi tempat kita ingin menaruh bunganya. Jadi kalau kita ingin menaruh bunga 10 dari tepi, kita tulis seperti ini:

```javascript
plant(10)
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/flowers-same-spot.webp"
  alt="Bunga yang ditanam di taman di samping papan tulis Jiki"
  width="406"
  height="400"
/>

Bagaimana kalau kita ingin menanam delapan bunga? Kita bisa saja menulis `plant(10)`, `plant(20)`, `plant(30)`, dan seterusnya, tapi itu cukup melelahkan.

Dan kita sudah belajar sesuatu yang membantu kita menggantikan kode yang melelahkan seperti ini. Pakai perulangan! Pakai blok `repeat`! Jadi mari kita atur posisinya menjadi 10, lalu buat perulangan di mana kita memanggil `plant`, kita menggunakan fungsi `plant`, delapan kali.

```javascript
let position = 10
repeat(8) {
  plant(position)
}
```

Menurutmu apa yang akan terjadi?

Jadi, Jiki akan menanam delapan bunga, tapi dia menanamnya di tempat yang sama setiap kali, dan itu jelas bukan yang kita mau. Jadi mari kita luangkan waktu sejenak untuk memikirkan apa yang Jiki lakukan di sini. Dia membuat kotak dengan label position. Dia menaruh 10 di dalamnya. Lalu dia menjalankan mesin `plant` delapan kali. Setiap kali, dia mengambil nilai dari kotak position. Nilainya selalu 10, dan dia memasukkan angka 10 yang sama setiap kali.

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-loop-walkthrough.webp"
  alt="Jiki mengambil kotak position dari rak dan memasukkan nilai 10 ke dalam mesin plant"
  width="400"
  height="400"
/>

Jadi yang kita butuhkan adalah cara untuk bergerak sedikit demi sedikit setiap kali. Setelah kita menanam satu bunga, kita ingin memberi tahu Jiki untuk memajukan posisinya sejauh 10, supaya siap menanam bunga berikutnya.

Sekarang, mari kita lupakan kode sejenak. Secara logika, seperti apa caranya? Kalau aku bilang, “Tanam bunga pertama di 10, lalu berikutnya di 20, lalu berikutnya di 30,” bagaimana otakmu tahu bahwa bunga berikutnya harus ditanam di 40 dan setelah itu di 50?

Yang dilakukan otakmu adalah melacak angka saat ini dan menambahkan 10 ke angka itu, lalu memperbarui angka tersebut di kepalamu.

Dan kita bisa melakukan hal yang persis sama dalam kode. Untuk itu, kita bilang, “Perbarui (bahasa Inggris: _update_) kotak position agar berisi nilai position saat ini ditambah 10.”

Ketika Jiki melihat ini, dia akan mengambil angka saat ini dari kotak position, menambahkan 10 ke angka itu, melakukan perhitungan tersebut, menjumlahkannya, lalu menaruh hasilnya kembali ke kotak untuk dipakai nanti.

```javascript
position = position + 10
```

<img
  class="concept-image"
  src="/static/images/concept-assets/updating-variables/jiki-updating-box.webp"
  alt="Jiki mengambil 10 dari kotak position, menambahkan 10 sehingga menjadi 20, dan menaruh 20 kembali ke dalam kotak"
  width="427"
  height="400"
/>

Jadi kalau kita tambahkan ini ke program kita, sehingga sekarang kita bilang, “Atur nilai awal position menjadi 10,” lalu delapan kali menanam bunga di posisi itu, dan kemudian mengubah position menjadi 10 lebih besar dari sebelumnya, kode kita berjalan, dan kita mendapat delapan bunga yang berjarak.

Perhatikan bahwa tidak ada `let` (membuat variabel baru) saat kita memperbarui variabel. Itu sangat penting. Ketika Jiki melihat `let`, dia membuat kotak baru. Tapi di sini, kita tidak ingin membuat kotak baru. Kita ingin mengubah isi kotak yang sudah kita punya.

Perhatikan juga bahwa kita hanya membuat kotak itu sekali, di luar perulangan. Itu penting untuk diingat. Buat kotaknya sekali di awal, lalu perbarui setiap kali perulangan berjalan.

Kita bisa memperbarui isi kotak, dan kita bisa memakai kemampuan itu untuk melacak sesuatu yang berubah seiring waktu. Pola ini akan terus kamu pakai: melacak posisi, menghitung berapa kali sesuatu terjadi, menyimpan skor. Kapan pun kamu perlu mengingat sesuatu yang berubah saat program berjalan, inilah caranya.
