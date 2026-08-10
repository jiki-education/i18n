---
title: "Capire le istruzioni `if`"
description: "Usare la parola chiave `if` per eseguire un blocco di codice solo quando una condizione è vera, come un buttafuori che decide chi far entrare."
en_md5: 8797e078e1ad90b7652373baf6f96f28
---

C'è una parola chiave che ci aiuta a dire a Jiki di eseguire del codice solo in certe situazioni. Immagina di scrivere del codice per controllare l'ingresso di un bar: sei un buttafuori e Jiki deve aprire la porta solo se una persona è vestita in modo adeguato. Immagina di scrivere del codice che gestisce la bandiera a scacchi di fine gara nell'ultimo giro di una gara automobilistica: Jiki deve sventolarla solo all'ultimo giro. In situazioni come questa si usa l'istruzione `if`.

<img
  class="concept-image"
  src="/static/images/concept-assets/if/bar-door-scenario.webp"
  alt="Jiki nei panni di un buttafuori che decide chi far entrare nel locale notturno"
  width="292"
  height="400"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/if/waving-flag.webp"
  alt="Jiki pronto a sventolare la bandiera a scacchi alla fine di una gara"
  width="266"
  height="400"
/>

Usiamo la parola chiave `if` in modo molto simile a `repeat`. Mettiamo delle informazioni tra parentesi tonde (`()`). In questo caso, quell'informazione è la condizione che vogliamo controllare. Poi mettiamo un blocco di codice tra le parentesi graffe (`{}`), e quel blocco viene eseguito solo se la condizione è vera.

```javascript
if (condition) {
}
```

E che aspetto hanno queste condizioni? Di solito sono una specie di confronto (_comparison_ in inglese). Confrontiamo due numeri o due stringhe e controlliamo se il risultato è vero o falso.

Pensa a questi confronti come a semplici affermazioni (_statements_ in inglese) che potresti dire ad alta voce. Tre è minore di cinque. Vero. Sette è minore di due. Falso.

Per scrivere questi confronti usiamo dei simboli. Probabilmente li conosci già dalla matematica. Abbiamo minore, maggiore, minore o uguale, maggiore o uguale, e c'è anche un controllo per vedere se due cose sono le stesse, se sono uguali. Questo è un po' diverso da ciò a cui sei abituato: usiamo tre simboli di uguale consecutivi per controllare se due valori sono identici.

<img
  class="concept-image"
  src="/static/images/concept-assets/if/comparisons-symbols.webp"
  alt="Una tabella degli operatori di confronto: minore, maggiore, minore o uguale, maggiore o uguale, uguale e diverso, con esempi"
  width="449"
  height="400"
/>

Questo ci evita confusione tra l'assegnazione e il confronto: per assegnare un valore usiamo un solo segno uguale, mentre per confrontare due valori usiamo tre segni uguale.

Puoi confrontare anche le stringhe. Quindi `"hello"` uguale a `"hello"`: vero, le due stringhe sono identiche. Ma qui fai attenzione, perché Jiki confronta ogni singolo carattere delle due stringhe. Quindi `"Hello"` con la H maiuscola non è uguale a `"hello"` con la h minuscola: sono stringhe diverse.

Comunque, vero e falso si chiamano booleani. È il termine formale per indicare un valore logico. Quindi, se incontri la parola "booleani", sappi che si riferisce semplicemente a valori di questo tipo. Vediamolo in azione. Immaginiamo di costruire un buttafuori robot per un locale, e decidiamo che deve aprire la porta solo se la persona ha 21 anni o più. Abbiamo una funzione `askAge` (chiedi l'età) che possiamo usare per ottenere l'età di qualcuno. Dopo salviamo il risultato in una variabile chiamata `age` (età). Possiamo dire: se `age` è maggiore di 20, apriamo la porta. Per esempio, se `askAge` restituisce `30` la porta si apre; se restituisce `12`, rimane chiusa.

```javascript
let age = askAge()
if (age >= 21) {
  openDoor()
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/if/bouncer-open-close.webp"
  alt="Jiki che apre la porta a una persona abbastanza grande e rifiuta l'ingresso a una troppo giovane"
  width="410"
  height="400"
/>
