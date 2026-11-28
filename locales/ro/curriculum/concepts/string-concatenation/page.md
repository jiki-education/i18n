---
title: "Concatenarea stringurilor"
description: "Adunarea stringurilor cu `+` pentru a lipi text fix și variabile într-un singur string mai lung."
en_md5: 0e6c7a941a1fb1161445da27a4d7e818
---

Știi deja ce sunt stringurile. Sunt niște foi de hârtie cu text pe ele.

Până acum, fiecare string pe care l-ai folosit e unul pe care l-ai scris direct. Ce se întâmplă dacă vrei să construiești un string pornind de la variabile sau condiții? Cum facem asta?

Există două moduri.

Prima se numește concatenarea stringurilor (engl. _string concatenation_), o variantă pretențioasă și cam încâlcită de a spune că pui două stringuri împreună.

Imaginează-ți că ai două cuvinte, `"hello"` (salut) și `"world"` (lume), și vrei să creezi un string care conține `"hello world"`.

Ai putea să scrii pur și simplu `"hello world"` ca un singur string, dar ai putea scrie și `"hello " + "world"`, iar rezultatul ar fi exact același string.

Acum, evident, în situația asta nu e cine știe ce de util. Dar ce-ar fi dacă am avea o variabilă care conține numele cuiva și am vrea să îl salutăm?

Deci imaginează-ți că avem o variabilă numită `name` (nume), care uneori conține `"Jeremy"` (numele Jeremy), iar alteori `"Jiki"` (numele lui Jiki). Vrem să spunem `"hello Jeremy"` sau `"hello Jiki"` folosind acea variabilă.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-concatenation/jiki-name-box.webp"
  alt="Jiki ține o cutie cu eticheta „name”, care poate conține valori diferite"
  width="207"
  height="400"
/>

Ei bine, putem obține asta folosind această idee de concatenare:

```javascript
"hello " + name // "hello Jeremy" or "hello Jiki"
```

Asta ne va da fie `"hello Jeremy"`, fie `"hello Jiki"`, fie un salut pentru oricine altcineva, în funcție de ce se află în cutia `name`.
