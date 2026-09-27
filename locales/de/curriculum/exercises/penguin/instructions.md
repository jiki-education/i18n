---
title: "Pinguin"
description: "Vervollständige eine symmetrische Pinguin-Zeichnung."
en_md5: 5a0659ec6a7911fcebe11756dae664f7
---

In dieser Übung zeichnen wir zum ersten Mal Ellipsen und denken außerdem noch etwas mehr über die Symmetrie nach, über die wir schon bei Fuchsgesicht gesprochen haben.

Diese Übung arbeitet mit Ellipsen. Ellipsen sind wie gestreckte Kreise. Du gibst weiterhin den Mittelpunkt an, aber statt nur einem Radius verwendest du zwei: den horizontalen und den vertikalen Radius. Ist der vertikale Radius größer als der horizontale, wirkt die Ellipse hoch. Ist der horizontale Radius größer als der vertikale, wirkt sie breit und gedrungen. Wenn du beide Radien gleich groß machst, hast du wieder einen Kreis!

Die Funktion `ellipse` nimmt 5 Eingabewerte: die Position des Mittelpunkts (`centerX` für die x-Koordinate und `centerY` für die y-Koordinate), den horizontalen Radius (`radiusX`), den vertikalen Radius (`radiusY`) und die Farbe:

<img src="/static/images/exercise-assets/penguin/intro-ellipse.webp" alt="Diagramm zur Funktion ellipse" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Der Pinguin

Die Hälfte des Bildes haben wir schon für dich gezeichnet. Deine Aufgabe ist es, die rechte Seite des Pinguins zu zeichnen. Das fertige Bild sollte so aussehen:

<img src="/static/images/exercise-assets/penguin/penguin-finished.webp" alt="Pinguin" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### So findest du die richtigen Koordinaten

Anders als in den vorherigen Übungen geht es hier darum, dass du die Aufgabe löst, **ohne** mit der Maus über die Koordinaten zu fahren oder zu raten.

Wenn du den Code liest, der schon da ist, solltest du die übrigen Details herausfinden können, damit die Zeichnung symmetrisch wird. Denk daran: Die linke obere Ecke der Zeichenfläche ist `0,0`, die rechte untere ist `100,100`. Der Pinguin sitzt in der Mitte.

Für die Nase solltest du die mittleren Koordinaten des Dreiecks **ändern**. Füge kein neues Dreieck hinzu.

**Drück zuerst auf _"Run Code"_**, um zu sehen, wie das Startbild aussieht. Viel Spaß!
