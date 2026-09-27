---
title: "Ball mit Grenzen"
description: ""
en_md5: 2ec6aa377a460232076e731101c60109
---

In dieser Übung erstellst du einen Ball und lässt ihn von den Wänden eines Spielfelds abprallen.

Es gibt eine `Ball`-Klasse, von der du mit `new Ball()` eine Instanz erstellen kannst. Der Ball hat diese Eigenschaften:

- `cx` (x-Koordinate) und `cy` (y-Koordinate): die Mittelpunktkoordinaten des Balls (schreibgeschützt)
- `radius`: die Größe des Balls (schreibgeschützt)
- `xVelocity` (Geschwindigkeit in x-Richtung) und `yVelocity` (Geschwindigkeit in y-Richtung): wie sich der Ball bei jedem Schritt bewegt (diese kannst du ändern)

Außerdem gibt es eine Funktion:

- `moveBall(ball)`: bewegt den Ball entsprechend seiner Geschwindigkeit

Das Spielfeld reicht in beide Richtungen von 0 bis 100.

Deine Aufgabe:

1. Erstelle eine Ball-Instanz
2. Wiederhole 376 Mal
3. Prüfe in jedem Durchlauf, ob der Ball eine Wand erreicht hat oder schon darüber hinaus ist, und kehre seine Geschwindigkeit um
4. Ruf `moveBall(ball)` auf, um ihn zu bewegen

Die Geschwindigkeiten sollten immer `1` oder `-1` sein. Der Ball darf sich nie mit dem Rand des Spielfelds überschneiden.
