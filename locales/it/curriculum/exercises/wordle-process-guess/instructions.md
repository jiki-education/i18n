---
title: "Wordle: elabora il tentativo"
description: "Controlla un tentativo a Wordle e stabilisci quali lettere sono corrette."
en_md5: d9a619535c9794108b46091447b14f6d
---

Benvenuto a Wordle, il gioco che è diventato virale durante i lockdown per il Covid-19!

Il gioco funziona così:

- C'è una parola segreta che l'utente cerca di indovinare.
- L'utente ha 6 tentativi per indovinarla.
- Per ogni tentativo ci sono 5 caselle, una per ogni lettera:
  - Se una lettera è corretta, la casella diventa verde.
  - Se una lettera è nella parola segreta ma nel posto sbagliato, la casella diventa gialla.
  - Se una lettera non è nella parola segreta, la casella diventa grigia.

In alcuni esercizi implementerai il gioco completo di Wordle, ma in **questo esercizio** ti limiterai a far funzionare la prima riga.

Per farlo, devi creare una funzione chiamata `processGuess(target, guess)` (elabora il tentativo). Le parole che ricevi nella funzione saranno sempre in minuscolo.

La funzione deve determinare lo stato di ogni lettera del tentativo, poi chiamare la funzione `colorRow(1, states)` (colora la riga) con un array di stati, uno per ogni lettera: `"correct"`, `"present"` o `"absent"`.

Per esempio, `processGuess("hello", "holes")` dovrebbe usare `colorRow` con:

```javascript
colorRow(1, ["correct", "present", "correct", "present", "absent"])
```

Assicurati di aver capito prima di continuare!

Inoltre, se sei un appassionato di Wordle, potresti notare che le regole qui sopra sono **leggermente semplificate** rispetto al gioco ufficiale. In questo esercizio, attieniti a queste regole semplificate: introdurremo le regole complete nel prossimo esercizio su Wordle!

### Metodi

Come negli ultimi due esercizi, puoi costruire l'array di stati usando il metodo `push`, che aggiunge un elemento in fondo a un array. Per esempio, `states.push("correct")` aggiunge `"correct"` alla fine dell'array `states`.

Hai anche a disposizione il metodo `includes` se vuoi controllare se una stringa contiene un'altra stringa.

Buona fortuna!
