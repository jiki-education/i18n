---
title: "Avventure nella poesia"
description: "Percorri un sentiero raccogliendo le parole di una poesia, ignorando tutto ciò che non è una parola."
en_md5: 9163e96662902baf726f464c9b58785f
---

Stai creando un gioco di poesia con un robot chiamato «Avventure nella poesia». Come primo passo, devi programmare il robot in modo che, mentre cammina, raccolga le parole e poi reciti la poesia alla fine.

Ogni casella contiene una di queste quattro cose:

1. Niente (`""`)
2. Una **parola** della poesia.
3. Un elemento decorativo come una foglia o una farfalla (un'emoji).
4. Una bandiera a scacchi, che dice al robot di fermarsi.

Per aiutarti, hai a disposizione alcune funzioni. Per prima cosa, hai la funzione `move()`, che dice al robot poeta di avanzare sulla casella successiva e restituisce tutto ciò che c'era su di essa. Hai poi una funzione `isEmoji(thing)`, che restituisce un valore booleano che ti dice se la stringa che passi è un'emoji. Infine hai una funzione `recite(poem)`, che devi usare con la poesia finale.

Il tuo compito è percorrere il sentiero, comporre la poesia e poi recitarla.

## Le regole

- Le **parole** vanno nella poesia, con uno **spazio tra una parola e l'altra**.
- Gli **elementi decorativi** non fanno parte della poesia e vanno ignorati.
- Un **apostrofo** occupa una casella tutta sua e unisce le parole ai suoi lati. `heart`, poi `'` e poi `s` diventa `heart's`.
- Anche la **virgola** occupa una casella tutta sua. Si attacca alla parola che la precede, ma dopo c'è comunque uno spazio.
- Il poeta smette di camminare quando raggiunge la **bandiera a scacchi**, oppure non appena ha raccolto **sette parole**. Vale quella che si verifica per prima.
- Ogni volta che il poeta si ferma, in qualunque modo lo faccia, recita ciò che ha raccolto. Puoi chiamare `recite()` **solo una volta**.

## Restrizioni

Ci sono molti modi per risolvere questo esercizio, ma vogliamo che tu usi le parole chiave `continue` e `break` che hai imparato di recente, quindi ecco alcune regole:

1. La soluzione deve usare sia `continue` che `break`.
2. Non puoi usare `&&` o `!` nella soluzione.
3. Non puoi scrivere nessuna funzione ausiliaria.
4. Puoi usare al massimo due livelli di indentazione:

```javascript

// Consentito: 2 livelli di indentazione
repeat() {
  if(...) {
    //...
  }
}

// Non consentito: 3 livelli di indentazione
repeat() {
  if(...) {
    if(...) {
    }
  }
}
```

Questo significa che la soluzione che scriverai sarà piuttosto «piatta».

Buona fortuna e divertiti!
