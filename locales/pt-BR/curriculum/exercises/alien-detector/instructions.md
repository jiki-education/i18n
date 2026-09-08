---
title: "Detector de Alienígenas"
description: "Mova o seu laser da esquerda para a direita e atire nos alienígenas."
en_md5: c38eb1c7876bdff1fc61e9fa0c455e48
---

No exercício anterior de Space Invaders, você moveu o seu laser de um lado para o outro para derrubar todos os alienígenas. Boa parte do que tornou isso possível foi a função `isAlienAbove()` (há um alienígena acima). Neste exercício, nós a removemos, mas você ainda precisa derrubar todos os alienígenas!

Demos a você uma tela em branco para começar. Fique à vontade para reaproveitar o seu código do <a href="/lesson/scroll-and-shoot" target="_blank" rel="noopener noreferrer">exercício anterior de Space Invaders</a> como ponto de partida.

Este exercício foi feito para ser um desafio! Vá com calma.

### Sua tarefa

Derrube todos os alienígenas. Em vez de poder perguntar ao exercício se há um alienígena acima de você, você precisa acompanhar quais alienígenas já derrubou e quais ainda estão lá.

### Conheça `getStartingAliensInRow(idx)` (alienígenas iniciais na fileira)

Você tem uma nova função chamada `getStartingAliensInRow(idx)`. Ela recebe uma entrada: o índice da fileira, contando de baixo para cima. Há no máximo três fileiras, então o valor de entrada pode ser `0`, `1` ou `2`.

A função retorna uma lista de 11 valores Boolean. Cada Boolean indica se há um alienígena naquela posição no **início** do exercício. Então `[true, false, false, ...]` significaria que, antes de você fazer qualquer coisa, há um alienígena na primeira posição, mas não nas duas seguintes (e assim por diante).

Essa função retorna apenas as posições **iniciais** dos alienígenas. Ela **não** é atualizada conforme você os derruba!

### Observações

- Toda vez que você se move para a esquerda ou para a direita, você avança ou recua uma posição. Essa posição corresponde aos lugares onde os alienígenas podem estar.
- Neste exercício, os alienígenas não reaparecem.
