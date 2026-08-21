---
title: "Radice numerica"
description: "Riduci un numero a una sola cifra sommando ripetutamente le sue cifre."
en_md5: 9847d9ea8c4a86ad65869e4f7b4c718e
---

La radice numerica (_digital root_) di un numero è il risultato che ottieni sommando ripetutamente le sue cifre finché non rimane una sola cifra.

Se sommando le cifre una volta ottieni ancora più di una cifra, sommi le cifre di _quel_ risultato, e vai avanti finché non rimane una sola cifra.

Esempio: trovare la radice numerica di `942`:

```
9 + 4 + 2 = 15
1 + 5 = 6
```

La radice numerica di `942` è `6`.

Un numero che ha già una sola cifra (come `7`) è semplicemente la sua stessa radice numerica.

Crea una funzione chiamata `digitalRoot` che prende un numero e restituisce la sua radice numerica.

### La funzione `String()`

Nelle ultime lezioni hai usato la funzione `Number(str)`, che converte una stringa in un numero.

Allo stesso modo puoi trasformare un numero in una stringa usando la funzione `String(num)`. Esempio:

```js
String(147) === "147"
```

Anche qui, nota la lettera maiuscola all'inizio, e non preoccuparti del motivo per ora!

### Mettiamo in pratica quello che hai imparato.

Anche se esistono diversi modi per risolvere questo esercizio, la soluzione che vogliamo che tu raggiunga utilizza un ciclo `while`.

Buon divertimento!
