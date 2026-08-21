---
title: "Pesquisa de peças"
description: "Procura uma letra específica num suporte de peças."
en_md5: bbbc77ef2c270fd4228d6a20e690a095
---

Estás a construir um bot de Scrabble. Antes de tentar jogar uma palavra, o bot precisa de verificar se tem no suporte uma peça com uma letra específica.

O suporte é representado como uma `string` de letras (por exemplo, `"SCRAB"`).

Escreve uma função chamada `contains` (contém) que recebe dois parâmetros de entrada:

- `haystack` (palheiro): o suporte de peças, como uma `string`
- `needle` (agulha): a letra a procurar

Devolve `true` se a letra estiver no suporte e `false` se não estiver.

Exemplos:

- `contains("SCRAB", "A")` devolve `true`
- `contains("SCRAB", "Z")` devolve `false`
- `contains("", "A")` devolve `false`
