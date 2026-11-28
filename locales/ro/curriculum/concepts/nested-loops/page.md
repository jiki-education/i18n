---
title: "Bucle în bucle"
description: "O buclă pusă în interiorul altei bucle, astfel încât bucla interioară să ruleze complet la fiecare pas al buclei exterioare, perfect pentru grile."
en_md5: 4ca3e15c1737b6e8cf2f03a56d23a887
---

Hai să zicem că vrem un rând de flori. Putem scrie ceva de genul ăsta. Stabilim o poziție, plantăm o floare, creștem poziția cu 10, repetăm, și ajungem cu un rând de flori frumos și ordonat.

```javascript
let x = 10
repeat(5) {
  plant(x, 50, 10)
  x = x + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/single-row-flowers.webp"
  alt="Jiki la tablă, cu un singur rând ordonat de flori plantat dedesubt"
  width="406"
  height="400"
/>

Dar dacă vrem o grilă de flori, cu rânduri și coloane? Poate patru rânduri cu cinci flori pe fiecare rând.

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/grid-question.webp"
  alt="O grilă de flori de patru pe cinci, cu Jiki gândindu-se cum să o deseneze"
  width="383"
  height="400"
/>

Avem o buclă care desenează un rând de flori. Cum o poți folosi ca să desenezi patru rânduri? Sau ce am putea face ca să desenăm patru rânduri?

O variantă ar fi să copiem și să lipim bucla de patru ori și să schimbăm poziția de sus pentru fiecare. Și ar funcționa. Ar fi în regulă. Dar e repetitiv, și există o cale mai bună. Știm că atunci când codul e repetitiv, putem folosi o buclă ca să simplificăm lucrurile.

Așa că aici putem folosi o buclă în interiorul altei bucle. O buclă pentru rânduri și una pentru florile de pe rândul respectiv. Hai să începem adăugând o buclă `repeat` în jurul codului pe care îl avem deja, ca să prinzi ideea. Și o să repetăm doar o dată. Îi spunem lui Jiki să facă o singură dată tot ce se află în interiorul acestor acolade exterioare. Deci efectul e exact același ca și cum bucla exterioară nu ar exista deloc. Îi spunem lui Jiki să repete ceva o dată, ceea ce e exact ca și cum i-am spune să facă lucrul respectiv fără `repeat`. Dar așa funcționează codul acesta. E cod legitim, valid. Avem o buclă în interiorul altei bucle.

Și acum ce se întâmplă dacă schimbăm bucla exterioară să repete de două ori? Acum Jiki va rula de două ori toată treaba cu `plant` (plantează) de cinci ori. Va planta 10 flori. Dar toate florile vor fi pe același rând.

Așa că, la fel cum trebuie să mutăm poziția de la stânga la dreapta puțin câte puțin de fiecare dată, după ce am desenat fiecare rând complet, trebuie să mutăm și poziția verticală. Și cum facem asta? Păi, putem adăuga o variabilă în afara buclei pentru poziția de sus, o folosim în funcția `plant`, iar apoi o creștem cu 10 după fiecare rând.

Așa că gândește-te ce valoare are fiecare, la fiecare moment. Poziția de sus pornește de la 10. În timpul primelor cinci plantări, rămâne așa. Poziția din stânga crește. Apoi mai adăugăm 10 la poziția de sus, și plantăm încă cinci flori puțin mai jos. Resetăm poziția din stânga la 10, și apoi o creștem din nou de fiecare dată.

Și acum putem spune să repete asta de patru ori, și obținem patru rânduri a câte cinci flori.

```javascript
let y = 10
repeat(4) {
  let x = 10
  repeat(5) {
    plant(x, y, 10)
    x = x + 10
  }
  y = y + 10
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/flower-grid-result.webp"
  alt="Grila finală de flori, de patru pe cinci, cu un Jiki fericit care arată în sus cu două degete mari"
  width="389"
  height="400"
/>

Lucrul esențial de înțeles este că Jiki termină toată treaba din bucla interioară (engl. _inner loop_) înainte să revină la bucla exterioară (engl. _outer loop_). Nu sare înainte și înapoi. El termină bucla interioară, apoi trece la pasul următor al buclei exterioare.

În situația asta, poți vedea bucla exterioară ca pe cea care controlează grupurile sau rândul, iar bucla interioară ca pe cea care controlează fiecare element din grupul respectiv sau fiecare element de pe rând. Deci, în exemplul nostru, bucla exterioară face patru rânduri, iar bucla interioară pune cinci flori, cinci elemente în fiecare grup.
