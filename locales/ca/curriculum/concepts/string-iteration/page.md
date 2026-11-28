---
title: "Recórrer cordes amb el bucle `for ... of`"
description: "Fer servir un bucle `for of` per recórrer cada lletra d'una corda i fer-hi alguna cosa, una rere l'altra."
en_md5: 09f399cc3f52b89380d3ed23fc6be513
---

Pots accedir a una sola lletra d'una corda fent servir claudàtors. Ara veurem com recórrer una corda per anar traient cada lletra, una a una.

I per fer-ho, necessitem un tipus de bucle nou. Fins ara hem fet servir el bucle repeat, i ara farem servir un bucle que s'anomena `for of` (recorre cada element d'una col·lecció, un rere l'altre). Són dues paraules clau noves: `for` i `of`.

La paraula clau `for` és una que veurem en força llocs a mesura que avancem. Pot anar tota sola o acompanyada de `in` o de `of`. Per ara, ens centrarem en aquesta última, `of`.

Així que donem una ullada a una mica de codi.

Comencem creant una variable anomenada `name` (nom) que conté la corda `"Jeremy"` (el nom Jeremy). Aquí no hi ha res de nou.

Després tenim la línia del bucle, i hi passen moltes coses, així que repassem-la amb calma.

```javascript
let name = "Jeremy"
for (let letter of name) {
  // ...
}
```

Primer de tot, tenim la paraula clau `for`. Això li diu al Jiki que volem fer un bucle. Ell mira endavant, veu `of` i ja sap que volem fer un bucle «for of».

I això vol dir que, en lloc de fer servir un bucle repeat en què diem «fes-ho 10 vegades», diem «recorre totes les lletres de la corda». Això és el que vol dir «for of».

Després tenim aquest tros de `let letter` (declara una variable anomenada letter). És exactament el mateix que tenim més amunt amb `let name`. Simplement estem creant una variable que es diu `letter`.

La diferència és que, en lloc de dir explícitament què hi va, li diem al Jiki que hi posi cada lletra de la corda, una a una.

Així que el Jiki veu `for`, comprova que hi hagi `of` i es posa en marxa. Mira la primera lletra de la corda, `"J"` en aquest cas, i la posa en una capsa nova que es diu `letter`. Per cert, podríem dir-li com vulguem. No cal que sigui `letter`. Aquí hem decidit dir-li `letter`.

Després executa el codi que hi ha dins de les claus, i aquí hi pots fer qualsevol cosa que faries a qualsevol altre lloc del codi. L'única diferència és que aquest bloc de codi s'executarà una vegada per a cada lletra de la corda, i tindrà aquesta variable disponible.

Cada vegada que el Jiki arriba a la clau de tancament, llença la capsa `letter` i en crea una de nova amb la lletra següent. Així, la primera vegada llençarà el `"J"` i posarà un `"e"` a la capsa. Després farà el mateix amb `"r"`, després amb `"e"`, després amb `"m"` i després amb `"y"`. Sis lletres, sis voltes al bucle. Costa una mica acostumar-se a la sintaxi, però no és un concepte gaire difícil.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-iteration/jiki-letter-box-loop.webp"
  alt="El Jiki llença la capsa de la lletra vella i deixa caure la lletra següent en una capsa nova etiquetada com a letter, repetint-ho per a cada lletra de la corda"
  width="500"
  height="168"
/>
