---
title: "La paraula clau `continue`"
description: "Com fer servir la paraula clau `continue` dins d'un bucle per saltar-se la resta d'aquella iteració i passar directament a la següent."
en_md5: 6cd21a2f25c493f61d000f865014709d
---

Hi ha moments en què potser volem saltar-nos una iteració concreta d'un bucle en lloc de sortir-ne del tot. Imagina't que només volem fer coses amb nombres senars.

Volem poder dir que, si `i` (l'índex) és senar, aquesta vegada no executem el bucle.

Però no volem sortir del bucle del tot. Només volem saltar-nos aquesta única iteració i tot seguit mirar la següent.

I per a això tenim una altra paraula clau que es diu `continue`.

Quan el Jiki veu `continue`, torna de seguida al principi del bucle per anar a la iteració següent. Així, en un bucle `for...of`, si veu `continue`, passa a l'element següent de la llista.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Salta la resta del bucle per a «something»
  }
  // Rest of the loop...
}
```

En un bucle `for`, passa per l'increment del `i++` i després comença la iteració següent.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Salta la resta del bucle per als nombres parells
  }
  // Rest of the loop...
}
```
