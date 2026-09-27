---
title: "Der zustandsbehaftete Ball"
description: "Rolle einen Golfball ins Loch, indem du seine Position verfolgst."
en_md5: e3c9b61e57c7e245a7c4624433879471
---

Wir sind zurück in der Welt des Golfspiels, doch diesmal hat sich das, was wir bauen, geändert.

Statt der `roll()`-Funktion (rollen), die wir vorher hatten, haben wir jetzt eine `moveTo(position)`-Funktion (zu einer Position bewegen), die den Ball sofort an eine Stelle setzt.

Wenn der Spieler den Ball schlägt, könnten wir ihn einfach direkt an die endgültige Stelle setzen, aber es ist sehr unbefriedigend, wenn er sich dabei nicht bewegt. Also verwenden wir stattdessen `moveTo(position)` ganz oft, damit es so aussieht, als würde er rollen.

Der Ball startet an Position **28** und muss Position **88** erreichen.

Du musst das in **5 Zeilen Code** lösen. Viel Erfolg!
