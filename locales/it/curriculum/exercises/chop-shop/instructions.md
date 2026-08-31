---
title: "The Chop Shop"
description: "Scopri se il barbiere ha tempo per un altro cliente."
en_md5: c68a8a4856c5249baa901c170035ea78
---

Gesti un piccolo salone da barbiere che punta più sulla velocità che sulla qualità. I clienti potrebbero uscire con un taglio non proprio perfetto, ma non passano troppo tempo sulla poltrona.

Offri diversi servizi, dalla messa in piega al taglio completo, che richiedono tempi diversi. Gestisci il salone in base all'ordine di arrivo: chi arriva prima viene servito prima. Non esiste un sistema di appuntamenti.

Verso la fine della giornata ti serve un modo per capire se hai tempo per eventuali nuovi clienti che entrano nel salone.

Scrivi una funzione chiamata `canFitIn` (può essere inserita) che accetta tre input:

- Il primo input è l'elenco dei tagli che hai già in coda (un array di stringhe)
- Il secondo input è il taglio richiesto dalla nuova persona (una stringa)
- Il terzo input è il numero di minuti rimasti nella giornata (un numero)

Restituisci un valore booleano che indica se puoi inserire la persona.

I servizi che offri sono:

- Mohawk: 20 minuti
- Slicked-Back Pixie: 15 minuti
- Bob: 25 minuti
- Shave and Polish: 15 minuti
- Afro Trim: 45 minuti
- Up-do: 30 minuti

### Array annidati

Questo è il primo esercizio in cui hai a che fare con un array che contiene altri array come elementi. Li chiamiamo «array annidati». Gli array annidati sono uguali a qualsiasi altro array: invece di contenere stringhe o numeri, contengono altri array.

Dai un'occhiata all'array `cuts` (tagli). Contiene altri array, uno per ogni taglio, e ognuno di questi array ha due elementi: un nome e una durata.

Qui è più semplice pensare prima agli array interni, cioè alle coppie di nome e durata, e poi immaginarli tutti raggruppati insieme in un altro array.

L'accesso tramite indice funziona come nel resto del corso, ma qui puoi concatenare più indici, in questo modo...

```javascript
let cuts = [
  ["Mohawk", 20],
  ["Slicked-Back Pixie", 15],
  ["Bob", 25],
  //...
]

cuts[0] // ["Mohawk", 20]
cuts[0][0] // "Mohawk"
cuts[0][1] // 20
cuts[2][0] // "Bob"
```
