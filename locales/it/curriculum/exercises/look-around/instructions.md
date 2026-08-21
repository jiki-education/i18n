---
title: "Guardati intorno"
description: "Costruisci le funzioni che controllano cosa c'è intorno a te nel labirinto."
en_md5: 9ca44b407519cf6b3d5fa9f3f0e3b3d3
---

L'ultima volta hai aggiunto una nuova funzione per aiutarti a navigare nel labirinto: `turnAround()` (girati). Abbiamo lasciato il tuo codice sulla sinistra così puoi continuare a lavorarci.

Questa volta abbiamo rimosso tre funzioni su cui facevi affidamento prima. Il tuo compito in questo esercizio è implementarle tu stesso!

### Le funzioni che devi scrivere

Le tre funzioni che devi creare sono `canTurnLeft()` (può girare a sinistra), `canTurnRight()` (può girare a destra) e `canMove()` (può muoversi).

Nessuna di queste funzioni ha input. Tutte devono restituire un valore booleano che indica se è possibile muoversi in quella direzione.

Per aiutarti, abbiamo aggiunto una nuova funzione `look(direction)` (guarda). Questa funzione prende un input: una direzione che può essere `"left"`, `"right"` o `"ahead"`. Restituisce uno tra:

- `"start"` (Il punto di partenza)
- `"target"` (La meta)
- `"empty"` (Via libera!)
- `"fire"` (Attenzione!)
- `"poop"` (Che schifo!)
- `"wall"` (Ahi!)

### Suggerimenti utili

Ecco tre consigli utili.

1. Per prima cosa, conviene **iniziare creando le funzioni** che il tuo codice userà: `canTurnLeft()`, `canTurnRight()` e `canMove()`. All'inizio puoi farle restituire un valore di default (`true` o `false`), così il programma funziona mentre costruisci la logica passo dopo passo. In questo modo eviti di ricevere continuamente errori del tipo "la funzione non esiste" finché non hai scritto tutto.
2. **Non serve modificare il codice già presente:** basta aggiungere le tre funzioni all'inizio del file.
3. Se ti aiuta, puoi creare anche **altre funzioni** oltre a quelle richieste: a volte suddividere il lavoro rende l'implementazione più semplice e più chiara.
