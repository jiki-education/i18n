---
title: "Memperbarui dictionary"
description: "Menggunakan `dict[key] = value` untuk memperbarui entri yang sudah ada atau menambahkan entri baru, plus method `has` untuk mengecek key."
en_md5: 5dfff7e37d863711be783b2fbe0873a4
---

Kamu sudah tahu cara membuat dictionary dan mengambil nilai darinya. Tapi apa yang terjadi kalau datanya berubah? Suatu saat nanti, umurku akan bertambah. Umurku bukan lagi `42`, tapi `43`.

Jadi bagaimana cara memperbarui dictionary? Kita pakai cara yang sangat mirip dengan saat mencari sesuatu. Kamu tahu kan bahwa kita mencari sesuatu dengan tanda kurung siku untuk mengambil nilainya. Nah, kita juga bisa memakai tanda kurung siku yang diikuti tanda sama dengan untuk memperbarui dictionary. Jiki menuju kotak person, mengeluarkan halaman buku catatan, menemukan key `"age"`, lalu menghapus `42` yang ada di sana dan menulis `43` di tempatnya, kemudian halaman buku catatan itu kembali masuk ke kotak. Ini mengubah dictionary itu sendiri.

```javascript
person["age"] = 43
```

Jiki tidak membuat dictionary baru. Dia mengubah buku catatan yang sudah ada di dalam kotak.

Bagaimana kalau kamu ingin menambahkan informasi yang sebelumnya belum ada? Kamu bisa melakukan hal yang persis sama.

Kalau kamu menentukan key yang belum ada, Jiki akan langsung menambahkan key baru di bagian bawah dengan nilai itu.

Jadi dalam kasus ini, dia akan membuka buku catatannya, mencari `"country"`, melihat bahwa key itu tidak ada, lalu menambahkan baris baru di bagian bawah, `"country"` di kiri, `"England"` di kanan.

```javascript
person["country"] = "England"
```

Jadi sintaksnya persis sama dengan saat mengubah nilai. Jiki menangani keduanya secara otomatis. Kalau key-nya sudah ada, dia memperbaruinya. Kalau belum ada, dia menambahkannya. Kamu tidak perlu melakukan apa pun secara khusus.

Dan sama seperti kamu bisa mulai dengan array kosong lalu push sesuatu ke dalamnya, kamu juga bisa mulai dengan dictionary kosong dan menambahkan key satu per satu. Lagi-lagi, ini pola yang sangat umum. Kamu akan sering melihatnya.

Salah satu penggunaan dictionary yang umum adalah untuk menyimpan hitungan banyak hal. Kamu bisa menentukan key sebagai hal-hal yang ingin kita hitung, dan nilainya sebagai jumlah hitungannya. Jadi bayangkan kamu sedang mengamati burung dan ingin melacak berapa banyak setiap jenis burung yang kamu lihat. Setiap kali kamu melihat seekor burung, kamu menetapkan hitungannya menjadi satu, lalu setiap kali kamu melihatnya lagi, kamu mengambil nilai saat ini dan menambahkannya satu. Supaya pola ini berhasil, kita butuh cara untuk memeriksa apakah dictionary sudah punya key itu, sehingga kita tinggal menambahkan satu, atau kalau key itu belum ada, kita perlu memulainya dari satu.

Dan untuk melakukan itu, kita punya sebuah method pada dictionary, yaitu method `has` (memiliki).

Kamu menentukan key yang kamu minati, dan Jiki akan memeriksa apakah dictionary punya key itu atau tidak, lalu mengembalikan benar atau salah sesuai hasilnya.

```javascript
person.has("age") // true
```

Kalau kita gabungkan semuanya, pola menghitungnya jadi seperti ini:

```javascript
if (counts.has(letter)) {
  counts[letter] = counts[letter] + 1
} else {
  counts[letter] = 1
}
```
