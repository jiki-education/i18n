---
title: "Concatenació de cordes"
description: "Ajuntar cordes amb `+` per enganxar text fix i variables en una sola corda més llarga."
en_md5: 0e6c7a941a1fb1161445da27a4d7e818
---

Ja saps què són les cordes. Són trossos de paper amb text a sobre.

Fins ara, totes les cordes que has fet servir les has escrit directament. Què passa si vols construir una corda a partir de variables o de condicions? Com ho fem?

Hi ha dues maneres.

La primera es diu concatenació de cordes, que és una manera elegant i una mica confusa de dir que sumem dues cordes.

Imagina que tens dues paraules, `"hello"` (hola) i `"world"` (món), i que vols crear una corda que contingui `"hello world"`.

Podries escriure directament `"hello world"` com una sola corda, però també podries escriure `"hello " + "world"`, i obtindries la mateixa corda.

És clar que, en aquest cas, això no és gaire útil. Però i si tinguéssim una variable amb el nom d'algú i volguéssim saludar-lo?

Doncs imagina que tenim una variable que es diu `name` (nom) i que de vegades conté `"Jeremy"` (el nom Jeremy) i de vegades `"Jiki"` (el nom Jiki). Volem dir `"hello Jeremy"` o `"hello Jiki"` fent servir aquesta variable.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-concatenation/jiki-name-box.webp"
  alt="el Jiki sosté una capsa amb l'etiqueta name, que pot contenir valors diferents"
  width="207"
  height="400"
/>

Doncs ho podem aconseguir amb aquest concepte de concatenació:

```javascript
"hello " + name // "hello Jeremy" o "hello Jiki"
```

Això ens donarà `"hello Jeremy"`, `"hello Jiki"` o una salutació per a qualsevol altra persona, segons què hi hagi dins la capsa `name`.
