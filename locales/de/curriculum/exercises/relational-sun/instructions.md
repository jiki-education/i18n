---
title: "Relative Sonne"
description: "Positioniere eine Sonne, bei der alles aus Variablen berechnet wird."
en_md5: d8de4704a25f3733ddaaea16f0232005
---

In dieser Übung ist es deine Aufgabe, eine Sonne mit Rechnungen und Variablen in der oberen rechten Ecke des Himmels zu positionieren. Die entscheidende Vorgabe ist, dass der Rand der Sonne immer einen festen **gap** vom Rand der Leinwand entfernt sein muss, egal wie groß die Sonne ist.

Wir haben dir oben in der Datei vier Variablen vorgegeben:

- `canvasSize` (Größe der Leinwand): die Größe der Leinwand beträgt `100`.
- `color` (Farbe): auf `"yellow"` gesetzt.
- `gap` (Abstand): wie weit der Rand der Sonne vom oberen und rechten Rand der Leinwand entfernt ist.
- `radius`: der Radius der Sonne.

### Ein Ablauf in zwei Schritten

Um diese Übung zu lösen, machst du zwei Dinge:

#### 1. Abgeleitete Variablen definieren

Definiere die Variablen `sunX` (x-Koordinate der Sonne) und `sunY` (y-Koordinate der Sonne), die mit `gap`, `radius` und `canvasSize` den Mittelpunkt der Sonne in der oberen rechten Ecke festlegen.

#### 2. Den Kreis zeichnen

Zeichne einen Kreis mit `sunX`, `sunY`, `radius` und `color`.

## Flexibilität

`gap` ist standardmäßig auf 10 gesetzt und `radius` auf 15. Löse die Übung zuerst mit diesen Werten, damit du mithilfe des Hintergrunds alles ausrichten kannst. Wenn dein Code richtig ist, siehst du, wie der Kreis an der richtigen Stelle auf der Seite erscheint.

Um die Übung zu bestehen, reicht es allerdings nicht, den Wert einfach zu „hardcoden“ (also auf eine einzelne Zahl zu setzen). `sunX` und `sunY` müssen Berechnungen sein, in die andere Variablen einfließen.

Sobald du die Übung bestanden hast, klick auf „Code aufräumen“ und ändere oben in der Datei die Werte für `gap` und `radius`. Führ deinen Code dann erneut aus, um zu sehen, wie die Sonne wächst oder sich verschiebt und dabei in der Ecke bleibt.

Wenn du fertig bist, kannst du oben rechts auf „Dashboard“ klicken und wie gewohnt weitermachen.
