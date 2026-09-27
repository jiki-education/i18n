---
title: "Strukturiertes Haus"
description: "Zeichne ein ganzes Haus aus nur zwei Größen-Ankern."
en_md5: 783a94e5de5f4bd22cd634e07eabc131
---

Deine Aufgabe ist es, ein Haus zu zeichnen, und zwar das Ganze allein aus zwei Ankervariablen: `houseWidth` (Hausbreite) und `houseHeight` (Haushöhe).

Die Farben, die Breite der Zeichenfläche und die beiden Ankervariablen haben wir schon für dich eingerichtet. Alles andere (wo das Haus steht, das Dach, die Fenster, die Tür und der Türknauf) solltest du aus den beiden Ankern und den festen Angaben unten ableiten.

**Denk in Abhängigkeiten!** Wenn du es richtig machst, solltest du nur `houseWidth` und `houseHeight` ändern müssen, und das ganze Haus passt sich korrekt an: es bleibt horizontal zentriert, bleibt auf dem Gras stehen und behält seine Proportionen. Schreib keine Positionen fest, die du selbst ausgerechnet hast. Leite jede einzelne aus den Ankern ab.

<img src="/static/images/exercise-assets/structured-house/structured-house-finished.webp" alt="Dasselbe Haus in drei verschiedenen Breiten und Höhen, jedes bleibt zentriert und steht auf dem Gras" style="width: 100%; box-sizing: border-box; padding: 16px; background: #fff; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Vorgaben für das Haus

- Die obere linke Ecke der Zeichenfläche ist `0,0`. Die untere rechte Ecke ist `100,100`.
- Der Himmel füllt die Zeichenfläche (von `0,0` bis `100,100`).
- Das Gras geht über die volle Breite und sitzt unten auf der Zeichenfläche, mit einer Höhe von `15`.
- Das Haus ist immer horizontal auf der Zeichenfläche zentriert.
- Der untere Rand des Hauses sitzt `5` unterhalb der Oberkante des Grases, und von dort wächst das Haus nach oben.
- Das Dach sitzt oben auf dem Rahmen. Es steht links und rechts um `1/10th` der Rahmenbreite über, seine Höhe beträgt `1/2` der Rahmenhöhe, und seine Spitze ist horizontal zentriert.
- Die Fenster sind jeweils `1/5th` der Rahmenbreite breit und `1/3rd` seiner Höhe hoch. Sie sitzen `1/8th` der Rahmenhöhe unterhalb der Oberkante des Rahmens und haben zu jeder Rahmenseite einen Abstand von `1/7th` der Rahmenbreite.
- Die Tür ist `1/5th` der Rahmenbreite breit und `1/2` seiner Höhe hoch, horizontal zentriert, und ihr unterer Rand sitzt auf dem unteren Rand des Hauses.
- Der Radius des Türknaufs beträgt `1/10th` der Türbreite. Zwischen dem Knauf und dem rechten Rand der Tür liegt ein Abstand von `1/10th` der Türbreite. Der Knauf ist vertikal in der Tür zentriert.

### Prüf, ob es funktioniert!

Ändere einmal die Variablen `houseWidth` und `houseHeight`. Wenn dein Code stimmt, passt sich das Haus in seiner Größe an und bleibt dabei zentriert und auf dem Gras stehen.
