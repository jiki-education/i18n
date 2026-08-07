---
title: "Festa per Nomi Specifici"
description: "Scopri chi può entrare ad una festa molto esclusiva."
en_md5: 3c03097aed9465c8f132574b033ad7ce
---

Stasera c'è una festa molto esclusiva: possono entrare solo le persone con il nome che inizia con una specifica sequenza di lettere!

Il tuo compito è scrivere una funzione chiamata `handleGuest` (controllare l'ospite) che accetta due input:

- `name`: il nome della persona alla porta
- `allowedPrefix`: le lettere iniziali richieste per la festa di stasera

Dovrebbe restituire `true` se la persona può entrare, e `false` se non è ammessa.

Per esempio:

- Se il prefisso (la lettera iniziale) consentito per stasera è `"S"`, allora Sarah può entrare (restituisce `true`) ma Brad non può entrare (restituisce `false`).
- Se il prefisso consentito è `"Brad"`, allora Brad e Bradley possono entrare, ma Brian non può entrare.

### Funzioni ausiliarie

Mentre lavori a questo esercizio, ti accorgerai che è necessario calcolare la lunghezza del nome dell'ospite ed anche la lunghezza del prefisso consentito. Questa è l'occasione perfetta per creare una funzione ausiliaria chiamata `getLength(someString)`, che conta quante lettere ci sono nella stringa. Poi potrai usare questa funzione in diversi punti all'interno di `handleGuest(...)`.

Lo scenario bonus ti sfida a risolvere questo esercizio nel minor numero di righe possibile. Potresti anche trovare altre soluzioni che preferisci, che usano più righe. Va benissimo (e sei incoraggiato ad esplorare approcci diversi), ma prova a trovare anche la versione più corta.

Divertiti!
