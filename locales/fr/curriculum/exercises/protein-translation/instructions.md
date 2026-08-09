---
title: "Traduction de protéines"
description: "Traduis des séquences d'ARN en protéines."
en_md5: 79fb3a8d74a161a935842d20f7c835e7
---

L'ARN peut être découpé en séquences de trois nucléotides appelées codons, qui sont ensuite traduites en protéine. Par exemple :

1. ARN : "AUGUUUUCU"
2. Codons : "AUG", "UUU", "UCU"
3. Protéine : "Methionine", "Phenylalanine", "Serine"

Il existe aussi trois codons de terminaison (les codons STOP : UAA, UAG, UGA). Si tu rencontres l'un d'eux, la traduction s'arrête complètement et la protéine est terminée.

Ta tâche consiste à écrire une fonction `translateRna` (traduire l'ARN) qui prend une séquence d'ARN et renvoie le tableau des acides aminés.

Correspondances des codons :

- AUG -> Methionine
- UUU, UUC -> Phenylalanine
- UUA, UUG -> Leucine
- UCU, UCC, UCA, UCG -> Serine
- UAU, UAC -> Tyrosine
- UGU, UGC -> Cysteine
- UGG -> Tryptophan
- UAA, UAG, UGA -> STOP
