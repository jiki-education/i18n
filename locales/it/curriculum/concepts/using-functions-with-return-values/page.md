---
title: Funzioni che restituiscono qualcosa
description: Prendere un valore che esce dallo scivolo di output di una funzione e usarlo nel tuo codice.
en_md5: 830f19fb6aaf184c1f32ade792b60a12
---

Finora abbiamo visto funzioni che svolgono un'azione visibile nel mondo.
La funzione `circle` disegna un cerchio, `move` sposta il tuo personaggio.

Ma alcune funzioni si comportano in modo diverso.
Invece di compiere un'azione esterna, restituiscono un valore che puoi usare nel tuo codice.

Quando una funzione fornisce a Jiki un valore da utilizzare nel programma, diciamo che la funzione restituisce (_return_) quel valore.

Puoi immaginare queste macchine come dispositivi che, dopo aver ricevuto i loro input, producono un output. La macchina elabora ciò che le hai dato e ti consegna un risultato: può essere un numero, una stringa, un valore che Jiki può prendere e usare nel codice.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/machine-with-return-chute.webp"
  alt="Una macchina con uno scivolo di output sul fianco, pronta a inviare un valore indietro a Jiki"
  width="500"
  height="317"
/>

La maggior parte delle funzioni, circa il 95%, restituisce un valore.
Possono eseguire dei calcoli e restituire il risultato, oppure combinare delle stringhe e darti la stringa finale.
Possono restituire l'ora corrente ogni volta che attivi quella macchina.

Vediamo quest'ultimo caso.
Supponiamo di avere una funzione chiamata `getCurrentTime` (ottieni l'ora corrente).
Ogni volta che Jiki attiva la macchina, dalla sua uscita spunta un foglietto di carta: sopra c'è scritto l'ora, ad esempio `14:35`.

La macchina prende gli input, li elabora e ti restituisce un risultato: un valore che Jiki può afferrare e usare nel codice.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/paper-out-of-chute.webp"
  alt="La macchina getCurrentTime con un foglio di carta che riporta 14:35 che scivola fuori dallo scivolo di output"
  width="500"
  height="312"
/>

E poi possiamo inserire quel valore restituito in una scatola usando `let`:

```javascript
let time = getCurrentTime()
```

Jiki attiverà la macchina, prenderà l'ora corrente dalla bocca della macchina e la conserverà in una scatola chiamata `time`.

<img
  class="concept-image"
  src="/static/images/concept-assets/using-functions-with-return-values/jiki-boxing-time.webp"
  alt="Jiki mette il foglio con 14:35 prelevato dallo scivolo in una scatola etichettata time"
  width="372"
  height="400"
/>

Ora, è importante capire che il foglio di carta che Jiki inserisce nella scatola rimane quello, in quel momento.
Anche se l'orario reale cambia mentre il tuo programma è in esecuzione, la scatola contiene ancora quel foglio con scritto `14:35`.

Una volta che l'oggetto è nella scatola, resta com'è. Non cambia magicamente.

Se in futuro vogliamo cambiare di nuovo l'ora corrente nella scatola, dobbiamo usare di nuovo la nostra funzione `getCurrentTime` per ottenere un nuovo foglietto con l'ora aggiornata.

La maggior parte delle funzioni che restituiscono un valore ha anche degli input.

Per esempio, potremmo avere una funzione `join` (unire) che prende due stringhe come input e le restituisce unite con uno spazio. Quindi, se usiamo una macchina `join` con `"Hello"` e `"World"` come input, dalla bocca della macchina uscirà un foglietto nuovo con scritto `"Hello World"`.

```javascript
join("Hello", "World"); // "Hello World"
```
