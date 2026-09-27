---
title: "Nukleotid"
description: "Zähle, wie oft ein bestimmtes Nukleotid in einem DNA-Strang vorkommt."
en_md5: 7ab4068481d406fdfb6f598fabd042c1
---

DNA ist eine lange Kette aus anderen Chemikalien, und die wichtigsten davon sind die vier Nukleotide: Adenin, Cytosin, Guanin und Thymin. Eine einzige DNA-Kette kann Milliarden dieser vier Nukleotide enthalten, und die Reihenfolge, in der sie vorkommen, ist wichtig! Wir stellen eine DNA-Sequenz als String aus Zeichen dar, zum Beispiel „ATTACG“. „A“ steht für Adenin, „C“ für Cytosin, „G“ für Guanin und „T“ für Thymin.

Erstelle eine Funktion namens `countNucleotide` (Nukleotide zählen), die einen DNA-Strang und ein einzelnes Nukleotidzeichen entgegennimmt und zurückgibt, wie oft dieses Nukleotid im Strang vorkommt.

Wenn das Nukleotidzeichen ungültig ist (also keines von A, C, G oder T), gib `-1` zurück.
Wenn der Strang ungültige Zeichen enthält, gib ebenfalls `-1` zurück.

Zum Beispiel:

- `countNucleotide("GATTACA", "A")` gibt `3` zurück
- `countNucleotide("GATTACA", "T")` gibt `2` zurück
- `countNucleotide("GATTACA", "X")` gibt `-1` zurück

Du kannst `"...".includes(someString)` verwenden, wenn du es brauchst.
