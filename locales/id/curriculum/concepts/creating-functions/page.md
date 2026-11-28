---
title: "Menulis fungsi sendiri"
description: "Menggunakan kata kunci `function` untuk membuat mesinmu sendiri yang bisa Jiki letakkan di raknya dan pakai lagi."
en_md5: 93286a30a373b5604b60b3c109ad00a3
---

Sampai sekarang, kamu sudah memakai fungsi-fungsi yang dibuat untukmu, seperti `circle`, `rectangle`, `moveRight`, dan `shoot`. Semuanya adalah fungsi yang sudah dibuat lalu diletakkan di rak Jiki.

Tapi sekarang saatnya kamu mulai membuat fungsi sendiri.

Untuk menunjukkan caranya, kita akan membuat fungsi baru untuk labirin bernama `walk5` (berjalan lima langkah).

Fungsi ini akan selalu menggerakkan karakter lima langkah ke depan. Memang bukan fungsi paling berguna di dunia, tapi lumayan mudah untuk kita mulai.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/walk-grid.webp"
  alt="Karakter di atas grid labirin, siap berjalan lima langkah ke depan"
  width="500"
  height="314"
/>

Jadi kalau aku minta kamu menulis kode untuk menggerakkan karakter lima langkah ke depan, kamu bisa menulis `move` lima kali, atau memakai perulangan `repeat`. Di contoh ini, supaya semuanya sederhana, kita akan memakai cara menulis `move` lima kali berturut-turut.

```javascript
move()
move()
move()
move()
move()
```

Jadi itulah yang ingin kita masukkan ke dalam fungsi kita.

Sekarang, tambahkan satu baris di bawahnya yang memberi tahu Jiki untuk memakai fungsi ini. Kamu sudah sering melihatnya.

Lalu tugas kita adalah membungkus kelima baris pertama ini menjadi sebuah fungsi, supaya saat Jiki memakai `walk5`, yang dijalankan adalah kelima baris kode pertama tadi.

Untuk mengubah kelima baris ini, kelima gerakan ini, menjadi sebuah fungsi, kita perlu memakai kata kunci baru, yaitu kata kunci `function`.

Saat memakai kata kunci `function`, ada dua hal yang harus kita lakukan. Pertama, menentukan nama fungsinya. Dalam hal ini, `walk5`. Kedua, memakai tanda kurung kurawal untuk membungkus kode yang berkata, “Inilah yang harus kamu lakukan di dalam fungsi.” Jadi kita bisa menambahkannya ke kode kita, dan sekarang kita sedang memberi tahu Jiki untuk membuat fungsi bernama `walk5`, lalu saat `walk5` dipakai, dia menjalankan kelima baris kode ini.

```javascript
function walk5() {
  move()
  move()
  move()
  move()
  move()
}
```

Saat Jiki melihat kata kunci `function` itu, dia akan membuat fungsi baru, menaruh instruksi-instruksi itu di papan tulis di dalamnya, lalu memasang label pada mesin itu bertuliskan `walk5`. Setelah itu, dia meletakkan fungsi tersebut di rak bersama semua fungsi lain yang sudah ada.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/jiki-machine-whiteboard.webp"
  alt="Jiki berdiri di samping mesin baru dengan papan tulis di dalamnya untuk menuliskan instruksi fungsi"
  width="500"
  height="396"
/>

Nah, tidak ada yang istimewa dari fungsi yang kamu buat ini dibandingkan fungsi _built-in_ (bawaan). Semuanya terletak berdampingan di raknya.

Dan saat kamu memakai fungsi itu, saat kamu menulis `walk5()`, Jiki akan mengambil mesin itu dari rak dan memakainya persis seperti yang dia lakukan dengan fungsi lain mana pun. Kamu bisa membayangkan setiap mesin punya Jiki mini yang tinggal di dalamnya. Jiki mini selalu memakai topi keren itu. Dan Jiki mini itu bekerja persis sama seperti Jiki biasa di luar, mengikuti instruksi dengan cara yang sama.

Satu hal penting yang perlu dipahami di sini adalah saat Jiki membuat fungsi, dia sebenarnya tidak menjalankan kodenya. Dia hanya menuliskan kode itu untuk dipakai nanti.

Karakter di labirin tidak bergerak pada titik ini saat kamu menulis kata kunci `function`.

Jiki sudah membuat mesin itu dan meletakkannya di rak. Baru setelah kamu memintanya memakai mesin itu dengan menulis `walk5()` hal itu benar-benar terjadi.
