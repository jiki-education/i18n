---
title: "String-Indizierung"
description: "Mit eckigen Klammern und einer Positionsnummer holst du einen einzelnen Buchstaben aus einem String heraus. Denk daran, dass die Positionen bei null beginnen."
en_md5: cd31e0366b3090b358494667003f54c9
---

Stell dir vor, du hast meinen Namen, Jeremy, und willst meinen Anfangsbuchstaben J daraus herausholen. Wie würden wir das anstellen?

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-thinking.webp"
  alt="Jiki überlegt, wie er einen einzelnen Buchstaben aus einem String herausbekommt"
  width="361"
  height="353"
/>

Nun, du kannst dir einen String als eine Reihe von Buchstaben vorstellen. `"Jeremy"` hat also sechs Buchstaben, J-E-R-E-M-Y, und jeder davon hat eine Position. `"J"` steht an der ersten Position, `"y"` an der letzten.

In JavaScript und den meisten Programmiersprachen beginnen diese Positionen bei null. Der erste Buchstabe `"J"` ist also an Position null, dann kommt `"e"` an Position eins, `"r"` an Position zwei, `"e"` an Position drei, `"m"` an Position vier und `"y"` an Position fünf.

Dieses Anfangen bei null ist ziemlich seltsam, und ehrlich gesagt wäre das Leben einfacher, wenn wir einfach ab eins zählen würden, wie in der normalen Welt. Aber das tun wir nicht. In den meisten Programmiersprachen zählen wir stattdessen ab null, also musst du dich einfach daran gewöhnen.

Wenn wir also den Buchstaben an einer bestimmten Position haben wollen, können wir eckige Klammern mit der Zahl darin verwenden.

Wenn wir `"Jeremy"[0]` schreiben, sagen wir damit: Gib mir den ersten Buchstaben des Wortes `"Jeremy"`.

Wenn wir `"Jeremy"[1]` schreiben, sagen wir damit: Gib mir den zweiten Buchstaben.

```javascript
"Jeremy"[0] // "J"
"Jeremy"[1] // "e"
```

Und mit Variablen funktioniert das genauso. Wenn wir also eine Variable namens `name` erstellen und ihr den String `"Jeremy"` als Wert geben, dann können wir `name[0]` schreiben und bekommen wieder `"J"`.

```javascript
let name = "Jeremy"
name[0] // "J"
```

Eines sollten wir klarstellen: Was du von `name[0]` zurückbekommst, ist einfach ein weiterer String. Es ist ein weiteres Stück Papier, auf dem ein J steht. Daran ist nichts Besonderes. Es ist ein String, genau wie `"Jeremy"` ein String ist.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-indexing/jiki-holding-j.webp"
  alt="Jiki hält ein frisches Stück Papier, auf dem nur der Buchstabe J steht"
  width="500"
  height="289"
/>

Es hat eben nur einen Buchstaben darauf statt sechs.

Und das Ganze verändert den ursprünglichen String überhaupt nicht. Wir reißen das J nicht etwa ab oder so. Wir suchen nur den Buchstaben heraus, den wir wollen, und bauen damit einen neuen String.
