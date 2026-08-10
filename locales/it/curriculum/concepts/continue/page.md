---
title: "La parola chiave `continue`"
description: "Usare la parola chiave `continue` all'interno di un ciclo per saltare il resto dell'iterazione corrente e passare direttamente alla successiva."
en_md5: 6c3f7483826e27d44d6c404cc9f621dd
---

Ci sono situazioni in cui vogliamo saltare una singola iterazione del ciclo invece di interromperlo completamente. Immaginiamo di voler eseguire del codice solo sui numeri dispari.

Se l'indice del ciclo è dispari, non deve eseguire il codice del ciclo in questa iterazione.

Dato che non vogliamo interrompere completamente il ciclo, vogliamo solo saltare questa iterazione e passare a quella successiva.

Per questo scopo esiste l'istruzione `continue`.

Quando Jiki incontra `continue`, salta il resto del codice e passa direttamente all'iterazione successiva. Nel caso di un ciclo `for-of`, questo significa passare all'elemento successivo della lista.

```javascript
for (let item of list) {
  if (item === "something") {
    continue; // Salta il resto del ciclo quando incontra "something"
  }
  // Resto del ciclo...
}
```

In un ciclo `for`, dopo aver eseguito l'incremento `i++`, il ciclo passa all'iterazione successiva.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Salta il resto del ciclo per i numeri pari
  }
  // Resto del ciclo...
}
```
