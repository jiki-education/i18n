---
title: "Kata kunci `break`"
description: "Menggunakan kata kunci `break` di dalam badan perulangan untuk langsung keluar dari perulangan dan lanjut ke kode setelahnya."
en_md5: bd746b6c93016dcb2789bd26e38ab33a
---

Kata kunci `break` bisa dipakai di mana saja di dalam badan perulangan apa pun.

Bagian di antara tanda kurung kurawal, itulah badannya. Dan saat Jiki melihatnya, dia akan langsung keluar dari perulangan itu dan lanjut ke kode apa pun yang ada di bawah perulangan.

Jadi, kalau kita punya batasan yang berbunyi “jalankan perulangan ini 50 kali”, tapi kita mau berhenti kalau pengguna menembak lima kali, kita bisa menaruh perulangan for di bagian atas yang menghitung naik sampai 50.

Tapi kemudian, kita bisa menaruh kondisi di tengah perulangan yang mengecek apakah pengguna sudah menembak lima kali, dan kalau sudah, kita gunakan break (berhenti) untuk menghentikan perulangan itu.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // keluar dari perulangan
  }
}
```
