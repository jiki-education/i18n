---
title: "Schlagprüfer"
description: "Finde heraus, ob ein Golfschlag nah genug gelandet ist, um einzulochen."
en_md5: 0585e8c489eca5a11da4df955e647456
---

Willkommen zurück auf dem Golfplatz. Bisher hast du den Ball nur horizontal gerollt. Wenn er am Loch ankam, blieb er einfach darüber stehen. Jetzt animieren wir endlich, wie er nach unten ins Loch rollt.

Die erste Änderung ist, dass die Funktion `moveTo` (zu einer Position bewegen) jetzt Eingabewerte für `x` (x-Koordinate) und `y` (y-Koordinate) hat. Wie vorher musst du den Ball Schritt für Schritt rollen und ihn nicht einfach direkt ans Ziel springen lassen. Aber diesmal musst du, wenn der Golfer den Ball ins Loch bringt, auch den letzten Teil animieren: Sobald der Ball an der richtigen Stelle angekommen ist, rollt er nach unten ins Loch.

Und zum Schluss: **Wenn der Ball im Loch gelandet ist**, ist es Zeit zu feiern, sobald er unten angekommen ist. Dann schieß mit der Funktion `fireFireworks()` (Feuerwerk abfeuern) ein Feuerwerk ab.

Ein paar Dinge, die du wissen solltest:

1. Der Ball startet auf dem Abschlag bei `x = 28`, `y = 75` und rollt Schritt für Schritt.
2. Ein Schlag ist erfolgreich, wenn seine Länge `58`, `59`, `60`, `61` oder `62` beträgt.
3. Du musst den Ball `9` Einheiten nach unten rollen.

Denk bei dieser Übung jeden Schritt sorgfältig durch und geh die Dinge einen nach dem anderen an. Viel Glück!
