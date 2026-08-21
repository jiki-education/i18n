---
title: "Costruire array"
description: "Partire con un array vuoto e usare `push` per aggiungere elementi uno alla volta mentre scorri i dati."
en_md5: c3358ca032f965cf058bb72df37ffbd4
---

Fino ad ora hai lavorato con array il cui valore viene fissato all'inizio e resta invariato. Ma cosa succede se vuoi aggiungere elementi ad un array nel tempo? Per farlo, gli array hanno un metodo chiamato `push` (aggiungi).

Push ha un solo input: l'elemento che vuoi inserire in fondo all'array. In questo caso, vogliamo aggiungere la parola `"Isaac"` in coda all'array che contiene già `"DJ"` e `"Bethany"`, usando il metodo `push`.

Per farlo, Jiki tira fuori l'array dalla scatola, aggiunge `"Isaac"` alla fine della catena e poi rimette il tutto nella scatola. Nota che, a differenza di quanto accadeva con le stringhe, dove Jiki creava ogni volta una nuova stringa, qui sta davvero modificando l'array esistente.

Un pattern che vedrai spesso nella programmazione è partire con un array vuoto e costruirlo man mano. Puoi immaginare di avere una grande lista di nomi e di volerla scorrere. Ogni volta che troviamo un nome che è un mentore, lo aggiungiamo all'array.

Questo schema di ciclo ed aggiunta lo userai spesso.
