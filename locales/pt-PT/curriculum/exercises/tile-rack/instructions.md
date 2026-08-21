---
title: "Suporte de Peças"
description: "Descobre exatamente onde fica uma letra no suporte de peças."
en_md5: 156e18323706fc278f7a887f421c01f3
---

Estás a construir um bot de Scrabble automatizado. O bot tem um suporte de peças com letras representado como uma string (por exemplo, `"AERHBT"`). Quando o bot decide que letra jogar, precisa de saber para que posição (_position_ em inglês) deve mover a mão para apanhar a peça.

Escreve uma função chamada `findTile` (encontrar a peça) que recebe o suporte (uma string de letras) e a letra a encontrar. Se a peça for encontrada, devolve `"Move to position X"`, em que X é a posição da primeira peça correspondente (a começar em 1). Se a peça não estiver no suporte, devolve `"Error: Tile not on rack"`.

Para construíres a string do resultado, tens de converter o número da posição numa string e combinar as partes com concatenação (`+`) ou com uma template string.

Exemplos:

- `findTile("ABCDE", "A")` devolve `"Move to position 1"`
- `findTile("ABCDE", "C")` devolve `"Move to position 3"`
- `findTile("BANANA", "A")` devolve `"Move to position 2"` (o primeiro A)
- `findTile("ABCDE", "Z")` devolve `"Error: Tile not on rack"`
