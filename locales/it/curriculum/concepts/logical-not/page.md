---
title: "L'operatore `!` (negazione)"
description: "Usare `!` per invertire un booleano: true diventa false e false diventa true, utile per azionare o invertire i controlli."
en_md5: 7cffbd1fa13317b3d6e6a71415413041
---

Finora, quando abbiamo confrontato le cose per vedere se sono uguali, abbiamo usato tre segni di uguale. A volte, però, vogliamo controllare se le cose non sono uguali, e per questo usiamo un punto esclamativo seguito da due segni di uguale. In generale, nella programmazione, un punto esclamativo, o _bang_ (punto esclamativo), come penso lo chiamino i nostri amici americani, significa non. Immagina ora di lavorare in un negozio e che la direzione abbia deciso che non sono ammessi abiti da discoteca.

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/shop-bouncer.webp"
  alt="Un buttafuori sulla porta di un negozio che controlla gli abiti di una fila di persone"
  width="451"
  height="400"
/>

Possiamo dire: «Se l'abito non è da discoteca, apri la porta». L'istruzione if funziona esattamente allo stesso modo.

```javascript
if (outfit !== "disco") {
  openDoor()
}
```

È solo che la condizione restituisce true se le cose sono diverse, e false se sono uguali. Quindi potremmo esprimere la stessa cosa dicendo: «Se l'abito è da discoteca, non fare niente. Altrimenti, apri la porta». Ma generalmente è più semplice e pulito usare l'operatore `not` per sapere e dire esattamente ciò che intendi.

Un'altra cosa collegata a questo. A volte avrai una variabile che è true e vuoi rovesciarla a false, oppure avrai qualcosa che è false e vuoi rovesciarla a true: possiamo usare questo per tenere traccia di qualcosa. Immagina di avere qualcosa che rimbalza da sinistra a destra, e di avere una variabile chiamata `movingRight` (si muove a destra), che è true quando devi muoverti a destra. Ma quando vuoi impostarla a false colpendo il bordo destro?

<img
  class="concept-image"
  src="/static/images/concept-assets/logical-not/pong-court.webp"
  alt="Un campo in stile Pong con racchette e una pallina che rimbalza da un lato all'altro, per illustrare l'inversione di una variabile movingRight"
  width="500"
  height="352"
/>

Quindi potremmo farlo dicendo: «Se `movingRight` è uguale a true, `movingRight` diventa false. Altrimenti, `movingRight` diventa true». Questo è un modo per invertire la variabile. Perciò Jiki guarderà `movingRight` per vedere se è true o false, e poi calcolerà l'opposto e metterà quel valore nella scatola.

```javascript
if (movingRight === true) {
  movingRight = false
} else {
  movingRight = true
}
```

Ma c'è un modo più elegante per farlo, ed è usare lo stesso punto esclamativo, o bang:

```javascript
movingRight = !movingRight
```

E questo la inverte. `!movingRight` significa l'opposto di ciò che era prima.

Quindi se `movingRight` era true, ora è false. Se era false, ora è true. Jiki prende ciò che c'è attualmente nella scatola,

e quel bang gli dice di trovare l'opposto. Così l'opposto di true è false. L'opposto di false è true, e poi lo rimette nella scatola. È esattamente lo stesso di quella lunga istruzione if/else, ma è molto più elegante e concisa da scrivere.
