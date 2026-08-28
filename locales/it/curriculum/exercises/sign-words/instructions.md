---
title: "Parole per l'insegna"
description: "Scomponi il nome di un'attività nelle singole parole da stampare."
en_md5: 2f780499eb5dd8f51479d4142bc16acc
---

Qualche tempo fa hai creato un programma per aiutare un cliente con la sua attività di produzione di insegne. Ora è tornato e ha una nuova esigenza. Adesso produce insegne più grandi: stampa in anticipo ogni parola e poi assembla le parole sulle vetrine dell'attività direttamente sul posto.

Ha bisogno che tu crei il primo passo del programma: prendere il nome dell'attività e scomporlo nelle parole da stampare.

Scrivi una funzione chiamata `signWords(businessName)` (parole per l'insegna) che riceve il nome dell'attività e restituisce un array con le parole che compongono il nome. Per esempio, `signWords("Frank's Hotdogs")` dovrebbe restituire `["Frank's", "Hotdogs"]`.

Le parole sono elementi separati da spazi. Ma c'è una cosa da tenere a mente... A volte, per sbaglio, i clienti inviano il nome della propria attività con più spazi consecutivi. Se succede, devi ignorarli, quindi <code>"Frank's&nbsp;&nbsp;&nbsp;Hotdogs"</code> dovrebbe comunque restituire `["Frank's", "Hotdogs"]`.

### Push e split

Il punto fondamentale di questo esercizio è usare il metodo `push` per costruire l'array. Puoi usare anche il metodo `split`, ma potresti trovare più semplice fare a mano il lavoro di separazione. Nessuno dei due è giusto o sbagliato. Se ti serve un ripasso su come funzionano i metodi, dai un'occhiata qui sotto.

Divertiti!
