---
title: "Casa Estruturada"
description: "Desenha uma casa inteira a partir de duas âncoras de tamanho."
en_md5: 783a94e5de5f4bd22cd634e07eabc131
---

A tua tarefa é desenhar uma casa e construir tudo a partir de apenas duas variáveis âncora: `houseWidth` (largura da casa) e `houseHeight` (altura da casa).

Preparámos-te as cores, a largura da tela de desenho e as duas variáveis âncora. Tudo o resto (a posição da casa, o telhado, as janelas, a porta e a maçaneta) deve ser calculado a partir das duas âncoras e dos dados fixos abaixo.

**Pensa de forma relacional!** Se fizeres tudo bem, deves conseguir alterar apenas `houseWidth` e `houseHeight` e a casa inteira muda de tamanho corretamente: continua centrada horizontalmente, assente na relva e com as mesmas proporções. Não escrevas posições fixas que tenhas calculado à mão. Constrói cada parte a partir das âncoras.

<img src="/static/images/exercise-assets/structured-house/structured-house-finished.webp" alt="A mesma casa desenhada em três larguras e alturas diferentes, sempre centrada e assente na relva" style="width: 100%; box-sizing: border-box; padding: 16px; background: #fff; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 5px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); margin-bottom: 8px;" />

### Especificações da casa

- O canto superior esquerdo da tela de desenho é `0,0`. O canto inferior direito é `100,100`.
- O céu preenche a tela (de `0,0` a `100,100`).
- A relva ocupa toda a largura e fica na parte inferior da tela, com uma altura de `15`.
- A casa fica sempre centrada horizontalmente na tela.
- A parte de baixo da casa fica `5` unidades abaixo do topo da relva, e a casa cresce para cima a partir daí.
- O telhado assenta sobre o corpo. Sobressai para a esquerda e para a direita do corpo em `1/10th` da largura do corpo; a sua altura é `1/2` da altura do corpo e o cume fica centrado horizontalmente.
- A largura de cada janela é `1/5th` da largura do corpo e a altura é `1/3rd` da altura do corpo. Ficam `1/8th` da altura do corpo abaixo do topo do corpo e estão afastadas de cada lado do corpo por `1/7th` da largura do corpo.
- A largura da porta é `1/5th` da largura do corpo e a altura é `1/2` da altura do corpo; está centrada horizontalmente e a sua base fica alinhada com a base da casa.
- O raio da maçaneta é `1/10th` da largura da porta. Há um espaço de `1/10th` da largura da porta entre a maçaneta e o bordo direito da porta. A maçaneta fica centrada verticalmente na porta.

### Verifica se funciona!

Experimenta alterar as variáveis `houseWidth` e `houseHeight`. Se o teu código estiver correto, a casa muda de tamanho e continua centrada e assente na relva.
