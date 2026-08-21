---
title: "Adicionar entradas às funções"
description: "Adicionar fendas de entrada às suas próprias funções, para que possam fazer coisas diferentes dependendo dos valores que recebem."
en_md5: f70d737888fcbda3306196ff069eb2f1
---

As funções que você criou até agora fazem sempre exatamente a mesma coisa toda vez. A função `turnAround` (dar a volta) vira sempre duas vezes para a esquerda. A função `shootIfAlienAbove` (dispara se houver um alienígena por cima) verifica sempre e dispara.

Mas pense nas funções que você vem usando ao longo do curso e em como elas fazem coisas diferentes dependendo dos valores que recebem. A função Rectangle recebe uma posição à esquerda, uma posição ao topo, uma largura e uma altura como entradas e, depois, desenha um retângulo diferente dependendo do que você indica para ela.

Agora também vamos adicionar fendas de entrada às suas próprias funções.

Para fazer isso, você precisa saber duas coisas. A primeira é como isso aparece na prática, ou seja, o que você precisa escrever, a segunda é o que está de fato acontecendo.

A primeira parte é bem simples. Basta adicionar uns parênteses normais e, em seguida, os nomes das entradas que você quiser.

Imagine, então, que estamos criando uma função que deve disparar muitas vezes. Vamos chamá-la de `shootMany` (disparar muitas vezes).

Escreveríamos ela assim:

```javascript
function shootMany(numShots) {
  // ...
}
```

Quando você quiser usar esta função, chame-a com o número de disparos que quiser:

```javascript
shootMany(5)
shootMany(2)
```

Agora vem a parte mais importante. Quando o código roda, seja o que for que você passe para essa fenda, `5` ou `2`, o mini-Jiki de chapéu, que está lá dentro da função, pega esse valor e o coloca numa caixa chamada `numShots` (número de disparos). Depois, guarda essa caixa nas prateleiras dentro da função para você poder usá-la no código da função.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-box.webp"
  alt="Mini-Jiki dentro da máquina shootMany colocando o valor de entrada numa caixa com a etiqueta numShots"
  width="500"
  height="376"
/>

Vou repetir.

Quando escrevemos `shootMany(5)` para usar a função, o Jiki do lado de fora pega o `5` e o coloca na fenda de entrada da função `shootMany`. Dentro da máquina, o mini-Jiki tira o `5` da fenda e o coloca numa caixa chamada `numShots`, porque foi esse o nome que você deu para essa fenda de entrada. Depois, guarda essa caixa nas prateleiras dentro da função, dentro da máquina.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-on-shelf.webp"
  alt="Mini-Jiki colocando a caixa numShots nas prateleiras dentro da máquina shootMany"
  width="500"
  height="302"
/>

E depois, dentro da função, você pode usar a caixa `numShots` exatamente como usaria qualquer outra caixa. O nome `numShots` não tem nada de especial. Poderíamos ter dado qualquer outro nome para ela. É apenas uma instrução para o mini-Jiki criar sempre uma caixa com essa etiqueta dentro da função e colocar, dentro dessa caixa, o que quer que seja passado para essa fenda.

E, assim que você tiver um valor dentro dessa caixa, pode fazer tudo o que costuma fazer com caixas. Você pode usar a caixa `numShots` como parte de um laço repeat para disparar o número certo de vezes. E também pode ter mais de uma entrada. Basta separá-las com vírgulas. Então, se tivermos uma função chamada `drawStar` (desenhar estrela) que desenha uma estrela com base na posição do canto superior esquerdo, você escreveria assim:

```javascript
function drawStar(left, top) {
  // ...
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-two-slots.webp"
  alt="A máquina drawStar com duas fendas de entrada, recebendo dois valores separados"
  width="453"
  height="400"
/>

E depois, quando a função é chamada, o mini-Jiki guarda os valores que são passados para as entradas em caixas com os nomes `left` (esquerda) e `top` (topo) e, em seguida, coloca essas caixas nas prateleiras dentro da função.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-boxes-shelf.webp"
  alt="Mini-Jiki guardando os dois valores de entrada em caixas com as etiquetas left e top nas prateleiras dentro da máquina drawStar"
  width="431"
  height="400"
/>
