---
title: "Wordle: elabora una partita"
description: "Elabora un'intera partita di Wordle, colorando ogni riga di tentativi una alla volta."
en_md5: 087a112241856ada8b0cfb4bc7da4798
---

Siamo tornati al gioco di Wordle: ora elaboreremo l'intera partita, non solo un singolo tentativo!

Una volta completato questo esercizio, sbloccherai una **Sfida Premium** in cui creerai un bot che gioca davvero l'intera partita dall'inizio alla fine, facendo i tuoi tentativi man mano. È di gran lunga la sfida più avanzata finora!

### Questo esercizio

Per ora devi creare una funzione chiamata `processGame(target, guesses)` (elabora la partita) che accetta due input: la parola segreta da indovinare e un array dei tentativi fatti dal giocatore.

Devi calcolare lo stato di ogni riga e poi chiamare la funzione `colorRow(row, states)` (colora la riga) con il numero di riga (`1-6`) e un array di stati, uno per ogni lettera.

Per esempio, se chiamassimo `processGame("crane", ["spoil", "trace", "crane"])`, ci aspetteremmo che il codice usasse la funzione `colorRow` tre volte:

```javascript
colorRow(1, ["absent", "absent", "absent", "absent", "absent"])
colorRow(2, ["absent", "correct", "correct", "present", "correct"])
colorRow(3, ["correct", "correct", "correct", "correct", "correct"])
```

Come punto di partenza, abbiamo inserito nell'editor il codice dell'esercizio precedente. Pensa a come rendere il codice esistente **più generico** per farlo funzionare. Buona fortuna!

### Bonus: una nuova regola

C'è una regola di Wordle che finora abbiamo tralasciato...

Se una lettera compare due volte in un tentativo ma solo una volta nella parola segreta:

- Se una delle due è nella posizione giusta, quella diventa verde e l'altra diventa grigia.
- Se sono entrambe nella posizione sbagliata, la prima diventa gialla e la seconda diventa grigia.

La stessa idea si estende: se una lettera compare tre volte nel tentativo e due nella parola, due vengono colorate e la terza diventa grigia.

Esegui il secondo scenario bonus e osserva la riga `"SWISS"`. La parola segreta è `"swims"`, che contiene due `"s"`, ed entrambe sono già verdi: quella all'inizio e quella alla fine. Ma il codice colora anche la quarta casella di giallo, il che dice al giocatore che c'è _un'altra_ `"s"` ancora da trovare. Non ce n'è un'altra. Quella quarta casella dovrebbe essere grigia.

Devi risolvere parzialmente il problema nel primo scenario bonus (quindi parti da lì!), per poi risolverlo completamente nel secondo.

Questo compito è una sfida! **Ricorda che è un bonus: non sei obbligato a completarlo!**
