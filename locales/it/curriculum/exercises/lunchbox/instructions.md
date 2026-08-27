---
title: "Portapranzo"
description: "Inserisci più oggetti possibile in un portapranzo a capienza limitata."
en_md5: af9957974ff71f16820079737f887b0e
---

Da bambino, ogni giorno preparavo il portapranzo per la scuola. Mia madre mi metteva a disposizione gli oggetti (ordinati con cura dal più grande al più piccolo) e io cercavo di farci stare il più possibile, ma ovviamente il portapranzo poteva contenerne solo una certa quantità. Tutto quello che non ci stava dovevo metterlo nello zaino e portarlo con me tutto il giorno, invece di lasciarlo nell'armadietto.

In questo esercizio, il tuo compito è creare un algoritmo che stabilisca cosa posso mettere nel portapranzo e cosa devo mettere nello zaino.

Devi scrivere una funzione chiamata `packLunch(items, capacity)` (prepara il pranzo), che accetta due input: l'array di oggetti (dal più grande al più piccolo) e la capienza del portapranzo `capacity` (un numero).

L'array di oggetti è un array annidato: ogni oggetto è a sua volta un array con due elementi: il nome dell'oggetto e la sua dimensione. Gli oggetti sono sempre ordinati dal più grande al più piccolo. Per esempio, l'array di oggetti potrebbe essere:

```javascript
[
  ["Water bottle", 20],
  ["Crisps", 10],
  ["Peanut Butter Sandwich", 8],
  ["Chocolate bar", 6],
  ["Satsuma", 3]
]
```

Il portapranzo ha una capienza massima. Devi capire quali oggetti possono entrare nel portapranzo. Fai entrare il maggior numero possibile di oggetti. Tutto il resto deve andare nello zaino.

La funzione deve restituire un array contenente due elementi. Il primo elemento è un array con gli oggetti per il portapranzo, il secondo con gli oggetti per lo zaino. Entrambi gli array devono essere ordinati dal più piccolo al più grande.

Per esempio, per l'array qui sopra, con una capienza di 20, dovresti restituire:

```javascript
return [
  ["Satsuma", "Chocolate bar", "Peanut Butter Sandwich"],
  ["Crisps", "Water bottle"]
]
```

### Metodi utili

Come in tutti gli esercizi di questa sezione, ti servirà il metodo `.push(element)` per costruire gli array.

Hai anche un nuovo metodo chiamato `[...].toReversed()`, che crea una copia di un array con tutti gli elementi in ordine inverso. Per esempio:

```
["A", 1, true].toReversed()
// [true, 1, "A"]
```

Non devi usarlo per forza, ma potrebbe esserti utile.

Buon divertimento!
