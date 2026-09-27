---
title: "Nukleotide zählen"
description: "Zähle alle verschiedenen Nukleotide in einem DNA-Strang."
en_md5: 0c5a55d74af73955c83385a24b6f2e0f
---

DNA ist eine lange Kette aus anderen Chemikalien, und die wichtigsten davon sind die vier Nukleotide Adenin, Cytosin, Guanin und Thymin. Eine einzelne DNA-Kette kann Milliarden dieser vier Nukleotide enthalten, und die Reihenfolge, in der sie vorkommen, ist wichtig! Wir nennen die Reihenfolge dieser Nukleotide in einem Stück DNA eine „DNA-Sequenz“.

Wir stellen eine DNA-Sequenz als geordnete Sammlung dieser vier Nukleotide dar, und eine übliche Methode dafür ist ein String aus Zeichen wie „ATTACG“ für eine DNA-Sequenz aus 6 Nukleotiden. ‚A‘ für Adenin, ‚C‘ für Cytosin, ‚G‘ für Guanin und ‚T‘ für Thymin.

Erstelle eine Funktion namens `countNucleotides` (Nukleotide zählen), die einen DNA-Strang entgegennimmt und ein Wörterbuch zurückgibt, dessen Schlüssel die DNA-Buchstaben sind und dessen Werte angeben, wie oft diese vorkommen.

Wenn der Strang ungültige Zeichen enthält, gib `false` zurück.

Zum Beispiel:

- `countNucleotides("GATTACA")` gibt `{ "A": 3, "C": 1, "G": 1, "T": 2 }` zurück
- `countNucleotides("INVALID")` gibt `false` zurück
