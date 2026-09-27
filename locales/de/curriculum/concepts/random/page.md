---
title: "Zufallszahlen"
description: "Wie du `Math.randomInt` mit einem Minimum und einem Maximum benutzt, um bei jedem Aufruf der Funktion eine andere Zahl zu bekommen."
en_md5: 5f41de1ca5327be4a86a69d801f1b6f9
---

Oft wollen wir beim Programmieren eine Funktion benutzen und jedes Mal eine andere Zufallszahl (_random number_ auf Englisch) zurückbekommen.

Das ist auf vielfältige Weise und an vielen Stellen nützlich, besonders in der Kryptografie. Dort erstellen wir zum Beispiel Codes, die wir zwischen Maschinen austauschen, und diese Codes müssen zufällig sein, damit sie nicht geknackt werden können.

Dabei hilft dir eine Funktion namens `Math.randomInt` (Math steht für Mathematik, randomInt für eine zufällige Ganzzahl). Vielleicht fällt dir auf, dass mitten in dem Namen ein Punkt steht. Wenn du mehr Funktionen zur Verfügung hast, können wir sie in verschiedene Gruppen sortieren, damit alles ordentlich bleibt. Der Teil `Math` (kurz für Mathematik) ist der Name einer Gruppe, zu der diese Funktion gehört. Er sagt Jiki, in welchem Abschnitt der Regale er nachschauen soll, in diesem Fall im `Math`-Abschnitt. Der Punkt bedeutet einfach: Geh in diesen Abschnitt und such die Funktion. Mach dir darüber erst mal keine allzu großen Gedanken. Die Anleitung der Übung sagt dir immer, welche Funktionen verfügbar sind und wie du sie benutzt. Wichtig ist: Wenn Jiki diese Funktion benutzt, bekommt er jedes Mal eine andere Zahl, mit einer Einschränkung. Die Funktion hat zwei Eingabewerte. Der erste ist die kleinste Zahl, die die Maschine zurückgeben darf, und der zweite ist die größte Zahl, die die Maschine zurückgeben darf. Wenn du die Funktion `Math.randomInt` also mit `10` und `13` benutzt, bekommst du immer `10`, `11`, `12` oder `13` heraus. Aber jedes Mal eine andere.

<img
  class="concept-image"
  src="/static/images/concept-assets/random/jiki-shelves-math.webp"
  alt="Jiki klettert eine Leiter hoch zum Math-Abschnitt seiner Regale in der Lagerhalle"
  width="440"
  height="400"
/>

```javascript
Math.randomInt
```

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-two-inputs.webp"
  alt="Die Math.randomInt-Maschine mit zwei Trichtern oben drauf"
  width="500"
  height="378"
/>

<img
  class="concept-image"
  src="/static/images/concept-assets/random/function-10-13.webp"
  alt="Die Math.randomInt-Maschine mit 10 und 13 in ihren Trichtern, die 10, 11, 12 oder 13 ausgibt"
  width="488"
  height="400"
/>

Stellen wir uns also vor, du willst einen Kreis an einer zufälligen Stelle auf dem Canvas zeichnen. Mit `Math.randomInt` kannst du jedes Mal andere Werte für `left` und `top` bekommen, aber mit Grenzen, sagen wir `10` und `90`, damit sie sich nie überschneiden oder über den Canvas hinausgehen. Jedes Mal, wenn du diesen Code ausführst, wird der Kreis an einer etwas anderen Stelle gezeichnet.
