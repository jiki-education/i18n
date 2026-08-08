---
title: "Comptage des nucléotides"
description: "Compte tous les différents nucléotides d'un brin d'ADN."
---

L'ADN est une longue chaîne de substances chimiques, dont les plus importantes sont les quatre nucléotides : l'adénine, la cytosine, la guanine et la thymine. Un seul brin d'ADN peut contenir des milliards de ces quatre nucléotides, et l'ordre dans lequel ils apparaissent est important ! On appelle « séquence ADN » l'ordre de ces nucléotides dans un morceau d'ADN.

On représente une séquence ADN comme une collection ordonnée de ces quatre nucléotides. Une façon courante de le faire est d'utiliser une string comme "ATTACG" pour une séquence ADN de 6 nucléotides : 'A' pour l'adénine, 'C' pour la cytosine, 'G' pour la guanine et 'T' pour la thymine.

Crée une fonction appelée `countNucleotides` (compte les nucléotides) qui prend un brin d'ADN et renvoie un dictionnaire dont les clés sont les lettres de l'ADN et les valeurs le nombre de fois où elles apparaissent.

Si le brin contient des caractères invalides, renvoie `false`.

Par exemple :

- `countNucleotides("GATTACA")` renvoie `{ "A": 3, "C": 1, "G": 1, "T": 2 }`
- `countNucleotides("INVALID")` renvoie `false`
