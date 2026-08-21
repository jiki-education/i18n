---
title: "Nucleótido"
description: "Conta quantas vezes um nucleótido específico aparece numa cadeia de ADN."
en_md5: 7ab4068481d406fdfb6f598fabd042c1
---

O ADN é uma longa cadeia de outras substâncias químicas, e as mais importantes são os quatro nucleótidos: adenina, citosina, guanina e timina. Uma única cadeia de ADN pode conter milhares de milhões destes quatro nucleótidos, e a ordem pela qual aparecem é importante! Representamos uma sequência de ADN como uma string de carateres, por exemplo, "ATTACG". 'A' para adenina, 'C' para citosina, 'G' para guanina e 'T' para timina.

Cria uma função chamada `countNucleotide` (contar nucleótidos). A função recebe uma cadeia de ADN e um único caráter de nucleótido e devolve o número de vezes que esse nucleótido aparece na cadeia.

Se o caráter de nucleótido não for válido (não for A, C, G ou T), devolve `-1`.
Se a cadeia contiver carateres inválidos, devolve também `-1`.

Por exemplo:

- `countNucleotide("GATTACA", "A")` devolve `3`
- `countNucleotide("GATTACA", "T")` devolve `2`
- `countNucleotide("GATTACA", "X")` devolve `-1`

Podes usar `"...".includes(someString)` se precisares.
