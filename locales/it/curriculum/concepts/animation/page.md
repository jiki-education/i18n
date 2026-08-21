---
title: "Animazione"
description: "Ingannare l'occhio facendogli vedere movimento, ridipingendo lo sfondo e ridisegnando ogni fotogramma in una posizione leggermente nuova."
en_md5: 536994294072afea52dab51d3bb7cab8
---

Finora, usando il ciclo `repeat` per disegnare, ogni nuova figura aggiungeva qualcosa all'immagine. Disegnando un mattone, riempivamo uno spazio vuoto; disegnando 10 cerchi, vedevamo 10 cerchi sullo schermo. È come dipingere: una volta che metti la vernice sul muro, non sparisce quando aggiungi un altro tratto accanto. Rimane lì. Ma cosa succede se vogliamo far sembrare che qualcosa si muova?

Hai mai visto un flip book? Erano molto popolari quando ero bambino, ora meno. Un flip book è un libricino in cui ogni pagina ha un disegno leggermente diverso. Sfogliando rapidamente le pagine, i tuoi occhi vedono i disegni cambiare ed il tuo cervello pensa che qualcosa si muova. In realtà non si sta muovendo. Sono solo tante immagini leggermente diverse, una dopo l'altra. Ed è esattamente come funziona l'animazione nel codice. Il trucco è lo stesso. Prima di disegnare una nuova scena, dipingiamo su tutta l'area di disegno con un colore di sfondo, un po' come iniziare una nuova pagina del nostro flip book, e poi facciamo un piccolo cambiamento alla scena per farla sembrare in movimento.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/flip-book-pages.webp"
  alt="Un flip book che mostra una figura stilizzata che corre, ogni pagina leggermente diversa così che la figura sembri muoversi"
  width="500"
  height="274"
/>

Prendiamo un pezzo di codice familiare: impostiamo una variabile `position` (posizione) e, in un blocco `repeat`, disegniamo un cerchio e spostiamo `position` di uno a destra. Se eseguiamo quel blocco `repeat` 100 volte, vedremo 100 cerchi sullo schermo.

```javascript
let position = 0
repeat(100) {
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circles-trail.webp"
  alt="Una scia di 100 cerchi blu disegnati da sinistra a destra sullo schermo"
  width="500"
  height="197"
/>

Ora guarda cosa succede se aggiungiamo solo un rettangolo semplice prima di disegnare il cerchio ogni volta.

```javascript
let position = 0
repeat(100) {
  rectangle(0, 0, 100, 100, "white")
  circle(position, 50, 5, "blue")
  position = position + 1
}
```

Invece di una scia di cerchi, i nostri occhi vengono ingannati e vedono un unico cerchio che sembra muoversi attraverso lo schermo.

<img
  class="concept-image"
  src="/static/images/concept-assets/animation/circle-glide-frames.webp"
  alt="Una sequenza di fotogrammi, ognuno un'area di disegno bianca fresca con un singolo cerchio blu un passo più a destra"
  width="500"
  height="187"
/>

Ogni volta che eseguiamo il ciclo, cancelliamo tutto e ridisegniamo uno sfondo nuovo, coprendo ciò che c'era prima, e poi disegniamo il cerchio nella sua nuova posizione.

Ogni passaggio del ciclo è come una nuova pagina del flip book.

E la cosa fondamentale da capire è che non stiamo muovendo il cerchio. Il cerchio non è un oggetto che scivola. È solo un disegno. Ogni volta che eseguiamo il ciclo, dipingiamo sopra il vecchio disegno e ne creiamo uno nuovo di zecca leggermente a destra. Il tuo occhio mette tutto insieme e vede un movimento, ma in realtà sono solo tanti disegni separati, uno dopo l'altro.

Puoi usare questa idea per creare un tramonto. Fai muovere il sole, cambia la sua dimensione, cambia il suo colore. È sempre la stessa tecnica. Imposta alcune variabili, dipingi uno sfondo pulito e disegna tutto. Aggiorna le variabili e poi ripeti.
