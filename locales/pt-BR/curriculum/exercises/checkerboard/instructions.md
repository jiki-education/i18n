---
title: "Tabuleiro de damas"
description: "Desenhe um tabuleiro de damas de qualquer tamanho, prepare-o para um jogo e calcule cada posição a partir do tamanho do tabuleiro."
en_md5: 1669c45c882ce94e16651bfc2d77a172
---

Neste projeto, você vai desenhar um tabuleiro de damas e colocar nele as peças, deixando-o pronto para uma partida de damas.

O seu código precisa funcionar para **qualquer tamanho de tabuleiro**. Demos três tabuleiros de exemplo para você experimentar. Um dos desafios usa o tabuleiro clássico de 8x8, outro usa um menor de 6x6 e outro usa um maior de 10x10. Você pode usar `getBoardSize()` (que retorna o tamanho do tabuleiro) para descobrir quantas casas de largura e de altura o tabuleiro tem desta vez (os tabuleiros são sempre quadrados).

<div style="display: flex; gap: 8px; margin: 12px 0;">
  <img src="/static/images/exercise-assets/checkerboard/board-6.svg" alt="Tabuleiro de damas 6x6" style="width: 33.333%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);" />
  <img src="/static/images/exercise-assets/checkerboard/board-8.svg" alt="Tabuleiro de damas 8x8" style="width: 33.333%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);" />
  <img src="/static/images/exercise-assets/checkerboard/board-10.svg" alt="Tabuleiro de damas 10x10" style="width: 33.333%; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);" />
</div>

### O tabuleiro

Como de costume, a tela tem sempre `100` de largura e `100` de altura. Siga estas duas regras:

- O tabuleiro tem uma borda `"black"` em volta da beirada, com uma largura de `2`.
- As casas devem alternar entre `"dark brown"` e `"white"`, dividindo de forma organizada o espaço dentro da borda. A casa do canto inferior esquerdo é sempre dark brown, nunca white.

### As peças

- Cada peça fica no centro de uma casa.
- As peças são círculos com relevo, com uma borda externa e uma cor interna:
  - A peça inteira tem 80% da largura da casa.
  - O círculo interno tem 75% da largura da peça inteira.
- As linhas no **topo** do tabuleiro recebem peças `"charcoal"` (cada uma com um aro `"black"`).
- As linhas na **parte de baixo** recebem peças `"white"` (cada uma com um aro `"grey"`).
- As peças só ficam nas casas **escuras**.
- As **duas linhas do meio** ficam sempre vazias. Todas as outras linhas têm peças.

## Pense de forma relacional

O essencial deste exercício é **nunca fixar os tamanhos e as posições no código**. Calcule o tamanho de uma única casa a partir do tamanho do tabuleiro e, a partir dele, construa todas as casas e todas as peças. Se você acertar nisso, exatamente o mesmo código desenha um tabuleiro pequeno de 6x6 e outro maior de 10x10 sem alterar um único número.
