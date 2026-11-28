---
title: "Culori RGB"
description: "Amestecă lumină roșie, verde și albastră, de la 0 la 255, ca să obții orice culoare vrei pe ecran."
en_md5: 8ed038f6d17072b6fb6eaae6bef15c2c
---

RGB ne permite să ne gândim la culori ca la un amestec de roșu, verde și albastru. Asta înseamnă RGB: roșu (engl. _red (R)_), verde (engl. _green (G)_), albastru (engl. _blue (B)_). Dacă îți amintești cum amestecai vopsele la școală, ideea e asemănătoare, doar că în loc de vopsea amestecăm lumină.

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-mixing-circles.webp"
  alt="Trei cercuri suprapuse de lumină roșie, verde și albastră care se amestecă și dau galben, magenta, cyan și alb"
  width="500"
  height="390"
/>

În multe exerciții o să ai o funcție numită `rgb(red, green, blue)`. Ea primește trei numere ca intrări, unul pentru roșu, unul pentru verde, unul pentru albastru, și returnează o culoare.

Numerele pe care le poți folosi ca intrări merg de la zero la `255`. Zero înseamnă că nu vrei deloc culoarea aceea, iar `255` înseamnă să pui cât mai mult din ea. Așa că, dacă folosim funcția `rgb` cu `255`, zero și zero ca intrări, spunem de fapt: vreau tot roșul. Ține minte că `255` este cel mai mare număr pe care îl poți pune acolo. Dar nu vrem deloc verde sau albastru, așa că ambele sunt zero. Obținem roșu, iar roșul acela îl putem pune într-o variabilă și apoi îl folosim în funcția `circle`, exact cum am făcut deja cu stringurile cu nume. Și dacă folosim funcția `rgb` cu zero, `255`, zero? Acum spunem: fără roșu, tot verdele, fără albastru. Așa că obținem un cerc verde. Și dacă vrem galben? Galbenul este un amestec de roșu și verde. Așa că putem spune: dă-mi tot roșul, tot verdele și deloc albastru, și obținem galben. Putem folosi și numere mai mici. Dacă vrem puțin roșu, deloc verde și mult albastru, obținem mov. Iar mult roșu, puțin verde și ceva mai mult albastru ne dau roz. Cam asta e RGB. Amestecăm roșu, verde și albastru ca să obținem diferite combinații.

```javascript
rgb(255, 0, 0) // roșu
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-red.webp"
  alt="Un cerc roșu produs de rgb(255, 0, 0), tot roșu și deloc verde sau albastru"
  width="436"
  height="400"
/>

```javascript
rgb(255, 255, 0) // galben
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-yellow.webp"
  alt="Un cerc galben produs de rgb(255, 255, 0), tot roșu și tot verde, fără albastru"
  width="436"
  height="400"
/>

```javascript
rgb(230, 50, 170) // roz
```

<img
  class="concept-image"
  src="/static/images/concept-assets/rgb/rgb-pink.webp"
  alt="Un cerc roz produs de rgb(230, 50, 170), mult roșu, puțin verde și ceva albastru"
  width="436"
  height="400"
/>

RGB este grozav când vrei să ajustezi o componentă anume: cât roșu, cât verde, cât albastru.
