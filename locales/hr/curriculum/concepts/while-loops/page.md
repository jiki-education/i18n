---
title: "Razumijevanje petlji `while`"
description: "Petlja koja se izvršava sve dok je neki uvjet točan."
en_md5: aeceed2abb1434307cfd7c9a0df55c81
---

Sljedeća petlja koju trebaš upoznati je petlja `while` (dok).

Ona kaže: „Dok vrijedi neki uvjet, izvršavaj petlju." Recimo da imamo pravilo koje kaže da u igri Space Invaders možeš pucati samo pet puta. Onda bismo ovdje imali petlju koja glasi: dok je broj hitaca manji od pet, izvršavaj petlju koja igraču omogućuje igranje.

```javascript
while (numShots < 5) {
  // pucaj u izvanzemaljca
  numShots++
}
```

Svaki put kad netko opuca, `numShots` se poveća za jedan. Na kraju dođemo do pet i petlja završava.

E sad, problem s petljama `while` je što je vrlo lako dobiti bug zbog kojeg se petlja nikad ne zaustavlja. Takve se petlje zovu beskonačne petlje (_infinite loops_ na engleskom) i među najčešćim su bugovima u programima.

Kad se računalo uspori, ventilatori se zavrte i sve postane glasno, to je često zato što je u kôdu ostala beskonačna petlja koja se nikad ne zaustavlja.
