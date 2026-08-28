---
title: "Volpe geometrica"
description: "Costruisci la faccia geometrica della volpe con triangoli colorati."
en_md5: ace60854184185ffc1ec1e82e45af4bf
---

Questo esercizio ti presenta la funzione `triangle`. La usi con 7 input. I primi 6 input sono coppie di coordinate per i tre angoli. L'ultimo input è il `color`:

- `x1` (coordinata x del primo angolo), `y1` (coordinata y del primo angolo): il primo punto d'angolo
- `x2` (coordinata x del secondo angolo), `y2` (coordinata y del secondo angolo): il secondo punto d'angolo
- `x3` (coordinata x del terzo angolo), `y3` (coordinata y del terzo angolo): il terzo punto d'angolo
- `color`: il colore del triangolo (ad esempio `"orange"`)

<img src="/static/images/exercise-assets/foxy-face/intro-triangle.webp" alt="Diagramma della funzione triangolo" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Disegnare una faccia di volpe

Il tuo compito è usare i triangoli per costruire la faccia geometrica della volpe:

<img src="/static/images/exercise-assets/foxy-face/example.svg" alt="Volpe geometrica" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

La faccia è simmetrica (il lato sinistro è identico al lato destro). Ha 8 triangoli in totale:

- Due guance `"white"`
- Due orecchie `"brown"`
- Due metà della faccia `"orange"`
- Un naso `"charcoal"` (due triangoli)

(Assicurati di usare quei colori quando disegni i triangoli, e ricordati di controllare che li scrivi come stringhe!)

### Trovare le coordinate corrette

Abbiamo disegnato i contorni di alcune parti per aiutarti a iniziare. Se **segui l'ordine indicato nei commenti**, vedrai che tutto risulterà un po' più semplice.

Come negli esercizi precedenti, puoi **passare il mouse sull'area di disegno** per trovare le coordinate; inoltre, **tutti i numeri usati sono divisibili per 5** (ad esempio `5`, `10`, `15`, ecc. sono validi).

Buona fortuna!
