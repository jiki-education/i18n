---
title: "Nucléotide"
description: "Compte combien de fois un nucléotide donné apparaît dans un brin d'ADN."
en_md5: 7ab4068481d406fdfb6f598fabd042c1
---

L'ADN est une longue chaîne de composants chimiques, dont les plus importants sont les quatre nucléotides : l'adénine, la cytosine, la guanine et la thymine. Un seul brin d'ADN peut contenir des milliards de ces quatre nucléotides, et l'ordre dans lequel ils apparaissent est important ! On représente une séquence d'ADN par une string de caractères telle que "ATTACG" : 'A' pour l'adénine, 'C' pour la cytosine, 'G' pour la guanine et 'T' pour la thymine.

Crée une fonction appelée `countNucleotide` (compter un nucléotide) qui prend un brin d'ADN et un caractère représentant un nucléotide, et qui renvoie le nombre de fois où ce nucléotide apparaît dans le brin.

Si le caractère du nucléotide n'est pas valide (c'est-à-dire différent de A, C, G et T), renvoie `-1`.
Si le brin contient le moindre caractère invalide, renvoie aussi `-1`.

Par exemple :

- `countNucleotide("GATTACA", "A")` renvoie `3`
- `countNucleotide("GATTACA", "T")` renvoie `2`
- `countNucleotide("GATTACA", "X")` renvoie `-1`

Tu peux utiliser `"...".includes(someString)` si besoin.
