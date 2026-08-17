---
title: "Il ciclo `repeat`"
description: "Usare la parola chiave `repeat` per dire a Jiki di eseguire il codice tra le parentesi graffe un certo numero di volte."
en_md5: f37a63911f75934656cbf04a38ff2b60
---

Finora abbiamo scritto tutto in modo lineare: Jiki segue ogni istruzione in ordine, dall'alto verso il basso.

Ora vediamo come Jiki può uscire da questo flusso rigido dall'alto verso il basso, e in particolare come possiamo dirgli di eseguire la stessa sezione di codice tante volte di fila.

Per esempio, immagina di essere nel labirinto e di voler avanzare di 10 passi. C'è una funzione `walk` che ti aiuta a farlo, ma se non esistesse? Se avessi solo la funzione `move` (avanza)?

Invece di scrivere `move` 10 volte di fila, cosa che diventa molto ripetitiva, quello che ci serve è poter dire: "Ehi, Jiki, fai 10 volte la prossima cosa che dico.

`Move`."

Per ottenere questo comportamento nel codice, dobbiamo usare la nostra prima parola chiave (_keyword_ in inglese). Le parole chiave assomigliano un po' alle macchine perché sono istruzioni che Jiki capisce, ma non funzionano allo stesso modo. Le macchine sono oggetti che Jiki prende dallo scaffale, mentre le parole chiave sono capacità già presenti nel suo cervello. Durante il corso impareremo circa 20 parole chiave diverse, e la prima è la parola chiave `repeat`.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/jiki-keywords-2.webp"
  alt="Jiki circondato da parole chiave come repeat, if, else, and, or, con la nota che le parole chiave sono istruzioni che Jiki capisce"
  width="358"
  height="400"
/>

La parola chiave `repeat` fa esattamente quello che ho detto sopra: serve a dire a Jiki "Esegui un comando più volte di seguito". Dai un'occhiata a questo codice: per prima cosa usiamo la parola chiave `repeat` per indicare che Jiki dovrà ripetere un'azione. Nelle parentesi tonde specifichiamo quante volte vogliamo che Jiki esegua quel comando. Dentro le parentesi graffe inseriamo le istruzioni che vogliamo che Jiki ripeta. Questo schema è incredibilmente comune nella programmazione: scriviamo una parola chiave, di solito con un'informazione, in questo caso il numero di volte in cui ripetere qualcosa, e poi un blocco di codice racchiuso tra parentesi graffe. Quindi, tornando al mondo del labirinto, invece di scrivere `move`, `move`, `move`, `move`, possiamo scrivere "ripeti quattro volte `move`".

```javascript
repeat(4) {
  move()
}
```

Jiki vedrà quel codice e userà la macchina `move` quattro volte di fila.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/jiki-running-loop.webp"
  alt="Jiki che usa la macchina move quattro volte di fila, una dopo l'altra"
  width="421"
  height="400"
/>

Non siamo limitati a una sola istruzione tra le parentesi graffe. Jiki può eseguire più comandi ripetutamente. Possiamo dirgli di eseguire `move`, poi `turnLeft`, e di ripetere tutto questo quattro volte. Se Jiki vede questo codice, userà la macchina `move`, poi la macchina `turnLeft`, poi di nuovo `move`, poi `turnLeft`, e così via, finché non le avrà usate entrambe quattro volte.

```javascript
repeat(4) {
  move()
  turnLeft()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/if-else-code.webp"
  alt="Jiki che usa la macchina move e poi la macchina turnLeft, ripetendo la coppia di azioni quattro volte"
  width="500"
  height="390"
/>

Queste istruzioni di ripetizione si chiamano cicli (_loop_ in inglese), e ci sono tanti cicli diversi che possiamo usare, ognuno con un funzionamento un po' diverso.

C'è un'ultima informazione da conoscere: quando lavori con i cicli, tenere il codice in ordine diventa essenziale. Se il tuo codice ha una buona struttura visiva, è molto facile capire cosa sta succedendo. Ma se non ce l'ha, se dimentichi di indentare bene o fai confusione con l'indentazione, i comandi si confondono molto facilmente. Per questo nel corso avremo sempre una regola: metti la parentesi graffa di apertura sulla stessa riga dell'istruzione (_statement_ in inglese) `repeat`. Metti la parentesi graffa di chiusura su una riga a sé, dopo l'istruzione, e indenta sempre di due spazi il codice compreso tra queste graffe. In questo modo tutto resterà veramente in ordine; se te ne dimentichi o provi a seguire uno schema diverso, otterrai un errore.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat/multiple-things-in-loop.webp"
  alt="Jiki che indica l'indentazione e la nuova riga che tengono in ordine il blocco di codice di un ciclo"
  width="500"
  height="398"
/>
