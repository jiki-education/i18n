---
title: "D&D-Würfelwurf"
description: "Wirf ein paar Würfel und triff einen Goblin in einem D&D-Abenteuer."
en_md5: 627f6cce99fe83ecae4e1b53051201b9
---

Du baust einen Bot, der Dungeons and Dragons (DnD) spielen kann. Wenn du DnD nicht kennst: Die Grundidee ist, dass du in viele verschiedene Szenarien gerätst und würfelst, um herauszufinden, was passiert. Es gibt viele verschiedene Würfel mit unterschiedlich vielen Seiten (nicht nur den sechsseitigen Würfel, den du vielleicht gewohnt bist!)

Ein Szenario, um das du dich kümmern musst, ist die Begegnung mit einem Goblin. Um den Goblin anzugreifen, musst du:

- Ermittle deinen **Angriffswert**, indem du einen 20-seitigen Würfel wirfst.
- Ermittle deinen **Basisschaden**, indem du einen 12-seitigen Würfel wirfst.
- Ermittle deinen **Bonusschaden**, indem du einen 10-seitigen Würfel wirfst.
- Addiere Basisschaden und Bonusschaden, um deinen **Gesamtschaden** zu erhalten.
- Triff den Goblin mit deinem Angriffswurf und deinem Gesamtschaden.

Nach jedem Würfelwurf musst du den anderen, mit denen du spielst, die Zahl ansagen, die du gewürfelt hast. Wenn du versuchst zu treffen, ohne die Zahlen anzusagen, denken sie vielleicht, du schummelst!

Du hast drei Funktionen, die du benutzen kannst:

- `roll(sides)` (würfeln) wirft einen Würfel mit der angegebenen Anzahl an Seiten. Diese Funktion gibt das Ergebnis zurück (_returns_ auf Englisch).
- `announce(value)` (ansagen) sagt einen Würfelwurf an.
- `strike(attack, damage)` (treffen) trifft den Goblin mit deinem Angriffswurf und deinem Gesamtschaden.

**Wichtig:** Jedes Mal, wenn du `roll()` aufrufst, wirft Jiki einen Würfel und bekommt eine andere Zahl. Erwarte nicht, dass du dieselbe Zahl bekommst, wenn du denselben Würfel zweimal wirfst.
