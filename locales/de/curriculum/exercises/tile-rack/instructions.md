---
title: "Buchstabenbänkchen"
description: "Finde heraus, wo genau ein Buchstabe auf dem Bänkchen liegt."
en_md5: 156e18323706fc278f7a887f421c01f3
---

Du baust einen automatischen Scrabble-Bot. Der Bot hat ein Bänkchen mit Buchstabenplättchen, das als String dargestellt wird (z. B. `"AERHBT"`). Wenn der Bot entscheidet, welchen Buchstaben er spielt, muss er wissen, an welche Position er seine Hand bewegen muss, um das Plättchen aufzunehmen.

Schreibe eine Funktion namens `findTile` (Plättchen finden), die das Bänkchen (einen String aus Buchstaben) und den gesuchten Buchstaben entgegennimmt. Wenn das Plättchen auf dem Bänkchen ist, gib `"Move to position X"` zurück, wobei X die Position des ersten passenden Plättchens ist (beginnend bei 1). Wenn es nicht auf dem Bänkchen ist, gib `"Error: Tile not on rack"` zurück.

Um den Ergebnis-String zu bauen, musst du die Positionsnummer in einen String umwandeln und die Teile mit Konkatenation (`+`) oder einem Template-String zusammensetzen.

Beispiele:

- `findTile("ABCDE", "A")` gibt `"Move to position 1"` zurück
- `findTile("ABCDE", "C")` gibt `"Move to position 3"` zurück
- `findTile("BANANA", "A")` gibt `"Move to position 2"` zurück (das erste A)
- `findTile("ABCDE", "Z")` gibt `"Error: Tile not on rack"` zurück
