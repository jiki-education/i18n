---
title: "Ripara il muro"
description: "Ripara i buchi in un muro danneggiato con dei rettangoli."
en_md5: d3801d3e7afec83435698bb052cf876e
---

Benvenuto al tuo primo esercizio di disegno. In questo esercizio disegnerai rettangoli usando la funzione `rectangle` (rettangolo).

Per disegnare rettangoli abbiamo bisogno di conoscere le distanze dall'alto e da sinistra, la larghezza e l'altezza della figura. Quando usiamo la funzione `rectangle`, possiamo specificare questi come _input_ (i valori da passare alla funzione):

- `left` (sinistra): il lato sinistro del rettangolo
- `top` (parte superiore): la parte superiore del rettangolo
- `width` (larghezza): quanto è largo il rettangolo
- `height` (altezza): quanto è alto il rettangolo

<img src="/static/images/exercise-assets/fix-wall/intro-rectangle.webp" alt="Ripara il muro" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

Stai sempre disegnando su un'area di disegno di larghezza 100 e altezza 100. Quindi l'angolo in alto a sinistra dell'area di disegno è `0,0` e l'angolo in basso a destra è `100,100`.

### Riparare il muro

Il tuo compito è usare tre rettangoli per riempire i buchi nel muro.

### Trovare le coordinate corrette

Puoi **passare il mouse sopra l'area di disegno** per trovare le coordinate.

Per semplificarti la vita, **i valori di top, left, height e width sono tutti divisibili per 10** (per esempio `10`, `20`, `30`, ecc. sono validi, mentre `5`, `12`, `25`, ecc. non lo sono).
