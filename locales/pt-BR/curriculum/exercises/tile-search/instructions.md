---
title: "Busca de peças"
description: "Procure uma letra específica em um suporte de peças."
en_md5: bbbc77ef2c270fd4228d6a20e690a095
---

Você está construindo um bot de Scrabble. Antes de tentar jogar uma palavra, o bot precisa verificar se tem no suporte uma peça com uma letra específica.

O suporte é representado como uma `string` de letras (por exemplo, `"SCRAB"`).

Escreva uma função chamada `contains` (contém) que recebe duas entradas:

- `haystack` (palheiro): o suporte de peças, como uma `string`
- `needle` (agulha): a letra a procurar

Retorne `true` se a letra estiver no suporte e `false` se não estiver.

Exemplos:

- `contains("SCRAB", "A")` retorna `true`
- `contains("SCRAB", "Z")` retorna `false`
- `contains("", "A")` retorna `false`
