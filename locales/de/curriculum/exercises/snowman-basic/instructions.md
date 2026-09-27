---
title: "Schneemann"
description: "Baue einen Schneemann aus drei Kreisen."
en_md5: 6fec2ba8f8e20c68c2168c199fa0cf8d
---

Diese Übung führt dich in die Funktion `circle` ein, die wir mit 3 Eingabewerten (_inputs_ auf Englisch) verwenden:

- `centerX` (x-Position der Kreismitte): Die waagerechte (x-)Position des Kreismittelpunkts
- `centerY` (y-Position der Kreismitte): Die senkrechte (y-)Position des Kreismittelpunkts
- `radius` (Größe des Kreises): Wie groß der Kreis ist

Dieses Bild sollte die Sache klarer machen:

<img src="/static/images/exercise-assets/snowman-basic/intro-circle.webp" alt="Schneemann" style="width: 100%; max-width: 300px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Einen Schneemann zeichnen

Deine Aufgabe ist es, drei weiße Kreise zu zeichnen und daraus einen Schneemann zu bauen. Der Schneemann besteht aus:

- Ein großer Kreis als **Basis** unten
- Ein mittlerer Kreis als **Körper** in der Mitte
- Ein kleiner Kreis als **Kopf** oben

Alle drei Kreise sollen auf der Zeichenfläche waagerecht zentriert sein. Nutze das Zielbild als Orientierung.

Wie schon zuvor zeichnest du auf einer Zeichenfläche, die 100 breit und 100 hoch ist. Die obere linke Ecke der Zeichenfläche ist also `0,0` und die untere rechte ist `100,100`.

### Die richtigen Koordinaten herausfinden

Du kannst **mit der Maus über die Zeichenfläche fahren**, um die Koordinaten zu finden.

In dieser Übung sind **alle verwendeten Zahlen durch 5 teilbar** (z. B. sind `5`, `10`, `15` usw. gültig, aber `1`, `2`, `3`, `4` usw. nicht).
