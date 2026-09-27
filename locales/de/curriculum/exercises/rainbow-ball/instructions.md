---
title: "Regenbogenball"
description: "Baue einen springenden Ball, der eine Regenbogenspur über das Canvas malt."
en_md5: 501aa30e85d8fceb38890c72be4a0b87
---

Deine Aufgabe ist es, einen Ball zu bauen, der zufällig über das Canvas springt und dabei eine Regenbogenspur malt.

Das sollte ungefähr so aussehen:

<img src="/static/images/exercise-assets/rainbow-ball/example.gif" alt="Animierter Regenbogenball, der über das Canvas springt und dabei eine farbige Spur hinterlässt" style="width: 100%; max-width: 200px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

In dieser Übung steht dir die Funktion `Math.randomInt(min, max)` (liefert eine zufällige Ganzzahl zwischen den beiden Werten, die du ihr übergibst) zur Verfügung.

Nimm dir ein paar Minuten Zeit und überleg dir, wie du das lösen könntest. Das ist der wertvollste Teil der Übung, also lass dir Zeit und **schreib deine Ideen auf, bevor du die Formel unten liest.**

Wenn du eine Idee für deinen Ansatz hast, lies weiter. Aber lies erst weiter, wenn du eine Weile nachgedacht hast!

## Die Formel

In diesem Projekt geht es um Variablen, die für die Position des Balls zuständig sind und stetig größer oder kleiner werden. Dazu kommen andere Variablen, die steuern, **wie** sich der Ball bewegt, und die sich ändern, wenn bestimmte Kriterien erfüllt sind.

### Zeichnen

- Der erste Kreis, den du zeichnest, sollte bei `(5, 5)` liegen.
- Alle Kreise sollten einen Radius von `10` haben.
- Für die Farbe des Kreises nutzt du HSL. Beginne mit einem Farbton von `100` (Grün), einer Sättigung von `80` (kräftige Farben) und einer Helligkeit von `50` (mittlere Helligkeit).

### Animieren

- Zu Beginn bewegst du den Ball in jeder Iteration um `2` nach rechts und um `1` nach unten.
- Der Farbton erhöht sich jedes Mal um `1`, bis er das Maximum (`360`) erreicht hat, und wird dann wieder kleiner. Sättigung und Helligkeit musst du nicht ändern.

### Abprallen

- Sobald der Ball den Rand des Canvas erreicht, sollte er die Richtung ändern. (Schau in die Hinweise, wenn du nicht weißt, wie du das hinbekommst.)
- Damit es mehr Spaß macht, änderst du die Richtung mit der Funktion `Math.randomInt(min, max)`. Wähle `min` (kleinster Wert) und `max` (größter Wert) so, dass sie den Animationsstil ergeben, den du haben möchtest.

## Damit du die Prüfungen bestehst

In dieser Übung lassen wir dir viel Spielraum. Wir prüfen, ob:

- die ersten paar Kreise korrekt sind.
- über 80 % des Canvas bemalt sind.

Welche Zahlen du dafür wählst, bleibt dir überlassen. Wahrscheinlich willst du einen repeat-Block, der sich zwischen `500` und `1000` Mal wiederholt.

## Zerleg es in Einzelschritte

Der Schlüssel zu dieser Übung ist, eins nach dem anderen zu machen:

1. Lass den Ball beim Bewegen die Farbe ändern.
2. Lass ihn von der rechten Seite abprallen.
3. Lass ihn vom unteren Rand abprallen.
4. Lass ihn zufällig abprallen.
