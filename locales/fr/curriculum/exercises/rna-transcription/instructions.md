---
title: "Transcription en ARN"
description: "Convertis une séquence d'ADN en son complément ARN."
en_md5: 96d7f523f137d1407c4e6ca496206144
---

Ton objectif est de déterminer le complément ARN d'une séquence d'ADN donnée.

Les brins d'ADN comme les brins d'ARN sont des séquences de nucléotides.

Les quatre nucléotides présents dans l'ADN sont l'adénine (A), la cytosine (C), la guanine (G) et la thymine (T).

Les quatre nucléotides présents dans l'ARN sont l'adénine (A), la cytosine (C), la guanine (G) et l'uracile (U).

À partir d'un brin d'ADN, on forme le brin d'ARN transcrit en remplaçant chaque nucléotide par son complément :

- G -> C
- C -> G
- T -> A
- A -> U

Crée une fonction appelée `dnaToRna(dna)` (de l'ADN vers l'ARN) qui prend en entrée une string contenant l'ADN et renvoie une string représentant l'équivalent ARN.
