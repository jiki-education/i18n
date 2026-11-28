---
title: "Bucles dins de bucles"
description: "Posar un bucle dins d'un altre perquè el bucle intern s'executi completament a cada pas del bucle extern, cosa perfecta per a graelles."
en_md5: 4ca3e15c1737b6e8cf2f03a56d23a887
---

Diguem que volem una fila de flors. Podem escriure una cosa com aquesta. Fixem una posició, plantem una flor, augmentem la posició en 10, ho repetim i acabem amb una fila de flors ben endreçada.

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
  alt="El Jiki davant d'una pissarra amb una sola fila de flors ben plantada a sota"
  width="406"
  height="400"
/>

Però, i si volem una graella de flors amb files i columnes? Potser quatre files amb cinc flors a cada fila.

<img
  class="concept-image"
  src="/static/images/concept-assets/nested-loops/grid-question.webp"
  alt="Una graella de quatre per cinc de flors amb el Jiki rumiant com dibuixar-la"
  width="383"
  height="400"
/>

Tenim un bucle que dibuixa una fila de flors. Com el pots fer servir per dibuixar quatre files? O què podríem fer per dibuixar quatre files?

Una opció seria simplement copiar i enganxar aquest bucle quatre vegades i canviar la posició superior de cada una. I funcionaria. Estaria bé. Però és repetitiu, i hi ha una manera millor. Ja sabem que, quan el codi és repetitiu, podem fer servir un bucle per simplificar les coses.

Així que aquí podem fer servir un bucle dins d'un altre bucle. Un bucle per a les files i un altre per a les flors d'aquella fila. Comencem afegint un bucle `repeat` al voltant del codi que ja tenim, perquè et facis una idea. I el repetirem només una vegada. És a dir, li diem al Jiki que faci una vegada tot el que hi ha dins d'aquestes claus exteriors. Així que això té exactament el mateix efecte que no tenir cap bucle extern. Li estem dient al Jiki que repeteixi una cosa una vegada, i això és el mateix que dir-li que ho faci sense el `repeat`. Però aquest codi funciona així. És codi legítim i vàlid. Tenim un bucle dins d'un altre bucle.

Així que ara, què passa si canviem aquest bucle extern perquè es repeteixi dues vegades? Doncs que el Jiki executarà dues vegades tota la seqüència de cinc `plant` (planta). Plantarà 10 flors. Però totes aquestes flors seran a la mateixa fila.

De la mateixa manera que hem de moure la posició d'esquerra a dreta una mica cada vegada, després de dibuixar cada fila sencera també cal moure la posició vertical. I com ho fem? Doncs podem afegir una variable externa per a la posició superior, fer-la servir a la nostra funció `plant` i després augmentar-la en 10 després de cada fila.

Pensa en quin valor té cada cosa en cada moment. La posició superior comença a 10. Les primeres cinc vegades que plantem, es queda igual. La posició esquerra va augmentant. I després hi sumem 10 més, a aquesta posició superior, i plantem cinc flors més una mica més avall. Tornem a posar la posició esquerra a 10, i després la tornem a augmentar cada vegada.

I ara podem dir que ho repeteixi quatre vegades, i tindrem quatre files de cinc plantes.

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
  alt="La graella de quatre per cinc de flors acabada, amb un Jiki content que aixeca dos polzes"
  width="389"
  height="400"
/>

La clau és entendre que el Jiki acaba tota la feina del bucle intern (_inner loop_ en anglès) abans de tornar al bucle extern (_outer loop_ en anglès). No va saltant d'un costat a l'altre. Completa el bucle intern i després passa al següent pas del bucle extern.

En aquesta situació, pots pensar en el bucle extern com el que controla els grups o la fila, i en el bucle intern com el que controla cada element d'aquest grup o cada element d'aquesta fila. Així, al nostre exemple, el bucle extern crea quatre files i el bucle intern hi posa cinc plantes, cinc elements a cada grup.
