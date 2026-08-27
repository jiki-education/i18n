---
title: "Wordle: risolutore"
description: "Crea un risolutore che gioca da solo un'intera partita a Wordle."
en_md5: bfa3fc3c672c10eca0658cb6c3d6e0ca
---

Nell'ultimo esercizio su Wordle, hai elaborato una partita in cui i tentativi ti venivano forniti. Questa volta sei dall'altra parte: sei tu a dover trovare i tentativi.

Il tuo compito è creare una nuova funzione chiamata `solveWordle()`, dove continui a provare parole finché non trovi la parola corretta. Devi risolvere la partita nel modo più efficiente possibile (usando il minor numero possibile di parole).

Hai a disposizione una nuova funzione `commonWords()` (parole comuni), che restituisce un array con le oltre 100 parole che puoi usare nel gioco. Queste sono le parole da provare. Dovresti sempre iniziare leggendo la prima parola di quell'array e provandola. Poi prosegui: trova la prossima parola valida possibile, provala, e così via.

Hai a disposizione una funzione `guess(word)` (prova la parola) che restituisce un array di `"correct"`, `"present"`, `"absent"` per ogni lettera.

La chiave di questo esercizio è riflettere su come ricordare le parole precedenti ed i risultati delle chiamate a `guess`. Devi usare queste conoscenze per trovare di volta in volta il percorso più efficiente verso la vittoria.

### Un esempio

1. Leggi la prima parola dell'array, che è `"which"`
2. Usa `guess("which")`, che restituisce `["correct", "present", "absent", "absent", "absent"]`.
3. Scegli la parola successiva nell'array delle parole comuni che inizia con `"w"` e ha una `"h"` in terza, quarta o quinta posizione.
4. Torna al punto (2)...

Buona fortuna e divertiti!
