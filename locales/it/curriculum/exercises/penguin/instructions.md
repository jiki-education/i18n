---
title: "Pinguino"
description: "Completa il disegno simmetrico di un pinguino."
en_md5: 5a0659ec6a7911fcebe11756dae664f7
---

In questo esercizio disegneremo per la prima volta delle ellissi e rifletteremo un po' di più sulla simmetria che abbiamo menzionato in Volpe geometrica.

Questo esercizio utilizza delle ellissi. Le ellissi sono come cerchi allungati. Specifichiamo comunque il centro, ma invece di usare un solo raggio ne usiamo due: il raggio orizzontale ed il raggio verticale. Se il raggio verticale è più grande di quello orizzontale, l'ellisse apparirà alta. Se invece il raggio orizzontale è più grande di quello verticale, l'ellisse apparirà schiacciata. Se imposti entrambi i raggi allo stesso valore, ottieni di nuovo un cerchio!

La funzione `ellipse` prende 5 input: la posizione del centro (`centerX`, `centerY`), il raggio orizzontale (`radiusX`), il raggio verticale (`radiusY`), e il colore:

<img src="/static/images/exercise-assets/penguin/intro-ellipse.webp" alt="Diagramma della funzione ellisse" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Il pinguino

Abbiamo disegnato metà dell'immagine per te. Il tuo compito è disegnare il lato destro del pinguino. Il disegno finito dovrebbe apparire così:

<img src="/static/images/exercise-assets/penguin/penguin-finished.webp" alt="Pinguino" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Ricavare le coordinate corrette

A differenza degli esercizi precedenti, l'obiettivo è risolvere questo esercizio **SENZA** passare il mouse sopra le coordinate o tirarle a indovinare.

Leggendo il codice che c'è, dovresti riuscire a capire gli altri dettagli per renderla simmetrica. Ricorda: l'angolo in alto a sinistra dell'area di disegno è `0,0`. L'angolo in basso a destra è `100,100`. Il pinguino è posizionato al centro.

Per il naso, devi **modificare** le coordinate centrali del triangolo. Non aggiungere un nuovo triangolo.

**Inizia premendo _"Esegui il codice"_** per vedere come appare l'immagine di partenza. Divertiti!
