---
title: "Capire i cicli `for`"
description: "Un ciclo con tre parti (un inizializzatore, una condizione e un incremento) che ti dà il pieno controllo sull'iterazione."
en_md5: 0ad4155ded18c2df27d29e5355bd0532
---

Forse ricordi che il ciclo repeat non esiste davvero in JavaScript. È solo qualcosa che abbiamo aggiunto per renderti la vita un po' più facile all'inizio.

Quindi cosa usiamo al suo posto? Usiamo un normale ciclo `for`, che `funziona così.`

```javascript
for (let i = 0; i < 5; i++) {
  // ...
}
```

Ora capisci perché il primo giorno avrebbe potuto sembrarti un po' complicato.

Ora hai tutte le conoscenze che ti servono per prendere familiarità con il concetto. Analizziamolo insieme.

Un ciclo for ha tre componenti: un inizializzatore, una condizione e un incremento.

L'inizializzatore, cioè la parte `let i = 0`, viene eseguito all'inizio dell'intero ciclo. Viene eseguito una sola volta. In questo caso crea una "scatola" chiamata `i` impostata a zero. `i` è solo una lettera usata per tenere traccia di un valore mentre il ciclo procede: per tradizione si usa `i` o `x`.

La parte successiva, la condizione, viene eseguita ogni volta, prima di ogni iterazione del ciclo.

Se la condizione è vera, il ciclo continua; se è falsa, il ciclo si ferma.

E infine c'è l'incremento, cioè `i++`.

`i++` significa semplicemente la stessa cosa di `i = i + 1`. È solo una scorciatoia, un modo per aumentare `i` di uno ogni volta.

Quindi, in questo esempio, impostiamo `i` a `0`. Controlliamo se `i` è minore di `2`, e lo è, `quindi il ciclo viene eseguito`.

Alla fine aumentiamo `i` di uno, così `i` diventa uno. Zero più uno fa uno.

Poi il ciclo riparte. Controlliamo se `1` è minore di `2`.

Lo è, quindi il ciclo viene eseguito. Alla fine aumentiamo di nuovo `i`. Ora vale `2`: `1` più `1` fa `2`.

```javascript
i = 0
i < 2 // true - eseguiamo il ciclo
...   // Facciamo l'iterazione
i = i + 1 // 1

i < 2 // true - eseguiamo il ciclo
...   // Facciamo l'iterazione
i = i + 1 // 2

i < 2 // false - usciamo dal ciclo
```

Poi ci proviamo una terza volta. Questa volta controlliamo se `2` è minore di `2`, e non lo è, quindi il ciclo non viene eseguito: anzi, il ciclo è proprio finito. Passiamo semplicemente al codice che viene dopo.

In totale abbiamo eseguito il ciclo due volte, ed è una cosa utile da sapere: finché partiamo da zero e usiamo una condizione `i < n`, il numero `n` corrisponde al numero di volte in cui il ciclo verrà eseguito.

Quindi equivale a scrivere `repeat 2`. Non è difficile, ma è molto più macchinoso che scrivere semplicemente `repeat 2`. Il vantaggio di un ciclo `for` è che in quelle tre posizioni puoi fare qualsiasi cosa: puoi partire da un numero diverso, contare a passi maggiori di uno, contare all'indietro, oppure usare una condizione che dipende da qualcosa di diverso da un semplice contatore. È questa flessibilità a rendere i cicli `for` il cavallo di battaglia di JavaScript.
