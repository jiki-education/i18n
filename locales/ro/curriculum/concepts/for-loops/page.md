---
title: "Cum funcționează buclele `for`"
description: "O buclă cu trei părți (un inițializator, o condiție și o incrementare), care îți dă control deplin asupra iterației."
en_md5: 0ad4155ded18c2df27d29e5355bd0532
---

Poate îți amintești că bucla `repeat` nu există de fapt în JavaScript. E doar ceva adăugat ca să îți facă viața puțin mai ușoară la început.

Deci ce folosim în schimb? Păi, folosim o buclă `for` normală, care arată așa.

```javascript
for (let i = 0; i < 5; i++) {
  // ...
}
```

Poți vedea de ce ar fi putut fi puțin intimidant în prima zi.

Dar acum ai toate cunoștințele de care ai nevoie ca să te simți în largul tău cu asta. Hai să o descompunem.

O buclă `for` are trei componente: un inițializator (engl. _initializer_), o condiție și o incrementare (engl. _increment_).

Inițializatorul, partea asta `let i = 0`, rulează la începutul întregii bucle. Rulează doar o dată, iar aici creează o cutie numită `i` (un numărător) cu valoarea zero. `i` este doar o literă folosită ca să urmărești o valoare pe măsură ce repetăm, iar prin tradiție se folosesc `i` sau `x` pentru asta.

Partea următoare, cea dinaintea condiției, rulează de fiecare dată, înainte de fiecare iterație a buclei.

Dacă condiția este adevărată, rulăm bucla din nou.

Dacă nu, nu.

Și apoi, în final, vine incrementarea, adică `i++`.

`i++` înseamnă exact același lucru ca `i = i + 1`. E doar o formă prescurtată, un mod de a crește `i` cu unu de fiecare dată.

Deci, în acest exemplu, punem `i` la zero. Verificăm dacă `i` este mai mic decât doi, așa este, și deci rulăm bucla.

Și apoi, la final, creștem `i` cu unu, așa că `i` devine unu. Zero plus unu fac unu.

Și apoi o luăm de la capăt. Verificăm dacă unu este mai mic decât doi.

Este, așa că rulăm bucla. Și apoi, la final, creștem `i` din nou. Acum este doi: unu plus unu fac doi.

```javascript
i = 0
i < 2 // adevărat - rulăm bucla
...   // Facem iterația
i = i + 1 // 1

i < 2 // adevărat - rulăm bucla
...   // Facem iterația
i = i + 1 // 2

i < 2 // fals - ieșim din buclă
```

Și apoi mergem a treia oară. De data asta verificăm dacă doi este mai mic decât doi, și nu este, așa că nu rulăm bucla și, de fapt, am terminat cu bucla. Trecem pur și simplu la codul de dedesubt. Deci am rulat bucla de două ori, iar asta e un lucru util de știut. Atâta timp cât pornim de la zero și avem o condiție `i < n`, numărul `n` este de câte ori se va rula bucla.

Deci e la fel ca și cum ai spune repeat doi.

Așadar nu e greu, dar e mult mai încâlcit decât să scrii doar repeat doi. Avantajul unei bucle `for` este că poți face orice în acele trei locuri. Poți porni de la un alt număr, poți crește cu mai mult de unu, poți număra descrescător sau poți folosi o condiție care depinde de altceva decât de un simplu numărător. Această flexibilitate face din buclele `for` calul de povară al JavaScriptului.
