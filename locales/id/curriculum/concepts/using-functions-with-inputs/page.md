---
title: "Input fungsi"
description: "Memasukkan nilai ke lubang input sebuah fungsi agar yang dilakukannya berubah setiap kali dijalankan."
en_md5: 0bd82377f2407de5fe030511752d5503
---

Salah satu hal paling hebat tentang mesin, tentang fungsi, adalah banyak di antaranya membiarkanmu memasukkan informasi ke dalamnya, dan informasi itu mengubah apa yang mereka lakukan saat kamu menjalankannya.

Sejauh ini, kita sudah melihat mesin yang bentuknya agak mirip kotak, seperti mesin `move` (bergerak).

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/move-machine.webp"
  alt="Mesin move, kotak polos tanpa lubang input"
  width="322"
  height="400"
/>

Tapi sebagian mesin punya lubang, seperti mesin `walk` (berjalan) ini. Mesin `walk` sama saja dengan mesin `move`. Mesin ini memindahkan karakter ke depan, bedanya Jiki bisa memakai lubang itu untuk menentukan berapa langkah karaktermu harus berjalan ke depan. Jadi daripada memakai fungsi `move` tiga kali berturut-turut, `move`, `move`, `move`, sekarang kamu cukup memakai fungsi `walk` dan menyuruh Jiki memasukkan angka tiga ke dalam mesin.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/walk-machine-slot.webp"
  alt="Mesin walk, dengan lubang input di atasnya untuk jumlah langkah"
  width="481"
  height="400"
/>

Untuk melakukannya di dalam kode, kita tetap menulis nama fungsinya, dalam hal ini `walk`, dan kita tetap membuka tanda kurung. Tapi sebelum menutupnya, kita tuliskan apa yang kita ingin menjadi _input_ (masukan). Jadi dalam kasus ini, kita ingin input-nya tiga, untuk menyuruh `walk` melangkah tiga langkah ke depan:

```javascript
walk(3)
```

Ketika Jiki melihatnya, ia akan mengambil angka tiga itu, dan kamu bisa membayangkan angka itu seperti sekeping koin kecil, lalu ia memasukkannya ke lubang input mesin sebelum memutar tuasnya untuk menyalakannya.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/jiki-coin-into-slot.webp"
  alt="Jiki menjatuhkan angka 3 seperti koin ke lubang mesin walk, lalu memutar tuasnya"
  width="421"
  height="400"
/>

Untuk fungsi yang menggambar persegi panjang dan lingkaran, kamu perlu menyuruh Jiki memasukkan beberapa angka yang berbeda, misalnya seberapa jauh dari kiri, seberapa jauh dari atas, lebar persegi panjang, dan tinggi persegi panjang.

Di dunia Jiki, itu semua hanyalah lubang-lubang yang berbeda, satu untuk masing-masing angka tersebut.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-inputs/two-machines-inputs.webp"
  alt="Mesin persegi panjang dengan lubang untuk left, top, width, dan height, serta mesin lingkaran dengan lubang untuk cx, cy, dan radius"
  width="396"
  height="400"
/>

Jadi di dalam kode, kita cukup menulis setiap angka lalu menaruh koma di antaranya. Nama fungsi, tanda kurung buka, satu angka untuk tiap input, semuanya dipisahkan koma, lalu kita tutup tanda kurungnya:

```javascript
rectangle(10, 20, 30, 40)
```

Kalau kamu mencoba memakai fungsi dengan jumlah input yang salah, kamu akan mendapat error. Misalnya, kalau kamu mencoba memasukkan satu input ke mesin yang tidak punya lubang, Jiki akan bilang bahwa kamu tidak bisa. Dan kalau kamu memakai mesin yang punya lubang input tapi tidak memberi tahu Jiki apa yang harus dimasukkan, ia juga akan berhenti dan mengeluh. Coba saja kalau kamu sedang merasa agak nakal, lalu lihat apa yang terjadi. Kamu akan membuat banyak kesalahan seperti ini seiring hal-hal menjadi lebih rumit. Coba jangan stres atau kesal karenanya. Kita semua belajar dari kesalahan. Itu benar-benar cara tercepat bagi otak kita untuk menyerap sesuatu. Dan semua orang membuat kesalahan ini. Kita semua mulai dari nol, jadi jangan stres.

Satu hal lain yang perlu disebut: kadang di dalam latihan, kamu akan melihat baris yang diawali dua garis miring, `//`. Itu namanya komentar. Komentar adalah catatan pribadi untukmu yang akan sepenuhnya diabaikan Jiki. Jadi kalau Jiki melihat baris yang diawali dua garis miring ini, ia akan melangkahinya begitu saja, dan lanjut ke baris berikutnya. Komentar memberimu cara untuk menulis catatanmu sendiri. Komentar sangat berguna untuk mengingatkanmu tentang cara kerja sesuatu. Sering kali komentar sudah dituliskan untukmu juga, jadi saat kamu memulai sebuah latihan, komentar itu mungkin menyarankan di mana kamu perlu menulis kode atau bagaimana menyelesaikan sesuatu. Tapi silakan tambahkan komentarmu sendiri juga.

Di bagian bawah instruksi sebuah latihan, kamu akan melihat informasi tentang fungsi-fungsi yang bisa kamu pakai, termasuk persis input apa yang perlu kamu masukkan.
