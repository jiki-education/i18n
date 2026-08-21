---
title: "La parola chiave `break`"
description: "Utilizzare la parola chiave `break` all'interno del corpo di un ciclo per uscire immediatamente dal ciclo e passare al codice che segue."
en_md5: bd746b6c93016dcb2789bd26e38ab33a
---

La parola chiave `break` può essere usata in qualsiasi punto del corpo del ciclo.

Il codice racchiuso tra le parentesi graffe è il corpo del ciclo. Quando Jiki incontra `break`, interrompe immediatamente il ciclo ed esegue il codice che si trova dopo.

Quindi, se abbiamo un vincolo che dice di eseguire il ciclo 50 volte, ma vogliamo fermarlo quando l'utente ha sparato cinque volte, possiamo iniziare con un ciclo `for` che conta fino a 50.

Dopo all'interno del corpo del ciclo, possiamo aggiungere una condizione che controlla se l'utente ha sparato cinque volte e, in tal caso, usare `break` per uscire dal ciclo in anticipo.

```javascript
for (let i = 0; i < 50; i++) {
  if (numShots >= 5) {
    break; // esci dal ciclo
  }
}
```
