---
title: "Memahami perulangan `while`"
description: "Perulangan yang terus berjalan selama suatu kondisi tetap benar."
en_md5: aeceed2abb1434307cfd7c9a0df55c81
---

Perulangan berikutnya yang perlu kamu ketahui adalah perulangan while (selama).

Maksudnya begini: “Selama suatu kondisi terpenuhi, jalankan perulangannya.” Jadi, misalnya kita punya aturan yang mengatakan kamu hanya boleh menembak lima kali di Space Invaders. Kita akan punya perulangan di sini yang bunyinya, nah, selama jumlah tembakan masih kurang dari lima, jalankan perulangan yang membuat pemain bisa memainkan gamenya.

```javascript
while (numShots < 5) {
  // tembak alien
  numShots++
}
```

Setiap kali seseorang menembak, kita menambah `numShots` sebanyak satu, dan akhirnya kita mencapai lima lalu perulangannya berhenti.

Nah, satu masalah dengan perulangan while adalah betapa mudahnya muncul bug yang membuat perulangan tidak pernah berhenti. Ini disebut perulangan tanpa henti (bahasa Inggris: _infinite loop_), dan ini salah satu bug paling umum dalam sebuah program.

Saat komputermu melambat, kipasnya mulai berputar kencang, semuanya jadi berisik, itu sering kali karena ada orang yang meninggalkan perulangan tanpa henti di kodenya.
