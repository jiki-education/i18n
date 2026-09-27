---
title: "Strings mit `for ... of` durchlaufen"
description: "Wie du mit einer `for of`-Schleife jeden Buchstaben eines Strings durchgehst und dabei mit jedem einzelnen etwas machst."
en_md5: 09f399cc3f52b89380d3ed23fc6be513
---

Du kannst auf einen einzelnen Buchstaben eines Strings mit eckigen Klammern zugreifen. Jetzt schauen wir uns an, wie du einen String durchläufst und dabei Buchstabe für Buchstabe herausbekommst.

Und dafür brauchen wir eine neue Art von Schleife. Bisher haben wir die repeat-Schleife benutzt, und jetzt schauen wir uns die `for of`-Schleife an (läuft nacheinander über jedes Element einer Sammlung). Das sind zwei neue Schlüsselwörter: `for` und `of`.

Das Schlüsselwort `for` werden wir noch an einigen Stellen sehen. Es kann allein stehen oder zusammen mit `in` oder `of` auftauchen. Für den Moment konzentrieren wir uns auf das letzte davon, auf `of`.

Schauen wir uns also ein Stück Code an.

Wir fangen damit an, dass wir eine Variable namens `name` erstellen, die den String `"Jeremy"` (der Name Jeremy) enthält. Hier ist nichts neu.

Dann kommt die Zeile mit der Schleife, und darin passiert eine Menge, also gehen wir sie langsam durch.

```javascript
let name = "Jeremy"
for (let letter of name) {
  // ...
}
```

Zuerst haben wir das Schlüsselwort `for`. Das sagt Jiki, dass wir etwas wiederholen wollen. Also schaut er nach vorne, sieht `of` und weiß, dass wir eine „for of“-Schleife machen wollen.

Und das heißt: Statt eine repeat-Schleife zu benutzen, bei der wir sagen „Lass uns zehnmal durchlaufen“, sagen wir „Lass uns alle Buchstaben im String durchlaufen“. Genau das bedeutet „for of“.

Dann haben wir diesen Teil mit `let letter` (erstellt eine Variable namens letter). Das ist genau dasselbe wie oben mit `let name`. Wir erstellen einfach eine Variable namens `letter`.

Der Unterschied ist: Wir sagen nicht ausdrücklich, was hineinkommt, sondern wir sagen Jiki, dass er jeden Buchstaben des Strings nacheinander hineinlegen soll.

Jiki sieht also `for`, prüft auf `of` und legt los. Er schaut sich den ersten Buchstaben im String an, in diesem Fall `"J"`, und legt ihn in eine neue Box namens `letter`. Die könnten wir übrigens nennen, wie wir wollen. Sie muss nicht `letter` heißen. Wir haben hier einfach beschlossen, sie `letter` zu nennen.

Dann führt er den Code in den geschweiften Klammern aus. Hier kannst du alles machen, was du auch sonst überall im Code machen kannst. Der einzige Unterschied ist, dass dieser Block einmal für jeden Buchstaben im String läuft und die Variable darin verfügbar ist.

Jedes Mal, wenn Jiki an die schließende geschweifte Klammer kommt, wirft er die `letter`-Box weg und erstellt eine neue, in die der nächste Buchstabe kommt. Beim ersten Mal wirft er also das `"J"` weg und legt stattdessen ein `"e"` in die Box. Dann macht er dasselbe mit `"r"`, dann mit `"e"`, dann mit `"m"` und dann mit `"y"`. Sechs Buchstaben, sechs Runden durch die Schleife. Es dauert ein bisschen, bis man sich an die Syntax gewöhnt hat, aber das Konzept ist wirklich nicht schwer.

<img
  class="concept-image"
  src="/static/images/concept-assets/string-iteration/jiki-letter-box-loop.webp"
  alt="Jiki wirft die alte Buchstaben-Box weg und lässt den nächsten Buchstaben in eine frische Box mit der Beschriftung letter fallen; das wiederholt sich für jeden Buchstaben im String"
  width="500"
  height="168"
/>
