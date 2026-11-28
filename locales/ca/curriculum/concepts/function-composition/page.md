---
title: "Fer servir diverses funcions juntes"
description: "Dividir un problema en funcions petites d'una sola responsabilitat que es criden entre elles, perquè cada peça es mantingui simple i reutilitzable."
en_md5: 7df3110b30c0f279d7f04d3b4e331a99
---

Fins ara, quan has escrit funcions, cadascuna s'ha aguantat bastant bé tota sola i contenia tota la lògica que necessitava per funcionar.

Ara veurem com dividir les funcions per tenir funcions més petites que treballen juntes, en lloc de funcions grans que fan moltes coses alhora.

Com a regla general en programació, vols que cada funció faci el mínim possible. Diem que una funció té una responsabilitat única. Cada funció hauria de fer només una cosa i fer servir altres funcions per a les diferents sub-parts d'aquesta.

Doncs mirem un exemple.

Imagina que tenim una funció la feina de la qual és retornar un text que descrigui un nom.

Una versió senzilla seria així. Tenim un bucle de recompte, una cosa que ja has escrit, i després una plantilla de text que ajunta les peces del resultat.

```javascript
function describeName(name) {
  let length = 0
  for (const letter in name) {
    length += 1
  }
  return `This name is ${length} letters long`
}
```

Això funciona bé, però fa dues coses. Fa una cosa força genèrica, comptar, i una altra de molt específica, construir aquest text amb un format concret.

Seria molt millor dividir-ho en dues funcions: una que s'encarregui del recompte i una altra que s'encarregui de descriure un nom amb aquest format concret.

```javascript
// Només compta les lletres
function countLetters(str) {
  let count = 0
  for (const letter in str) {
    count += 1
  }
  return count
}

// Només dona un bon format al text
function describeName(name) {
  const count = countLetters(name)
  return `The name has ${count} letters`
}
```

I després podem reutilitzar aquesta funció genèrica de recompte en aquest formatatge del text, però també a qualsevol altre lloc on la necessitem. Sempre que hàgim de comptar les lletres d'un text, està totalment deslligada de tot el que tingui a veure amb imprimir-lo.

Pots llegir les dues funcions per separat i entendre de seguida què fa cadascuna.

A mesura que les teves funcions es tornin més complexes i en tinguis més, aquesta tècnica és la diferència entre tenir un codi net i llegible o tenir un embolic total.

Hi ha una cosa que val la pena tornar a esmentar aquí: tot el que crees dins d'una funció no hi poden accedir les altres funcions tret que ho retornis expressament.

Així que si intentes fer referència a la variable `count` (recompte) des de dins de `describeName` (descriu el nom), no podràs, perquè pertany a l'altra funció.

<img
  class="concept-image"
  src="/static/images/concept-assets/function-composition/jiki-thinking.webp"
  alt="El Jiki pensant, amb una bombeta al cap, sobre com les variables es queden privades dins de cada funció"
  width="361"
  height="353"
/>

A JavaScript, podem crear variables a dalt de tot, per sobre de tot, que es comparteixen entre funcions, però et recomano de debò que no ho facis tret que hi hagi una molt bona raó.

Com més independent mantinguis cada funció, i la paraula tècnica per a això és «pura», funcions pures, més net serà el teu codi i menys errors crearàs i tindràs.
