---
title: "Escrever as tuas próprias funções"
description: "Usar a palavra-chave function para construir as tuas próprias máquinas que o Jiki pode pôr nas prateleiras dele e reutilizar."
en_md5: 93286a30a373b5604b60b3c109ad00a3
---

Até agora, tens estado a usar funções que foram construídas para ti, funções como `circle`, `rectangle`, `moveRight`, `shoot`. Todas elas são funções que foram criadas e colocadas nas prateleiras do Jiki.

Mas agora chegou a altura de começares a criar as tuas próprias funções.

Para te mostrar como se faz isto, vamos ver como construir uma função nova para o labirinto, chamada `walk5` (andar cinco).

Esta função vai sempre fazer a personagem avançar cinco passos. É verdade que não é a função mais útil do mundo, mas é uma função simples e boa para começarmos.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/walk-grid.webp"
  alt="A personagem na grelha do labirinto, pronta para avançar cinco passos"
  width="500"
  height="314"
/>

Portanto, se eu te pedisse para escreveres código para fazer a personagem avançar cinco passos, podias escrever `move` (avançar) cinco vezes, ou podias usar um ciclo repeat. Neste exemplo, só para manter as coisas simples, vamos usar a abordagem de escrever `move` cinco vezes seguidas.

```javascript
move()
move()
move()
move()
move()
```

Portanto, é isto que queremos que esteja dentro da nossa função.

Agora, acrescenta uma linha por baixo que diga ao Jiki para usar esta função. Já viste isto muitas vezes.

E depois o nosso trabalho vai ser envolver estas primeiras cinco linhas numa função, para que, quando o Jiki usar `walk5`, sejam essas primeiras cinco linhas de código que correm.

Para transformar estas cinco linhas numa função, estas cinco chamadas a `move` numa função, precisamos de usar uma palavra-chave nova, que é a palavra-chave `function`.

Quando usamos a palavra-chave `function`, temos de fazer duas coisas. Primeiro, indicar o nome da função. Neste caso, é `walk5`. Segundo, usar chavetas (`{}`) para envolver algum código que diga: «Isto é o que deves fazer dentro da função.»

Portanto, podemos acrescentar isto ao nosso código. Agora estamos a dizer ao Jiki para criar uma função chamada `walk5`. Depois, quando `walk5` for usada, ele deve correr estas cinco linhas de código.

```javascript
function walk5() {
  move()
  move()
  move()
  move()
  move()
}
```

Quando o Jiki vê a palavra-chave `function`, vai construir uma função nova, escrever essas instruções num quadro dentro da máquina e, a seguir, pôr uma etiqueta na máquina com o nome `walk5`. Depois, coloca essa função nas prateleiras, ao lado de todas as outras que lá estão.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions/jiki-machine-whiteboard.webp"
  alt="O Jiki ao lado de uma máquina nova com um quadro lá dentro para escrever as instruções da função"
  width="500"
  height="396"
/>

Agora, não há nada de especial nesta função que criaste, em comparação com as funções incorporadas (_built-in_ em inglês). Elas ficam todas umas ao lado das outras nas prateleiras dele.

E quando usas a função, quando escreves `walk5()`, o Jiki vai simplesmente buscar a máquina às prateleiras e usá-la exatamente da mesma forma que faz com qualquer outra função.

Podes imaginar que cada máquina tem um mini Jiki a viver lá dentro. O mini Jiki anda sempre com um chapéu fixe. E esse mini Jiki funciona exatamente da mesma forma que o Jiki normal cá fora, seguindo instruções da mesma maneira.

Uma coisa essencial a perceber aqui é que, quando o Jiki cria a função, ele não chega a correr o código. Está apenas a escrever esse código para o usar mais tarde.

Quando escreves a palavra-chave `function`, a personagem no labirinto não se move nesta altura.

O Jiki construiu a máquina e colocou-a nas prateleiras. Só quando lhe disseres para usar a máquina, escrevendo `walk5()`, é que isso acontece realmente.
