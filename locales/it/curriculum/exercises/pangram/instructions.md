---
title: "Pangramma"
description: "Verifica se una frase contiene ogni lettera dell'alfabeto, senza distinzione tra maiuscole e minuscole."
en_md5: 2f0271add2facf8e75ecb8afde53682e
---

Benvenuto alla seconda parte della serie sui Pangrammi. Ricorda: un pangramma è una frase che utilizza ogni lettera dell'alfabeto almeno una volta.

Questo esercizio è una versione più complessa del precedente esercizio sul Pangramma che hai risolto, perché include anche le lettere maiuscole. Questo aggiunge una complessità inaspettata.

Crea una funzione chiamata `isPangram` (verifica se la frase è un pangramma) che riceve una frase come stringa e restituisce un valore booleano che indica se è un pangramma oppure no.

Ti abbiamo fornito il tuo codice precedente come punto di partenza.

### Funzioni ausiliarie

Oltre alla tua funzione ausiliaria esistente (che ti abbiamo suggerito di chiamare `includes`), ti consigliamo di creare due nuove funzioni ausiliarie per aiutarti a risolvere questo esercizio. I nomi delle funzioni sono nomi standard, che ti raccomandiamo di mantenere:

1. `indexOf(haystack, needle)`: una funzione che calcola **in quale posizione** si trova l'ago nel pagliaio. Quindi, invece di restituire `true`/`false` come fa `includes`, restituisce l'**indice** dell'ago. Per esempio, `indexOf("Jeremy", "r")` restituirebbe `2` (ricorda che si conta a partire da 0).
2. `toLowerCase(someString)`: una funzione che riceve una stringa e la restituisce convertita in minuscolo. Per esempio, `toLowerCase("JeReMy")` restituirebbe `"jeremy"`.

Buon divertimento!
