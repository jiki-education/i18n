---
title: "Adicionar parâmetros de entrada às funções"
description: "Adicionar fendas de entrada às tuas próprias funções, para poderem fazer coisas diferentes consoante os valores que recebem."
en_md5: f70d737888fcbda3306196ff069eb2f1
---

As funções que criaste até agora fazem sempre exatamente a mesma coisa de cada vez. A função `turnAround` (dar a volta) vira sempre duas vezes para a esquerda. A função `shootIfAlienAbove` (dispara se houver um alienígena por cima) verifica sempre e dispara.

Mas pensa nas funções que tens estado a usar ao longo do curso e em como fazem coisas diferentes consoante os valores que recebem. A função Rectangle recebe uma posição à esquerda, uma posição ao topo, uma largura e uma altura como parâmetros de entrada e, depois, desenha um retângulo diferente consoante o que lhe indicas.

Agora também vamos adicionar fendas de entrada às tuas próprias funções.

Para fazeres isto, precisas de saber duas coisas. A primeira é como é que isto aparece na prática, ou seja, o que tens de escrever, a segunda é o que está de facto a acontecer.

A primeira parte é bastante simples. Basta adicionares uns parênteses normais e, a seguir, os nomes dos parâmetros de entrada que quiseres.

Imagina, então, que estamos a criar uma função que deve disparar muitas vezes. Vamos chamar-lhe `shootMany` (disparar muitas vezes).

Escrevê-la-íamos assim:

```javascript
function shootMany(numShots) {
  // ...
}
```

Quando quiseres usar esta função, chama-a com o número de disparos que quiseres:

```javascript
shootMany(5)
shootMany(2)
```

Agora vem a parte mais importante. Quando o código corre, o que quer que passes para essa fenda, `5` ou `2`, o mini-Jiki com o chapéu, que está lá dentro da função, pega nesse valor e coloca-o numa caixa chamada `numShots` (número de disparos). Depois, arruma essa caixa nas prateleiras dentro da função para poderes usá-la no código da função.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-box.webp"
  alt="Mini-Jiki dentro da máquina shootMany a colocar o valor de entrada numa caixa com a etiqueta numShots"
  width="500"
  height="376"
/>

Vou repetir.

Quando escrevemos `shootMany(5)` para usar a função, o Jiki do lado de fora vai buscar o `5` e coloca-o na fenda de entrada da função `shootMany`. Dentro da máquina, o mini-Jiki tira o `5` da fenda e coloca-o numa caixa chamada `numShots`, porque foi esse o nome que deste a essa fenda de entrada. Depois, arruma essa caixa nas prateleiras dentro da função, dentro da máquina.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/numshots-on-shelf.webp"
  alt="Mini-Jiki a colocar a caixa numShots nas prateleiras dentro da máquina shootMany"
  width="500"
  height="302"
/>

E depois, dentro da função, podes usar a caixa `numShots` exatamente como usarias qualquer outra caixa. O nome `numShots` não tem nada de especial. Podíamos ter-lhe dado qualquer outro nome. É apenas uma instrução para o mini-Jiki criar sempre uma caixa com essa etiqueta dentro da função e colocar, dentro dessa caixa, o que quer que seja passado para essa fenda.

E, assim que tiveres um valor dentro dessa caixa, podes fazer tudo o que costumas fazer com caixas. Podes usar a caixa `numShots` como parte de um ciclo repeat para disparar o número certo de vezes. E também podes ter mais do que um parâmetro de entrada. Basta separá-los com vírgulas. Por isso, se tivermos uma função chamada `drawStar` (desenhar estrela) que desenha uma estrela com base na posição do canto superior esquerdo, escreverias assim:

```javascript
function drawStar(left, top) {
  // ...
}
```

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-two-slots.webp"
  alt="A máquina drawStar com duas fendas de entrada, a receber dois valores separados"
  width="453"
  height="400"
/>

E depois, quando a função é chamada, o mini-Jiki guarda os valores que são passados para os parâmetros de entrada em caixas com os nomes `left` (esquerda) e `top` (topo) e, em seguida, arruma essas caixas nas prateleiras dentro da função.

<img
  class="concept-image"
  src="/static/images/concept-assets/creating-functions-with-inputs/draw-star-boxes-shelf.webp"
  alt="Mini-Jiki a guardar os dois valores de entrada em caixas com as etiquetas left e top nas prateleiras dentro da máquina drawStar"
  width="431"
  height="400"
/>
