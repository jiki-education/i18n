---
title: "Gültigkeitsbereich"
description: "Wie geschweifte Klammern ihre eigenen Regale aufbauen, sodass Variablen nur so lange leben wie ihr Block."
en_md5: 4d5fc2d1d304725660102e9aaceea4c3
---

Stell dir Code vor, der bei jedem Durchlauf einen Kreis an einer anderen Stelle zeichnet, und wir wollen 10 Kreise an verschiedenen Stellen zeichnen. Das könnten wir mit einer Schleife kombinieren. Aber wer gut aufpasst, hat hier vielleicht etwas Seltsames bemerkt.

```javascript
repeat(10) {
  let left = Math.randomInt(0, 100)
  let top = Math.randomInt(0, 100)
  circle(left, top, 5, "blue")
}
```

Am Anfang habe ich gesagt, dass es eine Regel gibt: Boxen in Jikis Regalen müssen eindeutige Namen haben,

und dass das Schlüsselwort `let` jedes Mal eine neue Box anlegt, wenn du es benutzt.

Aber weil das `let` in einer Schleife steht, legt Jiki bei jedem Durchlauf der Schleife eine neue Box an.

Ist der Code also falsch, oder passiert hier etwas anderes Seltsames?

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/thinking-jiki.webp"
  alt="Jiki schaut verwirrt und fragt sich, ob der Code falsch ist"
  width="384"
  height="400"
/>

Nun, der Code ist in Ordnung. Das ist vollkommen gültiges JavaScript, und er funktioniert wegen eines Konzepts namens Gültigkeitsbereich (_scope_ auf Englisch), oder auch Scoping.

Der Gültigkeitsbereich wirkt am Anfang wahrscheinlich recht einfach, aber ich kann dir garantieren: Er wird dir den Rest deiner Karriere Probleme bereiten. Selbst die erfahrensten Entwickler stoßen auf Probleme mit dem Gültigkeitsbereich, und JavaScript ist eine der kompliziertesten Sprachen, was das angeht. Ich erzähle dir das, damit du dich nicht schlecht fühlst, wenn du Probleme mit dem Gültigkeitsbereich hast. Aber pass hier auch wirklich gut auf, denn das ist wichtig.

Wenn du in Code eine geschweifte Klammer siehst, erzeugt sie einen neuen Gültigkeitsbereich. Was heißt das? Du kannst dir vorstellen, dass Jiki in seiner Werkstatt ein kleines neues Regal aufstellt, sobald er eine geschweifte Klammer sieht. Und alle Boxen, die er anlegt, während er arbeitet und Code innerhalb dieser geschweiften Klammern ausführt, diese Boxen, diese neuen Boxen landen auf dem kleinen neuen Regal, nicht auf den Hauptregalen.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves.webp"
  alt="Jikis Hauptregale neben einem neuen, kleineren Regal, das eine geschweifte Klammer erzeugt"
  width="500"
  height="205"
/>

Und wenn Jiki bei der zugehörigen schließenden geschweiften Klammer ankommt, wirft er alle Boxen weg, die auf diesem zweiten Regal stehen.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/shelves-loop-end.webp"
  alt="Jiki wirft die Boxen vom zweiten Regal in einen Mülleimer, als er die schließende geschweifte Klammer erreicht"
  width="500"
  height="237"
/>

Bei einer Schleife wie dieser können wir also Boxen anlegen, die nur so lange bestehen wie ein einzelner Schleifendurchlauf. Die Boxen `left` (links) und `top` (oben), die du hier siehst, bestehen nur bis zur schließenden geschweiften Klammer, und dann werden sie weggeworfen. Und Jiki erreicht diese schließende geschweifte Klammer bei jedem Durchlauf der Schleife. In diesem Programm sind das 10 Durchläufe. Er legt also 10-mal eine Box namens `left` an, und jedes Mal wirft er sie wieder weg.

<img
  class="concept-image"
  src="/static/images/concept-assets/scope/left-top-boxes-color.webp"
  alt="Zwei Boxen mit der Beschriftung left und top, die nur einen einzigen Schleifendurchlauf lang bestehen"
  width="500"
  height="187"
/>

Wenn du eine Variable anlegst, musst du also entscheiden, wie lange sie bestehen bleiben soll. Soll sie lange leben, muss sie außerhalb aller geschweiften Klammern stehen. Soll sie nur eine Iteration lang bestehen, also einen einzelnen Schleifendurchlauf, dann kannst du sie innerhalb der geschweiften Klammern anlegen. Merkst du, wie verwirrend das alles werden kann? Eine schöne Regel, die das am Anfang einfach hält: Leg alle deine Variablen oben in deinem Code an, außerhalb der geschweiften Klammern, und ändere sie nur innerhalb der Klammern. Zum Beispiel könnten wir den Code oben auch mit nur einer `left`-Box und einer `top`-Box schreiben, die am Anfang auf null gesetzt und dann bei jedem Schleifendurchlauf aktualisiert werden. Das ist genauso vollkommen gültig. Keine der beiden Varianten ist richtig oder falsch. Es gibt Best Practices, aber die lernen wir später. Experimentiere jetzt einfach, hab Spaß, schau, womit du dich am wohlsten fühlst, und mach dir nicht zu viele Gedanken darüber.
