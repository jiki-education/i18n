---
title: "La paraula clau `break`"
description: "Fer servir la paraula clau `break` dins del cos d'un bucle per sortir-ne immediatament i passar al codi que ve després."
en_md5: bd746b6c93016dcb2789bd26e38ab33a
---

La paraula clau `break` es pot fer servir a qualsevol lloc del cos de qualsevol bucle.

La part que hi ha entre les claus és el cos. I quan el Jiki veu aquesta paraula, surt del bucle immediatament i continua amb el codi que hi hagi a sota.

Així que si tenim una restricció que diu que executem aquest bucle 50 vegades, però volem parar si l'usuari dispara cinc vegades, podem posar un bucle `for` a dalt que compti fins a 50.

Però llavors podem tenir una condició al mig del bucle que comprova si l'usuari ha disparat cinc vegades i, si ho ha fet, fem un `break` (sortir del bucle) per aturar-lo.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // surt del bucle
  }
}
```
