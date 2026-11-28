---
title: "Entendre els bucles `while`"
description: "Un bucle que continua executant-se mentre una condició es manté certa."
en_md5: aeceed2abb1434307cfd7c9a0df55c81
---

El següent bucle que has de conèixer és el bucle `while` (mentre).

Això vol dir: «Mentre es compleixi una condició, executa el bucle». Així, podríem tenir una regla que digui que a l'Space Invaders només hi pots disparar cinc vegades. Aleshores tindríem un bucle aquí que diu: bé, mentre el nombre de trets sigui inferior a cinc, executa un bucle que permeti que algú pugui jugar.

```javascript
while (numShots < 5) {
  // dispara l'extraterrestre
  numShots++
}
```

Cada cop que algú dispara, augmentem el `numShots` en una unitat i, al final, arribarem a cinc i el bucle s'acabarà.

Ara bé, un problema dels bucles `while` és que és ben fàcil tenir errors que fan que el bucle no s'acabi mai. I aquests reben el nom de bucles infinits, i són un dels errors més habituals dels programes.

Quan l'ordinador es torna lent, els ventiladors es posen a girar i tot es torna sorollós, sovint és perquè algú ha deixat al seu codi un bucle infinit que no s'acaba mai.
