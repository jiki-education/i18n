---
title: "Detetor de Extraterrestres"
description: "Move o teu laser da esquerda para a direita e abate os extraterrestres."
en_md5: c38eb1c7876bdff1fc61e9fa0c455e48
---

No exercício anterior do Space Invaders, movias o teu laser de um lado para o outro para abater todos os extraterrestres. Muito do que tornou isso possível foi a função `isAlienAbove()` (verifica se há um extraterrestre por cima). Neste exercício, removemos essa função, mas continuas a precisar de abater todos os extraterrestres!

Demos-te uma tela em branco para começares. Sente-te à vontade para reutilizar o teu código do <a href="/lesson/scroll-and-shoot" target="_blank" rel="noopener noreferrer">exercício anterior do Space Invaders</a> como ponto de partida.

Este exercício foi pensado para ser um desafio! Vai com calma.

### A tua tarefa

Abate todos os extraterrestres. Em vez de perguntares ao exercício se há um extraterrestre por cima de ti, tens de registar quais os extraterrestres que já abateste e quais os que ainda lá estão.

### Conhece a função `getStartingAliensInRow(idx)` (obtém os extraterrestres iniciais na fila)

Tens uma nova função chamada `getStartingAliensInRow(idx)`. Recebe um parâmetro de entrada: o índice da fila, a contar de baixo para cima. Existem, no máximo, três filas, por isso o valor de entrada pode ser `0`, `1` ou `2`.

A função devolve uma lista com 11 valores Boolean. Cada valor Boolean indica se há um extraterrestre nessa posição no **início** do exercício. Assim, `[true, false, false, ...]` significa que, antes de fazeres o que quer que seja, há um extraterrestre na primeira posição, mas não nas duas seguintes (e assim por diante).

Esta função devolve apenas as posições **iniciais** dos extraterrestres. Ela não é atualizada à medida que os abates!

### Notas

- Sempre que te moves para a esquerda ou para a direita, avanças ou recuas uma posição. Essa posição corresponde aos sítios onde os extraterrestres podem estar.
- Neste exercício, os extraterrestres não voltam a aparecer.
