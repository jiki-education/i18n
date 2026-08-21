---
title: "Nucleotídeo"
description: "Conte quantas vezes um nucleotídeo específico aparece numa cadeia de DNA."
en_md5: 7ab4068481d406fdfb6f598fabd042c1
---

O DNA é uma longa cadeia de outras substâncias químicas, e as mais importantes são os quatro nucleotídeos: adenina, citosina, guanina e timina. Uma única cadeia de DNA pode conter bilhões destes quatro nucleotídeos, e a ordem em que aparecem é importante! Representamos uma sequência de DNA como uma string de caracteres, por exemplo, "ATTACG". 'A' para adenina, 'C' para citosina, 'G' para guanina e 'T' para timina.

Crie uma função chamada `countNucleotide` (contar nucleotídeos). A função recebe uma cadeia de DNA e um único caractere de nucleotídeo e retorna o número de vezes que esse nucleotídeo aparece na cadeia.

Se o caractere de nucleotídeo não for válido (não for A, C, G ou T), retorne `-1`.
Se a cadeia contiver caracteres inválidos, retorne `-1` também.

Por exemplo:

- `countNucleotide("GATTACA", "A")` retorna `3`
- `countNucleotide("GATTACA", "T")` retorna `2`
- `countNucleotide("GATTACA", "X")` retorna `-1`

Você pode usar `"...".includes(someString)` se precisar.
