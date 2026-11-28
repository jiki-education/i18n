---
title: "Operatorul `||` (sau)"
description: "Combinarea a două condiții cu `||`, astfel încât întreaga condiție să fie adevărată atunci când cel puțin una dintre părți este adevărată."
en_md5: e7bc3f103a37719cdf3a77920d09e24e
---

Putem folosi și `or`, dar, din păcate, în JavaScript nu există un cuvânt-cheie or drăguț. În schimb, trebuie să folosim aceste două bare (engl. _bars_) una lângă alta ca să spunem sau. Arată ciudat, dar de fapt nu e. Te vei obișnui.

Așa că putem spune că, dacă cineva are peste 20 de ani sau e îmbrăcat în ținută de disco, poate intra. O să avem deci o petrecere distractivă, cu copii în ținute de disco și adulți îmbrăcați neatent, ceea ce sună rezonabil.

```javascript
if (age > 20 || outfit === "disco") {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-or/party-door.webp"
  alt="Jiki întâmpinând la ușa unei petreceri un amestec de copii în ținute de disco și adulți îmbrăcați lejer"
  width="327"
  height="400"
/>

Există un lucru care îi încurcă pe oameni atât la and, cât și la or: fiecare parte a lui and/or trebuie să fie o comparație completă. Așa că, chiar dacă ai aceeași variabilă pe ambele părți, trebuie să o repeți. Nu poți scrie `if age is less than 13 or greater than 20`. Trebuie să scrii `if age is less than 13 or age is greater than 20`. Ai nevoie de comparații complete pe ambele părți.

```javascript
if (age < 13 || age > 20)
```

Trebuie să te gândești când contează ambele condiții și când doar una dintre ele trebuie să fie adevărată.
