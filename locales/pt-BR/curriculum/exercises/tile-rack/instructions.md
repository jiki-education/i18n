---
title: "Suporte de Peças"
description: "Descubra exatamente onde fica uma letra no suporte de peças."
en_md5: 156e18323706fc278f7a887f421c01f3
---

Você está construindo um bot de Scrabble automatizado. O bot tem um suporte de peças com letras representado como uma string (por exemplo, `"AERHBT"`). Quando o bot decide que letra jogar, ele precisa saber para que posição (_position_ em inglês) deve mover a mão para pegar a peça.

Escreva uma função chamada `findTile` (encontrar a peça) que recebe o suporte (uma string de letras) e a letra a encontrar. Se a peça for encontrada, ela retorna `"Move to position X"`, em que X é a posição da primeira peça correspondente (começando em 1). Se a peça não estiver no suporte, ela retorna `"Error: Tile not on rack"`.

Para construir a string do resultado, você precisa converter o número da posição numa string e combinar as partes com concatenação (`+`) ou com uma template string.

Exemplos:

- `findTile("ABCDE", "A")` retorna `"Move to position 1"`
- `findTile("ABCDE", "C")` retorna `"Move to position 3"`
- `findTile("BANANA", "A")` retorna `"Move to position 2"` (o primeiro A)
- `findTile("ABCDE", "Z")` retorna `"Error: Tile not on rack"`
