---
title: "Cuvântul-cheie `continue`"
description: "Folosirea cuvântului-cheie `continue` într-o buclă, ca să sari peste restul acestei iterații și să treci direct la următoarea."
en_md5: 6cd21a2f25c493f61d000f865014709d
---

Sunt momente când vrem să sărim peste o anumită iterație a unei bucle, în loc să ieșim complet din ea. Imaginează-ți că vrem să facem ceva doar pentru numerele impare.

Vrem să putem spune: dacă `i` (indicele buclei) este impar, nu rula bucla de data asta.

Dar nu vrem să ieșim complet din buclă. Vrem doar să sărim peste această singură iterație și apoi să ne uităm la următoarea.

Iar pentru asta avem un alt cuvânt-cheie: `continue`.

Când Jiki vede `continue`, sare înapoi la începutul buclei pentru următoarea iterație. Așa că, într-o buclă for-of, dacă vede `continue`, trece la următorul element din listă.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Sare peste restul buclei pentru "something"
  }
  // Restul buclei...
}
```

Într-o buclă for, ajunge la incrementarea lui `i++` și apoi începe următoarea iterație.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Sare peste restul buclei pentru numerele pare
  }
  // Restul buclei...
}
```
