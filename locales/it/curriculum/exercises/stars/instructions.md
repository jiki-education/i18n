---
title: "Stelle"
description: "Costruisci e disegna una piramide di stelle."
en_md5: 2ab89485b8c04063fe5b305e43467bdf
---

In questo esercizio costruirai un generatore di motivi visivi che disegna righe di stelle.

Il tuo compito è creare una funzione chiamata `layoutStars` (disponi le stelle) che accetta un solo input, `numRows`, che specifica quante righe servono, e poi disegna le varie righe di stelle.

La funzione deve:

1. Costruire un array di stringhe: una stringa per riga, partendo dal basso, dalla riga più lunga. Per esempio, quando `numRows` è `3`, l'array sarà `["***", "**", "*"]`.
2. Usare la funzione `drawStars(rows)`, passando le righe, che disegnerà le stelle.

Se `numRows` è `0`, l'array deve essere vuoto (`[]`) e non viene disegnato nulla.

Se vuoi vedere come funziona, puoi eseguire `drawStars(["***", "**", "*"])` per vedere disegnare le stelle.

### Il metodo push

Come nell'esercizio precedente, dovrai costruire l'array usando il metodo `.push(element)`. In questo esercizio puoi creare un solo nuovo array (`let something = []`) nel codice.

Buon divertimento!
