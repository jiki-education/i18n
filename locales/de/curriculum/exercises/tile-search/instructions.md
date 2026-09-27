---
title: "Plättchensuche"
description: "Durchsuche ein Rack voller Plättchen, um einen bestimmten Buchstaben zu finden."
en_md5: bbbc77ef2c270fd4228d6a20e690a095
---

Du baust einen Scrabble-Bot. Bevor der Bot versucht, ein Wort zu legen, muss er prüfen, ob er ein bestimmtes Buchstabenplättchen in seinem Rack hat.

Das Rack ist als String aus Buchstaben dargestellt (z. B. `"SCRAB"`).

Schreib eine Funktion namens `contains` (enthält), die zwei Eingabewerte nimmt:

- `haystack` (Heuhaufen): das Rack voller Plättchen, als String
- `needle` (Nadel): der Buchstabe, nach dem gesucht wird

Gib `true` zurück, wenn der Buchstabe im Rack ist, oder `false`, wenn nicht.

Beispiele:

- `contains("SCRAB", "A")` gibt `true` zurück
- `contains("SCRAB", "Z")` gibt `false` zurück
- `contains("", "A")` gibt `false` zurück
