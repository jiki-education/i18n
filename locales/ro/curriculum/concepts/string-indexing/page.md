---
title: "Indexarea stringurilor"
description: "Folosirea parantezelor pătrate și a unui număr de poziție ca să scoți o singură literă dintr-un string. Ține minte că pozițiile încep de la zero."
en_md5: cd31e0366b3090b358494667003f54c9
---

Imaginează-ți că ai numele meu, Jeremy, și vrei să scoți de acolo inițiala mea, J. Cum ai face asta?

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-thinking.webp"
  alt="Jiki se gândește cum să scoată o singură literă dintr-un string"
  width="361"
  height="353"
/>

Ei bine, poți să te gândești la un string ca la o serie de litere. Așadar, `"Jeremy"` are șase litere, J-E-R-E-M-Y, și fiecare are o poziție. `"J"` este pe prima poziție, `"y"` este pe ultima poziție.

În JavaScript și în majoritatea limbajelor de programare, aceste poziții încep de la zero. Deci prima literă, `"J"`, este la poziția zero, apoi urmează `"e"`, care este la poziția unu, `"r"` la doi, `"e"` la trei, `"m"` la patru și `"y"` la cinci.

Acum, treaba asta cu începutul de la zero e destul de ciudată și, sincer, viața ar fi mai ușoară dacă am începe să numărăm de la unu, ca în lumea normală. Dar nu o facem. În majoritatea limbajelor de programare numărăm de la zero, așa că trebuie doar să înveți asta.

Așadar, dacă vrem să obținem litera de la o anumită poziție, putem folosi paranteze pătrate (`[]`), cu numărul înăuntru.

Deci dacă scriem `"Jeremy"[0]`, spunem: dă-mi prima literă a cuvântului `"Jeremy"`.

Dacă scriem `"Jeremy"[1]`, spunem: dă-mi a doua literă.

```javascript
"Jeremy"[0] // "J"
"Jeremy"[1] // "e"
```

Și putem face asta și cu variabile. Dacă facem o variabilă numită `name` (nume) și îi dăm ca valoare stringul `"Jeremy"`, atunci putem scrie `name[0]` și obținem din nou `"J"`.

```javascript
let name = "Jeremy"
name[0] // "J"
```

Un lucru pe care să fie clar: ce primești înapoi de la `name[0]` este doar un alt string. Este o altă foaie de hârtie pe care scrie J. Nu are nimic special. Este un string, exact așa cum `"Jeremy"` este un string.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-holding-j.webp"
  alt="Jiki ținând o foaie de hârtie nouă, pe care scrie doar litera J"
  width="500"
  height="289"
/>

Doar că pe ea se află o singură literă, în loc de șase.

Iar faptul că facem asta nu afectează deloc stringul original. Nu cumva rupem J-ul de acolo sau așa ceva. Doar găsim care dintre litere este cea pe care o vrem și apoi facem un string nou cu ea.
