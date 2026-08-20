---
title: "Aggiungere input alle funzioni"
description: "Aggiungere fessure di input alle tue funzioni, così possono fare cose diverse in base ai valori passati."
en_md5: f70d737888fcbda3306196ff069eb2f1
---

Le funzioni che hai creato finora fanno sempre la stessa cosa. `turnAround` (girati) fa sempre girare a sinistra due volte. `shootIfAlienAbove` (spara se l'alieno è sopra) controlla e spara sempre.

Ma pensa alle funzioni che hai usato durante il corso, a come fanno cose diverse a seconda degli input. `Rectangle` prende left, top, width e height come input, e poi disegna un rettangolo diverso in base a ciò che gli dici.

Ora aggiungeremo anche alle tue funzioni le fessure di input.

Per farlo, devi sapere due cose. La prima è come appare, cosa devi scrivere, e la seconda è cosa succede davvero.

La prima parte è piuttosto semplice. Devi solo aggiungere delle normali parentesi tonde (`()`) e poi i nomi degli input che vuoi.

Immagina di creare una funzione che deve sparare molte volte. Chiamiamola `shootMany` (spara più volte).

La scriveremo così:

```javascript
function shootMany(numShots) {
  // ...
}
```

Quando vuoi utilizzare questa funzione, la richiami specificando il numero di spari desiderato:

```javascript
shootMany(5)
shootMany(2)
```

Ora arriva il punto chiave. Quando il codice viene eseguito, qualsiasi valore tu abbia messo in quell'input (`5`, `2` o altro), il mini-Jiki con il cappello, dentro la funzione, prende quel valore e lo mette in una scatola chiamata `numShots` (numero di spari). Poi appoggia quella scatola sugli scaffali interni, così puoi usarla quando scrivi il codice.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-box.webp"
  alt="Mini-Jiki all'interno della macchina shootMany che inserisce l'input in una scatola etichettata numShots"
  width="500"
  height="376"
/>

Lo ripeto.

Quando scriviamo `shootMany(5)` per usare la funzione, Jiki, quello all'esterno, prende il valore `5` e lo inserisce nella fessura di input di `shootMany`.

Dentro la macchina, il mini-Jiki prende quel `5` e lo mette in una scatola chiamata `numShots`, perché è il nome che hai dato a quell'input. Da quel momento, quella scatola è disponibile dentro la funzione, così puoi usarla nel codice.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-on-shelf.webp"
  alt="Mini-Jiki che mette la scatola numShots sugli scaffali all'interno della macchina shootMany"
  width="500"
  height="302"
/>

All'interno della funzione, puoi usare la scatola `numShots` come useresti qualsiasi altra scatola. Non c'è niente di speciale nel nome `numShots`: avresti potuto chiamarla in qualsiasi modo. È semplicemente l'istruzione che dai a mini-Jiki: ogni volta che qualcuno usa quella fessura di input, lui deve creare una scatola con quell'etichetta e metterci dentro il valore che è stato passato.

Una volta che hai un valore in quella scatola, puoi usarlo come useresti qualsiasi altra scatola. Per esempio, puoi usare la scatola `numShots` dentro un ciclo `repeat` per sparare il numero corretto di volte.

Puoi anche avere più di un input: basta separarli con una virgola.

Se abbiamo una funzione chiamata `drawStar` (disegna stella) che disegna una stella in base alla sua posizione in alto a sinistra, la scriveremo così:

```javascript
function drawStar(left, top) {
  // ...
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-two-slots.webp"
  alt="La macchina drawStar con due fessure di input, che riceve due valori separati"
  width="453"
  height="400"
/>

Quando la funzione viene chiamata, mini-Jiki memorizza i valori passati agli input nelle scatole chiamate `left` (sinistra) e `top` (alto), e le mette sugli scaffali all'interno della funzione. Da quel momento, puoi usare quelle scatole come useresti qualsiasi altra variabile nel codice della funzione.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-boxes-shelf.webp"
  alt="Mini-Jiki che memorizza i due input in scatole etichettate left e top sugli scaffali all'interno della macchina drawStar"
  width="431"
  height="400"
/>
