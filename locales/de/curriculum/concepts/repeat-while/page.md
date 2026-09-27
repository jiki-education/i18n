---
title: "`repeat` ohne Anzahl verwenden"
description: "Die runden Klammern einer repeat-Schleife leer lassen, damit Jiki weiterläuft, bis ihm etwas anderes sagt, dass er aufhören soll."
en_md5: f1f98b46bedb1b5abc72aa1b856ee8ae
---

Bisher hast du bei der repeat-Schleife immer eine Anzahl angegeben, die sagt, wie oft wiederholt wird. Wiederhole fünfmal, zehnmal, 40 Mal. Manchmal hast du dafür auch eine Variable benutzt. Aber du hast Jiki immer genau gesagt, wie oft er die Schleife wiederholen soll. Manchmal wissen wir aber im Voraus nicht, wie oft wir wiederholen müssen. Denk an das Labyrinth. Ganz am Anfang dieses Kurses hast du das Labyrinth gelöst, indem du bestimmte Züge aufgeschrieben hast. Du konntest das Labyrinth sehen, die Schritte zählen und die richtige Anzahl an Zügen aufschreiben.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-known-path.webp"
  alt="Ein Labyrinth, in dem die Figur den Weg sehen, die Schritte zählen und genau die richtigen Züge aufschreiben kann"
  width="418"
  height="400"
/>

```javascript
move()
move()
turnLeft()
move()
move()
```

Aber was wäre, wenn ich sage: „Schreib mir Code, der jedes Labyrinth löst, das ich dir gebe?“ Das Labyrinth braucht dann vielleicht 10 Schritte oder 50 oder 200. Du hast vorher keine Ahnung.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/maze-example.webp"
  alt="Mehrere verschiedene Labyrinthe in unterschiedlichen Formen und Größen, und Jiki grübelt, wie er sie lösen soll"
  width="402"
  height="400"
/>

Du brauchst also eine Möglichkeit, Jiki einfach nur zu sagen, dass er weitermachen soll. Prüfe weiter, welchen Weg du gehen kannst, triff weiter Entscheidungen, geh weiter vorwärts, immer und immer wieder, bis du fertig bist.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill.webp"
  alt="Jiki läuft auf einem Laufband und macht einfach immer weiter"
  width="428"
  height="400"
/>

Und der Weg dahin ist wirklich einfach. Gib dem Schlüsselwort `repeat` einfach keine Anzahl. Lass die Klammern einfach leer. Wenn du das machst, läuft Jiki einfach immer weiter, bis ihm etwas anderes sagt, dass er aufhören soll. Später schauen wir uns an, was diese anderen Dinge sind. Aber erst einmal läuft er einfach weiter, bis die Übung fertig ist, oder bis er findet, dass er jetzt wirklich ewig läuft, eine Pause will und genug hat.

<img
  class="concept-image"
  src="/static/images/concept-assets/repeat-while/jiki-treadmill-exhausted.webp"
  alt="Jiki hängt erschöpft über dem Laufband, nachdem er ewig gelaufen ist, bereit aufzugeben und eine Pause zu machen"
  width="500"
  height="378"
/>
