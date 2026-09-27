---
title: "Relative Ampeln"
description: "Baue deine Ampel so um, dass alles gemeinsam skaliert."
en_md5: d54633094a8d14f73b298fe4827504c4
---

Du bist wieder bei den Ampeln! Diesmal folgen wir dem Muster aus den letzten beiden Übungen und bauen die Ampeln so, dass sie sich richtig mitskalieren, wenn wir den Radius ändern. Dafür gibt es eine Reihe von Variablen, die wir relativ zu `center` (Mitte) und/oder `radius` setzen können.

<img src="/static/images/exercise-assets/relational-traffic-lights/target.webp" alt="Ziel-Ampel" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### So funktioniert es

- Die linke obere Ecke der Zeichenfläche ist `0,0`. Die rechte untere Ecke ist `100,100`.
- Die Farbvariablen und `center` sind für dich fest vorgegeben. Der `radius` ist auf 10 voreingestellt, aber du kannst damit experimentieren.
- Du musst alle Variablen für Position und Größe aus einer Kombination von `radius` und/oder `center` herleiten.
- Das Gehäuse ist ein Rechteck, das alle drei Lichter mit Innenabstand umschließt. Der Innenabstand ist genauso groß wie der Radius.
- Die drei Lichter sind im Gehäuse vertikal gleichmäßig verteilt, und das Gehäuse liegt in der Mitte des Bildes. (Die Mitte des gelben Kreises ist also die Mitte des Bildes.)

### Variablen, die du herleiten musst

Alle diese Variablen sollten entweder `radius` oder `center` verwenden (z. B. eine Formel wie `radius * 7` oder `center - (radius * 2)`).

- `redY` (Y-Position von Rot), `yellowY` (Y-Position von Gelb), `greenY` (Y-Position von Grün): die vertikalen Mittelpunkte der drei Lichter
- `housingX` (X-Position des Gehäuses), `housingY` (Y-Position des Gehäuses): die linke obere Ecke des Gehäuserechtecks
- `housingWidth` (Breite des Gehäuses), `housingHeight` (Höhe des Gehäuses): die Größe des Gehäuserechtecks

### Die Skalierung testen

Während du arbeitest, kannst du den Radius von `2` bis `12` ändern, um zu sehen, ob alles richtig mitskaliert. Wenn dein Code stimmt, sollte alles schön um die Bildmitte herum skalieren!
