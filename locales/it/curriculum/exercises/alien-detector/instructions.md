---
title: "Rilevatore di alieni"
description: "Muovi il laser da sinistra a destra e abbatti gli alieni."
en_md5: c38eb1c7876bdff1fc61e9fa0c455e48
---

Nell'esercizio precedente Space Invaders hai mosso il laser da un lato all'altro per abbattere tutti gli alieni. Una parte importante di ciò che lo ha reso possibile è stata la funzione `isAlienAbove()` (controlla se c'è un alieno sopra di te). In questo esercizio l'abbiamo rimossa, ma devi comunque abbattere tutti gli alieni!

Ti abbiamo dato un'area di disegno vuota da cui partire. Puoi riutilizzare il codice del <a href="/lesson/scroll-and-shoot" target="_blank" rel="noopener noreferrer">precedente esercizio Space Invaders</a> come punto di partenza.

Questo esercizio è pensato come una sfida! Vacci piano.

### Il tuo compito

Abbatti tutti gli alieni. Invece di poter chiedere all'esercizio se c'è un alieno sopra di te, devi tenere traccia di quali alieni hai abbattuto e quali sono ancora lì.

### Ecco `getStartingAliensInRow(idx)` (ottieni gli alieni iniziali nella riga)

Hai una nuova funzione chiamata `getStartingAliensInRow(idx)`. Accetta un solo input: l'indice della riga, partendo dal basso. Le righe sono al massimo tre, quindi il valore di input può essere `0`, `1` o `2`.

La funzione restituisce un array di 11 booleani. Ogni booleano specifica se c'è un alieno in quella posizione all'**inizio** dell'esercizio. Quindi `[true, false, false, ...]` significherebbe che, prima di fare qualsiasi cosa, c'è un alieno nella prima posizione, ma non nelle due successive (e così via).

Questa funzione restituisce solo le posizioni **iniziali** degli alieni. Non si aggiorna man mano che li abbatti!

### Note

- Ogni volta che ti muovi a sinistra o a destra, avanzi o arretri di una posizione. Quella posizione corrisponde ai posti in cui possono trovarsi gli alieni.
- Gli alieni non ricompaiono in questo esercizio.
