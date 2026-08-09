---
title: "Cena di gala"
description: "Cerca il tavolo a cui è seduto un ospite a partire dallo schema dei posti a tavola."
en_md5: b93bf1949411dbc2a19e5b48c3ae869a
---

Sei tornato al tuo lavoro occasionale come buttafuori. È la sera dopo l'After Party, e c'è un'altra festa. Questa volta è una cena di gala, quindi stasera sei meno il tipo grosso alla porta e più quello con taccuino e panciotto.

Questo non è decisamente il posto per usare **solo** il tuo nome. Anzi, non è proprio il posto per usare il tuo nome. Qui, tutti vengono chiamati con un titolo (_honorific_ in inglese) (Miss, Mr, Dr, ecc.) ed il cognome.

Gli organizzatori ti hanno consegnato lo schema dei posti a tavola sotto forma di due liste separate. Una lista contiene i nomi completi degli invitati. L'altra lista contiene il nome del tavolo dove ogni invitato è seduto (ogni tavolo ha il nome di alberi e fiori). Come per "Dopo la festa", le due liste corrispondono: l'invitato numero 3 della prima lista siede al tavolo numero 3 della seconda.

Quando il signor Pitt arriva, devi riconoscere che è il "Brad Pitt" presente nella tua lista e indicargli il tavolo assegnato.

Scrivi una funzione chiamata `tableFor` (cerca il tavolo a cui un ospite è seduto). La funzione ha tre input:

- Il primo è la lista dei nomi completi degli invitati, come stringhe
- Il secondo è la lista dei nomi dei tavoli, nello stesso ordine degli invitati
- Il terzo è l'ospite in arrivo, formattato come un titolo seguito dal cognome (ad es. "Mr Pitt")

Indica il nome del tavolo a cui l'ospite è assegnato. Se non compare nello schema dei posti, usa la stringa `"No table found"` (niente soluzioni improvvisate, qui!).

Il titolo è sempre un elemento unico (Miss, Mr, Dr) e ciò che viene dopo è il cognome dell'ospite. La maggior parte dei cognomi è formata da una sola parola, ma alcuni cognomi "importanti" (o particolari) ne hanno due.

Fai attenzione: molti cognomi si assomigliano.

### Metodi e proprietà di stringhe ed array

Oltre alla proprietà `.length` che hai visto nell'ultimo esercizio, ci sono quattro metodi che possono tornarti utili. Ci sono diversi modi per risolvere questo esercizio, ma questi ti permetteranno di arrivare alla soluzione più breve.

`"...".split(substring)` divide una stringa usando un'altra stringa. Ad esempio:

```js
`"Jeremy".split("e")`
// ["J", "r", "my"]
```

`[...].slice(start)` estrae una parte di un array, a partire dall'indice `start` e proseguendo fino alla fine dell'array. Gli elementi estratti vengono copiati in un NUOVO array, che ti viene restituito. Di fatto, questo rimuove i primi `start` elementi. Ad esempio:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].slice(2)
// ["Aron", "DJ", "Glenn", "Isaac", "Bethany"]
```

`[...].join(string)` unisce gli elementi di un array usando la stringa fornita. Ad esempio:

```js
["Jeremy", "Erik", "Aron", "DJ", "Glenn", "Isaac", "Bethany"].join(" likes ")
// Jeremy likes Erik likes Aron likes DJ likes Glenn likes Isaac likes Bethany
```

`"...".endsWith(string)` ti dice se una stringa termina con un'altra stringa. Ad esempio:

```js
"Jeremy".endsWith("emy")
// true

"Jeremy".endsWith("Jer")
// false
```
