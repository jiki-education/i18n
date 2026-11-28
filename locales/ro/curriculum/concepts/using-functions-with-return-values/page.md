---
title: "Funcții care returnează ceva"
description: "Prinzi o valoare care țâșnește din toboganul de ieșire al unei funcții și o folosești în codul tău."
en_md5: 830f19fb6aaf184c1f32ade792b60a12
---

Până acum ne-am uitat la funcții care fac ceva în lume. Deci funcția `circle` (cerc) desenează un cerc. Funcția `move` (mută) îți deplasează personajul. Dar unele funcții lucrează altfel. În loc să facă ceva în exterior, îți dau ceva înapoi, ca să folosești în codul tău. Când o funcție îi dă ceva înapoi lui Jiki pentru a-l folosi în cod, spunem că funcția respectivă returnează (engl. _to return_) ceva. Returnează ceva înapoi către Jiki. Poți să-ți imaginezi că aceste mașini au un tobogan de ieșire. Avem deja fantele de intrare în care punem lucruri, dar putem avea și o singură fantă de ieșire, sau un tobogan prin care ceva poate ieși înapoi. Când Jiki apasă butonul de pe mașină, mașina pornește cu un huruit, iar la final ceva țâșnește din toboganul acela. Poate fi un număr. Poate fi un string. E ceva ce Jiki poate prinde și poate folosi.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/machine-with-return-chute.webp"
  alt="O mașină cu un tobogan de ieșire în lateral, gata să trimită o valoare înapoi către Jiki"
  width="500"
  height="317"
/>

Cele mai multe funcții, probabil 95% dintre ele, returnează ceva. Pot să facă niște calcule pentru tine și să returneze valoarea, sau pot lipi niște stringuri împreună și apoi să-ți dea stringul rezultat. Sau poate îți dau înapoi ora curentă de fiecare dată când rulezi mașina aceea. Hai să ne uităm la ultima variantă. Să zicem că avem o funcție numită `getCurrentTime` (obține ora curentă). De fiecare dată când Jiki rulează mașina, o foaie de hârtie alunecă afară pe toboganul de ieșire, cu ora scrisă pe ea, poate 14:35.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/paper-out-of-chute.webp"
  alt="Mașina getCurrentTime cu o foaie de hârtie pe care scrie 14:35, alunecând afară din toboganul de ieșire"
  width="500"
  height="312"
/>

Iar apoi putem pune acea valoare returnată într-o cutie, folosind `let`:

```javascript
let time = getCurrentTime()
```

Jiki va rula mașina, va lua ora curentă din tobogan și o va pune într-o cutie numită `time`.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/jiki-boxing-time.webp"
  alt="Jiki punând foaia cu 14:35 din tobogan într-o cutie cu eticheta time"
  width="372"
  height="400"
/>

Acum, e important să înțelegi că foaia de hârtie pe care Jiki o pune în cutie rămâne fixă în acel moment. Chiar dacă ora reală se schimbă cât timp programul tău rulează, în cutie rămâne tot acea foaie de hârtie cu 14:35 scris pe ea. Odată ce ceva ajunge în cutie, acolo rămâne un lucru fix. Nu se schimbă ca prin magie. Dacă vrem să punem din nou ora curentă în cutie mai târziu, trebuie să folosim din nou funcția `getCurrentTime` ca să o obținem.

Cele mai multe funcții care returnează ceva au și intrări. De exemplu, putem avea o funcție `join` (unește) care primește două stringuri ca intrări și le returnează unite cu un spațiu. Deci dacă folosim o mașină `join` cu `"Hello"` și `"World"` ca intrări, din tobogan va ieși un singur string cu `"Hello World"` scris pe el.

```javascript
join("Hello", "World"); // "Hello World"
```
