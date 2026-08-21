---
title: "Alfanumerico"
description: "Crea funzioni per classificare il testo come lettere, numeri o entrambi."
en_md5: f199432f63304f1d03c4ce1512c8a349
---

In questo esercizio, il tuo compito sarà creare funzioni che verificano se una stringa contiene lettere e/o numeri.

Dovrai scrivere tre funzioni ausiliarie:

- `isAlpha(string)` (sono lettere): determina se una stringa è composta soltanto da lettere ASCII (ad esempio "A", "a", "Hello")
- `isNumeric(string)` (sono numeri): determina se una stringa è composta soltanto da caratteri numerici (ad esempio "0", "1", "456")
- `isAlphanumeric(string)` (sono lettere o numeri): determina se una stringa è composta soltanto da lettere ASCII o numeri (ad esempio "Hello", "42", "Hello42")

Per qualsiasi altro simbolo (ad esempio "! ?") o carattere non ASCII (ad esempio "じき", "正直"), tutte e tre le funzioni devono restituire false.

Poi, scrivi una funzione `whatAmI(string)` (cosa sono) che usa quelle funzioni ausiliarie per classificare una stringa:

- Le stringhe con sole lettere devono restituire `"Alpha"`
- Le stringhe con soli numeri devono restituire `"Numeric"`
- Le stringhe con sia lettere sia numeri devono restituire `"Alphanumeric"`
- Tutto il resto deve restituire `"Unknown"`

### Usa quello che hai appena imparato

Anche se questo esercizio si può risolvere in molti modi validi, la soluzione che ti chiediamo di scrivere usa un'istruzione `continue` e le tre funzioni viste sopra.

C'è anche un compito bonus che ti sfida a risolvere tutto l'esercizio in 42 righe di codice o meno. Quel limite non è necessariamente la soluzione più adatta. Un paio di righe in più probabilmente dà una soluzione migliore, e ci sono anche soluzioni più corte. Ma è un buon obiettivo per mettere alla prova le tue capacità.

Divertiti!
