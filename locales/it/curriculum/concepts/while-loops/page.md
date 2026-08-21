---
title: "Capire i cicli `while`"
description: "Un ciclo che continua a girare finché una condizione rimane vera."
en_md5: aeceed2abb1434307cfd7c9a0df55c81
---

Il prossimo ciclo da conoscere è il ciclo `while` (mentre).

Questo dice: "Finché una certa condizione è vera, esegui il ciclo." Per esempio, potremmo avere una regola per cui in Space Invaders si può sparare solo cinque volte. In questo caso avremmo un ciclo che dice: finché il numero di colpi è minore di cinque, esegui un ciclo che permette di continuare a giocare.

```javascript
while (numShots < 5) {
  // spara all'alieno
  numShots++
}
```

Ogni volta che qualcuno spara, aumentiamo `numShots` di uno. Prima o poi arriveremo a cinque e il ciclo terminerà.

Ora, un problema dei cicli while è che è abbastanza facile avere bug che fanno sì che il ciclo non finisca mai. Questi si chiamano cicli infiniti (_infinite loops_ in inglese) e sono uno dei bug più comuni nei programmi.

Quando il computer rallenta, le ventole iniziano a girare e tutto diventa rumoroso: spesso è perché nel codice c'è un ciclo infinito che non termina mai.
