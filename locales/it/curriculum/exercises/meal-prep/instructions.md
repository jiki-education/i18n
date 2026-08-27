---
title: "Preparazione dei pasti"
description: "Scopri quali ingredienti devi comprare per la ricetta."
en_md5: 2326187734cf4b307264fef2b0dea2fd
---

Sei il tipo di persona a cui piace fare un salto al negozio ogni giorno per comprare gli ingredienti che ti servono per cena. È una bella scusa per sgranchirti le gambe e scambiare due chiacchiere con il negoziante sotto casa.

Ogni giorno scegli una ricetta, poi controlli cosa c'è nel frigo e annoti cosa devi comprare.

Ora hai deciso di semplificarti un po' la vita scrivendo un programma che fa il lavoro faticoso al posto tuo! Confronta quello che c'è sulla lista con quello che c'è nel frigo e restituisce la differenza.

Il tuo compito è scrivere una funzione chiamata `shoppingList(fridgeContents, recipeItems)` (lista della spesa). Accetta due input: il contenuto del frigo come array di stringhe e gli ingredienti della ricetta, anche questi come array di stringhe. Deve restituire ciò che devi comprare, come array di stringhe.

Per esempio:

```javascript
let fridgeContents = ["tomatoes", "leaves", "milk"]
let recipeItems = ["beef", "tomatoes", "peppers"]

shoppingList(fridgeContents, recipeItems)
// ["beef", "peppers"]
```

### Il metodo push

Per risolvere l'esercizio devi costruire l'array usando il metodo `.push(element)`. Puoi creare un solo nuovo array nel codice. Riguarda il video precedente se non sei sicuro di cosa fare.

Potresti anche usare il metodo `includes` (più sotto trovi un ripasso).

Buon divertimento!
