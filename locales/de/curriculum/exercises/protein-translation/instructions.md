---
title: "Protein-Translation"
description: "Übersetze RNA-Sequenzen in Proteine."
en_md5: 79fb3a8d74a161a935842d20f7c835e7
---

RNA lässt sich in Sequenzen aus jeweils drei Nukleotiden unterteilen, die man Codons nennt, und wird dann in ein Protein übersetzt. Zum Beispiel:

1. RNA: "AUGUUUUCU"
2. Codons: "AUG", "UUU", "UCU"
3. Protein: "Methionine", "Phenylalanine", "Serine"

Außerdem gibt es drei Codons, die die Translation beenden (STOP-Codons: UAA, UAG, UGA). Wenn du auf eines davon stößt, endet die gesamte Translation und das Protein ist fertig.

Deine Aufgabe ist es, eine Funktion `translateRna` (RNA übersetzen) zu schreiben, die eine RNA-Sequenz entgegennimmt und die Liste der Aminosäuren zurückgibt.

Codon-Zuordnungen:

- AUG -> Methionine
- UUU, UUC -> Phenylalanine
- UUA, UUG -> Leucine
- UCU, UCC, UCA, UCG -> Serine
- UAU, UAC -> Tyrosine
- UGU, UGC -> Cysteine
- UGG -> Tryptophan
- UAA, UAG, UGA -> STOP
