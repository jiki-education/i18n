---
title: "Introducere în stringuri"
description: "Bucăți de text puse între ghilimele (o literă, un cuvânt, o propoziție sau un paragraf întreg) pe care Jiki le scrie pe hârtie."
en_md5: 4947f6ac1b3eb8eb85d2dea9b82ffc40
---

Când vrei să folosești un număr, poți pur și simplu să scrii numărul respectiv, iar Jiki știe ce vrei să spui. Dar dacă vrei să folosești o literă, un cuvânt sau o propoziție? De exemplu, la funcția `rectangle` (dreptunghi) sau la funcția `circle` (cerc), ce s-ar întâmpla dacă ai avea o intrare în plus în care să specifici culoarea? Cum am scrie culoarea ca să o punem în mașină? Dacă scriem doar cuvântul `green` (verde) sau `blue` (albastru), Jiki o să creadă că ne referim la o mașină de pe raft și o să spună: „Nu există nicio mașină numită green. Nu știu ce să fac.”

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/rectangle-confused.webp"
  alt="Jiki stând încurcat lângă mașina rectangle, cu semne de întrebare deasupra capului"
  width="446"
  height="400"
/>

Așa că avem o regulă: ori de câte ori avem nevoie de text, îl punem între ghilimele, mai exact între ghilimele duble. Și când pui ceva între ghilimele, așa, Jiki scoate o foaie de hârtie și scrie pe ea tot ce ai pus între acele ghilimele, iar aceste bucăți de hârtie le numim _stringuri_ (șiruri de caractere).

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/jiki-writing-green.webp"
  alt="Jiki scriind cuvântul green pe o foaie de hârtie, care devine un string"
  width="398"
  height="400"
/>

Stringurile pot fi litere singulare, cuvinte, propoziții, paragrafe, chiar și cărți. Regula e simplă: dacă e text, îl punem între ghilimele și devine un string.

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/string-examples.webp"
  alt="O tablă pe care apar stringuri de lungimi diferite, între ghilimele: o singură literă, un cuvânt, o propoziție și o adresă pe mai multe rânduri"
  width="500"
  height="398"
/>

Așa că, dacă vrem un dreptunghi albastru, scriem numărul pentru poziția din stânga, poziția de sus, lățimea și înălțimea. Iar la a cincea intrare scriem `"blue"`, cu ghilimele.

```javascript
rectangle(10, 20, 30, 40, "blue")
```

Jiki ar lua mașina de pe raft și ar pune niște monede în primele patru fante de intrare. Apoi ar scrie blue pe o foaie de hârtie, ar pune foaia în a cincea fantă și ar porni mașina.

<img
  class="concept-image"
  src="/static/images/concept-assets/strings/rectangle-blue-slot.webp"
  alt="Jiki băgând hârtia albastră în a cincea fantă a mașinii rectangle, cu monedele 10, 20, 30, 40 în primele patru fante"
  width="500"
  height="392"
/>

String este unul dintre acele cuvinte tehnice care oamenilor li se par la început puțin intimidante, dar de fapt înseamnă doar text. Te vei obișnui cu el foarte repede. Nu are nimic magic.
