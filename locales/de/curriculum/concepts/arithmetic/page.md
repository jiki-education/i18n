---
title: "Arithmetik"
description: "Variablen mit Mathematik kombinieren, damit Werte über Addition, Subtraktion, Multiplikation und Division zueinander in Beziehung stehen und voneinander abhängen können."
en_md5: 7ce54754a3ca29896609a01a51b12377
---

Bisher haben wir beim Erstellen von Variablen nur einfache Werte benutzt: eine Zahl wie `50` oder einen String wie `"yellow"`. Richtig mächtig werden Variablen, wenn wir sie miteinander kombinieren. So können wir sagen, dass der linke Rand des Rechtecks einen bestimmten Abstand zum Rand der Leinwand haben soll.

Beim Programmieren können wir ganz normale, einfache Mathematik benutzen, also addieren, subtrahieren, multiplizieren und dividieren. Und wir können die Variablen, die wir schon gesetzt haben, dabei verwenden.

Fangen wir damit an, dass wir ein Rechteck auf unsere Leinwand zeichnen wollen, und zwar mit einem Abstand von 10 zum linken und rechten Rand und einem Abstand von 20 zum oberen und unteren Rand. Es liegt also in der Mitte der Leinwand und ist etwas breiter als hoch.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/rectangle-on-canvas.webp"
  alt="Ein blaues Rechteck, zentriert auf der Leinwand, mit 10 Abstand von links und rechts und 20 von oben und unten"
  width="399"
  height="400"
/>

Wenn wir ein Rechteck zeichnen, müssen wir seine `left` (links), `top` (oben), `width` (Breite) und `height` (Höhe) kennen, ebenso wie seine Farbe. Das können wir also erst einmal aufschreiben.

Und jetzt müssen wir tatsächlich herausfinden, welche Werte `left`, `top`, `width` und `height` haben sollen. Setzen wir sie also. `Left` ist 10. `Top` ist 20. Und `width`? Nun ja, `width` ist die Größe der Leinwand, also 100, minus 10 auf der linken und 10 auf der rechten Seite, das ergibt 80. Und `height` ist die Höhe der Leinwand, die ebenfalls 100 beträgt, minus 20 oben und 20 unten, also 60.

```javascript
let left = 10
let top = 20
let width = 80
let height = 60

rectangle(left, top, width, height, "blue")
```

Wir können diese Variablen also setzen: `Left`, 10, `top`, 20, `width`, 80, `height`, 60. Aber was passiert, wenn wir das Rechteck nun etwas weiter nach innen verschieben und etwas kleiner machen wollen? Was, wenn es 20 Abstand zum linken und rechten Rand und 30 zum oberen und unteren Rand haben soll? Dann müssen wir alles wieder neu ausrechnen. `width` ist jetzt 100 minus 20 minus 20, und `height` ist 100 minus 30 minus 30. Das ist eindeutig mehr Arbeit und mehr Rechnerei, als ich machen möchte. Also können wir stattdessen den Computer bitten, das für uns zu erledigen.

Wir können `width` auf 100 minus `left` minus `left` setzen und `height` auf 100 minus `top` minus `top`, weil oben und unten gleich sind. Oder wir schreiben das als 100 minus `left` mal zwei, oder als 100 minus `top` mal zwei.

```javascript
let width = 100 - left * 2
let height = 100 - top * 2
```

Und wenn wir jetzt `left` oder `top` ändern, ändern sich auch `width` und `height`. Die Dinge fangen also an, sich aufeinander zu beziehen. Und was ist mit der Leinwand? Die ist jetzt 100. Aber was, wenn unsere Leinwand stattdessen 200 breit und 200 hoch wird? Dann sollten wir wohl eine Variable namens `canvasSize` (Leinwandgröße) anlegen und sie auf 100 setzen. Und jetzt ist unsere `width` gleich `canvasSize` minus `left` mal zwei, und unsere `height` ist `canvasSize` minus `top` mal zwei.

```javascript
let canvasSize = 100
let left = 20
let top = 30
let width = canvasSize - left * 2 // 60
let height = canvasSize - top * 2 // 40

rectangle(left, top, width, height, "blue")
```

Denken wir darüber nach, was Jiki tut, wenn wir let `height` gleich `canvasSize` minus `top` mal zwei schreiben. Er holt zuerst die Box `top` aus dem Regal, findet 30 darin, holt seinen Taschenrechner heraus, rechnet 30 mal zwei und merkt sich 60.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-1.webp"
  alt="Jiki holt die Box top aus dem Regal und rechnet aus, dass 30 mal zwei 60 ergibt"
  width="377"
  height="400"
/>

Dann holt er die Box `canvasSize` aus dem Regal, findet 100 darin und rechnet aus, dass 100 minus 60 gleich 40 ist. Und jetzt weiß er: Eigentlich sagen wir let `height` gleich 40. Also befolgt er das let, holt eine neue Box, schreibt `height` darauf und legt 40 hinein. Und wenn er `height` später benutzt, holt er einfach wieder die 40 heraus.

<img
  class="concept-image"
  src="/static/images/concept-assets/arithmetic/flow-of-images-3.webp"
  alt="Jiki holt eine neue Box, schreibt height darauf und legt 40 hinein"
  width="462"
  height="400"
/>

Wenn du in einer Übung alles zum Laufen gebracht hast, spiel damit, die Werte der Variablen zu ändern, und schau, was passiert. Beobachte, wie sie wachsen und wie sie schrumpfen. Lass dir Zeit und denk über die Beziehungen zwischen den Dingen nach.
