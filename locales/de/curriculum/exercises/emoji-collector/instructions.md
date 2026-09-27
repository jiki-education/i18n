---
title: "Emoji-Sammler"
description: "Durchquere Labyrinthe, sammle Emojis und zähle deine Beute."
en_md5: 35fec0e21c9bf54a107ab339a9288967
---

Bisher hast du nach Wörtern gesucht, wenn du dich umgesehen hast. Doch jetzt haben wir die Labyrinthe auf Emojis umgestellt! Du musst deinen Code also anpassen, damit er mit diesen hier umgehen kann:

- `"star"` (wo du startest)
- `"flag"` (wo du hinwillst)
- `"white square"` (ein leeres Feld, in das du gehen kannst)
- `"fire"` (Vorsicht!)
- `"poop"` (Igitt!)
- `"brick"` (eine Wand)

Außerdem haben wir noch ein paar zusätzliche Emojis in den Labyrinthen verteilt, die du einsammeln kannst. Jedes Mal, wenn deine Figur ein Emoji findet, das nicht in der Liste oben steht, soll sie es ihrer Beute hinzufügen.

Damit du es leichter hast, haben wir Folgendes eingebaut:

- Eine neue Blickrichtung (`"down"`!). Damit erfährst du, was auf dem aktuellen Feld liegt.
- Eine neue Funktion `removeEmoji()` (entfernt das Emoji vom aktuellen Feld), die das Emoji vom Spielfeld wegnimmt. Versuch nicht, eines der speziellen Emojis von oben einzusammeln!

Sobald du das Zielfeld erreichst, solltest du die Funktion `announceEmojis(result)` (gibt die gesammelten Emojis bekannt) aufrufen und ihr ein Wörterbuch übergeben, das angibt, wie viele Emojis du gesammelt hast.

Jetzt wäre ein guter Zeitpunkt, um die Funktion `hasKey()` (prüft, ob ein Schlüssel vorhanden ist) zu benutzen!
